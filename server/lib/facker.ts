import { faker } from "@faker-js/faker";
///@ts-ignore
import { v4 as uuidv4 } from "uuid";
///@ts-ignore
export const getUsers = (take) => {
  const users = [];

  const qty = +take > 10 ? 10 : +take;

  for (let index = 0; index < qty; index++) {
    const user = {};
    ///@ts-ignore
    user.id = uuidv4();
    ///@ts-ignore
    user.email = faker.internet.email();
    ///@ts-ignore
    user.avatar = faker.image.avatar();

    users.push(user);
  }

  return users;
};
