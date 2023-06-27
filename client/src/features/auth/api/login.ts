import api from '../../../lib/axios';

const login = async (email: string, password: string) => {
  api
    .post('/auth/login', {
      email,
      password,
    })
    .catch((error) => {
      console.error(error);
    });
};

export { login };
