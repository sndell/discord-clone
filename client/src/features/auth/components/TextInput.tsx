import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
import { IconType } from 'react-icons';

type TextInputProps<T extends FieldValues> = {
  id: string;
  placeholder?: string;
  error?: FieldError;
  type: 'text' | 'password' | 'email';
  Icon: IconType;
  register: UseFormRegister<T>;
};

const TextInput = <T extends FieldValues>({
  id,
  placeholder,
  error,
  type,
  Icon,
  register,
}: TextInputProps<T>) => {
  return (
    <label
      htmlFor={id}
      className="flex h-full gap-2 overflow-hidden rounded-lg bg-tertiary"
    >
      <Icon className="my-3 ml-3 text-xl text-secondary" />
      <div className="grid grid-cols-[minmax(auto,320px)]">
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          {...register(id as Path<T>, { required: true })}
          className="w-full pr-3 text-base bg-transparent outline-none placeholder:text-secondary text-primary"
        />
      </div>
    </label>
  );
};

export default TextInput;
