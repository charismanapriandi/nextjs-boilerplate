import { alpha, InputBase, InputBaseProps, styled } from '@mui/material';

export type KeoInputBaseProps = InputBaseProps;

const KeoInputBase = styled(InputBase)(({ theme, fullWidth }) => ({
  'label + &': {
    marginTop: theme.spacing(2),
  },
  '& .MuiInputBase-input': {
    borderRadius: theme.shape.borderRadius,
    position: 'relative',
    backgroundColor: theme.color.smoke[50],
    border: '1px solid #ced4da',
    fontSize: 16,
    width: fullWidth ? '100%' : 'auto',
    padding: '12px 15px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    fontFamily: theme.typography.fontFamily,
    '&:focus': {
      boxShadow: `${alpha(theme.color.gray[900], 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.color.gray[900],
    },
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '&[type=number]': {
      MozAppearance: 'textfield',
    },
  },
  // when adornedEnd is set
  '.MuiInputBase-inputAdornedEnd': {
    paddingRight: '50px',
  },
  '.MuiInputBase-inputAdornedEnd.KeoInputBase-counter': {
    padding: '15px',
    textAlign: 'center',
  },
  '.MuiInputAdornment-root.MuiInputAdornment-positionEnd': {
    position: 'absolute',
    right: 5,
  },
}));

export default KeoInputBase