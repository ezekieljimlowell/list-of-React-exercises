import { render, screen } from '@testing-library/react';

const number = (callback) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback("peanut butter")
      resolve(100)
    }, 3000);
  })
}

test('the data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }

  number(callback);
});

test("with done callback", done => {
  function callback(data) {
    expect(data).toBe("peanut butter");
    done();
  }
  number(callback);
})

test('the data is peanut butter', done => {
  function number() {
    return "peanut butter";
  }
  number(callback);
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }
});

function promise1() {
  return Promise.resolve("hello");
}

test("test promise", () => {
  return promise1().then(
    data => expect(data).toBe("hello world")
  )
})

const reject1 = () => Promise.reject("error")

test("reject promise", () => {
  return reject1().catch(
    error => expect(error).toBe("error")
  )
})

test("resolves", () => {
  return expect(promise1()).resolves.toBe("hello")
})

test("rejects", () => {
  return expect(reject1()).rejects.toBe("error")
})

const normal = () => {
  return Promise.resolve(100);
}

test("async and await", async () => {
  const number1 = await normal();
  expect(number1).toBe(100);
})

const timeout = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(200)
    }, 4500);
  })
}

test.only("with timeout", async () => {
  const number2 = await timeout();
  expect(number2).toBe(200);
})

const error = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error")
    }, 4500);
  })
}

test("try and catch", async () => {
  try {
    await error()
  }
  catch(e) {
    expect(e).toBe("error")
  }
})

test("rejects with async", async () => {
  await expect(error()).rejects.toBe("error")
})

/*const {diff} = require('jest-diff');

const a = {a: {b: {c: 5}}};
const b = {a: {b: {c: 6}}};

const result = diff(a, b);

// print diff
console.log(result);*/

const {parseWithComments} = require('jest-docblock');

const code = `
/**
 * This is a sample
 *
 * @flow
 */

 console.log('Hello World!');
`;

const parsed = parseWithComments(code);

// prints an object with two attributes: comments and pragmas.
console.log(parsed);

const {getType} = require('jest-get-type');

const array = [1, 2, 3];
const nullValue = null;
const undefinedValue = undefined;

// prints 'array'
console.log(getType(array));
// prints 'null'
console.log(getType(nullValue));
// prints 'undefined'
console.log(getType(undefinedValue));