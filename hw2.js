const posts = [
    { postName: 'Post1 ', author: 'yazar 1' },
    { postName: 'post 2 ', author: 'yazar 2' },
    { postName: 'post 3 ', author: 'yazar 3' },

]

const listPosts = () => {
    posts.map(post => {
        console.log(post.postName)
    })
}

const addPosts = (newpost) => {
    const promise = new Promise((resolve, reject) => {
        posts.push(newpost);
        resolve(posts);
        reject('bir hata olustu');
    })
    return promise;
}

async function showPosts (){
    try{
    await addPosts({ postName: 'Post 5 ', author: 'yazar 5' })
    listPosts();
    }
    catch(error){
        console.log(error);
    }
}
showPosts();