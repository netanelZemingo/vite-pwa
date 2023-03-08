import React, { useEffect, useState } from "react";

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
      Page1 Network only supposed to update alone but it will ?
      {JSON.stringify(first)}
    </div>
  );
};

export default Page1;
