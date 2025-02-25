/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
    baseURL: 'https://farmacia-nest.onrender.com/'
})

export const buscar = async (url: string, setDados: Function, header?: AxiosRequestConfig["headers"]) => {
    const resposta = await api.get(url, { headers: header });
    setDados(resposta.data);
};

export const cadastrar = async (url: string, dados: Object, setDados: Function, header?: AxiosRequestConfig["headers"]) => {
    const resposta = await api.post(url, dados, { headers: header })
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function, header?: AxiosRequestConfig["headers"]) => {
    const resposta = await api.put(url, dados, { headers: header })
    setDados(resposta.data)
}

export const deletar = async (url: string, header?: AxiosRequestConfig["headers"]) => {
    await api.delete(url, { headers: header })
}
