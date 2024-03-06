import React from "react";

const AboutMe: React.FC = () => {
  // Define your data directly within the component
  const name = "Juan Calderon";
  const bio =
    "Juan Calderon is a Mexican-born artist based in the Dallas-Fort Worth metroplex. Juan has been fascinated with art since as far back as he could remember. A perfectionist with a deep emphasis on detail, Juan began drawing intricate artwork from a very young age. An avid lover of science, math, and art, Juan pursued a career in Civil Engineering from the University of Texas at Arlington, graduating in December 2020  with a bachelor's of science.";

  return (
    <div className="about-me">
      <h2>About Me</h2>
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
};

export default AboutMe;
// export default function Page() {
//   return <p>Customers Page Test</p>;
// }
