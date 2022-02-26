import './App.scss';
import { useState } from 'react';
import logo from './assets/icons/logo-white.svg';
import noResults from './assets/illustrations/no-results.png';
import pick from './assets/illustrations/pick.png';
import Link from './components/Link/Link';
import PlantsForm from './components/PlantsForm/PlantsForm';
import PlantsMosaic from './components/PlantsMosaic/PlantsMosaic';

function App() {
  const [plants, setPlants] = useState([]);

  return (
    <>
      <header className='introduction'>
        <div className='introduction__content'>
          <img src={logo} alt='Greenthumb' className='introduction__logo' />
          <h1 className='introduction__title'>Find your next green friend</h1>
          <Link href='#form' isFlat={true} icon='arrowDown' />
        </div>
      </header>

      <main className='main-content'>
        <PlantsForm onFetch={setPlants} />
        {
          !plants.length &&
          <section className='no-results'>
            <div className='no-results__content'>
              <h2 className='no-results__title'>No results yet...</h2>
              <p className='no-results__subtitle'>Use the filters above to find the plant that best fits your environment :)</p>
              <img
                src={noResults}
                alt='Illustration of a question mark inside a vase'
                className='no-results__image'
              />
            </div>
          </section>
        }

        {
          plants.length &&
          <section className='results'>
            <div className='results__header'>
              <img
                src={pick}
                alt='Illustration of a hand holding a tree branch'
                className='results__illustration'
              />
              <h2 className='results__title'>Our picks for you</h2>
            </div>
            <PlantsMosaic plants={plants} />
            <div className='results__back-button'>
              <Link href='#form' icon='arrowUp' text='back to the top'/>
            </div>
          </section>
        }
      </main>
    </>
  );
}

export default App;
