import React from "react";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={"page-content"}>
      <div className={styles.loading}>Loading</div>
    </div>
  );
}

export default Loading;
