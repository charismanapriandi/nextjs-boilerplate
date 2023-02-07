import { IoniconOutlined } from "presentation/components/keo-icon/ionicon"
import { Box, SvgIconProps } from "@mui/material";
import { FlagCircle } from "presentation/components/keo-icon/flag";
import {KeoForm} from '@presentation'

type FlagCircleVariant = { variant: 'flag-circle', name: keyof typeof FlagCircle }
type IoniconOutlinedVariant = { variant?: 'ionicon-outlined', name: keyof typeof IoniconOutlined }

export type KeoIconProps = SvgIconProps & ( FlagCircleVariant | IoniconOutlinedVariant )
  
const KeoIcon = ({ variant, name, ...props }: KeoIconProps) => {
  switch (variant) {
    case 'ionicon-outlined': {
      const Element = IoniconOutlined[name as IoniconOutlinedVariant['name']]
      return <Element {...props} />
    }
    case 'flag-circle': {
      const Element = FlagCircle[name as FlagCircleVariant['name']]
      return <Element {...props} />
    }
    default: {
      return <Box sx={{width: 24, height: 24, backgroundColor: 'red'}} />
    }
  }
}

KeoIcon.defaultProps = {
  variant: 'ionicon-outlined'
}

export default KeoIcon;

