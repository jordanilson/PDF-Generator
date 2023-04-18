import styled from "styled-components";
export const SectionStyle = styled.section`
max-width: 1500px;
margin: 0 auto;
min-height: 100vh;
justify-content: center;
display: flex;
flex-direction: column;
padding: 0 1%;
h2 {
  text-align: center;
  font-size: 2.5rem;
  font-family: sans-serif;
}

div {
  width: 100%;
  background-color: var(--white);
}

.div-input-btn {
  display: flex;
  width: 100%;
}

.div-input-btn input {
  width: 100%;
  padding: 20px;
  background-color: transparent;
  outline: 0;
  border: 0;
  color: black;
}

.div-input-btn button {
  background-color: #336CD9;
  border: 0;
  padding: 20px;
  color: var(--white);
  font-family: sans-serif;
  cursor: pointer;
  transition: 0.25s ease-in-out ;
}

.div-input-btn button:hover {
  background-color: #255BC3;
}

@media(max-width:450px){
  padding:20px;
  h2{
    font-size: 2rem;
  }

  .div-input-btn input {
    padding:15px;
  }

  .div-input-btn button {
    padding:15px;
  }

}
`