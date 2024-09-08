const jobs = [
  {


    title: "Web Developer",
    image: "/images/career/coding.png",
    details:
      "We are seeking a talented Web Developer to create and maintain high-quality websites and web applications. The ideal candidate will have knowledge in either front-end or back-end development, or both, with a strong understanding of web technologies and best practices.",
    openPositions: "2",
    link: "#",
  },

  {
    title: "Content Manager",
    image: "/images/icon/content.png",
    details:
      "We are looking for a motivated and creative Content Writer to join our team. As a fresher, you will have the opportunity to develop your writing skills while creating engaging content for our website, blog, social media, and other marketing materials.",
    openPositions: "1",
    link: "#",
  },

  {
    title: "PPC Specialist",
    image: "/images/icon/money.png",
    details:
      "We are looking for a PPC Specialist to manage and optimize our pay-per-click campaigns. The role involves developing and implementing PPC strategies, conducting keyword research, analyzing campaign performance, and adjusting strategies to maximize ROI.",
    openPositions: "3",
    link: "#",
  },

  {
    title: "Marketing Analyser",
    image: "/images/icon/technical-support.png",
    details:
      "We are seeking a motivated and detail-oriented Marketing Analyst to join our team. As a fresher, you will assist in analyzing marketing data, supporting campaign performance evaluations, and providing insights to improve marketing strategies.",
    openPositions: "3",
    link: "#",
  },

  {
    title: "Photographer and Videographer",
    image: "/images/icon/photographer.png",
    details:
      "We are looking for a creative and enthusiastic Photographer and Videographer to join our team. As a fresher, you will assist with capturing high-quality photos and videos for various projects, including marketing materials, social media, and events.",
    openPositions: "1",
    link: "#",
  },

  {
    title: "SEO Specialist",
    image: "/images/icon/seo.png",
    details:
      "We are looking for a motivated SEO Specialist to join our team. As a fresher, you will assist in implementing and optimizing SEO strategies to improve our website’s search engine rankings and drive organic traffic.",
    openPositions: "2",
    link: "#",
  },
];

const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

if (jobs.length == 1) {
  jobsHeading.innerHTML = `${jobs.length} Job`;
} else {
  jobsHeading.innerHTML = `${jobs.length} Jobs`;
}

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = job.image;

      let title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      let details = document.createElement("div");
      details.innerHTML = job.details;
      details.classList.add("details");

      let detailsBtn = document.createElement("a");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "Apply";
      detailsBtn.classList.add("details-btn");

      let openPositions = document.createElement("span");
      openPositions.classList.add("open-positions");

      if (job.openPositions == 1) {
        openPositions.innerHTML = `${job.openPositions} open position`;
      } else {
        openPositions.innerHTML = `${job.openPositions} open positions`;
      }

      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(detailsBtn);
      jobCard.appendChild(openPositions);

      jobsContainer.appendChild(jobCard);
    }
  });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;

  createJobListingCards();
});


document.getElementById("open-popup-btn").addEventListener("click",function() {
	document.getElementsByClassName("popup")[0].classList.add("active");
});

document.getElementById("dismiss-popup-btn").addEventListener("click",function() {
	document.getElementsByClassName("popup")[0].classList.remove("active");
})
