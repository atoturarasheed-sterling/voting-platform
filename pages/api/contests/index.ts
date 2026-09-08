import { NextApiRequest, NextApiResponse } from 'next';

interface Contest {
  id: string;
  name: string;
  description: string;
  endDate: string;
  votes: number;
}

const mockContests: Contest[] = [
  {
    id: '1',
    name: 'Miss Global 2024',
    description: 'International beauty pageant',
    endDate: '2024-12-31',
    votes: 15420,
  },
  {
    id: '2',
    name: 'Fashion Model Awards',
    description: 'Annual fashion modeling competition',
    endDate: '2024-11-30',
    votes: 8930,
  },
  {
    id: '3',
    name: 'Elite Beauty Contest',
    description: 'Premium beauty competition',
    endDate: '2024-10-15',
    votes: 12340,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contest[] | Contest | { message: string }>
) {
  if (req.method === 'GET') {
    const { id } = req.query;

    if (id) {
      const contest = mockContests.find((c) => c.id === id);
      if (!contest) {
        return res.status(404).json({ message: 'Contest not found' });
      }
      return res.status(200).json(contest);
    }

    return res.status(200).json(mockContests);
  }

  if (req.method === 'POST') {
    const { name, description, endDate } = req.body;

    if (!name || !description || !endDate) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newContest: Contest = {
      id: Date.now().toString(),
      name,
      description,
      endDate,
      votes: 0,
    };

    return res.status(201).json(newContest);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
