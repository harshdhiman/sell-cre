import Image from "next/image";
import styles from "./PropertyTypes.module.css";

export default function PropertyTypes() {
  return (
    <>
      <section id="property_types" className={`${styles["main-section"]}`}>
        {/* Title Group */}

        <div className={`${styles["title-group"]}`}>
          <span className={`${styles["title"]}`}>Create OMs and Ads For</span>
          <span className={`${styles["sub-title"]}`}>
            Various Real Estate Property Types
          </span>
        </div>

        {/* Property types grid */}

        <section className={`${styles["property-grid"]}`}>
          <GridItem iconPath={"/icons/retail-store.svg"} title={"Retail"} />
          <GridItem iconPath={"/icons/house-icon.svg"} title={"Multi-Family"} />
          <GridItem iconPath={"/icons/office-icon.svg"} title={"Office"} />
          <GridItem
            iconPath={"/icons/warehouse-icon.svg"}
            title={"Industrial"}
          />
          <GridItem iconPath={"/icons/hotel-icon.svg"} title={"Hotel"} />
          <GridItem iconPath={"/icons/land-icon.svg"} title={"Land"} />
        </section>
      </section>
    </>
  );
}

/**
 * Single Grid Item in the Property Types Section
 */
function GridItem(props: { iconPath: string; title: string }) {
  return (
    <>
      <button className={`${styles["grid-item"]}`}>
        <Image
          src={props.iconPath}
          alt={props.title}
          layout="fixed"
          width={32}
          height={32}
        />
        <span>{props.title}</span>
      </button>
    </>
  );
}
