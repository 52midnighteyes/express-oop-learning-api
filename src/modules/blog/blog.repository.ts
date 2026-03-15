import { prisma as db } from "../../libs/prisma/prisma.lib.js";
import type { TPrisma } from "../../libs/prisma/prisma.types.js";
import type { ICreateBlogDbParams } from "./blog.interface.js";

class BlogRepo {
  prisma: TPrisma;
  constructor() {
    this.prisma = db;
  }

  public findBlogByTitle = async (title: string) => {
    try {
      return await this.prisma.blog.findUnique({
        where: {
          title,
        },
      });
    } catch (error) {
      console.error("message:", error);
      throw error;
    }
  };

  public findBlogById = async (id: string) => {
    try {
      return await this.prisma.blog.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      console.error("message:", error);
      throw error;
    }
  };

  public createBlog = async (params: ICreateBlogDbParams) => {
    try {
      return await this.prisma.blog.create({
        data: {
          ...params,
        },
      });
    } catch (error) {
      console.error("message:", error);
      throw error;
    }
  };
}

export const blogRepo = new BlogRepo();
