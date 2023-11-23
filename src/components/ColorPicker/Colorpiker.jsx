import { Component } from 'react';
import clsx from 'clsx';
import css from './ColorPicker.module.css';
class ColorPicker extends Component {
state = {
    activeOptionIdx: 3,
  };
  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };
  render() {
    const { options } = this.props;
    const { label } = options[this.state.activeOptionIdx];
    return (
      <div className={css.container}>
        <h2 className={css.title}>Color Picker</h2>
        <p className={css.text}>Выбран цвет: {label} </p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={clsx(
                  css.option,
                  index === this.state.activeOptionIdx && css.option__active
                )}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
