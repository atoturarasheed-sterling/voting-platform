import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

describe('Header Component', () => {
  it('renders the logo', () => {
    render(<Header />);
    expect(screen.getByText(/voting platform/i)).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText(/contests/i)).toBeInTheDocument();
    expect(screen.getByText(/awards/i)).toBeInTheDocument();
    expect(screen.getByText(/my votes/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });
});
