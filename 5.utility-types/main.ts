interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  isAdmin: boolean;
}

function getUser(): User {
  return { id: 8, name: "Eve", email: "eve@example.com", isAdmin: false };
}

type PartialUser = Partial<User>;

type RequiredUser = Required<User>;

type ReadonlyUser = Readonly<User>;

type PickedUser = Pick<User, "id" | "name">;

type OmittedUser = Omit<User, "age" | "isAdmin">;

type UserType = ReturnType<typeof getUser>;
