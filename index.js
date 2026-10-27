// The page must load with hidding the Software, Data analysis, Math and Music Cards

window.onload=function(){
    loadPage();
}

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

// DESIGNING THE INTERACTIVE ABOUT ME PAGE

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

// Services

const techServices=document.querySelector(".techServices");
const dataServices=document.querySelector(".dataServices");
const mathServices=document.querySelector(".mathServices");
const musicServices=document.querySelector(".musicServices");
const serviceCardContainer=document.querySelector(".serviceCardContainer");
const serviceCardDisplay=document.querySelector(".serviceCardDisplay");

function loadPage(){
    serviceCardContainer.style.display="block";
    techServices.style.display = "none";
    dataServices.style.display = "none";
    mathServices.style.display = "none";
    musicServices.style.display = "none";
}



// Revealing minor cards only when major services cards are clicked
const techServicesCard=document.querySelector(".techServicesCard");
const dataServicesCard=document.querySelector(".dataServicesCard");
const mathServicesCard=document.querySelector(".mathServicesCard");
const musicServicesCard=document.querySelector(".musicServicesCard");

const techCards=[
    {
        id: 1,
        image: "./Assets/softwarePlatformDevelopment.jpeg",
        serviceTitle: "System / Platform Development",
        serviceDescription: "Digitize your services with modern and responsive website.",
        serviceDetail_1: "Custom websites",
        serviceDetail_2: "Dashboards",
        serviceDetail_3: "Deployment support",
    },
    {
        id: 2,
        image: "./Assets/fullstackDevelopmentTeaching.jpeg",
        serviceTitle: "Full-Stack Development Training",
        serviceDescription: "Learn to build real-world web applications from scratch.",
        serviceDetail_1: "HTML, CSS, JavaScript, React, Node.Js, Data base, Deployment",
        serviceDetail_2: "Real projects",
        serviceDetail_3: "GitHub portfolio",
    }
]
techServicesCard.addEventListener("click",()=>{
    serviceCardContainer.style.display="block";
    dataServices.style.display = "none";
    mathServices.style.display = "none";
    musicServices.style.display = "none";
    serviceCardDisplay.style.display = "block";
});

dataServicesCard.addEventListener("click",()=>{
    serviceCardContainer.style.display="none";
    techServices.style.display = "none";
    dataServices.style.display = "block";
    mathServices.style.display = "none";
    musicServices.style.display = "none";
});

mathServicesCard.addEventListener("click",()=>{
    serviceCardContainer.style.display="none";
    techServices.style.display = "none";
    dataServices.style.display = "none";
    mathServices.style.display = "block";
    musicServices.style.display = "none";
});

musicServicesCard.addEventListener("click",()=>{
    serviceCardContainer.style.display="none";
    techServices.style.display = "none";
    dataServices.style.display = "none";
    mathServices.style.display = "none";
    musicServices.style.display = "block";
});