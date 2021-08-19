import React from "react";
import { MdLocationOn, MdAccessTime } from "react-icons/md";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import noImage from "../images/NoImage.png";
import styles from "./UpcomingRocketItem.module.css";
import { Link } from "react-router-dom";

function UpcomingRocketItem(props) {
  const { name, image_url, pad, net, id } = props.data;

  dayjs.extend(relativeTime);
  var a = dayjs(net);

  return (
    <Link
      className={styles.rocketItem}
      ref={props.reference}
      to={`/details/${id}`}
    >
      {image_url != null ? (
        <img className={styles.rocketImage} src={image_url} alt={"Rocket"} />
      ) : (
        <img className={styles.rocketImage} src={noImage} alt={"Not Shown"} />
      )}
      <div className={styles.rocketDetailsBox}>
        <h3 className={styles.rocketName}>{name}</h3>

        <h4 className={styles.rocketLocation}>
          <MdLocationOn />
          &nbsp;
          {pad.location.name}
        </h4>
        <h4 className={styles.rocketTime}>
          <MdAccessTime />
          &nbsp;{dayjs().to(a, true)}
        </h4>
      </div>
    </Link>
  );
}

export default UpcomingRocketItem;
