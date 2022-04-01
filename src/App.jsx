import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// theme
import { ThemeProvider } from "@emotion/react";
import theme from "@/theme";

// layout
import BaseLayout from "@/components/layout/Index";

// style
import "@/styles/reset.css";
import "@/styles/global.css";

// router element
import RouteConfig from "@/router";



export default function App() {
  const APP_NAME = "Finance";

  const TitleMap = [
    {
      path: "/",
      title: `首頁 - ${APP_NAME}`,
    },
    {
      path: "/news",
      title: `News - ${APP_NAME}`,
    },
    {
      path: "/components",
      title: `Components - ${APP_NAME}`,
    },
    {
      path: "/about",
      title: `About - ${APP_NAME}`,
    },
    {
      path: "*",
      title: `Not Found - ${APP_NAME}`,
    },
  ];

  const currentLocation = useLocation();
  useEffect(() => {
    const curTitle = TitleMap.find(
      (item) => item.path === currentLocation.pathname
    );
    if (curTitle && curTitle.title) {
      document.title = curTitle.title;
    }
  }, [currentLocation]);

  return (
    <ThemeProvider theme={theme}>
      <BaseLayout>
        <RouteConfig />
      </BaseLayout>
    </ThemeProvider>
  );
}
