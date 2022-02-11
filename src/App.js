import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import WeekContainer from './Components/WeekContainer/WeekContainer';

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <WeekContainer />
      
    </div>
  );
}

export default App;
