import styles from "./page.module.css";
import Navbar from "@/components/Nabbar/Navbar";
import HomeBanner from "@/components/Home/HomeBanner";
import PropertyTypes from "@/components/Home/PropertyTypes";
import Showcase from "@/components/Home/Showcase";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <HomeBanner />
      <PropertyTypes />
      <Showcase />
    </div>
  );
}
