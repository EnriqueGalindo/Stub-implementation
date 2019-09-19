import {getImageResponse, postImageResponse} from "../apiStubs/imageStubs"
export function getImages(req,res){
    res.send(getImageResponse());
}
export function postImages(req,res){
    res.send(postImageResponse());
}