import { useState, useEffect } from "react";
import CardsList from "./paginator";
import { useLocation } from "react-router-dom";
import { QuickSearchRequest } from "../modules/requests";

const Search = () => {
    const location = useLocation();
    const query = location.state?.query

    const [card, setCard] = useState({ data: { orders: [] } });

    useEffect(() => {
        QuickSearchRequest(query, card, setCard)
    }, [query]);

    return (
        <main style={{ "minHeight": "70vh" }}>
            <h2 className="text-center text-white bg-primary m-3">Поиск по объявлениям</h2>
            <form className="w-25 m-auto minContainer">
                <div className="row mb-3">
                    <div className="col-sm-10 w-100">
                        <label htmlFor="input3" className="col-form-label">Район</label>
                        <input className="form-control m-auto" id="input3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 w-100">
                        <label htmlFor="inputPassword3" className="col-form-label">Вид</label>
                        <input className="form-control w-100" id="inputPassword3" required />
                    </div>
                </div>
                <p className="btn btn-primary">Найти</p>
            </form>
            <CardsList data={card.data.orders} itemsPerPage={6}/>
        </main>
    );
}

export default Search;