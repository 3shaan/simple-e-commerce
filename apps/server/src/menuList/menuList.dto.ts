import { z } from "zod";

export const menuListSchema = z.object({
  id: z.string(),
  name: z.string(),
});
export const menuListArraySchema = z.array(menuListSchema);

// schema
export const createMenuListDto = z.object({
  id: z.string(),
  name: z.string(),
});
// type
export type CreateMenuListDto = z.infer<typeof createMenuListDto>;

// dto
export const updateMenuListDto = createMenuListDto;
export type UpdateMenuListDto = z.infer<typeof updateMenuListDto>;

// dto
export const deleteMenuListDto = z.object({
  id: z.string(),
});
export type DeleteMenuListDto = z.infer<typeof deleteMenuListDto>;
