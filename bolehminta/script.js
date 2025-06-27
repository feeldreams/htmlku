var teksSekarang = 1;const body = document.querySelector("body"); audio = new Audio('' + linkmp3.src); 
var swiper = new Swiper(".mySwiper", {
    pagination: {el: ".swiper-pagination", dynamicBullets: false,},
    allowTouchMove: false,
    on: {
    slideChange: function () {
        teksSekarang++;
        teksScale = document.querySelector('#teks' + teksSekarang);
        stikerScale = document.querySelector('#stiker' + teksSekarang);
        Tombol = document.querySelector('#Tombol');

        setTimeout(function(){
          teksScale.classList.add("scale1");
          stikerScale.classList.add("scale1");
          
          if(teksSekarang == 2){
          	  initeks2 = teks2.innerHTML;teks2.innerHTML = "";
				new TypeIt("#teks2", {
			    strings: ["" + initeks2], startDelay: 300, speed: 30, cursor: true,
			    afterComplete: function(){
				  document.querySelector("#teks2 .ti-cursor").style.display = "none";
                  Tombol.style="opacity:1;transform: scale(1);"
                },}).go();
          } else if(teksSekarang == 3){
              setTimeout(katanimasi, 300);              
          } else if(teksSekarang == 4){setTimeout(function(){teksScale.classList.remove("scale1");stikerScale.classList.remove("scale1");teksScale.classList.add("scale0");stikerScale.classList.add("scale0");setTimeout(function(){calculator.style="display:flex";setTimeout(function(){calculator.classList.add("scale1");teksScale.style="display:none";stikerScale.style="display:none"},50);},550);}, 1200);}
          
        }, 50);
    },
    },
    navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev",},
});
    
initeks = teks3.innerHTML;teks3.innerHTML = "";
initeksTengah = teks3a.innerHTML; initeksAkhir = teks3b.innerHTML;
function katanimasi(){
    teks3.innerHTML = "";
	new TypeIt("#teks3", {
    strings: [initeks, "<br>" + initeksTengah, "<br>" + initeksAkhir], startDelay: 10, speed: 25,
    cursor: true,
    breakLines: true,
    waitUntilVisible: true,
    afterStep: function(instance) {
        if (instance.is('completed')) {
            setTimeout(function() {
                instance.next();
            }, 1500);
        }
    },
    afterComplete: function(){
      	clearInterval(scrollInterval);
      	document.querySelector("#teks3 .ti-cursor").style.display = "none";
          Tombol2.style="opacity:1;transform: scale(1);"
          
          stikerScale.classList.remove("scale1");
          stikerScale.classList.add("scale0");
          setTimeout(function(){
          	  stikerAkhir1.src = stikerAkhir2.src;
                stikerScale.classList.remove("scale0");
                stikerScale.classList.add("scale1");
                setInterval(falling, 200);
            },400);
    },}).go();
}

///////////////////////////////////

var sudahKlik = true;
var fungsiBerfungsi = false;
document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';

document.getElementById("loveIn").onclick = function() {
    if (sudahKlik) {
        audio.play();
        document.querySelector(".overlay").style.display = "none";
        setTimeout(()=>{
	        stiker1.classList.add("scale1");
	        teks1.classList.add("scale1");
	        wallpaper.style="transform:scale(1)";
	        
	        setTimeout(function(){fungsiBerfungsi = true}, 300);
	        setTimeout(()=>{swiper.slideNext();}, gantiSlidePertama);
        }, 700);
    } else {
        sudahKlik = true;
        document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';
    }
}
//document.getElementById("loveIn").onclick = mulaiScript();

function falling() {const heart = document.createElement("div");heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100;stroke:#FFC2B8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";heart.className = "heart-icon";heart.style.left = (Math.random() * 95) + "vw";heart.style.animationDuration = (Math.random() * 3) + 2 + "s";document.body.appendChild(heart);}
setInterval(function() {var heartArr = document.querySelectorAll(".heart-icon");if (heartArr.length > 100) {heartArr[0].remove();}}, 100);

const scrollContainer = document.getElementById("scroll-container");
const textContainer = document.getElementById("textsec2");

function autoScroll() {scrollContainer.scrollTop += 10;}
const scrollInterval = setInterval(autoScroll, 50); 

/////////////////

let jumlahKlik = 0;
let sudah = false;

function fungsibaru(btn) {
  var tombol = document.getElementById("" + btn);
  var tombolParent = tombol.parentNode;

  var tombolPosisiX = Math.floor(Math.random() * 50) + 1;
  var tombolPosisiY = Math.floor(Math.random() * 75) + 1;
  var rotasiAcak = Math.floor(Math.random() * 360);

  tombol.style.position = "relative";
  tombol.style.left = tombolPosisiX + "px";
  tombol.style.top = tombolPosisiY + "px";
  tombol.style.transform = "rotate(" + rotasiAcak + "deg)";
  tombolParent.appendChild(tombol);

  jumlahKlik++;

  if (jumlahKlik === 3 && jumlahKlik !== 100) {
    Tombol.style=""
    
    stiker2.classList.remove("scale1");
    stiker2.classList.add("scale0");
    setTimeout(function () {
      stiker2a.src = stiker2b.src;
      stiker2.classList.remove("scale0");
      stiker2.classList.add("scale1");
      tombol.style.left = "0px";tombol.style.top = "0px";tombol.style.transform = "rotate(0deg)";
    }, 400);
    
    document.querySelector("#teks2 .ti-cursor").style.display = "";
    initeks2b = teks2b.innerHTML;teks2.innerHTML = "";
	new TypeIt("#teks2", {
    strings: ["" + initeks2b], startDelay: 100, speed: 30, cursor: true,
	afterComplete: function(){
		document.querySelector("#teks2 .ti-cursor").style.display = "none";
		By.innerHTML = "Yauda Boleh 🥳";
		Bn.innerHTML = "Yakin 🤬";
        Tombol.style="opacity:1;transform: scale(1);";
    },}).go();

    jumlahKlik = 100;
  }
}

gantiSlidePertama = 2500;
var overlay = document.querySelector(".loading-message");overlay.style.display = "none";var tomlv = document.querySelector(".blocklove");tomlv.style.display = "flex";
