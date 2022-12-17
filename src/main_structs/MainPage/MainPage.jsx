import React from 'react';
import PortalInfo from "./Portal/PortalInfo";
import MainPerson from "./MainPerson/MainPerson";
import DevelopersInfo from "./Devs/DevsInfo";
import developersInfo from "../../timeline/developersInfo";

const MainPage = (props) => {
    return (
        <div>
            <PortalInfo />
            <MainPerson person={props.mainPerson}/>
            <DevelopersInfo info={developersInfo}/>
        </div>
    );
};

export default MainPage;