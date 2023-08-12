const prisma = require("../config/db");

exports.getAllUser = async () => {
  const getAllUsers = await prisma.user.findMany();

  return getAllUsers;
};

exports.getUserById = async (id) => {
  const userById = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return userById;
};

exports.createUser = async (body) => {
  const createUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      umur: body.umur,
    },
  });
  return createUser;
};

exports.updateUser = async (body, id) => {
  const updateUser = await prisma.user.update({
    data: {
      name: body.name,
      email: body.email,
      umur: body.umur,
    },
    where: {
      id: id,
    },
  });
};

exports.deleteUser = async (id) => {
  const deleteUser = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return deleteUser;
};
