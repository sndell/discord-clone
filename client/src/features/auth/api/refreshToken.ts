import api from '../../../lib/axios';

const refreshToken = async () => {
  api.post('/auth/refresh-token').catch((error) => {
    console.error(error);
  });
};

export { refreshToken };
