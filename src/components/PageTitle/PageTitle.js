import PropTypes from 'prop-types';
import css from './PageTitle.module.css';
export default function PageTitle({ title }) {
    return <h2 className={css.title}>{ title}</h2>
};
PageTitle.propTypes = {
    title:PropTypes.string.isRequired,
}
