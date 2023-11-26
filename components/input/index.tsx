import classNames from '@/utils/classnames';
import React from 'react';

type Props = {} & React.ComponentPropsWithoutRef<'input'>;

const Input = ({ ...rest }: Props) => {
  return (
    <div className="flex flex-col">
      <input
        {...rest}
        className={classNames(
          'block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
          rest.className as string
        )}
      />
    </div>
  );
};
export default Input;
