import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders the brand name in the nav', () => {
    render(<App />);
    expect(screen.getByText('[YourCo]')).toBeInTheDocument();
  });

  it('renders all major sections', () => {
    render(<App />);
    expect(screen.getByText('The Adoption Paradox')).toBeInTheDocument();
    expect(screen.getByText('AI GTM Assessment')).toBeInTheDocument();
    expect(screen.getByText(/Clarity in 4-6 Weeks/)).toBeInTheDocument();
    expect(screen.getByText(/Not your typical consultants/)).toBeInTheDocument();
    expect(screen.getByText(/Quick wins over transformation theater/)).toBeInTheDocument();
  });
});
