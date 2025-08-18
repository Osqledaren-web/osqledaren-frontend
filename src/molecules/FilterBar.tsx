import React, { FunctionComponent, useState } from "react";
import logo from "../images/logo-small.png"; //Osqledaren_logga_svart.png
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import issuu from "../images/issuu.png";
import FilterButton from "../atoms/FilterButton";
import styled from "../styles/styled";
import { useStaticQuery, graphql } from "gatsby";
import { Category } from "../utils/types";
import theme from "../styles/theme";

const Filterbar: FunctionComponent = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <BarDesktop>
      <a href="https://osqledaren.se/">
        <HeaderImage src={logo} />
      </a>

      <FilterButton
        to="/samhalle"
        name="Samhälle"
        background={theme.colors.branch}
      ></FilterButton>
      <FilterButton
        to="/kultur"
        name="Kultur"
        background={theme.colors.english}
      ></FilterButton>
      <FilterButton
        to="/ol-graever"
        name="OL Gräver"
        background={theme.colors.olGraver}
      ></FilterButton>
      <FilterButton
        to="/underhallning"
        name="Underhållning"
        background={theme.colors.underhallning}
      ></FilterButton>
      <FilterButton
        to="/pa-campus"
        name="På Campus"
        background={theme.colors.aktuellt}
      ></FilterButton>

      <Hamburger
        tabIndex={0}
        className={isActive ? "open" : ""}
        onBlur={e => {
          if (
            (e.nativeEvent.target as any).contains(e.nativeEvent.relatedTarget)
          ) {
            return;
          }
          setIsActive(false);
        }}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <HamburgerMenu>
          <a
            className={"smol"}
            style={{ borderColor: theme.colors.branch }}
            tabIndex={0}
            href="/samhalle"
          >
            Samhälle
          </a>
          <a
            className={"smol"}
            style={{ borderColor: theme.colors.english }}
            tabIndex={0}
            href="/kultur"
          >
            Kultur
          </a>
          <a
            className={"smol"}
            style={{ borderColor: theme.colors.olGraver }}
            tabIndex={0}
            href="/ol-graever"
          >
            OL Gräver
          </a>
          <a
            className={"smol"}
            style={{ borderColor: theme.colors.underhallning }}
            tabIndex={0}
            href="/underhallning"
          >
            Underhållning
          </a>
          <a
            className={"smol"}
            style={{ borderColor: theme.colors.aktuellt }}
            tabIndex={0}
            href="/pa-campus"
          >
            På Campus
          </a>
          <a tabIndex={0} href="https://www.instagram.com/osqledaren/">
            <img src={instagram}></img> <div>Instagram</div>
          </a>
          <a tabIndex={0} href="https://www.facebook.com/osqledaren">
            <img src={facebook}></img> Facebook
          </a>
          <a tabIndex={0} href="https://issuu.com/osqledaren">
            <img src={issuu}></img> Issuu
          </a>
          <a tabIndex={0} href="/podcasts">
            Podcasts
          </a>
          <a tabIndex={0} href="/tips">
            Insändare
          </a>
          <a tabIndex={0} href="/partner">
            Annonsera
          </a>
          <a tabIndex={0} href="/about">
            Om oss
          </a>
          <a tabIndex={0} href="/archive">
            Arkiv
          </a>
          <a tabIndex={0} href="/applyOL">
            Gå med i OL
          </a>
        </HamburgerMenu>
      </Hamburger>
    </BarDesktop>
  );
};
const HeaderImage = styled.img`
  width: 40px; //35

  @media (max-width: ${({ theme }) => theme.breakpoints.md + "px"}) {
    width: 7vh;
  }
`;

const BarDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 10px;
  padding-left: 10vw;
  padding-right: 10vw;
  box-sizing: border-box;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #f4f4f4;
  box-shadow: -6px 0 white, 6px 0 white, 0 0px 20px grey;

  > a {
    margin-right: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md + "px"}) {
    height: 10vh;
    justify-content: space-between;
    padding-left: 4vw;
    padding-right: 2vw;
  }
`;

const Hamburger = styled.div`
    width: 30px;
    height: 30px;
    display: block;
    border: none;
    position: relative;
    margin: 20px;
    flex-shrink: 0;
    cursor: pointer;
    background: linear-gradient(
      to bottom, 
      black, black 15%, 
      white 15%, white 40%, 
      black 40%, black 55%, 
      white 55%, white 80%, 
      black 80%, black 95%,
      white 95%, white 100%
    );

    &:not(.open) div  {
      display: none;
 
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md + "px"}) {
      height:3vh;
      width: 3vh;
    }
}
`;

const HamburgerMenu = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: right;
  justify-content: right;
  position: absolute;
  top: 40px;
  right: 0px;
  background-color: #f4f4f4;
  color: black;

  cursor: pointer;
  
  font-family: Avenir, Arial, Helvetica, sans-serif;
  letter-spacing: 1px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px 0px 0px 5px;
  font-size: 17px;
  line-height: 50px;
  width: 200px;
  
  text-align: right;
  box-sizing: border-box;

  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
  @media (max-width: ${({ theme }) => theme.breakpoints.lg + "px"}) {
    font-size: 14px;
    line-height: 40px;
  }
  

  > a {
    text-decoration: none;
    &:link, &:visited {
      color: black;
    }
    &:hover{
      border-right: 8px solid lightgrey;
   
    }
    border-bottom: 1px solid lightgrey;
    :last-child { border-bottom: none; }
    border-left: 15px solid transparent;
    border-right: 8px solid transparent;
    width: 100%;
    box-sizing: border-box;
    padding-right: 10px;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
      > img {
        height: 30px;
        margin-right: 15px;
        filter: invert(1);
        @media (max-width: ${({ theme }) => theme.breakpoints.lg + "px"}) {
          height: 20px;
          margin-right: 10px;
        }
      }
  }

  > a.smol {
    display: none;
    border-right: none;
  }

  @media only screen and (max-width:  ${({ theme }) =>
    theme.breakpoints.md + "px"}) {
    > a.smol {
      display: flex;
      border-bottom: none;
    }
    > a {
      font-size: 3vh;
      justify-content: center;
      flex:1;
      > img {
        height: 4vh;
        margin-right: 2vh;
      }
    }
    position: fixed;
    align-items: center;
    height: 90vh;
    width: 100%;
    top: 10vh;
    right: 0vw;
    padding: 0px;
    text-align:center;
  }


}
`;

export default Filterbar;
