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
    transaction: (_, { id }) => {
      return prisma.transaction.findUnique({
        where: { id: parseInt(id) },
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
            connect: { id: parseInt(userId) },
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
    deleteTransaction: async (_, { id }) => {
      const deletedTransaction = await prisma.transaction.delete({
        where: { id: parseInt(id) },
        include: {
          user: true,
        },
      });
      return {
        success: true,
        transaction: deletedTransaction
      };
    },
  },
};

export default transactionResolver;