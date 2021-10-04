import styles from './style.css';

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
};

export const addErrorOnElements = (elements) => {
    elements.forEach(element => {
        element.classList.remove(styles.error);
        setTimeout(()=>{
            element.classList.add(styles.error);
        }, 10);
    });
};

let isEventMount = false;
export const addEventListenerOnTopBar = (callback) => {
    if(!isEventMount){
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            if(window.scrollY > 15){
                callback(true);
            }
            else{
                callback(false);
            }
        });
        isEventMount = true;
    }
};