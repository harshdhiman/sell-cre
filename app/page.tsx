import Navbar from "@/components/Nabbar/Navbar";
import HomeBanner from "@/components/Home/HomeBanner";
import PropertyTypes from "@/components/Home/PropertyTypes";
import Showcase from "@/components/Home/Showcase";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <PropertyTypes />
      <Showcase />
    </div>
  );
}
