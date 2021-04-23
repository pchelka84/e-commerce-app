import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 970px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 450px) {
    width: 100%;
    flex-direction: column;
  }
`;