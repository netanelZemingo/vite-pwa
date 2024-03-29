import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CacheFirst } from "../pages/CacheFirst";
import { NetworkOnly } from "../pages/NetworkOnly";
import StaleWhileRevalidate from "../pages/StaleWhileRevalidate";
import NavBar from "./NavBar";
import ReloadPrompt from "./ReloadPrompt";
import { HomePage } from "../pages/HomePage";
import { styled } from "styled-components";
import { Chat } from "../pages/Chat";
import { CachedAssets } from "../pages/CachedAssets";

const RoutesContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const NavBarContainer = styled.div`
  position: absolute;
  left: 0.3rem;
  top: 0.3rem;
`;
const RouterContainer = styled.div`
  /* display: flex; */
`;

export enum MyRoutes {
  networkOnly = "networkOnly",
  cacheFirst = "cacheFirst",
  staleWhileRevalidate = "staleWhileRevalidate",
  chat = "chat",
  cachedAssets = "cachedAssets",
  home = "",
}

export default function MyRouter() {
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={MyRoutes.networkOnly} element={<NetworkOnly />} />
          <Route path={MyRoutes.cacheFirst} element={<CacheFirst />} />
          <Route path={MyRoutes.staleWhileRevalidate} element={<StaleWhileRevalidate />} />
          <Route path={MyRoutes.chat} element={<Chat />} />
          <Route path={MyRoutes.cachedAssets} element={<CachedAssets />} />
        </Routes>
      </RoutesContainer>

      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
    </BrowserRouter>
  );
}
