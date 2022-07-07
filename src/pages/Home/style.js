import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-block-start: 100px;
`;

export const Header = styled.div`
  display: flex;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 400px;
  width: 100%;
`;


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 35px;
width: 650px;
height: calc(100vh - 270px);
margin-block-start: 30px;
overflow-y: scroll;
overflow: visible;`