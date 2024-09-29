"use client";

import styles from "./IconButton.module.css";

export type IconButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function IconButton(props: IconButtonProps) {
  return (
    <>
      <button
        className={`${styles["icon-button"]}`}
        onClick={() => props.onClick()}
      >
        {props.children}
      </button>
    </>
  );
}
