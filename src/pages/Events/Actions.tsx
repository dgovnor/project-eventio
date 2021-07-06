import React, { FC, SyntheticEvent } from 'react'

import { FlexContainer, MenuTitle } from './styled'

import { useWindowSize } from '../../utils/useWindowSize'
import { FILTER } from '../../enums/constants'
import { ButtonLink } from '../../ui-kit/components/Button'
import { Menu } from '../../ui-kit/components/Menu'
import { MenuButton } from './Header/styled'

interface props {
  filterBy: string
  onChange: (e: SyntheticEvent) => void
}
export const Actions: FC<props> = ({ filterBy, onChange }) => {
  const { isMobile } = useWindowSize()

  const filterName = (value: string) => {
    switch (value) {
      case 'all':
        return 'All Events'

      case 'past':
        return 'Past Events'

      case 'future':
        return 'Future Events'

      default:
        return 'All Events'
    }
  }

  if (isMobile) {
    return (
      <FlexContainer>
        <MenuTitle>Show:</MenuTitle>
        <Menu align showNameInMobile name={filterName(filterBy)}>
          <MenuButton
            isActive={filterBy === FILTER.ALL}
            type="button"
            onClick={onChange}
            value={FILTER.ALL}
          >
            all events
          </MenuButton>

          <MenuButton
            isActive={filterBy === FILTER.FUTURE}
            type="button"
            onClick={onChange}
            value={FILTER.FUTURE}
          >
            future events
          </MenuButton>

          <MenuButton
            isActive={filterBy === FILTER.PAST}
            type="button"
            onClick={onChange}
            value={FILTER.PAST}
          >
            past events
          </MenuButton>
        </Menu>
      </FlexContainer>
    )
  } else {
    return (
      <div>
        <ButtonLink
          isActive={filterBy === FILTER.ALL}
          type="button"
          onClick={onChange}
          value={FILTER.ALL}
        >
          all events
        </ButtonLink>

        <ButtonLink
          isActive={filterBy === FILTER.FUTURE}
          type="button"
          onClick={onChange}
          value={FILTER.FUTURE}
        >
          future events
        </ButtonLink>

        <ButtonLink
          isActive={filterBy === FILTER.PAST}
          type="button"
          onClick={onChange}
          value={FILTER.PAST}
        >
          past events
        </ButtonLink>
      </div>
    )
  }
}

Actions.displayName = 'Actions'
