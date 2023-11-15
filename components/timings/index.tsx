import moment from 'moment';
import React from 'react';

const Timings = () => {
  const days = moment.weekdays();
  console.log(days);
  //   [
  //     'Sunday',
  //     'Monday',
  //     'Tuesday',
  //     'Wednesday',
  //     'Thursday',
  //     'Friday',
  //     'Saturday'
  //   ]
  const x = [
    {
      day: 'Monday',
      time: {
        m: '9:30 AM - 12:00 PM',
        e: '5:30 PM - 08:00 PM',
      },
    },
    {
      day: 'Tuesday',
      time: {
        m: '9:30 AM - 12:00 PM',
        e: '5:30 PM - 08:00 PM',
      },
    },
    {
      day: 'Wednesday',
      time: {
        m: '9:30 AM - 12:00 PM',
        e: '5:30 PM - 08:00 PM',
      },
    },
    {
      day: 'Thursday',
      time: {
        m: '9:30 AM - 12:00 PM',
        e: '5:30 PM - 08:00 PM',
      },
    },
    {
      day: 'Friday',
      time: {
        m: '9:30 AM - 12:00 PM',
        e: '5:30 PM - 08:00 PM',
      },
    },
    {
      day: 'Saturday',
      time: {
        m: '9:30 AM - 01:30 PM',
        e: '5:00 PM - 08:00 PM',
      },
    },
    {
      day: 'Sunday',
      time: {
        m: '9:30 AM - 01:30 PM',
        e: '5:00 PM - 08:00 PM',
      },
    },
  ];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 lora">
          <tr>
            <th scope="col" className="px-6 py-3">
              Timings
            </th>
            <th scope="col" className="px-6 py-3">
              Morning
            </th>
            <th scope="col" className="px-6 py-3">
              Evening
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="lora">
          {x.map((item, index) => {
            return (
              <tr
                key={index}
                className="odd:bg-white even:bg-gray-50  border-b"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-red-900 whitespace-nowrap"
                >
                  {item.day}
                </th>
                <td className="px-6 py-4">{item.time.m}</td>
                <td className="px-6 py-4">{item.time.e}</td>
                <td className="px-6 py-4"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Timings;

{
  /* <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
<th
  scope="row"
  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
>
  Microsoft Surface Pro
</th>
<td className="px-6 py-4">White</td>
<td className="px-6 py-4">Laptop PC</td>
<td className="px-6 py-4">$1999</td>
<td className="px-6 py-4">
  <a
    href="#"
    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
  >
    Edit
  </a>
</td>
</tr> */
}
