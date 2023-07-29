//deal with the sidebar



// ================================================= themes ===================================================

const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
// to open
const openTheModel = () => {
    themeModel.style.display = "grid"
}


theme.addEventListener('click', openTheModel);

// to close
const closeTheModel = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModel.style.display = "none"
    }
}

themeModel.addEventListener('click', closeTheModel);

const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
//================================================================== font
//remove active 

const removeSizeActive = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    });

}



fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        let fontSize;
        removeSizeActive();
        size.classList.toggle('active');
        //changing size when clicking on the span 
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        };
        //changinh the html ele size
        document.querySelector('html').style.fontSize = fontSize;
    });
});

//======================================================== color

const removeColorActive = () => {
    colorPalette.forEach(color => {
        color.classList.remove('active');
    });

}

const colorPalette = document.querySelectorAll('.choose-color span');
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;

        removeColorActive();
        color.classList.toggle('active');

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


// ========================================== changing bg

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');
//
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
};
// ___________--bg2
bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
});
// ___________--bg2
bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
});
// ___________--bg1
bg1.addEventListener('click', () => {
    darkColorLightness = '17%';
    whiteColorLightness = '100%';
    lightColorLightness = '93%';

    bg1.classList.add('active');
    bg3.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
});
//====================================================================end of themes



//======================================the notification pop up & messages showing and active any item on the side bar

const menuItems = document.querySelectorAll(".menu-item");
let msPopup = document.querySelector('.right').cloneNode(true);
msPopup.classList.add('cloned')
let popupCard = document.querySelector('.customize-theme .card ');



menuItems.forEach((item) => {
    // active class for all
    item.addEventListener("click", () => {
        //remove
        menuItems.forEach((item) => {
            item.classList.remove("active");
        });
        //add
        item.classList.add("active");
        //notification pop up & messages showing
        if (item.id === "notification") {
            document.querySelector(".notification-popup").style.display = "block";
            //remove counter
            document.querySelector("#notification .notification-count").style.display = "none";
        } else {
            document.querySelector(".notification-popup").style.display = "none";
        };
        if (item.id === "messages-notifications") {
            //clone pop from themes to be for messages
            popupCard.style.display = "none";
            themeModel.appendChild(msPopup);
            //applying the same functionality on the cloned messages pop up ele to left side from the right side
            msopen(msPopup);
            msPopup.style.display = "block";
            msPopup.style.boxShadow = "0 0 3rem var(--color-primary)";
            msPopup.style.borderRadius = "var(--card-border-radius)";
            msPopup.style.textAlign = "left";
            //declared before with themes
            openTheModel();
            //remove counter
            document.querySelector("#messages-notifications .notification-count").style.display = "none";
        } else {
            popupCard.style.display = "block";
            msPopup.style.display = "none";
        };
    });
});

//============================================================= taps of messages right side
const categories = Array.from(document.querySelectorAll('.category h6'));
const taps = Array.from(document.querySelectorAll('.messages__taps .tap'));
categories.forEach((ele) => {
    ele.addEventListener(('click'), (e) => {
        taps.forEach((tap) => {
            if (ele.classList.contains(tap.id)) {
                tap.style.display = "flex";
                tap.style.flexDirection = "column"
            } else {
                tap.style.display = "none";
            };
        });
        categories.forEach((ele) => {
            ele.classList.remove('active');
        });
        e.target.classList.add('active');
    });
});

let reqBtn = Array.from(document.querySelectorAll('.request .action .btn'));

reqBtn.forEach((ele) => {
    ele.addEventListener(('click'), (e) => {
        e.target.parentElement.style.display = "none";
    });
});

// ==================================================================== end taps of messages right side

// ================================================================ search messages right side

const msBox = document.querySelector(".messages");
const message = msBox.querySelectorAll(".message");
const msSearch = document.querySelector("#message-search");

const searchMs = function() {

    const val = msSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('.message-body h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        };
    });
};
msSearch.addEventListener('keyup', searchMs);

//====================================================================== end search messages right side

//================================================================applying the same functionality on the cloned messages pop up ele to left side in one function


