import { Router } from 'express';

import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRouter from '@modules/users/infra/http/routes/user.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordsRouter from '@modules/users/infra/http/routes/password.routes';
import profilesRouter from '@modules/users/infra/http/routes/profile.routes';
import providersRouter from '@modules/appointments/infra/http/routes/providers.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/providers', providersRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordsRouter);
routes.use('/profile', profilesRouter);

export default routes;
