import "./Header.scss" 
import React, { Component } from 'react'


export default class Header extends Component {
    render() {
        return (
            <header className="header">
                    <div className="header__logo">
                        <h1 className="header__logo--title">On The Limb</h1> 
                    </div>
                        <ul className="header__list">
                            <li className="header__list--item-one">Home Page</li>
                            <li className="header__list--item-two">Upload Page</li>
                        </ul>
            </header>
        )
    }
}
