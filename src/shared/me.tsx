import { AxiosResponse } from "axios";
import { http } from "./Http"

export let mePromise: Promise<AxiosResponse<Resources<User>>> | undefined

export const refreshMe = () => {
    mePromise = http.get<Resources<User>>('/me')
    return mePromise
}

export const fetchMe = refreshMe