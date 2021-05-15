import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
const Home = () => {
    const [events , setEvent] = useState([])
    useEffect(() => {
            fetch(`http://localhost:5055/events`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])
    return (
        <div>
            <h1>hey i am home</h1>   
            {
                events.map(event => <Event event = {event}></Event>) 
            }
        </div>
    );
};

export default Home;