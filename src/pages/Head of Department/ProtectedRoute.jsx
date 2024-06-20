import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const ProtectedRoute = ({ children, roles }) => {
  const userInfo = useSelector((state) => state.user.UserInfo);

  if (!userInfo) {
    Swal.fire('Error', 'You must be logged in to access this page', 'error');
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(userInfo.role)) {
    Swal.fire(
      'Error',
      'You do not have permission to access this page',
      'error'
    );
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
