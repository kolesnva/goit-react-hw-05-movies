import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Form = styled.form`
  margin-top: ${p => p.theme.space[5]}px;
  display: flex;
`;
export const Input = styled.input`
  outline: none;
  display: inline-block;

  border-radius: ${p => p.theme.radii.sm};
  padding: ${p => p.theme.space[2]}px;
  height: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.space[8]}px;
  background-color: transparent;
  &:hover {
    box-shadow: 5px 5px 15px 5px #737372;
  }
  &:focus {
    box-shadow: 5px 5px 15px 5px #737372;
    color: ${p => p.theme.colors.primary};
    font-size: ${p => p.theme.fontSizes.l};
  }
  &.active {
    box-shadow: 5px 5px 15px 5px #737372;
  }
`;
export const SubmitBtn = styled.button`
  cursor: pointer;
  outline: none;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.sm};
  display: inline-block;
  text-align: center;
  background-color: transparent;
  border: none;
  &:hover,
  :focus {
    transform: scale(1.2, 1.2);
    color: ${p => p.theme.colors.primary};
  }
`;
