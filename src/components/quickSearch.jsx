import { useNavigate } from "react-router-dom";
const QuickSearch = () => {
    const navigate = useNavigate()
    return (
        <form className="d-flex minWidth" role="search">
            <datalist id="pets">
                <option value="Кошка"></option>
                <option value="Собака"></option>
                <option value="Корова"></option>
                <option value="Крокодил"></option>
                <option value="Сова"></option>
            </datalist>
            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск"
                list="pets" id='search' />
            <button className="btn btn-outline-light" onClick={() => {
                console.log(document.getElementById('search').value);
                navigate("/search", {state: document.getElementById('search').value});
            }}>Поиск</button>
        </form>
    );
}

export default QuickSearch