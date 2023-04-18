import styled from "styled-components"
export const HeaderStyle = styled.header` 
width: 100%;
.dark-header {
  background-color: var(--darkHeader);
  border-bottom: solid 1.5px var(--light);
}

.light-header {
  background-color: var(--lightHeader);
  border-bottom: solid 1.5px var(--darkHeader);
}

ul {
  max-width: 1500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 10px;
  font-size: 2rem;
}

li {
  display: flex;
  gap: 15px;
}

#light-mode {
  font-size: 2rem;
  cursor: pointer;
  padding: 2px;
  height: 25px;
  width: 50px;
  border-radius: 5px;

}

#dark-mode {
  font-size: 2rem;
  cursor: pointer;
  padding: 2px;
  height: 25px;
  width: 50px;
  border-radius: 5px;
}

.dark-color {
  border: solid 0.5px var(--light);
}

.light-color {
  border: solid 0.5px var(--darkHeader);
}
`