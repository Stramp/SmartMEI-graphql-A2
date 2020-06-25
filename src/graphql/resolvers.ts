import { getCep } from '../services/GetCep';
import { IResolvers } from 'apollo-server-express';




const resolvers: IResolvers = {
    Query: {
        buscarCep(_, { cep }) {
            return getCep(cep);
        }
    },
};

export default resolvers;