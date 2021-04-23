import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 430px;

  @media screen and (max-width: 450px) { 
    width: 100%;
    padding: 0 10px 10px 10px;  
    margin-bottom: 30px;

    h2 {
      font-size: .9rem;
    }
  }
`;
 
export const Title = styled.div`
  margin: 10px 0;

  @media screen and (max-width: 900px) {
    font-size: .9rem;
  }

  @media screen and (max-width: 450px) {
    font-size: .7rem;
  }
`;