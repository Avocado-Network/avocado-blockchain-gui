const avocado = require('../../util/avocado');

describe('avocado', () => {
  it('converts number slice to avocado', () => {
    const result = avocado.slice_to_avocado(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string slice to avocado', () => {
    const result = avocado.slice_to_avocado('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number slice to avocado string', () => {
    const result = avocado.slice_to_avocado_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string slice to avocado string', () => {
    const result = avocado.slice_to_avocado_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number avocado to slice', () => {
    const result = avocado.avocado_to_slice(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string avocado to slice', () => {
    const result = avocado.avocado_to_slice('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number slice to colouredcoin', () => {
    const result = avocado.slice_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string slice to colouredcoin', () => {
    const result = avocado.slice_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number slice to colouredcoin string', () => {
    const result = avocado.slice_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string slice to colouredcoin string', () => {
    const result = avocado.slice_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to slice', () => {
    const result = avocado.colouredcoin_to_slice(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to slice', () => {
    const result = avocado.colouredcoin_to_slice('1000');

    expect(result).toBe(1000000);
  });
});
