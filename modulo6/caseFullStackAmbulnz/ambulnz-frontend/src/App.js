import axios from "axios"
import { useEffect, useState } from "react";
import { BASE_URL } from "./constansts";

function App() {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}/pizzas`)
      .then((res) => {
        setPizzas(res.data.pizzas)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <ul>
        {pizzas.map((pizza) => {
          return (
            <li>
              <h3>{pizza.name}</h3>
              <p>{`$ ${pizza.price.toFixed(2)}`}</p>
              <p>
                {pizza.ingredients.map((item) => {
                  return (
                    <spam>{`${item} `}</spam>
                  )
                })}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;