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

    const prevMonth = moment(date).subtract(1, 'month');
    const prevMonthDays = prevMonth.daysInMonth();

    for (let i = 0; i < firstDayOfMonth; i++) {
        boxes[i].unshift(
            <div
                key={'prev' + i}
                className="w-full h-[30px] text-sm sm:h-[50px] sm:text-lg lg:h-[30px] lg:text-sm xl:h-[50px] xl:text-lg rounded mb-3 text-center fcc font-bold text-[#808080] bg-[#E5E7EB] opacity-30"
            >
                {prevMonthDays - firstDayOfMonth + i + 1}
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
                    color: isSameDay ? 'white' : dayOfWeek === 6 ? '#EF4444' : '#808080',
                }}
                className="w-full h-[30px] text-sm sm:h-[50px] sm:text-lg lg:h-[30px] lg:text-sm xl:h-[50px] xl:text-lg fcc rounded mb-3 text-center font-bold"
            >
                {isSameDay ? (
                    <div className='w-full h-full relative fcc'>
                        <TiChevronRight className='hidden sm:block absolute -right-0.5 -top-0.5 -rotate-45 text-yellow-400' />
                        {currentDate.format('jD')}
                    </div>
                ) : (
                    currentDate.format('jD')
                )}
            </div>
        );
    }

    return (
        <div className="w-full flex flex-row justify-center mb-1">
            {weekDays.map((day, index) => (
                <div key={index} className='mx-1.5 flex flex-col w-[30px] sm:w-[50px] lg:w-[30px] xl:w-[50px]'>
                    <div
                        className="w-full h-[40px] border-b-2 border-gray-200 text-[10px] sm:text-xs lg:text-[10px] xl:text-xs font-bold fcc mb-6 mx-1 text-cf-300"
                    >
                        {day}
                    </div>
                    <div className='flex flex-col fcc'>
                        {boxes[index]}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Calendar;
