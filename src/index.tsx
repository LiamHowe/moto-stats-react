import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Riders from './riders/Riders';
import TrackStats from './track-stats/TrackStats';
import Navigation from './page/Navigation';
import { Content } from './page/Content.styles';

const Home: React.FC = () => {
  return <>
      <Navigation/>
      <Content><h1>Homepage</h1></Content>
  </>
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="riders" element={<Riders />} />
      <Route path="track-stats" element={<TrackStats />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
