import { z } from "zod";

export const UserDto = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email().optional().nullable(),
  mobile: z.string(),
  password: z.string(),
});

export const UserCreateDto = UserDto.omit({ id: true });

export const UserUpdateDto = UserDto.partial();

// type

export type User = z.infer<typeof UserDto>;
export type UserCreate = z.infer<typeof UserCreateDto>;
export type UserUpdate = z.infer<typeof UserUpdateDto>;
