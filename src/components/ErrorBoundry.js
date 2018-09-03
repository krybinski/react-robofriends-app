import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundry extends Component {
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
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

ErrorBoundry.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundry;
