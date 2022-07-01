import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';

const INITIAL_STATE=[
  {
    nick: 'Reyna',
    meses: 6,
    avatar: 'https://i.pravatar.cc/50',
    description: 'Nuevo usuario gamer'
  },
  {
    nick: 'Valentine',
    meses: 9,
    avatar: 'https://i.pravatar.cc/50',
  }
]
  

 //interface
interface Sub {
  nick: string,
  avatar: string,
  meses:number,
  description?: string  //aqui dice qu puede ser opcional la descripion
}

interface AppState{
  subs: Array<Sub>
  newSubsNumber: number
}


function App() {
  const [number, setNumber]= useState<string|number>(5);
  const [subs, setSubs] = useState<Array<Sub>>([]);
  //const [subs, setSubs] = useState<Sub[]>([]);  //esta es otra forma de declararlo
  const [value, setValue]= useState(0);
  const [newSubsNumber, setNewSubsNumber]= useState<AppState["newSubsNumber"]>(0);

  const changeNumber=()=>{
    setNumber("2");
  }

  useEffect(()=>{
    setSubs(INITIAL_STATE);
  }, [])

  return (
    <div className="App">
      {number}
      <br></br>
      <button onClick={changeNumber}>Change Number</button>
      <br></br>
      <h1>Usuarios</h1>
     <List subs={subs}/>
      <br>
      </br>
      <button onClick={()=>setValue(value+1)}>Incremento</button>
      <button onClick={()=>setValue(value-1)}>Decremento</button>
      <h2>{value}</h2>

    </div>
  );
}

export default App;
