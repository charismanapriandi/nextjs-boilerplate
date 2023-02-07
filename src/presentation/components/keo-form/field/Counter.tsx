// import { Box, useTheme } from '@mui/material';
import { useField } from 'formik';
import { KeoIconButton } from 'presentation/components';
import Input, { InputProps } from '../common/Input';

export interface CounterProps extends Omit<InputProps, 'type'> {
  label?: string;
  name: string;
  disableTyping?: boolean;
  min?: number;
  max?: number;
}

export default function Counter({
  label,
  name,
  disableTyping,
  min,
  max,
  ...props
}: CounterProps) {
  const [field, meta, helpers] = useField(name);

  const handleIncrement = () => {
    if (typeof max === 'number') {
      if (field.value < max) {
        helpers.setValue(field.value + 1);
      }
    } else {
      helpers.setValue(field.value + 1);
    }
  };
  const handleDecrement = () => {
    if (typeof min === 'number') {
      if (field.value > min) {
        helpers.setValue(field.value - 1);
      }
    } else {
      helpers.setValue(field.value - 1);
    }
  };
  return (
    <Input
      startAdornment={(
        <KeoIconButton sx={{ mr: 1 }} onClick={handleDecrement} name="Minus" variant="ionicon-outlined" />
      )}
      endAdornment={(
        <KeoIconButton sx={{ ml: 1 }} onClick={handleIncrement} name="Plus" variant="ionicon-outlined" />
      )}
      label={label}
      type="number"
      readOnly={disableTyping}
      inputProps={{
        className: 'KeoInputBase-counter',
      }}
      {...field}
      {...props}
    />
  );
}
