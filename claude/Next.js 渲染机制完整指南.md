# Next.js 渲染机制完整指南

> 本文档详细介绍 Next.js 的渲染机制，包括 `connection()`、Suspense、Cache Components 等核心概念。

---

## 目录

1. [Next.js `connection()` 函数](#1-nextjs-connection-函数)
2. [React Suspense 完整指南](#2-react-suspense-完整指南)
3. [Suspense 在不同组件中的触发方式](#3-suspense-在不同组件中的触发方式)
4. [Cache Components 体系](#4-cache-components-体系)
5. [传统渲染机制](#5-传统渲染机制)
6. [实战对比与最佳实践](#6-实战对比与最佳实践)

---

## 1. Next.js `connection()` 函数

### 1.1 核心概念

`connection()` 是一个用于告诉 Next.js **等待用户请求**后再进行渲染的函数。它强制组件进行**动态渲染**而非静态预渲染。

### 1.2 函数签名

```typescript
import { connection } from 'next/server'

function connection(): Promise<void>
```

- **参数**：无
- **返回值**：返回 `void` Promise（不需要使用返回值）
- **版本要求**：Next.js 15.0.0+（取代已废弃的 `unstable_noStore()`）

### 1.3 使用情境

适合以下场景：

1. **需要运行时动态数据**
   - 使用 `Math.random()` 产生随机数
   - 使用 `new Date()` 获取当前时间
   - 其他每次请求都需要变化的数据

2. **未使用其他 Dynamic APIs 的组件**
   - 当组件没有使用 `cookies()`、`headers()` 等 Dynamic APIs
   - 但仍需要动态渲染时

### 1.4 基本示例

```typescript
import { connection } from 'next/server'

export default async function Page() {
  await connection()

  // 以下所有代码都会被动态渲染，不会被预渲染
  const rand = Math.random()
  const currentTime = new Date()

  return (
    <div>
      <p>随机数: {rand}</p>
      <p>当前时间: {currentTime.toISOString()}</p>
    </div>
  )
}
```

### 1.5 搭配 Suspense 使用

```typescript
import { Suspense } from 'react'
import { connection } from 'next/server'
import { CircularProgress } from '@mui/material'

export default function Page() {
  return (
    <div>
      <h1>我的页面</h1>
      <Suspense fallback={<CircularProgress />}>
        <DynamicContent />
      </Suspense>
    </div>
  )
}

async function DynamicContent() {
  // 这里会触发 Suspense，显示 fallback
  await connection()

  const randomData = Math.random()
  const timestamp = new Date().toLocaleString('zh-TW')

  return (
    <div>
      <p>随机数: {randomData}</p>
      <p>时间: {timestamp}</p>
    </div>
  )
}
```

### 1.6 重要提示

- **影响范围**：在 `await connection()` 之后的所有代码都会被排除在预渲染之外
- **使用时机**：只在需要动态渲染且没有使用其他 Dynamic APIs 时才需要

---

## 2. React Suspense 完整指南

### 2.1 核心概念

`<Suspense>` 是一个 React 组件，用于**在子组件加载时显示备用 UI**（如加载动画）。

### 2.2 基本语法

```jsx
import { Suspense } from 'react'

<Suspense fallback={<加载中的UI />}>
  <需要加载的组件 />
</Suspense>
```

### 2.3 Props 说明

| Prop | 类型 | 说明 |
|------|------|------|
| `children` | React Node | 你想要渲染的实际内容（可能需要加载时间） |
| `fallback` | React Node | 加载期间显示的替代 UI（通常是 loading 动画或骨架屏） |

### 2.4 使用场景

#### 场景 1：基础加载状态

```jsx
import { Suspense } from 'react'
import { CircularProgress } from '@mui/material'

export default function Page() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Albums artistId="123" />
    </Suspense>
  )
}

async function Albums({ artistId }) {
  const albums = await fetchAlbums(artistId)
  return <div>{/* 渲染专辑列表 */}</div>
}
```

#### 场景 2：协调内容显示

**多个组件一起显示**（即使只有一个在加载）：

```jsx
<Suspense fallback={<BigSpinner />}>
  <Biography />      {/* 如果这个加载完成 */}
  <Albums />         {/* 但这个还在加载 */}
  {/* 两个都会等到全部完成后一起显示 */}
</Suspense>
```

#### 场景 3：渐进式加载（嵌套 Suspense）

```jsx
<Suspense fallback={<BigSpinner />}>
  <Biography />  {/* 快速加载 */}

  {/* 嵌套的 Suspense - 独立加载 */}
  <Suspense fallback={<AlbumsPlaceholder />}>
    <Albums />  {/* 需要更多时间 */}
  </Suspense>
</Suspense>
```

**流程**：
1. 先显示 `<BigSpinner />`
2. Biography 加载完成后显示
3. Albums 继续显示 `<AlbumsPlaceholder />`
4. Albums 加载完成后替换占位符

#### 场景 4：搭配 `useDeferredValue` - 显示旧内容

```jsx
import { useDeferredValue, Suspense } from 'react'

function SearchPage({ query }) {
  const deferredQuery = useDeferredValue(query)
  const isStale = query !== deferredQuery

  return (
    <Suspense fallback={<h2>加载中...</h2>}>
      <div style={{ opacity: isStale ? 0.5 : 1 }}>
        <SearchResults query={deferredQuery} />
      </div>
    </Suspense>
  )
}
```

**效果**：输入搜索时，旧结果变淡但保留，避免闪烁。

#### 场景 5：搭配 `useTransition` - 防止不必要的 fallback

```jsx
'use client'

import { useState, useTransition, Suspense } from 'react'
import { Button } from '@mui/material'

export default function TabsDemo() {
  const [tab, setTab] = useState('about')
  const [isPending, startTransition] = useTransition()

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab)  // 这个状态更新不会触发 fallback
    })
  }

  return (
    <>
      <Button onClick={() => selectTab('about')} disabled={isPending}>
        关于
      </Button>
      <Button onClick={() => selectTab('posts')} disabled={isPending}>
        文章 {isPending && '加载中...'}
      </Button>

      <Suspense fallback={<Loading />}>
        {tab === 'about' && <AboutTab />}
        {tab === 'posts' && <PostsTab />}
      </Suspense>
    </>
  )
}
```

**关键差异**：
- **不用 `startTransition`**：切换 tab 时会显示 `<Loading />`
- **使用 `startTransition`**：旧 tab 保留，按钮显示 "加载中..."

#### 场景 6：路由导航时重置 Suspense

使用 **`key` prop** 让不同页面独立加载：

```jsx
<Suspense fallback={<Loading />}>
  <ProfilePage key={userId} />  {/* 不同 userId 会触发新的 Suspense */}
</Suspense>
```

### 2.5 什么会触发 Suspense？

#### ✅ 支持的数据源

1. 使用 `lazy()` 懒加载的组件
2. 使用 `use()` 读取 Promise 的组件
3. Next.js 的 `async` Server Components
4. Relay 等支持 Suspense 的框架

#### ❌ 不支持的

- `useEffect` 或事件处理器中的数据获取
- 普通的 `fetch()` 调用（除非在 Server Component 中）

```jsx
// ❌ 不会触发 Suspense
function Component() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/data').then(setData)
  }, [])

  return <div>{data}</div>
}

// ✅ 会触发 Suspense（Server Component）
async function Component() {
  const data = await fetch('/api/data')
  return <div>{data}</div>
}
```

### 2.6 最佳实践

#### 1. 合理的粒度

```jsx
// ❌ 太细粒度 - 体验不好
<Suspense fallback={<Spinner />}>
  <h1>标题</h1>
</Suspense>
<Suspense fallback={<Spinner />}>
  <p>段落</p>
</Suspense>

// ✅ 合适的粒度
<Suspense fallback={<PageSkeleton />}>
  <h1>标题</h1>
  <p>段落</p>
  <Content />
</Suspense>
```

#### 2. 使用骨架屏而非 spinner

```jsx
<Suspense fallback={
  <Box>
    <Skeleton variant="text" width="60%" height={40} />
    <Skeleton variant="rectangular" height={200} />
    <Skeleton variant="text" width="80%" />
  </Box>
}>
  <Article />
</Suspense>
```

---

## 3. Suspense 在不同组件中的触发方式

### 3.1 Server Component vs Client Component

| 特性 | Server Component | Client Component |
|------|-----------------|------------------|
| **async/await** | ✅ 自动触发 Suspense | ❌ 不支持 async component |
| **lazy()** | ❌ 不需要（已在服务器） | ✅ 触发 Suspense |
| **use()** | ✅ 触发 Suspense | ✅ 触发 Suspense |
| **useEffect fetch** | ❌ 不能使用 hooks | ❌ 不触发 Suspense |

### 3.2 Server Component 方式

```jsx
// app/users/page.tsx (默认是 Server Component)
import { Suspense } from 'react'

async function UserList() {
  const users = await fetch('/api/users')  // ✅ 触发 Suspense
  return <div>{users.map(...)}</div>
}

export default function UsersPage() {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <UserList />
    </Suspense>
  )
}
```

### 3.3 Client Component 方式（使用 lazy）

```jsx
// app/users/page.tsx
'use client'

import { Suspense, lazy } from 'react'

// 动态导入会触发 Suspense
const UserList = lazy(() => import('@/components/UserList'))

export default function UsersPage() {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <UserList />  {/* ✅ 触发 Suspense */}
    </Suspense>
  )
}
```

### 3.4 Client Component 方式（使用 use）

```jsx
// app/users/page.tsx
'use client'

import { Suspense, use } from 'react'

function UserList({ usersPromise }) {
  const users = use(usersPromise)  // ✅ 触发 Suspense
  return <div>{users.map(...)}</div>
}

export default function UsersPage() {
  // Promise 在外部创建
  const usersPromise = fetch('/api/users').then(r => r.json())

  return (
    <Suspense fallback={<div>加载中...</div>}>
      <UserList usersPromise={usersPromise} />
    </Suspense>
  )
}
```

### 3.5 触发方式总结

| 环境 | 触发方式 | 示例 |
|------|---------|------|
| **Server Component** | `async/await` | `async function Comp() { await fetch() }` |
| **Client Component** | `lazy()` | `const Comp = lazy(() => import())` |
| **Client Component** | `use()` | `const data = use(promise)` |
| **Client Component** | 支持 Suspense 的库 | `useSWR(..., { suspense: true })` |
| **不触发** | `useEffect` + fetch | ❌ 传统模式 |

---

## 4. Cache Components 体系

### 4.1 核心概念

Cache Components 是 Next.js 的**部分预渲染（Partial Prerendering, PPR）**功能，将路由默认视为动态，同时允许标记特定数据为可缓存。

### 4.2 三位一体的系统

| 工具 | 用途 | 处理的数据类型 |
|------|------|--------------|
| **`use cache` directive** | 缓存组件或函数的结果 | 动态但可缓存的数据（如 CMS 内容） |
| **Suspense for dynamic data** | 流式传输动态内容 | 每次请求都变化的数据（如 `fetch`） |
| **Suspense for runtime data** | 隔离用户特定数据 | 运行时数据（如 `cookies()`, `headers()`） |

### 4.3 启用配置

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  cacheComponents: true,  // 启用 Cache Components
}

export default nextConfig
```

### 4.4 `use cache` Directive 详解

#### 基本用法 1：缓存整个组件

```typescript
import { cacheLife } from 'next/cache'

async function BlogPosts() {
  'use cache'  // 标记这个组件可缓存
  cacheLife('hours')  // 设置缓存时间

  const posts = await fetch('https://cms.example.com/posts')
  const data = await posts.json()

  return (
    <div>
      {data.map(post => <article key={post.id}>...</article>)}
    </div>
  )
}

// 使用时仍需 Suspense 包裹
export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <BlogPosts />
    </Suspense>
  )
}
```

#### 基本用法 2：缓存函数

```typescript
import { cacheLife } from 'next/cache'

async function getProducts() {
  'use cache'
  cacheLife('minutes')

  const products = await db.product.findMany()
  return products
}

// 在组件中使用
async function ProductList() {
  const products = await getProducts()  // 结果会被缓存
  return <div>{products.map(...)}</div>
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductList />
    </Suspense>
  )
}
```

### 4.5 `cacheLife` 配置

#### 预设值配置表

Next.js 提供以下预设的缓存配置文件：

| 预设 | stale | revalidate | expire | 适用场景 |
|------|-------|-----------|--------|---------|
| `seconds` | 30秒 | 1秒 | 1分钟 | 实时数据（股价、比分） |
| `minutes` | 5分钟 | 1分钟 | 1小时 | 频繁更新（社交动态、新闻） |
| `hours` | 5分钟 | 1小时 | 1天 | 每日多次更新（库存、天气） |
| `days` | 5分钟 | 1天 | 1周 | 每日更新（博客文章） |
| `weeks` | 5分钟 | 1周 | 30天 | 每周更新（播客、通讯） |
| `max` | 5分钟 | 30天 | 1年 | 很少变化（法律页面、归档内容） |

**参数说明**：
- **`stale`**：客户端可使用缓存数据的时长，无需检查服务器
- **`revalidate`**：服务器后台刷新内容的频率
- **`expire`**：无流量情况下，服务器必须重新生成内容的最长间隔

#### 使用方式

```typescript
import { cacheLife } from 'next/cache'

// 使用预设值
async function BlogPosts() {
  'use cache'
  cacheLife('days')  // 使用 days 预设：每天更新
  const posts = await fetch('https://cms.example.com/posts')
  return <div>{posts.map(...)}</div>
}

// 自定义缓存策略
async function CustomCachedComponent() {
  'use cache'
  cacheLife({
    stale: 60,       // 客户端缓存 60 秒
    revalidate: 300, // 服务器每 5 分钟重新验证
    expire: 3600     // 最多 1 小时后必须重新生成
  })
  const data = await fetch('...')
  return <div>{data}</div>
}
```

### 4.6 工作流程示例

```typescript
// 缓存的组件
async function CachedPosts() {
  'use cache'
  cacheLife('hours')

  const posts = await fetch('https://cms.com/posts')
  return <div>{/* 文章列表 */}</div>
}
```

**首次请求**：
```
用户访问 → 静态 header 立即返回 → Suspense fallback 显示
         → 后台执行 CachedPosts → 缓存结果
         → 流式传输真实内容
```

**后续请求（缓存期内）**：
```
用户访问 → 静态 header 立即返回
         → 从缓存读取 CachedPosts → 快速流式传输（无需重新获取数据）
```

### 4.7 Cache Invalidation（缓存失效）

```typescript
import { cacheLife, cacheTag } from 'next/cache'

// 定义缓存标签
async function getProduct(id: string) {
  'use cache'
  cacheLife('hours')
  cacheTag('product', `product-${id}`)  // 添加标签

  const product = await db.product.findUnique({ where: { id } })
  return product
}

// 在 API 路由中手动刷新
// app/api/products/[id]/revalidate/route.ts
import { revalidateTag } from 'next/cache'

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  await db.product.update({ where: { id: params.id }, data: {...} })

  revalidateTag(`product-${params.id}`)  // 清除特定产品的缓存

  return Response.json({ revalidated: true })
}
```

### 4.8 启用 `cacheComponents: true` 后的渲染行为

#### 默认行为

| 内容类型 | 渲染模式 | 说明 |
|---------|---------|------|
| **静态 JSX** | ✅ 仍然静态预渲染 | 纯 HTML 内容立即返回 |
| **未标记 `use cache` 的异步组件** | ⚠️ 动态渲染 | 每次请求都执行 |
| **标记 `use cache` 的组件** | 💾 缓存渲染 | 首次执行后缓存 |

#### 完整示例

```typescript
export default function Page() {
  return (
    <div>
      {/* 1️⃣ 静态内容：预渲染，无需 Suspense */}
      <header>
        <h1>页面标题</h1>
      </header>

      {/* 2️⃣ 缓存的动态内容：use cache + Suspense */}
      <Suspense fallback={<Skeleton />}>
        <CachedContent />  {/* 'use cache' + cacheLife() */}
      </Suspense>

      {/* 3️⃣ 实时动态内容：仅 Suspense，不缓存 */}
      <Suspense fallback={<Skeleton />}>
        <RealtimeContent />  {/* 无 'use cache' */}
      </Suspense>

      {/* 4️⃣ 用户特定内容：Suspense + runtime APIs */}
      <Suspense fallback={<Skeleton />}>
        <UserSpecificContent />  {/* 使用 cookies() 等 */}
      </Suspense>
    </div>
  )
}
```

#### 渲染模式对比表

| 组件类型 | `use cache` | Suspense | 缓存策略 | 示例 |
|---------|-------------|----------|---------|------|
| **静态内容** | ❌ | ❌ | 预渲染 | 页面标题、导航 |
| **可缓存动态内容** | ✅ | ✅ | `cacheLife()` | CMS 内容、产品列表 |
| **实时动态内容** | ❌ | ✅ | 无缓存 | 库存、访客计数 |
| **用户特定内容** | ❌ | ✅ | 无缓存 | 购物车、个人资料 |

---

## 5. 传统渲染机制

### 5.1 核心原则：静态优先（Static First）

Next.js 默认会**尽可能静态化**，除非检测到动态 API 的使用。

### 5.2 渲染模式的自动判断

```
页面组件
  ↓
检测是否使用动态 API？
  ↓
  ├─ 是 → 动态渲染 (Dynamic Rendering)
  └─ 否 → 静态渲染 (Static Rendering)
```

### 5.3 什么会触发动态渲染？

| API | 说明 | 示例 |
|-----|------|------|
| `cookies()` | 读取 Cookie | `const token = cookies().get('auth')` |
| `headers()` | 读取请求头 | `const ua = headers().get('user-agent')` |
| `searchParams` | 动态路由参数 | `function Page({ searchParams })` |
| `fetch(..., { cache: 'no-store' })` | 禁用缓存的 fetch | `fetch(url, { cache: 'no-store' })` |
| `fetch(..., { next: { revalidate: 0 } })` | 每次重新验证 | `fetch(url, { next: { revalidate: 0 } })` |
| `export const dynamic = 'force-dynamic'` | 强制动态 | 路由段配置 |

### 5.4 场景 1：完全静态渲染

```typescript
// app/about/page.tsx
export default async function AboutPage() {
  // 使用默认缓存的 fetch
  const data = await fetch('https://api.example.com/about')
  const content = await data.json()

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </div>
  )
}
```

#### 构建输出

```
Route (app)                              Size     First Load JS
┌ ○ /about                              1.2 kB         87.3 kB

