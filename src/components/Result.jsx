import { formatter } from "../util/investment";

function Result({
  year,
  investmentValue,
  interest,
  totalInterest,
  investedCapital,
}) {
  return (
    <tr>
      <td>{year}</td>
      <td>{formatter.format(investmentValue)}</td>
      <td>{formatter.format(interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(investedCapital)}</td>
    </tr>
  );
}

export default Result;
