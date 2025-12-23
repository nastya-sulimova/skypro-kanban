import styled from "styled-components";

export const SPopBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const HiddenCategories = styled.div`
  display: none;
  margin-bottom: 20px;
`;

export const PopBrowseDeleteConfirm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  box-sizing: border-box;
  border: 0.7px solid rgba(212, 219, 229, 1);
  border-radius: 10px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgba(255, 255, 255, 1);
  padding: 35px 50px;
`;

export const DeleteQuestion = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  font-size: 18px;
`;

export const DeleteOptions = styled.div`
  display: flex;
  gap: 50px;
`;

export const DeleteButtons = styled.button`
  padding: 7px 20px;
`;

export const PopBrowseValidError = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-width: 400px;
`;
