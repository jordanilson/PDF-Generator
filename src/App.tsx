import { Pdf } from "../src/pages/Home/Pdf";
import { Header } from "./components/Header/Header";
import GlobalStyle from "./global/GlobalStyle";
import { Main } from "./global/GlobalStyle";

function App() {
  return (
    <Main>
      <div className="container-main">
        <Header />
        <Pdf />
        <GlobalStyle />
      </div>
    </Main>
  );
}

export default App;
