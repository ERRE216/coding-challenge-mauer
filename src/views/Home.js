import React from "react";

import styles from "./Home.module.css";
import UpcomingRocketsList from "../components/UpcomingRocketList";

function Home() {
  return (
    <div className={"page-content"}>
      <h2 className={styles.title}>Upcoming Launches</h2>
      <UpcomingRocketsList />
    </div>
  );
}

export default Home;
