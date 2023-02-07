import { Box, BoxProps, styled } from '@mui/material';

const RowStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  '.MuiFormControl-root:first-of-type': {
    marginTop: '25px',
  },
}));

type KeoFormRowProps = BoxProps

function Row({ children, ...props }: KeoFormRowProps) {
  return <RowStyled className="KeoFormRow-root" {...props}>{children}</RowStyled>;
}

export default Row;
