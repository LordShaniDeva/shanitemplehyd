import React from 'react';

const Label = ({ ...rest }: React.ComponentPropsWithoutRef<'label'>) => {
  return (
    <label
      {...rest}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {rest.children}
    </label>
  );
};
export default Label;