○  (Static)  prerendered as static content
```

#### 工作流程

```
构建时 (npm run build)
  ↓
执行 fetch('https://api.example.com/about')
  ↓
生成静态 HTML 文件
  ↓
保存到 .next/server/app/about.html

用户请求 /about
  ↓
直接返回预生成的 HTML（超快！）
  ↓
不再执行 fetch（除非重新构建）
```

### 5.5 场景 2：动态渲染（使用动态 API）

```typescript
// app/dashboard/page.tsx
import { cookies } from 'next/headers'

export default async function DashboardPage() {
  // 使用 cookies() 触发动态渲染
  const token = cookies().get('auth-token')

  const user = await fetch('https://api.example.com/user', {
    headers: { Authorization: `Bearer ${token?.value}` }
  })

  return <div>Welcome {user.name}</div>
}
```

#### 构建输出

```
Route (app)                              Size     First Load JS
┌ ƒ /dashboard                          2.1 kB         89.2 kB

ƒ  (Dynamic)  server-rendered on demand
```

#### 工作流程

```
构建时 (npm run build)
  ↓
检测到 cookies() API
  ↓
标记为动态路由
  ↓
不生成静态 HTML

用户请求 /dashboard
  ↓
服务器执行组件代码
  ↓
读取 cookies
  ↓
