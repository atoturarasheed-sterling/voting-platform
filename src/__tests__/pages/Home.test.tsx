import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home Page', () => {
  it('renders the welcome heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: /welcome to voting platform/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Home />);
    expect(screen.getByText(/browse contests/i)).toBeInTheDocument();
    expect(screen.getByText(/artist awards/i)).toBeInTheDocument();
    expect(screen.getByText(/my votes/i)).toBeInTheDocument();
  });

  it('displays the main description', () => {
    render(<Home />);
    const description = screen.getByText(/vote for your favorite beauty contests and artist awards/i);
    expect(description).toBeInTheDocument();
  });
});
