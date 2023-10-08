class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header class="header">
        <div class="header-1">
            <a href="#" class="logo">sayayya.</a>

            <form action="" class="search-form">
                <input type="search" name="" placeholder="Search" id="search-box">
                <label for="search-box"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.4934 16.5056C17.9442 15.9565 17.0538 15.9565 16.5047 16.5056C15.9555 17.0548 15.9555 17.9452 16.5047 18.4944L18.4934 16.5056ZM23.5047 25.4944C24.0538 26.0435 24.9442 26.0435 25.4934 25.4944C26.0426 24.9452 26.0426 24.0548 25.4934 23.5056L23.5047 25.4944ZM11.6657 18.4271C7.93202 18.4271 4.90527 15.4003 4.90527 11.6667H2.09277C2.09277 16.9536 6.37871 21.2396 11.6657 21.2396V18.4271ZM18.4261 11.6667C18.4261 15.4003 15.3994 18.4271 11.6657 18.4271V21.2396C16.9527 21.2396 21.2386 16.9536 21.2386 11.6667H18.4261ZM11.6657 4.90625C15.3994 4.90625 18.4261 7.93299 18.4261 11.6667H21.2386C21.2386 6.37969 16.9527 2.09375 11.6657 2.09375V4.90625ZM11.6657 2.09375C6.37871 2.09375 2.09277 6.37969 2.09277 11.6667H4.90527C4.90527 7.93299 7.93202 4.90625 11.6657 4.90625V2.09375ZM16.5047 18.4944L23.5047 25.4944L25.4934 23.5056L18.4934 16.5056L16.5047 18.4944Z" fill="black"/>
                    </svg>          
                </label>
            </form>

            <div class="icons">
                <div id="search-btn"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.4934 16.5056C17.9442 15.9565 17.0538 15.9565 16.5047 16.5056C15.9555 17.0548 15.9555 17.9452 16.5047 18.4944L18.4934 16.5056ZM23.5047 25.4944C24.0538 26.0435 24.9442 26.0435 25.4934 25.4944C26.0426 24.9452 26.0426 24.0548 25.4934 23.5056L23.5047 25.4944ZM11.6657 18.4271C7.93202 18.4271 4.90527 15.4003 4.90527 11.6667H2.09277C2.09277 16.9536 6.37871 21.2396 11.6657 21.2396V18.4271ZM18.4261 11.6667C18.4261 15.4003 15.3994 18.4271 11.6657 18.4271V21.2396C16.9527 21.2396 21.2386 16.9536 21.2386 11.6667H18.4261ZM11.6657 4.90625C15.3994 4.90625 18.4261 7.93299 18.4261 11.6667H21.2386C21.2386 6.37969 16.9527 2.09375 11.6657 2.09375V4.90625ZM11.6657 2.09375C6.37871 2.09375 2.09277 6.37969 2.09277 11.6667H4.90527C4.90527 7.93299 7.93202 4.90625 11.6657 4.90625V2.09375ZM16.5047 18.4944L23.5047 25.4944L25.4934 23.5056L18.4934 16.5056L16.5047 18.4944Z" fill="black"/>
                    </svg>          
                </div>
                <div href="#"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4081 7.92578C13.4474 6.52761 14.5932 5.40625 16.0009 5.40625C17.4085 5.40625 18.5543 6.52761 18.5936 7.92578H13.4081ZM10.5946 10.7383V12C10.5946 12.7767 11.2242 13.4063 12.0009 13.4063C12.7775 13.4063 13.4071 12.7767 13.4071 12V10.7383H18.5946V12C18.5946 12.7767 19.2242 13.4063 20.0009 13.4063C20.7775 13.4063 21.4071 12.7767 21.4071 12V10.7383H22.6981L23.8151 25.2591H8.18557L9.30256 10.7383H10.5946ZM10.5951 7.92578C10.6348 4.9742 13.0398 2.59375 16.0009 2.59375C18.9619 2.59375 21.3669 4.9742 21.4066 7.92578H24.0003C24.7351 7.92578 25.3461 8.49152 25.4024 9.22418L26.7358 26.5575C26.7658 26.9481 26.6316 27.3334 26.3655 27.6208C26.0993 27.9082 25.7254 28.0716 25.3337 28.0716H6.667C6.27529 28.0716 5.90134 27.9082 5.6352 27.6208C5.36906 27.3334 5.23485 26.9481 5.26489 26.5575L6.59822 9.22418C6.65458 8.49152 7.26551 7.92578 8.00033 7.92578H10.5951Z" fill="black"/>
                    </svg>
                </div>
                <div id="login-btn"><a style="text-decoration: none; color: black;"   href="../html/loginpage.html"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0723 9.33333C12.0723 7.16446 13.8305 5.40625 15.9993 5.40625C18.1682 5.40625 19.9264 7.16446 19.9264 9.33333C19.9264 11.5022 18.1682 13.2604 15.9993 13.2604C13.8305 13.2604 12.0723 11.5022 12.0723 9.33333ZM15.9993 2.59375C12.2772 2.59375 9.25977 5.61116 9.25977 9.33333C9.25977 13.0555 12.2772 16.0729 15.9993 16.0729C19.7215 16.0729 22.7389 13.0555 22.7389 9.33333C22.7389 5.61116 19.7215 2.59375 15.9993 2.59375ZM8.07324 24.4405C8.07324 22.7288 9.41709 21.4023 11.0003 21.4023H21.0003C22.5836 21.4023 23.9274 22.7288 23.9274 24.4405V25.2565H8.07324V24.4405ZM11.0003 18.5898C7.79709 18.5898 5.26074 21.2431 5.26074 24.4405V26.6628C5.26074 27.4394 5.89034 28.069 6.66699 28.069H25.3337C26.1103 28.069 26.7399 27.4394 26.7399 26.6628V24.4405C26.7399 21.2431 24.2036 18.5898 21.0003 18.5898H11.0003Z" fill="black"/>
                    </svg></a>
                </div>
            </div>
        </div>

        <div class="header-2">
            <nav class="navbar">
                <a href="../index.html">Home</a>
                <a href="./category_tops.html">Tops</a>
                <a href="./category_bottoms.html">Bottoms</a>
                <a href="./category_dresses.html">Dresses</a>
                <a href="./category_shopall.html">Shop All</a>
                <a href="../index.html#bestsellers">Best Sellers</a>
                <a href="./about_us.html">About Us</a>
            </nav>
        </div>

    </header>
    
    <nav class="bottom-navbar">
        <ul>
            <li><a href="../index.html" class="fas fa-home"></a></li>
            <li>
                <a href class="fas fa-align-justify"></a>
                <ul class="dropdown">
                <li><a href="./category_tops.html">Tops</a></li>
                <li><a href="./category_bottoms.html">Bottoms</a></li>
                <li><a href="./category_dresses.html">Dresses</a></li>
                <li><a href="./category_shopall.html">Shop All</a></li>
                <li><a href="../index.html#bestsellers">Best Sellers</a></li>
                <li><a href="./about_us.html">About Us</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    `;
    }
}

    
customElements.define('header-component', Header);

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
    