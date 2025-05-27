import React from 'react';

interface FrameworkProps {
  children?: React.ReactNode;
}

function Framework({ children }: FrameworkProps) {
  return (
    <div className="framework">
      <header>
        <h1>Brand Framework</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; 2023 Brand Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Framework;