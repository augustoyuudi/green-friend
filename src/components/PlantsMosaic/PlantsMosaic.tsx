import './PlantsMosaic.scss'
import PlantsCard, { Plant } from '../PlantCard/PlantCard';

function PlantsMosaic({ plants }: { plants: Plant[] }) {
  return (
    <ul className='mosaic'>
      {
        plants.map((plant) => <PlantsCard plant={plant} tag='li' key={plant.id} />)
      }
    </ul>
  );
};

export default PlantsMosaic;