type Cat = { meows: true };
type Dog = { barks: true };
type Cheetah = { meows: true; fast: true };
type Wolf = { barks: true; howls: true };

type ExtractDogish<A> = A extends { barks: true } ? A : never;

type NeverCat = ExtractDogish<Cat>;
type Wolfish = ExtractDogish<Wolf>;
