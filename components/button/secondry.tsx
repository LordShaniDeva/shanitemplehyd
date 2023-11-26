import React from 'react';
import classNames from '@/utils/classnames';

const SecondryButton = ({
  ...rest
}: React.ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      {...rest}
      className={classNames(
        'flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
        rest.className as string
      )}
    >
      {rest.children}
    </button>
  );
};
export default SecondryButton;
