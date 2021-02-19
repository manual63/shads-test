import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from "./components/Body";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Body sectionTitle="Testing useState()" />
    </div>
  );
}

export default App;
