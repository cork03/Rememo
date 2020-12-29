import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CardModal from "../../containers/CardModal";
import { colors } from "../../styles/Variables";

const TopIcon = styled.i`
  font-size: 30px;
  background: ${colors.skyBlue};
  border-radius: 50%;
  height: 32px;
  width: 32px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  overflow: hidden;
`;
const Icon = styled.i`
  margin-right: 3px;
`;

const DropDownMenu = styled.div`
  position: absolute;
  margin-top: 40px;
  right: 25px;
  width: 200px;
  border-radius: 2px;
  padding: 8px 0px;
  background: white;
  box-shadow: 1px 1px 4px 1px #33333326;
  text-align: left;
`;
const MenuLists = styled.ul`
  margin: 10px;
`;
const BlueMenuList = styled.li`
  cursor: pointer;
  margin-bottom: 5px;
  :hover {
    color: ${colors.skyBlue};
  }
`;
const OrangeMenuList = styled.li`
  cursor: pointer;
  margin-bottom: 5px;
  :hover {
    color: ${colors.baseOrange};
  }
`;

export const DropDown = ({ returnUser, isMain }: any) => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const onHide = useCallback(() => {
    setTimeout(() => setShow(false));
    const root: any = document.querySelector("#root");
    root.removeEventListener("click", onHide);
  }, []);
  const showMenu = useCallback(() => {
    setShow(true);
    const root: any = document.querySelector("#root");
    root.addEventListener("click", onHide);
  }, [onHide]);
  const logOut = useCallback(async () => {
    localStorage.removeItem("token");
    returnUser();
  }, [history]);
  const toMain = useCallback(() => {
    history.push("/main");
  }, [history]);
  const toMyPage = useCallback(() => {
    history.push("/main/myPage");
  }, [history]);

  return (
    <>
      <TopIcon className="fas fa-user" onClick={showMenu} />
      {show && (
        <DropDownMenu>
          <MenuLists>
            {isMain ? (
              <BlueMenuList onClick={toMyPage}>
                <Icon className="fas fa-user" />
                マイページ
              </BlueMenuList>
            ) : (
              <BlueMenuList onClick={toMain}>
                <Icon className="fas fa-home" />
                メインページ
              </BlueMenuList>
            )}

            <OrangeMenuList onClick={logOut}>
              <Icon className="fas fa-sign-out-alt" />
              ログアウト
            </OrangeMenuList>
          </MenuLists>
        </DropDownMenu>
      )}
    </>
  );
};
