import React, { useState } from 'react';
import "./style.css";
import {InputTodo} from './components/InputTodo';
import {IncompleteTodos} from './components/IncompleteTodos'
import { CompleteTodos } from './components/CompleteTodos';

export const App = () => {
    const [todoText, setTodoText] = useState('');
    const [imcompleteTodos, setImcompleteTodos] = useState([]);
    const [completeTodos, setcompleteTodos] = useState([]);

    const onChangeTodoText = (event)=>{
        setTodoText(event.target.value);
    }
    
    const onClickAdd = ()=>{
        if(todoText === "") return;
        const newTodos = [...imcompleteTodos, todoText];
        setImcompleteTodos(newTodos);
        setTodoText('');
    };

    const onClickDelete = (index)=>{
        const newTodos =[...imcompleteTodos];
        newTodos.splice(index,1);
        setImcompleteTodos(newTodos);
    }

    const onClickComplete = (index)=>{
        const newImcompleteTodos =[...imcompleteTodos];
        newImcompleteTodos.splice(index,1);

        const newCompleteTodos = [...completeTodos,imcompleteTodos[index]];
        setImcompleteTodos(newImcompleteTodos);
        setcompleteTodos(newCompleteTodos);
    }

    const onClickBack = (index)=>{
        const newcompleteTodos =[...completeTodos];
        newcompleteTodos.splice(index,1);
        setcompleteTodos(newcompleteTodos);
        const newImcompleteTodos =[...imcompleteTodos,completeTodos[index]];
        setImcompleteTodos(newImcompleteTodos);
    }

    return (
        <>
            <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd}/>
            <IncompleteTodos todos = {imcompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>
            <CompleteTodos Todos={completeTodos} onClickBack={onClickBack}/>
        </>
    );
};
