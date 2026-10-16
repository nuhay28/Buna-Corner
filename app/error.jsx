"use client";

// Error boundary: shown if something unexpected fails while rendering a page.
export default function Error({ reset }) {
  return (
    <div className="panel empty-state" role="alert">
      <h1>Something went wrong</h1>
      <p>Sorry, this page could not be shown. Please try again.</p>
      <button type="button" className="button button-primary" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
