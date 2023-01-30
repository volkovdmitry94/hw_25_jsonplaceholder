$('#sideNav').on('click', 'li',function () {
    $("#sideNav li").removeClass("active");
    $(this).addClass('active');
    const tabName = $(this).attr('data-name');

    switch (tabName) {
        case 'Posts': {
            getPosts((data) => {
                $('#content').html(`${data.map((post)=>{
                        return `
                    <div class="card">
                        <h2>Id: ${post.id}</h2>
                        <h3>UserId: ${post.userId}</h3>
                        <h3>Title: ${post.title}</h3>
                        <h4>Body: ${post.body}</h4>                        
                    </div>
                `}).join('')}`
                );
            });
            break;
        }
        case 'Comments': {
            getComments((data) => {
                $('#content').html(`${data.map((comment)=>{
                        return `
                    <div class="card">
                        <h2>Id: ${comment.id}</h2>
                        <h3>PostId: ${comment.postId}</h3>
                        <h3>Name: ${comment.name}</h3>
                        <h4>Email: ${comment.email}</h4>
                        <h4>Body: ${comment.body}</h4>                        
                    </div>
                `}).join('')}`
                );
            });
            break;
        }
        case 'Photos': {
            getPhotos((data) => {
                $('#content').html(`${data.map((photo)=>{
                    return `
                    <div class="card">
                        <h2>Id: ${photo.id}</h2>
                        <h3>AlbumId: ${photo.albumId}</h3>
                        <h3>Title: ${photo.title}</h3> 
                        <div><img class="img-center" src="${photo.thumbnailUrl}" alt="photo"></div>
                    </div>
                `}).join('')}`
                );
            });
            break;
        }
        case 'Albums': {
            getAlbums((data) => {
                $('#content').html(`${data.map((album)=>{
                    return `
                    <div class="card">
                        <h2>Id: ${album.id}</h2>
                        <h3>UserId: ${album.userId}</h3>
                        <h3>Title: ${album.title}</h3>                                             
                    </div>
                `}).join('')}`
                );
            });
            break;
        }
        case 'Todos': {
            getTodos((data) => {
                $('#content').html(`${data.map((toDo)=>{
                    return `
                    <div class="card">
                        <h2>Id: ${toDo.id}</h2>
                        <h3>UserId: ${toDo.userId}</h3>
                        <h3>Title: ${toDo.title}</h3>
                        <h3>Completed: ${toDo.completed}</h3>                                                 
                    </div>
                `}).join('')}`
                );
            });
            break;
        }
        case 'Users': {
            getUsers((data) => {
                $('#content').html(`${data.map((user)=>{
                    return `
                    <div class="card">
                        <h2>Id: ${user.id}</h2>
                        <h3>Name: ${user.name}</h3>
                        <h3>Username: ${user.username}</h3>
                        <h3>Email: ${user.email}</h3>
                        <h3>Address: ${user.fullAddress}</h3>
                        <h3>Phone: ${user.phone}</h3>
                        <h3>Website: ${user.website}</h3> <hr>
                        <h4>Company name: ${user.companyName}</h4>
                        <h4>Company catchphrase: ${user.companyCatchPhrase}</h4>    
                        <h4>Company slogan: ${user.companyBS}</h4>   
                    </div>
                `}).join('')}`
                );
            });
            break;
        }

    }

})