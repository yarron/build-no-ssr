import { gql } from '@apollo/client';

const GET_LOCAL_CACHE = gql`
  query GetLocalCache {
    auth @client
    notifications @client
  }
`;

export default GET_LOCAL_CACHE;
