///@ts-ignore
import { getUsers } from "../lib/facker";

export default defineEventHandler((event) => {
  ///@ts-ignore
  const query = getQuery(event);

  const users = getUsers(query.take);

  return { users };
});
