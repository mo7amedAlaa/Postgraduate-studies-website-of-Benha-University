import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';
import { auth } from '../../Firebase';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="user flex justify-between w-full ">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
