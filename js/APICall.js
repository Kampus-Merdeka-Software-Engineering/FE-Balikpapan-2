const API_BASE_URL = "mysql://root:Ow8gUSDijTT336C11MhI@containers-us-west-123.railway.app:5833/railway";

const fetchGallery = async () => {
    const galleryContainer = document.getElementsByClassName("galleryimages")

    const gallery = await fetch(`${API_BASE_URL}/galleries`)
    const data = await gallery.json()

    data.forEach((item) => {
        const newGallery = document.createElement('div')
        newGallery.classList.add('gallery')
        newGallery.innerHTML=`
            <div class="galleryitem">
                <img src="${item.images}" alt="gallery" width="180px">
                <div class="usernameig">${item.name}</div>
            </div>
        `
        galleryContainer.appendChild(newGallery)

    })
}
fetchGallery()