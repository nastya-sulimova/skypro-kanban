import { Link } from "react-router-dom";
import { PopExit, PopExitContainer, PopExitBlock, PopExitTitle, PopExitForm, ExitButtonYes, ExitButtonNo } from "./PopUser.styled";

function PopUser() {
    return (
        <PopExit id="popExit">
          <PopExitContainer>
            <PopExitBlock>
              <PopExitTitle>
                <h2>Выйти из аккаунта?</h2>
              </PopExitTitle>
              <PopExitForm id="formExit" action="#">
                <div>
                  <ExitButtonYes id="exitYes">
                    <Link to="/login">Да, выйти</Link>{" "}
                  </ExitButtonYes>
                  <ExitButtonNo id="exitNo">
                    <Link to="/">Нет, остаться</Link>{" "}
                  </ExitButtonNo>
                </div>
              </PopExitForm>
            </PopExitBlock>
          </PopExitContainer>
        </PopExit>
    )
}

export default PopUser