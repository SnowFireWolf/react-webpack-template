import styled from "@emotion/styled";



export const Box = styled.div`
`;

export const Flex = styled.div`
  display: flex;
`;

export const Container = styled.div`
  min-height: 90vh;
  width: auto;
  padding-left: 10%;
  padding-right: 10%;
  margin-right: auto;
  margin-left: auto;
`;

export const Section = styled.section`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const Wrapper = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


// grid
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 1rem;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }

`;

export const  GridItem = styled.div`
`;