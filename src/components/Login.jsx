import React from 'react';
import { GoogleLogin } from 'react-google-login';

const Login = ({ loggedIn, setLoggedIn, setCurrentUser }) => {
  const onSuccess = (res) => {
    setCurrentUser(res.profileObj);
    setLoggedIn(true);
  };

  const onFailure = (res) => {
    console.log('[Fail] res: ', res);
  };

  return (
    <div className="Login flex items-center">
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
