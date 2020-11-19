import styled from 'styled-components'

export const SearchView = styled.div`
  position: relative;
  &:before {
    height: 32px;
    position: absolute;
    width: 32px;
    background-size: 32px 32px;
    top: 21px;
    content: ' ';
    right: 31px;
    background-image: url(${props => props.icon});
  }
`

export const Search = styled.input`
  background-color: rgb(35,44,65);
  border-radius: 14px;
  float: right;
  border: 0;
  color: #fff;
  height: 20px;
  padding: 7px;
  width: 170px;
  margin: 20px;
  &:focus {
    outline: 0;
  }
`