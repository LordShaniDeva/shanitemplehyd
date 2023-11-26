import classNames from '@/utils/classnames';
import React from 'react';
type Props = {} & React.ComponentPropsWithoutRef<'button'>;

const Button = ({ className, children, ...rest }: Props) => {
  return (
    <button
      className={classNames(
        className as string,
        'flex items-center justify-center font-medium text-base leading-[18px] tracking-[0] text-white bg-[#db4242]  px-[2em] py-[1em] rounded-[30px]'
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
