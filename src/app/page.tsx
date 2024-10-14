import SldierComponent from "./ui/slider/slider";
import Categories from "./ui/main/categories";
import Promo from "./ui/main/promo";
import FAQ from "./ui/main/faq";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <>
      <Promo />
      <SldierComponent />
      <Categories />
      <FAQ />
      <Footer />
    </>
  );
}
