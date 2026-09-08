import create from 'zustand';

interface Vote {
  id: string;
  contestantId: string;
  timestamp: Date;
}

interface VoteStore {
  votes: Vote[];
  addVote: (vote: Vote) => void;
  removeVote: (voteId: string) => void;
  getVotes: () => Vote[];
}

export const useVoteStore = create<VoteStore>((set, get) => ({
  votes: [],
  addVote: (vote: Vote) =>
    set((state) => ({
      votes: [...state.votes, vote],
    })),
  removeVote: (voteId: string) =>
    set((state) => ({
      votes: state.votes.filter((v) => v.id !== voteId),
    })),
  getVotes: () => get().votes,
}));
