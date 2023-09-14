import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import MainLayout from "../layouts/MainLayout";

const ProtectedRoute = () => {
  const selector = useSelector((store) => store.userReducers.isOnline);
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    setIsAuth(selector);
  }, []);

  return (
    <>
      {isAuth ? <MainLayout /> : <Navigate to="/signin" />}
    </>
  )
};

export default ProtectedRoute;