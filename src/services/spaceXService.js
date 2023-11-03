import axios from "axios";
import {baseUrlSpaceX} from "../constants/urls";

const spaceXService = axios.create({baseUrl:baseUrlSpaceX});

export {
    spaceXService
}