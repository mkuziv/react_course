import React, { Component, ErrorInfo } from 'react';

type Props = typeof ErrorBoundary.defaultProps & {
  children?: JSX.Element | null;
};

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = { children: <h1>Something went wrong.</h1> };

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return ErrorBoundary.defaultProps.children;
    }

    return children;
  }
}
export default ErrorBoundary;
