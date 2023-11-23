import { Component } from 'react';
import css from './Dropdown.module.css';

class Dropdown extends Component {
  state = { visiable: false };
  // show = () => this.setState({ visiable: true });
  // hide = () => this.setState({ visiable: false });
  toggle = () => {
    this.setState(prevState => ({ visiable: !prevState.visiable }));
  };
  render() {
    return (
      <div className={css.dropdown}>
          <h2>(Dropdown)</h2>
        <button
          type="button"
          className={css.dropdown__toggle}
          // onClick={this.show}
          onClick={this.toggle}
        >
          {/* Показать */}
          {this.state.visiable?"Скрыть":"Показать"}
        </button>
      
        {/* <button
          type="button"
          className={css.dropdown__toggle}
          onClick={this.hide}
        >
          Скрыть
        </button> */}
        {this.state.visiable && (
          <div className={css.dropdown__menu}>Выпадающее меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
