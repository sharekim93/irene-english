import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";

export default function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fcf9f8] text-gray-950">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
