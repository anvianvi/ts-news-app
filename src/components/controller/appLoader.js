import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'be6d70813aee44438323a52e106edc19', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
