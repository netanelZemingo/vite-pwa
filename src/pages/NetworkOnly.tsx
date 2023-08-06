import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { DataPageContainer, Expalining, DummyDataText } from "./Styles";

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
    <DataPageContainer>
      <Expalining>
        Network only Strategy, if offline will not show the data that got from the server
      </Expalining>
      <DummyDataText>{JSON.stringify(dummyData)}</DummyDataText>
    </DataPageContainer>
  );
};
