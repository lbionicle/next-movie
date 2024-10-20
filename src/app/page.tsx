import { FilmSlider } from "./ui/slider/slider";
import Categories from "./ui/main/categories";
import Promo from "./ui/main/promo";
import FAQ from "./ui/main/faq";
import Footer from "./ui/common/footer";
import "./styles/globals.scss";
import Header from "./ui/common/header";
import LinearGradient from "./ui/common/linearHeader";

export default function Home() {
  return (
    <>
      <LinearGradient>
        <Header />
        <Promo />
        <FilmSlider />
      </LinearGradient>
      <Categories />
      <FAQ />
      <Footer />
    </>
  );
}
