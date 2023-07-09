"use client"

import CreateTodo from '@/components/CreateTodo';
import ListTodos from '@/components/ListTodos';
import React from 'react';

const Home = async () => {
    return (
        <div className="w-full h-screen bg-gray-100 pt-8">
            <div className="p-3 max-w-md mx-auto">
                <CreateTodo />
                <ListTodos />
            </div>
        </div>
    );
};

export default Home;
