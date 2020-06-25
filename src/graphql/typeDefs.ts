import { gql } from 'apollo-server-express';

const typeDefs = gql`
type TypeDados{
        cep: String,
        logradouro: String,
        complemento: String,
        bairro: String,
        localidade: String,
        uf: String,
        unidade: String,
        ibge: String,
        gia: String
}
  type Query {
    buscarCep(cep:String!):TypeDados
    
  }
`;

export default typeDefs;