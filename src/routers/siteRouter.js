import express from 'express';
import * as SiteController from '../app/Controller/SiteController.js';
const siteRouter = express.Router();

siteRouter.get('/', SiteController.home);
siteRouter.get('/login', SiteController.login);

export default siteRouter;
