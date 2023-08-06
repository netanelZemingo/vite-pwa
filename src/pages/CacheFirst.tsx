import React, { useEffect, useState } from "react";

export const CacheFirst = () => {
  const [dummyData, setDummyData] = useState();

  const get = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/2");
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
      Page2 Cache first
      {JSON.stringify(dummyData)}
    </div>
  );
};
