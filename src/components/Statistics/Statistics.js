import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import randomColor from 'utils/ColorPicker';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(data => (
          <li
            className={s.item}
            key={data.id}
            style={{
              backgroundColor: randomColor(),
              width: 290 / stats.length,
            }}
          >
            <span className={s.label}>{data.label}</span>
            <span className={s.percentage}>{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
