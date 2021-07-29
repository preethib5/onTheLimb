import React from "react";
import "../Main/Main.scss"

const Main = ({ exerciseData }) => {
  return (
    <>
      <div>
          
      <button className="btn">GenerateExercise</button>
        {exerciseData.map((exe) => (
          <div key={exe.id} className="main">
              <div className="main__image">
                  <img className="main__image--img" src={exe.image} alt="exercise-image" />
              </div>
              <div className="main__container">
             <h3 className="main__container--title">{exe.title}</h3>
             <p className="main__container--detail">{exe.details}</p>
             </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Main;
