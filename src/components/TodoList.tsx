import React from 'react'
import { Todo } from "../model";
import './style.css'
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    CompletedTodos: Array<Todo>;
}

const TodoList: React.FC<props> = ({
    todos,
    setTodos,
    // CompletedTodos,
    // setCompletedTodos,
}) => {
    return (
        <div className='container'>
            <Droppable droppableId='TodoList'>
                {(provided) => (
                    <div
                        className="todos"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span className='todos__heading'>Active Tasks</span>
                        {todos.map((todo) => (
                            <SingleTodo
                                todo={todo}
                                key={todo.id}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        ))}
                    </div>
                )}
            </Droppable>

            <Droppable droppableId='TodosRemove'>
                {(provided) => (
                    <div 
                    className='todos remove'
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                        <span className='todos__heading'>Completed Tasks</span>
                        {todos.map((todo) => (
                            <SingleTodo
                                todo={todo}
                                key={todo.id}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        ))}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default TodoList;
