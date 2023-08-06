import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CacheFirst } from "../pages/CacheFirst";
import { NetworkOnly } from "../pages/NetworkOnly";
import StaleWhileRevalidate from "../pages/StaleWhileRevalidate";
import NavBar from "./NavBar";
import ReloadPrompt from "./ReloadPrompt";
import { HomePage } from "../pages/HomePage";
import { styled } from "styled-components";

export enum MyRoutes {
  networkOnly = "networkOnly",
  cacheFirst = "cacheFirst",
  staleWhileRevalidate = "staleWhileRevalidate",
}
const RoutesContainer = styled.div`
  height: 95%;
`;
const NavBarContainer = styled.div`
  height: 5%;
`;
export default function MyRouter() {
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={MyRoutes.networkOnly} element={<NetworkOnly />} />
          <Route path={MyRoutes.cacheFirst} element={<CacheFirst />} />
          <Route path={MyRoutes.staleWhileRevalidate} element={<StaleWhileRevalidate />} />
        </Routes>
      </RoutesContainer>

      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
    </BrowserRouter>
  );
}
