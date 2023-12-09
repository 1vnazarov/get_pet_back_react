import {React, useState, useEffect} from "react";
import Card from "./card";
const Search = () => {
    const [card, setCard] = useState({ data: { order: [] } });
    useEffect(() => request(card, setCard), []);
    const request = (card, setCard) => {
        console.log(localStorage.getItem("query"))
        fetch(`https://pets.сделай.site/api/search?query=${localStorage.getItem("query")}`).then(response => response.json())
            .then(result => {
                console.log(result);
                if ('data' in result) {
                    setCard(result);
                    document.getElementById('res').style.display = 'block'
                    document.getElementById('card').style.display = 'flex'
                }
                else {
                    document.getElementById('res').style.display = 'none'
                    document.getElementById('card').style.display = 'none'
                }
            }).catch(error => console.log('error', error));
    }
    const cards = card.data.order.map((order) => {
        return <Card data={order}/>;
    });
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
            <p className="text-center" style={{display:"none"}} id='res'>Результаты поиска</p>
                <div className="row justify-content-center" id='card' style={{display:"none"}}>
                {cards}
            </div>
        </main>
    );
}

export default Search;