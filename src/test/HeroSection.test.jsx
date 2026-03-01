import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('Hero Section', () => {
  it('renders the headline', () => {
    render(<App />);
    const matches = screen.getAllByText(/Your board wants an AI story/);
    expect(matches.length).toBeGreaterThanOrEqual(1);
    const h1 = matches.find((el) => el.tagName === 'H1');
    expect(h1).toBeInTheDocument();
  });

  it('renders the subheadline', () => {
    render(<App />);
    expect(screen.getByText(/We help PE-backed companies/)).toBeInTheDocument();
  });

  it('renders the CTA button linking to contact', () => {
    render(<App />);
    const ctaLinks = screen.getAllByRole('link', { name: /Book a Discovery Call/i });
    expect(ctaLinks[0]).toHaveAttribute('href', '#contact');
  });

  it('renders the AI GTM Strategy label', () => {
    render(<App />);
    expect(screen.getByText('AI GTM Strategy')).toBeInTheDocument();
  });
});
