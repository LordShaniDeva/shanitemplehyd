/* eslint-disable @next/next/no-img-element */
import React from 'react';
import css from './events.module.scss';
import CalenderIcon from '@/components/icons/calendar-outline';

const EventsSection = () => {
  const events = [
    {
      image:
        'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Honoring the Buddha Day 2019',
      startDate: '9:00 am',
      endDate: '4:30 pm',
      slug: 'Honoring the Buddha Day 2019', // name + start date
    },
    {
      image:
        'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Honoring the Buddha Day 2019',
      startDate: '9:00 am',
      endDate: '4:30 pm',
      slug: 'Honoring the Buddha Day 2019', // name + start date
    },
    {
      image:
        'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Honoring the Buddha Day 2019',
      startDate: '9:00 am',
      endDate: '4:30 pm',
      slug: 'Honoring the Buddha Day 2019', // name + start date
    },
  ];

  return (
    <div className={css['container']}>
      <div className={css['list']}>
        <ul className="flex flex-col gap-2">
          {events.map((item, index) => {
            return (
              <li key={index}>
                <div className={css['image']}>
                  <a className={css['date']}>
                    <h2>17</h2>
                    <p>May</p>
                  </a>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={css['content']}>
                  <h2>{item.name}</h2>
                  <p className="flex items-center gap-2">
                    <CalenderIcon height={24} width={24} />
                    <span>from</span>
                    <span>{item.startDate}</span>
                    <span>to</span>
                    <span>{item.endDate}</span>
                  </p>
                </div>
                <div className={css['controls']}>
                  <button>Info</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default EventsSection;
