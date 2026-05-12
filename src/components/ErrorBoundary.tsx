import { Component, type ErrorInfo, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111] px-6">
        <div className="max-w-md text-center">
          <p className="text-white/40 text-[10px] tracking-[4px] uppercase mb-4">
            Error
          </p>
          <h1 className="text-white text-[clamp(1.6rem,4vw,2.2rem)] font-[var(--font-cormorant)] tracking-[2px] mb-4">
            Something went wrong
          </h1>
          <p className="text-white/60 text-sm mb-8 leading-relaxed">
            The page failed to load. This may happen after a deploy or if your
            connection is interrupted.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              to="/"
              onClick={this.handleReset}
              className="px-6 py-3 bg-white text-[#111] text-[.72rem] tracking-[2px] uppercase rounded-[2px] hover:bg-white/90 transition-colors"
            >
              Back home
            </Link>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-transparent border border-white/30 text-white text-[.72rem] tracking-[2px] uppercase rounded-[2px] hover:border-white/60 transition-colors cursor-pointer"
            >
              Reload
            </button>
          </div>
        </div>
      </div>
    );
  }
}
