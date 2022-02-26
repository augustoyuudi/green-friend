import { render, screen } from '@testing-library/react';
import PlantCard, { Plant } from '../PlantCard';
import { plantMock } from '../../../tests/mocks/PlantCard';

describe('PlantCard', () => {
  it('should render custom tag', () => {
    render(<PlantCard plant={plantMock} tag='li' />);
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  it('should not render staff favorite', () => {
    render(<PlantCard plant={plantMock} tag='li' />);
    expect(screen.queryByText('Staff favorite')).toBeFalsy();
  });

  it('should render correct toxicity icon', () => {
    render(<PlantCard plant={plantMock} tag='li' />);
    expect(screen.getByAltText('toxic')).toBeInTheDocument();
  });
});