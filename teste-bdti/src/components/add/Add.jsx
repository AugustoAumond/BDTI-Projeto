import React, { useState, KeyboardEvent } from "react";
import styled from "styled-components";
import {add} from "../../store/lists/list.actions";
import { useSelector, useDispatch } from "react-redux";

function Add () {
    const [addTask, setTask] = useState('');
    const [historic, setHistoric] = useState([]);
    const list = useSelector((state)=>state.list); 

    const dispatch = useDispatch();  

    // Adicionar uma tarefa a lista e jogar os dados no histórico;
    const adicionar = () =>{
        let obj = {id: (list.length !== null) ? list.length : 0  , task: addTask, check: false}; 
        setHistoric(JSON.parse(localStorage.getItem('task')))
        if (historic !== null){
            if (historic.length <= list.length){
                JSON.stringify(localStorage.setItem('task', JSON.stringify(list)));
                }  
            else {
                setHistoric(historic.push(list[list.id]))
            } 
        }
        dispatch(add(list, obj))
        JSON.stringify(localStorage.setItem('task', JSON.stringify(list)))
        setTask('');
    }

    return (
        <DivAdd>
          <strong>Nova Tarefa</strong> 
          <input type="text" placeholder="Adicione a tarefa" value={addTask}  onChange={(e=> setTask(e.currentTarget.value) )} />
          <button onClick={(()=> (addTask === '') ? window.alert('Insira uma tarefa') : adicionar())}> <strong> Adicionar Tarefa </strong></button>
        </DivAdd>
    )
}

export default Add;

const DivAdd = styled.div`
margin: 10px 10px;
padding: 15px;
border: 1px white;

input{
    background: white;
    width: 65vh;
    height: 25px;
    margin-left: 10px;
    border-radius: 10px;
}

button{
    width: 200px;
    height: 25px;
    border-radius: 15px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    ;
}

`