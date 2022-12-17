import React from 'react';
import s from "./site.css";
import Navbar from "./Navbar";
import MainPage from "./MainPage"
import List from "./MakersList"
import PersonalPage from "./PersonalPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import poetsInfo from "./poetsInfo";

const getRandomPerson = () => {
    let id = Math.floor(Math.random() * 5) + 1;
    let randomPerson;
    poetsInfo.map(person => {
        if (person.id === id)
            randomPerson = person;
    });

    return randomPerson;
}

const Site = (props) => {
    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Navbar/>
                <div>
                    <Routes>
                        <Route path='/*' element={<MainPage mainPerson={getRandomPerson()}/>}/>
                        <Route path='/list' element={<List/>}/>
                        {poetsInfo.map((person, i) => <Route key={i} path={person.url} element={<PersonalPage info={person}/>}/>)}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Site;
