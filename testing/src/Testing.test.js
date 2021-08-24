import Testing from './Testing';
import CallbackModulus from './Testing'

//1
test('testing add function', () => {
    function add(a, b) {
        return a + b
    }
    expect(add(4, 5)).toBe(9)
})

//2
test('testing promise multiplication', () => {
    function Promise1(a, b) {
        return new Promise((resolve, reject) => {
            resolve(a * b);
        })
    }
    return Promise1(3, 4).then(
        value => expect(value).toBe(12)
    )
})

//3
test('testing callback function', (done) => {
    CallbackModulus(6, 7, (result) => {
        expect(result).toBe(1);
    })
    done();
})

//4
test('promise rejected', () => {
    function PromiseReject() {
        return new Promise((resolve, reject) => {
            reject(100);
        })
    }
    return PromiseReject().then().catch(
        error => expect(error).toBe(100)
    )
})

//5
const y = new Promise((resolve, reject) => {
    resolve({ name: "Vignesh", score: 20 })
})
function z() {
    return new Promise((resolve, reject) => {
        resolve([1, 2, 3, 4, 5, { name: "Arun", mark: 80 }])
    })
}
test('async and await', async () => {
    const aw1 = await y;
    expect(aw1).toEqual({ name: "Vignesh", score: 20 })
    const aw2 = await z();
    expect(aw2).toEqual([1, 2, 3, 4, 5, { name: "Arun", mark: 80 }])
    const promise = Promise.resolve({ array: [1, 2, 3, 5], name: "Rajesh", rank: 3 })
    const aw3 = await promise;
    expect(aw3).toEqual({ array: [1, 2, 3, 5], name: "Rajesh", rank: 3 })
})

//6
test('promise and setTimeout', () => {
    function timeoutPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(100)
            }, 1000);
        })
    }
    return timeoutPromise().then(
        value => expect(value).toBe(100)
    )
})

//7
//this test not taken as test
setTimeout(() => {
    function convert(c) {
        return c * (9 / 5) + 32;
    }
    test('function inside setTimeout', () => {
        expect(convert(30)).toBe(86)
    })
}, 2000)

//8
//executed in 1ms and hence test passed before setTimeout executed
function convert(c) {
    return c * (9 / 5) + 32;
}
test('function inside setTimeout', () => {
    expect.hasAssertions();
    expect.assertions(1);
    setTimeout(() => {
        expect(convert(30)).toBe(90) //false positive
    }, 2000);
})

//9 test inside setTimeout cannot be tested and error with setTimeout inside promise
/*setTimeout(() => {
    test('setTimeout', () => {
        expect(false).toBe(false)
    })
}, 1000);*/
