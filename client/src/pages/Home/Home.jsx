import React, { Component } from "react";
import "../Home/Home.scss";
import Main from "../../components/Main/Main";

import axios from "axios";

class Home extends Component {
  state = {
    exerciseData: null,
  };

  setStateExercise = () => {
    axios
      .get("/exercise")
      .then((res) => {
        // console.log(res.data);
        this.setState({
          exerciseData: res.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  componentDidMount() {
    this.setStateExercise();
  }
  render() {
    console.log(this.state.exerciseData);
    return (
      <div>
        {
          this.state.exerciseData && (
            <Main exerciseData={this.state.exerciseData} />
          )
          //(<div>{this.state.exerciseData.map((exe) => (<li>{exe.title}</li>))}</div>)
        }

        {/* {this.state.exerciseData && (
         
        )} */}
      </div>
    );
  }
}
export default Home;
