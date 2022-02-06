import logo from './logo.svg';
import './App.css';
import { Button, Rating } from '@mui/material';
import NewsPaper from './components/NewsPaper';

function App() {
  return (
    <div className="App">
      <Button variant='contained'>My first button</Button>
      <Rating name="read-only" value={3} readOnly />
      <NewsPaper></NewsPaper>
    </div>
  );
}

export default App;
