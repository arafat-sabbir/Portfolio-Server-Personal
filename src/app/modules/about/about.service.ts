import { TUser } from '../user/user/user.interface';
import UserModel from '../user/user/user.model';
import ClientModel from './client/client.model';
import WorkModel from './work/work.model';

const getAboutContent = async () => {
  const { bio } = (await UserModel.findOne()) as TUser;
  const clients = await ClientModel.find();
  const works = await WorkModel.find();
  return { bio, clients, works };
};

export const aboutServices = {
  getAboutContent,
};
