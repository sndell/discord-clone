import api from '../../../lib/axios';

const getCurrentUser = async (): Promise<User | null> => {
  try {
    const res = await api.get('/user/current');
    return res.data.user || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getCurrentUser };
