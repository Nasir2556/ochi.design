document.addEventListener('DOMContentLoaded', function () {
    let nav_anchor = document.querySelectorAll(".nav-anchor-cnt")
    let nav_anchor_before = document.querySelectorAll(".nav-anchor-before");
    let nav_anchor_after = document.querySelectorAll(".nav-anchor-after");
    let nav_anchor_line = document.querySelectorAll(".nav-anchor-line");
    for (let i = 0; i < nav_anchor.length; i++) {
        nav_anchor[i].addEventListener("mouseover", function () {
            nav_anchor_line[i].style.cssText =
                `
                        left:0;
                        width:100%;
                        transition: all ease .5s;
                        transition-delay: .3s;
                    
                    `
                ;
            nav_anchor_before[i].style.cssText =
                `
                        top: -150%;
                        transition:all ease .3s
                    `
                ;
            nav_anchor_after[i].style.cssText =
                `
                        top: 0;
                        transition:all ease .5s
                    `
                ;
        });
        nav_anchor[i].addEventListener("mouseout", () => {
            nav_anchor_line[i].style.cssText =
                `
                    right:0;
                    width:0;
                    transition: all ease .4s;
                
                    transition-delay: .1s;
                `
                ;
            nav_anchor_before[i].style.cssText =
                `
                    top: 0;
                    transition:all ease .5s
                `
                ;
            nav_anchor_after[i].style.cssText =
                `
                    top:150%;
                    transition:all ease .3s
                `
                ;
        })
    }
    let last_scroll = 0
    let header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        let current_scroll = window.pageYOffset;
        if (current_scroll > last_scroll) {
            header.style.cssText =
                `
                transform:translateY(-100%);
                transition:all ease 0.5s;
            `
        } else {
            header.style.cssText =
                `
                transform:translateY(0%);
                transition:all ease 0.5s;
            `
        }
        last_scroll = current_scroll
    })
    let menu_icon_cnt = document.querySelector(".menu-icon-cnt");
    let menu_icon_1 = document.querySelector(".menu-icon-1");
    let menu_icon_2 = document.querySelector(".menu-icon-2");
    let menu_items_cnt_wrapper = document.querySelector(".menu-items-cnt-wrapper");
    let menu_flag = 0;
    menu_icon_cnt.addEventListener("click", () => {

        if (menu_flag === 0) {
            menu_flag = 1;
            menu_icon_1.style.cssText = `transform:translateY(0) ;rotate:45deg`;
            menu_icon_2.style.cssText = `transform:translateY(0); rotate:-45deg`;
            menu_items_cnt_wrapper.style.cssText=`top:0%`
        } else {
            menu_flag = 0;
            menu_icon_1.style.cssText = `transform:translateY(-4.5px) ;rotate:0deg`;
            menu_icon_2.style.cssText = `transform:translateY(4.5px); rotate:0deg`;
            menu_items_cnt_wrapper.style.cssText=`top:-120%`
        }
    });
    // secnd effct
    let wide_btn_nd_arrow_cnt = document.querySelectorAll(".wide-btn-nd-arrow-cnt");
    let wide_btn = document.querySelectorAll(".wide-btn");
    let arrow_btn_before = document.querySelectorAll(".arrow-btn-before");
    let arrow_btn_div = document.querySelectorAll(".arrow-btn-div");
    let arrow_btn_svg = document.querySelectorAll(".arrow-btn-div svg");

    for (let i = 0; i < wide_btn_nd_arrow_cnt.length; i++) {
        wide_btn_nd_arrow_cnt[i].addEventListener("mouseover", function (details) {
            if (details.target.classList.contains("h-elem")) {
                wide_btn[i].style.cssText =
                    `
                        background-color:black;
                        transition:all ease .3s;
                        color:white
                    `
                    ;
                arrow_btn_before[i].style.cssText =
                    `
                        scale:1;
                        transition:all ease .3s;
                        background-color: black;
                    `
                    ;
                arrow_btn_div[i].style.cssText =
                    `
                        color:white;
                        transition:all ease .3s;
                    `
                    ;
                arrow_btn_svg[i].style.cssText =
                    `
                        fill:white;
                    `
                    ;
            }
        })
        wide_btn_nd_arrow_cnt[i].addEventListener("mouseout", function (details) {
            if (details.target.classList.contains("h-elem")) {
                wide_btn[i].style.cssText =
                    `
                    background-color:none;
                    transition:all ease .3s;
                    color:black;
                `;
                arrow_btn_before[i].style.cssText =
                    `
                    scale:0;
                    transition:all ease .3s;
                    background-color: black;
                    color:black
                `;
                arrow_btn_div[i].style.cssText =
                    `
                    color:black;
                    transition:all ease .3s;
                `;
                arrow_btn_svg[i].style.cssText =
                    `
                    fill:#212121;
                `;
            }
        })
    }
    // third effect
    let blink_parent = document.querySelectorAll(".blink-parent");
    let blink_black = document.querySelectorAll(".blink-black");
    let blink_dot = document.querySelectorAll(".blink-dot");
    let approch_nd_team_cnt = document.querySelector(".approch_nd_team_cnt ");
    let team_photo = document.querySelector(".team-photo");
    let svg = document.querySelectorAll(".blink-hover svg");
    for (let i = 0; i < blink_parent.length; i++) {
        blink_parent[i].addEventListener("mouseover", function (details) {
            if (details.target.classList.contains("blink-hover")) {
                blink_black[i].style.cssText =
                    `
                    transition:all ease .3s;
                    bottom:0;
                    height:100%;
                `;
                blink_dot[i].style.cssText =
                    `
                    transition:all ease .3s;
                    scale:1;
                `;
            }
        })
        blink_parent[i].addEventListener("mouseout", function (details) {
            if (details.target.classList.contains("blink-hover")) {
                blink_black[i].style.cssText =
                    `
                    transition:all ease .3s;
                    top:0;
                    height:0;
                `;
                blink_dot[i].style.cssText =
                    `
                    transition:all ease .3s;
                    scale:0.3;
                `
            }
        })
        approch_nd_team_cnt.addEventListener("mouseout", function (details) {
            if (details.target.classList.contains("blink-hover")) {
                team_photo.style.cssText =
                    `
                    scale:1;
                    transition:all ease 1s;
                `;
            }
        })
        approch_nd_team_cnt.addEventListener("mouseover", function (details) {
            if (details.target.classList.contains("blink-hover")) {
                team_photo.style.cssText =
                    `
                    scale:0.95;
                    
                    transition:all ease 1s;
                `;
            }
        })
    }
    // eye effect
    window.addEventListener("mousemove", (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let deltaX = mouseX - window.innerWidth / 2;
        let deltaY = mouseY - window.innerHeight / 2;
        let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) //57.296 = 1 deg
        // atan2 hume radian me value deta hai and hume usko angle me convet krna pdta h
        // PI ki value 3.14159265 hoti hai
        let pupils = document.querySelectorAll('.pupil');
        for (let i = 0; i < pupils.length; i++) {
            pupils[i].style.rotate = `${angle}deg`
        }
    })
})