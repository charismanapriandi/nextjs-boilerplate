import { InputBaseProps } from '@mui/material';
import { useField } from 'formik';
import Input from '../common/Input';

export interface TextFieldProps extends Omit<InputBaseProps, 'name'> {
  label?: string;
  name: string;
  helperText?: string;
  required?: boolean;
}

export default function TextField({ name, ...props }: TextFieldProps) {
  const [field] = useField(name);
  return <Input {...field} {...props} name={name} />;
}
