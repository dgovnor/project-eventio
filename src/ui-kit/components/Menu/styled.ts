import styled from 'styled-components'
import { theme } from '../../assets/theme'

export const MenuWrapper = styled.div`
  font-size: ${theme.fontSize.small};
  color: ${theme.color.light};
  position: relative;

  @media (min-width: ${theme.viewport.tablet}) {
    margin-left: 0.5rem;
  }
`

export const Icon = styled.img`
  vertical-align: middle;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${theme.viewport.tablet}) {
    margin-left: 0.5rem;
  }
`
export const UserName = styled.span`
  display: ${(props: { showNameInMobile?: boolean }) =>
    props.showNameInMobile ? 'inline-block' : 'none'};

  @media (min-width: ${theme.viewport.tablet}) {
    display: inline-block;
  }
`
// This should be refactor to show dropdown at the top, bottom, left and right
export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: 1.5rem;
  right: ${(props:{align?:boolean}) => props.align ? '' : 0 };
  width: 10rem;
  padding: 0.5rem;
  background: ${theme.color.white};
  box-shadow: 0 0.3125rem 0.9375rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.875rem;
  z-index: 10;

  @media (min-width: ${theme.viewport.tablet}) {
    height: 5rem;
  }
`
