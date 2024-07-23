import { gql } from '@apollo/client';
import { PERSON_DETAILS } from './fragments';

export const FIND_PERSON = gql`
  #graphql
  query findPersonByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      ...PersonDetails
    }
  }
  ${PERSON_DETAILS}
`;
