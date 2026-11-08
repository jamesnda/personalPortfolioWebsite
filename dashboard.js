import { isSupabaseConfigured, supabase } from "./supabaseClient.js";

const audienceProfiles = {
    learner: {
        heading: "Build your skills step by step.",
        description: "Choose guided support in mathematics, data analysis, or web development, at a pace that fits your goals.",
        services: [
            ["Mathematics tutoring", "Clear explanations, guided practice, and exam preparation."],
            ["Data analysis learning", "Build practical skills with Python, R, STATA, Excel, and Power BI."],
            ["Web development learning", "Learn HTML, CSS, and JavaScript by building useful interfaces."]
        ]
    },
    school: {
        heading: "Support learning with mathematics and technology.",
        description: "Explore teaching support, school-focused analysis, and digital tools designed around educational needs.",
        services: [
            ["Mathematics education", "Tutoring, exam preparation, and structured learning resources."],
            ["School data analysis", "Explore attendance, performance, and assessment data to inform decisions."],
            ["Educational technology", "Plan interactive learning tools, dashboards, and digital resources."]
        ]
    },
    data: {
        heading: "Turn your data into useful evidence.",
        description: "Find support for preparing, analyzing, and presenting quantitative or qualitative information.",
        services: [
            ["Quantitative analysis", "Data preparation, statistical analysis, and modeling with Python, R, STATA, or Excel."],
            ["Interactive dashboards", "Present important measures and patterns with Power BI."],
            ["Qualitative research", "Organize and analyze qualitative material with MAXQDA."]
        ]
    },
    software: {
        heading: "Build a useful digital experience.",
        description: "Discuss a website, dashboard, calculator, or interactive tool shaped around a real user need.",
        services: [
            ["Frontend development", "Responsive, accessible interfaces built with HTML, CSS, and JavaScript."],
            ["Interactive tools", "Calculators and focused web applications for practical tasks."],
            ["Dashboard interfaces", "Clear visual interfaces for exploring data and key measures."]
        ]
    },
    partner: {
        heading: "Create stronger learning and research together.",
        description: "Connect on teaching, educational technology, data research, and collaborative digital projects.",
        services: [
            ["Teaching collaboration", "Develop clear lessons, practice materials, and learning resources."],
            ["Research collaboration", "Contribute mathematical and analytical thinking to research workflows."],
            ["Digital project partnership", "Shape education-focused tools from an initial idea to a working interface."]
        ]
    }
};

const projects = [
    {
        title: "M-TECH School",
        category: "web",
        image: "./Assets/mtechSchImg.png",
        alt: "M-TECH School learning platform",
        summary: "A learning platform for practical mathematics, data analysis, and software development.",
        tools: ["HTML", "CSS", "JavaScript"],
        demo: "https://jamesnda.github.io/webschoolProject/"
    },
    {
        title: "MCC-Initiative",
        category: "web",
        image: "./Assets/MathAndTechforTomorrow.png",
        alt: "Math, coding, and creativity initiative",
        summary: "A youth-focused initiative connecting mathematics, programming, and technology-driven learning.",
        tools: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Smart Calculator",
        category: "web",
        image: "./Assets/smartCalc.png",
        alt: "Smart Calculator application",
        summary: "An interactive application with mathematical, loan, BMI, and currency conversion tools.",
        tools: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "AfriCare Health Solutions",
        category: "data",
        image: "./Assets/AfriCareMedicalCostStudyDashboard.png",
        alt: "AfriCare Health Solutions analysis dashboard",
        summary: "A health data study using data preparation, statistical analysis, regression, and dashboards.",
        tools: ["R", "Python", "STATA", "Power BI"]
    },
    {
        title: "Influencers High School Analysis",
        category: "data",
        image: "./Assets/influencersDashboard.png",
        alt: "Influencers High School analysis dashboard",
        summary: "An educational data analysis project exploring school performance and improvement insights.",
        tools: ["Excel", "Python", "STATA", "Power BI"]
    }
];

