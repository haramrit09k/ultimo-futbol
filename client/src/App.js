import './App.css';
import Matches from './Matches'

const mockMatches = [
  {team1: "RMA", team2:"Barca", team1Goals:3, team2Goals:1},
  {team1: "CHE", team2:"LIV", team1Goals:2, team2Goals:5}
]

function App() {
  return (
    <div className="App">
      <Matches matches={mockMatches}/>
    </div>
  );
}

export default App;
