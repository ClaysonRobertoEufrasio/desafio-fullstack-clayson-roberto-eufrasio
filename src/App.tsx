import './App.css';
import AuthProvider from './Context/AuthContext';

import Global from './Style/global'
import RouteMain from './Routes/MainRouter';

function App() {
  return (
    <AuthProvider>
      <Global />
      <RouteMain />
    </AuthProvider>
  );
}

export default App;
