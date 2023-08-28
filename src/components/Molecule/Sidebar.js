
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "../atoms/SidebarItem";
import MyInfo from "./MyInfo";


const Side = styled.div`
  margin-top:5%;
  display: flex;
  //border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 23%;
`
const Profile = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
`
const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
  
`

function Sidebar() {
    const menus = [
        { name: "내정보", path:"info" },
        { name: "배송지 관리",path:"shipping" },
        { name: "내 리뷰 관리",path:"reviews"},
        { name: "장바구니", path:"cart"}


    ];
    return (
        <Side>
            <Profile></Profile>
            <Menu>
                {menus.map((menu, index) => {
                    return (
                        <div>
                            <NavLink
                                exact
                                style={{color: "gray", textDecoration: "none"}}
                                to={menu.path}
                                key={index}
                                activeStyle={{color: "black"}}
                            >
                                <SidebarItem
                                    menu={menu}
                                />
                            </NavLink>


                        </div>

                    );
                })}
            </Menu>
        </Side>
    );
}

export default Sidebar;