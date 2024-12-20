import { useState } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import './index.css'
//import App from './App.jsx'
import StarRating from './StarRating';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating maxRating={7} />
    <StarRating maxRating={5} messages={['Terrible', 'Bad', 'Ok', 'Good', 'Amazing']} />
    <StarRating maxRating={10} size={10} color="red" />
    <StarRating size={24} color="green" defaultRating={3} />
    <Test />
  </StrictMode>
);

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" onSetRating={setMovieRating} />
      <p>This movies was rated {movieRating} stars</p>
    </div>
  );
}
