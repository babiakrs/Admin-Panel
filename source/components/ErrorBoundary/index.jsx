import React from 'react';
import { node } from 'prop-types';
import { ErrorMessage } from 'Components/ErrorMessage';

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: node.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorMessage
          errorTitle='что-то пошло не так! :('
          errorText='в приложении произошла критическая ошибка!'
          reloadBtn={true}
        />
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };