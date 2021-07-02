import styled from 'styled-components'
import { theme } from '../../assets/theme'

export const Wrapper = styled.div`
  border-radius: 50%;
  background-color: #d9dce1;
  width: ${(props: {isBig?: boolean}) => (props.isBig ? '7.5rem' : '2.5rem')};
  height: ${(props: {isBig?: boolean}) => (props.isBig ? '7.5rem' : '2.5rem')};
  color: ${theme.color.light};
  display: flex;
  align-items: center;
  justify-content: center;
`
