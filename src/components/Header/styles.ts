import { css } from "@emotion/react";
import styled from "styled-components";

export const headerStyles = css`
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  display: inline-block;
  position: relative;

  &::before {
    content: "Baianinha ";
    top: 0;
    left: 0;
    z-index: -1;
    text-shadow: 0 0 5px #ff1ad9, 0 0 10px rgb(255, 26, 217);
  }

  &::after {
    content: "Beach";
    top: 0;
    left: 0;
    z-index: -1;
    text-shadow: 0 0 5px rgb(0, 114, 178), 0 0 10px rgb(0, 114, 178);
  }
`;

export const container = css`
  background: #fcedea;
  transition: all 0.3s;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2.25rem;
`;

export const logo = css`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
`;

export const navDesktop = css`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

export const navLink = css`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  text-shadow: 0 0 1rem #ff1ad9, 0 0 1rem #0072b2;

  &:hover {
    color: #1f2523;
  }
`;

export const menuButton = css`
  display: block;
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const mobileMenu = (isOpen: boolean) => css`
  display: ${isOpen ? "block" : "none"};
  top: 100%;
  left: 0;
  width: 100%;
  background: #fcedea;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const mobileNavLink = css`
  display: block;
  padding: 0.75rem;
  color: white;
  text-decoration: none;
  transition: background 0.3s ease;
  text-shadow: 0 0 1rem #ff1ad9, 0 0 1rem #0072b2;

  &:hover {
    background: #1f2523;
  }
`;

export const cartContainer = css`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer; 
  margin-left: 20px; 
`;

export const cartCount = css`
  position: absolute;
    top: -10px;
    right: -15px;
    background-color: #ff1ad9;
    color: white;
    border-radius: 50%;
    padding: 5px;
    font-size: 12px;
`;

export const cartLink = css`
  display: flex;
  align-items: center;
  position: relative;
  color: #0072b2;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff1ad9;
  }
`;