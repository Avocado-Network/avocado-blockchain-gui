const Big = require('big.js');
const units = require('./units');

// TODO: use bigint instead of float
const convert = (amount, from, to) => {
  if (Number.isNaN(Number.parseFloat(amount)) || !Number.isFinite(amount)) {
    return 0;
  }

  const amountInFromUnit = Big(amount).times(units.getUnit(from));

  return Number.parseFloat(amountInFromUnit.div(units.getUnit(to)));
};

class Avocado {
  constructor(value, unit) {
    this._value = value;
    this._unit = unit;
  }

  to(newUnit) {
    this._value = convert(this._value, this._unit, newUnit);
    this._unit = newUnit;

    return this;
  }

  value() {
    return this._value;
  }

  format() {
    const displayUnit = units.getDisplay(this._unit);

    const { format, fractionDigits, trailing } = displayUnit;

    let options = { maximumFractionDigits: fractionDigits };

    if (trailing) {
      options = { minimumFractionDigits: fractionDigits };
    }

    let value;

    if (fractionDigits !== undefined) {
      const fractionPower = Big(10).pow(fractionDigits);
      value = Number.parseFloat(
        Big(Math.floor(Big(this._value).times(fractionPower))).div(
          fractionPower,
        ),
      );
    } else {
      value = this._value;
    }

    let formatted = format.replace(
      '{amount}',
      Number.parseFloat(value).toLocaleString(undefined, options),
    );

    if (displayUnit.pluralize && this._value !== 1) {
      formatted += 's';
    }

    return formatted;
  }

  toString() {
    const displayUnit = units.getDisplay(this._unit);
    const { fractionDigits } = displayUnit;
    const options = { maximumFractionDigits: fractionDigits };
    return Number.parseFloat(this._value).toLocaleString(undefined, options);
  }
}

export const avocado_formatter = (value, unit) => new Avocado(value, unit);

avocado_formatter.convert = convert;
avocado_formatter.setDisplay = units.setDisplay;
avocado_formatter.setUnit = units.setUnit;
avocado_formatter.getUnit = units.getUnit;
avocado_formatter.setFiat = (currency, rate, display = null) => {
  units.setUnit(currency, 1 / rate, display);
};

export const slice_to_avocado = (slice) => {
  return avocado_formatter(Number.parseInt(slice), 'slice').to('avocado').value();
};

export const avocado_to_slice = (avocado) => {
  return avocado_formatter(Number.parseFloat(Number(avocado)), 'avocado')
    .to('slice')
    .value();
};

export const slice_to_avocado_string = (slice) => {
  return avocado_formatter(Number(slice), 'slice').to('avocado').toString();
};

export const slice_to_colouredcoin = (slice) => {
  return avocado_formatter(Number.parseInt(slice), 'slice')
    .to('colouredcoin')
    .value();
};

export const colouredcoin_to_slice = (colouredcoin) => {
  return avocado_formatter(Number.parseFloat(Number(colouredcoin)), 'colouredcoin')
    .to('slice')
    .value();
};

export const slice_to_colouredcoin_string = (slice) => {
  return avocado_formatter(Number(slice), 'slice').to('colouredcoin').toString();
};
