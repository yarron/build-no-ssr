import { GET_AUTH } from '@/graphql/gql/auth';
import { IResolverContext } from '@/graphql/types';
import { IMutationAddAuthArgs, IQuery } from '../../types/_client';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const addAuth = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  _root: object, variables: IMutationAddAuthArgs, { cache }: IResolverContext,
) => {
  const cacheData = cache.readQuery<IQuery>({ query: GET_AUTH });

  if (cacheData?.auth) {
    cache.writeQuery({
      query: GET_AUTH,
      data: {
        auth: {
          ...cacheData?.auth,
          ...variables,
        },
      },
    });
    return { message: 'Email added successfully!' };
  }
  return new Error('Error: Email error!');
};

export default addAuth;