let msopen = (ele) => {
    if (ele.classList.contains('cloned')) {
        //=============================================== taps of messages

        let categories2 = Array.from(document.querySelectorAll('.category h6'));
        let taps2 = Array.from(document.querySelectorAll('.messages__taps .tap'));
        categories2.forEach((ele) => {
            ele.addEventListener(('click'), (e) => {
                taps2.forEach((tap) => {
                    if (ele.classList.contains(tap.id)) {
                        tap.style.display = "flex";
                        tap.style.flexDirection = "column"
                    } else {
                        tap.style.display = "none";
                    }
                });
                categories2.forEach((ele) => {
                    ele.classList.remove('active');
                });
                e.target.classList.add('active');
            });
        });

        let reqBtn2 = Array.from(document.querySelectorAll('.request .action .btn'));

        reqBtn2.forEach((ele2) => {
                ele2.addEventListener(('click'), (e) => {
                    e.target.parentElement.style.display = "none";
                })
            })
            //==============================remove friend-requests
        let friendRequests = document.querySelector('.cloned .friend-requests');
        friendRequests.style.display = "none";
        // ============================== search messages
        let msBox2 = document.querySelector(".cloned .messages");
        let message2 = msBox2.querySelectorAll(".message");
        let msSearch2 = document.querySelector(".cloned #message-search");
        let searchMs2 = function() {

            let val2 = msSearch2.value.toLowerCase();
            message2.forEach(chat => {
                let name = chat.querySelector('.message-body h5').textContent.toLowerCase();
                if (name.indexOf(val2) != -1) {
                    chat.style.display = "flex";
                } else {
                    chat.style.display = "none";
                }
            })
        }
        msSearch2.addEventListener('keyup', searchMs2);
    }
}

//================================================================  end applying the same functionality on the cloned ele

// ============================================ ===================================== post
const newPost = document.getElementById('create-post');
const btn = document.querySelector('.newpost');
const feeds = document.querySelector('.feeds');
btn.onclick = () => {
    return false;
}
btn.addEventListener(('click'), () => {
    let postText = newPost.value
    let container = document.createElement('div');
    container.classList.add('feed');
    container.classList.add('new-post');
    //put the same structure of feed markup
    container.innerHTML = `<div class="head">
        <div class="user">
            <div class="profile-photo">
                <img src="./images/profile-1.jpg" alt="">
            </div>
            <div class="info">
                <h3>Noah Ahmed</h3>
                <small class="text-muted">Giza, 1 sec ago</small>
            </div>
        </div>
        <span class="edit"><i class="uil uil-ellipsis-h"></i></span>
    </div>

    <div class="photo">
        <img src="" alt="">
    </div>
    <div><p>${postText}</p></div>
    <div class="action-buttons">
        <div class="interaction-buttons">
            <span><i class="uil uil-heart-alt"></i></span>
            <span><i class="uil uil-comment"></i></span>
            <span><i class="uil uil-share-alt"></i></span>
        </div>
        <div class="bookmark">
            <span><i class="uil uil-bookmark-full"></i></span>
        </div>
    </div>
    <div class="liked-by">
        <span></span>
        <span></span>
        <span>></span>
        <p>Liked by<b>0</b></p>
    </div>
    <div class="caption">
        <p><a class="hash-tag"></a></p>
    </div>
    <div class="comments text-muted">No comments yet</div> `;
    feeds.prepend(container);
    newPost.value = ""
    newPostShare(container);
    newPostComment(container);
});
//=============================================================================== end of post
//=============================================================================== Share

let sharBtn = document.querySelectorAll('.uil-share-alt');
sharBtn.forEach((ele) => {
    ele.addEventListener(('click'), () => {
        let postText = ele.parentElement.parentElement.parentElement.parentElement.cloneNode(true);
        let container = document.createElement('div');
        container.classList.add('feed');
        container.classList.add('new-post');
        //put the same structure of feed markup
        let buttons = postText.querySelector('.action-buttons')
        buttons.style.display = "none";
        container.innerHTML = `<div class="head">
        <div class="user">
            <div class="profile-photo">
                <img src="./images/profile-1.jpg" alt="">
            </div>
            <div class="info">
                <h3>Noah Ahmed</h3>
                <small class="text-muted">Giza, 1 sec ago</small>
            </div>
        </div>
        <span class="edit"><i class="uil uil-ellipsis-h"></i></span>
    </div>

    <div class="photo">
        <img src="" alt="">
    </div>
    <div><p>${postText.innerHTML}</p></div>
    <div class="action-buttons">
        <div class="interaction-buttons">
            <span><i class="uil uil-heart-alt"></i></span>
            <span><i class="uil uil-comment"></i></span>
            <span><i class="uil uil-share-alt"></i></span>
        </div>
        <div class="bookmark">
            <span><i class="uil uil-bookmark-full"></i></span>
        </div>
    </div>
    <div class="liked-by">
        <span></span>
        <span></span>
        <span>></span>
        <p>Liked by<b>0</b></p>
    </div>
    <div class="caption">
        <p><a class="hash-tag"></a></p>
    </div>
    <div class="comments text-muted">No comments yet</div> `;
        feeds.prepend(container);
        newPostShare(container);
        newPostComment(container);
    });
});
//=============================================================================== end of Share
//================================================================================share for new posts

