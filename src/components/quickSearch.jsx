import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuickSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const submitSearch = (e) => {
        e.preventDefault()
        console.log(searchTerm);
        navigate("/search", { state: { query: searchTerm } }); // Передаем объект
    };

    return (
        <form className="d-flex minWidth" role="search" onSubmit={submitSearch}>
            <datalist id="pets">
                <option value="Кошка"></option>
                <option value="Собака"></option>
                <option value="Корова"></option>
                <option value="Крокодил"></option>
                <option value="Сова"></option>
            </datalist>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Поиск"
                aria-label="Поиск"
                list="pets"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">Поиск</button>
        </form>
    );
}

export default QuickSearch;