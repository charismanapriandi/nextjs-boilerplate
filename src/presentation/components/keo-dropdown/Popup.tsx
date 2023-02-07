import { KeoIconProps, KeoIcon } from 'presentation/components';
import { lighten, ListItemIcon, ListItemText, Menu as MuiMenu, MenuItem, MenuList, useTheme } from '@mui/material';
import { ReactNode } from 'react';

type DefinedIcon = KeoIconProps

type UndefinedIcon = {
  name?: undefined;
  variant?: never;
  iconProps?: never
}

type DropdownIcon = DefinedIcon | UndefinedIcon

export type MenuPopupList = {
  action?: () => void
  label: string;
  icon: DropdownIcon 
}

type MenuPopupProps = {
  onClose: () => void;
  anchorEl: HTMLElement | null;
  variant?: 'ltr' | 'rtl';
  list: MenuPopupList[];
} 

function Popup({ list, onClose, anchorEl, variant = 'ltr' }: MenuPopupProps) {
  const theme = useTheme();

  return (
    <MuiMenu
      open={!!anchorEl}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={
        (variant === 'ltr' && { vertical: 'bottom', horizontal: 'left' })
        || (variant === 'rtl' && { vertical: 'bottom', horizontal: 'right' })
        || undefined
      }
      transformOrigin={
        (variant === 'ltr' && ({ vertical: 'top', horizontal: 'left' }))
        || (variant === 'rtl' && ({ vertical: 'top', horizontal: 'right' }))
        || undefined
      }
      sx={{
        '.MuiPaper-root': {
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: `0 3px 4px 0 ${theme.color.gray[900]}33`,
          minWidth: '200px'
        },
      }}
    >
      {list && (
        <MenuList disablePadding>
          {list.length > 0 && list.map((list, index) => {
            const handleClick = () => {
              if (list.action) list.action();
              onClose();
            };

            return (
              <MenuItem key={index} onClick={handleClick}>
                {list.icon.variant && (
                  <ListItemIcon>
                    <KeoIcon {...list.icon} />
                  </ListItemIcon>
                )}
                <ListItemText>{list.label}</ListItemText>
              </MenuItem>
            );
          })}
        </MenuList>
      )}
    </MuiMenu>
  );
}
Popup.displayName = 'KeoDropdownPopup';

export default Popup