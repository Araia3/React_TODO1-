import React, { useState } from 'react';
import "./style.css";

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
            <div className='input-area'>
                <input placeholder='TODOを入力' value={todoText} onChange={onChangeTodoText}/>
                <button onClick={onClickAdd }>追加</button>
            </div>
            <div className='imcomplete-area'>
                <p className='title'>未完了のTODO</p>
                <ul>
                    {imcompleteTodos.map((todo,index) => {
                        return (
                            <div key={todo} className='list-row'>
                                <li>{todo}</li>
                                <button onClick={()=>onClickComplete(index)}>完了</button>
                                <button onClick={()=>onClickDelete(index)}>削除</button>
                            </div>
                        );
                    })}
                </ul>
            </div>
            <div className='complete-area'>
                <p className='title'>完了のTODO</p>
                <ul>
                    {completeTodos.map((todo1,index) => {
                        return (
                            <div key={todo1} className='list-row'>
                                <li>{todo1}</li>
                                <button onClick={()=>onClickBack(index)}>戻す</button>
                            </div>
                        );
                    })}

                </ul>
            </div>
        </>
    );
};
