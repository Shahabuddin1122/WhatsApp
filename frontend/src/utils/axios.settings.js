import _axios from "axios";

const axios = _axios.create({
    timeout:5000,
    baseURL: "http://localhost:8080/api/v1/user"
})

axios.interceptors.request.use(
    (config) => {
        console.log(`API call: ${config.url}`)
        return config;
    },
    (error)=>{
        console.log("Error in API call",error);
        return Promise.reject(error)
    }
);

export default axios;


export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    SERVER_ERROR: 500,
    NOT_ACCEPTABLE: 406,
    UNSUPPORTED_MEDIA_TYPE: 415,
    PRECONDITION_FAILED: 412,
    REQUEST_TIMEOUT: 408,
};

const REQUEST_STATUS = {
    GET: HTTP_STATUS.OK,
    PUT: HTTP_STATUS.OK,
    PATCH: HTTP_STATUS.OK,
    POST: HTTP_STATUS.CREATED,
    DELETE: HTTP_STATUS.NO_CONTENT,
};


const getErrorMessage = (e) => {
    const code = e.code || e.request?.status || e.response?.status;
    if (code === "ECONNREFUSED" || code === "ECONNABORTED")
        return "Failed to advance to the next step due to network error";

    const data = e.response?.data;
    if (data) {
        if (typeof data === "string") return data;
        if (typeof data.message === "string") return data.message;
    }
    return e.toString();
};

export const getServerApi = async ({url, params = {}}) => {

    let res;
    try {
        res = await axios({
            method: "GET",
            url,
            params,
            headers: { 'content-type': 'application/json' }
        });
    } catch (e) {
        let error = {
            title: e.type || "Sorry!",
            code: e.code || e.response?.data?.status || e.response?.status || 0,
            message: getErrorMessage(e),
            api: `${process.env.BASE_URL}${e?.request?.path}`,
        };
        console.error(e);

        return {error};
    }

    if (res.status !== REQUEST_STATUS.GET) {
        let error = {
            title: "Sorry!",
            code: res.status,
            message: `Error in calling server API, HTTP status: ${res.statusText}`,
            api: `${process.env.BASE_URL}${url}`,
        };
        return {error};
    }

    // console.log(res.data)
    // NOTE: axios provides all header names in lower case
    return {data: res.data};

};


export const requestApi = async ({
                                     url,
                                     method = "GET",
                                     data = {},
                                     params = {},
                                     isTimeoutExtended = false,
                                     ignoreStatusCheck = true,
                                     unmodifiedErrorResponse = true,
                                 }) => {

    let res;

    try {
        const requestObj = {
            method,
            url,
            data,
            params,
            headers: {'content-type': 'application/json'}
        };
        //if (isTimeoutExtended) requestObj.timeout = 60 * 60 * 1000;
        res = await axios(requestObj);
    } catch (e) {
        console.log("Got Error in API call");
        console.dir(e);

        if (unmodifiedErrorResponse) return {error: e.response};

        let error;
        if (e.response) {
            let {status} = e.response;
            error = {
                title: "Sorry!",
                code: status,
                message:
                    status === HTTP_STATUS.PRECONDITION_FAILED
                        ? "Data was updated by another user"
                        : getErrorMessage(e),
            };
        } else {
            error = {
                title: "Sorry!",
                code: e.code || 0,
                message: getErrorMessage(e),
            };
        }

        return {error};
    }

    if (!ignoreStatusCheck && res.status !== REQUEST_STATUS[method]) {
        let error = {
            title: "Sorry!",
            code: res.data.status || 0,
            message:
                res.data.message ||
                `Error in calling server API, HTTP status: ${res.statusText}`,
        };

        return {error};
    }

    return {data: res.data};
};