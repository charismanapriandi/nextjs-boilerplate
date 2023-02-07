import { Typography } from "@mui/material";
import { ChangeEvent } from "react";

interface KeoTableFieldProps<T> {
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function KeoTableField<T>({ name, value, onChange }: KeoTableFieldProps<T>) {
  return (
    <Typography 
      component="input" 
      width="100%" 
      height="100%" 
      name={name} 
      value={value}
      onChange={onChange}
      sx={{
        border: 'none',
        backgroundColor: 'transparent',
        ':focus': {
          outline: 'none'
        }
      }}
    />
  )
}