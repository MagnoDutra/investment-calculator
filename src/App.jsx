import Header from "./components/Header";
import Investments from "./components/Investments";
import ResultList from "./components/ResultList";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((input) => {
      return {
        ...input,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <main>
        <Investments onChange={handleChange} userInput={userInput} />
        {userInput.duration > 0 ? (
          <ResultList result={userInput} />
        ) : (
          <p>Duration must be greater then 0</p>
        )}
      </main>
    </>
  );
}

export default App;
