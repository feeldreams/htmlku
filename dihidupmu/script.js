var teksSekarang = 1;var ftom=0;var pesanwhatsapp = "";const body = document.querySelector("body"); 

    const audio=document.getElementById("linkmp3"),btn=document.getElementById("musicBtn");
    btn.classList.add("pause");
    btn.onclick=()=>{audio.paused?(audio.play(),btn.className="music-btn pause"):(audio.pause(),btn.className="music-btn play")};

    var swiper = new Swiper(".mySwiper", {
      pagination: {el: ".swiper-pagination",dynamicBullets: true,}, allowTouchMove: false,
      on: {
      slideChange: function () {
        var currentIndex = swiper.activeIndex;
        //var colors = [wallpaper2.src, wallpaper3.src, wallpaper4.src];
        //wallpaper.src = colors[currentIndex % colors.length];

        teksSekarang++;
        teksScale = document.querySelector('#teks' + teksSekarang);
        stikerScale = document.querySelector('#stiker' + teksSekarang);
        tombolScale = document.querySelector('#Tombol' + teksSekarang);
        
        setTimeout(function(){
          teksScale.classList.add("scale1");
          stikerScale.classList.add("scale1");
          if(tombolScale){tombolScale.classList.add("scale1");}
          if(teksSekarang == 2){iteks2.classList.add("scale1");}
          if(teksSekarang == 3){iteks3.classList.add("scale1");}
          if(teksSekarang == 4){iteks4.classList.add("scale1");}
          
          if(teksSekarang == 5){
            pesanwhatsapp =
    "1.%20" + iteks2.value +
    "%0A%0A2.%20" + iteks3.value +
    "%0A%0A3.%20" + iteks4.value;
    
            katanimasi()
          }
        }, 50);
      },
      },
      navigation: {nextEl: ".swiper-button-next",prevEl: ".swiper-button-prev",},
    });
	    
    varteks = teks5.innerHTML; teks5.innerHTML = "";
    function katanimasi(){
	  new TypeIt("#teks5", {
      strings: ["" + varteks], startDelay: 250, speed: 22, cursor: true,
      afterComplete: function(){
      	clearInterval(scrollInterval);
      	teks5.innerHTML = varteks;
          Tombol.style="margin-top:30px;opacity:1;transform: scale(1);";ftom=1;
          //setInterval(berjatuhan, 200);
          mulaiKelopak('game-canvas');
      },}).go();
    }

    // Animasi Kelopak Bunga
	let animationFrameId;
	function mulaiKelopak(canvasId) {
	  const canvas = document.getElementById(canvasId);
	  if (!canvas) return;
	  const ctx = canvas.getContext('2d');
	  canvas.width = window.innerWidth;
	  canvas.height = window.innerHeight;
	
	  const kelopak = Array.from({ length: 20 }, () => ({
	    x: Math.random() * canvas.width,
	    y: Math.random() * canvas.height,
	    radius: Math.random() * 5 + 2,
	    speed: Math.random() * 0.5 + 1
	  }));
	
	  function gambarKelopak() {
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    kelopak.forEach(petal => {
	      ctx.beginPath();
	      ctx.arc(petal.x, petal.y, petal.radius, 0, Math.PI * 2);
	      ctx.fillStyle = 'rgba(255,255,255, 0.2)';
	      ctx.fill();
	      petal.y += petal.speed;
	      if (petal.y > canvas.height) petal.y = -petal.radius;
	      petal.x += Math.sin(petal.y / 50) * 2;
	    });
	    animationFrameId = requestAnimationFrame(gambarKelopak); // Simpan ID animasi
	  }
	  gambarKelopak();
    }

///////

setTimeout(()=>{
    window.scrollTo(0, 0);
    var overlay = document.querySelector(".loading-message");
    overlay.style.display = "none";
    var tomlv = document.querySelector(".blocklove");
    tomlv.style.display = "flex";
}, 500);

function berjatuhan() {const heart = document.createElement("div");heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";heart.className = "heart-icon";heart.style.left = (Math.random() * 95) + "vw";heart.style.animationDuration = (Math.random() * 3) + 2 + "s";document.body.appendChild(heart);}
setInterval(function() {var heartArr = document.querySelectorAll(".heart-icon");if (heartArr.length > 100) {heartArr[0].remove();}}, 100);

const scrollContainer = document.getElementById("scroll-container");
const textContainer = document.getElementById("textsec2");
function autoScroll() {scrollContainer.scrollTop += 10}
const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040', imageWidth: 90, imageHeight: 90,}); 
const swalst = Swal.mixin({timer: 2400, allowOutsideClick: false, showConfirmButton: false, timerProgressBar: true, imageWidth: 90, imageHeight: 90,});
const scrollInterval = setInterval(autoScroll, 50);
async function jawab(){await swals.fire('Kirim jawabannya ke WhatsApp aku, ya! 😆');window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;}

function tombol(){Tombol.style="margin-top:0;opacity:1;transform: scale(1);";ftom=1;} ftom = 0; jumlahKlik = 0;
function fungsibaru(btn) {
    var tombol = document.getElementById("" + btn);
    var tombolParent = tombol.parentNode;

    var tombolPosisiX = Math.floor(Math.random() * 50) + 1; // Posisi X acak antara 1 dan 50
    var tombolPosisiY = Math.floor(Math.random() * 75) + 1; // Posisi Y acak antara 1 dan 75
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
//function fungsimau(){Tombol.style="opacity:0";teks5.style = "font-size:17px;text-align:left;margin:0 55px 0 40px;opacity:0;transition:all .5s ease";setTimeout(function(){varteksditerima = teksditerima.innerHTML;teks5.style = "font-size:17px;text-align:left;margin:0 55px 0 40px;opacity:1;transform:scale(1);transition:all .6s ease";Tombol.style="display:none";teks5.innerHTML = "";katanimasi2();},300);}
function fungsimau(){jawab()}

function katanimasi2(){
	  stiker12.style = "transform:scale(0);opacity:0;transition:all .8s ease;margin-top:180px";
          setTimeout(function(){
          	stiker12a.src = stiker12b.src;
          	stiker12.style = "transition:all .8s ease;margin-top:180px";
              //Tombol.style="opacity:1;transform: scale(1);";ftom=1;
          },300);
	  new TypeIt("#teks5", {
      strings: ["" + varteksditerima], startDelay: 50, speed: 40, cursor: true,
      afterComplete: function(){
      	clearInterval(scrollInterval);
      	teks5.innerHTML = varteksditerima;
      	setInterval(berjatuhan, 200);
      },}).go();
}

swiperBerfungsi = false;
// document.addEventListener('click', function() {
//      if(swiperBerfungsi == true){swiper.slideNext()}
// });

var sudahKlik = true;
document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';

document.getElementById("loveIn").onclick = async function() {
    if (sudahKlik) {
    audio.play();
    musicBtn.style.display = "flex";
    
    document.querySelector(".overlay").style.display = "none";
    setTimeout(()=>{
    stiker1.classList.add("scale1");
    teks1.classList.add("scale1");
    setTimeout(function(){swiperBerfungsi=true;}, 500);
    setTimeout(()=>{swiper.slideNext();},2100);
    }, 500);
} else {
    sudahKlik = true; 
    document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';
}
}
