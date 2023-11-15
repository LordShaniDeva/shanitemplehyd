/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import classNames from '@/utils/classnames';

type Image = {
  name: string;
  source: string;
};

type Props = {
  images: Image[];
  value?: string;
  onChange?: (value: string) => void;
};

const GridImagePicker = ({ value, onChange, images }: Props) => {
  const [state, setState] = React.useState(images[0]);
  const onSelectImage = React.useCallback((value: Image) => {
    setState(value);
  }, []);
  return (
    <div className="grid gap-4">
      <div className="relative flex flex-col ">
        <img
          className="h-[425px] max-w-full rounded-lg object-cover"
          src={state.source}
          alt={state.name}
        />
        {/* Backdrop Filteres Banner */}
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map((item, index) => {
          const active = item.source === state.source;
          return (
            <div
              key={index}
              className={classNames(
                `${
                  active
                    ? 'border-4 border-red-700'
                    : 'border-4 border-transparent'
                }`,
                'rounded-lg overflow-hidden'
              )}
              onClick={() => onSelectImage(item)}
            >
              <img
                alt={item.name}
                src={item.source}
                className="h-[100px] max-w-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default GridImagePicker;
