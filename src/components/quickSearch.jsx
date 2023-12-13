import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuickSearchRequest } from "../modules/requests";

const QuickSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [card, setCard] = useState({ data: { order: [] } })
    const navigate = useNavigate();

    const submitSearch = (e) => {
        e.preventDefault()
        console.log(searchTerm);
        navigate("/search", { state: { query: searchTerm } }); // Передаем объект
    };

    const onChange = (e) => {
        setSearchTerm(e.target.value)
        if (e.target.value.length > 3) {
            setTimeout(() => QuickSearchRequest(e.target.value, card, setCard), 1000)
        }
    }

    const tipsSet = new Set()
    card.data.order.map((order) => {
        if (tipsSet.size < 5) {
            tipsSet.add(order.description)
            return <option value={order.description}></option>
        }
    })
    const tips = []
    for (const tip of tipsSet.keys()) {
        tips.push(<option value={tip}></option>)
    }

    return (
        <form className="d-flex minWidth" role="search" onSubmit={submitSearch}>
            <datalist id="pets">
                {tips}
            </datalist>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Поиск"
                aria-label="Поиск"
                list="pets"
                value={searchTerm}
                onChange={onChange}
            />
            <button className="btn btn-outline-light" type="submit">Поиск</button>
        </form>
    );
}

export default QuickSearch;