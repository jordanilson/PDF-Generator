import styled, { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*{
  :root{
    --blueDark:#1C1C25;
    --bluHeaderDark:#252530;
    --blue:#0178FF;
    --white:#FFF;
    --light:#E0E0E0;
    --dark:#000000;
    --darkHeader:#1C1C25;
    --lightHeader:#D8D8D8;
  }

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  text-decoration:none;
  list-style: none;
}
`
export const Main = styled.main`
height:100vh;
width:100%;
.dark{
  min-height: 100vh;
  width:100%;
  background-color:var(--blueDark);
  color:var(--light)
}
.light{
  min-height: 100vh;
  width:100%;
  background-color:var(--light);
  color:var(--dark)
}

`
