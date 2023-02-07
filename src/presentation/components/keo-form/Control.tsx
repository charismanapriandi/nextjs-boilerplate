import Select, { SelectProps as FieldSelectProps } from './field/Select';
import TextField, { TextFieldProps as FieldTextFieldProps } from './field/TextField';
import DatePicker, { DatePickerProps as FieldDatePickerProps } from './field/DatePicker';
import Password, { PasswordProps as FieldPasswordProps } from './field/Password';
import Counter, { CounterProps as FieldCounterProps } from './field/Counter';

type SelectProps = { control: 'select' } & FieldSelectProps
type TextFieldProps = { control: 'textfield' } & FieldTextFieldProps
type DatePickerProps = { control: 'datepicker' } & FieldDatePickerProps
type PasswordProps = { control: 'password' } & FieldPasswordProps
type CounterProps = { control: 'counter' } & FieldCounterProps

type KeoFormControlProps =
 | SelectProps
 | TextFieldProps
 | DatePickerProps
 | PasswordProps
 | CounterProps

export default function Control({ control, ...props }: KeoFormControlProps) {
  switch (control) {
    case 'select': {
      return <Select {...props as FieldSelectProps} />;
    }
    case 'textfield': {
      return <TextField {...props as FieldPasswordProps} />;
    }
    case 'datepicker': {
      return <DatePicker {...props as FieldDatePickerProps} />;
    }
    case 'password': {
      return <Password {...props as FieldPasswordProps} />;
    }
    case 'counter': {
      return <Counter {...props as FieldCounterProps} />;
    }
    default: {
      throw new Error('control is undefined: FormikController');
    }
  }
}
