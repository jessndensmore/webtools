/* ==============================
   Visual Design Lightbox
   ============================== */

const projects = [
    {
        title: "Hawaii Postcard",
        description: "Travel-themed photo composition and typography.",
        image: "images/projects/hawaii-postcard.jpg",
        alt: "Hawaii Postcard"
    },
    {
        title: "Horror Flyer",
        description: "Promotional composition using imagery, effects, and typography.",
        image: "images/projects/horror-flyer.jpg",
        alt: "Horror Flyer"
    },
    {
        title: "Magazine Cover",
        description: "Editorial layout focused on hierarchy and typography.",
        image: "images/projects/magazine-cover.jpg",
        alt: "Magazine Cover"
    },
    {
        title: "Citrus Lane Farms",
        description: "Clean promotional and brand-style graphic design.",
        image: "images/projects/citrus-lane-farms.jpg",
        alt: "Citrus Lane Farms"
    },
    {
        title: "History 301",
        description: "Educational/event graphic combining imagery and information.",
        image: "images/projects/history.jpg",
        alt: "History 301"
    }
];

const lightbox = document.getElementById("project-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxDescription = document.getElementById("lightbox-description");
const lightboxCounter = document.getElementById("lightbox-counter");

const closeButton = document.getElementById("lightbox-close");
const previousButton = document.getElementById("lightbox-prev");
const nextButton = document.getElementById("lightbox-next");

let currentProject = 0;


/* Open a project */

function openLightbox(projectIndex) {
    currentProject = projectIndex;

    const project = projects[currentProject];

    lightboxTitle.textContent = project.title;
    lightboxDescription.textContent = project.description;
    lightboxImage.src = project.image;
    lightboxImage.alt = project.alt;
    lightboxCounter.textContent = `${currentProject + 1} / ${projects.length}`;

    lightbox.style.display = "flex";
    document.body.classList.add("lightbox-open");
}


/* Close the lightbox */

function closeLightbox() {
    lightbox.style.display = "none";
    document.body.classList.remove("lightbox-open");
}


/* Show the previous project */

function showPreviousProject() {
    currentProject--;

    if (currentProject < 0) {
        currentProject = projects.length - 1;
    }

    openLightbox(currentProject);
}


/* Show the next project */

function showNextProject() {
    currentProject++;

    if (currentProject >= projects.length) {
        currentProject = 0;
    }

    openLightbox(currentProject);
}


/* View Project links */

const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const projectIndex = Number(link.dataset.project);

        openLightbox(projectIndex);
    });
});


/* Button controls */

closeButton.addEventListener("click", closeLightbox);

previousButton.addEventListener("click", showPreviousProject);

nextButton.addEventListener("click", showNextProject);


/* Close when clicking the dark background */

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});


/* Close with the Escape key */

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.style.display === "flex") {
        closeLightbox();
    }
});


/* Keyboard navigation */

document.addEventListener("keydown", (event) => {
    if (lightbox.style.display !== "flex") {
        return;
    }

    if (event.key === "ArrowLeft") {
        showPreviousProject();
    }

    if (event.key === "ArrowRight") {
        showNextProject();
    }
});