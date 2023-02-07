import { Button, ButtonProps, styled } from '@mui/material';

export type KeoButtonProps = ButtonProps;

const KeoButton = styled(Button)<ButtonProps>(() => ({
  textTransform: 'capitalize',
}));
export default KeoButton