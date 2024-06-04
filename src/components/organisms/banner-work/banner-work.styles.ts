import styled from 'styled-components';

export const StyledWrapperImg = styled.div`
  position: relative;
  margin: 0 auto;
  height: 436px;
  width: 100%;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    max-height: 436px;
    object-fit: cover;
    height: 100%;
  }
`;
