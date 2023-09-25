import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import FooterChat from "../components/FooterChat";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import OffersWithEmail from "../components/OffersWithEmail";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Banner />
      <Component {...pageProps} />
      <OffersWithEmail />
      <Footer />
      <FooterChat />
    </>
  );
}
