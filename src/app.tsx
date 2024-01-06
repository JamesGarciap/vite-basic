import React from 'react';
import { createRoot } from 'react-dom/client';

interface ButtonProps {
  title: string;
  disabled?: boolean;
}

function MyButton({ title, disabled }: ButtonProps) {
  return <button disabled={disabled}>{title}</button>;
}

function MyApp() {
  return (
    <div>
      <h1>Hello World</h1>
      <MyButton title="Click me" disabled={true} />
    </div>
  );
}

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(<MyApp />);
