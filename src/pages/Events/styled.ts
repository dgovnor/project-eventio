import styled from 'styled-components'
import {theme} from '../../ui-kit/assets/theme'
import {Button} from '../../ui-kit/components/Button'

export const StyledButton = styled(Button)`
  display: inline-block;
  margin-top: 2rem;
`
export const Content = styled.div`
  margin: 0 auto;
`

export const EventsActions = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
`

export const List = styled.div`
  display: flex;
  flex-wrap: ${(props: {type: string}) => (props.type === 'list' ? 'no-wrap' : 'wrap')};
  justify-content: space-between;
  flex-direction: ${(props: {type: string}) => (props.type === 'list' ? 'column' : 'row')};
`
export const Card = styled.div`
  margin: 0.5rem 0;
  padding: 1rem;
  background: ${theme.color.white};
  box-shadow: 0 0.125rem 0.1875rem 0 rgba(0, 0, 0, 0.11);
  border-radius: 0.125rem;
  letter-spacing: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: ${theme.transition.slower};
  width: ${(props: {type: string}) => (props.type === 'list' ? 'unset' : '30%')};
  flex-direction: ${(props: {type: string}) => (props.type === 'list' ? 'row' : 'column')};
  flex-wrap: wrap;

  &:hover {
    cursor: pointer;
    background: #fbfbfb;
  }

  @media (min-width: ${theme.viewport.tablet}) {
    flex-wrap: nowrap;
  }
`

export const Item = styled.div`
// TODO: Make Item styled component reuseable 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &.title{
    color: ${theme.color.dark};
    font-size: 1.125rem;
    width: 80%;

    @media (min-width: ${theme.viewport.tablet}) {
      width: 20%;
    }

  }
  &.description{
    font-size: ${theme.fontSize.normal};
    color: ${theme.color.light};
    width: 80%;

    @media (min-width: ${theme.viewport.tablet}) {
      width: 20%;
    }

  }

  &.createdBy{
    font-size: ${theme.fontSize.small};
    color: #7d7878;
    display: none;

    @media (min-width: ${theme.viewport.tablet}) {
      display: block;
    }

  }
  
  &.date{
    font-size: ${theme.fontSize.small};
    color: #cacdd0;
    width: 60%;

    @media (min-width: ${theme.viewport.tablet}) {
      width: 20%;
    }

  }

  &.assignees{
    font-size: ${theme.fontSize.small};
    color: ${theme.color.light};
    width: 60%;

    @media (min-width: ${theme.viewport.tablet}) {
      width: 10%;
    }

  }
`