import axios from 'axios';


export interface TypeData {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    unidade: string,
    ibge: string,
    gia: string
}

export const getCep = async (cep: string) => {
    console.log("chegou no get cep ?")
    const dados = await axios.get<TypeData>("http://viacep.com.br/ws/" + cep + "/json/");
    //console.log("em get > ", dados)

    return dados.data
}


