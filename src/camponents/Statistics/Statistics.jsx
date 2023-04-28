import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StaticticsItem,
} from './Statistics.styled';
function generateRandomColor() {
  const hexValues = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }

  return color;
}
function Statistics({ stats }) {
  return (
    <StatisticsSection>
      <StatisticsTitle>Upload stats</StatisticsTitle>
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StaticticsItem
            key={id}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span>{label}</span>
            <span>{percentage}%</span>
          </StaticticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
}
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default Statistics;
