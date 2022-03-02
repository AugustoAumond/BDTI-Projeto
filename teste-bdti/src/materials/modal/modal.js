import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useState} from 'react';
import styled from 'styled-components';
import { edit } from '../../store/lists/list.actions';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


const style = {
  background: '#120b38;',
  color: 'white;',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [text, setText] = useState(props.list.task);
  const list = useSelector((state)=>state.list);
  const history = useHistory();

  const dispatch = useDispatch();

  // Editar a descrição da tarefa, validar se há string no inpute, atualizar a lista, adicionar no histórico e atualizar a tela;
  function EditTask(){
    let newList = list;
    if (text === ''){
      window.alert('Digite a sua tarefa')   
    }else {
      newList[props.list.id].task = text;
      dispatch(edit(list, newList));
      JSON.stringify(localStorage.setItem('task', JSON.stringify(newList)));  
      handleClose();
      history.push('/');   
    }
  }

  return (
    <div>
      <Button onClick={handleOpen}> Editar </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title"  >          
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          </Typography>
          <div>
          <strong> Editar Tarefa </strong>
          <input value={text} onChange={((e)=>setText(e.currentTarget.value))}></input>
          </div>
          <button onClick={(()=>EditTask())}>Editar</button>
        </Box>
      </Modal>
    </div>
  );
}

const Box = styled.div`
background: #0a0c24f0;
  width: 80%;
  height: 25%;
  margin: auto;
  margin-top: 50%;

  div{
    display: flex;
    margin-top: -35%;
  }

  input{
    margin-top: 10vh;
    margin-left: 1vh;
    width: 41vh;
    border-radius: 5px;
  }

  strong{
    margin-top: 10vh;
    margin-left: 20px;
    color: #d1cbcb;
  }

  button{
    width: 20%;
    margin-left: 8%;
    margin-top: 5%;
    border-radius: 7px;
    box-shadow: 3px 3px 3px 2px #1e1e76a1;
  }

`