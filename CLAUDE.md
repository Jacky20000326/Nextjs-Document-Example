# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Running the Application

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Storybook

- `npm run storybook` - Start Storybook dev server on port 6006
- `npm run build-storybook` - Build Storybook for production

### Testing

- Tests are integrated with Storybook via Vitest addon
- Uses Playwright browser for component testing
- Configuration: vitest.config.ts

## Architecture Overview

### Tech Stack

- **Framework**: Next.js 15.3.4 with App Router
- **React**: 19.0.0
- **Styling**: MUI Material 7.2.0 + Emotion + Tailwind CSS 4.1.11
- **State Management**: Jotai 2.12.5
- **MDX**: @next/mdx 15.4.6 with Rust compiler support
- **Testing**: Storybook 9.0.14 + Vitest 3.2.4 + Playwright

### Project Structure

**Core Application:**

- `app/` - Next.js App Router pages and layouts
  - `app/blog/` - Blog section with MDX support and sidebar layout
  - `app/api/` - API routes (form, hello endpoints)
  - `app/[page]/` - Other page routes (home, demo, about, projects)
- `components/` - Organized by feature
  - `components/common/` - Shared components (Header, Footer, DemoSidebar)
  - `components/pages/` - Page-specific components organized by route

**Configuration:**

- `providers/` - React context providers for theme and layout
- `store/` - Jotai atoms organized by domain (common, jotaiDemo)
- `hooks/` - Custom React hooks (useTheme)
- `theme/` - MUI theme configuration (light/dark themes)
- `mdx-components.tsx` - Global MDX component overrides with MUI styling

### Key Architectural Patterns

**Theming System:**

- Dual theme support (light/dark) via Jotai state management
- Theme state stored in `store/common/atoms.ts` (themeAtom)
- Custom hook `useTheme()` provides theme state and toggle function
- MUI ThemeProvider wraps app in `providers/ThemeProvider.tsx`
- Custom color palettes with warm coffee/cream tones
- Extended MUI palette with custom keys: `sidebar`, custom `background` properties

**Layout Hierarchy:**

- Root layout (`app/layout.tsx`) wraps all pages with:
  1. MUIThemeProvider (theme + CssBaseline)
  2. PageSettingProvider (Header + Footer wrapper)
- Blog section has nested layout (`app/blog/layout.tsx`) with DemoSidebar
- Layouts use MUI's AppRouterCacheProvider for SSR compatibility

**MDX Integration:**

- MDX pages supported via @next/mdx with Rust compiler
- Custom component mapping in mdx-components.tsx
- All HTML elements (h1-h6, p, a, ul, ol, etc.) mapped to MUI components
- Consistent styling across all MDX content
- Blog pages can be .tsx or .mdx files

**Component Organization:**

- Page components separated by route in `components/pages/[route]/`
- Explicit separation of server/client components in demo section
- Common components shared across multiple pages in `components/common/`

**State Management:**

- Jotai for lightweight atomic state
- Atoms defined in `store/[domain]/atoms.ts`
- Custom hooks wrap atom usage for better DX

### Path Aliases

- `@/*` resolves to project root
- Use absolute imports: `@/components/...`, `@/hooks/...`, etc.

### MDX Configuration

- Page extensions: js, jsx, md, mdx, ts, tsx
- MDX Rust compiler enabled (`experimental.mdxRs: true`)
- Source maps enabled in production

### Styling Approach

- Primary: MUI components with custom theme
- Secondary: Tailwind CSS for utility classes
- MUI component style overrides defined in theme
- Custom typography variants: logo, tag, article
- Emotion for CSS-in-JS when needed

### 單元測試風格與慣例

概述
本文件為單元測試提供統一規範，適用於所有工具函數的測試案例設計與實現，確保功能邏輯、邊界條件及異常處理的全面覆蓋。目標是提升程式碼品質，確保穩定性與可靠性。
測試環境與依賴
測試框架：Jest
模擬工具：Jest 的 mock 功能（如 jest.clearAllMocks）
前置設置：
每個測試案例前執行 jest.clearAllMocks()，確保測試獨立性。
設置模擬數據以模擬真實場景。
測試原則
單一職責：每個測試案例僅驗證單一功能或行為。
獨立性：測試案例間互不依賴，避免狀態污染。
全面覆蓋：
正常輸入：驗證函數在標準輸入下的正確行為。
邊界條件：測試空輸入、無效輸入、極端值等情況。
異常處理：確保函數在異常輸入下行為可預測（如返回預設值或拋出錯誤）。
可讀性：測試案例名稱清晰描述意圖，遵循「should [行為] when [條件]」格式。
斷言明確：使用具體的 Jest 斷言（如 expect().toEqual()、expect().toHaveProperty()）驗證結果。
測試案例設計規範
測試結構：
使用 describe 分組相關測試，描述函數或模組名稱。
使用 it 定義具體測試案例，名稱清晰反映測試目標。
使用 beforeEach 重置環境，確保一致性。
測試內容：
功能驗證：
確認函數輸出符合預期（如資料結構、屬性值）。
驗證關鍵邏輯（如計算、過濾、合併）正確執行。
邊界測試：
測試空陣列、空物件、null 或 undefined 輸入。
測試極端值（如極大或極小數字、超長字串）。
異常測試：
測試無效輸入（如格式錯誤的資料）。
驗證函數是否返回預設值或正確處理錯誤。
狀態測試：
測試不同模式或配置下的行為（如不同參數值）。
驗證狀態改變（如加載狀態、新舊資料比較）。
斷言要求：
使用 `expect().toHaveLength()` 驗證陣列長度。
使用 `expect().toEqual()` 驗證物件或值相等。
使用 `expect().toHaveProperty()` 驗證屬性存在。
使用 `expect().toBeUndefined()` 或 `expect().toBeNull()` 驗證空值。
針對複雜物件，使用 `expect.objectContaining()` 驗證部分屬性。
模擬與依賴：
確保模擬數據貼近真實場景，涵蓋常見與異常情況。
測試中避免直接修改原始輸入數據，保持不可變性。
注意事項
避免過度依賴模擬，確保關鍵邏輯使用真實數據測試。
定期更新測試案例以反映功能變更或新需求。
當測試失敗時，優先分析程式碼邏輯而非直接修改測試案例。
對於異常處理，確保函數行為與產品需求一致（如返回空陣列或拋出錯誤）。
範例測試案例

```typescript
describe(" Function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should process valid input correctly", () => {
    const input = [{ key: "value" }];
    const result = utilityFunction(input);
    expect(result).toHaveLength(1);
    expect(result[0]).toHaveProperty("key", "value");
  });

  it("should handle empty input", () => {
    const result = utilityFunction([]);
    expect(result).toEqual([]);
  });

  it("should handle invalid input gracefully", () => {
    const result = utilityFunction(null);
    expect(result).toEqual([]);
  });
});
```

總結
本規範旨在標準化測試流程，確保程式碼品質與功能可靠性。團隊應遵循原則，設計全面的測試案例，並持續優化測試覆蓋與執行效率。
