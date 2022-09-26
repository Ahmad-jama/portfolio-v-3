gsap.to(".circle", {
  left: -10,
  top: 100,
  duration: 1.5,
  // ease: "bounce.out",
  delay: 0.5,
});
gsap.to(".square", {
  right: 10,
  top: 600,
  duration: 1.5,
  delay: 0.5,
  rotation: 44,
  // ease: "bounce.out",
});

// animation for white line
gsap.to(".line", {
  duration: 1.2,
  width: "100%",
});

// animation for hero image
gsap.to(".image", {
  duration: 1.2,
  opacity: 1,
  transform: "scale(1)",
});

// animation for hero text
gsap.to(".hero .info *", {
  y: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.2, // 0.1 seconds between when each ".box" element starts animating
});

// project box

const containerBox = document.querySelector(".container-box");

const allProjects = [
  {
    image: "https://ahmad-portfolio-v2.netlify.app/assets/E-home.PNG",
    description:
      "E-shope ites webstie to shope and buy clothes, i use firebase to get the products , Used React to allow users to instantaneously update the cart interface without reloading. build beautiful and mind-blowing user interfaces and high-performance components used Redux-Toolkit to store the states and save them in local storage",
    title: "Ecommerce  site",
    supTitle: "web application",
    used: "html, css, js, react, react-reducx, firebase",
    liveSite: "ahmad-ecommerce-project.netlify.app",
    github: "github.com/Ahmad-jama/E-commerce-app",
  },
  {
    image: "https://ahmad-portfolio-v2.netlify.app/assets/B-home.PNG",
    description:
      "i build a blog website that used Styled-components to build custom and reusable component use Firebase-storage to upload the images  upload Article to firebase-firestore and display it without reloading",
    title: "Blog website",
    supTitle: "web application",
    used: " react,styled-component, reducx, firebase",
    liveSite: "ahmad-jama-blog.netlify.app/",
    github: "github.com/Ahmad-jama/blog-app",
  },
  {
    image: "https://ahmad-portfolio-v2.netlify.app/assets/N-home.PNG",
    description:
      "i build this netflix clone to show that i can use api  TMDB API and Display in columns by genre  When you click on a movie card, it will show details about that movie and the video youtube.",
    title: "Netflex Clone",
    supTitle: "move site",
    used: " css, react, firebase",
    liveSite: "a-movie-site.netlify.app/",
    github: "github.com/Ahmad-jama/full-netflix-clone",
  },
  {
    image:
      "https://raw.githubusercontent.com/Ahmad-jama/portfolio-v-3/main/assets/Capture.png",
    description:
      "i build this landing page from design i see it on figma to challenge myself to make it pixel perfect and i succeed on that",
    title: "Landing page",
    supTitle: "website design",
    used: " css, react, firebase",
    liveSite: "travel-jadoo.netlify.app/",
    github: "github.com/Ahmad-jama/travel-landing-page",
  },
];

allProjects.forEach((project) => {
  containerBox.innerHTML += `

    <div class="box">
  <img
    src="${project.image}"
    alt="${project.title} "
  />
  <h2>${project.title} </h2>
  <p class="open-project-modal">
    Read More <i class="fa-solid fa-arrow-right"></i>
  </p>

  <div class="box-info">
    <img
      src="${project.image} "
      alt="${project.title} "
    />
    <div class="info">
      <p>${project.supTitle}</p>
      <h1>${project.title} </h1>
      <p>
       ${project.description}
      </p>
      <p>
        technologies- ${project.used}
      </p>
      <p>Role - front end</p>
      <p>
        Live site -
        <a  target=_blank href="https://${project.liveSite}"
          >${project.liveSite}</a
        >
      </p>

      <p>
        github -
        <a target=_blank href="https://${project.github}"
          >${project.github}</a
        >
      </p>
    </div>
    <span class="close"
      ><i class="fa-sharp fa-solid fa-xmark"></i
    ></span>
  </div>
  <div class="overlay"></div>
  </div>

    `;
});

const overlay = document.querySelector(".overlay");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("open-project-modal")) {
    document.querySelector("html").style.overflow = "hidden";
    const box = e.target.parentElement;
    const infoBox = [...box.children][3];
    // const overlay = [...box.children][4];
    console.log(box.children);
    console.log(infoBox);
    infoBox.classList.add("show");
    overlay.classList.add("show");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-sharp")) {
    const box = e.target.parentElement.parentElement.parentElement;
    const infoBox = [...box.children][3];

    infoBox.classList.remove("show");
    overlay.classList.remove("show");
    document.querySelector("html").style.overflow = "auto";
  }
});

// open navbar and close nav

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector("ul").style.right = "-30px";
});
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector("ul").style.right = "-400px";
});

document.querySelector("ul").addEventListener("click", () => {
  document.querySelector("ul").style.right = "-400px";
});
