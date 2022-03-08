function getCookie(cookie_key){
    let cookies = document.cookie;

    for (const cookie_elt of cookies.split(';')){
        let split = cookie_elt.split('=');

    
        let [key, value] = [split[0], split[1]];
    
        if(key === cookie_key){
            return value;
        }
    }

    return '';
}

export {getCookie};