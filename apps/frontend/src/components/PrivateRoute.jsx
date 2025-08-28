const PrivateRoute = ({ children, roles }) => {
  const { isAuthenticated, user, loading } = useAuth();
  
  if (loading) return <div>Carregando...</div>;
  
  if (!isAuthenticated) return <Navigate to="/login" />;
  
  if (roles && !roles.includes(user?.tipo)) {
    // Redireciona para a página apropriada baseada no tipo de usuário
    return <Navigate to={user?.tipo === 'cliente' ? '/cliente' : '/fornecedor'} />;
  }
  
  return children;
};

export default PrivateRoute;