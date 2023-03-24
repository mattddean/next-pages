import type { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
import type { ReadonlyRequestCookies } from "next/dist/server/app-render";

export interface User {
  id: string;
  email: string;
  name: string | undefined;
}

export type GetUser = () => Promise<User | null>;

export function createGetUser(cookies: RequestCookies | ReadonlyRequestCookies) {
  return async () => {
    const user: User = {
      id: 'id',
      name: 'test',
      email: 'testemail',
    };
    return user;
  };
}
