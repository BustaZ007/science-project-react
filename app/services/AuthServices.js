import md5 from "md5";
import { ResponseStatus } from "../constants";
import { deleteCookie } from "../utils";
import ApiServices from "./ApiServices";


//Набор функций, связанных с авторизацией
export default class AuthServices{

    //Функция логина, при успешной авторизации устанавливает значение роли в localStorage и делает редирект на страницу профиля
    //при неудачной авторизации возвращает сообщение с ошибкой
    static login(data){
        return new Promise((resolve)=>{ApiServices.login(data)
            .then((res)=>{
                if(res.status === ResponseStatus.SUCCES){
                    localStorage.setItem('__role', md5(res.data.role));
                    window.location.href = '/';
                    return resolve('');
                }
                else{
                    return resolve(res.message);
                }
            });
        })
    }

    //Функция логаута, после запроса на сервер удаляет всю служебную информацию: сессионную "куку", значени роли в localStorage и 
    //делает редирект на строницу логина
    static logout(){
        ApiServices.logout();
        deleteCookie('session');
        localStorage.removeItem('__role');
        window.location = '/login';
    }
}