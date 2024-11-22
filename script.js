

// fetching the api
    
    async function fetchImage() {
        let data = await fetch("https://api.unsplash.com/photos/?client_id=C99t2DbGIXv0YDou5lCaVIzTlk8kp-IlNUURgwd18vI&count=10");

        let response = await data.json();

        let imgContainer = document.querySelector(".image-container");

        response.forEach(image => {
            let img = document.createElement("img");
            img.src = image.urls.small;
            img.style.width = "250px"
            img.style.height="250px";
            imgContainer.appendChild(img);
        });
        
    }
    fetchImage();

    window.addEventListener("scroll" , function(){
        if(this.window.scrollY + this.window.innerHeight >= this.document.body.offsetHeight){
            fetchImage();
        }
    })