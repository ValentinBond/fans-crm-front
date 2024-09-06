import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/src/hooks/useAuth';

const formSchema = z.object({
  password: z.string().min(5),
  email: z.string().email(),
});

type FormValuesType = z.infer<typeof formSchema>;

export const LoginForm = () => {
  const { loginHandler } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValuesType>({
    resolver: zodResolver(formSchema),
    mode: 'all',
  });

  const submit = handleSubmit((data) => {
    loginHandler(data);
  });

  return (
    <div>
      <form onSubmit={submit}>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>

        <input {...register('password')} />
        <p>{errors.password?.message}</p>

        <button type="submit" disabled={!isValid}>
          Log in
        </button>
      </form>
    </div>
  );
};
