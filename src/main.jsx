import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { appStore } from './utils/appStore.js';

import React, { Suspense } from 'react';

// Lazy load components
const App = React.lazy(() => import('./App.jsx'));
const ProductList = React.lazy(() => import('./components/ProductList.jsx'));
const Cart = React.lazy(() => import('./components/Cart.jsx'));
const NotFound = React.lazy(() => import('./components/NotFound.jsx'));
const ProductDetail = React.lazy(() => import('./components/ProductDetail.jsx'));

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <ProductList />
        },
        {
          path: "/product/:id",
          element: <ProductDetail />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    },
    {
      path: "*", // This will catch all undefined routes
      element: <NotFound />,
    },
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      {/* Wrap the entire RouterProvider inside Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={appRouter} />
      </Suspense>
    </Provider>
  </StrictMode>
);
