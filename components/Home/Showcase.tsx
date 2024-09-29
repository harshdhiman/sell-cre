import Image from "next/image";
import styles from "./Showcase.module.css";
import PrimaryButton from "../Button/PrimaryButton";

export default function Showcase() {
  return (
    <>
      <section className={`${styles["main-section"]}`}>
        <div className={`${styles["group"]}`}>
          <div className={`${styles["title"]}`}>
            Sample OMs created with our platform
          </div>

          <section className={`${styles["items-group"]}`}>
            <Card
              imagePath="/retail-offering-memorandum.png"
              title="Retail Offering Memorandum"
              description="strip centers, street retail, vehicle related, and more"
              isHighlighted
            />
            <Card
              imagePath="/multi-family-offering-memorandum.png"
              title="Multi-Family Offering Memorandum"
              description="garden, low-rise, mid-rise, high-rise"
            />
            <Card
              imagePath="/office-offering-memorandum.png"
              title="Office Offering Memorandum"
              description="all classes of office buildings, loft/creative, medical"
            />
          </section>
        </div>
      </section>
    </>
  );
}

function Card(props: {
  imagePath: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}) {
  return (
    <>
      <div className={`${styles["card"]}`}>
        <div className={`${styles["image-container"]}`}>
          <Image
            src={props.imagePath}
            alt={props.title}
            layout="responsive"
            width={290}
            height={224}
          />
        </div>

        {/* Details */}

        <div className={`${styles["card-details-group"]}`}>
          <div className={`${styles["card-title"]}`}>{props.title}</div>
          <span className={`${styles["card-description"]}`}>
            {props.description}
          </span>
          <PrimaryButton variant={props.isHighlighted ? "solid" : "outlined"}>
            View Sample Template
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}
