import React from "react";
import logo from '../images/logo.png';
const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html"><img src={logo} alt="logo" className="w-25 rounded-3" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample03">
                        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="index.html" id="gotoMain">Главная</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                    aria-expanded="false">Личный кабинет</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="profile.html">Личный кабинет</a></li>
                                    <li><a className="dropdown-item" href="auth.html">Войти</a></li>
                                    <li><a className="dropdown-item" href="register.html">Регистрация</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                    aria-expanded="false">Объявления</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="add.html">Добавить объявление</a></li>
                                    <li><a className="dropdown-item" href="search.html">Поиск по объявлению</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <datalist id="pets">
                                <option value="Кошка"></option>
                                <option value="Собака"></option>
                                <option value="Корова"></option>
                                <option value="Крокодил"></option>
                                <option value="Сова"></option>
                            </datalist>
                            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск"
                                list="pets" />
                            <button className="btn btn-outline-light" type="submit">Поиск</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;