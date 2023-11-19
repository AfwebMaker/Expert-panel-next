import React from 'react';
import moment from 'jalali-moment';
// react icons
import { TiChevronRight } from "react-icons/ti";

const Calendar = ({ date }) => {

    moment.locale('fa', { useGregorianParser: true });

    const jalaliDate = moment(date)

    const daysInMonth = jalaliDate.daysInMonth();

    const weekDays = moment.weekdays(true)

    const boxes = Array(7).fill(null).map(() => []);

    const firstDayOfMonth = moment(date).startOf('month').weekday();

    for (let i = 0; i < firstDayOfMonth; i++) {
        boxes[i].unshift(
            <div
                key={'prev' + i}
                className="w-[50px] h-[50px] rounded text-lg mx-1 mb-4 text-center fcc font-bold bg-red-300"
            >
                -
            </div>
        );
    }
    const startOfMonth = moment(date).startOf("month").add(-1, 'day')
    for (let i = 0; i < daysInMonth; i++) {
        const currentDate = startOfMonth.add(1, 'day');
        const isSameDay = currentDate.isSame(jalaliDate, 'day');
        const dayOfWeek = currentDate.weekday();

        boxes[dayOfWeek].push(
            <div
                key={i}
                style={{
                    backgroundColor: isSameDay ? '#45B649' : '#E5E7EB',
                    color: isSameDay ? 'white' : '#808080',
                }}
                className="w-[50px] h-[50px] rounded text-lg mx-1 mb-4 text-center fcc font-bold"
            >
                {isSameDay ? (
                    <div className='w-full h-full relative fcc'>
                        <TiChevronRight className='absolute -right-0.5 -top-0.5 -rotate-45 text-yellow-400'/>
                        {currentDate.format('jD')}
                    </div>
                ) : (
                    currentDate.format('jD')
                )}
            </div>
        );
    }

    return (
        <div className="w-full flex flex-row justify-center">
            {weekDays.map((day, index) => (
                <div key={index} className='mx-1'>
                    <div
                        className="w-[50px] h-[50px] border-b border-cf-300 fcc mb-6 mx-1 text-cf-300"
                    >
                        {day}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {boxes[index]}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Calendar;
