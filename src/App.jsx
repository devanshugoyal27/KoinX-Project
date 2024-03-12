import "./App.css";
import Body from "./components/main/Body";
import TrendingCrypto from "./components/main/Trending/TrendingCrypto";
import TrendingCoin from "./components/main/TrendingCoin";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Body />
        <div className="bg-white p-4 mt-5">
          <TrendingCrypto title = 'You May Also Like' />
          <TrendingCrypto title = 'Trending Coin' />
        </div>
        <div className="md:hidden px-3">
          <TrendingCoin/>
        </div>
        
      </div>
    </>
  );
}

export default App;
