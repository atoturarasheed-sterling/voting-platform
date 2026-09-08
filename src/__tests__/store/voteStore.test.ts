import { useVoteStore } from '@/store/voteStore';

describe('Vote Store', () => {
  beforeEach(() => {
    // Reset store before each test
    const store = useVoteStore();
    store.votes = [];
  });

  it('should add a vote', () => {
    const store = useVoteStore();
    const vote = {
      id: '1',
      contestantId: 'contestant-1',
      timestamp: new Date(),
    };

    store.addVote(vote);
    expect(store.getVotes()).toContain(vote);
  });

  it('should remove a vote', () => {
    const store = useVoteStore();
    const vote = {
      id: '1',
      contestantId: 'contestant-1',
      timestamp: new Date(),
    };

    store.addVote(vote);
    store.removeVote('1');
    expect(store.getVotes()).toHaveLength(0);
  });

  it('should return all votes', () => {
    const store = useVoteStore();
    const vote1 = {
      id: '1',
      contestantId: 'contestant-1',
      timestamp: new Date(),
    };
    const vote2 = {
      id: '2',
      contestantId: 'contestant-2',
      timestamp: new Date(),
    };

    store.addVote(vote1);
    store.addVote(vote2);
    expect(store.getVotes()).toHaveLength(2);
  });
});
