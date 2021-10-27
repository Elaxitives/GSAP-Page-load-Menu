import React from "react";
import { ReactComponent as NextArrow } from "../assets/arrow-right.svg";
import { ReactComponent as PrevArrow } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formula for your skin's unique needs",
    img: "curology-min",
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for your next venture",
    img: "yourspace-min",
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: "lumin-min",
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <PrevArrow />
          </div>
          <div className="cases-arrow next">
            <NextArrow />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((item) => (
            <div className="case" key={item.id}>
              <div className="case-details">
                <span>{item.subtitle}</span>
                <h2>{item.title}</h2>
                <div className="case-image">
                  <img
                    src={require(`../assets/${item.img}.png`)}
                    alt={item.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
