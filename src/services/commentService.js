import {axiosService} from "./axiosService";
import {urls as erls} from "../constants/urls";

const commentService ={
    getById:(postId) => axiosService.get(erls.comments, {params:{postId}})
}

export {
    commentService
}