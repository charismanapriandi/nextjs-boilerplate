import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import { styled } from '@mui/material';

export type KeoLoadingButtonProps = LoadingButtonProps;

const KeoLoadingButton = styled(LoadingButton)<KeoLoadingButtonProps>(() => ({}));

export default KeoLoadingButton;