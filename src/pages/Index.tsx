import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import GallerySection from "@/components/home/GallerySection";
import LocationSection from "@/components/home/LocationSection";
import BookingCTA from "@/components/home/BookingCTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Panorama House Brdy | Ubytování s výhledem v Brdech</title>
        <meta
          name="description"
          content="Panorama House Brdy - útulné soukromé ubytování s ohromujícím panoramatickým výhledem na údolí. 10 minut od Příbrami, v srdci CHKO Brdy. Rezervujte nyní!"
        />
        <meta
          name="keywords"
          content="ubytování Brdy, chata Brdy, panoramatický výhled, ubytování Příbram, dovolená v přírodě, CHKO Brdy"
        />
        <link rel="canonical" href="https://panoramahouse.cz" />
      </Helmet>

      <Layout>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <LocationSection />
        <BookingCTA />
      </Layout>
    </>
  );
};

export default Index;
