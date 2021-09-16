const myPosts = [
  { title: "Post 1" },
  { title: "Post 2" },
  { title: "Post 3" },
  { title: "Post 4" },
];

function showPosts(posts) {
  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i].title);
  }
}

console.log("ONCEKİ POSTLAR");
showPosts(myPosts);

async function addPost(arg) {
  try {
    console.log("YENİ POST LİSTEYE EKLENİYOR");
    const add = await myPosts.push(arg);
    console.log("YENİ POST LİSTEYE EKLENDI");
    
    console.log("YENİ POSTLAR");
    const show = await showPosts(myPosts);
  } catch (e) {
    console.log("Bir hata oluştu", e);
  }
}

addPost({ title: "Yeni Post" });
