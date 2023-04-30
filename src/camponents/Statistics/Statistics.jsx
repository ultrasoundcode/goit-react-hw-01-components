import PropTypes from 'prop-types';
import GenerateRandomColors from '../Utils/GenerateRandomColors';
import { Section, Title, List, ListItem } from './Statistics.styled';

function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <ListItem
            key={id}
            style={{ backgroundColor: GenerateRandomColors() }}
          >
            <span>{label}</span>
            <span>{percentage}%</span>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default Statistics;
