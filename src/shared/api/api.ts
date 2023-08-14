import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

/**
 * Можно задать baseURL так либо задать
 * глобальную __API__ переменную (настройка в вебпаке)
 * И использовать ее во всем приложении.
 * Подтягивается она сейчас из вебпака, но позже, когда
 * будет настроен файл окружения .env, будем брать от туда
 */
// const baseURL = __IS_DEV__ ? "http://localhost:8000" : "https://production.ru"

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
    },
});
