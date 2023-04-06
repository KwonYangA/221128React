import React, { useEffect, useState } from "react";
import { loginGoogle, logout } from "../../service/authLogic";
import { useSelector } from "react-redux";

const ReduxHeader = () => {
  const { userAuth } = useSelector((store) => store);
  const [userId, setUserId] = useState();

  useEffect(() => {
    setUserId(window.localStorage.getItem("userId"));
  }, []);

  const handleGoogle = async () => {
    console.log("구글 로그인");
    const result = await loginGoogle(userAuth.auth, userAuth.googleProvider);
    if (result.uid) {
      //로컬스토리지나 세션스토리지에 처리된 결과가 화면에 반영되려면 페이지 리로딩이 필요함
      //navigate 훅으로 처리 할 수 없다.
      window.localStorage.setItem("userId", result.uid);
      window.location.reload();
    }
  };

  const handleLogout = async () => {
    logout(userAuth.auth);
    window.localStorage.removeItem("userId");
    window.location.reload();
  };

  return (
    <>
      <div className="sub_container">
        <h2>머리이무니다~~~</h2>
        {userId ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleGoogle}>Google</button>
        )}
      </div>
      <hr />
    </>
  );
};

export default ReduxHeader;
