import axios from 'axios';
import {baseUrlJson} from "../constants/urls";

axios.create({baseURL:baseUrlJson});

const jsonService = axios.create({baseURL:baseUrlJson});

export {
    jsonService
}