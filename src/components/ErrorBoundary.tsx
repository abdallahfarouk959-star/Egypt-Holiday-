import React from 'react';

type State = { hasError: boolean; error?: Error };

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: any) {
    // Log to console for local debugging
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught', error, info);
  }

  render() {
    if (this.state.hasError) {
      const err = this.state.error;
      return (
        <div className="pt-32 pb-24 text-center px-4">
          <h2 className="text-2xl font-serif">Something went wrong rendering this page.</h2>
          <p className="text-sm text-gray-500 mt-4 mb-6">We captured the error — details shown below for debugging.</p>
          {err && (
            <div className="max-w-4xl mx-auto text-left bg-white border border-red-50 rounded-lg p-4 shadow-sm">
              <div className="text-sm text-red-700 font-bold mb-2">{err.message}</div>
              <pre className="text-xs text-gray-600 whitespace-pre-wrap">{err.stack}</pre>
            </div>
          )}
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}

export default ErrorBoundary;
