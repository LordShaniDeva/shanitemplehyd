import Link from 'next/link';
import Button from '@/components/button';
import Timings from '@/components/timings';
import EventsSection from '@/components/events';
import SectionTitle from '@/components/title/section';
import GridImagePicker from '@/components/image-picker/grid';
import ContactForm from '@/components/contact';
import events from '@/constants/events';

function Home() {
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
              अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम। <br />
              नायका मम सैन्यस्य संञ्ज्ञार्थं तान्ब्रवीमि ते।।7।।
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
      <EventsSection events={events} />
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
          <Timings />
        </div>
      </div>
      {/* Gallery Preview */}
      <SectionTitle>
        <p>Gallery</p>
        <h1>
          We hope you enjoy our
          <br />
          Gallery
        </h1>
      </SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 min-h-screen">
        <div className="bg-[url(https://images.unsplash.com/photo-1560420713-b279b33e9abf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat bg-center relative">
          {/* <span className="absolute bottom-0 lora w-full bg-black bg-opacity-50 backdrop-blur-md p-8 text-xl text-white hover:text-red-500 cursor-pointer">
            Ganesh Pooja
          </span> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="bg-[url(https://images.unsplash.com/photo-1460601416989-a913740bdde9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat bg-center">
            <span className="sr-only">Background Image</span>
          </div>
          <div className="bg-[url(https://images.unsplash.com/photo-1517072115201-1db1ca3cc193?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat bg-center">
            <span className="sr-only">Background Image</span>
          </div>
          <div className="bg-[url(https://images.unsplash.com/photo-1460601416989-a913740bdde9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat bg-center">
            <span className="sr-only">Background Image</span>
          </div>
          <div className="bg-[url(https://images.unsplash.com/photo-1517072115201-1db1ca3cc193?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat bg-center">
            <span className="sr-only">Background Image</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <Link href={'/gallery'}>
          <Button>View Gallery</Button>
        </Link>
      </div>
      {/* CONTACT SECTION */}
      <ContactForm />
    </div>
  );
}

export default Home;
