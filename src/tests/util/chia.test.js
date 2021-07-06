const chia = require('../../util/chia');

describe('chia', () => {
  it('converts number slice to chia', () => {
    const result = chia.slice_to_chia(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string slice to chia', () => {
    const result = chia.slice_to_chia('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number slice to chia string', () => {
    const result = chia.slice_to_chia_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string slice to chia string', () => {
    const result = chia.slice_to_chia_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number chia to slice', () => {
    const result = chia.chia_to_slice(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string chia to slice', () => {
    const result = chia.chia_to_slice('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number slice to colouredcoin', () => {
    const result = chia.slice_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string slice to colouredcoin', () => {
    const result = chia.slice_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number slice to colouredcoin string', () => {
    const result = chia.slice_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string slice to colouredcoin string', () => {
    const result = chia.slice_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to slice', () => {
    const result = chia.colouredcoin_to_slice(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to slice', () => {
    const result = chia.colouredcoin_to_slice('1000');

    expect(result).toBe(1000000);
  });
});
