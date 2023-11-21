import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authSignUp } from "../../features/applicationSlice";
import { Link } from "react-router-dom";
import styles from "./Sign.module.css"

const SignUp = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authSignUp());
  }, [dispatch]);
  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(authSignUp({ login, password, image }));
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <>
      <div className={styles.main}>
        <form action="" onSubmit={handleSignUp}>
          <input type="text" value={login} onChange={handleLogin} />
          <input type="text" value={password} onChange={handlePassword} />
          <input type="file" onChange={handleImage} />
          <button>зарегистрироваться</button>
        </form>
      </div>
      <div>
        <Link to="/signIn">у меня уже есть аккаунт</Link>
      </div>
    </>
  );
};

export default SignUp;
