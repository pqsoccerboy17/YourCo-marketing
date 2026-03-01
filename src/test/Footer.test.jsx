import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('Footer', () => {
  it('renders the copyright notice', () => {
    render(<App />);
    expect(screen.getByText(/© 2026 \[YourCo\] Consulting/)).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(<App />);
    expect(screen.getByText('AI GTM Strategy for PE-Backed Companies')).toBeInTheDocument();
  });
});
