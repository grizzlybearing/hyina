import React from 'react';
import timelineElements from "../../../timeline/timelineElements";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {ReactComponent as WorkIcon} from "../camera.svg";
import {ReactComponent as SchoolIcon} from "../book.svg";
import {ReactComponent as ChildIcon} from "../cubes.svg";

const Timeline = (props) => {
    let workIconStyles = { background: "#835229" };
    let schoolIconStyles = { background: "#b89a7e" };
    let childIconStyles = { background: "#a36b38" };

  
    return (
        <VerticalTimeline>
             
            {timelineElements[props.info.id - 1].map((element) => {
                return (
                    <VerticalTimelineElement
                        key={element.id}
                        date={element.date }
                        style={{ color: '#000000' }}
                      

                        iconStyle={element.icon === "work" ? workIconStyles : element.icon === "school" ? schoolIconStyles : childIconStyles}
                        icon={element.icon === "work" ? <WorkIcon /> : element.icon === "school" ? <SchoolIcon /> : <ChildIcon />}
                    >
                        
                        <h3 className="vertical-timeline-element-title">
                            {element.title}
                        </h3>
                        <p id="description">{element.description}</p>
                    </VerticalTimelineElement>
                     
                 
                );
                
            })}
        </VerticalTimeline>
    );
};

export default Timeline;