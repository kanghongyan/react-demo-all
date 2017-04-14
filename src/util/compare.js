import _ from 'lodash'

let obj1 = {
  name: {
    first: 'k',
    last: 'hy'
  },
  birthday: '2017'
};

let obj2 = _.cloneDeep(obj1);
// let obj3= _.clone(obj1);

console.log(obj1.name === obj2.name); // false
// console.log(obj1.name === obj3.name); true