执行 fetch
  ↓
生成 HTML 返回给用户
  ↓
每次请求都重复此流程
```

### 5.6 场景 3：ISR（Incremental Static Regeneration）

```typescript
// app/blog/page.tsx
export default async function BlogPage() {
  const posts = await fetch('https://api.example.com/posts', {
    next: { revalidate: 60 }  // 60 秒后重新验证
  })
  const data = await posts.json()

  return (
    <div>
      {data.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  )
}
```

#### 工作流程（Stale-While-Revalidate）

```
构建时
  ↓
执行 fetch 并生成静态 HTML
  ↓
保存到缓存

首次请求（0秒）
  ↓
返回缓存的 HTML ✅

第二次请求（30秒后）
  ↓
返回缓存的 HTML ✅（仍在 60 秒内）

第三次请求（70秒后）
  ↓
返回缓存的 HTML ✅（先返回旧内容）
  ↓
后台重新执行 fetch
  ↓
更新缓存

第四次请求（80秒后）
  ↓
返回更新后的新 HTML ✅
```

### 5.7 路由段配置

#### 基本示例

```typescript
// 强制动态渲染
export const dynamic = 'force-dynamic'

// 强制静态渲染
export const dynamic = 'force-static'
export const revalidate = 3600  // 每小时重新验证
```

#### 所有配置选项

```typescript
// dynamic - 控制渲染模式
export const dynamic = 'auto' | 'force-dynamic' | 'error' | 'force-static'
// - 'auto': 自动判断（默认）
// - 'force-dynamic': 强制动态渲染
// - 'error': 如果使用动态 API 则抛出错误
// - 'force-static': 强制静态渲染

// revalidate - ISR 重新验证时间（秒）
export const revalidate = false | 0 | number

// fetchCache - 控制 fetch 缓存策略
export const fetchCache =
  'auto' |
  'default-cache' |
  'only-cache' |
  'force-cache' |
  'force-no-store' |
  'default-no-store' |
  'only-no-store'

// runtime - 运行时环境
export const runtime = 'nodejs' | 'edge'

// preferredRegion - 首选部署区域
export const preferredRegion = 'auto' | 'global' | 'home' | string | string[]

// maxDuration - 最大执行时间（秒）
export const maxDuration = number
```

### 5.8 Fetch 缓存机制

#### 默认行为（"auto no cache"）

Next.js 中 fetch 的默认缓存行为取决于环境：

```typescript
// 默认行为（不指定 cache 选项）
fetch('https://api.example.com/data')
```

**具体行为**：
- **开发环境**：每次请求都从远程服务器获取资源
- **构建时（`next build`）**：如果路由会被静态预渲染，则获取一次
- **生产运行时**：如果检测到动态 API（如 `cookies()`），每次请求都获取

#### 显式缓存配置

```typescript
// 1️⃣ 强制缓存（优先使用缓存）
fetch('https://api.example.com/data', { cache: 'force-cache' })

// 2️⃣ 禁用缓存（每次请求都 fetch）
fetch('https://api.example.com/data', { cache: 'no-store' })

// 3️⃣ ISR：定时重新验证
fetch('https://api.example.com/data', {
  next: { revalidate: 3600 }  // 1 小时后重新验证
})

// 4️⃣ 标签重新验证（按需刷新）
fetch('https://api.example.com/data', {
  next: { tags: ['products'] }  // 可通过 revalidateTag('products') 刷新
})
```

**重要提示**：
- 默认行为**不等同于** `force-cache`
- 在静态预渲染的路由中，fetch 会在构建时执行一次
- 在动态路由中，fetch 每次请求都会执行

### 5.9 完整的渲染决策树

```
页面组件
  ↓
是否有 export const dynamic = 'force-dynamic'?
  ├─ 是 → 🔴 动态渲染
  └─ 否 ↓

是否有 export const dynamic = 'force-static'?
  ├─ 是 → 🟢 静态渲染
  └─ 否 ↓

是否使用 cookies(), headers(), searchParams?
  ├─ 是 → 🔴 动态渲染
  └─ 否 ↓

是否有 fetch(..., { cache: 'no-store' })?
  ├─ 是 → 🔴 动态渲染
  └─ 否 ↓

是否有 fetch(..., { next: { revalidate: 0 } })?
  ├─ 是 → 🔴 动态渲染
  └─ 否 ↓

→ 🟢 静态渲染（默认）
```

---

## 6. 实战对比与最佳实践

### 6.1 传统模式 vs. Cache Components

#### 需求：产品页面 = 产品信息（1小时更新） + 库存（实时）

##### 传统模式的局限

```typescript
// ❌ 问题：无法混合不同的缓存策略
export const revalidate = 3600  // 整个页面 1 小时

export default async function ProductPage({ params }) {
  // 产品信息：1 小时更新一次 ✅
  const product = await fetch(`/api/products/${params.id}`)

  // 库存：需要实时，但受限于页面级 revalidate ❌
  const stock = await fetch(`/api/stock/${params.id}`)

  return (
    <div>
      <h1>{product.name}</h1>
      <p>库存: {stock.quantity}</p>  {/* 最多 1 小时延迟 ❌ */}
    </div>
  )
}
```

**传统解决方案**：使用客户端 fetch

```typescript
export const revalidate = 3600

export default async function ProductPage({ params }) {
  const product = await fetch(`/api/products/${params.id}`)

  return (
    <div>
      <h1>{product.name}</h1>
      <ClientStock productId={params.id} />  {/* 客户端组件 */}
    </div>
  )
}

// components/ClientStock.tsx
'use client'
import { useEffect, useState } from 'react'

export default function ClientStock({ productId }) {
  const [stock, setStock] = useState(null)

  useEffect(() => {
    fetch(`/api/stock/${productId}`)
      .then(r => r.json())
      .then(setStock)
  }, [productId])

  return <p>库存: {stock?.quantity ?? '加载中...'}</p>
}
```

**缺点**：
- ❌ SEO 不友好（库存不在 HTML 中）
- ❌ 需要额外的客户端请求
- ❌ 闪烁效果（先显示"加载中"）

##### Cache Components 模式的优势

```typescript
// ✅ 优势：精细的服务器端缓存控制
export default function ProductPage({ params }) {
  return (
    <div>
      {/* 产品信息：1 小时缓存 */}
      <Suspense fallback={<ProductSkeleton />}>
        <CachedProduct productId={params.id} />
      </Suspense>

      {/* 库存：实时数据 */}
      <Suspense fallback={<span>检查库存...</span>}>
        <RealtimeStock productId={params.id} />
      </Suspense>
    </div>
  )
}

async function CachedProduct({ productId }) {
  'use cache'
  cacheLife('hours')  // 1 小时

  const product = await fetch(`/api/products/${productId}`)
  return <h1>{product.name}</h1>
}

async function RealtimeStock({ productId }) {
  // 无 'use cache' - 每次都查询
  const stock = await fetch(`/api/stock/${productId}`)
  return <p>库存: {stock.quantity}</p>
}
```

**优势**：
- ✅ 完全服务器端渲染（SEO 友好）
- ✅ 不同数据源独立缓存策略
- ✅ 流式传输（渐进式显示）

### 6.2 实际应用示例：电商产品页面

```typescript
// app/product/[id]/page.tsx
import { Suspense } from 'react'
import { cacheLife } from 'next/cache'

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div>
      {/* 静态：页面布局 */}
      <header>产品详情</header>

      {/* 缓存：产品信息（CMS 内容，不常变化） */}
      <Suspense fallback={<ProductSkeleton />}>
        <CachedProductInfo productId={params.id} />
      </Suspense>

      {/* 缓存：产品评论（定期更新） */}
      <Suspense fallback={<ReviewsSkeleton />}>
        <CachedReviews productId={params.id} />
      </Suspense>

      {/* 实时：库存状态（实时变化） */}
      <Suspense fallback={<span>检查库存...</span>}>
        <RealtimeStock productId={params.id} />
      </Suspense>

      {/* 实时：购物车（用户特定） */}
      <Suspense fallback={<CartSkeleton />}>
        <UserCart />
      </Suspense>
    </div>
  )
}

