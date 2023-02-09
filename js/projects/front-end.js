const frontProjectItems = [
  {
    img: "./img/projects/sandro's-book/book.svg",
    className: "book",
    name: "Sandro's Book",
    date: "july, 2022",
    modalID: "book-front",
    moreInfo: {
      description: "This book is an online edition of the book. The stories told in this book are about technology and the magical abilities of modern man. There is no printed version of this book, the stories told in the book can be read and heard only thanks to technology.",
      tools: "HTML, SCSS/CSS, JavaScript.",
      firstImg: "./img/projects/sandro's-book/menu.png",
      secondImg: "./img/projects/sandro's-book/audio.png",
      url: "https://nokak.github.io/Web-edition-of-Sandro-s-book/",
    }
  },
  {
    img: "./img/projects/devfinder/devfinder.png",
    className: "devfinder",
    name: "Devfinder",
    date: "january, 2023",
    modalID: "devfinder-front",
    moreInfo: {
      description: "Devfinder project with light and dark theme mode. This app uses the GitHub API to find a user.",
      tools: "React, TypeScript, Moment.js, Gulp.js, HTML, SCSS, CSS, API.",
      firstImg: "./img/projects/devfinder/dark.png",
      secondImg: "./img/projects/devfinder/light.png",
      url: "https://github-devfinder-rc.vercel.app",
    }
  },
  {
    img: "./img/projects/react-todo/todo.png",
    className: "react-todo",
    name: "ToDo List",
    date: "december, 2022",
    modalID: "react-todo-front",
    moreInfo: {
      description: "Todo list app",
      tools: "React, JavaScript, Gulp.js, HTML, SCSS, CSS.",
      firstImg: "./img/projects/react-todo/tasks.png",
      secondImg: "./img/projects/react-todo/completed.png",
      url: "https://todo-list-rc.vercel.app",
    }
  },
  {
    img: "./img/projects/shopping-cart/store.png",
    className: "shopping-cart",
    name: "Shopping Cart",
    date: "November, 2022",
    modalID: "shopping-cart-front",
    moreInfo: {
      description: "This is shopping cart website where various products are placed. The user can add the product to the cart, if desired, increase its quantity and dynamically understand the current price of the product.",
      tools: "React, React Router, TypeScript, HTML, CSS, Bootstrap.",
      firstImg: "./img/projects/shopping-cart/without-cart.png",
      secondImg: "./img/projects/shopping-cart/with-cart.png",
      url: "https://shopping-cart-rc.vercel.app",
    }
  },
  {
    img: "./img/projects/tic-tac-toe/tic-tac-toe.png",
    className: "tic-tac-toe",
    name: "Tic Tac Toe",
    date: "august, 2022",
    modalID: "tic-tac-toe-front",
    moreInfo: {
      description: "This is a tic tac toe game that anyone can see and play. Built into it is the game logic to find out which player has won the game.",
      tools: "JavaScript, HTML, CSS.",
      firstImg: "./img/projects/tic-tac-toe/empty.png",
      secondImg: "./img/projects/tic-tac-toe/filled.png",
      url: "https://tic-tac-toe-ox.vercel.app",
    }
  },
  {
    img: "./img/projects/ecommerce/ecommerce.png",
    className: "ecommerce",
    name: "Shopping Cart",
    date: "april, 2022",
    modalID: "ecommerce-front",
    moreInfo: {
      description: "This is a landing page website where various products are placed. The user can add the product to the cart, if desired, increase its quantity and dynamically understand the current price of the product.",
      tools: "JavaScript, Gulp.js, HTML, SCSS/CSS.",
      firstImg: "./img/projects/ecommerce/cart-1.png",
      secondImg: "./img/projects/ecommerce/cart-2.png",
      url: "https://product-shopping-cart.vercel.app",
    }
  },
  {
    img: "./img/projects/accordion/card.png",
    className: "accordion",
    name: "Accordion Card",
    date: "december, 2022",
    modalID: "react-accordion-front",
    moreInfo: {
      description: "Accordion card app",
      tools: "React, JavaScript, Gulp.js, HTML, SCSS, CSS.",
      firstImg: "./img/projects/accordion/card1.png",
      secondImg: "./img/projects/accordion/card2.png",
      url: "https://accordion-card-rc.vercel.app",
    }
  },
  {
    img: "./img/projects/react-form/registration.png",
    className: "react-form",
    name: "Registration Form",
    date: "december, 2022",
    modalID: "react-form-front",
    moreInfo: {
      description: "Registration form with validation using React and React Hook Form library",
      tools: "React, React Hook Form, JavaScript, HTML, CSS.",
      firstImg: "./img/projects/react-form/validation.png",
      secondImg: "./img/projects/react-form/with-data.png",
      url: "https://registration-form-rc.vercel.app",
    }
  },
  {
    img: "./img/projects/card-details/empty.png",
    className: "card-details",
    name: "Interactive Card",
    date: "january, 2023",
    modalID: "card-details-front",
    moreInfo: {
      description: "Interactive card details form where the customer enters information and this information is dynamically displayed on the card.",
      tools: "React, TypeScript, Gulp.js, HTML, SCSS, CSS.",
      firstImg: "./img/projects/card-details/filled.png",
      secondImg: "./img/projects/card-details/thankYou.png",
      url: "https://card-details-rc.vercel.app",
    }
  },
  {
    img: "./img/projects/rating/card.png",
    className: "rating-card",
    name: "Interactive Rating Card",
    date: "january, 2023",
    modalID: "rating-card-front",
    moreInfo: {
      description: "Interactive rating component with React and TypeScript",
      tools: "React, TypeScript, Gulp.js, HTML, SCSS, CSS.",
      firstImg: "./img/projects/rating/active.png",
      secondImg: "./img/projects/rating/thank-you.png",
      url: "https://interactive-rating-component-rc.vercel.app",
    }
  },
  {
    img: "./img/projects/advice-generator/advice.png",
    className: "advice-generator",
    name: "Advice Generator",
    date: "february, 2023",
    modalID: "advice-generator-front",
    moreInfo: {
      description: "The app uses the Advice Slip API to generate random quotes of advice.",
      tools: "React, TypeScript, Styled-Components, HTML, Framer Motion, API.",
      firstImg: "./img/projects/advice-generator/loading.png",
      secondImg: "./img/projects/advice-generator/error.png",
      url: "https://slip-advice-generator.vercel.app",
    }
  },
  {
    img: "./img/projects/nft-card/nft-card.png",
    className: "nft-card",
    name: "NFT Card",
    date: "december, 2022",
    modalID: "nft-card-front",
    moreInfo: {
      description: "NFT preview card with React and TypeScript",
      tools: "React, TypeScript, HTML, CSS.",
      firstImg: "./img/projects/nft-card/nft-hover.png",
      secondImg: "./img/projects/nft-card/nft-hover-1.png",
      url: "https://nft-preview-card-rc.vercel.app",
    }
  },
  {
    img: "./img/projects/photolens/photolens.png",
    className: "photolens",
    name: "Photolens",
    date: "may, 2022",
    modalID: "photolens-front",
    moreInfo: {
      description: "Photolens is a photographer and video maker portfolio website with information about him, contact information and his many photos by category. The user can also add the photo he likes to the cart and buy it.",
      tools: "Python, Flask, JavaScript, Gulp.js, HTML, SCSS/CSS.",
      firstImg: "./img/projects/photolens/home.png",
      secondImg: "./img/projects/photolens/shop-route.png",
      url: "https://github.com/justtfelix/Photolens",
    }
  },
  {
    img: "./img/projects/travel/travel.png",
    className: "travel",
    name: "Travel",
    date: "june, 2022",
    modalID: "travel-front",
    moreInfo: {
      description: "A travel website featuring photos and information about various places. This website is a test assignment for an internship. Also located on the page is the products page, from which I fetched information from the api located in the online space.",
      tools: "JavaScript, Gulp.js, HTML, SCSS/CSS.",
      firstImg: "./img/projects/travel/section-1.png",
      secondImg: "./img/projects/travel/section-2.png",
      url: "https://unilab-project.vercel.app",
    }
  },
  {
    img: "./img/projects/portfolio/portfolio.png",
    className: "portfolio",
    name: "Portfolio",
    date: "june, 2020",
    modalID: "my-portfolio-front",
    moreInfo: {
      description: "This is my photography portfolio website, where I have information about myself, a gallery of my work, information about my camera and photos, and contact information.",
      tools: "HTML, CSS, JavaScript.",
      firstImg: "./img/projects/portfolio/home.png",
      secondImg: "./img/projects/portfolio/contact.png",
      url: "https://photography-portfolioo.vercel.app",
    }
  },
  {
    img: "./img/projects/delux/delux.png",
    className: "delux",
    name: "Delux",
    date: "july, 2022",
    modalID: "delux-front",
    moreInfo: {
      description: "This is a landing page website that provides information about a delux company. The website contains information about the company, employees, agenda and contact information.",
      tools: "JavaScript, Gulp.js, HTML, SCSS/CSS.",
      firstImg: "./img/projects/delux/agenda.png",
      secondImg: "./img/projects/delux/contact.png",
      url: "https://delux-one.vercel.app",
    }
  },
  {
    img: "./img/projects/tokyo/tokyo.png",
    className: "tokyo",
    name: "Tokyo",
    date: "February, 2022",
    modalID: "tokyo-front",
    moreInfo: {
      description: "This is an article-type website that contains information about various people and their photos.",
      tools: "JavaScript, Gulp.js, HTML, SCSS/CSS.",
      firstImg: "./img/projects/tokyo/home.png",
      secondImg: "./img/projects/tokyo/about.png",
      url: "https://tokyo-tau.vercel.app",
    }
  },
]

