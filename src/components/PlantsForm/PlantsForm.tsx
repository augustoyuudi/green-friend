import { useState, useEffect } from 'react';
import './PlantsForm.scss';
import sun from '../../assets/illustrations/sun.png';
import wateringCan from '../../assets/illustrations/wateringcan.png';
import dog from '../../assets/illustrations/dog.png';
import Select from '../Select/Select';

function PlantsForm() {
  const sunlightOptions = [
    ['no', 'None'],
    ['low', 'Low'],
    ['high', 'High'],
  ];

  const waterOptions = [
    ['regularly', 'Regularly'],
    ['daily', 'Daily'],
    ['rarely', 'Rarely'],
  ];

  const petsOptions = [
    ['true', 'Yes'],
    ['false', 'No'],
  ];

  const [sunlight, setSunlight] = useState(null);
  const [water, setWater] = useState(null);
  const [pets, setPets] = useState(null);

  useEffect(() => {
    if (!sunlight || !water || !pets) {
      return;
    }
    const url = `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sunlight}&water=${water}&pets=${pets}`;
    fetch(url)
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [sunlight, water, pets]);

  return (
    <form action='post' className='form' id='form'>
      <fieldset className='form__filter'>
        <legend>
          <img
            src={sun}
            alt='Illustration of a sun with sunglasses'
            className='form__icon'
          />
        </legend>
        <label htmlFor='sunlight' className='form__label'>
          <b>1.</b> Set the amount of <strong>sunlight</strong> your plant will get.
        </label>
        <Select
          name='sunlight'
          id='sunlight'
          options={sunlightOptions}
          onChange={setSunlight}
        />
      </fieldset>

      <fieldset className='form__filter'>
        <legend>
          <img
            src={wateringCan}
            alt='Illustration of a watering can'
            className='form__icon'
          />
        </legend>
        <label htmlFor='water' className='form__label'>
          <b>2.</b> How often do you want to <strong>water</strong> your plant?
        </label>
        <Select
          name='water'
          id='water'
          options={waterOptions}
          onChange={setWater}
        />
      </fieldset>

      <fieldset className='form__filter'>
        <legend>
          <img
            src={dog}
            alt='Illustration of a dog'
            className='form__icon'
          />
        </legend>
        <label htmlFor='pets' className='form__label'>
          <b>3.</b> Do you have pets? Do they <strong>chew</strong> plants?
        </label>
        <Select
          name='pets'
          id='pets'
          options={petsOptions}
          onChange={setPets}
        />
      </fieldset>
    </form>
  );
};

export default PlantsForm;