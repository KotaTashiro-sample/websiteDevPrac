document.getElementById("go-top").onclick = function() {
    window.scrollTo(0,0);
};

const side_bar_button = document.getElementById("side-bar-button");
const side_bar = document.getElementById("side-bar");

side_bar_button.addEventListener('click', () => {
//   // ボタンクリックでhiddenクラスを付け外しする
  side_bar.classList.remove('hidden');
});

const side_bar_button_back = document.getElementById("side_bar_button_back");
side_bar_button_back.addEventListener('click', () => {
    side_bar.classList.add('hidden');
});

const display_image1 = document.getElementById("dispplay-image1");
const image_display1 = document.getElementById("image-display1");


image1.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
    image_display1.classList.remove('hidden');
});

const image_back_button1 = document.getElementById("image-backbutton1");

image_back_button1.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
      image_display1.classList.add('hidden');
});

const image2 = document.getElementById("image2");
const image_display2 = document.getElementById("image-display2");

image2.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
    image_display2.classList.remove('hidden');
});

const image_back_button2 = document.getElementById("image-backbutton2");

image_back_button2.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
      image_display2.classList.add('hidden');
      num = 0;
});

const image3 = document.getElementById("image3");
const image_display3 = document.getElementById("image-display3");

image3.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
    image_display3.classList.remove('hidden');
});

const image_back_button3 = document.getElementById("image-backbutton3");

image_back_button3.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
      image_display3.classList.add('hidden');
});

const image4 = document.getElementById("image4");
const image_display4 = document.getElementById("image-display4");

image4.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
    image_display4.classList.remove('hidden');
});

const image_back_button4 = document.getElementById("image-backbutton4");

image_back_button4.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
      image_display4.classList.add('hidden');
});

const image5 = document.getElementById("image5");
const image_display5 = document.getElementById("image-display5");

image5.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
    image_display5.classList.remove('hidden');
});

const image_back_button5 = document.getElementById("image-backbutton5");

image_back_button5.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
      image_display5.classList.add('hidden');
});

const image6 = document.getElementById("image6");
const image_display6 = document.getElementById("image-display6");

image6.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
    image_display6.classList.remove('hidden');
});

const image_back_button6 = document.getElementById("image-backbutton6");

image_back_button6.addEventListener('click', () => {
    //   // ボタンクリックでhiddenクラスを付け外しする
      image_display6.classList.add('hidden');
});


var pics_src = new Array("/image/side-pucture1.png","/image/side-pucture2.png","/image/side-pucture3.png","/image/side-pucture4.png","/image/side-pucture5.png","/image/side-pucture6.png");

var num = 1;

function go_forward(){
    if (num == 5) {
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("mypic").src=pics_src[num];
}

function go_back(){
    if (num == 0) {
        num = 5;
    }
    else {
        num --;
    }
    document.getElementById("mypic").src=pics_src[num];
}