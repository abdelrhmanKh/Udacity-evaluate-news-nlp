import { handleSubmit } from '../src/client/js/formHandler'

describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() to be Defiend", () => {
        expect(handleSubmit).toBeDefined();
    })

    test("Testing the handleSubmit() to be function", () => {
        expect(typeof handleSubmit).toBe("function");
    })

})

