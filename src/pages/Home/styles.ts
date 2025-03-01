import styled from "styled-components";

export const SectionWrapper = styled.section`
  height: 100vh;
`;

export const Banner = styled.section`
  width: 100%;
  height: 100%;
  background-image: url('/praia.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  display: inline-block;
  position: relative;

  &::before {
    content: "Baianinha ";
    top: 0;
    left: 0;
    z-index: -1;
    text-shadow: 0 0 5px rgb(255, 26, 217), 0 0 10px rgb(255, 26, 217);
  }

  &::after {
    content: "Beach";
    top: 0;
    left: 0;
    z-index: -1;
    text-shadow: 0 0 5px rgb(0, 114, 178), 0 0 10px rgb(0, 114, 178);
  }
`;

export const Subtitle = styled.p`
  color: white;
  margin-top: 0.5rem;
`;

export const Button = styled.a`
  margin-top: 1rem;
  display: inline-block;
  background-color: white;
  color: black;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, box-shadow 0.2s;

  box-shadow: 0 0 5px rgb(255, 26, 217), 0 0 10px rgb(255, 26, 217);

  &:hover {
    background-color: #e5e5e5;

    box-shadow: 0 0 5px rgb(0, 114, 178), 0 0 10px rgb(0, 114, 178);
  }
`;

