import { AppDataSource } from '../data-source';
import { User } from '../entity/User';
import { Request, Response } from 'express';

const repository = AppDataSource.getRepository(User);

export const getUsers = async (request: Request, response: Response) => {
  const users = await repository.find();
  return response.json(users);
};

export const saveUser = async (request: Request, response: Response) => {
  const user = await repository.save(request.body);
  return response.json(user);
};

export const getUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  const user = await repository.findOneBy({ id: parseInt(id) });
  return response.json(user);
};

export const updateUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  const user = await repository.update(id, request.body);

  if (user.affected === 1) {
    const userUpdated = await repository.findOneBy({ id: parseInt(id) });
    return response.json(userUpdated);
  } else {
    return response.status(404).json({ message: 'User not found!' });
  }
};

export const deleteUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  const user = await repository.delete(id);

  if (user.affected === 1) {
    return response.status(200).json({ message: 'User removed!' });
  } else {
    return response.status(404).json({ message: 'User not found!' });
  }
};
