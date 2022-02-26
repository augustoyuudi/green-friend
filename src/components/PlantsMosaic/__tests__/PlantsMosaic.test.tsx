import { render, screen } from '@testing-library/react';
import PlantsMosaic from '../PlantsMosaic';
import { Plant } from '../../PlantCard/PlantCard';
import { plantMock } from '../../../tests/mocks/PlantCard';

describe('PlantsMosaic', () => {
  const plants: Plant[] = [
    plantMock,
  ];

  it('should render plants list correctly', () => {
    render(<PlantsMosaic plants={plants} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
  });

  it('should not render plant if array is empty', () => {
    render(<PlantsMosaic plants={[]} />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});