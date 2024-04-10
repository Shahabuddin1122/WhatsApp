import {getServerApi} from "@/utils/axios.settings";

export const axiosFetcher = async (url:string,params?:any) => {
    const {data} = await getServerApi({url,params});
    return data;
}