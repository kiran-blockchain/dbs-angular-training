import { PhoneFormatter } from './phoneformatter';

describe('PhoneFormatter Pipe', () => {
  let pipe: PhoneFormatter
  beforeEach(() => {
    pipe = new PhoneFormatter();
  })
  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });
  it('instance should have pipeTransform', () => {

    expect(pipe.transform).toBeDefined();
  });
  it('if input is not a number it shoudl return the same', () => {
    const result = pipe.transform("123456789x");
    expect(result).toBe('123456789x');
  });
  it('if input is not a number it shoudl return the same', () => {
    const result = pipe.transform("1234567890");
    expect(result).toBe('+1-123-456-7890');
  });
  it('if the input is a number and length of ten', () => {
    const result = pipe.transform(1234567890);
    expect(result).toBe('+1-123-456-7890');
  });
  it('if the input is a string and length of ten', () => {
    const result = pipe.transform("1234567890",'US');
    expect(result).toBe('+1-123-456-7890');
  });
  it('if the input is a string and length of ten and country is IN', () => {
    const result = pipe.transform("1234567890",'IN');
    expect(result).toBe('+91-12345-67890');
  });
});
