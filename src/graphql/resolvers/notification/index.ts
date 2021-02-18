import { nanoid } from 'nanoid';

import {
  IMutationAddNotificationArgs,
  IQuery,
  IMutationEditNotificationArgs,
  IMutationDeleteNotificationArgs,
  INotifyMutationResponse,
  INotification,
} from '@/graphql/types/_client';
import { GET_NOTIFICATIONS } from '@/graphql/gql/notification';
import { IResolverContext } from '@/graphql/types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const addNotification = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  _root: object, variables: IMutationAddNotificationArgs, { cache }: IResolverContext,
) => {
  const cacheData = cache.readQuery<IQuery>({ query: GET_NOTIFICATIONS });
  const id = nanoid();

  if (cacheData?.notifications) {
    cache.writeQuery({
      query: GET_NOTIFICATIONS,
      data: {
        notifications: [
          ...cacheData.notifications,
          { ...variables, id, __typename: 'Notification' },
        ],
      },
    });
    return { message: 'Notification added successfully!', id };
  }
  return new Error('Error: Notification error!');
};

export const editNotification = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  _root: object, { id, status }: IMutationEditNotificationArgs, { cache }: IResolverContext,
): INotifyMutationResponse => {
  const cacheData = cache.readQuery<IQuery>({ query: GET_NOTIFICATIONS });

  if (cacheData?.notifications) {
    const notifications = cacheData.notifications.map((notify) => {
      const newNotify = { ...notify } as INotification;

      if (notify?.id === id) {
        newNotify.status = status;
      }

      return newNotify;
    });
    cache.writeQuery({ query: GET_NOTIFICATIONS, data: { notifications } });
    return {
      message: 'Notification changed successfully!',
      id,
    };
  }
  return new Error('Error: Notification error!');
};

export const deleteNotification = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  _root: object, { id }: IMutationDeleteNotificationArgs, { cache }: IResolverContext,
): INotifyMutationResponse => {
  const cacheData = cache.readQuery<IQuery>({ query: GET_NOTIFICATIONS });

  if (cacheData?.notifications) {
    const notifications = cacheData.notifications.filter((notify) => notify?.id !== id);
    cache.writeQuery({ query: GET_NOTIFICATIONS, data: { notifications } });
    return { message: 'Notification deleted successfully!', id };
  }

  return new Error('Error: Notification error!');
};
