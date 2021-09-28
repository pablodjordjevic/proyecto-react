import {useState} from 'react'

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);

    onAdd = stock;
    
    if (count > stock){
        setCount(initial);
    } 
    if (count === (initial-1)){
        setCount(initial);
    }
    if(onAdd > 0) {
        return(
            <div className="app">
                <h1>{count}</h1>
                <div className="button-wrapper">
                    <button onClick = { ()=> setCount(Math.max(count-1)) }>-</button>
                    <button onClick = { ()=> setCount(Math.max(count+1)) }>+</button>
                </div>
            </div>
        )
    } else if(onAdd === 0){
        alert("No quedo stock");
    }
    }

export default ItemCount;

