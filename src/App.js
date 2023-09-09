import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import routerss from "./ShoppingTemplate/Routes/Routess";
const Loading = () => <div>Loading...</div>;
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routerss.map(({ path, element, index }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default App;
