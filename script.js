console.log("hoi");

fetch("https://www.reddit.com/r/aww/.json")
  .then(res => res.json())
  .then(data => {
    console.log(data.kind); // testing to make sure it works
    // const feedEl = document.createElement("main");
    // feedEl.setAttribute("id", "feed");
    // document.querySelector("body").appendChild(feedEl);

    const feedEl = document.getElementById("feed");

    for (const post of data.data.children) {
      // for (let post = 0, post < 10, post++){
      console.log(post.kind);
      /// new post div
      let newPost = document.createElement("div");
      newPost.classList.add("post");
      ///random header div
      let headerDiv = document.createElement("div");
      headerDiv.classList.add("header");
      let minMaxClose = document.createElement("div");
      minMaxClose.classList.add("minmaxclose");
      let minMaxTitle = document.createElement("div");
      minMaxTitle.classList.add("titleMMC");
      minMaxTitle.innerText = post.data.title;
      let minMaxButton = document.createElement("img");
      minMaxButton.classList.add("imgMMC");
      minMaxClose.appendChild(minMaxTitle);
      minMaxClose.appendChild(minMaxButton);
      headerDiv.appendChild(minMaxClose);
      newPost.appendChild(headerDiv);
      /// post title
      let postTitle = document.createElement("p");
      postTitle.classList.add("post_title");
      postTitle.innerText = post.data.title;
      newPost.appendChild(postTitle);
      /// thumbnail
      const imagePreview = document.createElement("img");
      imagePreview.classList.add("thumbnail");
      imagePreview.src = post.data.thumbnail;
      newPost.appendChild(imagePreview);
      /// link
      const permaLink = document.createElement("a");
      permaLink.classList.add("link");
      permaLink.setAttribute(
        "href",
        `https://www.reddit.com${post.data.permalink}`
      );
      permaLink.setAttribute("target", "_blank");
      permaLink.innerText = `> > > ${post.data.title} < < <`;
      newPost.appendChild(permaLink);
      /// Author
      const authorProfile = document.createElement("a");
      authorProfile.classList.add("author");
      authorProfile.setAttribute(
        "href",
        `https://www.reddit.com/u/${post.data.author}`
      );
      authorProfile.innerText = `Posted by - ${post.data.author}`;
      newPost.appendChild(authorProfile);

      /// deeper image for of loop
      //   for (const image of post.data.preview.images) {
      //     let imagePreview = document.createElement("img");
      //     imagePreview.src = image.source;
      //     newPost.appendChild(imagePreview);
      //   }

      feedEl.appendChild(newPost);
    }
  });
