import * as z from "zod";
import { blogCategories } from "../../enum/blogCategory.enum.js";
export const createBlogSchema = z.object({
  title: z.string().nonempty("Title is required").trim(),
  content: z.string().nonempty("Content is required").trim(),
  isPublished: z.boolean().optional(),
  catagory: z.enum(blogCategories, {
    message:
      "Catagory has to be one of the following: " + blogCategories.join(", "),
  }),
});
