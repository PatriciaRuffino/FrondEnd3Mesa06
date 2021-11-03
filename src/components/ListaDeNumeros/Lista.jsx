import React from 'react';
import './style.css';
import ClassComponent from '../ClassComponent';
import FunctionComponent from '../FunctionComponent';

const ListaConvidados = () =>{
    const convidados = [
        {nome:"Nicolas",
        estaNalista:true,
        tarefa:"batata-frita"},
        {nome: "Pedro",
        estaNalista:false,
        tarefa:"Pizza"},
        {nome:"Carolina",
        estaNalista: true,
        tarefa:"Bebidas"
        }
    ];
    /* const tarefas=["Batata-Frita", "Pizza", "Bebidas"] */
    return(
        <ul className="list">
          <li> 
          <h3>Convidados</h3>
              {convidados.map((convidado)=><ClassComponent key = {convidado} nome={convidado.nome} estaNalista={convidado.estaNalista}/>)}</li>
           <li> 
               <h3>Tarefas</h3>
               {convidados.map((convidado)=><FunctionComponent key = {convidado} nome={convidado.nome} tarefa={convidado.tarefa}/>)} </li>
            </ul>
    )
}

export default ListaConvidados;