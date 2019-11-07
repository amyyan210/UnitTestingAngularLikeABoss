import { StrengthPipe } from './strength.pipe';

describe('strength pipe', () => {

    let pipe: StrengthPipe;

    beforeEach(() => {
        pipe = new StrengthPipe();
    });

    it('should display weak if less than 10', () => {
        const result = pipe.transform(4);
        expect(result).toEqual('4 (weak)');
    });

    it('should display weak if 9', () => {
        const result = pipe.transform(9);
        expect(result).toEqual('9 (weak)');
    });

    it('should display weak if 0', () => {
        const result = pipe.transform(0);
        expect(result).toEqual('0 (weak)');
    });

    it('should display strong if between 10 (inclusive) and 20', () => {
        const result = pipe.transform(15);
        expect(result).toEqual('15 (strong)');
    });

    it('should display strong if 10', () => {
        const result = pipe.transform(10);
        expect(result).toEqual('10 (strong)');
    });

    it('should display unbelievable if 20 or greater', () => {
        const result = pipe.transform(100);
        expect(result).toEqual('100 (unbelievable)');
    });

    it('should display weak if negative', () => {
        const result = pipe.transform(-4);
        expect(result).toEqual('-4 (weak)');
    });

    it('should throw error if null', () => {
        expect(() => {
            pipe.transform(null);
        }).toThrowError();
    });

    it('should throw error if NaN', () => {
        const emptyString: number = parseInt('a', 10);
        expect(() => {
            pipe.transform(emptyString);
        }).toThrowError();
    });

    it('should throw error if undefined', () => {
        expect(() => {
            pipe.transform(undefined);
        }).toThrowError();
    });

});
