import React, { Component } from "react";
import "../Home/Home.scss";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";


import {Link, Redirect} from 'react-router-dom';

class Home extends Component {
  state = {
    exerciseData: null,
    islogout: false
  };

  setStateExercise = () => {
    axios
      .get("http://localhost:8080/exercise")
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
  signOut=()=>{
    localStorage.removeItem("token");
    this.setState({
        isLogged:true,
    })
}
  render() {
    if(this.state.isLogged){
        return <Redirect  to={`/login`}/>
    }
    const { match } = this.props;
    console.log(this.state.exerciseData);
    return (
      <div>
        <Link to={`${match.path}`} ><Header signOut={this.signOut} /></Link>
        {this.state.exerciseData && (
          <Main exerciseData={this.state.exerciseData} />
        )}
        <Footer/>
      </div>
    );
  }
}
export default Home;
