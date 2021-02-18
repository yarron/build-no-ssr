import { gql } from '@apollo/client';

export const GET_AUTH = gql`
  query GetAuth {
    auth @client
  }
`;

export const ADD_AUTH = gql`
  mutation AddAuth {
    addAuth(email: $email, groups: $groups) @client
  }
`;
