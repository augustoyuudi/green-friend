import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PlantsForm from '../PlantsForm';

describe('PlantsForm', () => {
  it('should fetch data after all options have been selected', async () => {
    const onFetch: Function = jest.fn(); // already executed 1 time in state initialization

    render(<PlantsForm onFetch={onFetch} />);

    const sunlight = screen.getByRole('combobox', {name: /sunlight/});
    const water = screen.getByRole('combobox', {name: /water/});
    const pets = screen.getByRole('combobox', {name: /pets/});

    fireEvent.change(sunlight, {target: {value: 'low'}});
    fireEvent.change(water, {target: {value: 'regularly'}});
    fireEvent.change(pets, {target: {value: 'true'}});

    await waitFor(() => {
      expect(onFetch).toHaveBeenCalledTimes(2);
    });

    fireEvent.change(water, {target: {value: 'daily'}});

    await waitFor(() => {
      expect(onFetch).toHaveBeenCalledTimes(3);
    });
  });
});