import { Routers } from "@/constants/route";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {Routers.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
