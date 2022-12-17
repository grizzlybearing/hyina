import React from 'react';
import s from "./MainPerson.module.css"
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const MainPerson = (props) => {
    const {t} = useTranslation();
    const name = props.person.name_en.toLowerCase().split(' ').join('_');
    /*const someText = props.person.someText_en.toLowerCase().split(' ').join('_');*/
    return (
        <div className={s.wrapper}>
            
            <h1>{t('figure_of_the_day')}</h1>
            <img src={props.person.imgPath} alt=""/>
            <div className={s.persname}>{t(name)}</div>
            <div className={s.date}>({props.person.dateOfBirth} - {props.person.dateOfDeath})</div>
            <div className={s.text}>({props.person.someText})</div>
            <NavLink to={props.person.url}>{t('information_button')}</NavLink>
           
        </div>
    );
};

export default MainPerson;