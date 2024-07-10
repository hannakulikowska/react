import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    if (error) {
      return { hasError: true };
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <h3 className="error" style={{ textAlign: 'center' }}>
          Something went wrong. Reload the page.
        </h3>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
