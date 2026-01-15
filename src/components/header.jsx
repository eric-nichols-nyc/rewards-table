import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <h1>Customer Rewards Program</h1>
      <p className={styles.subtitle}>Points earned over the last 3 months</p>
    </div>
  );
}

