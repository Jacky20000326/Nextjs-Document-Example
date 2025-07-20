export interface Product {
  id: number;
  icon: string;
  iconColor: string;
  title: string;
  amount: string;
  totalAmount: string;
  progress: number;
  details: {
    檔次編號: string;
    認購時間: string;
    債權認購: string;
    每支單位: string;
    每支約定利息: string;
    手續費: string;
    起息日: string;
    到期日: string;
  };
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string | null;
  content: string;
}

export interface MediaLogo {
  id: number;
  name: string;
  logo: string;
  subtitle: string;
}

export interface ChartBar {
  height: number;
  label: string;
  isHighlighted?: boolean;
}
