import React from 'react';
import { string, node } from 'prop-types';
import { cn } from 'Utilities';

import './styles.sass';

function GridItem({ className, children }) {
  return (
    <div className={cn('grid__item', className)}>
      {children}
    </div>
  );
}

GridItem.propTypes = {
  className: string,
  children: node
};

export { GridItem };