let MyResume = (() => {


    let $parentDom = '';
    /* code initialization on load */
    let _init = () => {

        $parentDom = $('#parentDom')
        socialAccShow();
        contactsShow();
        skillShow();
        languageShow();
        tableShow();
        projectShow();
        allListShow(listsdetail);
        imageShow();
        darkModeset();


    }
    let socialAccShow = () => {
        let accHtml = '';
        socialAcc.forEach((item) => {
            accHtml += ` <li class="soft-hobby"><a title=${item.name} class="soft-hobby-a" target="_blank" href=${item.link}><i class="fa ${item.iconClass}"></i>${item.text ? item.text : ""}</a></li>`
        })
        $parentDom.find("#social").append(accHtml)
    }
    let imageShow = () => {
        let imageHtml = '';
        imageBox.forEach((item) => {
            imageHtml = `<img src=${item.image} alt="my image" class="my-image">`

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
                <p class="skill-name">${skill.name}<span class="skill-p">${skill.grade}<span class="percent-sign">%</span></span></p>
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
                <p class="skill-name">${lang.name} <span class="skill-p">${lang.grade}<span class="percent-sign">%</span></span></p>
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

        tableData.forEach((item, index) => {
            item.forEach((elem) => {
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
                                <h4 class="project-head">${elem.project}
                                <a class="project-link" target="_blank" href=${elem.weblink}>
                                                <span class="material-symbols-rounded link-icon project-link-icon">
                                                    ${elem.weblink && "open_in_new"}
                                                </span>
                                            </a></h4>
                                <table class="project-table">
                                    <tr>
                                        <td class="project-table-title">Technologies<span class="semicolan-project">:</span></td>
                                        <td>${elem.Technologies}</td>
                                    </tr>
                                    <tr>
                                        <td class="project-table-title">My role<span class="semicolan-project">:</span></td>
                                        <td>${elem.Myrole}</td>
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
                                        <td colspan="2" class="discription"><span class="project-detail">Discription<span class="semicolan-project-discript">:-</span></span> ${elem.Description}</td>
                                        
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
              <a target="_blank" href=${contact.myLocation}><i class="link-icon icon material-symbols-rounded">${contact.icon}</i></a>
                <span class="contact-name">${contact.name}</span>
            </div>`
        };
        contactsBody.prepend(contactHtml)
    }

    // this function for localstorage setup
    let darkMode = { mode: "" }
    function handleData() {
        changeMode = JSON.parse(localStorage.getItem("mode"))
        if (changeMode == null) {
            localStorage.setItem('mode', JSON.stringify(darkMode))
            changeMode = JSON.parse(localStorage.getItem("mode"))
        }
    }
    function syncDarkMode() {
        localStorage.setItem('mode', JSON.stringify(darkMode))
    }
    handleData()
    // dark mode 

    let mode = changeMode.mode
    let darkSwitch = $("#checking")
    darkSwitch.change(function () {
        let status = darkSwitch.is(":checked")
        if (status) {
            darkMode.mode = "dark"
            syncDarkMode()
            handleData()
            $("#body").addClass("dark");
        } else {
            darkMode.mode = ""
            syncDarkMode()
            handleData()
            $("#body").removeClass("dark");
        }
    })
    function darkModeset() {
        $("#body").toggleClass(mode);
        if ($("#body").hasClass("dark")) {
            darkSwitch.attr("checked", "checked")
        }
    }


    return {
        init: _init
    }
})();

