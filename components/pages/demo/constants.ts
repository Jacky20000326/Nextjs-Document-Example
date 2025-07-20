import { Product, FAQ, Testimonial, MediaLogo, ChartBar } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    icon: "₿",
    iconColor: "#f7931a",
    title: "BTC 90天(1.0% 年化收益)",
    amount: "5 BTC",
    totalAmount: "5 BTC",
    progress: 100,
    details: {
      檔次編號: "2078",
      認購時間: "2025-07-10 12:00:00 至 2025-07-11 10:59:00",
      債權認購: "5,000 支",
      每支單位: "0.001 BTC",
      每支約定利息: "0.00000246 BTC",
      手續費: "約定利息的 20.0% (支)",
      起息日: "2025-07-11 11:00:00",
      到期日: "2025-10-09 10:59:00 (90天)",
    },
  },
  {
    id: 2,
    icon: "♦",
    iconColor: "#627eea",
    title: "ETH 90天(1.0% 年化收益)",
    amount: "30 ETH",
    totalAmount: "30 ETH",
    progress: 100,
    details: {
      檔次編號: "2079",
      認購時間: "2025-07-10 12:00:00 至 2025-07-11 10:59:00",
      債權認購: "3,000 支",
      每支單位: "0.01 ETH",
      每支約定利息: "0.00002465 ETH",
      手續費: "約定利息的 20.0% (支)",
      起息日: "2025-07-11 11:00:00",
      到期日: "2025-10-09 10:59:00 (90天)",
    },
  },
  {
    id: 3,
    icon: "₮",
    iconColor: "#26a17b",
    title: "USDT 90天(9.0% 年化收益)",
    amount: "700,000 USDT",
    totalAmount: "700,000 USDT",
    progress: 100,
    details: {
      檔次編號: "2080",
      認購時間: "2025-07-10 12:00:00 至 2025-07-11 10:59:00",
      債權認購: "7,000 支",
      每支單位: "100.0 USDT",
      每支約定利息: "2.21917808 USDT",
      手續費: "約定利息的 20.0% (支)",
      起息日: "2025-07-11 11:00:00",
      到期日: "2025-10-09 10:59:00 (90天)",
    },
  },
  {
    id: 4,
    icon: "₮",
    iconColor: "#26a17b",
    title: "USDT 36天(6.0% 年化收益)",
    amount: "100,000 USDT",
    totalAmount: "100,000 USDT",
    progress: 100,
    details: {
      檔次編號: "2081",
      認購時間: "2025-07-10 12:00:00 至 2025-07-11 10:59:00",
      債權認購: "1,000 支",
      每支單位: "100.0 USDT",
      每支約定利息: "0.59178082 USDT",
      手續費: "約定利息的 20.0% (支)",
      起息日: "2025-07-11 11:00:00",
      到期日: "2025-08-16 10:59:00 (36天)",
    },
  },
];

export const FAQ_DATA: FAQ[] = [
  {
    id: 1,
    question: "Q1：什麼是幣託債權認購平台-BitoDebt？",
    answer:
      "BitoDebt 是 BitoPro 推出的債權認購平台，提供用戶參與機構間債權認購的機會，讓用戶能夠獲得穩定的被動收入。平台採用定型化、專業合法的運作模式，為用戶提供低風險的投資選擇。",
  },
  {
    id: 2,
    question: "Q2：幣託債權認購平台是合法的嗎？是否有債還風險？",
    answer:
      "本平台完全合法合規，受到金管會信託業管理條例、會計人員法規邏輯及相關法例所規範。雖然任何投資都存在一定風險，但我們通過嚴格的風險管控機制，將債還風險降到最低。",
  },
  {
    id: 3,
    question: "Q3：認購債權有什麼好處？",
    answer:
      "認購債權的主要好處包括：1. 穩定的被動收入來源 2. 相對較低的投資風險 3. 靈活的投資期限選擇 4. 專業的風險管理 5. 透明的收益分配機制，讓您的資產配置更加多元化。",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Anna Wang",
    location: "Taipei",
    avatar: null,
    content:
      "BitoDebt 對我來說是有理財經驗者的最佳保守資金投資管道，年化利率還勝存錢，儲蓄、債券型保單，感受到 BitoPro 諮詢給用戶的誠意。",
  },
  {
    id: 2,
    name: "John Chen",
    location: "Kaohsiung",
    avatar: null,
    content:
      "使用 BitoDebt 已經半年多了，收益穩定且透明，比傳統銀行定存好太多，而且手續費也很合理，推薦給想要穩健投資的朋友。",
  },
  {
    id: 3,
    name: "Lisa Lin",
    location: "Taichung",
    avatar: null,
    content:
      "作為保守型投資者，BitoDebt 給了我很好的投資選擇，風險相對較低，收益也比預期好，客服團隊也很專業。",
  },
];

export const MEDIA_LOGOS: MediaLogo[] = [
  {
    id: 1,
    name: "財訊",
    logo: "財訊",
    subtitle: "WEALTH MAGAZINE",
  },
  {
    id: 2,
    name: "民視",
    logo: "民視",
    subtitle: "",
  },
  {
    id: 3,
    name: "BlockTempo",
    logo: "BLOCKTEMPO",
    subtitle: "動區動趨 — 最具影響力的區塊鏈媒體",
  },
];

export const CHART_BARS: ChartBar[] = [
  { height: 30, label: "銀行" },
  { height: 45, label: "公債/公司債" },
  { height: 75, label: "保險" },
  { height: 95, label: "基金" },
  { height: 140, label: "幣託交易所", isHighlighted: true },
];

export const CHART_Y_AXIS_LABELS = [9, 7, 5, 3, 1];
