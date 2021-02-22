import axios from 'axios'


const api = axios.create({baseURL: 'https://front-exercise.z1.digital/evaluations'})

export interface ResType {
    summary: {
        outcome : string;
    }
}

export const evaluatePicture = async (imgSrc: string): Promise<ResType> => {
    const res = await api.post('',{imgSrc})
    return res.data;
}

