import { Suspense } from 'react';
import './App.css';
import Bottles from './components/bottles/Bottles';

// https://raw.githubusercontent.com/ProgrammingHero1/awesome-water-bottles/refs/heads/main/public/bottles.json

const bottlePromise = fetch('https://raw.githubusercontent.com/ProgrammingHero1/awesome-water-bottles/refs/heads/main/public/bottles.json').then(res => res.json());


function App() {

  return (
    <>
      <Suspense fallback={<h3>Data loading</h3>}>
        <h2 className='bottles-container-title'>Supper Water Bottles For Pure Guys</h2>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>

    </>
  )
}

export default App
