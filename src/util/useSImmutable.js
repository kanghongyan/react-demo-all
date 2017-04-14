import Immutable from 'seamless-immutable'
// https://github.com/rtfeldman/seamless-immutable
// Immutable.js 精简版。只提供array、object

// == immutable array
let array = Immutable(['a','b','c']);

Immutable.flatMap(array, function (str) {
  return [str, str];
});
// returns Immutable(['a','a', 'b', 'b', 'c', 'c'])

Immutable.asObject(array, function (value) {
  return [value, value.toUpperCase()]
});
// returns Immutable({a: 'A', b: 'B, c: 'C'})

// asMutable
// isImmutable

//console.log(array) // array不会变化

// == immutable object
// 普通对象
let obj = Immutable({
  foo: 'bar',
  name: {
    key: 'hya'
  },
  birthday: '207'
});

// 通过构造函数创造出的对象
function Square(length) {
  this.length = length
}
Square.prototype.area = function () {
  return Math.pow(this.length, 2)
};

let obj2 = Immutable(new Square(2), { prototype: Square.prototype })
obj2.area(); // 可以调用prototype方法
// console.log(obj2)

// stack overflow protect
Immutable(obj2, null, 256); // 提升该对象的空间，默认最大为64

// merge
Immutable.merge(obj, [{foo: 'kda'}, {bar: 's'}])
//return Immutable({foo: 'kda', bar: 's'})

// replace
// todo: deep true
let obj3 = Immutable.replace(obj, {name: {key: 'abc'}}, {deep: true});
console.log(obj3.name === obj.name)
// console.log(obj3)
// console.log(obj)

// set 用于修改对象
let obj4 = Immutable.set(obj, {foo: 'mm'})
console.log(obj4.name === obj.name);

// setIn 用于修改嵌套对象
Immutable.setIn(obj, ['name', 'key'], 'change');
// returns Immutable({foo: 'bar', name: { key: 'change' }})

// getIn 用于获取嵌套对象

// update 用于修改对象，可传递函数
Immutable.update(obj, 'foo', function (value) {
  return value + 'change'
});

// updateIn 用于修改嵌套对象，可传递函数

// without 用于从对象中删除key
Immutable.without(obj, 'name');

Immutable.without(obj, 'name', 'foo');
Immutable.without(obj, ['name', 'foo']);

Immutable.without(obj, (value, key) => {
  return value === 'name' || key === 'foo'
});

// asMutable