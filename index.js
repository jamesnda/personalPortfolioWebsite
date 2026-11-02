
// Light and Dark Modes Designing
const lightMode = false;
const containerDiv = document.querySelector(".containerDiv");
const aboutSectionId = document.querySelector("#aboutSectionId");
const servicesSectionId = document.querySelector("#servicesSectionId");
const projectSectionId = document.querySelector("#projectSectionId");
const skillsSectionId = document.querySelector("#skillsSectionId");
const contactSectionId = document.querySelector("#contactSectionId");
const blogSectionId = document.querySelector("#blogSectionId");
const loginId = document.querySelector("#loginId");

const changeModeBtn=document.querySelector("#changeModeBtn");

changeModeBtn.addEventListener("click",function(){
    changeMode();
})

function changeMode(){
    if (lightMode){
        console.log("Light mode is: "+lightMode);
        containerDiv.classList.toggle("lightMode");
    }else{
        console.log("Light mode is: "+lightMode);
        containerDiv.classList.toggle("darkMode");
    }
}

// ABOUT-ME PAGE WITH JS

const aboutCards =[
    {
        id:1,
        title: "Mathematics. Data. Code. Real-World Solutions",
        description: "I am James NDAYISHIMIYE, a Mathematics Educator, Data Analyst, and Frontend Development practitioner with a strong foundation in mathematical reasoning, statistical thinking, and interactive web development. My professional journey brings together three complementary disciplines: mathematics helps me understand problems, data analysis helps me discover evidence and insights, and software development helps me transform ideas into practical digital solutions."
    },
    {
        id:2,
        title: "My Professional Background",
        description: "I hold a Bachelor's degree in Mathematics from the University of Rwanda, College of Science and Technology, and I bring experience as a secondary-school Mathematics Educator. Teaching has strengthened my ability to break down complex concepts, communicate clearly, think logically, and guide others through problem-solving. Alongside education, I have been developing my data analysis capabilities, working with tools and methods for data preparation, statistical analysis, research, and visualization. My learning and project work also extend into frontend development, where I use HTML, CSS, and JavaScript to build interactive and responsive web experiences."
    },
    {
        id:3,
        title: "The Problems I Want to Solve",
        description: "I am particularly interested in helping educational institutions, organizations, researchers, and businesses make better decisions through data and technology. From analyzing school performance and attendance to developing interactive dashboards, educational tools, calculators, and web applications, I enjoy exploring how analytical thinking and software can work together to address practical challenges. My long-term vision is to develop integrated digital solutions that connect data collection, analysis, visualization, and software applications."
    },
    {
        id:4,
        title: "How I Work",
        description: "I value continuous learning, disciplined execution, clear communication, and evidence-based problem-solving. I am comfortable learning independently, researching unfamiliar problems, documenting my work, and taking responsibility for assigned tasks. I welcome opportunities to contribute to remote teams, freelance projects, analytical assignments, educational initiatives, and software development projects where I can deliver value while continuing to grow professionally."
    },
    {
        id:5,
        title: "Let's Build Something Meaningful",
        description: "If you need someone who combines mathematical thinking, analytical curiosity, educational experience, and growing software development skills, I would welcome the opportunity to connect. Let's turn problems into insights, and insights into solutions."
    },
    {
        id:6,
        title: "My Professional Background",
        description: "I hold a Bachelor's degree in Mathematics from the University of Rwanda, College of Science and Technology, and I bring experience as a secondary-school Mathematics Educator. Teaching has strengthened my ability to break down complex concepts, communicate clearly, think logically, and guide others through problem-solving. Alongside education, I have been developing my data analysis capabilities, working with tools and methods for data preparation, statistical analysis, research, and visualization. My learning and project work also extend into frontend development, where I use HTML, CSS, and JavaScript to build interactive and responsive web experiences."
    }
]

