import Users from "./users.model";

const get = (id: string) => {
  return Users.find({ _id: id });
};

const getAll = () => {
  return Users.find({});
};

const create = (data) => {
  return Users.insertOne(data);
};

const update = (data, id) => {
  return Users.updateOne({ _id: id }, data);
};

const remove = (id) => {
  return Users.findByIdAndDelete(id);
};

export default { get, getAll, create, update, remove };
