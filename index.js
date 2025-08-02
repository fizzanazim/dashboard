

        let hamburgerIcon = document.getElementById("hamburger-icon")
        let Logo = document.getElementById("logo")
        let solidBarsIcon = document.getElementById("solid-bars-icon")
        let xIcon = document.getElementById("x-icon")
        let sideMenu = document.getElementById("side-menu")
        let sideMenuOnClick = document.getElementById("side-menu-onclick")
        let giftBoxBlock = document.getElementById("gift-box-block")
        let giftBoxNotif = document.getElementById("gift-box-notif")
        let giftBoxNotificationDiv = document.getElementById("gift-box-notification-div")
        let toAccessSubmenu = document.querySelectorAll(".to-access-submenu")
        let accessingSubMenus = document.querySelectorAll(".accessing-sub-menus")
        let middleContainerCircles = document.querySelectorAll(".circles")
        let technicalContainerAnimation = document.getElementById("technical-container-animation")
        let totalSlides = document.querySelectorAll(".technical-containers-slides")
        let animationArrowLeft = document.getElementById("animation-arrow-left")
        let animationArrowRight = document.getElementById("animation-arrow-right")
        let dashboardSettingsIcon = document.getElementById("dashboard-settings-icon")

        function accessingSubMenusFunc() {

            accessingSubMenus.forEach((e, i) => {

                e.style.display = "none"

            })

        }

        let bool = true
        let temp

        let dashboardHeroSection = document.getElementById("dashboard-hero-section")

        solidBarsIcon.addEventListener("click", () => {

            bool = false

            Logo.style.display = "none"
            solidBarsIcon.style.display = "none"
            xIcon.style.display = "block"
            sideMenu.style.display = "none"
            sideMenuOnClick.style.display = "block"
            dashboardHeroSection.style.marginLeft = "80px"
            dashboardHeroSection.style.width = "95%"

        })

        xIcon.addEventListener("click", () => {

            bool = true

            Logo.style.display = "block"
            solidBarsIcon.style.display = "block"
            xIcon.style.display = "none"
            sideMenu.style.display = "block"
            sideMenuOnClick.style.display = "none"
            dashboardHeroSection.style.width = "81.5%"
            dashboardHeroSection.style.marginLeft = "18.5%"

        })

        sideMenuOnClick.addEventListener("mouseenter", () => {

            sideMenu.style.display = "block"
            sideMenuOnClick.style.display = "none"
            sideMenuOnClick.style.transition = "0.4s"

        })

        sideMenu.addEventListener("mouseleave", () => {

            if (bool == false) {

                sideMenu.style.display = "none"
                sideMenuOnClick.style.display = "block"
                sideMenuOnClick.style.transition = "0.4s"

            }

        })

        giftBoxBlock.addEventListener("click", () => {

            accessingSubMenusFunc()

            let giftBoxNotif = document.createElement("div")
            giftBoxNotif.setAttribute("id", "gift-box-notif")
            giftBoxNotif.innerHTML = `<div id="gift-animation-bar"></div>
            <div id="i-icon">
                <i class="fa-solid fa-circle-exclamation"></i>
            </div>
            <div id="gift-box-content">
                <h2 id="gift-box-content-h2">Example Toaster</h2>
                <p id="gift-box-content-p">You didn't have any new items in your list today</p>
            </div>`
            giftBoxNotificationDiv.append(giftBoxNotif)

            setTimeout(() => {

                giftBoxNotif.style.display = "none"
                giftBoxNotif.style.transition = "1s"

            }, 5000)

        })

        toAccessSubmenu.forEach((element, index) => {

            element.addEventListener("click", () => {
                if (accessingSubMenus[index].style.display == "block") {

                    accessingSubMenusFunc()

                }
                else {

                    accessingSubMenusFunc()
                    accessingSubMenus[index].style.display = "block"

                }

            })

        })

        let dashboardMainPage = document.getElementById("dashboard-main-page")

        dashboardMainPage.addEventListener("click", () => {

            accessingSubMenusFunc()

        })

        let activeSlide = 0

        function middleContainerCirclesfunc() {

            middleContainerCircles.forEach(e => {

                e.style.width = "12px"
                e.style.height = "12px"
                e.style.border = "3px solid #3F6AD8"

            });

        }

        function CirclesChangefunc(a) {

            middleContainerCircles[a].style.width = "17px"
            middleContainerCircles[a].style.height = "17px"
            middleContainerCircles[a].style.border = "4px solid #3F6AD8"

        }

        animationArrowRight.addEventListener("click", () => {

            activeSlide++;

            if (activeSlide > totalSlides.length - 1) {

                activeSlide = 0

            }

            technicalContainerAnimation.style.marginLeft = `-${activeSlide * 100}%`
            middleContainerCirclesfunc()
            CirclesChangefunc(activeSlide)

        })

        animationArrowLeft.addEventListener("click", () => {

            activeSlide--;

            if (activeSlide < 0) {

                activeSlide = totalSlides.length - 1

            }

            technicalContainerAnimation.style.marginLeft = `-${activeSlide * 100}%`
            middleContainerCirclesfunc()
            CirclesChangefunc(activeSlide)

        })

        middleContainerCircles.forEach((element, index) => {

            element.addEventListener("click", () => {

                middleContainerCirclesfunc()

                element.style.width = "17px"
                element.style.height = "17px"
                element.style.border = "4px solid #3F6AD8"

                technicalContainerAnimation.style.marginLeft = `-${index * 100}%`

                activeSlide = index


            })

        });

        let sideSubMenusMain = document.querySelectorAll(".side-sub-menus-main")
        let sideSubSubMenu = document.querySelectorAll(".side-sub-sub-menu")
        let angleDownOnClick = document.querySelectorAll(".angle-down-on-click")

        function closingsideSubSubMenu() {

            sideSubSubMenu.forEach(e => {

                e.style.display = "none"

            });

        }

        function rotatedownarrowfunc() {

            angleDownOnClick.forEach(e => {

                e.style.transform = "rotate(0deg)"

            });

        }

        sideSubMenusMain.forEach((element, index) => {

            element.addEventListener("click", () => {

                if ((sideSubSubMenu[index].style.display == "flex") && (angleDownOnClick[index].style.transform == "rotate(180deg)")) {

                    closingsideSubSubMenu()
                    rotatedownarrowfunc()

                }
                else {

                    closingsideSubSubMenu()
                    rotatedownarrowfunc()
                    sideSubSubMenu[index].style.display = "flex"
                    angleDownOnClick[index].style.transform = "rotate(180deg)"

                }

            })

        });

        let tasksDiv = document.querySelectorAll(".tasks-div")
        let tasksDivJS = document.querySelectorAll(".tasks-div-js")
        let taskOptionsMouseEnter = document.querySelectorAll(".task-options-mouse-enter")

        let temporary = 0;

        tasksDiv.forEach((ele, ind) => {

            ele.addEventListener("mouseenter", () => {

                temporary = ind;

            })

        });

        tasksDivJS.forEach((elements, index) => {

            elements.addEventListener("mouseenter", () => {

                taskOptionsMouseEnter[index].style.display = "flex"

            })

            elements.addEventListener("mouseleave", () => {

                taskOptionsMouseEnter.forEach((e, i) => {

                    e.style.display = "none"

                })

            })

        })

        let trashIcon = document.querySelectorAll(".trash-icon")

        trashIcon.forEach((ele, i) => {

            ele.addEventListener("mouseenter", () => {

                ele.style.backgroundColor = "#DD3A61"
                ele.style.color = "#ffffff"

            })

            ele.addEventListener("mouseleave", () => {

                ele.style.backgroundColor = "white"
                ele.style.color = "#DD3A61"

            })

            ele.addEventListener("click", () => {

                tasksDiv[temporary].style.display = "none"

            })

        });

        let tickIcon = document.querySelectorAll(".tick-icon")

        tickIcon.forEach((ele, i) => {

            ele.addEventListener("mouseenter", () => {

                ele.style.color = "white"
                ele.style.backgroundColor = "#3AC47D"

            })

            ele.addEventListener("mouseleave", () => {

                ele.style.color = "#3AC47D"
                ele.style.backgroundColor = "white"

            })

            ele.addEventListener("click", () => {

                ele.style.backgroundColor = "orange"

            })

        });

        let dashboardSettingsSlide = document.getElementById("dashboard-settings-slide")
        let temp2 = true

        dashboardSettingsIcon.addEventListener("click", () => {

            accessingSubMenusFunc()

            if (temp2 == true) {
                dashboardSettingsSlide.style.display = "block"
                dashboardSettingsIcon.style.right = "34%"
                temp2 = false

            }
            else if (temp2 == false) {

                dashboardSettingsSlide.style.display = "none"
                dashboardSettingsIcon.style.right = "0px"
                temp2 = true

            }

        })

        let fixedSettingsToggleContainer1 = document.getElementById("fixed-settings-toggle-container-1")
        let fixedSettingsToggleContainer2 = document.getElementById("fixed-settings-toggle-container-2")
        let fixedSettingsToggleContainer3 = document.getElementById("fixed-settings-toggle-container-3")

        let dashboardNavBar = document.getElementById("dashboard-nav-bar")
        let nonFixedHeader = document.getElementById("non-fixed-header")
        let navBarLeft = document.getElementById("nav-bar-left")
        let searchAndMenu = document.getElementById("search-and-menu")

        fixedSettingsToggleContainer1.addEventListener("click", () => {

            if (fixedSettingsToggleContainer1.style.marginLeft == "0px") {

                fixedSettingsToggleContainer1.style.marginLeft = "-100%"
                Logo.style.display = "none"
                hamburgerIcon.style.display = "none"
                searchAndMenu.style.marginLeft = "30%"
                dashboardNavBar.style.position = "relative"
                dashboardMainPage.style.marginTop = "0px"
                nonFixedHeader.style.display = "flex"
                sideMenu.style.marginTop = "-70px"

                if (fixedSettingsToggleContainer2.style.marginLeft == "-100%") {

                    dashboardMainPage.style.marginTop = "-70px"
                    sideMenu.style.marginTop = "0px"

                }

            }
            else {

                fixedSettingsToggleContainer1.style.marginLeft = "0px"
                dashboardMainPage.style.marginTop = "70px"
                nonFixedHeader.style.display = "none"
                Logo.style.display = "block"
                hamburgerIcon.style.display = "block"
                dashboardNavBar.style.position = "fixed"
                sideMenu.style.marginTop = "0px"
                searchAndMenu.style.marginLeft = "0px"
                dashboardHeroSection.style.marginTop = "0px"

            }

        })

        fixedSettingsToggleContainer2.addEventListener("click", () => {

            if (fixedSettingsToggleContainer2.style.marginLeft == "0px") {

                fixedSettingsToggleContainer2.style.marginLeft = "-100%"
                sideMenu.style.position = "relative"
                sideMenu.style.height = "initial"
                dashboardHeroSection.style.marginLeft = "0px"
                dashboardMainPage.style.height = "700px"
                if (fixedSettingsToggleContainer1.style.marginLeft == "-100%") {

                    dashboardMainPage.style.marginTop = "-70px"
                    sideMenu.style.marginTop = "0px"
                    dashboardHeroSection.style.marginTop = "70px"

                }

            }
            else {

                fixedSettingsToggleContainer2.style.marginLeft = "0px"
                sideMenu.style.position = "fixed"
                sideMenu.style.height = "632px"
                // sideMenu.style.overflow = "scroll"
                dashboardHeroSection.style.marginLeft = "18.5%"
                // dashboardHeroSection.style.marginTop = "0px"

            }


        })

        let dashboardFooter = document.getElementById("dashboard-footer")
        let orderSection = document.getElementById("order-section")

        fixedSettingsToggleContainer3.addEventListener("click", () => {

            if (fixedSettingsToggleContainer3.style.marginLeft == "-100%") {

                fixedSettingsToggleContainer3.style.marginLeft = "0"
                dashboardFooter.style.position = "fixed"
                dashboardFooter.style.bottom = "0px"
                orderSection.style.marginBottom = "30px"


            }
            else {

                fixedSettingsToggleContainer3.style.marginLeft = "-100%"
                dashboardFooter.style.position = "relative"
                orderSection.style.marginBottom = "0px"

            }


        })

        let colorDiv = document.querySelectorAll(".color-div")

        colorDiv.forEach((element, index) => {

            element.addEventListener("click", () => {

                dashboardNavBar.style.background = element.style.background

            })

        });

        let defaultRestoreBtn1 = document.getElementById("default-restore-btn1")


        defaultRestoreBtn1.addEventListener("click", () => {

            dashboardNavBar.style.background = "white"

        })

        let sideBarColorDiv = document.querySelectorAll(".side-bar-color-div")

        sideBarColorDiv.forEach((element, index) => {

            element.addEventListener("click", () => {

                sideMenu.style.background = element.style.background

            })

        });

        let defaultRestoreBtn2 = document.getElementById("default-restore-btn2")

        defaultRestoreBtn2.addEventListener("click", () => {

            sideMenu.style.background = "white"

        })

        let whiteThemeButton = document.getElementById("white-theme-button")
        let greyThemeButton = document.getElementById("grey-theme-button")
        let dashboardHeroSectionBody = document.getElementById("dashboard-hero-section-body")

        whiteThemeButton.addEventListener("mouseenter", () => {

            whiteThemeButton.style.backgroundColor = "#545B62"

        })

        whiteThemeButton.addEventListener("mouseleave", () => {

            if (dashboardMainPage.style.backgroundColor != "white") {

                whiteThemeButton.style.backgroundColor = "#6C757D"

            }

        })

        whiteThemeButton.addEventListener("click", () => {

            dashboardMainPage.style.backgroundColor = "white"
            dashboardHeroSection.style.backgroundColor = "white"
            dashboardHeroSectionBody.style.backgroundColor = "white"
            whiteThemeButton.style.backgroundColor = "#545B62"
            greyThemeButton.style.backgroundColor = "#6C757D"

        })

        greyThemeButton.addEventListener("mouseenter", () => {

            greyThemeButton.style.backgroundColor = "#545B62"

        })

        greyThemeButton.addEventListener("mouseleave", () => {

            if (dashboardMainPage.style.backgroundColor != "rgb(235, 238, 240)") {

                greyThemeButton.style.backgroundColor = "#6C757D"

            }

        })

        greyThemeButton.addEventListener("click", () => {

            dashboardMainPage.style.backgroundColor = "rgb(235, 238, 240)"
            dashboardHeroSection.style.backgroundColor = "rgb(235, 238, 240)"
            dashboardHeroSectionBody.style.backgroundColor = "rgb(235, 238, 240)"
            greyThemeButton.style.backgroundColor = "#545B62"
            whiteThemeButton.style.backgroundColor = "#6C757D"

        })


        let tBody = document.querySelector('tbody')
        let searchInput = document.querySelector('#table-search-bar-div')

        let startItemForTable = document.querySelector('#startItemForTable')
        let endItemForTable = document.querySelector('#endItemForTable')
        let totalItemsForTable = document.querySelector('#totalItemsForTable')
        let previousBtn = document.getElementById("previous-btn")
        let nextBtn = document.getElementById("next-btn")
        
        let buttonList = document.querySelector('.button-list')

        let dataForTable = [
            {

                name: "Airi Satou",
                position: "Accountant",
                office: "Tokyo",
                age: "33",
                startDate: "2019/10/09",
                salary: "$56444"

            },

            {

                name: "Garrett Winters",
                position: "Accountant",
                office: "New York",
                age: "43",
                startDate: "2025/01/01",
                salary: "$56444"

            },

            {
                name: "Angelica Ramos",
                position: "Chief Executive Officer (CEO)",
                office: "Tokyo",
                age: "45",
                startDate: "2024/10/09",
                salary: "$162,700"
            },

            {

                name: "Paul Byrd",
                position: "Chief Executive Officer (CEO)",
                office: "New York",
                age: "43",
                startDate: "2012/10/09",
                salary: "$192,700"

            },

            {

                name: "Yuri Berry",
                position: "Chief Marketing Officer (CMO)",
                office: "New York",
                age: "33",
                startDate: "2019/10/10",
                salary: "$102,700"

            },
            
            {

                name: "Fiona Green",
                position: "Chief Operating Officer (COO)",
                office: "San Francisco",
                age: "35",
                startDate: "2019/10/09",
                salary: "$192,432"

            },

            {

                name: "Donna Snider",
                position: "Customer Support",
                office: "Singapore",
                age: "55",
                startDate: "2009/10/09",
                salary: "$143,900"

            },

            {

                name: "Yuri Berry",
                position: "Chief Marketing Officer (CMO)",
                office: "New York",
                age: "33",
                startDate: "2019/10/10",
                salary: "$102,700"

            },
            {

                name: "Serge Baldwin",
                position: "Developer",
                office: "San Francisco",
                age: "43",
                startDate: "2011/07/25",
                salary: "$292,700"

            },

            {

                name: "Donna Snider",
                position: "Customer Support",
                office: "Singapore",
                age: "55",
                startDate: "2009/10/09",
                salary: "$143,900"

            },

            {

                name: "Serge Baldwin",
                position: "Developer",
                office: "San Francisco",
                age: "43",
                startDate: "2011/07/25",
                salary: "$292,700"

            },

            {

                name: "Gavin Joyce",
                position: "Data Coordinator",
                office: "Singapore",
                age: "54",
                startDate: "2008/11/28",
                salary: "$200,700"

            },
            {

                name: "Airi Satou",
                position: "Accountant",
                office: "Tokyo",
                age: "33",
                startDate: "2019/10/09",
                salary: "$56444"

            },

            {

                name: "Garrett Winters",
                position: "Accountant",
                office: "New York",
                age: "43",
                startDate: "2025/01/01",
                salary: "$56444"

            },

            {
                name: "Angelica Ramos",
                position: "Chief Executive Officer (CEO)",
                office: "Tokyo",
                age: "45",
                startDate: "2024/10/09",
                salary: "$162,700"
            },

            {

                name: "Paul Byrd",
                position: "Chief Executive Officer (CEO)",
                office: "New York",
                age: "43",
                startDate: "2012/10/09",
                salary: "$192,700"

            },

            {

                name: "Yuri Berry",
                position: "Chief Marketing Officer (CMO)",
                office: "New York",
                age: "33",
                startDate: "2019/10/10",
                salary: "$102,700"

            },
            
            {

                name: "Fiona Green",
                position: "Chief Operating Officer (COO)",
                office: "San Francisco",
                age: "35",
                startDate: "2019/10/09",
                salary: "$192,432"

            },

            {

                name: "Donna Snider",
                position: "Customer Support",
                office: "Singapore",
                age: "55",
                startDate: "2009/10/09",
                salary: "$143,900"

            },

            {

                name: "Yuri Berry",
                position: "Chief Marketing Officer (CMO)",
                office: "New York",
                age: "33",
                startDate: "2019/10/10",
                salary: "$102,700"

            },
            {

                name: "Serge Baldwin",
                position: "Developer",
                office: "San Francisco",
                age: "43",
                startDate: "2011/07/25",
                salary: "$292,700"

            },

            {

                name: "Donna Snider",
                position: "Customer Support",
                office: "Singapore",
                age: "55",
                startDate: "2009/10/09",
                salary: "$143,900"

            },

            {

                name: "Serge Baldwin",
                position: "Developer",
                office: "San Francisco",
                age: "43",
                startDate: "2011/07/25",
                salary: "$292,700"

            },
            {

                name: "Airi Satou",
                position: "Accountant",
                office: "Tokyo",
                age: "33",
                startDate: "2019/10/09",
                salary: "$56444"

            },

            {

                name: "Garrett Winters",
                position: "Accountant",
                office: "New York",
                age: "43",
                startDate: "2025/01/01",
                salary: "$56444"

            },

            {
                name: "Angelica Ramos",
                position: "Chief Executive Officer (CEO)",
                office: "Tokyo",
                age: "45",
                startDate: "2024/10/09",
                salary: "$162,700"
            },

            {

                name: "Paul Byrd",
                position: "Chief Executive Officer (CEO)",
                office: "New York",
                age: "43",
                startDate: "2012/10/09",
                salary: "$192,700"

            },

            {

                name: "Yuri Berry",
                position: "Chief Marketing Officer (CMO)",
                office: "New York",
                age: "33",
                startDate: "2019/10/10",
                salary: "$102,700"

            },
            
            {

                name: "Fiona Green",
                position: "Chief Operating Officer (COO)",
                office: "San Francisco",
                age: "35",
                startDate: "2019/10/09",
                salary: "$192,432"

            },

            {

                name: "Donna Snider",
                position: "Customer Support",
                office: "Singapore",
                age: "55",
                startDate: "2009/10/09",
                salary: "$143,900"

            },

            {

                name: "Yuri Berry",
                position: "Chief Marketing Officer (CMO)",
                office: "New York",
                age: "33",
                startDate: "2019/10/10",
                salary: "$102,700"

            },
            {

                name: "Serge Baldwin",
                position: "Developer",
                office: "San Francisco",
                age: "43",
                startDate: "2011/07/25",
                salary: "$292,700"

            },

            {

                name: "Donna Snider",
                position: "Customer Support",
                office: "Singapore",
                age: "55",
                startDate: "2009/10/09",
                salary: "$143,900"

            },

            {

                name: "Serge Baldwin",
                position: "Developer",
                office: "San Francisco",
                age: "43",
                startDate: "2011/07/25",
                salary: "$292,700"

            },

            {

                name: "Gavin Joyce",
                position: "Data Coordinator",
                office: "Singapore",
                age: "54",
                startDate: "2008/11/28",
                salary: "$200,700"

            },
            {

                name: "Airi Satou",
                position: "Accountant",
                office: "Tokyo",
                age: "33",
                startDate: "2019/10/09",
                salary: "$56444"

            },

            {

                name: "Garrett Winters",
                position: "Accountant",
                office: "New York",
                age: "43",
                startDate: "2025/01/01",
                salary: "$56444"

            },

            {
                name: "Angelica Ramos",
                position: "Chief Executive Officer (CEO)",
                office: "Tokyo",
                age: "45",
                startDate: "2024/10/09",
                salary: "$162,700"
            },

            {

                name: "Paul Byrd",
                position: "Chief Executive Officer (CEO)",
                office: "New York",
                age: "43",
                startDate: "2012/10/09",
                salary: "$192,700"

            },

            {

                name: "Yuri Berry",
                position: "Chief Marketing Officer (CMO)",
                office: "New York",
                age: "33",
                startDate: "2019/10/10",
                salary: "$102,700"

            },
            
            {

                name: "Fiona Green",
                position: "Chief Operating Officer (COO)",
                office: "San Francisco",
                age: "35",
                startDate: "2019/10/09",
                salary: "$192,432"

            },

            {

                name: "Donna Snider",
                position: "Customer Support",
                office: "Singapore",
                age: "55",
                startDate: "2009/10/09",
                salary: "$143,900"

            },

            {

                name: "Yuri Berry",
                position: "Chief Marketing Officer (CMO)",
                office: "New York",
                age: "33",
                startDate: "2019/10/10",
                salary: "$102,700"

            },
            {

                name: "Serge Baldwin",
                position: "Developer",
                office: "San Francisco",
                age: "43",
                startDate: "2011/07/25",
                salary: "$292,700"

            },

            {

                name: "Donna Snider",
                position: "Customer Support",
                office: "Singapore",
                age: "55",
                startDate: "2009/10/09",
                salary: "$143,900"

            },

            {

                name: "Serge Baldwin",
                position: "Developer",
                office: "San Francisco",
                age: "43",
                startDate: "2011/07/25",
                salary: "$292,700"

            },

            {

                name: "Gavin Joyce",
                position: "Data Coordinator",
                office: "Singapore",
                age: "54",
                startDate: "2008/11/28",
                salary: "$200,700"

            }

        ]

        let startIndex = 0;
        let endIndex = 5;
        let ItemsPerPage = 5;
        let button_color = 1;
        let storeColorValue = 1
        let forLoopIndex 

        let filteredArray = []

        let showEnteries = document.getElementById("select-option")

        searchInput.addEventListener("input", () => {

            let text = searchInput.value

            let filterdData = dataForTable.filter((e, i) => {

                return e.name.toLowerCase().includes(text.toLowerCase()) || e.office.toLowerCase().includes(text.toLowerCase()) || e.position.toLowerCase().includes(text.toLowerCase()) ||e.age.includes(text)

            })

            
            button_color = 1
            
            if(filterdData.length >= 5){
                
                startIndex = button_color*ItemsPerPage - ItemsPerPage
                endIndex = button_color*ItemsPerPage
                startItemForTable.innerHTML = startIndex+1
                endItemForTable.innerHTML = endIndex
                
            }
            else if(filterdData.length < 5 && filterdData.length > 0){
                
                startIndex=  0
                endIndex = filterdData.length
                startItemForTable.innerHTML = startIndex+1
                endItemForTable.innerHTML = endIndex

            }
            else{
                
                startIndex=  0
                endIndex = 0
                
                startItemForTable.innerHTML = startIndex
                endItemForTable.innerHTML = endIndex
                
            }
            
            printData(filterdData)
            nextPreBtns(button_color)         
            
        })   

        printData(dataForTable)

        function updateButtonbgd() {
            var buttonsList = document.querySelectorAll(".dynamic-table-buttons")
            
            if(buttonsList.length > 0){      

                buttonsList[button_color].style.background = "#2955C8"
                buttonsList[button_color].style.color = "white"   
                
            }
            
        }        

        function printData(arr) {

            filteredArray = arr
            
            let num = arr.length/ItemsPerPage
            let numround = arr.length%ItemsPerPage    
            
            startItemForTable.innerHTML = startIndex+1
            endItemForTable.innerHTML = endIndex
            totalItemsForTable.innerHTML = arr.length

            if(numround !== 0){

                num = Math.floor(num)           
                num++

            }
        
            buttonList.innerHTML = ""
            for(let i=1; i <= num; i++){
                
                storeColorValue = num;
                forLoopIndex = i;
                
                let buttons = document.createElement("button")
                buttons.innerHTML = i
                buttons.classList.add("dynamic-table-buttons")
                buttonList.append(buttons)
                buttons.addEventListener("click", ()=>{
                    
                    let currntBTN = Number(buttons.innerHTML)
                    button_color = currntBTN
                    
                    startIndex = currntBTN * ItemsPerPage - ItemsPerPage
                    
                    if(i==num){

                        endIndex = arr.length

                    }
                    else{

                        endIndex = currntBTN * ItemsPerPage
                        
                    }

                    nextPreBtns(button_color)                    
                    printData(arr)
                    updateButtonbgd()
                    
                })
                
            }
             
            updateButtonbgd()
            let sliceData = arr.slice(startIndex, endIndex)
    
            tBody.innerHTML = ""
            sliceData.map((e, i) => {
                
                let row = document.createElement("tr");
                row.innerHTML = `
                        <td>${e.name}</td>
                        <td>${e.position}</td>
                        <td>${e.office}</td>
                        <td>${e.age}</td>
                        <td>${e.startDate}</td>
                        <td>${e.salary}</td>
                    `                  
                i++
                bgdcolorchange(i, row)

                row.addEventListener("mouseenter", ()=>{

                    row.style.backgroundColor = "#E0F3FF"                   

                })

                row.addEventListener("mouseleave", ()=>{

                    bgdcolorchange(i, row)                   

                })

                tBody.appendChild(row)
            })

        }

        showEnteries.addEventListener("input", () =>{

                let itemChoice = showEnteries.value;
                ItemsPerPage  = itemChoice; 
                endIndex = itemChoice;
                startIndex = 0 
                button_color = 1

                printData(filteredArray)
                nextPreBtns(button_color)
                updateButtonbgd()               

        })


        nextBtn.addEventListener("click", ()=>{
        
            button_color++
                
            if(button_color <= storeColorValue){

                startIndex = button_color * ItemsPerPage - ItemsPerPage
                endIndex = button_color * ItemsPerPage
                printData(filteredArray)
                updateButtonbgd()

            }            
            else{
                   
                button_color = storeColorValue         
                    
            }  
            
            nextPreBtns(button_color)

        })

        previousBtn.addEventListener("click", ()=>{

            
            // console.log(button_color, "button_color value of for loop");      
            button_color--
            // console.log(button_color, "button_color after decrement");     
            
            if(button_color < 1){

                button_color = 1
                
            }
            else{

                startIndex = button_color * ItemsPerPage - ItemsPerPage                
                endIndex = button_color * ItemsPerPage 
                printData(filteredArray)

            }

            nextPreBtns(button_color)
                
        })

        function nextPreBtns(btncolor) {

            // console.log(btncolor);

             if(btncolor == 1){

                previousBtn.style.color = "gray"
                nextBtn.style.color = "#16AAFF"
                
                
            }
            else if(btncolor == storeColorValue){
                
                nextBtn.style.color = "gray"
                previousBtn.style.color = "#16AAFF"


            }
            else if(storeColorValue == 1){

                nextBtn.style.color = "gray"
                previousBtn.style.color = "gray"

            }
            else{


                previousBtn.style.color = "#16AAFF"
                nextBtn.style.color = "#16AAFF"
                
            }
            
            
            // if(btncolor > 1){
                
            //     previousBtn.style.color = "#16AAFF"
                
            // }
            // else{
                
            //     previousBtn.style.color = "gray"

            // }

            // if(btncolor == storeColorValue){

            //     nextBtn.style.color = "gray"
                
            // }
            // else{
                
            //     nextBtn.style.color = "#16AAFF"
                
            // }
            
            // if(storeColorValue == 1){
                
            //     nextBtn.style.color = "gray"
            //     previousBtn.style.color = "gray"

            // }
            
        }


        function bgdcolorchange(num1, row1) {   
            
            if (num1%2 == 0) {
                                        
                row1.style.backgroundColor = "white"
                    
            }
            else{
                    
                row1.style.backgroundColor = "rgba(0, 0, 0, 0.03)"

            }
        }

        let variationClick1 = document.getElementById("variation-click-1")
        let variationClick2 = document.getElementById("variation-click-2")
        let variations1 = document.getElementById("variations-1")
        let variations2 = document.getElementById("variations-2")
        let variationP = document.getElementById("variation-p1")
        let variations = document.querySelectorAll(".variations")
        let variationClick = document.querySelectorAll(".variation-click")
                
        let lineDiv = document.getElementById("line-div")
        let shadowDiv = document.getElementById("shadow-div")
        let variationLineSection = document.querySelectorAll(".variation-line-section")
        let variationClickSection = document.querySelectorAll(".variation-click-section")
        let variationLine1 = document.getElementById("variation-line-1")
        let variationLine2 = document.getElementById("variation-line-2")

        let isClicked = true

        variations1.addEventListener("click", ()=>{

            if(isClicked == true){              

                variationClick1.style.display = "block"
                variationP.style.color = "white"
                variationClick2.style.display = "none"
                variations2.style.color = "#495057"
                
            }
            else{
                
                variationLine1.style.display = "block"
                variationLine2.style.display = "none"
                variationP.style.color = "#2955C8"
                variations2.style.color = "#495057"
                
            }
            

        })

        variations2.addEventListener("click", ()=>{
            
            if(isClicked == true){
                
                variationClick2.style.display = "block"
                variations2.style.color = "white"
                variationClick1.style.display = "none"
                variationP.style.color = "#495057"

            }
            else{
                
                variationLine2.style.display = "block"
                variationLine1.style.display = "none"
                variations2.style.color = "#2955C8"
                variationP.style.color = "#495057"

            }


        })


        lineDiv.addEventListener("click", ()=>{

            isClicked = false
            
            variationClickSection.forEach(element => {
                
                element.style.display = "none"
    
            });

            variationLineSection.forEach(element =>{
                
                element.style.display = "block"

            })

            lineDiv.style.backgroundColor = "#545B62"
            shadowDiv.style.backgroundColor = "#6C757D"
            variationP.style.color = "#2955C8" 
            
        })

        shadowDiv.addEventListener("click", ()=>{

            isClicked = true

            shadowDiv.style.backgroundColor = "#545B62"
            lineDiv.style.backgroundColor = "#6C757D"
            variationLineSection.forEach(element => {
               
                element.style.display = "none"

            });

            variationClickSection.forEach(element => {
                
                element.style.display = "block"
                variationP.style.color = "white" 
                
            });

        })

        let searchIconDiv = document.getElementById("magnifying-glass")
        let leftMenuBar = document.getElementById("left-menu-bar")
        let searchBarExpanded = document.getElementById("search-bar-expanded")
        let xSearchIcon = document.getElementById("x-search-icon")
        let expandedBar = document.getElementById("expanded-bar")

        searchIconDiv.addEventListener("click", ()=>{

            leftMenuBar.style.display = "none"
            searchIconDiv.style.display = "none"
            searchBarExpanded.style.display = "block"
            expandedBar.style.width = "290px"
            navBarLeft.style.paddingRight = "9%"
            
            setTimeout(() => {
                
                xSearchIcon.style.display = "block"  
                xSearchIcon.style.right = "0"  

            }, 500);

        })

        xSearchIcon.addEventListener("click", ()=>{

            leftMenuBar.style.display = "block"
            searchIconDiv.style.display = "block"
            searchBarExpanded.style.display = "none"
            expandedBar.style.width = "0px"
            navBarLeft.style.paddingRight = "2%"          
            xSearchIcon.style.display = "none"
            xSearchIcon.style.right = "60%"

        })

