import React from 'react';
import { string } from 'prop-types';
import { cn } from 'Utilities';

import './styles.sass';

function GridItem({ className }) {
  return (
    <div className={cn('grid__item', className)}></div>
  );
}

GridItem.propTypes = {
  className: string
};

export { GridItem };