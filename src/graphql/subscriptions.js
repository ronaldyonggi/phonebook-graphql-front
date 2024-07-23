import { gql } from '@apollo/client';
import { PERSON_DETAILS } from './fragments';

export const PERSON_ADDED = gql`
  #graphql
  subscription {
    personAdded {
      ...PersonDetails
    }
  }
  ${PERSON_DETAILS}
`;
