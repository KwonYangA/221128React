import React, { useEffect } from "react";
import ReduxHeader from "../include/ReduxHeader";
import ReduxFooter from "../include/ReduxFooter";
import { useDispatch, useSelector } from "react-redux";
import { setToastMsg } from "../../redux/toastStatus/action";
import Toast from "../Toast";

const ReduxHomePage = () => {
  const status = useSelector((store) => store.toastStatus.status);
  console.log(status);
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    console.log(userId);
    if (userId !== null && userId.length > 0) {
      dispatch(setToastMsg("로그인^^ 됨 "));
    } else {
      dispatch(setToastMsg("로그인 하세요 ^^"));
    }
  }, []);

  return (
    <>
      <ReduxHeader />
      {status && <Toast />}
      <div className="container">
        <h1>homePage 알겠냐?</h1>
      </div>
      <ReduxFooter />
    </>
  );
};

export default ReduxHomePage;
