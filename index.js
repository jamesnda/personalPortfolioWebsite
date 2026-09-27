const skillsTitle=document.querySelectorAll(".skillsTitle");

const clustersBtn=document.querySelectorAll(".clustersBtn");

const skillsimage=document.querySelectorAll(".skillsImg");

const categoryDescription=document.querySelectorAll(".category-description");


const categorySections=document.querySelector(".categorySections");
const categorySkills=[
    {
        id:1,
        skillsTitle: "Full-Stack Software Development",
        skillsImage: "./Assets/fullStackSoftwareDevelopment.jpeg",
        skillsDescription: "Building scalable, responsive, and performance-optimized web applications from frontend interface to backend architecture."
    },
    {
        id:2,
        skillsTitle: "Mathematics & Quantitative Education",
        skillsImage: "./Assets/mathematicsQuantitativeEducation.jpeg",
        skillsDescription: "Delivering structured, concept-driven mathematics education aligned with analytical reasoning and real-world problem solving."
    },
    {
        id:3,
        skillsTitle: "Math–Technology Integration",
        skillsImage: "./Assets/mathsTechnologyIntegration.jpeg",
        skillsDescription: "Integrating computational tools with mathematics education to create modern, scalable learning systems."
    },
    {
        id:4,
        skillsTitle: "Music Theory & Piano Foundations",
        skillsImage: "./Assets/musicBasics.jpeg",
        skillsDescription: "Developing foundational musicianship through structured music theory and piano practice, with a focus on harmony, composition, and educational application."
    }
]

categorySkills.forEach(categorySkill=>{
    categorySections.innerHTML+=`
    <div class="category-card">
        <div class="category-title fullStackSkills">
            <h4 class="skillsTitle">${categorySkills.skillsTitle}</h4>
            <img src=${categorySkills.skillsImage} alt="FullStackSoftwareDevelopment Img" class="skillsImg">
        </div>
        <h6 class="category-description">${categorySkills.skillsDescription}</h6>
        <button class="clustersBtn">Skills Clusters</button>
    </div>

`
const fullstackModal=document.querySelector(".fullstackModal")
const categorySectionsCover=document.querySelectorAll(".category-sections-cover");
const backToCategoryBtn=document.querySelector(".backToCategoryBtn");

    clustersBtn.addEventListener("click",(e)=>{
        let id=clustersBtn.dataset.id;

        categorySectionsCover.style.display="none";    
        fullstackModal.style.display="block";
    })

    backToCategoryBtn.addEventListener("click",(e)=>{
        categorySectionsCover.style.display="block";    
        fullstackModal.style.display="none";
    })
})

