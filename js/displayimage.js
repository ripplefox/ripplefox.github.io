//显示图片
function displayImg(src) {
    let pop_box = document.getElementById('pop_box');
    let pop_box_img = document.getElementById('pop_box_img');
    pop_box_img.src = src;
    pop_box.style.display = "block";
    $(".hide_box").fadeToggle();
}

//图片消失
function vanishImg(){
    let img = document.getElementById('pop_box');
    let pop_box_img = document.getElementById('pop_box_img');
    pop_box_img.src = "";
    img.style.display = "none";
    $(".hide_box").fadeToggle();
}
