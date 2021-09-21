import {useState} from 'react'

const ItemCount = () => {
const [counter, setCounter] = useState(1);

const incrementar = () => {
  setCounter(counter + 1);
  }

  const descrementar = () => {
    setCounter(counter -1);
  }

  return(
      <div> 
        <p>STOCK: {counter}</p>
        <button onClick={descrementar}>-</button>
        <button onClick={incrementar}>+</button>
      </div>
  );
}

export default ItemCount;

