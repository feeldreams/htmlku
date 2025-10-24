function fungsiWA() {
  const element = document.getElementById("nomorWA");let phoneNumber = null;
  if (element) {const raw = element.innerHTML;phoneNumber = raw ? raw.trim() : null;if (phoneNumber === "62") {phoneNumber = "";}}

  const message = "" + pesanWA.innerHTML;
  
  const encodedMessage = message;
  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(waLink, "_blank");
}

var teksSekarang = 1;
const body = document.querySelector("body"); 
audio = new Audio('' + linkmp3.src); 
var swiper = new Swiper(".mySwiper", {
    pagination: {el: ".swiper-pagination", dynamicBullets: false,},
    allowSlidePrev: true,
    allowTouchMove: false,
    on: {
    slideChange: function () {
        teksSekarang++;
        teksScale = document.querySelector('#teks' + teksSekarang);
        stikerScale = document.querySelector('#stiker' + teksSekarang);
        Tombol = document.querySelector('#Tombol');

        setTimeout(function(){
        	
		        if(teksSekarang < 3){
		          teksScale.classList.add("scale1");
		          stikerScale.classList.add("scale1");
		        } else {
                  teksScale.classList.add("scale1");
                  setTimeout(startGame,100);
                  swiper.allowSlidePrev = false; // Nonaktifkan kembali ke slide sebelumnya saat slide 3
                  swiper.allowSlideNext = false;
                }
          
        }, 50);
    },
    },
    navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev",},
});
    
initeks = teks4.innerHTML;
teks4.innerHTML = "";
function katanimasi(){
    teks4.innerHTML = "";
	new TypeIt("#teks4", {
    strings: ["" + initeks], startDelay: 100, speed: 30, cursor: true,
    afterComplete: function(){
      	teks4.innerHTML = initeks;
      
          setTimeout(function(){
            stikerScale.classList.remove("scale1");
            stikerScale.classList.add("scale0");
               
            setTimeout(function(){stikerAkhir1.src = stikerAkhir2.src;}, 275);
            setTimeout(function(){
                setInterval(falling, 200);
                Tombol.style="transform:scale(1);opacity:1";
                setTimeout(function(){clearInterval(scrollInterval)},500);
                stikerScale.classList.remove("scale0");
                stikerScale.classList.add("scale1");
            },350);
            
            }, 100);
            
    },}).go();
}

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
        
        //setTimeout(function(){fungsiBerfungsi = true}, 300);
        setTimeout(() => {swiper.slideNext();setTimeout(() => {swiper.slideNext();}, 2300);}, 2000);
        }, 500);
    } else {
        sudahKlik = true; 
        document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';
    }
}

function falling() {
    const heart = document.createElement("div");
    heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100;stroke:#FFC2B8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";
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
function autoScroll() {
    scrollContainer.scrollTop += 10;
}
const scrollInterval = setInterval(autoScroll, 50); 

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'ArrowRight') {
        if (teksSekarang < 3) { // Hanya boleh maju sampai slide 3
            swiper.slideNext();
        }
    }
});

document.addEventListener('click', function() {
    if (teksSekarang < 3) {
    	if (fungsiBerfungsi === true) {
           swiper.slideNext();
        }
    }
});

setTimeout(function(){
    var overlay = document.querySelector(".loading-message");
    overlay.style.display = "none";
    var tomlv = document.querySelector(".blocklove");
    tomlv.style.display = "flex";
}, 1500);


const cards = document.querySelectorAll(".card");
const gameBoard = document.querySelector(".game-board");
let lockBoard = false;

function startGame() {
    cards.forEach(card => {
        card.style.animation = "appear .9s forwards";
        setupScratchCard(card);
    });
    shuffle();
}

function setupScratchCard(card) {
    const canvas = card.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 40;
    canvas.height = 40;

    // Isi canvas dengan lapisan abu-abu untuk "digosok"
    ctx.fillStyle = "rgba(255,255,255,.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let isScratching = false;
    let revealed = false;

    function handleScratch(e) {
        if (lockBoard || revealed) return;

        const rect = canvas.getBoundingClientRect();
        const x = (e.type.includes("mouse") ? e.clientX : e.touches[0].clientX) - rect.left;
        const y = (e.type.includes("mouse") ? e.clientY : e.touches[0].clientY) - rect.top;

        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2); // Lingkaran kecil untuk efek gosok
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";

        // Cek apakah sudah cukup digosok (50% area terbuka)
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        let transparentPixels = 0;
        for (let i = 3; i < imageData.length; i += 4) {
            if (imageData[i] === 0) transparentPixels++;
        }
        const totalPixels = canvas.width * canvas.height;
        if (transparentPixels / totalPixels > 0.1 && !revealed) {
            revealed = true;
            card.classList.add("flipped");
            card.textContent = card.dataset.emoji;
            canvas.style.display = "none"; // Sembunyikan canvas setelah terbuka
            if (card.dataset.emoji === "💣") {
                lockBoard = true;
                endGame();
            }
        }
    }

    canvas.addEventListener("mousedown", () => isScratching = true);
    canvas.addEventListener("mouseup", () => isScratching = false);
    canvas.addEventListener("mousemove", (e) => { if (isScratching) handleScratch(e); });
    canvas.addEventListener("touchstart", () => isScratching = true);
    canvas.addEventListener("touchend", () => isScratching = false);
    canvas.addEventListener("touchmove", (e) => { if (isScratching) handleScratch(e); });
}

function endGame() {
    setTimeout(() => {
        document.querySelector(".main-card").style = "transform:scale(0);opacity:0 !important;transition:all .7s ease";
        stikerScale = document.querySelector('#stiker4');
        teksScale = document.querySelector('#teks4');
    
        setTimeout(() => {
        	const elements = document.querySelectorAll('.swiper-pagination');
			elements.forEach(el => {
			  el.style.display = 'none';
			});
  
            document.querySelector(".main-card").style.display = "none";
            
            scrollContainer.classList.remove("abs");
            scrollContainer.classList.remove("scale0");
            scrollContainer.classList.add("scale1");

            stikerScale.classList.remove("abs");
            stikerScale.classList.remove("scale0");
            stikerScale.classList.add("scale1");

            setTimeout(katanimasi, 200);
        }, 500);
    }, 800);
}

function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
}
