import { render, screen, waitFor } from '@testing-library/react';
import Contests from '@/pages/contests/index';

describe('Contests Page', () => {
  it('renders the contests heading', async () => {
    render(<Contests />);
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /beauty contests/i })).toBeInTheDocument();
    });
  });

  it('displays contest cards with vote buttons', async () => {
    render(<Contests />);
    await waitFor(() => {
      const voteButtons = screen.getAllByRole('button', { name: /vote now/i });
      expect(voteButtons.length).toBeGreaterThan(0);
    });
  });

  it('renders contest information', async () => {
    render(<Contests />);
    await waitFor(() => {
      expect(screen.getByText(/miss global 2024/i)).toBeInTheDocument();
    });
  });
});
