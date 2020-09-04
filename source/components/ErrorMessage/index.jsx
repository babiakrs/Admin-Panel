import React from 'react';
import { Icon } from 'Components/Icon';
import { string, bool } from 'prop-types';

import './styles.sass';

function ErrorMessage(props) {
  const { errorTitle, errorText, reloadBtn } = props;

  return (
    <div className='error'>
      <div className={'error__container'}>
        <Icon type='warning' width='80' height='80' className={'error__icon'} />
        <h1 className={'error__title'}>{errorTitle}</h1>
        <p className={'error__text'}>{errorText}</p>
        {
          reloadBtn && <button className={'error__button'} onClick={() => location.reload()}>Перезагрузить</button>
        }
      </div>
    </div>
  );
}

ErrorMessage.propTypes = {
  errorTitle: string.isRequired,
  errorText: string.isRequired,
  reloadBtn: bool
};

ErrorMessage.defaultProps = {
  reloadBtn: false
};

export { ErrorMessage };