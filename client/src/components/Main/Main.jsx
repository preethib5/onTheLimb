import React, { useState, useEffect } from "react";
import "../Main/Main.scss"

const Main = ({ exerciseData }) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    getExercise()
  }, [])

  const getExercise = () => {
    fetch(exerciseData)
      .then(res => res.json())
      .then(data => {
        let dataExercises = data.exercise;
        let randomNum = Math.floor(Math.random() * dataExercises.length);
        let randomExercise = dataExercises[randomNum];
        
        setTitle(randomExercise.title);
        setDetails(randomExercise.details);
        setImage(randomExercise.image);

      })
  }

  const handleClick = () => {
    getExercise();
  }
 
  return (
    <>
      <div>
          
      <button className="btn" onClick={handleClick}>GenerateExercise</button>
          <div className="main">
              <div className="main__image">
                  <img className="main__image--img" src={image} alt="exercise-image" />
              </div>
              <div className="main__container">
             <h3 className="main__container--title">{title}</h3>
             <p className="main__container--detail">{details}</p>
             </div>
          </div>
        ))
      </div>
    </>
  );
};
export default Main;
