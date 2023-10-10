const API_BASE_URL = "https://be-balikpapan-2-production.up.railway.app";

const fetchGallery = async () => {
    const galleryContainer = document.querySelector(".galleryimages"); 
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


document.getElementById("subscription-form").addEventListener("submit", async function (event){
    event.preventDefault()
    const email = document.getElementById("subscription-box").value;
    console.log(email)
    try {
      const sendEmail = await fetch(`${API_BASE_URL}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email})
    })
    
    if (sendEmail.ok) {
      const emailSent = await sendEmail.json(); 
      console.log(emailSent)
    } else {
      console.error(sendEmail.status);
    }
    } 
    catch (error) {
      console.error('Error adding email:', error);
    }
  }
)
fetchGallery()


