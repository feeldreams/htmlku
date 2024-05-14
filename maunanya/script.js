var teksSekarang = 1;var ftom=0;var pesanwhatsapp = "";const body = document.querySelector("body"); audio = new Audio('' + linkmp3.src); 
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
      },
      on: {
      slideChange: function () {
        var currentIndex = swiper.activeIndex;
        //var colors = [wallpaper2.src, wallpaper3.src, wallpaper4.src];
        //wallpaper.src = colors[currentIndex % colors.length];

        teksSekarang++;
        teksScale = document.querySelector('#teks' + teksSekarang);
        stikerScale = document.querySelector('#stiker' + teksSekarang);
        Tombol = document.querySelector('#Tombol');
        setTimeout(function(){
          teksScale.classList.add("scale1");
          stikerScale.classList.add("scale1");
          
          if(teksSekarang == 12){
            pesanwhatsapp = "1%29%20" + teks3.innerText +"%0A%20%20%20%20%20%2AJawab%3A%2A%20" + iteks3.value + "%0A2%29%20" + teks4.innerText +"%0A%20%20%20%20%20%2AJawab%3A%2A%20" + iteks4.value + "%0A3%29%20" + teks5.innerText +"%0A%20%20%20%20%20%2AJawab%3A%2A%20" + iteks5.value + "%0A4%29%20" + teks6.innerText +"%0A%20%20%20%20%20%2AJawab%3A%2A%20" + iteks6.value + "%0A5%29%20" + teks7.innerText +"%0A%20%20%20%20%20%2AJawab%3A%2A%20" + iteks7.value + "%0A6%29%20" + teks8.innerText +"%0A%20%20%20%20%20%2AJawab%3A%2A%20" + iteks8.value + "%0A7%29%20" + teks9.innerText +"%0A%20%20%20%20%20%2AJawab%3A%2A%20" + iteks9.value + "%0A8%29%20" + teks10.innerText +"%0A%20%20%20%20%20%2AJawab%3A%2A%20" + iteks10.value + "%0A9%29%20" + teks11.innerText +"%0A%20%20%20%20%20%2AJawab%3A%2A%20" + iteks11.value + ""
            katanimasi()
          }
        }, 50);
      },
      },
      navigation: {nextEl: ".swiper-button-next",prevEl: ".swiper-button-prev",},
    });
    
    varteks = teks12.innerHTML; teks12.innerHTML = "";
    function katanimasi(){
	  new TypeIt("#teks12", {
      strings: ["" + varteks], startDelay: 250, speed: 40, cursor: true,
      afterComplete: function(){
      	clearInterval(scrollInterval);
      	teks12.innerHTML = varteks;
          Tombol.style="opacity:1;transform: scale(1);";ftom=1;
      },}).go();
}

    window.addEventListener("load", (event) => {
    window.scrollTo(0, 0);
    var overlay = document.querySelector(".loading-message");
    overlay.style.display = "none";
    var tomlv = document.querySelector(".blocklove");
    tomlv.style.display = "flex";
});

var sudahKlik = true;
document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';

document.getElementById("loveIn").onclick = async function() {
    if (sudahKlik) {
    audio.play();
    
    document.querySelector(".overlay").style.display = "none";
    
    stiker1.classList.add("scale1");
    teks1.classList.add("scale1");
} else {
    sudahKlik = true; // Tandai bahwa tombol sudah diklik
    document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';
}
}

function berjatuhan() {
  const heart = document.createElement("div");
  heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";
  heart.className = "heart-icon";
  heart.style.left = (Math.random() * 95) + "vw";
  heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
  document.body.appendChild(heart);
}

setInterval(function() {
  var heartArr = document.querySelectorAll(".heart-icon");
  if (heartArr.length > 100) {
    heartArr[0].remove();
  }
}, 100);

const scrollContainer = document.getElementById("scroll-container");
  const textContainer = document.getElementById("textsec2");

function autoScroll() {
    scrollContainer.scrollTop += 10;
}
const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040', imageWidth: 90, imageHeight: 90,}); 
const swalst = Swal.mixin({timer: 2400, allowOutsideClick: false, showConfirmButton: false, timerProgressBar: true, imageWidth: 90, imageHeight: 90,});
const scrollInterval = setInterval(autoScroll, 50);
async function jawab(){await swals.fire('Kirim jawabannya<br>ke WhatsApp aku, ya! 😆');window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;}

function tombol(){Tombol.style="margin-top:0;opacity:1;transform: scale(1);";ftom=1;} ftom = 0; jumlahKlik = 0;
function fungsibaru(btn) {
    var tombol = document.getElementById("" + btn);
    var tombolParent = tombol.parentNode;

    var tombolPosisiX = Math.floor(Math.random() * 50) + 1; // Posisi X acak antara 1 dan 50
    var tombolPosisiY = Math.floor(Math.random() * 75) + 1; // Posisi Y acak antara 1 dan 50
    var rotasiAcak = Math.floor(Math.random() * 360); // Rotasi acak antara 0 dan 359

    tombol.style.position = "relative";
    tombol.style.left = tombolPosisiX + "px";
    tombol.style.top = tombolPosisiY + "px";
    tombol.style.transform = "rotate(" + rotasiAcak + "deg)";
    tombolParent.appendChild(tombol);

    jumlahKlik++;

    if(jumlahKlik == 3){
      fungsigamau();
      jumlahKlik=0;
    }
}

async function fungsigamau(){await swalst.fire({title: '' + kataditolak.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src,})}
//function fungsimau(){Tombol.style="opacity:0";teks12.style = "font-size:17px;text-align:left;margin:0 55px 0 40px;opacity:0;transition:all .5s ease";setTimeout(function(){varteksditerima = teksditerima.innerHTML;teks12.style = "font-size:17px;text-align:left;margin:0 55px 0 40px;opacity:1;transform:scale(1);transition:all .6s ease";Tombol.style="display:none";teks12.innerHTML = "";katanimasi2();},300);}
function fungsimau(){jawab()}

function katanimasi2(){
	  stiker12.style = "transform:scale(0);opacity:0;transition:all .8s ease;margin-top:180px";
          setTimeout(function(){
          	stiker12a.src = stiker12b.src;
          	stiker12.style = "transition:all .8s ease;margin-top:180px";
              //Tombol.style="opacity:1;transform: scale(1);";ftom=1;
          },300);
	  new TypeIt("#teks12", {
      strings: ["" + varteksditerima], startDelay: 50, speed: 40, cursor: true,
      afterComplete: function(){
      	clearInterval(scrollInterval);
      	teks12.innerHTML = varteksditerima;
      	setInterval(berjatuhan, 200);
      },}).go();
}
