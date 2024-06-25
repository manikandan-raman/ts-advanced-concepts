interface Person {
  name: string;
  age: number;
  location: string;
}

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

type LazyPerson = Getters<Person>;
