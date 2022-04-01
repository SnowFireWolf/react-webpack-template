import React from 'react'
import { useRoutes } from 'react-router-dom'

import Home from '@/pages/Home'
import Components from '@/pages/Components'
import NotFound from '@/pages/NotFound'



const RouteConfig = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/components",
      element: <Components />,
    },
    {
      path: "*",
      element: <NotFound />,
    }
  ]);
}

export default RouteConfig;