const getPosts = (onSuccess) => {
    const settings = {
        "url": `https://jsonplaceholder.typicode.com/posts`,
        "method": "GET",
        "timeout": 0
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        onSuccess(response.map((postJSON) => {
            return new Post(
                postJSON.userId,
                postJSON.id,
                postJSON.title,
                postJSON.body
            )
        }));
    });
};

const getComments = (onSuccess) => {
    const settings = {
        "url": `https://jsonplaceholder.typicode.com/comments`,
        "method": "GET",
        "timeout": 0
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        onSuccess(response.map((commentJSON) => {
            return new Comment(
                commentJSON.postId,
                commentJSON.id,
                commentJSON.name,
                commentJSON.email,
                commentJSON.body
            )
        }));
    });
};

const getAlbums = (onSuccess) => {
    const settings = {
        "url": `https://jsonplaceholder.typicode.com/albums`,
        "method": "GET",
        "timeout": 0
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        onSuccess(response.map((albumJSON) => {
            return new Album(
                albumJSON.userId,
                albumJSON.id,
                albumJSON.title
            )
        }));
    });
};

const getPhotos = (onSuccess) => {
    const settings = {
        "url": `https://jsonplaceholder.typicode.com/photos`,
        "method": "GET",
        "timeout": 0
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        onSuccess(response.map((photoJSON) => {
            return new Photo(
                photoJSON.albumId,
                photoJSON.id,
                photoJSON.title,
                photoJSON.url,
                photoJSON.thumbnailUrl
            )
        }));
    });
};

const getTodos = (onSuccess) => {
    const settings = {
        "url": `https://jsonplaceholder.typicode.com/todos`,
        "method": "GET",
        "timeout": 0
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        onSuccess(response.map((toDoJSON) => {
            return new ToDo(
                toDoJSON.userId,
                toDoJSON.id,
                toDoJSON.title,
                toDoJSON.completed
            )
        }));
    });
};

const getUsers = (onSuccess) => {
    const settings = {
        "url": `https://jsonplaceholder.typicode.com/users`,
        "method": "GET",
        "timeout": 0
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        onSuccess(response.map((userJSON) => {
            return new User(
                userJSON.id,
                userJSON.name,
                userJSON.username,
                userJSON.email,
                userJSON.address.street,
                userJSON.address.suite,
                userJSON.address.city,
                userJSON.address.zipcode,
                userJSON.address.geo.lat,
                userJSON.address.geo.lng,
                userJSON.phone,
                userJSON.website,
                userJSON.company.name,
                userJSON.company.catchPhrase,
                userJSON.company.bs
            )
        }));
    });
};



