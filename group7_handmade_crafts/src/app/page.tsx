import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className="w-full bg-amber-400">
        <h1>Header</h1>
      </header>
      <main className={styles.main}>
        <h2>Page Title</h2>
      </main>
      <footer className="w-full bg-amber-400">
        <p>Footer</p>
      </footer>
    </>
  );
}
