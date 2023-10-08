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

async function sendEmail() {
    const email = document.getElementById("subscription-box").value;
  
    try {
      const sendEmail = await fetch(`${API_BASE_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    })
    const response = await sendEmail.json();
  
    if (response.success) {
      await fetchEmails(); // Refresh the message list after adding a new message
    } else {
      console.error(response.email);
    }
    } catch (error) {
      console.error('Error adding email:', error);
    }
  }
fetchGallery()