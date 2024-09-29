import styles from "./PrimaryButton.module.css";

export type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "solid" | "outlined";
};

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <>
      <button
        className={`${styles.button} ${
          props.variant === "outlined" ? styles.outlined : ""
        }`}
      >
        {props.children}
      </button>
    </>
  );
}
