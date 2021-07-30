import React, { useState, useEffect } from "react";
import { Component } from "react";
import "../Main/Main.scss";


class Main extends Component{
  state={
    image:'',
    title:'',
    details:''
  }
    // const [title, setTitle] = useState("");
    // const [details, setDetails] = useState("");
    // const [image, setImage] = useState("");
  
    // useEffect(() => {
    //   getExercise();
    // }, []);
  

   handleClick = () => {
     debugger
    let random;
    //let max = 10;
    //getExercise();
    let randomNum = Math.floor(Math.random() * this.props.exerciseData.length-1);
    console.log(randomNum)
    let exercise= this.props.exerciseData.find((num) => Number(num.id) === randomNum)
    this.setState({
      image:exercise.image,
      title:exercise.title,
      details:exercise.details,

    })

    console.log(exercise)
  };

  render (){
    return (
      <>
        <div>
          <button className="btn" onClick={this.handleClick}>
            GenerateExercise
          </button>
          <div className="main">
            <div className="main__image">
              <img
                className="main__image--img"
                src={this.state.image}
                alt="exercise-image"
              />
            </div>
            <div className="main__container">
              <h3 className="main__container--title">{this.state.title}</h3>
              <p className="main__container--detail">{this.state.details}</p>
            </div>
          </div>
        </div>
      </>
    );


  }
}

  
export default Main;
