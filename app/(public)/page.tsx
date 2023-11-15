import Button from '@/components/button';
import EventsSection from '@/components/events';
import TheGallery from '@/components/gallery';
import GridImagePicker from '@/components/image-picker/grid';
import Timings from '@/components/timings';
import SectionTitle from '@/components/title/section';
import Image from 'next/image';

export default function Home() {
  // Shani God Images array
  const shaniGodImages = [
    {
      id: 1,
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      alt: 'Shani God Image 1',
    },
    {
      id: 2,
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      alt: 'Shani God Image 2',
    },
    {
      id: 3,
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
      alt: 'Shani God Image 3',
    },
    {
      id: 4,
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      alt: 'Shani God Image 4',
    },
    {
      id: 5,
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
      alt: 'Shani God Image 5',
    },
  ];
  return (
    <div className="container mx-auto">
      {/* Banner Image */}
      <div className="relative flex flex-col ">
        <img
          className="h-auto max-w-full"
          src="https://img.freepik.com/free-vector/background-template-with-mandala-designs_1308-69608.jpg?w=1060&t=st=1699166637~exp=1699167237~hmac=c410149870fb7ba2068fabeb88d3ab588189d57f31d6bf13b6a9c1b67267bd5b"
          alt=""
        />
        {/* Backdrop Filteres Banner */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white lora">
              LORD SHANI DEV
            </h1>
          </div>
        </div>
      </div>
      {/* Events */}
      <SectionTitle>
        <p>Events</p>
        <h1>
          Upcoming Events And <br />
          Workshops
        </h1>
      </SectionTitle>
      <EventsSection />
      <div className="flex items-center justify-center p-8">
        <Button className="">More Events</Button>
      </div>
      {/* Grid  */}
      <div className="container mx-auto bg-white p-8">
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-2 xl:gap-4  
    "
        >
          <div className="grid gap-4 grid-col">
            <GridImagePicker
              images={[
                {
                  name: 'Image One',
                  source:
                    'https://cdn.pixabay.com/photo/2018/04/20/01/15/fantasy-3334834_1280.jpg',
                },
                {
                  name: 'Image Two',
                  source:
                    'https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082_1280.jpg',
                },
                {
                  name: 'Image Three',
                  source:
                    'https://cdn.pixabay.com/photo/2016/05/10/21/50/meditation-1384758_1280.jpg',
                },
                {
                  name: 'Image Four',
                  source:
                    'https://cdn.pixabay.com/photo/2020/07/08/04/18/jesus-5382512_1280.jpg',
                },
                {
                  name: 'Image Five',
                  source:
                    'https://cdn.pixabay.com/photo/2017/07/05/00/13/fractal-2473080_1280.jpg',
                },
              ]}
            />
          </div>
          <div>
            {/* Temple Timings */}
            <Timings />
            {/* <div className="flex flex-col justify-center  ">
              <div className="text-3xl font-bold">Temple Timings</div>
              <div className="text-xl font-semibold">Daily</div>
              <div className="text-xl font-semibold">8:00 AM - 12:00 PM</div>
              <div className="text-xl font-semibold">5:00 PM - 8:00 PM</div>
              <div className="text-xl font-semibold">Sunday</div>
              <div className="text-xl font-semibold">8:00 AM - 1:00 PM</div>
              <div className="text-xl font-semibold">5:00 PM - 8:00 PM</div>
            </div> */}
          </div>
        </div>
      </div>
      {/* Gallery Preview */}
      <SectionTitle>
        <p>Gallery</p>
        <h1>
          Upcoming Events And <br />
          Workshops
        </h1>
      </SectionTitle>
      <div></div>
      <div className="flex items-center justify-center p-8">
        <Button className="">View Gallery</Button>
      </div>
    </div>
  );
}
