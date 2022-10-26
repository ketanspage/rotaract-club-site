import styled from 'styled-components';



export const Box = styled.div`
  padding: 80px 60px;
  background: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const h1=styled.div`
  color: blue;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`;
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 4px;
  
`;
export const Column2 = styled.div`

  margin-left: 10px;
  
`;   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 94px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: blue;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: royalblue;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: blue;
  margin-bottom: 40px;
`;