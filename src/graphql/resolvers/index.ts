import addAuth from './auth';

import {
  addNotification,
  editNotification,
  deleteNotification,
} from './notification';

const resolversLocal = {
  Mutation: {
    addAuth,
    addNotification,
    editNotification,
    deleteNotification,
  },
};

export default resolversLocal;
