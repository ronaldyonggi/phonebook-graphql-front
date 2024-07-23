import { gql } from '@apollo/client';

export const PERSON_DETAILS = gql`
  #graphql
  fragment PersonDetails on Person {
    id
    name
    phone
    address {
      street
      city
    }
  }
`;
