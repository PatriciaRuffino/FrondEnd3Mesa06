import './App.css';
import Lista from './components/ListaDeNumeros/Lista'


function App() {
  return(
  <>
    <div className="App">
     
     {/*  <h3>Convidados:</h3>
    <ClassComponent nome="Nicolas"estaNalista={true}/>
    <ClassComponent nome="Pedro"estaNalista={false}/>
    <ClassComponent nome="Carolina"estaNalista={true}/>

    <h3>Tarefas: </h3>

    <FunctionComponent nome="Nicolas" tarefa="batata-frita" />
    <FunctionComponent nome="Pedro" tarefa="pizza" />
    <FunctionComponent nome="Carolina" tarefa="bebidas" />
    <div> */}
    
      <Lista />
    </div>
    
    </>
    
    
    
    
  )
  
    
}

export default App;
