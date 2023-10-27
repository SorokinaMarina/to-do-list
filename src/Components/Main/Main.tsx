import React from "react";
import './Main.css';
import TasksList from '../TasksList/TasksList';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';

function Main (): JSX.Element {
    return (
        <>
            <Header />
            <main className="main">
                <TasksList />
            </main>
        </>
    )
}

export default Main;