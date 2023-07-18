import React, {FC, useState} from 'react';
import './App.css';
import Pizza from './models/Pizza';
import AddPizzaForm from './components/AddPizzaForm';
import DisplayPizza from './components/DisplayPizza';



const App: FC =()=> {

  const [pizzasList, setPizzasList] = useState<Pizza[]>([])

  const addPizza = (newPizza: Pizza)=> {
    setPizzasList([...pizzasList, newPizza])
  }

  const updatePizza = (newPizza: Pizza)=> {
    setPizzasList(pizzasList.map((pizza) =>
    (pizza.id === newPizza.id ? newPizza : pizza)))
  }
  
const deletePizza =(id:number)=> {

  const newPizzasList = pizzasList.filter(pizza => pizza.id !== id);
  setPizzasList(newPizzasList)
}


  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Наша піцерія</span>
        <AddPizzaForm addPizza={addPizza}/>
        <DisplayPizza 
        pizzasList={pizzasList}
        updatePizza={updatePizza}
        deletePizza={deletePizza}
        />
      </div>
     
    </div>
  );
}

export default App;