"use client";
import styles from "./page.module.css";
import TextDirection from "./components/TextDisperse/page";
import { useRef } from "react";
export default function Home() {
  const background = useRef(null);

  const setBackground = (isActive)=>{
    
  }
  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <div className="introLine">
          <p>Nathan</p>
          <p>Smith</p>
        </div>

        <div className="introLine">
          <p>Design</p>
          <p>&</p>
        </div>

        <div className="introLine">
          <p>Art</p>
          <p>Direction</p>
        </div>

        <TextDirection>
          <p>+447533063596</p>
        </TextDirection>

        <TextDirection>
          <p>→Email</p>
        </TextDirection>

        <TextDirection>
          <p>→Insta</p>
        </TextDirection>
      </div>
      <div className={styles.background} ></div>
    </main>
  );
}
