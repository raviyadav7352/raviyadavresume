let MyResume = (() => {

    let imageBox = [{ image: "images/raviimg.jpg" }]
    let contacts = {
        // positon: { name: "Frontend Developer", icon: "work", myLocation: "#" },
        location: { name: "Urrapakkam, Chennai", icon: "home", myLocation: "https://goo.gl/maps/cMVmasK8YWGSVh2A8" },
        emailid: { name: "ravi943117@gmail.com", icon: "email", myLocation: "mailto:ravi943117@gmail.com" },
        mobile: { name: "+91 7352746905", icon: "phone", myLocation: "tel:7352746905" }
    }
    let skills = {
        skill1: { name: "ReactJs", grade: 70 },
        skill2: { name: "JavaScript", grade: 80 },
        skill3: { name: "HTML5", grade: 80 },
        skill4: { name: "CSS", grade: 70 },
        skill5: { name: "Jquery", grade: 60 },
        skill6: { name: "BootStrap", grade: 70 },
        skill7: { name: "Maerialise CSS", grade: 70 },
        skill8: { name: "C programming", grade: 70 },
        skill9: { name: "Git", grade: 60 }
    }
    let languages = {
        language1: { name: "English", grade: 70 },
        language2: { name: "Hindi", grade: 80 }
    }
    let tableData = [
        ["Courses", "College", "University", "Percentage", "year"],
        ["B.Tech(EE)", "JECRC, Jaipur", "RTU, Kota", "82.4", "2022"],
        ["H.S.C", "RLSY, Koderma", "JAC, Ranchi", "66.8", "2017"],
        ["S.S.C", "KRSVM, Koderma", "CBSE", "72.2", "2015"]
    ]

    let project = [
        {
            project: "Wedding Decor Web-Application",
            Technologies: "ReactJS, HTML5, CSS3, Bootstrap",
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
    ]
    let traning = [
        "Completed 30 days of training on Python programming from Uflairs Pvt Ltd",
        "Completed course on React-The Complete Guide (hooks, React Router, Redux) from Udemy"
    ]
    let curricular = [
        "Participated in the “Flip the Script Challenges” organized by EPAM system, Inc.",
        "Successfully Coordinated in Hardware Assemble Competition.",
        "Participated in J-Techtrix 4.0 “project-making competition” .",
        "Attended a Webinar titled Opportunities in Solar conducted by TATA Power Skill development institute."
    ]

    let SoftSkills = ["Creativity", "Collaboration", "Active Listening", " Good communication"];

    let hobies = ["Sketching", "Learning new skills", "Exploring web"]
    let personel = ["<b>DOB</b>: 5th Feb 1999", "<b>Address</b>: Hazaribagh Jharkhand 825409"]
    let details = ["Ravi Kumar Yadav", "Chennai"]
    let listsdetail = [
        [traning, "training"], [curricular, "curriculars"],
        [SoftSkills, "SoftSkills"], [hobies, "hobbies"],
        [personel, "personel"], [details, "detail"]
    ]
    let $parentDom = '';
    /* code initialization on load */
    let _init = () => {
        $parentDom = $('#parentDom')
        contactsShow();
        skillShow();
        languageShow();
        tableShow();
        projectShow();
        allListShow(listsdetail);
        imageShow();

    }
    let imageShow = () => {
        let imageHtml = '';
        imageBox.forEach((item) => {
            imageHtml = `<img src=${item.image} alt="my image" class="my-image">
                        `
        })
        $parentDom.find("#imagebox").append(imageHtml)
    }

    let skillShow = () => {
        let skillBody = $parentDom.find("#skills");
        let skillHtml = '';
        for (let key in skills) {
            let skill = skills[key]
            skillHtml += `
            <div class="skill">
                <p class="skill-name">${skill.name}</p>
                <div class="progress positon-rel ">
                <div class="fillbar" style="width:${skill.grade}%;"></div></div>
            </div>`

        }
        skillBody.append(skillHtml)
    }

    let languageShow = () => {
        let langBody = $("#languages")
        let langHtml = '';
        for (let key in languages) {
            let lang = languages[key]
            langHtml += `
            <div class="language">
                <p class="language name">${lang.name}</p>
                <div class="progress positon-rel">
                <div class="fillbar" style="width:${lang.grade}%;"></div></div>
            </div>`

        }
        langBody.append(langHtml)
    }

    let tableShow = () => {

        let tableRowRap = ''
        let tableHeadHtml = '';
        let tableRowRap1 = '';
        let tableDiscHtml = '';

        tableData.forEach((item) => {
            item.forEach((elem, index) => {
                if (index == 0) {
                    tableHeadHtml += `<th class="acad-table-head">${elem}</th>`
                }
                if (index > 0) {
                    tableDiscHtml += `<td class="acad-table-data">${elem}</td>`
                }
            })
            tableRowRap1 += `<tr>${tableDiscHtml}</tr>`
            tableDiscHtml = '';
        })
        tableRowRap += `<tr>${tableHeadHtml}</tr>`
        $parentDom.find("#academic-table").append(tableRowRap, tableRowRap1)
    }
    let projectShow = () => {
        let projectHtml = '';
        project.forEach((elem) => {

            projectHtml += `<li class="project1">
                                <h4 class="project-head">${elem.project}</h4>
                                <table class="project-table">
                                    <tr>
                                        <td class="project-table-title">Technologies<span class="semicolan-project">:</span></td>
                                        <td>${elem.Technologies}</td>
                                    </tr>
                                    <tr>
                                        <td class="project-table-title">Database<span class="semicolan-project">:</span></td>
                                        <td>${elem.Database}</td>
                                    </tr>
                                    <tr>
                                        <td class="project-table-title">Server <span class="semicolan-project">:</span></td>
                                        <td>${elem.Server}</td>
                                    </tr>
                                    <tr>
                                        <td class="project-table-title project-discription">Description <span class="semicolan-project">:</span></td>
                                        <td>${elem.Description}
                                            <a target="_blank" href=${elem.weblink}>
                                                <span class="material-symbols-rounded link-icon">
                                                    ${elem.weblink && "open_in_new"}
                                                </span>
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </li>`

        })
        $parentDom.find("#project").html(projectHtml)
    }

    let listShow = (data, id) => {
        let html = '';
        data.forEach((item) => {
            html += `<li class="curricular">${item}</li>`
        })
        $parentDom.find(`#${id}`).html(html)
    }
    let allListShow = (listdata) => {
        listdata.forEach((item) => {
            listShow(item[0], item[1])
        })


    }
    let contactsShow = () => {
        let contactsBody = $("#contacts")
        let contactHtml = '';
        for (let key in contacts) {
            let contact = contacts[key]
            contactHtml += `
            <div class="contact d-flex gap10 align-center">    
              <a target="_blank" href=${contact.myLocation}><i class="icon material-symbols-rounded">${contact.icon}</i></a>
                <span class="contact-name">${contact.name}</span>
            </div>`

        };
        contactsBody.html(contactHtml)
    }

    return {
        init: _init
    }
})();

