import React, { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUpcomingRockets } from "../app/reducers/rocketSlice";

import Loading from "./Loading";
import UpcomingRocketItem from "./UpcomingRocketItem";

function ListComponent() {
  const { data, loading, next } = useSelector((state) => state.rocket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpcomingRockets("/launch/upcoming/"));
  }, [dispatch]);
  const observer = useRef();

  const lastElement = useCallback(
    (item) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && next != null) {
          dispatch(
            fetchUpcomingRockets(
              `/launch/upcoming/?limit=10&offset=${data.length}`,
            ),
          );
        }
      });
      if (item) observer.current.observe(item);
    },
    [data, next, loading, dispatch],
  );

  return (
    <>
      {data.map((rocket, index) => {
        if (data.length === index + 1) {
          return (
            <UpcomingRocketItem
              reference={lastElement}
              key={rocket.id}
              data={rocket}
            />
          );
        } else {
          return <UpcomingRocketItem key={rocket.id} data={rocket} />;
        }
      })}
      {loading && <Loading />}
    </>
  );
}

export default ListComponent;
