import './PlantCard.scss';
import highSun from '../../assets/icons/high-sun.svg';
import lowSun from '../../assets/icons/low-sun.svg';
import noSun from '../../assets/icons/no-sun.svg';
import pet from '../../assets/icons/pet.svg';
import toxic from '../../assets/icons/toxic.svg';
import waterDaily from '../../assets/icons/water-daily.svg';
import waterRarely from '../../assets/icons/water-rarely.svg';
import waterRegularly from '../../assets/icons/water-regularly.svg';

const icons = {
  sun: {
    low: lowSun,
    high: highSun,
    no: noSun,
  },
  water: {
    daily: waterDaily,
    rarely: waterRarely,
    regularly: waterRegularly,
  },
  pet,
  toxic,
};

export type Plant = {
  id: number;
  name: string;
  price: number;
  staff_favorite: boolean;
  sun: 'low' | 'high' | 'no' ;
  toxicity: boolean;
  url: string;
  water: 'daily' | 'rarely' | 'regularly';
};

function PlantCard({plant, tag}: {plant: Plant, tag: string}) {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <Tag className='plant-card'>
      { plant.staff_favorite && <p className='plant-card__favorite'>✨ Staff favorite</p> }
      <img src={plant.url} alt={`${plant.name}`} className='plant-card__image' />
      <h3 className='plant-card__title'>{ plant.name }</h3>
      <div className='plant-card__details'>
        <h4 className='plant-card__price'>{ plant.price }</h4>
        <div>
          <img src={ plant.toxicity ? icons.toxic : icons.pet } alt={plant.toxicity ? 'toxic' : 'pet'} />
          <img src={ icons.sun[plant.sun] } alt="sun" />
          <img src={ icons.water[plant.water] } alt="water" />
        </div>
      </div>
    </Tag>
  );
};

export default PlantCard;