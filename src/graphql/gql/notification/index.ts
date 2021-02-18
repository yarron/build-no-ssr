import { gql } from '@apollo/client';

export const GET_NOTIFICATIONS = gql`
  query GetNotifications {
    notifications @client
  }
`;

export const ADD_NOTIFICATION = gql`
  mutation AddNotification($message: String!, $type: NotificationE!, $status: Boolean!) {
    addNotification(message: $message, type: $type, status: $status) @client {
      index
    }
  }
`;

export const DELETE_NOTIFICATION = gql`
  mutation DeleteNotification($id: Int!) {
    deleteNotification(id: $id) @client {
      id
    }
  }
`;

export const EDIT_NOTIFICATION = gql`
  mutation EditNotification($id: Int!, $status: Boolean!) {
    editNotification(id: $id, status: $status ) @client {
      id
    }
  }
`;
