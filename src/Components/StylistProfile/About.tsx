import { useContext } from "react";
import { StylistContext } from "./StylistProvider";

function About() {
  const stylist: any = useContext(StylistContext);

  return (
    <div className="about">
      <h2 className="section-title">About</h2>
      <p className="about-text">
        {stylist.introduce}
      </p>
    </div>
  );
}

export default About;