const aboutDisplay = document.querySelector(".aboutDisplay");
aboutCards.forEach(aboutCard=>{
    aboutDisplay.innerHTML += `
        <div class="aboutCard">
            <div class="aboutCardTitle">
                <h1>${aboutCard.title}</h1>
            </div>
            
            <div class="aboutCardDescription">
                <p>${aboutCard.description}</p>
            </div>
            <div class="action">
                <button id="viewAboutCardBtn" data-id=${aboutCard.id}>Full View</button>
            </div>
        </div>
    `

// Management of string lengths of titles on each of the about cards
    const aboutCardTitle=document.querySelectorAll("h1");
    aboutCardTitle.forEach(h1=>{
        let aboutTitle=h1.textContent;

        if(aboutTitle.length>20){
            h1.title=aboutTitle;
            h1.textContent=aboutTitle.substring(0,19)+"..."
        }
    });

// Management of string lengths of titles on each of the about cards
    const aboutCardDescription=document.querySelectorAll("p");
    aboutCardDescription.forEach(p=>{
        let text=p.textContent;

        if(text.length>60){
            p.title=text;
            p.textContent=text.substring(0,50)+"..."
        }
    });
})

//MODAL: VIEW/OPEN BUTTON (once clicked open in full mode=About Card opens on 1 full page) and once closed the modal disappears and appears back the former cards:

const viewAboutCardBtn = document.querySelectorAll("#viewAboutCardBtn");
const modal = document.querySelector(".modal");

viewAboutCardBtn.forEach(viewBtn=>{
    viewBtn.addEventListener("click",(e)=>{
        let id =viewBtn.dataset.id;
        modal.style.display = "block";

        let filteredAboutCard = aboutCards.filter(aboutCard=>aboutCard.id==id)[0];
        console.log(filteredAboutCard);

        modal.innerHTML = `
        <div class = "modal-overlay"></div>
            <div class= "modal-content">
                <span class="close">&times;</span>
                <h1 id="modalTitle">${filteredAboutCard.title}</h1>
                <p id="modalDescription">${filteredAboutCard.description}</p>
            </div>
        `

        const closeBtn = document.querySelector(".close");
        closeBtn.addEventListener("click",(e)=>{
            modal.style.display = "none";
        })
    });
});

// Displaying and Hiding My Potential Strengths [Math, Data, Software]
const potentials= [
    {
        id:1,
        title: "Mathematics & Problem Solving",
        description: "Using mathematical reasoning to explain patterns, structure problems, and evaluate solutions.",
        text1: "Quantitative reasoning",
        text2: "Statistical foundations",
        text3: "Mathematics education",
        text4: "Logical problem-solving"
    },
    {
        id:2,
        title: "Data Analysis & Research",
        description: "Turning raw information into structured evidence, understandable insights, and recommendations.",
        text1: "Data cleaning and exploration",
        text2: "Python, R and Stata",
        text3: "Power BI dashboards",
        text4: "Research and reporting"
    },
    {
        id:3,
        title: "Software Development",
        description: "Building accessible, responsive, interactive web interfaces using the technologies I have been learning and applying.",
        text1: "HTML and semantic structure",
        text2: "CSS and responsive design",
        text3: "JavaScript and DOM interaction",
        text4: "Git and GitHub"
    }

]

 
const highlightCards = document.querySelectorAll(".highlightCard");
highlightCards.forEach((card)=>{
    card.addEventListener("click",()=>{
        const selectedPotential = potentials.find((potential)=>potential.id===Number(card.dataset.id));
        
        if (!selectedPotential){
            return;
        }
        
        modal.innerHTML = `
            <div class = "modal-overlay"></div>
                <div class= "modal-content">
                    <span class="close">&times;</span>
                    <h1 id="modalTitle">${selectedPotential.title}</h1>
                    <p id="modalDescription">${selectedPotential.description}</p>
                    <ul><li><p id="modalHighText1">${selectedPotential.text1}</p></li></ul>
                    <ul><li><p<p id="modalHighText2">${selectedPotential.text2}</p></li></ul>
                    <ul><li><p<p id="modalHighText3">${selectedPotential.text3}</p></li></ul>
                    <ul><li><p<p id="modalHighText4">${selectedPotential.text4}</p></li></ul>
                </div>
        `

        modal.style.display = "block";
        modal.querySelector(".close").addEventListener("click",()=>{
            modal.style.display = "none";
        });
    });
})

// SERVICES PAGE WITH JS