const audienceTitle = document.querySelector("#audienceTitle");
const audienceDescription = document.querySelector("#audienceDescription");
const audienceServices = document.querySelector("#audienceServices");
const authGate = document.querySelector("#authGate");
const mainContent = document.querySelector("#mainContent");
const accountName = document.querySelector("#accountName");
const audienceLabel = document.querySelector("#audienceLabel");
const signOutButton = document.querySelector("#signOutButton");
const projectGrid = document.querySelector("#projectGrid");
const projectSearch = document.querySelector("#projectSearch");
const projectCount = document.querySelector("#projectCount");
const emptyState = document.querySelector("#emptyState");
const filterButtons = document.querySelectorAll("[data-filter]");

let activeFilter = "all";

function renderAudience(profileId) {
    const profile = audienceProfiles[profileId] ?? audienceProfiles.learner;
    audienceTitle.textContent = profile.heading;
    audienceDescription.textContent = profile.description;
    audienceServices.innerHTML = profile.services.map(([title, description], index) => `
        <article class="service-item">
            <span class="service-index">0${index + 1} / SERVICE</span>
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="./index.html#contactSectionId">Discuss this service <span aria-hidden="true">↗</span></a>
        </article>
    `).join("");
}

function renderProjects() {
    const query = projectSearch.value.trim().toLowerCase();
    const visibleProjects = projects.filter(project => {
        const matchesFilter = activeFilter === "all" || project.category === activeFilter;
        const searchableText = `${project.title} ${project.summary} ${project.tools.join(" ")}`.toLowerCase();
        return matchesFilter && searchableText.includes(query);
    });

    projectGrid.innerHTML = visibleProjects.map(project => `
        <article class="project-card">
            <img src="${project.image}" alt="${project.alt}" loading="lazy">
            <div class="project-info">
                <p class="project-category">${project.category === "data" ? "Data analysis" : "Web development"}</p>
                <h3>${project.title}</h3>
                <p>${project.summary}</p>
                <ul class="project-tools">
                    ${project.tools.map(tool => `<li>${tool}</li>`).join("")}
                </ul>
                ${project.demo ? `<a class="project-demo" href="${project.demo}" target="_blank" rel="noopener noreferrer">Open live project <span aria-hidden="true">↗</span></a>` : ""}
            </div>
        </article>
    `).join("");

    projectCount.textContent = `Showing ${visibleProjects.length} of ${projects.length} selected projects`;
    emptyState.hidden = visibleProjects.length > 0;
}

projectSearch.addEventListener("input", renderProjects);

document.querySelector(".filter-group").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    activeFilter = button.dataset.filter;
    filterButtons.forEach(filterButton => {
        filterButton.setAttribute("aria-pressed", String(filterButton === button));
    });
    renderProjects();
});

document.querySelectorAll(".rail-link").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll(".rail-link").forEach(item => {
            item.classList.remove("is-current");
            item.removeAttribute("aria-current");
        });
        link.classList.add("is-current");
        link.setAttribute("aria-current", "location");
    });
});

async function initializeDashboard() {
    if (!isSupabaseConfigured) {
        authGate.innerHTML = 'Sign-in is not configured yet. <a href="./index.html#loginId">Return to sign in</a>.';
        return;
    }

    const { data: userData, error: userError } = await supabase.auth.getUser();
    const user = userData?.user;
    if (userError || !user) {
        authGate.innerHTML = 'Please sign in to continue. <a href="./index.html#loginId">Go to sign in</a>.';
        return;
    }

    const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("full_name, audience")
        .eq("id", user.id)
        .single();

    if (profileError || !audienceProfiles[profile?.audience]) {
        authGate.innerHTML = 'We could not load your account profile. Please contact support or <a href="./index.html#loginId">return to sign in</a>.';
        return;
    }

    accountName.textContent = profile.full_name || user.email;
    audienceLabel.textContent = {
        learner: "Student or learner",
        school: "School or education team",
        data: "Data analysis client",
        software: "Software client",
        partner: "Teaching or project partner"
    }[profile.audience];

    renderAudience(profile.audience);
    renderProjects();
    authGate.hidden = true;
    mainContent.hidden = false;
}

signOutButton.addEventListener("click", async () => {
    signOutButton.disabled = true;
    const { error } = await supabase.auth.signOut();
    if (error) {
        signOutButton.disabled = false;
        return;
    }
    window.location.replace("./index.html#loginId");
});

initializeDashboard().catch(() => {
    authGate.innerHTML = 'We could not verify your account. Please <a href="./index.html#loginId">sign in again</a>.';
});