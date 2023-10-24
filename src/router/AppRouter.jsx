import { Link, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/layout/navbar/Navbar";
import { Footer } from "../components/layout/footer/Footer";
import { routes } from "./menuRoutes";
const AppRouter = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <Navbar />
            <Footer />
          </>
        }
      >
        {routes.map(({ id, path, Element }) => {
          return <Route key={id} path={path} element={<Element />} />;
        })}
      </Route>
      <Route
        path="*"
        element={
          <>
            <h1>Error 404 Not Found!</h1>
            <Link to={`/`}>
              <h2>¡Volver al Home!</h2>
            </Link>
          </>
        }
      />
    </Routes>
  );
};

export default AppRouter;
