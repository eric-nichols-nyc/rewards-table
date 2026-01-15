import styles from "./loader.module.css";

export const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src="/vite.svg" alt="Loading" className={styles.spinner} />
            <p>Loading...</p>
        </div>
    );
}
