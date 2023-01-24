
import { gql } from "apollo-boost";
export const GET_CONTACT = gql`
query MyQuery {
    user {
      mail
      full_name
      Carte_national
    }
  }
`;
