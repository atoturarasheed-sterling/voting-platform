import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Contest APIs
export const getContests = async () => {
  try {
    const response = await apiClient.get('/contests');
    return response.data;
  } catch (error) {
    console.error('Error fetching contests:', error);
    throw error;
  }
};

export const getContestById = async (id: string) => {
  try {
    const response = await apiClient.get(`/contests/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching contest:', error);
    throw error;
  }
};

// Award APIs
export const getAwards = async () => {
  try {
    const response = await apiClient.get('/awards');
    return response.data;
  } catch (error) {
    console.error('Error fetching awards:', error);
    throw error;
  }
};

// Vote APIs
export const submitVote = async (contestantId: string) => {
  try {
    const response = await apiClient.post('/votes', { contestantId });
    return response.data;
  } catch (error) {
    console.error('Error submitting vote:', error);
    throw error;
  }
};

export default apiClient;
