import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

interface Props {
  children: React.ReactNode;
  allowedRoles: string[];
}

export const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const { token, user } = useAuthStore();
  if (!token || !allowedRoles.includes(user?.role || '')) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};