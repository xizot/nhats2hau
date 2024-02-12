import React, { useState, useEffect } from 'react';
import './CountTime.css';

const padZero = (num) => {
  return (num < 10 ? '0' : '') + num;
};

const startDate = new Date("2018/09/19");
function CountTime() {
  const [now, setNow] = useState(new Date() - startDate);

  const days = Math.floor(now / (1000 * 60 * 60 * 24));
  const hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((now % (1000 * 60)) / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date() - startDate);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="count-time__wrapper">
      <div className='infor'>
        <div className='infor__item heart'>
          <div className='name'>Nhật - Minh Hậu</div>
        </div>
      </div>
      <div className="count-time">
        <div className="count-time__item days">
          <div className="digit">{padZero(days)}</div>
          <div className="label">Days</div>
        </div>
        <div className="count-time__item hours">
          <div className="digit">{padZero(hours)}</div>
          <div className="label">Hours</div>
        </div>
        <div className="count-time__item minutes">
          <div className="digit">{padZero(minutes)}</div>
          <div className="label">Minutes</div>
        </div>

        <div className="count-time__item seconds">
          <div className="digit">{padZero(seconds)}</div>
          <div className="label">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default CountTime;
