import Hero from "@/components/commons/Hero";
import Header from "../components/Header";
import Features from "@/components/Features";
import WhyItMatters from "@/components/WhyItMatters";
import Footer from "@/components/Footer";
import EncircoBanner from "@/components/EncircoBanner";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <WhyItMatters />
      <EncircoBanner />
      <Footer />
    </>
  );
}
