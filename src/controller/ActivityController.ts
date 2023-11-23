import { AppDataSource } from '../data-source';
import { Activity } from '../entity/Activity';
import { Request, Response } from 'express';

const repository = AppDataSource.getRepository(Activity);

export const getActivities = async (request: Request, response: Response) => {
  const { id } = request.params;
  const activities = await repository.find({
    where: { user: { id: parseInt(id) } },
  });
  return response.json(activities);
};

export const saveActivity = async (request: Request, response: Response) => {
  const activity = await repository.save(request.body);
  return response.json(activity);
};

export const updateActivity = async (request: Request, response: Response) => {
  const { id } = request.params;
  const activity = await repository.update(id, request.body);

  if (activity.affected === 1) {
    const activityUpdated = await repository.findOneBy({ id: parseInt(id) });
    return response.json(activityUpdated);
  } else {
    return response.status(404).json({ message: 'Activity not found!' });
  }
};

export const deleteActivity = async (request: Request, response: Response) => {
  const { id } = request.params;
  const activity = await repository.delete(id);

  if (activity.affected === 1) {
    return response.status(200).json({ message: 'Activity removed!' });
  } else {
    return response.status(404).json({ message: 'Activity not found!' });
  }
};
