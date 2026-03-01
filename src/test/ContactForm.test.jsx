import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('Contact Form', () => {
  it('renders the contact form fields', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tell us about your AI adoption/)).toBeInTheDocument();
  });

  it('renders the submit button', () => {
    render(<App />);
    const submitButtons = screen.getAllByText(/Book a Discovery Call/i);
    const formButton = submitButtons.find((el) => el.tagName === 'BUTTON');
    expect(formButton).toBeInTheDocument();
  });

  it('updates form fields on input', () => {
    render(<App />);
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');

    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    fireEvent.change(emailInput, { target: { value: 'jane@example.com' } });

    expect(nameInput).toHaveValue('Jane Doe');
    expect(emailInput).toHaveValue('jane@example.com');
  });

  it('shows success message after valid submission', () => {
    render(<App />);
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');

    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    fireEvent.change(emailInput, { target: { value: 'jane@example.com' } });

    const form = nameInput.closest('form');
    fireEvent.submit(form);

    expect(screen.getByText('Message received')).toBeInTheDocument();
    expect(screen.getByText(/We'll be in touch within 24 hours/)).toBeInTheDocument();
  });

  it('does not show success if name is empty', () => {
    render(<App />);
    const emailInput = screen.getByPlaceholderText('Email');
    fireEvent.change(emailInput, { target: { value: 'jane@example.com' } });

    const form = emailInput.closest('form');
    fireEvent.submit(form);

    expect(screen.queryByText('Message received')).not.toBeInTheDocument();
  });
});
