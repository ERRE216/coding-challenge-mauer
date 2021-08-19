import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchRocketLaunch } from "../app/reducers/rocketSlice";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  MdLocationOn,
  MdAccessTime,
  MdInfoOutline,
  MdPublic,
} from "react-icons/md";

import styles from "./Details.module.css";
import Loading from "../components/Loading";

function Details() {
  const { id } = useParams();
  const { loading, launchData } = useSelector((state) => state.rocket);
  const dispatch = useDispatch();

  dayjs.extend(relativeTime);
  var a = dayjs(launchData.net);

  useEffect(() => {
    dispatch(fetchRocketLaunch(`/launch/${id}/`));
  }, [dispatch, id]);

  if (loading) return <Loading />;

  return (
    <div className={"page-content"}>
      <img
        src={launchData.image_url}
        alt={"Rocket Launch"}
        className={styles.imageTop}
      />
      <h2 className={styles.title}>{launchData.name}</h2>
      <div className={styles.content}>
        <div className={styles.triData}>
          <h4 className={styles.details}>
            <MdAccessTime />
            &nbsp;
            {dayjs().to(a, true)}
          </h4>
          <a
            target='_blank'
            rel='noreferrer'
            href={`${launchData.pad?.map_url}`}
            className={styles.details}
          >
            <h4>
              <MdLocationOn />
              &nbsp;
              {launchData.pad?.location?.name}
            </h4>
          </a>
          <h4 className={styles.details}>
            <MdPublic />
            &nbsp;
            {launchData.mission?.orbit}
          </h4>
        </div>
        <h4 className={styles.descriptions}>
          <MdInfoOutline />
          &nbsp;
          {launchData.mission?.description}
        </h4>
      </div>
    </div>
  );
}

export default Details;
