/* eslint-disable @next/next/no-img-element */
import React from 'react';
import css from './events.module.scss';
import CalenderIcon from '@/components/icons/calendar-outline';
import { EventTypes } from '@/typings/events';

type Props = {
  events: EventTypes[];
};

const EventsSection = ({ events }: Props) => {
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
                  <p className="flex items-center gap-2 whitespace-nowrap">
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
