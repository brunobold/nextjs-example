import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Example NextJS Project</h1>
        <p className={styles.paragraph}>Deploy me on coolify! 👋</p>
      </main>
    </div>
  );
}
