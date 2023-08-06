import React, { useEffect, useState } from "react";
import CustomNotifications from "../Components/CustomNotifications";

export const NetworkOnly = () => {
  const [dummyData, setDummyData] = useState();

  const get = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
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
      Page1 Network only zzzz
      {JSON.stringify(dummyData)}
    </div>
  );
};
