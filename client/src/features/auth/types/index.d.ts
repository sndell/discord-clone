type LoginType = {
  email: string;
  password: string;
};

type User = {
  username: string;
  displayName: string;
  photoUrl: string;
};

type ApiError = {
  message: string;
};

type AuthContext = {
  user: User | null;
  loading: boolean;
  refresh: () => Promise<void>;
};
