import { useState, useEffect } from "react";
import CardsList from "./paginator";
import { useLocation } from "react-router-dom";

const Search = () => {
    const location = useLocation();
    const query = location.state?.query || "";

    const [card, setCard] = useState({ data: { order: [] } });

    useEffect(() => {
        const request = () => {
            console.log(`https://pets.сделай.site/api/search?query=${query}`);
            fetch(`https://pets.сделай.site/api/search?query=${query}`)
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    if ('data' in result) {
                        setCard(result);
                        console.log(card)
                    }
                })
                .catch(error => console.log('error', error));
        };
        request();
        if (card.data.order.length > 0) {
            document.getElementById('cards').style.display = 'block'
            document.getElementById('res').style.display = 'block'
        }
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
            <p className="text-center" style={{ display: "none" }} id='res'>Результаты поиска</p>
            <div id='cards' style={{ display: "none" }}>
                <CardsList data={card.data.order} itemsPerPage={6} />
            </div>
        </main>
    );
}

export default Search;