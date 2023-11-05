import {useState, useEffect} from "react"
import "./searchbar.css"


export default function SearchBar() {  
    const [productFilter, filteredProducts] = useState([])
    const [searchString, setSearchString] = useState("")

    useEffect(fetchAPIData, [searchString])

    function fetchAPIData(){
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(products => { 
                const filtered = products.filter((el) => {return el.title.toLowerCase().includes(searchString.toLowerCase())})
                const currentFilter = products.map((product, index) => {
                    return (<div className="aProduct" key={index}>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                        <img style={{width: "90%"}} src={product.image} alt={product.title} />
                    </div>)
                })

                filteredProducts(currentFilter)
            })
    }

    function handleChange (event) {
        setSearchString(event.target.value)
    }

    return (<div>
        <h1>Search</h1>
        <input type="text" value={searchString} onChange={handleChange} />
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {productFilter}
        </div>
    </div>)
  }