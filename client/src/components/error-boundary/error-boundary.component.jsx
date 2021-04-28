import React from 'react';

import { ErrorImageOverlay, ErrorImageText, ErrorImageContainer } from './error-boundary.styles';

class ErrorBoundary extends React.Components {
  constructor() {
    super();

    this.state = {
      hassErrored: false
    }
  }

  static getDerivedstateFromError(error) {
    //process error
    return {hassErrored: true}
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hassErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/oCkEbrA.png'/>
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
} 

export default ErrorBoundary;
