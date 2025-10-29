import PopUser from "../components/popups/PopUser/PopUser"
import styled from "styled-components";

 export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const OverlayEditPage = styled.div`
  background-color: transparent;
`

const LogOutPage = () => {
  return (
    <Overlay>
      <PopUser/>
    </Overlay>
  )
}

export default LogOutPage