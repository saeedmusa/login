import React from "react";

const Hero = (props) => {
  const { userEmail, handleLogout } = props;

  return (
    <section className="hero">
      <nav>
        <h2>Welcome </h2>
        <h2>{userEmail}</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  );
};

export default Hero;
