import React from 'react';
import events from '@/constants/events';
import PageTitle from '@/components/title';
import EventsSection from '@/components/events';

const Events = () => {
  return (
    <div>
      <PageTitle>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lora">
          Events
        </h1>
        <p className="text-base text-gray-500">100+ Events started</p>
      </PageTitle>
      <EventsSection events={events} />
    </div>
  );
};
export default Events;
