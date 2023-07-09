import { IRootState } from '@/domain/store';
import React, { ChangeEvent } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toogleTodo } from '@/domain/slices/todo';

const ListTodos = () => {
    const todos = useSelector((state: IRootState) => state.todos);

    const dispatch = useDispatch();

    const onToggleTodo = (id: string) => {
        dispatch(toogleTodo(id));
    };

    const onDeleteTodo = (id: string) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div className="mt-8 w-full">
            {todos.map(todo => (
                <div className="rounded-lg" key={todo.id}>
                    <div className="flex align-middle flex-row justify-between">
                        <div className="p-2">
                            <input type="checkbox" className="w-5 h-5 cursor-pointer" onChange={e => onToggleTodo(todo.id)} />
                        </div>
                        <div className="p-2 flex-grow">
                            <p className={`text-lg text-gray-400 ${todo.completed ? 'line-through ' : ''}`}>{todo.title}</p>
                        </div>
                        <button className="text-red-500 border-2 hover:border-error hover:opacity-80 px-3 py-1 rounded-lg transition-all" onClick={e => onDeleteTodo(todo.id)}>
                            <HiOutlineTrash className="text-error" />
                        </button>
                    </div>
                    <hr className="mt-1 mb-2" />
                </div>
            ))}
        </div>
    );
};

export default ListTodos;
