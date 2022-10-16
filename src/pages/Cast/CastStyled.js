import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${p => p.theme.space[1]}px;
`;
export const CastItem = styled.li`
  text-align: center;
  color: ${p => p.theme.colors.white};
`;
