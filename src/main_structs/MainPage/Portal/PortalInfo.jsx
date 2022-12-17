import React from 'react';
import s from "./PortalInfo.module.css"
import {useTranslation} from "react-i18next";




const PortalInfo = (props) => {
    const {t} = useTranslation();
    let maintitle_en='Belarusian Poets';
    const name = maintitle_en.toLowerCase().split(' ').join('_');
    let portaltext_en='Portal Text';
    const text = portaltext_en.toLowerCase().split(' ').join('_');
    return (
        <div className={s.wrapper}>
         <div className={s.name}>{t(name)}</div>
         <div className={s.disc}>{t(text)}</div>
        </div>
       
    );
};


export default PortalInfo;