// ✅ 使用 cache：产品信息
async function CachedProductInfo({ productId }: { productId: string }) {
  'use cache'
  cacheLife('hours')  // 产品信息不常变，缓存 1 小时

  const product = await db.product.findUnique({ where: { id: productId } })
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
    </div>
  )
}

// ✅ 使用 cache：产品评论
async function CachedReviews({ productId }: { productId: string }) {
  'use cache'
  cacheLife('minutes')  // 评论更新较频繁，缓存 15 分钟

  const reviews = await db.review.findMany({ where: { productId } })
  return <div>{reviews.map(...)}</div>
}

// ❌ 不用 cache：实时库存
async function RealtimeStock({ productId }: { productId: string }) {
  // 不使用 cache - 每次都获取最新库存
  const stock = await db.inventory.getCurrent(productId)
  return <span>剩余 {stock.quantity} 件</span>
}

// ❌ 不用 cache：用户购物车
async function UserCart() {
  // 用户特定数据，不能缓存
  const { userId } = await cookies()
  const cart = await db.cart.findUnique({ where: { userId } })
  return <div>{/* 购物车 */}</div>
}
```

### 6.3 最佳实践总结

#### 1. 选择合适的渲染策略

| 场景 | 推荐方案 | 理由 |
|------|---------|------|
| **纯静态网站** | 传统模式 | 简单，构建时生成 |
| **简单博客** | 传统模式 + ISR | `revalidate` 足够 |
| **电商网站** | Cache Components | 需要精细缓存控制 |
| **仪表板** | Cache Components | 混合多种数据源 |

#### 2. 缓存时间设置指南

根据内容更新频率选择合适的 `cacheLife` 预设值：

```typescript
// 实时数据（股价、比分）
cacheLife('seconds')  // stale: 30秒, revalidate: 1秒

