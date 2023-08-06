import React, { useEffect, useState } from "react";
import CustomNotifications from "../Components/CustomNotifications";

export default function StaleWhileRevalidate() {
  const [dummyData, setDummyData] = useState();

  const get = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/3");
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    (async () => {
      const d = await get();
      setDummyData(d);
    })();
  }, [setDummyData]);

  return (
    <div>
      StaleWhileRevalidate, Resources are requested from both the cache and the network in parallel.
      The strategy will respond with the cached version if available, otherwise wait for the network
      response. The cache is updated with the network response with each successful request.
      {JSON.stringify(dummyData)}
    </div>
  );
}
