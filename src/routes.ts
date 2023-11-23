import { Router, request, response, Request, Response } from 'express';
import { getTasks, saveTask, getTask, updateTask, finishedTask, deleteTask } from './controller/TasksContreller';
import { getUsers, saveUser, getUser, updateUser, deleteUser } from './controller/UserController';
import { getActivities, saveActivity, updateActivity, deleteActivity } from './controller/ActivityController';

const routes = Router();

routes.get('/home', (request: Request, response: Response) => {
  return response.json({ message: 'Hello World!!!' });
});

// Tasks
routes.get('/tasks', getTasks);
routes.post('/tasks', saveTask);
routes.get('/tasks/:id', getTask);
routes.put('/tasks/:id', updateTask);
routes.patch('/tasks/:id', finishedTask);
routes.delete('/tasks/:id', deleteTask);

// Users
routes.get('/user', getUsers);
routes.post('/user', saveUser);
routes.get('/user/:id', getUser);
routes.put('/user/:id', updateUser);
routes.delete('/user/:id', deleteUser);

// Activity
routes.get('/activity/:id', getActivities);
routes.post('/activity', saveActivity);
routes.put('/activity/:id', updateActivity);
routes.delete('/activity/:id', deleteActivity);

export default routes;
