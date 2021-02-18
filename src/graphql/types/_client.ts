// ------------------------------------------------------
// THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export interface IAuthMutationResponse {
  __typename?: 'AuthMutationResponse';
  message: Scalars['String'];
}

export interface IAuth {
  __typename?: 'Auth';
  email: Scalars['String'];
  groups: Array<Maybe<Scalars['String']>>;
}

export interface IQuery {
  __typename?: 'Query';
  auth: IAuth;
  notifications: Array<Maybe<INotification>>;
}

export interface IMutation {
  __typename?: 'Mutation';
  addAuth?: Maybe<IAuthMutationResponse>;
  addNotification: INotifyMutationResponse;
  deleteNotification: INotifyMutationResponse;
  editNotification: INotifyMutationResponse;
}


export type IMutationAddAuthArgs = {
  email: Scalars['String'];
  groups: Array<Maybe<Scalars['String']>>;
};


export type IMutationAddNotificationArgs = {
  message: Scalars['String'];
  type: NotificationE;
  status: Scalars['Boolean'];
};


export type IMutationDeleteNotificationArgs = {
  id: Scalars['ID'];
};


export type IMutationEditNotificationArgs = {
  id: Scalars['ID'];
  status: Scalars['Boolean'];
};

export interface INotification {
  __typename?: 'Notification';
  message: Scalars['String'];
  type: NotificationE;
  status: Scalars['Boolean'];
  id: Scalars['ID'];
}

export enum NotificationE {
  Error = 'error',
  Success = 'success'
}

export interface INotifyMutationResponse {
  __typename?: 'NotifyMutationResponse';
  message: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
}
