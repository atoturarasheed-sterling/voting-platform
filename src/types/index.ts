export interface Contestant {
  id: string;
  name: string;
  image: string;
  bio: string;
  votes: number;
}

export interface Vote {
  id: string;
  contestantId: string;
  userId: string;
  timestamp: Date;
}

export interface Contest {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  contestants: Contestant[];
}
