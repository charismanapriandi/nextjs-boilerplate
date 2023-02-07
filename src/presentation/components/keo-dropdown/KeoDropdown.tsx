import {
  KeoButton,
  KeoButtonProps,
  KeoIcon,
  KeoIconProps,
} from 'presentation/components';
import { useTheme } from '@mui/material';
import { ReactNode } from 'react';

interface DropdownToggleProps extends KeoButtonProps {
  label: string;
  icon?: KeoIconProps;
  children: ReactNode;
  onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isOpen: HTMLElement | null;
}

export default function KeoDropdown({
  icon,
  label,
  onOpen,
  children,
  isOpen,
  ...props
}: DropdownToggleProps) {
  const theme = useTheme()
  return (
    <>
      <KeoButton onClick={onOpen} {...props}>
        {icon && <KeoIcon {...icon} sx={{ mr: 1 }} />}
        {label}
        <KeoIcon 
          name="ChevronDown" 
          variant='ionicon-outlined' 
          fontSize="small"
          sx={{ 
            ml: 1, 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', 
            transition: theme.transitions.create('transform') 
          }} 
        />
      </KeoButton>
      {children}
    </>
  );
}