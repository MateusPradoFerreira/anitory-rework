import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./presentation/layouts/main-layout";
import { HomeView } from "./presentation/views/home-view";
import { AnimeView } from "./presentation/views/anime-view";

export const router = createBrowserRouter([
  { path: "*", element: "Error 404" },
  { path: "", element: <MainLayout />, children: [
    { path: "", element: <HomeView /> },
    { path: "anime", children: [
      { path: ":id/:title", element: <AnimeView /> },
      { path: ":id", element: <AnimeView /> },
    ]},
  ]},
]);