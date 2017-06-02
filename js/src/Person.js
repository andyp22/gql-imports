import { Family } from './Family';
export class Person {
    constructor(name) {
        this.name = name;
        this.family = new Family('Orphan');
        this.family.addMember(this);
    }
    sayHello() {
        return `${this.name}> hello!`;
    }
    setFamily(family) {
        this.family = family;
    }
    get fullName() {
        return `${this.name} ${this.family.name}`;
    }
}
//# sourceMappingURL=Person.js.map