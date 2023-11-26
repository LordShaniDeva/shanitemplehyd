import React from 'react';
import css from './contact.module.scss';
import SectionTitle from '../title/section';
const ContactForm = () => {
  return (
    <div className={css['container']}>
      <SectionTitle>
        <p>Gallery</p>
        <h1 className="text-white">
          We hope you enjoy our
          <br />
          Gallery
        </h1>
        <span>
          Join the Happiness Program. Experience a calm mind, reduced anxiety,
          <br />
          increased energy levels and sustainable happiness everyday!
        </span>
      </SectionTitle>
      <span className={css['image']} />
      <div className="flex gap-8 items-center flex-col justify-center relative z-50">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center justify-center">
            <input className={css['input']} type="text" placeholder="Name*" />
          </div>
          <div className="flex items-center justify-center">
            <input
              className={css['input']}
              type="text"
              placeholder="Mobile Number"
            />
          </div>
          <div className="flex items-center justify-center">
            <input
              className={css['input']}
              type="text"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="text-gray-500 font-bold bg-white p-4 rounded-full min-w-[180px] hover:bg-[#db4242] hover:text-white inter">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
