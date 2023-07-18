import React, {FC} from "react";
import Pizza from "../models/Pizza";
import SinglePizza from './SinglePizza'


interface DisplayPizzaProps{
    pizzasList: Pizza[]
    updatePizza: (newPizza: Pizza)=> void
    deletePizza: (id:number)=> void
}
const DisplayPizza:FC<DisplayPizzaProps> =({pizzasList, updatePizza, deletePizza})=> {
    return(
        <div className="container">
            {pizzasList.map(pizza => {
                return <SinglePizza 
                key={pizza.id} 
                updatePizza={updatePizza}
                deletePizza={deletePizza}
                pizza={pizza} />
            })}
        </div>
    )

}

export default DisplayPizza