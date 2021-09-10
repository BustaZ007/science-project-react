export const deleteCookie = (name) => {
    const cookie = document.cookie.split(';').some(c => {
        return c.trim().startsWith(name + '=');
    });
    if(cookie) {
        document.cookie = name + "=" +
          (('/') ? ";path="+'/':"")+
          (('science-project.ru')?";domain="+'science-project.ru':"") +
          ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
}