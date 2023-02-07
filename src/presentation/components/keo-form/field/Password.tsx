import { InputAdornment, InputBaseProps } from '@mui/material';
import { useField } from 'formik';
import { useRef, useState } from 'react';
import { KeoIconButton, KeoButton, KeoButtonProps } from 'presentation/components';
import Input from '../common/Input';

type PasswordGeneratorTrue = {
  passwordGenerator?: true
  passwordGeneratorProps?: KeoButtonProps & { label?: string }
}

type PasswordGeneratorFalse = {
  passwordGenerator?: false
  passwordGeneratorProps?: never
}

export type PasswordProps = {
  label?: string;
  name: string;
  helperText?: string;
  required?: boolean;
} & Omit<InputBaseProps, 'name'>
  & (PasswordGeneratorTrue | PasswordGeneratorFalse)

function generatePassword() {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const passwordLength = 12;
  let pass = '';
  let i = 0;
  while (i <= passwordLength) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    pass += chars.substring(randomNumber, randomNumber + 1);
    i += 1;
  }
  return pass;
}

export default function Password({
  name,
  type: unused,
  passwordGeneratorProps,
  passwordGenerator,
  ...props
}: PasswordProps) {
  const [field, meta, helpers] = useField(name);
  const generatePasswordRef = useRef<HTMLButtonElement>(null);

  // handle value visibility
  const [type, setType] = useState<'text' | 'password'>('password');
  const show = () => setType('text');
  const hide = () => setType('password');
  const toggle = () => (type === 'password' ? show() : hide());

  // generate password
  const generatePasswordButtonId = `generate-password-${field.name}`;
  const handleGeneratePassword = () => {
    helpers.setValue(generatePassword());
  };

  const generateButton = (
    <KeoButton
      id={generatePasswordButtonId}
      ref={generatePasswordRef}
      onClick={handleGeneratePassword}
      disabled={props.disabled || props.readOnly}
      size="small"
      {...passwordGeneratorProps}
      sx={{
        width: 'fit-content',
        ml: 1,
        ...passwordGeneratorProps?.sx,
      }}
    >
      {passwordGeneratorProps?.label
        ? passwordGeneratorProps.label
        : 'Generate'}
    </KeoButton>
  );

  return (
    <Input
      sx={{ display: 'flow' }}
      endAdornment={(
        <>
          <InputAdornment
            position="end"
            sx={{
              mr: generatePasswordRef.current
                ? `${generatePasswordRef.current.clientWidth + 10}px`
                : 'auto',
            }}
          >
            <KeoIconButton
              variant="ionicon-outlined"
              name="Eye"
              disabled={props.disabled || props.readOnly}
              onClick={toggle}
            />
          </InputAdornment>
          {passwordGenerator && generateButton}
        </>
        )}
      type={type}
      {...props}
      {...field}
    />
  );
}
