import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css';
import { useUser } from '../context/AuthContext';
import { UserLocalHost } from '../lib/UserLocalHost';

function reducer(state, action) {
  switch (action.type) {
    case 'Loading':
      return { ...state, isLoading: true };
    case 'Ready':
      return { ...state, isLoading: false, error: false };
    case 'Error':
      return { ...state, error: true, isLoading: false };
    default:
      throw new Error('Unknown action');
  }
}

function SignIn() {
  const { setCurrentUser } = useUser();
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    error: false,
  });
  const navigator = useNavigate();

  // handling the submit event user submit there data
  async function handleSumbit(e) {
    e.preventDefault();

    // formatting the sumbit data into FormDaa
    const formData = new FormData(e.target);

    // getting the form data sending the in object form
    const name = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const userObj = {
      email,
      password,
    };

    try {
      dispatch({ type: 'Loading' });
      const res = await fetch(`${UserLocalHost}/loginIn`, {
        method: 'POST',
        body: JSON.stringify(userObj),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const userData = await res.json();

      if (!res.ok) throw new Error(userData.message);

      dispatch({ type: 'Ready' });
      console.log(userData);
      setCurrentUser(userData.data.user);

      navigator('/homePage', { replace: true });
    } catch (err) {
      dispatch({ type: 'Error' });
      alert(err.message);
    }
  }

  return (
    <div className={style.signIn}>
      <div className={style.signIn__container}>
        <div className={style.wrapper}>
          <form
            className={style.formContainer}
            onSubmit={(e) => handleSumbit(e)}
          >
            <h1>Login</h1>
            {/* <input name="username" type="text" placeholder="Username" /> */}
            <input name="email" type="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            {state.isLoading && <p>Loading</p>}
            {!state.isLoading && state.error && <p>Error</p>}
            {!state.isLoading && <button type="text">Login</button>}
          </form>
        </div>
      </div>
      <div className={style.signIn__Imgcontainer}>
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default SignIn;
