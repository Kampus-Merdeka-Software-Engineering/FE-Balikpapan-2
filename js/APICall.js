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

const fetchDresses = async () => {
  const dressesContainer = document.getElementById("dresses_container")

  const dresses = await fetch(`${API_BASE_URL}/dresses`)
  const data = await dresses.json()

  data.forEach((item) => {
      const newDresses = document.createElement('div')
      newDresses.classList.add('dresses')
      newDresses.innerHTML=`
        <div class="product">
          <img src="${item.images}" alt="product1" width="220px" height="293px">
          <div class="productname">${item.name}</div>
          <div class="price">${item.price}</div>
        </div>
      `
      dressesContainer.appendChild(newDresses)

  })
}

async function sendEmail() {
    const email = document.getElementById("subscription-box").value;
    console.log(email)
    try {
      const sendEmail = await fetch(`${API_BASE_URL}/emails`, {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json"
      // },
      body: JSON.stringify({ email })
    })
    // const response = await sendEmail.json();
    // console.log(response)
    if (sendEmail.ok) {
      await sendEmail.json(); // Refresh the message list after adding a new message
    } else {
      console.error(response.email);
    }
    } 
    catch (error) {
      console.error('Error adding email:', error);
    }
  }

fetchGallery()

