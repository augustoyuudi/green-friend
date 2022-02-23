import { render, screen, fireEvent } from '@testing-library/react';
import Select from '../Select';

describe('Select', () => {
  const options = [
    ['value', 'text']
  ];
  const onChange = jest.fn();

  it('should render options array', () => {
    render(<Select name='teste' id='teste' options={options} onChange={onChange} />);
    const select = screen.getByRole('combobox');
    const option = screen.getByText('text');
    expect(select).toContainElement(option);
  });

  it('should render default option', () => {
    render(<Select name='teste' id='teste' options={options} onChange={onChange} />);
    const defaultOption = screen.getByText('Select...');
    expect(defaultOption).toBeInTheDocument();
  });

  it('should render default option with custom text', () => {
    render(<Select name='teste' id='teste' defaultText='Selecione' options={options} onChange={onChange} />);
    const defaultOption = screen.getByText('Selecione');
    expect(defaultOption).toBeInTheDocument();
  });

  it('should call onChange function when option is selected', () => {
    render(<Select name='teste' id='teste' options={options} onChange={onChange} />);

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'value' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});