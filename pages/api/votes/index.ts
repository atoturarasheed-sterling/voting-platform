import { NextApiRequest, NextApiResponse } from 'next';

interface Vote {
  id: string;
  contestantId: string;
  userId: string;
  timestamp: string;
}

const votes: Vote[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Vote | Vote[] | { message: string }>
) {
  if (req.method === 'GET') {
    return res.status(200).json(votes);
  }

  if (req.method === 'POST') {
    const { contestantId, userId } = req.body;

    if (!contestantId) {
      return res.status(400).json({ message: 'Missing contestantId' });
    }

    const newVote: Vote = {
      id: Date.now().toString(),
      contestantId,
      userId: userId || 'anonymous',
      timestamp: new Date().toISOString(),
    };

    votes.push(newVote);
    return res.status(201).json(newVote);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
