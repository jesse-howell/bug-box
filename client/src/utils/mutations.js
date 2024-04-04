import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// TODO: add export const UPDATE_USER = gql

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_BUG = gql`
  mutation addBug($userId: ID!, $bug: String!) {
    addBug(userId: $userId, bug: $bug) {
      _id
      username
      bugs
    }
  }
`;

export const REMOVE_BUG = gql`
  mutation removeBug($bug: String!) {
    removeBug(bug: $bug) {
      _id
      username
      bugs
    }
  }
`;