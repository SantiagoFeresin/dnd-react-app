import React from "react";
import { useAuth } from "../../Context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <p>welcome {user.displayName || user.email}</p>
    </div>
  );
};

export default Home;
