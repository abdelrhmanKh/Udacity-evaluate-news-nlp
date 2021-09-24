import { checkForText } from '../src/client/js/TextChecker'


describe('Test, the function "checkForText()" should exist', () => {
    test('It should return true', () => {
        expect(checkForText).toBeDefined();
    });
});
describe('Test, the function "checkForText()" should be a function', () => {
    test('It should be a function', () => {
        expect(typeof checkForText).toBe("function");
    });
});