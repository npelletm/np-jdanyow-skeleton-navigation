export class Welcome{
	constructor(){
		this.heading = 'Welcome to the Aurelia Navigation App!';
    this.firstName = 'John';
    this.lastName = 'Doe';


    this.entity = {
      id: 1,
      name: 'jd',
      entityType: {
        getProperties: () => [ { name: 'id', isDataProperty: true }, { name: 'name', isDataProperty: true } ]
      }
    }
	}

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  welcome(){
    alert(`Welcome, ${this.fullName}!`);
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}