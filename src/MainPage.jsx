import React from 'react';
import PortalInfo from "./PortalInfo";
import MainPerson from "./MainPerson";
import DevelopersInfo from "./DevsInfo";
import developersInfo from "./developersInfo";

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