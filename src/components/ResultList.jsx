import Result from "./Result";
import { calculateInvestmentResults } from "../util/investment";

function ResultList({ result }) {
  const derivedResult = calculateInvestmentResults(result);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {derivedResult.map((res) => {
          const totalInterest =
            res.valueEndOfYear -
            (result.annualInvestment * res.year + result.initialInvestment);
          const investedCapital = res.valueEndOfYear - totalInterest;
          return (
            <Result
              key={res.year}
              year={res.year}
              investmentValue={res.valueEndOfYear}
              interest={res.interest}
              totalInterest={totalInterest}
              investedCapital={investedCapital}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default ResultList;