// 频繁更新（社交动态、新闻）
cacheLife('minutes')  // stale: 5分钟, revalidate: 1分钟

// 每日多次更新（产品目录、天气）
cacheLife('hours')    // stale: 5分钟, revalidate: 1小时

// 每日更新（博客文章）
cacheLife('days')     // stale: 5分钟, revalidate: 1天

// 每周更新（播客、通讯）
cacheLife('weeks')    // stale: 5分钟, revalidate: 1周

// 很少变化（公司介绍、关于页面）
cacheLife('max')      // stale: 5分钟, revalidate: 30天

// 实时内容（库存、在线人数）
// 不使用 'use cache' - 每次请求都获取最新数据
```

#### 3. Suspense 边界的粒度控制

```typescript
// ✅ 好：关键内容优先显示
<Suspense fallback={<CoreSkeleton />}>
  <CoreContent />  {/* 核心内容：产品信息 */}

  <Suspense fallback={<SecondarySkeletons />}>
    <Reviews />      {/* 次要内容：评论 */}
    <Related />      {/* 次要内容：推荐 */}
  </Suspense>
</Suspense>

// ❌ 避免：所有内容一起等待
<Suspense fallback={<FullPageSkeleton />}>
  <CoreContent />
  <Reviews />
  <Related />
</Suspense>
```

#### 4. 使用有意义的 Loading 状态

```typescript
// ✅ 好：骨架屏反映真实布局
function ProductCardSkeleton() {
  return (
    <Box sx={{ p: 2 }}>
      <Skeleton variant="rectangular" height={200} />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="60%" />
    </Box>
  )
}

