import React from "react";
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
import QuickSearch from "./quickSearch";
const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}><img src={logo} alt="logo" className="w-25 rounded-3" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample03">
                        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to={'/'}>Главная</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                    aria-expanded="false">Личный кабинет</a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={"/profile"}>Личный кабинет</Link></li>
                                    <li><Link className="dropdown-item" to={"/login"}>Войти</Link></li>
                                    <li><Link className="dropdown-item" to={"/register"}>Регистрация</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                    aria-expanded="false">Объявления</a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={'/addCard'}>Добавить объявление</Link></li>
                                    <li><Link className="dropdown-item" to={'/search'}>Поиск по объявлению</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <QuickSearch/>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;