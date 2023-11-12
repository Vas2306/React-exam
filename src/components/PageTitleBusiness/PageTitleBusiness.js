import PropTypes from 'prop-types';
import css from './PageTitleBusiness.module.css';
export default function PageTitleBusiness({title }) {
    return <h2 className={css.help__title}>{ title}</h2>
};
PageTitleBusiness.propTypes = {
    title:PropTypes.string.isRequired,
}