import './App.css';
import BackgroundImage from './Components/BackgroundImage';
import StoreListings from './Components/StoreListings';
import TopBar from './Components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <BackgroundImage />
      <StoreListings />
    </div>
  );
}

export default App;
