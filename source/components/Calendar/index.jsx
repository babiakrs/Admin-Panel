/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { Icon } from 'Components/Icon';

import './styles.sass';

const CELL_PER_PAGE = 42;
const DAY_IN_MONTH = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
const DAY_IN_MONTH_LY = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
const WEEKDAYS_NAMES = [ 'mo', 'tu', 'we', 'th', 'fr', 'sa', 'su' ];
const MONTHS_NAMES = [ 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december' ];

function Calendar() {
  useEffect(() => {
    document.title = 'Admin Panel • Calendar';
  }, []);

  const [ now, updateNow ] = useState(new Date);
  const [ cellArray, updateCellArray ] = useState([]);

  const getMonths = (date) => (date.getFullYear() % 4) ? DAY_IN_MONTH : DAY_IN_MONTH_LY;
  const getFirstDayOffset = (date) => (new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 6) % 7;

  const generateCellArray = () => {
    const temp_arr = [];
    const fdo = getFirstDayOffset(now);
    const days_count = getMonths(now)[now.getMonth()];

    for (let i = 0; i < CELL_PER_PAGE; i++) {
      temp_arr.push(
        (i < fdo || (i + 1) - fdo > days_count) ? '' : i - fdo + 1
      );
    }

    return temp_arr;
  };

  useEffect(() => updateCellArray(generateCellArray()), [ now ]);

  return (
    <div className='calendar__layout'>
      <div className='calendar__control'>
        <div className='calendar__arrow-left' onClick={() => updateNow(new Date(now.getFullYear(), now.getMonth() - 1))}>
          <Icon type='arrow-left' width='32' height='32'/>
        </div>
        <div className='calendar__current-month'>
          {`${MONTHS_NAMES[now.getMonth()]}, ${now.getFullYear()}`}
        </div>
        <div className='calendar__arrow-right' onClick={() => updateNow(new Date(now.getFullYear(), now.getMonth() + 1))}>
          <Icon type='arrow-right' width='32' height='32'/>
        </div>
      </div>
      <div className='calendar__wrapper'>
        {WEEKDAYS_NAMES.map((v, k) => <div key={k} className='calendar__cell'>{v}</div>)}
        {cellArray.map((v, k) => <div key={k} className='calendar__cell calendar__day'>{v}</div>)}
      </div>
    </div>
  );
}

export { Calendar };