import './Link.scss';
import arrowUp from '../../assets/icons/arrow-up.svg';
import arrowDown from '../../assets/icons/arrow-down.svg';

const icons: Icons = {
  arrowUp,
  arrowDown,
}

type Icons = {
  arrowUp: string;
  arrowDown: string;
}

type Props = {
  href: string;
  text?: string;
  isFlat?: boolean;
  icon?: keyof Icons;
};

function Link(props: Props): JSX.Element {
  return (
    <a
      href={props.href}
      className={`link ${ props.isFlat ? 'link--flat' : ''}`}
    >
      {
        props.icon && <img className='link__icon' src={icons[props.icon]} alt='Icon' />
      }
      { props.text }
    </a>
  );
};

export default Link;