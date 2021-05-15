import React from 'react';

const Event = ({event}) => {
    console.log(event);
    return (
        <div style = {{float: "left", margin: "10px",}}>
            <div style = {{boxShadow: "5px 5px 30px gray", textAlign:"center", padding:"10px",borderRadius:"13px"}}>
            <img style= {{padding:"5px",height: '300px',width:"300px",borderRadius:"12px"}} src={event.imagesURL} alt="" />
            <h3>{event.name}</h3>
            </div>
        </div>
    );
};

export default Event;