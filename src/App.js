import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter ,Route } from "react-router-dom";
import { AuthContextProvider } from './Contexts/AuthContexts';


function App() {


  return (
      <BrowserRouter>
        <AuthContextProvider>
          <Route path="/" exact component={Login} />
          <Route path="/home"  component={Home} />
        </AuthContextProvider>
      </BrowserRouter>
  );
}

export default App;
