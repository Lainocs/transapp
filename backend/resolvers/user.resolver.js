import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userResolver = {
  Query: {
    users: () => {
      return prisma.user.findMany();
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
	},
};

export default userResolver;