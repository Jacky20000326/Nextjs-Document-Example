import { Footer } from "@/components/common/Footer/Footer";
import { Header } from "@/components/common/Header/Header";

export const GlobalLayoutProvider = ({
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
