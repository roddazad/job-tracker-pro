import AuthLayout from '@/components/AuthLayout';
import AuthForm from '@/components/AuthForm';

export default function SignInPage() {
  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
      <AuthForm type="signin" />
    </AuthLayout>
  );
}