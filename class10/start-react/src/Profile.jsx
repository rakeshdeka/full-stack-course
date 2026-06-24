import React, { useContext } from "react";
// import { UserContext } from "./UserContext";
import { UserContext } from "./context/UserContext.jsx";

function Profile() {
  const user = useContext(UserContext);

  return <h1>Hello {user}</h1>;
}

export default Profile;