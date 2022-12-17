import React from 'react';
import template from './PersonalPage.module.css'
import "react-vertical-timeline-component/style.min.css"
import Timeline from "./Timeline/Timeline";
import Workplace from "./Workplace/Workplace";
import Videos from "./Videos/Videos";
import Photos from "./Photos/Photos";
import {useTranslation} from "react-i18next";
import {useLoadScript} from "@react-google-maps/api"

const PersonalPage = (props) => {
    const {t} = useTranslation();
    const name = props.info.name_en.toLowerCase().split(' ').join('_');
    const {isLoaded} = useLoadScript(
        {googleMapsApiKey: "AIzaSyAjWoYvnojTneG5630-xVLtpa0ernNo9DM"})
    if (!isLoaded)
        return <div>Loading...</div>
    return (
        <div className={template.wrapper}>
            <h1>{t(name)}</h1>
            <h4>({props.info.dateOfBirth} - {props.info.dateOfDeath})</h4>
            <img src={props.info.imgPath} alt="" className={template.avatar}/>
            <Timeline info={props.info}/>
            <Photos photos={props.info.photos}/>
            <Videos links={props.info.links}/>
            <Workplace coordinates={props.info.coordinates}/>
        </div>
    );
};

export default PersonalPage;