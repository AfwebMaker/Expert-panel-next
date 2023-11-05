import React from 'react';
import Countdown from 'react-countdown';

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <span>جشنواره به اتمام رسید</span>;
    } else {
        // Render a countdown
        return (
            <div className='flex gap-x-1'>
                <span>{seconds}</span>
                <span>:</span>
                <span>{minutes}</span>
                <span>:</span>
                <span>{hours}</span>
                <span className='px-2'>-</span>
                {
                    days &&
                    (
                        <span className='flex gap-x-1'>
                            <span>{days}</span>
                            <span>روز</span>
                        </span>
                    )
                }

            </div>
        );
    }
};

// Component
const TimerDown = ({ time }) => {
    return (
        <Countdown
            date={Date.now() + time}
            renderer={renderer}
        />
    );
}

export default TimerDown;
