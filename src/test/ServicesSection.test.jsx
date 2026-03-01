import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('Services Section', () => {
  it('renders the three service cards', () => {
    render(<App />);
    expect(screen.getByText('Current State Audit')).toBeInTheDocument();
    const gapAnalysis = screen.getAllByText('Adoption Gap Analysis');
    expect(gapAnalysis.length).toBeGreaterThanOrEqual(1);
    const investorNarrative = screen.getAllByText('Investor Narrative');
    expect(investorNarrative.length).toBeGreaterThanOrEqual(1);
  });

  it('renders the What\'s Included items', () => {
    render(<App />);
    expect(screen.getByText('Stakeholder Discovery')).toBeInTheDocument();
    expect(screen.getByText('Tech Stack Inventory')).toBeInTheDocument();
    expect(screen.getByText('Opportunity Prioritization')).toBeInTheDocument();
  });

  it('renders the deliverables list', () => {
    render(<App />);
    expect(screen.getByText('Stakeholder interview synthesis')).toBeInTheDocument();
    expect(screen.getByText('Implementation roadmap')).toBeInTheDocument();
    expect(screen.getByText('Board presentation deck')).toBeInTheDocument();
    expect(screen.getByText('Executive summary one-pager')).toBeInTheDocument();
  });

  it('renders all 5 process phases', () => {
    render(<App />);
    expect(screen.getByText('Kickoff')).toBeInTheDocument();
    expect(screen.getByText('Discovery')).toBeInTheDocument();
    expect(screen.getByText('Analysis')).toBeInTheDocument();
    expect(screen.getByText('Recommendations')).toBeInTheDocument();
    expect(screen.getByText('Delivery')).toBeInTheDocument();
  });
});
