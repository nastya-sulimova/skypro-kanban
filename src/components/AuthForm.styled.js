import styled from "styled-components";

export const LogWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background: rgba(234, 238, 246, 1);
`;

export const LogBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: fit-content;
  box-sizing: border-box;
  border: 0.7px solid rgba(212, 219, 229, 1);
  border-radius: 10px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgba(255, 255, 255, 1);
  padding: 50px 60px;
`;

export const AuthErrorMsg = styled.div`
  color: red;
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
`;

export const LogForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 248px;
`;

export const FormLinks = styled.div`
  text-align: center;
  & p {
    margin: 0;
    color: rgba(148, 166, 190, 0.4);

    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
  }
  & a {
    color: rgba(148, 166, 190, 0.4);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
  }
`;

export const LogInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: -webkit-fill-available;
`;

export const LogTitle = styled.div`
  color: var(--Font / 90, rgba(0, 0, 0, 1));
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: -3%;
  text-align: center;
  margin: 0;
`;

export const LogInput = styled.input`
  box-sizing: border-box;
  border: 0.7px solid
    ${(props) => (props.$error ? "red" : "rgba(148, 166, 190, 0.4)")};
  border-radius: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;

  color: rgba(148, 166, 190, 1);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
`;

export const LogButton = styled.button`
  border-radius: 4px;
  background: rgba(86, 94, 239, 1);
  border: none;
  width: -webkit-fill-available;
  padding-top: 5px;
  padding-bottom: 5px;

  color: rgba(255, 255, 255, 1);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
`;
