import { useDropdown, KeoDropdown, KeoIconProps } from '@presentation'
import { useRouter } from "next/router"
import { useMemo } from "react"

export default function LanguageSwitcher() {
  const { locale, locales, push, pathname } = useRouter()
  const { anchorEl, handleClose, handleOpen } = useDropdown()
  
  const icon: KeoIconProps = useMemo(() => {
    let name: KeoIconProps['name'] = 'Indonesia'
    
    switch (locale) {
      case 'id': {
        name = 'Indonesia';
        break;
      }
      case 'en': {
        name = 'UnitedStates';
        break;
      }
    }
    
    return ({ name, variant: 'flag-circle' })
  }, [locale])
  
  return (
    <KeoDropdown
      isOpen={anchorEl}
      onOpen={handleOpen}
      icon={icon}
      label={locale?.toUpperCase() ?? ''}
      size="small"
    >
      <KeoDropdown.Popup 
        anchorEl={anchorEl} 
        onClose={handleClose} 
        list={
          locales?.map(locale => {
            let label = ''
            let icon = {}
            
            switch (locale) {
              case 'id': {
                label = 'Indonesia';
                icon = {
                  name: 'Indonesia',
                  variant: 'flag-rounded',
                }
                break;
              }
              case 'en': {
                label = 'English';
                icon = {
                  name: 'UnitedStates',
                  variant: 'flag-rounded'
                }
                break;
              }
            }
            
            return {
              icon,
              label,
              action: () => push(pathname, pathname, { locale }),
            }
          })
          ?? []
        }
        variant="rtl"
      />
    </KeoDropdown>
  )
}