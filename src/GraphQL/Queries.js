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

export const GET_ALL_DATA = gql`
  query {
    master_categories {
    name
    image
    id
    categories {
    name
    id
       services {
      duration
      id
      in_clinic
      name
      price
      rating
      category_id
    }
  }  
  }
  }
`;

export const GET_SERVICES_BY_CATEGORY = gql`
  query{
    categories {
    name
    services {
      name
      rating
      price
      in_clinic
      id
      duration
      category_id
    }
  }
  }
` 
