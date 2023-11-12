import PropTypes from 'prop-types';
import { FaBusinessTime } from 'react-icons/fa';
import css from './CardBusiness.module.css';
export default function CardBusiness({ name, idea, color, type }) {
  return (
    <li className={css.help__item}>
      <div className={`${css.helpimg__container} ${css[type]}`}>
        <FaBusinessTime className={css.helpimg} color={color} />
      </div>
      <div>
        <h3 className={css.title}>{name}</h3>
        <p className={css.text}>{idea}</p>
      </div>
    </li>
  );
}
CardBusiness.propTypes = {
  name: PropTypes.string.isRequired,
  idea: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
