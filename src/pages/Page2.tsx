import React, { useEffect, useState } from "react";

const Page2 = () => {
  const [first, setfirst] = useState();

  const get = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/2");
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
      Page2 Cache first
      {JSON.stringify(first)}
    </div>
  );
};

export default Page2;