let newPostShare = (ele) => {
    if (ele.classList.contains('new-post')) {
        let feeds2 = document.querySelector('.feeds');
        let sharBtn2 = document.querySelectorAll('.new-post .uil-share-alt:last-child');
        sharBtn2.forEach((ele) => {
            ele.addEventListener(('click'), () => {
                let postText = ele.parentElement.parentElement.parentElement.parentElement.cloneNode(true);
                let container = document.createElement('div');
                container.classList.add('feed');
                container.classList.add('new-post');
                //put the same structure of feed markup
                let buttons2 = postText.querySelectorAll('.action-buttons')
                buttons2.forEach((ele) => {
                    ele.style.display = "none";
                });
                container.innerHTML = `<div class="head">
                    <div class="user">
                    <div class="profile-photo">
                        <img src="./images/profile-1.jpg" alt="">
                    </div>
                    <div class="info">
                        <h3>Noah Ahmed</h3>
                        <small class="text-muted">Giza, 1 sec ago</small>
                    </div>
                    </div>
                    <span class="edit"><i class="uil uil-ellipsis-h"></i></span>
                        </div>
                    <div class="photo">
                        <img src="" alt="">
                    </div>
                    <div><p>${postText.innerHTML}</p></div>
                    <div class="action-buttons">
                        <div class="interaction-buttons">
                            <span><i class="uil uil-heart-alt"></i></span>
                            <span><i class="uil uil-comment"></i></span>
                            <span><i class="uil uil-share-alt"></i></span>
                        </div>
                        <div class="bookmark">
                            <span><i class="uil uil-bookmark-full"></i></span>
                        </div>
                    </div>
                    <div class="liked-by">
                        <span></span>
                        <span></span>
                        <span>></span>
                        <p>Liked by<b>0</b></p>
                    </div>
                    <div class="caption">
                        <p><a class="hash-tag"></a></p>
                    </div>
                    <div class="comments text-muted">No comments yet</div> `;

                feeds2.prepend(container);
                newPostShare(container);
                newPostComment(container);
            });
        });
    };
};
//================================================================================end of share for new posts
// ================================================== ===========================comment

let commentBtn = document.querySelectorAll('.uil-comment');
commentBtn.forEach((ele) => {
    ele.addEventListener(('click'), () => {
        let myPro = document.querySelector(".left .profile");
        let comment = document.createElement('div');
        comment.setAttribute('contenteditable', "true");

        let submitBtn = document.createElement('button');
        submitBtn.appendChild(document.createTextNode("send"))
        submitBtn.classList.add('btn-primary');
        submitBtn.classList.add('btn');

        submitBtn.onclick = () => {
            comment.blur();
            comment.style.textAlign = "center"
            comment.setAttribute('contenteditable', "false");
            comment.style.backgroundColor = "var(--color-light)";
            comment.appendChild(myPro);
            submitBtn.style.display = "none";
        };
        comment.style.height = "5rem";
        comment.style.backgroundColor = "var(--color-white)"
        comment.style.border = "0.2rem solid var(--color-light)"
        comment.style.color = "var(--color-dark)"
        comment.style.borderRadius = "1.5rem"
        comment.style.padding = "0.7rem"
        let container = document.createElement('div');
        container.style.display.cssText = "display:flex ; align-items: center; justify-content: space-evenly;"

        container.appendChild(comment);
        container.appendChild(submitBtn);
        ele.parentElement.parentElement.parentElement.parentElement.append(container);
        comment.focus();
    });
});
// ==============================================================end comment
//=============================================================== comment on new posts
let newPostComment = (ele) => {
    if (ele.classList.contains('new-post')) {
        let commentBtn2 = document.querySelectorAll('.new-post .uil-comment');
        commentBtn2.forEach((ele) => {
            ele.addEventListener(('click'), () => {
                let myPro = document.querySelector(".left .profile");
                let comment = document.createElement('div');
                comment.setAttribute('contenteditable', "true");

                let submitBtn = document.createElement('button');
                submitBtn.appendChild(document.createTextNode("send"))
                submitBtn.classList.add('btn-primary');
                submitBtn.classList.add('btn');

                submitBtn.onclick = () => {
                    comment.blur();
                    comment.style.textAlign = "center"
                    comment.setAttribute('contenteditable', "false");
                    comment.style.backgroundColor = "white";
                    submitBtn.style.display = "none";
                    comment.appendChild(myPro);
                };
                comment.style.height = "5rem";
                comment.style.backgroundColor = "var(--color-light)"
                comment.style.color = "var(--color-dark)"
                comment.style.borderRadius = "1.5rem"
                comment.style.padding = "0.7rem"
                let container = document.createElement('div');
                container.style.display.cssText = "display:flex ; align-items: center; justify-content: space-evenly;"

                container.appendChild(comment);
                container.appendChild(submitBtn);
                ele.parentElement.parentElement.parentElement.parentElement.append(container);
                comment.focus();
            });
        });
    };
};