const services = [
  { title: "Frontend Development", category: "web",
    summary: "Build responsive, accessible interfaces for websites and dashboards.",
    tools: ["HTML", "CSS", "JavaScript"],
    includes: ["Responsive layouts", "Interactive features", "Interface improvements"] },
  { title: "Python", category: "data",
    summary: "Use Python to explore data and automate repeatable tasks.",
    tools: ["Python"],
    includes: ["Data preparation", "Analysis", "Small automation scripts"] },
  { title: "R", category: "data",
    summary: "Analyze data and communicate results with clear visuals and reports.",
    tools: ["R"],
    includes: ["Statistical analysis", "Visualization", "Reproducible reports"] },
  { title: "Stata", category: "data",
    summary: "Prepare datasets and carry out documented statistical analysis.",
    tools: ["Stata"],
    includes: ["Data management", "Statistical workflows", "Results reporting"] },
  { title: "Power BI", category: "data",
    summary: "Turn data into interactive dashboards for exploring key measures.",
    tools: ["Power BI"],
    includes: ["Data modeling", "Dashboard design", "Reporting"] },
  { title: "Mathematics Education", category: "teaching",
    summary: "Make mathematical ideas understandable through guided reasoning.",
    tools: ["Mathematics", "Teaching"],
    includes: ["Tutoring", "Exam preparation", "Learning resources"] }
];

const serviceGrid = document.querySelector("#serviceGrid");

function renderServices(filter = "all") {
  serviceGrid.innerHTML = services
    .filter(service => filter === "all" || service.category === filter)
    .map(service => `
      <article class="service-card">
        <p class="serviceCategory">${service.category}</p>
        <h3>${service.title}</h3>
        <p>${service.summary}</p>
        <p class="serviceTools">${service.tools.join(" · ")}</p>
        <details>
          <summary>What this can include</summary>
          <ul>${service.includes.map(item => `<li>${item}</li>`).join("")}</ul>
        </details>
        <a class="serviceLink" href="#contactSectionId">Discuss a project</a>
      </article>
    `).join("");
}

document.querySelector(".serviceFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  document.querySelectorAll(".serviceFilters button").forEach(item => {
    item.setAttribute("aria-pressed", String(item === button));
  });

  renderServices(button.dataset.filter);
});
renderServices();

// PROJECTS PAGE WITH JS

const projects = [
  {
    title: "M- TECH School",
    category: "web",
    image: "./Assets/webSchoolImg.jpeg",
    alt: "Web Development School website",
    summary: "A learning platform for people building practical web development skills.",
    tools: ["HTML", "CSS", "JavaScript"],
    demo: "https://jamesnda.github.io/webschoolProject/",
    source: null
  },
  {
    title: "Shop-Mart",
    category: "web",
    image: "./Assets/shopMart.png",
    alt: "Shop-Mart storefront interface",
    summary: "A shopping application concept for browsing products and managing orders.",
    tools: ["HTML", "CSS", "JavaScript"],
    demo: null,
    source: null
  },
  {
    title: "Task Flow",
    category: "web",
    image: "./Assets/taskFlow.jpeg",
    alt: "Task Flow task management interface",
    summary: "A task organizer for creating, prioritizing, and tracking daily work.",
    tools: ["HTML", "CSS", "JavaScript"],
    demo: null,
    source: null
  },
  {
    title: "Simple Calculator",
    category: "math",
    image: "./Assets/simpleCalc.jpg",
    alt: "Simple calculator interface",
    summary: "A calculator for everyday arithmetic operations.",
    tools: ["HTML", "CSS", "JavaScript"],
    demo: null,
    source: null
  },
  {
    title: "Loan Calculator",
    category: "math",
    image: "./Assets/loanCalc.jpg",
    alt: "Loan calculator interface",
    summary: "Estimates repayments and interest from loan details.",
    tools: ["HTML", "CSS", "JavaScript"],
    demo: null,
    source: null
  },
  {
    title: "Simple Interest Calculator",
    category: "math",
    image: "./Assets/simpleInterestCalc.jpg",
    alt: "Simple interest calculator interface",
    summary: "Calculates simple interest from principal, rate, and time.",
    tools: ["HTML", "CSS", "JavaScript"],
    demo: null,
    source: null
  }
];

const projectGrid = document.querySelector("#projectGrid");
const projectFilters = document.querySelector(".projectFilters");

