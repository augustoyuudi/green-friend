import './Select.scss';

type Props = {
  name: string;
  id: string;
  defaultValue?: string;
  defaultText?: string;
  options: string[][];
  onChange: Function;
};

function Select(props: Props) {
  return (
    <select
      name={props.name}
      id={props.id}
      className='select'
      defaultValue={props.defaultValue || ''}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    >
      <option
        value={props.defaultValue || ''}
        disabled
      >
        {props.defaultText || 'Select...'}
      </option>
      {
        props.options.map((option) => {
          return (
            <option
              key={option[0]}
              value={option[0]}
            >
              {option[1]}
            </option>
          );
        })
      }
    </select>
  );
};

export default Select;