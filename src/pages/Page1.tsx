import React, { useEffect, useState } from "react";
import CustomNotifications from "../Components/CustomNotifications";

const Page1 = () => {
  const [first, setfirst] = useState();

  const get = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    (async () => {
      const d = await get();
      setfirst(d);
    })();
  }, [setfirst]);

  return (
    <div>
      <CustomNotifications/>
      Page1 Network only zzzz
      {JSON.stringify(first)}
    </div>
  );
};

export default Page1;
