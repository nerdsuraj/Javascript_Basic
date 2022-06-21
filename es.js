// 3.1 async/await

  async function init() {
    console.log('start')
    await this.testSync()
    console.log('End')
  }
  this.init()
  async function testSync() {
    const response = await new Promise(resolve => {
      setTimeout(() => {
          resolve("async await test...");
        }, 1000);
    });
    console.log(response);
  }


//   Object.keys()

  var obj = { foo: "bar", baz: 42 };
  Object.keys(obj)
  // ["foo", "baz"]


//  Object.values()

var obj = { foo: "bar", baz: 42 };
Object.values(obj)
// ["bar", 42]

// Object.entries()
// The Object.entries method returns an array of key value pairs of all enumerable properties of the parameter object itself (excluding inheritance).

var obj = { foo: 'bar', baz: 42 };
Object.entries(obj)
// [ ["foo", "bar"], ["baz", 42] ]


const obj1 = {a: 1, b: 2, c: 3}
for(let [key,value] of Object.entries(obj1)){
    console.log(`key: ${key} value:${value}`)
}
//key:a value:1
//key:b value:2
//key:c value:3

var obj = { foo: 'bar', baz: 42 };
var map = new Map(Object.entries(obj));
map // Map { foo: "bar", baz: 42 }


// Object.getOwnPropertyDescriptors()
// The Object.getOwnPropertyDescriptor method returns an object (descriptor). ES6 introduces the Object.getOwnPropertyDescriptors method, which returns the description object of all its own properties (non inherited properties) of the specified object.

const obj = {
  foo: 123,
  get bar() { return 'abc' }
};
 
Object.getOwnPropertyDescriptors(obj)
// { foo:
//    { value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   bar:
//    { get: [Function: bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true } }
// In the above code, the Object.getOwnProperDescriptors method returns an object. The property names of all the original objects are the property names of the object, and the corresponding property values are the property description objects.
// The main purpose of this method is to solve the problem that Object.assign() can't copy get and set attributes correctly.

const source = {
  set foo(value) {
    console.log(value);
  }
};
 
const target1 = {};
Object.assign(target1, source);
 
Object.getOwnPropertyDescriptor(target1, 'foo')
// { value: undefined,
//   writable: true,
//   enumerable: true,
//   configurable: true }