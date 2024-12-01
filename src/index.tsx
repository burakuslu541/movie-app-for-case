import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./store/client/store";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

const Layout = lazy(() => import("./components/Layout"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Movies = lazy(() => import("./pages/Movies"));
const Movie = lazy(() => import("./pages/Movie"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Movies />,
      },
      {
        path: "/:id",
        element: <Movie />,
      },
    ],
  },
]);

root.render(
  <Suspense fallback={<Loader />}>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
        <ToastContainer position="bottom-left" />
      </QueryClientProvider>
    </Provider>
  </Suspense>
);
