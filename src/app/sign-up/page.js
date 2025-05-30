import AuthLayout from '@/components/AuthLayout';
import AuthForm from '@/components/AuthForm';

export default function SignUpPage() {
  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
      <AuthForm type="signup" />
    </AuthLayout>
  );
}