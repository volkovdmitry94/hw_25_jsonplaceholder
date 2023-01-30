class Post {
    #userId
    #id
    #title
    #body

    get id(){
        return this.#id
    }
    get userId(){
        return this.#userId
    }
    get title(){
        return this.#title
    }
    get body(){
        return this.#body
    }

    constructor(userId, id, title, body) {
        this.#userId = userId;
        this.#id = id;
        this.#title = title;
        this.#body = body;
    }
}

class Comment {
    #postId
    #id
    #name
    #email
    #body

    get id(){
        return this.#id
    }
    get postId(){
        return this.#postId
    }
    get name(){
        return this.#name
    }
    get email(){
        return this.#email
    }
    get body(){
        return this.#body
    }

    constructor(postId, id, name, email, body) {
        this.#postId = postId;
        this.#id = id;
        this.#name = name;
        this.#email = email;
        this.#body = body;
    }
}

class Album {
    #userId
    #id
    #title

    get id(){
        return this.#id
    }
    get userId(){
        return this.#userId
    }
    get title(){
        return this.#title
    }

    constructor(userId, id, title) {
        this.#userId = userId;
        this.#id = id;
        this.#title = title;
    }
}

class Photo {
    #albumId
    #id
    #title
    #url
    #thumbnailUrl

    get id(){
        return this.#id
    }
    get albumId(){
        return this.#albumId
    }
    get title(){
        return this.#title
    }
    get url(){
        return this.#url
    }
    get thumbnailUrl(){
        return this.#thumbnailUrl
    }

    constructor(albumId, id, title, url, thumbnailUrl) {
        this.#albumId = albumId;
        this.#id = id;
        this.#title = title;
        this.#url = url;
        this.#thumbnailUrl = thumbnailUrl;
    }
}

class ToDo {
    #userId
    #id
    #title
    #completed

    get id(){
        return this.#id
    }
    get userId(){
        return this.#userId
    }
    get title(){
        return this.#title
    }
    get completed(){
        return this.#completed
    }

    constructor(userId, id, title, completed) {
        this.#userId = userId;
        this.#id = id;
        this.#title = title;
        this.#completed = completed;
    }
}

class User {
    #id
    #name
    #username
    #email
    #address
    #phone
    #website
    #company

    get id(){
        return this.#id
    }
    get name(){
        return this.#name
    }
    get username(){
        return this.#username
    }
    get email(){
        return this.#email
    }
    get fullAddress(){
        return `St. ${this.#address.street}, ${this.#address.suite}, ${this.#address.city}, ${this.#address.zipcode}`
    }
    get phone(){
        return this.#phone
    }
    get website(){
        return this.#website
    }
    get companyName(){
        return this.#company.companyName
    }
    get companyCatchPhrase(){
        return this.#company.companyCatchPhrase
    }
    get companyBS(){
        return this.#company.companyBS
    }

    constructor(id, name, username, email, street, suite, city, zipcode, geoLat, geoLng,
                phone, website, companyName, companyCatchPhrase, companyBS) {
        this.#id = id;
        this.#name = name;
        this.#username = username;
        this.#email = email;
        this.#address = {street, suite, city, zipcode, geoLat, geoLng};
        this.#phone = phone;
        this.#website = website;
        this.#company = {companyName, companyCatchPhrase, companyBS};
    }
}