//client side component
import React, {useEffect, useState}  from 'react';
import '../../../styles/components/navigation/navigation-widgets/_timezones.scss'

const Timezones = () => {
  const [bangkokTime, setBangkokTime] = useState('')
  const [londonTime, setLondonTime] = useState('')
  const [nycTime, setNycTime] = useState('')

  // Function to get the time in a specific timezone
  const getTimeInTimeZone = (timeZone) => {
    const now = new Date();
    // const hour = now.toLocaleString('en-us', {hour: '2-digit', hour12: false, timeZone: timeZone});
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: timeZone,
      hour12: false
    });
    return timeFormatter.format(now)
  };

  useEffect(() => {
    // Get times for different cities
    setBangkokTime(getTimeInTimeZone('Asia/Bangkok'));
    setNycTime(getTimeInTimeZone('America/New_York'));
    setLondonTime(getTimeInTimeZone('Europe/London'));
  }, []);

  const startHour = '09:00';
  const endHour = '17:00';

  return (
    <section >
      <div className='timezone-section'>
        { bangkokTime >= startHour && bangkokTime <= endHour ? 
        <div className='indicator-green'></div> 
        : <div className='indicator-red'></div> 
        }
        <p className='time'>BKK: {bangkokTime}</p>
      </div>
      <div className='timezone-section'>
        { nycTime >= startHour && nycTime <= endHour ? 
        <div className='indicator-green'></div> 
        : <div className='indicator-red'></div> 
        }
        <p className='time'>NYC: {nycTime}</p>
      </div>
      <div className='timezone-section'>
        { londonTime >= startHour && londonTime <= endHour ?
         <div className='indicator-green'></div> 
         : <div className='indicator-red'></div> 
        }
        <p className='time'>LDN: {londonTime}</p>
      </div>
    </section>
  );
};

export default Timezones;
