import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    width: 50%;
    padding: 0 10px 0 20px;

    h2 {
      font-size: 1rem;
    }
  }


  @media screen and (max-width: 450px) { 
    width: 100%;
    padding: 0 10px 10px 10px;  
    margin-bottom: 30px;

    h2 {
      font-size: .9rem;
    }
  }
`;

export const SignInTitle = styled.span`
  margin: 10px 0;

  @media screen and (max-width: 900px) {
    font-size: .9rem;
  }

  @media screen and (max-width: 450px) {
    font-size: .7rem;
  }
`;

export const SignInButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;