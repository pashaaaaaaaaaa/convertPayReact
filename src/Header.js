import React from "react";
import  './header.css'

export default function Header(){
    return (
        <div className="container">
            <header>
                <img src="img/logo.svg"/>
                <nav>
                    <li>БАНК</li>
                    <li>БИЗНЕС</li>
                    <li>ИНВЕСТИЦИИ</li>
                    <li>СТРАХОВАНИЕ</li>
                    <li>МОБАЙЛ</li>
                    <li>ПУТЕШЕСТВИЯ</li>
                    <li>РАЗВЛЕЧЕНИЯ</li>
                </nav>
                <button>ВОЙТИ</button>
            </header>
        </div>
    )
}