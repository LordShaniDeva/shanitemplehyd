import React from 'react';
import PageTitle from '@/components/title';
import TheGallery from '@/components/gallery';

const GalleryPage = () => {
  return (
    <React.Fragment>
      <PageTitle>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lora">
          Deities
        </h1>
        <p className="text-base text-gray-500">
          The holy embodiments of divine power in our temple.
        </p>
      </PageTitle>
      <TheGallery images={deities} />
    </React.Fragment>
  );
};
export default GalleryPage;

const deities = [
  {
    name: '',
    source: '/deities/gopuram_1.png',
  },
  {
    name: '',
    source: '/deities/homam_1.png',
  },
  {
    name: '',
    source: '/deities/lord-dattatreya.png',
  },
  {
    name: '',
    source: '/deities/lord-hanuman.png',
  },
  {
    name: '',
    source: '/deities/lord-naga-devatha.png',
  },
  {
    name: '',
    source: '/deities/lord-nandi-shiva.png',
  },
  {
    name: '',
    source: '/deities/lord-navagrahas.jpg',
  },
  {
    name: '',
    source: '/deities/lord-shani-deva-color.png',
  },
  {
    name: '',
    source: '/deities/lord-shani-deva-navagraha_1.png',
  },
  {
    name: '',
    source: '/deities/lord-shani-deva-navagraha.png',
  },
  {
    name: '',
    source: '/deities/lord-shani-deva-png',
  },
  {
    name: '',
    source: '/deities/lord-shani-deva.png',
  },
  {
    name: '',
    source: '/deities/lord-shani.deva-vigraham.png',
  },
  {
    name: '',
    source: '/deities/lord-shani.png',
  },
  {
    name: '',
    source: '/deities/lord-shiva-closeup.pic',
  },
  {
    name: '',
    source: '/deities/lord-shiva-closeup.png',
  },
  {
    name: '',
    source: '/deities/lord-shiva-mandir.png',
  },
  {
    name: '',
    source: '/deities/lord-shiva-nandi.png',
  },
  {
    name: '',
    source: '/deities/lord-shiva.png',
  },
  {
    name: '',
    source: '/deities/shri-lord.png',
  },
  {
    name: '',
    source: '/deities/temple.png',
  },
  {
    name: '',
    source: '/deities/temple.png',
  },
  {
    name: '',
    source: '/deities/temple.png',
  },
];
