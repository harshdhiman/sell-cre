"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";
import PrimaryButton from "../Button/PrimaryButton";
import { useState } from "react";
import IconButton from "../IconButton/IconButton";

function NavLinks() {
  return (
    <>
      <ul className={`${styles["nav-links"]}`}>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/icons/lock-icon.svg"
              alt="Locked"
              width={14}
              height={14}
            />
            <span className={`${styles["nav-link--bold"]}`}>Login</span>
          </a>
        </li>
        <li className={`${styles["action-button-wrapper"]}`}>
          <PrimaryButton>Try For Free</PrimaryButton>
        </li>
      </ul>
    </>
  );
}

export default function Navbar() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  return (
    <>
      <header className={styles.header}>
        {/* Logo */}
        <Image src="/logo.png" alt="SellCRE" width={110} height={24} priority />

        <nav className={styles["desktop-nav-links"]}>
          <NavLinks />
        </nav>

        {/* Drawer Icon */}
        <div className={`${styles["drawer-menu-icon"]}`}>
          <IconButton onClick={toggleDrawer}>
            <Image
              src="/icons/drawer-menu.svg"
              alt="Menu"
              width={24}
              height={24}
              priority
            />
          </IconButton>
        </div>

        {/* Drawer Menu */}
        <div
          className={`${styles["drawer"]} ${styles["drawer-mobile"]} ${
            isDrawerVisible ? styles["drawer-visible"] : ""
          }`}
        >
          <nav className={`${styles["nav"]}`}>
            <div className={`${styles["nav-header-group"]}`}>
              <Image
                src="/logo.png"
                alt="SellCRE"
                width={110}
                height={24}
                priority
              />

              <IconButton onClick={toggleDrawer}>
                <Image
                  src="/icons/close-icon.svg"
                  alt="Close Menu"
                  width={24}
                  height={24}
                  priority
                />
              </IconButton>
            </div>

            <NavLinks />
          </nav>
        </div>
      </header>
    </>
  );
}
