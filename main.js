const pics_src = ["/image/side-pucture1.png","/image/side-pucture2.png","/image/side-pucture3.png","/image/side-pucture4.png","/image/side-pucture5.png","/image/side-pucture6.png"]

// 上に戻るボタン
document.getElementById("go-top").onclick = function() {
    window.scrollTo(0,0);
};

// サイドバーボタン開く
const side_bar_button = document.getElementById("side-bar-button");
const side_bar = document.getElementById("side-bar");

side_bar_button.addEventListener('click', () => {
//   // ボタンクリックでhiddenクラスを付け外しする
  side_bar.classList.remove('hidden');
});

// サイドバーボタン閉じる
const side_bar_button_back = document.getElementById("side_bar_button_back");
side_bar_button_back.addEventListener('click', () => {
    side_bar.classList.add('hidden');
});


// 画像ポップアップ画面処理
const display_image = document.getElementById("dispplay-image");
const image_display = document.getElementById("image-display");
const image_back_button = document.getElementById("image-backbutton") ;

const mypic = document.getElementById("mypic");

// 画像ポップアップ画面非表示処理
image_back_button.addEventListener('click', () => {
    // ボタンクリックでhiddenクラスを付け外しする
    image_display.classList.add('hidden');
});

// 画像ポップアップ画面表示処理
const image1 = document.getElementById("image-1");
image1.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
    mypic.src = image1.src
    mypic.setAttribute("image-id", 0)
    image_display.classList.remove('hidden');
});

const image2 = document.getElementById("image-2");
image2.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
    mypic.src = image2.src
    mypic.setAttribute("image-id", 1)
    image_display.classList.remove('hidden');
});

const image3 = document.getElementById("image-3");
image3.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
    mypic.src = image3.src
    mypic.setAttribute("image-id", 2)
    image_display.classList.remove('hidden');
});

const image4 = document.getElementById("image-4");
image4.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
    mypic.src = image4.src
    mypic.setAttribute("image-id", 3)
    image_display.classList.remove('hidden');
});

const image5 = document.getElementById("image-5");
image5.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
    mypic.src = image5.src
    mypic.setAttribute("image-id", 4)
    image_display.classList.remove('hidden');
});

const image6 = document.getElementById("image-6");
image6.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
    mypic.src = image6.src
    mypic.setAttribute("image-id", 5)
    image_display.classList.remove('hidden');
});

// ポップアップ画面切り替え関数
function go_forward(){
    const imageId = Number(mypic.getAttribute("image-id"));
    let imageNumber = imageId + 1;

    if (imageNumber >= 6) {
        imageNumber = 0;
    }

    console.log(imageNumber);
    mypic.src = pics_src[imageNumber];
    mypic.setAttribute("image-id", imageNumber);
}

function go_back(){
    const imageId = Number(mypic.getAttribute("image-id"));
    let imageNumber = imageId - 1;

    if (imageNumber <= -1) {
        imageNumber = 5;
    }

    console.log(imageNumber);
    mypic.src = pics_src[imageNumber];
    mypic.setAttribute("image-id", imageNumber);
}


const attention1 = document.getElementById("attention1");
const attention1_pop = document.getElementById("attention1-pop");

const attention2 = document.getElementById("attention2");
const attention2_pop = document.getElementById("attention2-pop");

const attention3 = document.getElementById("attention3");
const attention3_pop = document.getElementById("attention3-pop");

const attention4 = document.getElementById("attention4");
const attention4_pop = document.getElementById("attention4-pop");


attention1.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
    attention1.classList.toggle('attention-change');
    attention1.classList.toggle('attention');
    attention1_pop.classList.toggle('hidden');
});

attention2.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
    attention2.classList.toggle('attention-change');
    attention2.classList.toggle('attention');
    attention2_pop.classList.toggle('hidden');
});

attention3.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
    attention3.classList.toggle('attention-change');
    attention3.classList.toggle('attention');
    attention3_pop.classList.toggle('hidden');
});

attention4.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
    attention4.classList.toggle('attention-change');
    attention4.classList.toggle('attention');
    attention4_pop.classList.toggle('hidden');
});

