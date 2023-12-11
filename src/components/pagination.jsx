import { useState } from "react";
import Card from "./card";

const Pagination = (props) => {
    const content = props.data
    const [page, setPage] = useState([content.slice(0, props.size-1)])
    let j = 1;
    const list = [];
    for (let index = 0; index < content.length; index += props.size) {
        let l = (j - 1) * props.size;
        let m = j * props.size;
        list.push(<li className="page-item" key={j + 'list'}><p className="page-link" onClick={() => {
            setPage(content.slice(l, m));
        }}>{j}</p></li>)
        j++
    }
    const cards = page.map((order) => {
        return (
            <div className="col">
                <Card data={order} />
            </div>
        );
    })
    return (
        <div className="w-100">
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                {cards}
            </div>
            <nav>
                <ul className="pagination justify-content-center">
                    {list}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination