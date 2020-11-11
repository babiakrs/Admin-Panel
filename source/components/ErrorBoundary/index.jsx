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
          errorTitle='something went wrong! :('
          errorText='error caught due the exception!'
          reloadBtn={true}
        />
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };