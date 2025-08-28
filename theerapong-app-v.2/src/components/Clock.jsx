import React from 'react';

const Clock = () => {
    const now = new Date();
    const timeString = now.toLocaleDateString('th-TH');
    const dataString = now.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'

    });

    return (
        <div calssNAme="clock">
            <h3>เวลาปัจจุบัน</h3>
            <p className="date">{dataString}</p>
            <p className="timeString">{timeString}</p>
        </div>
    );

};

export default Clock;