import Image from "next/image";
import styles from "./HomeBanner.module.css";
import PrimaryButton from "../Button/PrimaryButton";

export default function HomeBanner() {
  return (
    <>
      <div className={`${styles["bg-image"]}`}>
        <section id="home_banner" className={`${styles["main"]}`}>
          {/* Text */}

          <div className={`${styles["head-group"]}`}>
            <div className={`${styles["heading"]}`}>
              <span>Sell CRE Faster</span> with OMs & Ads created in{" "}
              <span>minutes</span>
            </div>

            <div className={`${styles["sub-head-group"]}`}>
              <div className={`${styles["sub-heading"]}`}>
                Create beautiful Commercial Real Estate Offering Memorandums,
                Flyers & Ads in minutes with our AI powered platform
              </div>

              <div className={`${styles["button-group"]}`}>
                <PrimaryButton>
                  <span>Try for free</span>
                  <span className={`${styles["button-icon"]}`}>
                    <Image
                      src={"/icons/right-arrow-icon.svg"}
                      alt="Arrow Right"
                      layout="fixed"
                      width={18}
                      height={18}
                    />
                  </span>
                </PrimaryButton>

                {/* Watch Demo */}

                <button className={`${styles["watch-demo-button"]}`}>
                  <span>
                    <Image
                      src={"/icons/play-icon.svg"}
                      alt="Play Icon"
                      layout="fixed"
                      width={26}
                      height={26}
                    />
                  </span>
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
          </div>

          {/* Image */}

          <div className={`${styles["image-container"]}`}>
            <Image
              src={"/hero-image.png"}
              alt="Hero Image"
              layout="responsive"
              objectFit="cover"
              quality={100}
              height={320}
              width={528}
            />
          </div>
        </section>
      </div>
    </>
  );
}
