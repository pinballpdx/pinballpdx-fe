import React from 'react';
import { GoogleLogout } from 'react-google-login';

const Logout = ({ setLoggedIn }) => {
  const onSuccess = () => {
    setLoggedIn(false);
  };

  return (
    <div className="Logout flex items-center">
      <GoogleLogout
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default Logout;
