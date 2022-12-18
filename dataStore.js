let dataStore = {
    imageBox:[{ image: "images/raviimg.jpg" }],
    contacts:{
        // positon: { name: "Frontend Developer", icon: "work", myLocation: "#" },
        location: { name: "Urrapakkam, Chennai", icon: "home_pin", myLocation: "https://goo.gl/maps/cMVmasK8YWGSVh2A8" },
        emailid: { name: "ravi943117@gmail.com", icon: "forward_to_inbox", myLocation: "mailto:ravi943117@gmail.com" },
        mobile: { name: "+91 7352746905", icon: "phone_in_talk", myLocation: "tel:7352746905" }
    },
    socialAcc:[
        { name: "LinkedIn", link: "https://www.linkedin.com/mwlite/in/ravi-kumar-yadav-05032120a", iconClass: "fa-linkedin" },
        { name: "GitHub", link: "https://github.com/raviyadav7352", iconClass: "fa-github" },
        { name: "Projects", text: `<b class="project-icon-text">P</b>`, link: "https://raviyadav7352.github.io/wall-clock", iconClass: "fa-file" }
    ],
    skills:{
        skill1: { name: "ReactJs", grade: 70 },
        skill2: { name: "JavaScript", grade: 80 },
        skill3: { name: "HTML5", grade: 80 },
        skill4: { name: "CSS", grade: 70 },
        skill5: { name: "Jquery", grade: 60 },
        skill6: { name: "BootStrap", grade: 70 },
        skill7: { name: "Maerialise CSS", grade: 70 },
        skill8: { name: "C programming", grade: 70 },
        skill9: { name: "Git", grade: 70 }
    },
    languages:{
        language1: { name: "English", grade: 70 },
        language2: { name: "Hindi", grade: 80 }
    },
    tableData:[
        ["Courses", "College", "University", "Percentage", "Year"],
        ["B.Tech(EE)", "JECRC, Jaipur", "RTU, Kota", "82.4", "2022"],
        ["H.S.C", "RLSY, Koderma", "JAC, Ranchi", "66.8", "2017"],
        ["S.S.C", "KRSVM, Koderma", "CBSE", "72.2", "2015"]
    ],
    project:[
        {
            project: "Wedding Decor Web-Application",
            Technologies: "ReactJS, HTML5, CSS3, Bootstrap",
            Myrole: "frontend development, api handle",
            Database: "Google Firebase",
            Server: "NodeJS",
            weblink: "https://raviyadav7352.github.io/wedding-app",
            Description: `This is ReactJS web application which is an online platform to
                            discover,design & purchase, all wedding related services & products This is a 
                            convenient one stop-destination for all wedding related requirements. In this, we   
                            use Google Firebase for database.`
        },
        {
            project: "School System",
            Technologies: "JavaScript, HTML5 , CSS3",
            Myrole: "data collection, frontend development, api handle",
            Database: "MySQL",
            Server: "NodeJS , ExpressJs",
            weblink: '',
            Description: `The main purpose for developing this project was to create a
                            website for the School, from which user can get the details of the school, such as
                            about the school, contact details, address, images etc. School management can 
                            post announcement for event and result of internal examination. There is option
                            to see and update school faculty details and their classes timing. Student can
                            register detail in student portal.`
    
        }
    ],

}

let extraActivity = {
    traning:[
        "Completed 30 days of training on Python programming from <b>Uflairs Pvt Ltd</b>",
        "Completed course on React-The Complete Guide (hooks, React Router, Redux) from <b>Udemy</b>"
    ],
    curricular:[
        "Participated in the “Flip the Script Challenges” organized by EPAM system, Inc.",
    "Successfully Coordinated in Hardware Assemble Competition.",
    "Participated in J-Techtrix 4.0 “project-making competition” .",
    "Attended a Webinar titled Opportunities in Solar conducted by TATA Power Skill development institute."
    ],
    SoftSkills:["Creativity", "Collaboration", "Active Listening", " Good communication"],
    hobies:["Sketching", "Learning new skills", "Exploring web"],
    personel:["<b>DOB</b>: 5th Feb 1999", "<b>Address</b>: Hazaribagh Jharkhand 825409"],
    details:["Ravi Kumar Yadav", "Chennai"],
}

let listsdetail = [
    [extraActivity.traning, "training"], 
    [extraActivity.curricular, "curriculars"],
    [extraActivity.SoftSkills, "SoftSkills"], 
    [extraActivity.hobies, "hobbies"],
    [extraActivity.SoftSkills, "SoftSkills-big"],
    [extraActivity.hobies, "hobbies-big"],
    [extraActivity.personel, "personel"],
    [extraActivity.details, "detail"],
]