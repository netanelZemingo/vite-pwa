import React, { useEffect, useState } from "react";
import { DataPageContainer, DummyDataText, Expalining } from "./Styles";

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
    <DataPageContainer>
      <Expalining>Cache first Strategy</Expalining>
      <DummyDataText>{JSON.stringify(dummyData)}</DummyDataText>
    </DataPageContainer>
  );
};
