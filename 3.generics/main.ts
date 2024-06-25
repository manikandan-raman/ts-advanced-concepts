class Container<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }

  setValue(value: T): void {
    this.value = value;
  }
}

const numberContainer = new Container<number>(123);
console.log(numberContainer.getValue());
numberContainer.setValue(456);
console.log(numberContainer.getValue());

const stringContainer = new Container<string>("Hello");
console.log(stringContainer.getValue());
stringContainer.setValue("World");
console.log(stringContainer.getValue());
