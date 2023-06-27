import { useForm } from 'react-hook-form';
import { HiEnvelope, HiLockClosed } from 'react-icons/hi2';
import TextInput from './TextInput';
import { login } from '../api/login';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();

  const onSubmit = handleSubmit((data) => {
    const { email, password } = data;
    login(email, password);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center gap-4 p-4 rounded-lg bg-primary"
    >
      <div className="text-2xl text-primary">Welcome</div>
      <div className="text-secondary">Login or register to continue</div>
      <div className="flex flex-col gap-3">
        <TextInput
          Icon={HiEnvelope}
          id="email"
          register={register}
          type="email"
          error={errors.email}
          placeholder="Email"
        />
        <TextInput
          Icon={HiLockClosed}
          id="password"
          register={register}
          type="password"
          error={errors.password}
          placeholder="Password"
        />
      </div>
      <div className="text-secondary">
        Forgot your password?{' '}
        <button className="font-medium text-accent">Reset</button>
      </div>
      <button
        type="submit"
        className="w-full p-2 rounded-lg bg-accent text-primary"
      >
        Login
      </button>
      <div className="text-secondary">
        No account?{' '}
        <button className="font-medium text-accent">Register</button>
      </div>
    </form>
  );
};
