import { Avatar,
  Box,
  Collapse,
  List,
  ListItem as MuiListItem,
  ListItemButton,
  ListItemIcon,
  ListItemProps,
  ListItemText,
  useTheme } from '@mui/material';
import { KeoIcon, KeoIconProps } from 'presentation/components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useToggle } from 'presentation/hook';
import { IMenuRoutes } from 'config/routes/interface';

export type DrawerListItemProps = IMenuRoutes

export default function DrawerListItem({
  icon,
  label,
  href,
  subRoutes,
  ...props
}: DrawerListItemProps) {
  const router = useRouter();
  const theme = useTheme();
  const { toggle, active } = useToggle();

  useEffect(() => {
    if (!href) return

    if (router.pathname.includes(href)) {
      !active && toggle();
    }
    
  }, [href, router, toggle, active]);

  return (
    <>
      <MuiListItem
        {...props}
        sx={{ paddingY: '5px' }}
      >
        <ListItemButton
          onClick={subRoutes ? toggle : undefined}
          component={subRoutes ? Box : Link}
          href={href}
          selected={router.pathname === href}
        >
          {icon && (
          <ListItemIcon
            sx={{
              '.MuiSvgIcon-root': {
                color: 'white',
                fontSize: '1.25rem',
              },
            }}
          >
            <KeoIcon {...icon} />
          </ListItemIcon>
          )}
          {/* {avatarSrc && (
            <Avatar alt="Avatar" src={avatarSrc} sx={{ width: 20, height: 20 }} />
          )} */}
          <ListItemText primary={label} />
          {subRoutes && (
            <ListItemIcon>
              <KeoIcon
                variant='ionicon-outlined'
                name="ChevronRight"
                sx={{
                  color: 'white',
                  ml: 'auto',
                  transform: active
                    ? 'rotate(90deg)'
                    : 'rotate(0deg)',
                  transition: theme.transitions.create(['all']),
                }}
                fontSize="small"
              />
            </ListItemIcon>
          )}
        </ListItemButton>
      </MuiListItem>
      {subRoutes && (
        <Collapse in={active} timeout="auto" unmountOnExit>
          <List
            sx={{
              border: `1px dashed ${theme.color.gray[600]}`,
              mx: 2,
              my: '5px',
              borderRadius: `${theme.shape.borderRadius}px`,
              overflow: 'hidden',
            }}
            disablePadding
          >
            {subRoutes.map((child, index) => (
              <MuiListItem key={index} disablePadding>
                <ListItemButton
                  sx={{ borderRadius: '0px !important' }}
                  component={Link}
                  href={child.href ?? '#'}
                  selected={router.pathname === child.href}
                >
                  {child.icon && (
                    <ListItemIcon
                      sx={{
                        '.MuiSvgIcon-root': {
                          color: 'white',
                          fontSize: '1.25rem',
                        },
                      }}
                    >
                      <KeoIcon {...child.icon} />
                    </ListItemIcon>
                  )}
                  {/* {child.avatarSrc && (
                    <Avatar alt="Avatar" src={child.avatarSrc} sx={{ width: 20, height: 20 }} />
                  )} */}
                  <ListItemText primary={child.label} />
                </ListItemButton>
              </MuiListItem>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}
