import { Footer } from "@/components/common/Footer/Footer";
import { Header } from "@/components/common/Header/Header";

export const PageSettingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
