const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    .footersection{
        background-color: #F3EDE1;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 50px; padding-top: 50px;
    }

    .footersection ul li{
        list-style: none;
        font-family: 'inter', sans-serif;
        font-size: 12px;
        font-weight: 500;
        color: #000000;
        display:inline-block;
        margin: 0 50px;
        position: relative;
    }
    .footersection ul li a{
        text-decoration: none;
        color: #3F3836;
        text-transform: uppercase;
    }
    .footersection ul li::after{
        content: '';
        height: 3px;
        width: 0;
        background:#3F3836;
        position: absolute;
        left: 0;
        bottom: -10px;
        transition: 0.5s;
    }
    .footersection ul li:hover::after{
        width: 100%;
    }

    .footersection .logo{
        font-size: 2rem;
        font-weight: bolder;
        color: #000000;
        text-transform: lowercase;
        padding-bottom: 1rem; padding-top: 5rem
    }

    .footersection .about-us{
        font-size: 12px;
        font-weight: 300;
        color: #000000;
        font-family: 'Inter', sans-serif;
        margin-left: 20%; margin-right: 20%;
        padding-bottom: 1rem;
        text-align: center;

    }


    .socialsection{
        background-color: #3F3836;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .iglogo{
        padding-right: 34px;}


    @media (max-width: 991px){
        html{
            font-size: 55%;
        }
    }

    @media (max-width: 768px){

        html{
            scroll-padding-top: 0;
        }

        body{
            padding-bottom: 6rem;
        }

        .header .header-2{
            display: none;
        }

        .bottom-navbar{
            display: block;
        }

        #search-btn{
            display: inline-block;
        }

        .header .header-1{
            box-shadow: var(--box-shadow);
            position: relative;
        }

        .header .header-1 .search-form{
            position: absolute;
            top:-115%; right:7rem;
            width: 75%;
            box-shadow: var(--box-shadow);
        }

        .header .header-1 .search-form.active{
            top:115%;
            border-radius: 3rem;
            height: 4rem;
            padding: 1rem;
        }
    }

    @media (max-width: 450px){
        html{
            font-size: 50%;
        }
    }
  </style>
  <section class="footersection">
        <ul class="footermenu">
            <li><a href="#">FAQS</a></li>
            <li><a href="#">PRIVACY POLICY</a></li>
            <li><a href="#">TERMS OF SERVICE</a></li>
            <li><a href="#">CONTACT US</a></li>
        </ul>
        <div class="logo">sayayya.</div>
        <div class="about-us">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </div>
    </section>



    <!-- socialsection -->
    <section class="socialsection">
        <div class="iglogo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_66_293)">
                <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" fill="#DED6C4"/>
                <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="#DED6C4"/>
                <path d="M19.8469 5.59531C19.8469 6.39219 19.2 7.03438 18.4078 7.03438C17.6109 7.03438 16.9688 6.3875 16.9688 5.59531C16.9688 4.79844 17.6156 4.15625 18.4078 4.15625C19.2 4.15625 19.8469 4.80313 19.8469 5.59531Z" fill="#DED6C4"/>
                </g>
                <defs>
                <clipPath id="clip0_66_293">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>

        <div class="tiktoklogo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0725 0H13.0278V16.3478C13.0278 18.2957 11.4722 19.8957 9.53626 19.8957C7.60034 19.8957 6.04469 18.2957 6.04469 16.3478C6.04469 14.4348 7.56577 12.8695 9.43257 12.8V8.69567C5.31872 8.7652 2 12.1391 2 16.3478C2 20.5913 5.38786 24 9.57085 24C13.7538 24 17.1416 20.5565 17.1416 16.3478V7.9652C18.6627 9.07827 20.5295 9.73913 22.5 9.77393V5.66957C19.4579 5.56522 17.0725 3.06087 17.0725 0Z" fill="#DED6C4"/>
                </svg>
        </div>
                        
    </section>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);

searchForm= document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=() =>{
    searchForm.classList.toggle('active');
}

window.onscroll=() =>{
    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload=() =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}