// ❌ 避免：通用 spinner（用户体验差）
function GenericLoading() {
  return <CircularProgress />
}
```

### 6.4 调试技巧

#### 1. 检查构建输出

```bash
npm run build
```

查看符号：
- `○` = 静态生成（Static）
- `ƒ` = 动态渲染（Dynamic）
- `ℇ` = Edge Runtime

#### 2. 查看 Streaming 效果

在浏览器开发者工具的 Network 面板：
1. 选择 HTML 文档请求
2. 查看 "Response" 标签
3. 可以看到内容分批传输

### 6.5 总结对比表

| 特性 | 传统模式 | Cache Components |
|------|---------|-----------------|
| **默认行为** | 静态优先 | 动态优先 |
| **缓存粒度** | 页面级 | 组件级 |
| **混合策略** | ❌ 困难 | ✅ 简单 |
| **配置方式** | `revalidate` | `cacheLife()` |
| **SEO** | ✅ 好 | ✅ 好 |
| **复杂度** | 低 | 中 |
| **灵活性** | 低 | 高 |

---

## 附录：快速参考

### A. 渲染模式决策流程图

```
需求分析
  ↓
内容会变化吗？
  ├─ 否 → 静态渲染
  └─ 是 ↓

更新频率？
  ├─ 很少（天/周） → 静态 + ISR (revalidate)
  ├─ 定期（分钟/小时） → Cache Components (cacheLife)
  └─ 实时 → 动态渲染（无缓存）

