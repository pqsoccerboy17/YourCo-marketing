import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('Navigation', () => {
  it('renders all nav links', () => {
    render(<App />);
    const navLinks = ['Services', 'Case Study', 'About', 'Contact'];
    navLinks.forEach((label) => {
      const links = screen.getAllByText(label);
      expect(links.length).toBeGreaterThan(0);
    });
  });

  it('has correct href attributes on nav links', () => {
    render(<App />);
    const servicesLinks = screen.getAllByRole('link', { name: 'Services' });
    expect(servicesLinks[0]).toHaveAttribute('href', '#services');
  });

  it('renders mobile menu button with correct initial aria-label', () => {
    render(<App />);
    const menuButton = screen.getByLabelText('Open menu');
    expect(menuButton).toBeInTheDocument();
  });

  it('toggles mobile menu on button click', () => {
    render(<App />);
    const menuButton = screen.getByLabelText('Open menu');
    fireEvent.click(menuButton);
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });

  it('closes mobile menu when a link is clicked', () => {
    render(<App />);
    const menuButton = screen.getByLabelText('Open menu');
    fireEvent.click(menuButton);

    // Click a mobile nav link
    const mobileLinks = screen.getAllByText('Services');
    const mobileLink = mobileLinks[mobileLinks.length - 1];
    fireEvent.click(mobileLink);

    // Menu should close, button should say "Open menu" again
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });
});
