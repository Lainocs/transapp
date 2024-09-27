import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const transactionResolver = {
  Query: {
    transactions: () => {
      return prisma.transaction.findMany({
        include: {
          user: true,
        },
      });
    },
  },
  Mutation: {
    createTransaction: async (_, { userId, description, paymentType, amount }) => {
      return prisma.transaction.create({
        data: {
          user: {
            connect: { id: userId },
          },
          description,
          paymentType,
          amount,
        },
        include: {
          user: true,
        },
      });
    },
  },
};

export default transactionResolver;