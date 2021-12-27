let obj1 = { name: 'John', age: 21 };
console.log('Pre', obj1.__proto__);
obj1.__proto__ = { getName: () => this.name };
console.log('Post', obj1__proto__);












const person = Person();

person.setName('John').setAge(22).setHeight(5.5).setHeight(5.6).setAge(21);

console.log(person.get()); ------> { name: 'John', age: 21, height: 5.6 }

person.setName('Jane');
person.setAge(19);
console.log(person.get()); --------> { name: 'Jane', age: 19, height: 5.6 }

function Person() {
  let name = '';
  let age = '';
  let height = '';
  function setHeight(height) {
    height = height;
    return this;
  }
  function setAge(age) {
    age = age;
    return this;
  }
  function setName(name) {
    name = name;
    return this;
  }
  function get() {
    return { name, age, height };
  }
  return {
    setAge, setHeight, setName, get
  }
}





import React from 'react';

export class A extends React {
  constructor() {
    this.state = {
      a: 1,
      b: 2,
    };
  }

  X() {
    console.log(this.state);
    return <h1>Hello</h1>;
  }

  render() {
    return <B p={this.X} />
  }
}

const B = (props) => {
  const [name, setName] = React.useState('');

  React.useState(() => {
    setName('John');
  });

  return <div>
    <span>{props.p()}</span>
    <span>{name}</span>
  </div>
}