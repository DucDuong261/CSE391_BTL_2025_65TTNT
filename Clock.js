import React, { useEffect, useState } from "react";

function formatDate(date){
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function Clock() {
    const [timeString, setTimeString] = useState('');

    useEffect(() => { 
        const intervalId = setInterval(() => {
            const now = new Date();
            setTimeString(formatDate(now));
        }, 1000);

        return () => clearInterval(intervalId); // cleanup
    }, []);

    return (
        <p style={{ fontSize: '42px' }}>{timeString}</p>
    );
}

export default Clock;
