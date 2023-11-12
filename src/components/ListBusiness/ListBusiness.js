import PropTypes from 'prop-types';
import css from './ListBusiness.module.css';
import CardBusiness from 'components/CardBusiness/CardBusiness';
export default function ListBusiness({ cards }) {
  return (
    <ul className={css.help__list}>
      {cards.map(({ name, idea, color, type }) => (
        <CardBusiness
          key={name}
          name={name}
          idea={idea}
          color={color}
          type={type}
        ></CardBusiness>
      ))}
    </ul>
  );
}
ListBusiness.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      idea: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};
