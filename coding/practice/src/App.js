import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import _ from "lodash";
import ReactDOM from "react-dom";

import { LazyImage } from "./LazyImage";

const Global = createGlobalStyle`
  body {
    background-color:black;
    color: white;
    font-family: sans-serif;
  }
  h1 {
    text-align: center;
  }
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(5,100px);
  row-gap: 1rem;
  column-gap: 1rem;
  padding: 1rem;
  justify-items: center;
  justify-content: center;
 
`;
function App() {
  return (
    <main>
      <Global />
      <h1>Assignment</h1>
      <Grid>
        {_.range(1000).map(index => (
          <LazyImage
            key={index}
            src={`https://picsum.photos/100/100/?image=${index}`}
           
          />
        ))}
      </Grid>
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
