import css from './SectionBusiness.module.css';
import PageTitleBusiness from 'components/PageTitleBusiness/PageTitleBusiness';
import ListBusiness from 'components/ListBusiness/ListBusiness';
import cardsBusiness from 'business.json';

export default function SectionBusiness() {
     return (
    <section className={css.help}>
      <div className={css.container}>
        <PageTitleBusiness title="How can we help your Business ?" />
        <ListBusiness cards={cardsBusiness} />
      </div>
    </section>
  );
}
