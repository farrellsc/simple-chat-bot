const rewire = require("rewire")
const index = rewire("./index")
const sendQueryToBotEngine = index.__get__("sendQueryToBotEngine")
// @ponicode
describe("sendQueryToBotEngine", () => {
    test("0", () => {
        let callFunction = () => {
            sendQueryToBotEngine("DELETE FROM Projects WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            sendQueryToBotEngine("UPDATE Projects SET pname = %s WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            sendQueryToBotEngine("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            sendQueryToBotEngine("DROP TABLE tmp;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            sendQueryToBotEngine("UNLOCK TABLES;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            sendQueryToBotEngine(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