function renderProjects(filter = "all") {
  const visibleProjects = projects.filter(project =>
    filter === "all" || project.category === filter
  );

  projectGrid.innerHTML = visibleProjects.map(project => `
    <article class="projectCard">
      <img class="project-image" src="${project.image}" alt="${project.alt}">
      <div class="projectInfo">
        <p class="projectCategory">${project.category === "math" ? "Math tool" : "Web app"}</p>
        <h3>${project.title}</h3>
        <p class="projectDescription">${project.summary}</p>
        <ul class="projectTools">
          ${project.tools.map(tool => `<li>${tool}</li>`).join("")}
        </ul>
        <div class="projectActions">
          ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer">Live demo</a>` : ""}
          ${project.source ? `<a href="${project.source}" target="_blank" rel="noopener noreferrer">Source code</a>` : ""}
        </div>
      </div>
    </article>
  `).join("");
}

projectFilters.addEventListener("click", event => {
  const button = event.target.closest("[data-project-filter]");
  if (!button) return;

  projectFilters.querySelectorAll("button").forEach(filterButton => {
    filterButton.setAttribute("aria-pressed", String(filterButton === button));
  });

  renderProjects(button.dataset.projectFilter);
});
renderProjects();

// SKILLS SECTION WITH VANILLA JS

const categorySections = document.querySelector(".categorySections");
const clustersDiv = document.querySelector(".clustersDiv");

const skillPanels = {
    fullstack: document.querySelector(".fullstackModal"),
    math: document.querySelector(".mathematicsEducationCover"),
    mathTech: document.querySelector(".mathTechEducationCover"),
    music: document.querySelector(".musicEducationCover")
};

let lastSkillButton;

categorySections.addEventListener("click", (event) => {
    const button = event.target.closest("[data-skill-panel]");
    if (!button) return;

    const panel = skillPanels[button.dataset.skillPanel];
    if (!panel) return;

    lastSkillButton = button;
    Object.values(skillPanels).forEach((item) => {
        item?.classList.remove("is-active");
    });

    categorySections.classList.add("is-hidden");
    panel.classList.add("is-active");
    panel.querySelector(".backToCategoryBtn")?.focus();
});

clustersDiv.addEventListener("click", (event) => {
    if (!event.target.closest(".backToCategoryBtn")) return;

    Object.values(skillPanels).forEach((panel) => {
        panel?.classList.remove("is-active");
    });

    categorySections.classList.remove("is-hidden");
    lastSkillButton?.focus();
});


// CONTACTS PAGE WITH JS

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const sendButton = contactForm.querySelector("#sendBtn");
    sendButton.disabled = true;
    formStatus.textContent = "Sending your message...";

    try {
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: new FormData(contactForm),
            headers: { Accept: "application/json" }
        });

        if (!response.ok) throw new Error("Submission failed");

        contactForm.reset();
        formStatus.textContent = "Message sent. Thank you for getting in touch.";
    } catch {
        formStatus.textContent =
            "The message could not be sent. Please email jamesndayishimiye01@gmail.com.";
    } finally {
        sendButton.disabled = false;
    }
});

// BLOG SECTION WITH JS

const blogSubjects = [
    {
        title: "Web Development",
        description: "Frontend, backend, and the ideas that connect them.",
        image: "./Assets/FullStackImage.jpeg",
        page: "./blogs/web-development.html",
        featuredArticle: {
            title: "From Frontend to Backend: Understanding Full-Stack",
            excerpt: "An introduction to how user interfaces, server logic, APIs, and databases work together.",
            date: "2026-04-04",
            page: "./blogs/full-stack-architecture.html"
        }
    },
    {
        title: "Mathematics & Education",
        description: "Clear explanations and practical approaches to teaching mathematics.",
        image: "./Assets/mathsEducationImage.jpeg",
        page: "./blogs/mathematics-education.html"
    },
    {
        title: "Data Analysis",
        description: "Working with data to find evidence and communicate useful insights.",
        image: "./Assets/mathsTechnologyIntegration.jpeg",
        page: "./blogs/data-analysis.html"
    }
];

const blogGrid = document.querySelector("#blogGrid");

blogGrid.innerHTML = blogSubjects.map(subject => `
    <article class="blogCard">
        <a class="blogCardImageLink" href="${subject.page}">
            <img src="${subject.image}" alt="" class="blogCardImage">
        </a>
        <div class="blogCardBody">
            <h3><a href="${subject.page}">${subject.title}</a></h3>
            <p>${subject.description}</p>
            ${
                subject.featuredArticle
                    ? `<a class="blogReadLink" href="${subject.featuredArticle.page}">
                           Latest: ${subject.featuredArticle.title}
                       </a>`
                    : `<a class="blogReadLink" href="${subject.page}">Explore articles</a>`
            }
        </div>
    </article>
`).join("");

// LOGIN PAGE WITH JS

