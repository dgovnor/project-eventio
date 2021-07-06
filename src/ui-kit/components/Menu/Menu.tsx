import React, { useState, useRef, FC } from 'react'

import { MenuWrapper, Icon, Dropdown, UserName } from './styled'
import { ButtonLink } from '../Button'
import { useOuterClick } from '../../../utils/useOuterClick'

/**
 * Render reusable menu
 * @function
 */

interface MenuProps {
  name: string
  showNameInMobile?: boolean
  align?: boolean
}
export const Menu: FC<MenuProps> = ({ name, showNameInMobile, align, children }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useOuterClick(dropdownRef, () => {
    if (openMenu) {
      setOpenMenu(false)
    }
  })

  return (
    <MenuWrapper>
      <ButtonLink
        id="buttonType"
        type="button"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <UserName showNameInMobile={showNameInMobile}>{name}</UserName>
        <Icon src="/icons/dropdown.svg" />
      </ButtonLink>

      {openMenu && <Dropdown align={align} ref={dropdownRef}>{children}</Dropdown>}
    </MenuWrapper>
  )
}

Menu.displayName = 'Menu'
