import { DesktopDatePicker, DesktopDatePicker as MuiDesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker as MuiMobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers';
import { useField } from 'formik';
import { InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import Input from '../common/Input';
import { KeoIconButton } from 'presentation/components';

const ComponentVariant = {
  MuiDesktopDatePicker,
  MuiMobileDatePicker,
};

export interface DatePickerProps extends
  Omit<MuiDatePickerProps<Date, Date>, 'renderInput' | 'onChange' | 'value'> {
  name: string;
  required?: boolean;
  label: string;
  variant?: 'mobile' | 'desktop'
}

export default function DatePicker({
  required,
  variant = 'desktop',
  inputFormat = 'DD MMMM YYYY',
  ...props
}: DatePickerProps) {
  const [field, meta, helpers] = useField(props.name);

  // control popup
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // handle variant
  const Component = ComponentVariant[
    (variant === 'desktop' && 'MuiDesktopDatePicker')
    || (variant === 'mobile' && 'MuiMobileDatePicker')
    || 'MuiDesktopDatePicker'
  ];

  return (
    <Component
      inputFormat={inputFormat}
      disableMaskedInput
      onOpen={handleOpen}
      onClose={handleClose}
      open={isOpen}
      renderInput={({ InputProps, ...props }) => (
        <Input
          endAdornment={(
            <InputAdornment position="end">
              <KeoIconButton variant='ionicon-outlined' name="Calendar" onClick={handleOpen} />
            </InputAdornment>
          )}
          required={required}
          {...props as any}
          {...field}
        />
      )}
      onChange={(value) => {
        helpers.setValue(value);
      }}
      value={field.value}
      {...props}
    />
  );
}
