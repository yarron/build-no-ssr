import GET_LOCAL_CACHE from '../gql';
import auth from './auth';
import notifications from './notification';

const cacheLocal = {
  query: GET_LOCAL_CACHE,
  data: {
    auth,
    notifications,
  },
};

export default cacheLocal;
