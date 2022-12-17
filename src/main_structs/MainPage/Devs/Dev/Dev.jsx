import React from 'react';
import s from "./Dev.module.css"
import {useTranslation} from "react-i18next";

const Dev = (props) => {

    return (
        <div className={s.info}>
            <a href={props.info.github}><img src={props.info.img_src} alt=""/></a>
            <h1>{props.info.name}</h1>
            <h2>{props.info.nickname}</h2>
        </div>
    );
};

export default Dev;