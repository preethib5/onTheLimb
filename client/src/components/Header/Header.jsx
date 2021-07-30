import "../Header/Header.scss" 
import React, { Component } from 'react'

import {Redirect,Link } from 'react-router-dom';

export default class Header extends Component {

    render() {
       
        return (
            <header className="header">
                <Link to={`/`} >
                <div className="header__logo">
                        <h1 className="header__logo--title">On The Limb</h1> 
                    </div>
                </Link>
                    
                        <ul className="header__list">
                            <Link  to={`/`}><li className="header__list--item-one">Home</li></Link>
                            <Link  to={`/upload`} ><li className="header__list--item-two">Upload</li></Link>
                            <li  className="header__list--item-three"> <Link to={`/login`} onClick={this.props.signOut}>SignOut</Link></li>
                        </ul>
                       
            </header>
        )
    }
}
