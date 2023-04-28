import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableRow,
  TableData,
} from './TransactionHistory.styled';
function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableRow>
      </TableHead>
      {items.map(({ id, type, amount, currency }) => (
        <tbody key={id}>
          <TableRow>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableRow>
        </tbody>
      ))}
    </Table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
