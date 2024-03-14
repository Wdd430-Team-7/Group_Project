import Image from "next/image";
import styles from "./page.module.css";
import Header from "./ui/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <p>Stuff</p>
      </main>
      <footer className="w-full bg-amber-400">
        <p>Footer</p>
      </footer>
    </>
  );
}
