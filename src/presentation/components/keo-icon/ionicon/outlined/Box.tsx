import { SvgIcon, SvgIconProps } from '@mui/material';

export default function Box(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M20.6344 6.05625L13.5094 1.90781C12.5813 1.36406 11.4234 1.36406 10.4953 1.90781L3.37031 6.05625C2.68125 6.45469 2.25 7.2 2.25 7.99688V16.0031C2.25 16.8 2.67656 17.5453 3.36563 17.9437L10.4906 22.0922C10.9359 22.35 11.4281 22.4859 11.9297 22.4953C11.9531 22.4953 11.9766 22.5 12 22.5C12.0234 22.5 12.0469 22.5 12.0703 22.4953C12.5672 22.4859 13.0641 22.35 13.5094 22.0922L20.6344 17.9437C21.3234 17.5406 21.75 16.8 21.75 16.0031V7.99688C21.75 7.2 21.3188 6.45469 20.6344 6.05625ZM11.2453 3.20625C11.4797 3.07031 11.7375 3.00469 12 3.00469C12.2625 3.00469 12.5203 3.07031 12.7547 3.20625L19.4672 7.11563L12 11.5031L4.53281 7.11094L11.2453 3.20625ZM4.12031 16.65C3.89063 16.5141 3.75 16.2656 3.75 16.0031V8.39062L11.25 12.8016V20.7938C11.25 20.7938 11.25 20.7938 11.2453 20.7938L4.12031 16.65ZM19.8797 16.65L12.7547 20.7984H12.75V12.8016L20.25 8.39062V15.9984C20.25 16.2656 20.1094 16.5141 19.8797 16.65Z" />
    </SvgIcon>
  );
}