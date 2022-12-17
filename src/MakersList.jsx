import React from 'react';
import MakersSearch from "./MakersSearch";
import poetsInfo from "./poetsInfo.js";

const MakersList = (props) => {
    return (
        <div>
            <MakersSearch details={poetsInfo}/>
        </div>
    );
};

export default MakersList;