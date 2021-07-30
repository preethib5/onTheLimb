import "../Header/Header.scss" 
import React, { Component } from 'react'
import {Redirect,Link } from 'react-router-dom';
import styled from "styled-components";

const NavUnlisted = styled.ul`
    text-decoration: none
`;

const linkStyle = {
    textDecoration: "none"
}

export default class Header extends Component {

    render() {
       
        return (
            <header className="header">
                <NavUnlisted>
                <Link to={`/`} className="header__links" style={linkStyle}>
                <div className="header__logo">
                        <h1 className="header__logo--title">On The Limb</h1> 
                    </div>
                </Link>
                </NavUnlisted>
                    
                        <ul className="header__list">
                            <Link  to={`/`}><li className="header__list--item-one">Home</li></Link>
                            {/* <Link  to={`/upload`} ><li className="header__list--item-two">Upload</li></Link> */}
                            <li  className="header__list--item-three"> <Link className="header__list--item-three" to={`/login`} onClick={this.props.signOut}>SignOut</Link></li>
                        </ul>
                       
            </header>
        )
    }
}
