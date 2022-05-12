import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userAuthSelector from '../../../ducks/selectors.js';

function RequireAutharization() {

  const userAuthData = useSelector(userAuthSelector);
  const location = useLocation();

  return (
    userAuthData !== null
      ? <Outlet/>
      : <Navigate to="/login" state={{ from: location }} replace/>
  )
}

export default RequireAutharization;