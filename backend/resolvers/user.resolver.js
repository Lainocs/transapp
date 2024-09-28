import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userResolver = {
  Query: {
    users: () => {
      return prisma.user.findMany();
    },
    getUserByEmail: (_, { email }) => {
      return prisma.user.findUnique({
        where: { email },
      });
    },
  },
  Mutation: {
    createUser: async (_, { name, email }) => {
      return prisma.user.create({
        data: {
          name,
          email,
        },
      });
    },
    deleteUser: async (_, { id }) => {
      // Delete all related transactions first
      await prisma.transaction.deleteMany({
        where: { userId: parseInt(id) },
      });

      // Then delete the user
      const deletedUser = await prisma.user.delete({
        where: { id: parseInt(id) },
      });

      return {
        success: true,
        user: deletedUser
      };
    },
  },
};

export default userResolver;