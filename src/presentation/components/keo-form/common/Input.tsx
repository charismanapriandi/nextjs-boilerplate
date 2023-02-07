import { FormControl, FormHelperText, InputBaseProps, InputLabel } from '@mui/material';
import { ErrorMessage } from 'formik';
import { KeoInputBase } from 'presentation/components';

export interface InputProps extends InputBaseProps {
  label?: string;
  name?: string;
  helperText?: string;
  required?: boolean;
  disableMargin?: boolean;
}

export default function Input({
  label,
  helperText,
  required,
  disableMargin,
  ...props
}: InputProps) {
  return (
    <FormControl
      fullWidth
      className={disableMargin ? 'KeoFormControl-disableMargin' : ''}
    >
      {label && (
        <InputLabel
          shrink
          htmlFor={props.name}
          required={required}
        >
          {label}
        </InputLabel>
      )}
      <KeoInputBase
        fullWidth
        sx={{ mt: 0 }}
        {...props}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <ErrorMessage
        component={
          ({ children }: any) => (
            <FormHelperText error>
              {children}
            </FormHelperText>
          )
        }
        name={props.name ?? ''}
      />
    </FormControl>
  );
}
