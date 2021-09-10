import { API, ResponseStatus } from '../constants';

//Набор функций для работы с сервером, выполняют функцию запрос-ответ, при этом ничего никуда не записывая
export default class ApiServices{
    
    //функция для логина, возвращает статус запроса и, при успешном запросе, данные о пользователе в виде ID и роли или, при
    //неудачном запросе, возвращает сообщение с ошибкой
    static login(data){
        return new Promise((resolve)=>{
            API.post('login', data)
                .then((res)=>{
                    if(res.data.id === -1){
                        return resolve({
                            status: ResponseStatus.ERROR,
                            message: 'Неверный логин или пароль',
                        });
                    } else{
                        return resolve({
                            status: ResponseStatus.SUCCES,
                            data: res.data,
                        });
                    }
                })
                .catch(()=>{
                    return resolve({
                        status : ResponseStatus.ERROR,
                        message: 'Проверьте соединение с интернетом или попробуйте позже',
                    });
                });
        });
    }

    //функция для логаута, не важно, как завершится запрос на сервер, поэтому функция ничего не возвращает 
    static logout(){
        API.get('logout');
    }
}