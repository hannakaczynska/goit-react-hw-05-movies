import { Routes, Route } from 'react-router-dom';
import { lazy } from "react";
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const NotFound = lazy(() => import("../pages/NotFound"));


export const App = () => {
  // const API_KEY = '0003f54f58f173442abd026bac610d83';
  // console.log(API_KEY);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}>
            <Route/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
