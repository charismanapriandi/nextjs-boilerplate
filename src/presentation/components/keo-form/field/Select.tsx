import { KeoIcon } from 'presentation/components';
import {
  Box,
  CircularProgress,
  FormControl,
  Select as MuiSelect,
  FormHelperText,
  MenuItem,
  SelectProps as MuiSelectProps,
} from '@mui/material';
import { ErrorMessage, useField } from 'formik';
import Input from '../common/Input';

export interface SelectOptions {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps extends MuiSelectProps {
  name: string;
  label: string;
  required?: boolean;
  loading?: boolean;
  options: SelectOptions[];
  helperText?: string;
}

function Loading() {
  return (
    <Box sx={{ position: 'absolute', right: 10, mt: '7px' }}>
      <CircularProgress size={15} />
    </Box>
  );
}

export default function Select({
  name,
  required,
  label,
  loading,
  options,
  helperText,
  ...props
}: SelectProps) {
  const [field] = useField(name);

  return (
    <FormControl fullWidth>
      <MuiSelect
        labelId={`${field.name}-label`}
        id={`${field.name}`}
        disabled={loading}
        IconComponent={(params) => (loading
          ? <Loading />
          : <KeoIcon icon="ChevronDown" {...params} fontSize="small" />)}
        input={(
          <Input fullWidth label={label} />
        )}
        {...field}
        {...props}
      >
        {
          options && options.length > 0
            ? options.map((item, index) => (
              <MenuItem
                key={index}
                disabled={item.disabled}
                value={item.value}
              >
                {item.label}
              </MenuItem>
            )) : (
              <MenuItem>--- Tidak ada pilihan ---</MenuItem>
            )
        }
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <ErrorMessage component={() => <FormHelperText error />} name={field.name} />
    </FormControl>
  );
}
