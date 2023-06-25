import { useForm } from 'react-hook-form';
import { HiEnvelope, HiLockClosed } from 'react-icons/hi2';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex flex-col items-center gap-4 p-4 rounded-lg bg-primary">
      <div className="text-2xl text-primary">Welcome</div>
      <div className="text-secondary">Login or register to continue</div>
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <label
          htmlFor="email"
          className="flex h-full gap-2 overflow-hidden rounded-lg bg-tertiary"
        >
          <HiEnvelope className="my-3 ml-3 text-xl text-secondary" />
          <div className="grid grid-cols-[minmax(auto,320px)]">
            <input
              type="email"
              placeholder="Email"
              id="email"
              {...register('email', { required: true })}
              className="w-full pr-3 text-base bg-transparent outline-none placeholder:text-secondary text-primary"
            />
          </div>
        </label>
        <label
          htmlFor="password"
          className="flex h-full gap-2 overflow-hidden rounded-lg bg-tertiary"
        >
          <HiLockClosed className="my-3 ml-3 text-xl text-secondary" />
          <div className="grid grid-cols-[minmax(auto,320px)]">
            <input
              type="password"
              placeholder="Password"
              id="password"
              {...register('email', { required: true })}
              className="w-full pr-3 text-base bg-transparent outline-none placeholder:text-secondary text-primary"
            />
          </div>
        </label>
      </form>
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
    </div>
  );
};

export default LoginForm;
