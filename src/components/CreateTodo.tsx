import { nanoid } from '@reduxjs/toolkit';
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/domain/slices/todo';

const CreateTodo = () => {
    const [todo, setTodo] = useState({
        id: '',
        completed: false,
        title: '',
        date: new Date().toDateString(),
    });

    const [error, setError] = useState({ message: '', isError: false });

    const todoTitleRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const onTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
        setError({ message: '', isError: false });
        setTodo(prevTodo => ({
            ...prevTodo,
            id: nanoid(),
            title: event.target.value,
            date: new Date().toDateString()
        }));
    };

    const onTodoCreate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(todo.title === '' ? { message: 'Title is required!', isError: true } : { message: '', isError: false });
        if (todo.title !== '') {
            dispatch(addTodo(todo));
            setTodo({
                id: nanoid(),
                completed: false,
                title: '',
                date: new Date().toDateString(),
            });
            if (todoTitleRef.current) {
                todoTitleRef.current.value = '';
            }
        }
    };

    return (
        <div className="text-center">
            <form className="mt-4 flex w-full" onSubmit={onTodoCreate}>
                <div className="flex-grow relative">
                    <input
                        className="w-full absolute right-0 bottom-0 border-b-2 border-gray-500 text-black outline-none focus:border-primary"
                        type="text"
                        ref={todoTitleRef}
                        placeholder="Enter your task here"
                        onChange={onTodoChange}
                    />
                    <p className={`absolute -bottom-5 w-full mt-2 text-xs text-center text-error transition-all ${error.isError ? 'block' : 'hidden'}`}>
                        <span className="font-medium">Oh, snapp!</span> {error.message}
                    </p>
                </div>
                <button className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-primary rounded-lg flex" type="submit">
                    <HiPlus className="h-6 w-6 " />
                    <span className="px-1">Add</span>
                </button>
            </form>
        </div>
    );
};

export default CreateTodo;
