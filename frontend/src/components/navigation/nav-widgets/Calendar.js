import React from 'react'

//styles
import '../../../styles/components/navigation/navigation-widgets/_calendar.scss'

const Calendar = () => {

const now = new Date();
const currentDate = now.getDate(); // 
const currentDay = now.toLocaleString('en-US', { weekday: 'short' }); // full name of the day

  return (
    <section className='calendar-parent'>
      <p>{currentDay}</p>
      <p>{currentDate}</p>
      <button>
        <div>n</div>
        <p>calendar</p>
      </button>
    </section>
  )
}

export default Calendar