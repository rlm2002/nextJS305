import {useState, useEffect} from "react"
import "./searchbar.css"


export default function SearchBar() {  
    let [productFilter, filteredProducts] = useState([])

    function fetchAPIData(){
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(products => { 
                const currentFilter = products.map((product, index) => {
                    return (<div className="aProduct">
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <img src={product.image} alt={product.title} />
                    </div>)
                })

                filteredProducts(currentFilter)
            })
    }

    useEffect(fetchAPIData, [])

    return (<div>
        <h1>Search</h1>
        <div className="allProducts">
            {productFilter}
        </div>
    </div>)
  }