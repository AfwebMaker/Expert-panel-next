import React from 'react';
import Countdown from 'react-countdown';

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <span>به پایان رسید</span>;
    } else {
        // Render a countdown
        return (
            <div className='gap-x-1 min-w-[80px] max-w-[140px] flex items-center justify-between'>
                <span>{seconds <= 9 ? "0" + seconds : seconds}</span>
                <span>:</span>
                <span>{minutes <= 9 ? "0" + minutes : minutes}</span>
                <span>:</span>
                <span>{hours <= 9 ? "0" + hours : hours}</span>
                {
                    !!days &&
                    (
                        <>
                            <span className='px-1'>-</span>
                            <span className='flex gap-x-1'>
                                <span>{days}</span>
                                <span>روز</span>
                            </span>
                        </>
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
