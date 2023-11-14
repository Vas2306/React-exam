import PropTypes from 'prop-types';
import { FaBusinessTime } from 'react-icons/fa';
// import GetIconBusiness from 'utils_busines/IconBusiness';
import css from './CardBusiness.module.css';
// import GetIconBusiness from 'utils_busines/IconBusiness';
// import { TbBusinessplan } from 'react-icons/tb';
// import { LiaBusinessTimeSolid } from 'react-icons/lia';
// import { MdBusiness } from 'react-icons/md';
// let Get = 'FaBusinessTime';

export default function CardBusiness({ name, idea, color, type }) {
  // Get = GetIconBusiness(type);
  // console.log(Get);
  return (
    <li className={css.help__item}>
      <div className={`${css.helpimg__container} ${css[type]}`}>
        {/* <Get className={css.helpimg} color={color} /> */}
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
