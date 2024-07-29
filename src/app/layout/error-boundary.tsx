import { Navigate } from 'react-router-dom';

export function LayoutErrorBoundary() {
  return (
    <>
      <Navigate to="/expired" replace={true}></Navigate>
    </>
  );
}
