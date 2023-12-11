import { React, useState, useEffect } from "react";
import Pagination from "./pagination";
import { useLocation } from "react-router-dom";
const Search = () => {
    const location = useLocation()
    const request = (card, setCard) => {
        console.log(location.state)
        console.log(`https://pets.сделай.site/api/search?query=${location.state}`)
        fetch(`https://pets.сделай.site/api/search?query=${location.state}`).then(response => response.json()).then(result => {
            console.log(result);
            if ('data' in result) {
                console.log('aaaaaaaaaaa')
                setCard(result);
            }
        }).catch(error => console.log('error', error))
    }
    const [card, setCard] = useState({ data: { order: [] } });
    useEffect(() => {
        request(card, setCard);
        console.log(card)
    }, []);
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
            <p className="text-center" style={{ display: "none" }} id='res'>Результаты поиска</p>
            <div id='card' style={{ display: "none" }}>
                <Pagination data={card.data.order} size={6} />
            </div>
        </main>
    );
}

export default Search;