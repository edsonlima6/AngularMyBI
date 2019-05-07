import { Observable } from "rxjs";
import { Usuario } from "./usuario";
import { ResponseError } from "./ResponseError";

export class ResponseUser{

created:boolean;
message: Observable<ResponseError>;
User: Usuario;


}