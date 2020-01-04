import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json('jwt-testes'));

export default routes;
