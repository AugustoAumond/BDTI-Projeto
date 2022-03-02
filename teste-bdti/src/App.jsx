import { useEffect, useState} from "react";
import styled from "styled-components";
import { useSelector} from "react-redux";
import Itens from "./components/itens/Itens";
import Add from './components/add/Add'

function App(props){  
  const list = useSelector((state)=>state.list); 

  // Ao abrir a página, se não houver histórico mostrar pagina vazia, caso contrario mostrar o histórico;
  useEffect (() => {
    if (list === null){
      if (JSON.parse(localStorage.getItem('task')).length <= list.length){     
      }
    } else {
      JSON.stringify(localStorage.setItem('task', JSON.stringify(list)));
    }        
  }, [list])

  //Filtrar os itens que estão marcados;
  function listChecked (list){ 
    let newList = [];
    if (list !== null){
      list.map(e => {
        if (e.check === true)
        newList.push(e);
      }) 
    }    
    return newList   
  } 

  // Filtrar os itens que não estão marcados;
  function listUnchecked (list){ 
    let newList = [];
    list.map(e => {
      if (e.check === false){
        newList.push(e);
        console.log(newList);
      }
    }); 
    return newList    
  } 

  //Contador das tarefas pendentes;
  const countPendent = (list) => {
    if (list.length === 1){
      return `Você tem uma tarefa pendente`
    } else {
      return `Você tem ${list.length} tarefas pendentes`  
    } 
  }

  //Contador das tarefas concluidas;
  const countConclouded = (list) => {
    if (list.length === 1){
      return `Você tem uma tarefa concluida`
    } else {
      return `Você tem ${list.length} tarefas concluidas`  
    } 
  }

  return (   
    <Container>  
      <Area> 
          <Header><h1>Lista de Tarefas</h1></Header>
          <Add/>
          <DivPendentes id="pendente">
            <strong><h2>{(listUnchecked(list).length === 0) ? '' : `${countPendent(listUnchecked(list))} pendentes`}</h2></strong>
          </DivPendentes>
          {listUnchecked(list).map((list, index)=>(
            <Itens key={index} list={list} /> 
          ))}
          <DivConcluidas>
            <strong><h2>{(listChecked(list).length === 0) ? '' : countConclouded(listChecked(list))}</h2></strong>
          </DivConcluidas>
          {listChecked(list).map((list, index)=>(
          <Itens key={index} list={list} /> 
          ))}
      </Area>     
    </Container>  
  )
}

export default App;

const Container = styled.div`
background: #120b38eb;
min-height: 100vh;
`

const Area = styled.div`
margin: auto;
color: white;
max-width: 90vh;
padding: 10px;
`

const Header = styled.div`
margin: 0;
padding: 0;
color:#FFF;
text-align: center;
border-bottom: 1px solid #444;
padding-bottom: 20px;
`

const DivPendentes = styled.div`
display: block;
text-align: center;
`

const DivConcluidas = styled.div`
display: block;
text-align: center;
`