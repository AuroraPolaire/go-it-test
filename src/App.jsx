import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./pages/Home/Home";
import Tweets from "./pages/Tweets/Tweets";
import { getUsers } from "./redux/usersOperations";
import SharedLayout from "./components/SharedLayout/SharedLayout";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" replace element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
