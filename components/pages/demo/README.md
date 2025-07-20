# Demo 組件結構

本目錄包含了 BitoDebt 債權認購平台的所有組件，按照 Client Component 和 Server Component 進行了合理的分離。

## 文件結構

```
components/demo/
├── client/                     # 客戶端組件 (需要交互)
│   ├── HeaderSection.tsx      # 頁面標題和按鈕
│   ├── ProductListSection.tsx # 產品列表和分頁
│   ├── FAQSection.tsx         # FAQ 摺疊區塊
│   └── TestimonialsSection.tsx # 用戶回饋輪播
├── server/                     # 服務端組件 (靜態內容)
│   ├── ChartSection.tsx       # 圖表展示區域
│   └── MediaReviewsSection.tsx # 媒體好評展示
├── types.ts                    # TypeScript 類型定義
├── constants.ts                # 常量數據
└── README.md                   # 文檔說明
```

## 組件分類原則

### Client Components (`'use client'`)

包含需要客戶端交互的組件：

- **HeaderSection**: 按鈕點擊事件
- **ProductListSection**: Tabs 切換、分頁
- **FAQSection**: Accordion 摺疊/展開
- **TestimonialsSection**: 輪播控制

### Server Components (無 `'use client'`)

包含靜態內容的組件：

- **ChartSection**: 靜態圖表和文字內容
- **MediaReviewsSection**: 媒體標誌展示

## 組件使用

### 基本使用

```tsx
import HeaderSection from "@/components/demo/client/HeaderSection";
import ChartSection from "@/components/demo/server/ChartSection";

export default function MyPage() {
  return (
    <div>
      <HeaderSection />
      <ChartSection />
    </div>
  );
}
```

### 傳遞自定義數據

```tsx
import ProductListSection from "@/components/demo/client/ProductListSection";
import { PRODUCTS } from "@/components/demo/constants";

export default function MyPage() {
  const customProducts = [...PRODUCTS /* 自定義產品 */];

  return <ProductListSection products={customProducts} />;
}
```

## 數據管理

### 常量數據

- `PRODUCTS`: 產品列表數據
- `FAQ_DATA`: FAQ 問答數據
- `TESTIMONIALS`: 用戶評價數據
- `MEDIA_LOGOS`: 媒體標誌數據
- `CHART_BARS`: 圖表柱狀數據
- `CHART_Y_AXIS_LABELS`: Y 軸標籤數據

### 類型定義

- `Product`: 產品數據結構
- `FAQ`: FAQ 問答結構
- `Testimonial`: 用戶評價結構
- `MediaLogo`: 媒體標誌結構
- `ChartBar`: 圖表柱狀結構

## 性能優化

### Server Components 優勢

- 在服務器端渲染，減少客戶端 JavaScript 包大小
- 更好的 SEO 支持
- 更快的首次加載時間

### Client Components 優勢

- 支援客戶端交互
- 狀態管理
- 事件處理

## 自定義和擴展

### 添加新的 Client Component

1. 在 `client/` 目錄創建新組件
2. 添加 `'use client'` 指令
3. 實現所需的交互邏輯
4. 在主頁面導入使用

### 添加新的 Server Component

1. 在 `server/` 目錄創建新組件
2. 不需要 `'use client'` 指令
3. 專注於靜態內容渲染
4. 在主頁面導入使用

### 修改數據結構

1. 更新 `types.ts` 中的類型定義
2. 修改 `constants.ts` 中的數據
3. 確保所有使用該數據的組件都能正確處理

## 最佳實踐

1. **組件職責單一**: 每個組件只負責一個特定功能
2. **數據驅動**: 使用 props 傳遞數據，保持組件的可復用性
3. **類型安全**: 使用 TypeScript 確保類型安全
4. **性能優先**: 合理使用 Client/Server Components
5. **可維護性**: 保持代碼結構清晰，注釋完整

## 技術棧

- **React 18+**: 組件框架
- **Next.js 13+**: 應用框架 (App Router)
- **Material-UI (MUI)**: UI 組件庫
- **TypeScript**: 類型安全
- **Emotion**: CSS-in-JS 樣式系統
