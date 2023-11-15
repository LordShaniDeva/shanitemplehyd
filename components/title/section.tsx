import React from 'react';
import css from './title.module.scss';

type SectionTitleProps = {} & React.PropsWithChildren<{}>;

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div className={css['container']}>
      <div className={css['text-content']}>{children}</div>
    </div>
  );
};
export default SectionTitle;
