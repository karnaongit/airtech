"use client";
import { useEffect, useState } from "react";
import styles from "../app/styles/Loader.module.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500); // Adjust time as needed
    return () => clearTimeout(timeout);
  }, []);

  if (!loading) return null; // Hide loader when loading is complete

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
