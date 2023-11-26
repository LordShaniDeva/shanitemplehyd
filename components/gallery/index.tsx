import chunkArray from '@/utils/chunk-array';
import Image from 'next/image';
import React from 'react';

type Props = {
  images: {
    source: string;
    name: string;
  }[];
};
const TheGallery = ({ images }: Props) => {
  /**
   * Split array into multiple array chunk
   */

  const chunks = chunkArray(images, 3);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
        {chunks.map((item, index) => {
          return (
            <div className="grid gap-2" key={index}>
              {item.map(({ source }, innerIndex) => {
                return (
                  <div key={innerIndex} className="flex">
                    <Image
                      height={320}
                      width={320}
                      className="h-auto rounded-lg object-cover"
                      src={source}
                      alt={innerIndex + 'image'}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TheGallery;
