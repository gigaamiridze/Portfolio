const allProjectItems = [
  {
    img: "./img/projects/paradise/paradise.png",
    className: "paradise",
    name: "Paradise",
    date: "september, 2022",
    modalID: "paradise",
    moreInfo: {
      description: "Paradise is a music streaming website where users can register, login and add music if they want or listen to music added by others. Users can also view their statistics on the page. For example, how much music he listened to or uploaded. The website is under development.",
      tools: "Python, Flask, SQLAlchemy, Jinja2, Werkzeug, Flask-Login, Flask-Migrate, Flask-WTF, WTForms, HTML, SCSS/CSS, Gulp.js, JavaScript.",
      firstImg: "./img/projects/paradise/signin.png",
      secondImg: "./img/projects/paradise/add-music.png",
      url: "https://music-paradise.herokuapp.com",
    }
  },
  {
    img: "./img/projects/sandro's-book/book.svg",
    className: "book",
    name: "Sandro's Book",
    date: "july, 2022",
    modalID: "book",
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
    modalID: "devfinder",
    moreInfo: {
      description: "The project with dark and light theme modes, where you can find registered users on GitHub. This app uses the GitHub API.",
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
    modalID: "react-todo",
    moreInfo: {
      description: "ToDo List App is a kind of app that is generally used to maintain our day-to-day tasks or list everything that we have to do. It helps plan our daily schedules.",
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
    modalID: "shopping-cart",
    moreInfo: {
      description: "This is a shopping cart website where various products are placed. The user can add the product to the cart, if desired, increase its quantity, and dynamically understand the current price of the product.",
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
    modalID: "tic-tac-toe",
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
    modalID: "ecommerce",
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
    modalID: "react-accordion",
    moreInfo: {
      description: "The project through which the user can view the questions and on pressing the drop-down button, see the corresponding answer to the question.",
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
    modalID: "react-form",
    moreInfo: {
      description: "Registration form through which the user enters data. Errors occur if invalid data is entered.",
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
    modalID: "card-details",
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
    modalID: "rating-card",
    moreInfo: {
      description: 'The project where users can rate a support request on a range of 1 to 5. After giving a rating, a "thank you" template is displayed.',
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
    modalID: "advice-generator",
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
    modalID: "nft-card",
    moreInfo: {
      description: "NFT preview card using React and TypeScript",
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
    modalID: "photolens",
    moreInfo: {
      description: "Photolens is a photographer and video maker portfolio website with information about him, contact information, and his many photos by category. The user can also add the photo he likes to the cart and buy it.",
      tools: "Python, Flask, JavaScript, Gulp.js, HTML, SCSS/CSS.",
      firstImg: "./img/projects/photolens/home.png",
      secondImg: "./img/projects/photolens/shop-route.png",
      url: "https://photolenss.herokuapp.com",
    }
  },
  {
    img: "./img/projects/travel/travel.png",
    className: "travel",
    name: "Travel",
    date: "june, 2022",
    modalID: "travel",
    moreInfo: {
      description: "A travel website featuring photos and information about various places. This website is a test assignment for an internship. Also located on the page is the products page, from which I fetched information from the API located in the online space.",
      tools: "JavaScript, Gulp.js, HTML, SCSS/CSS.",
      firstImg: "./img/projects/travel/section-1.png",
      secondImg: "./img/projects/travel/section-2.png",
      url: "https://unilab-project.vercel.app",
    }
  },
  {
    img: "./img/projects/hortensia/hortensia.png",
    className: "hortensia",
    name: "Hortensia",
    date: "september, 2022",
    modalID: "hortensia",
    moreInfo: {
      description: "Hortensia is a text classification website that offers its users flashcards featuring random sentences pulled from a common text repository. Under the card, there is a graphic selector of the emotional wheel, according to which the customer chooses what emotion the data displayed on the card cause in him. The card marked by the user is stored in the database.",
      tools: "Python, Flask, SQLAlchemy, Jinja2, Werkzeug, Flask-Login, Flask-Admin, Flask-WTF, WTForms, HTML, SCSS/CSS, JavaScript.",
      firstImg: "./img/projects/hortensia/intro.png",
      secondImg: "./img/projects/hortensia/statistic.png",
      url: "https://github.com/justtfelix/AI_HortensIA/tree/back",
    }
  },
  {
    img: "./img/projects/vaccine-api/vaccine.jpg",
    className: "vaccine",
    name: "Vaccination API",
    date: "May, 2022",
    modalID: "vaccine",
    moreInfo: {
      description: "Using this API one can register, log in, add data, read, update, and delete. If a person has been vaccinated, he will enter data on what kind of vaccine he received and how many doses. The data of vaccinated people are stored in the database.",
      tools: "Python, Flask, SQLAlchemy, Flask-RESTful, Werkzeug, Flask-JWT-Extended.",
      firstImg: "./img/projects/vaccine-api/register.png",
      secondImg: "./img/projects/vaccine-api/post.png",
      url: "https://github.com/justtfelix/Vaccination-API",
    }
  },
  {
    img: "./img/projects/manager-api/manager.png",
    className: "manager",
    name: "Magazine Manager API",
    date: "May, 2022",
    modalID: "manager",
    moreInfo: {
      description: "Using this API one can register, log in, add data, read, update, and delete. A person will enter data about the product, the data of which will be stored in the database.",
      tools: "Python, Flask, SQLAlchemy, Flask-RESTful, Werkzeug, Flask-JWT-Extended.",
      firstImg: "./img/projects/manager-api/register.png",
      secondImg: "./img/projects/manager-api/post.png",
      url: "https://github.com/justtfelix/Manager-API",
    }
  },
  {
    img: "./img/projects/genius-api/genius.png",
    className: "genius",
    name: "Genius API",
    date: "May, 2022",
    modalID: "genius",
    moreInfo: {
      description: "Using the Genius API, an artist can add, read, update, and delete data. The artist will enter data with music-specific data that will be stored in the database.",
      tools: "Python, Flask, SQLAlchemy, Flask-RESTful, Werkzeug, Flask-JWT-Extended.",
      firstImg: "./img/projects/genius-api/artist.png",
      secondImg: "./img/projects/genius-api/song.png",
      url: "https://github.com/justtfelix/Genius-API",
    }
  },
  {
    img: "./img/projects/portfolio/portfolio.png",
    className: "portfolio",
    name: "Portfolio",
    date: "june, 2020",
    modalID: "my-portfolio",
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
    modalID: "delux",
    moreInfo: {
      description: "This is a landing page website that provides information about a delux company. The website contains information about the company, employees, agenda, and contact information.",
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
    modalID: "tokyo",
    moreInfo: {
      description: "This is an article-type website that contains information about various people and their photos.",
      tools: "JavaScript, Gulp.js, HTML, SCSS/CSS.",
      firstImg: "./img/projects/tokyo/home.png",
      secondImg: "./img/projects/tokyo/about.png",
      url: "https://tokyo-tau.vercel.app",
    }
  },
]

const allProjects = document.querySelector('.all-projects');
let boxContent = '';
for (let item of allProjectItems) {
  boxContent += `
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
allProjects.innerHTML = boxContent;