"use client"

import React from 'react';
import Header from '@/partials/header';
import Footer from '@/partials/footer';
import { Provider } from 'react-redux';
import store from '@/domain/store';

type Props = {
    children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
    return (
        <Provider store={store}>
            <Header />
            <main className="container">{children}</main>
            <Footer />
        </Provider>
    );
};
export default MainLayout;
