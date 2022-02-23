import { render, screen } from '@testing-library/react'
import Link from '../Link';

describe('Link', () => {
  it('Should render label', () => {
    render(<Link href='#' text='teste'/>);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('Should have flat class when flat prop is true', () => {
    render(<Link href='#' text='teste' isFlat={true}/>);
    expect(screen.getByRole('link')).toHaveClass('link--flat');
  });

  it('Should not have flat class when flat prop is falsy', () => {
    render(<Link href='#' text='teste'/>);
    expect(screen.getByRole('link')).not.toHaveClass('link--flat');
  });

  it('Should have correct href', () => {
    render(<Link href='/teste' text='teste'></Link>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/teste');
  });
});