import React from "react";

const AboutMe: React.FC = () => {
  // Define your data directly within the component
  const name = "Your Name";
  const profession = "Your Profession";
  const bio = "Your Bio";

  return (
    <div className="about-me">
      <h2>About Me</h2>
      <h3>{name}</h3>
      <p>
        <strong>Profession:</strong> {profession}
      </p>
      <p>{bio}</p>
    </div>
  );
};

export default AboutMe;
// export default function Page() {
//   return <p>Customers Page Test</p>;
// }