是否混合多种更新频率？
  ├─ 否 → 传统模式即可
  └─ 是 → Cache Components
```

### B. API 快速查找

| 需求 | 使用的 API |
|------|-----------|
| 强制动态渲染 | `connection()` 或 `export const dynamic = 'force-dynamic'` |
| 懒加载组件 | `lazy()` |
| 读取 Promise | `use()` |
| 延迟更新 | `useDeferredValue()` |
| 过渡状态 | `useTransition()` |
| 缓存组件 | `'use cache'` + `cacheLife()` |
| 缓存失效 | `cacheTag()` + `revalidateTag()` |
| ISR | `fetch(..., { next: { revalidate: N } })` |

### C. 常见问题

#### Q1: 为什么我的 Suspense 没有触发？

**A**: 确保你的组件是：
- Server Component 使用 `async/await`
- 或使用 `lazy()` 动态导入
- 或使用 `use()` 读取 Promise

#### Q2: 如何避免页面闪烁？

**A**: 使用 `useTransition` 或 `useDeferredValue`

#### Q3: Cache Components 适合我吗？

**A**: 如果你的页面有多种数据更新频率，建议使用。如果内容更新频率一致，传统模式更简单。

#### Q4: 缓存时间如何设置？

**A**: 根据内容更新频率选择预设值：
- 实时数据（秒级）：`seconds`
- 频繁更新（分钟级）：`minutes`
- 每日多次更新：`hours`
- 每日更新：`days`
- 每周更新：`weeks`
- 很少变化：`max`
- 完全实时：不使用 `use cache`

---

## 结语

Next.js 提供了强大而灵活的渲染机制，从传统的静态/动态渲染到现代的 Cache Components，都是为了在性能和实时性之间找到最佳平衡。

**核心原则**：
1. **静态优先**：能静态的尽量静态
2. **渐进增强**：核心内容先显示，次要内容后加载
3. **精细控制**：根据数据特性选择合适的缓存策略
4. **用户体验**：使用 Suspense 和骨架屏提供流畅体验

选择合适的工具，根据实际需求灵活应用，才能构建出高性能的 Next.js 应用。
