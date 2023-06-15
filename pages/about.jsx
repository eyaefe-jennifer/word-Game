import Link from "next/link";
import styles from "../styles/style.module.css";
export default function About() {
  return (
    <div className={styles.about}>
      <h1>This is the about page</h1>
      <Link href="/"> Home</Link>
    </div>
  );
}
