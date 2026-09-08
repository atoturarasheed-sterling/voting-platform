import { NextApiRequest, NextApiResponse } from 'next';

interface Award {
  id: string;
  name: string;
  category: string;
  endDate: string;
  votes: number;
}

const mockAwards: Award[] = [
  {
    id: '1',
    name: 'Best Vocalist',
    category: 'Music',
    endDate: '2024-12-15',
    votes: 5430,
  },
  {
    id: '2',
    name: 'Best Dancer',
    category: 'Performance',
    endDate: '2024-12-20',
    votes: 3210,
  },
  {
    id: '3',
    name: 'Best Composer',
    category: 'Music',
    endDate: '2024-11-30',
    votes: 4120,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Award[] | Award | { message: string }>
) {
  if (req.method === 'GET') {
    const { id } = req.query;

    if (id) {
      const award = mockAwards.find((a) => a.id === id);
      if (!award) {
        return res.status(404).json({ message: 'Award not found' });
      }
      return res.status(200).json(award);
    }

    return res.status(200).json(mockAwards);
  }

  if (req.method === 'POST') {
    const { name, category, endDate } = req.body;

    if (!name || !category || !endDate) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newAward: Award = {
      id: Date.now().toString(),
      name,
      category,
      endDate,
      votes: 0,
    };

    return res.status(201).json(newAward);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
