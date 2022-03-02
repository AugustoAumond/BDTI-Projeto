import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch} from "react-redux";
import BasicModal from "../../materials/modal/modal";
import { edit } from "../../store/lists/list.actions";

const Itens = (props) => {
    const list = useSelector((state)=>state.list);
    const history = useHistory();

    const dispatch = useDispatch();

    //Se não houver nenhum item na lista retornar Não há tarefas registradas;
    if (list === null) {return <Item> Não há tarefas registradas</Item>} 

    // Substituir o valor da checkbox na lista, adicionar ao histórico e atualizar a tela;
    const addBoolean = (value, id) => {        
        let newList = list;
        newList[id].check = value; 
        dispatch(edit(list, newList));
        JSON.stringify(localStorage.setItem('task', JSON.stringify(newList))); 
        history.push('/');
    }
  
    //Remover um item da lista, adicionar a lista ao historico e atualizar a tela;
    const remove = (id) => {
      let index = 0;
      let newList = list;
      newList.splice(id, 1);
      console.log(newList);
      newList.map((e)=>{  
          e.id = index;
          index++;
      })
      JSON.stringify(localStorage.setItem('task', JSON.stringify(newList)));
      dispatch(edit(list, newList));
      history.push('/');
    }

    return (      
        <Item > 
            <div>
            <input type="checkbox" id="checkbox" checked={props.list.check} onChange={((e)=> addBoolean(e.target.checked, props.list.id))} 
                /> 
            <strong id="strong" > {props.list.task} </strong>
            </div>
            <div id="buttons"> 
                <BasicModal list={props.list} > Editar Tarefa </BasicModal>
                <button onClick={(()=>remove(props.list.id))}> Excluir Tarefa</button>
            </div>  
        </Item> 
        )                      
}

export default Itens;

const Item = styled.div`
background: #a9a9a9;
margin: 20px 15%;
color: white;
max-width: 800px;
padding: 10px;


strong {
    text-decoration: ${props => props.check}
    word-wrap: break-word;
    margin-top: 2px;
    font-size: 16px;
    color: #0c0d1a;
}

div#text {
    word-break: break-word;
}

input#checkbox{
    margin-top: 9px;
}

button {
    display: flex;
    justify-content: center;
    color: #120b38eb;
    font-size: 12px;
    background: white;
    height: 18px;
    width: 90px;
    cursor: pointer;
    border: 1px #120b38eb;
    border-radius: 9px;
    align-items: center;
    margin-left: 4%;
}

    
input#check {
    display: flex;
    height: 18px;
    width: 20px;
}

div {
    display: flex;
    padding: 10px;
}

div#buttons {
    display: flex;
    padding: 1px;
    align-items: center;
}


`