const frontProjects = document.querySelector('.frontend-projects');
let frontBoxContent = '';
for (let item of frontProjectItems) {
  frontBoxContent += `
                      <div class="project-content">
                        <div class="project-box" data-modal="${item.modalID}">
                          <div class="project-img">
                            <img class="${item.className}" src="${item.img}" alt="${item.className}">
                          </div>
                          <h2 class="project-name">${item.name}</h2>
                          <span class="project-date">${item.date}</span>
                        </div>
                        <div class="modal" id="${item.modalID}">
                          <h2 class="title">${item.name}<span class="blue-point">.</span></h2>
                          <p class="description">${item.moreInfo.description}</p>
                          <div class="info">
                            <div class="info-box">
                              <h5>stack</h5>
                              <span>${item.moreInfo.tools}</span>
                            </div>
                            <div class="info-box">
                              <h5>date</h5>
                              <span>${item.date}</span>
                            </div>
                          </div>
                          <div class="images">
                            <a href="${item.moreInfo.firstImg}" data-lightbox="mygallery">
                              <img src="${item.moreInfo.firstImg}" alt="${item.className}">
                            </a>
                            <a href="${item.moreInfo.secondImg}" data-lightbox="mygallery">
                              <img src="${item.moreInfo.secondImg}" alt="${item.className}">
                            </a>
                          </div>
                          <div class="modal-btns">
                            <a class="btn" href="${item.moreInfo.url}" target="_blank">visit website</a>
                            <button type="button" class="btn close-btn">back to portfolio</button>
                          </div>
                        </div>
                      </div>`;
}
frontProjects.innerHTML = frontBoxContent;