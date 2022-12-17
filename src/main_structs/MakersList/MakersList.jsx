import React from 'react';
import MakersSearch from "./MakersSearch/MakersSearch";
import poetsInfo from "../../timeline/poetsInfo.js";

const MakersList = (props) => {
    return (
        <div>
            <MakersSearch details={poetsInfo}/>
        </div>
    );
};

export default MakersList;