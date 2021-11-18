// Appolo
import { gql } from "@apollo/client";

export const GET_ALL_MASTER_CATEGORIES = gql`
query {
    master_categories {
      name
      image
      id
    }
  }
  `;