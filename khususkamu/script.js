var teksSekarang = 1;const body = document.querySelector("body"); audio = new Audio('' + linkmp3.src); 
var swiper = new Swiper(".mySwiper", {
    pagination: {el: ".swiper-pagination", dynamicBullets: false,},
    on: {
    slideChange: function () {
        teksSekarang++;
        teksScale = document.querySelector('#teks' + teksSekarang);
        stikerScale = document.querySelector('#stiker' + teksSekarang);
        Tombol = document.querySelector('#Tombol');

        setTimeout(function(){
          teksScale.classList.add("scale1");
          stikerScale.classList.add("scale1");
          
          if(teksSekarang == 4){
              setTimeout(katanimasi, 300);              
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
    strings: ["" + initeks], startDelay: 10, speed: 25, cursor: true,
    afterComplete: function(){
      	teks4.innerHTML = initeks;
      
          setTimeout(function(){
            teksScale.classList.remove("scale1");
            teksScale.classList.add("scale0");
            stikerScale.classList.remove("scale1");
            stikerScale.classList.add("scale0");
               
            setTimeout(function(){teksScale.innerHTML="";stikerAkhir1.src = stikerAkhir2.src;}, 400);
            setTimeout(function(){
            	setTimeout(katanimasi3, 100);
                teksScale.classList.remove("scale0");
                stikerScale.classList.remove("scale0");
                teksScale.classList.add("scale1");
                stikerScale.classList.add("scale1");
            },550);
            
            }, 1100);
            
            
          /*
        setTimeout(function(){
            teksScale.classList.remove("scale1");
            stikerScale.classList.remove("scale1");
            teksScale.classList.add("scale0");
            stikerScale.classList.add("scale0");
               
            setTimeout(function(){stikerAkhir1.src = stikerAkhir2.src;teks4.innerHTML="";}, 450);
               
            setTimeout(function(){
                setTimeout(katanimasi2, 200);
                teksScale.classList.remove("scale0");
                stikerScale.classList.remove("scale0");
                teksScale.classList.add("scale1");
                stikerScale.classList.add("scale1");
            },550);
        },1800); //2000
        */
    },}).go();
}

/* Teks Animasi Akhir */
function animateteksnim() {
	//const teksnim = document.getElementById('teksnim');
    //const emojiAkhir = ['💖'];
    let percent = 10;
    setTimeout(function() {
        const intervalId = setInterval(() => {
            if (percent < 9999) {
                percent += Math.floor(Math.random() * (100 - 10 + 1)) + 10;
                const randomEmoji = emojiAkhir[Math.floor(Math.random() * emojiAkhir.length)];

			    teksLove.innerHTML = `<b>${teksLoveBawaan} ${percent}% ${randomEmoji}</b>`;
            } else {
                clearInterval(intervalId);
                percent = 9999;
                const randomEmoji = emojiAkhir[Math.floor(Math.random() * emojiAkhir.length)];
                teksLove.innerHTML = `<b>${teksLoveBawaan} <span style='color:yellow'>${percent}%</span> ${randomEmoji}</b>`;
                teksLove.style="font-size:20px;transition:all .8s ease";

                setInterval(falling, 200);
                stiker4.classList.remove("scale1");
                stiker4.classList.add("scale0");
                setTimeout(function(){
                    stikerAkhir1.src = stikerAkhir3.src; 
                    stiker4.classList.remove("scale0");
                    stiker4.classList.add("scale1");
                },400);
            }
        }, 20); // Speed 0-100%
    }, 10); // Delay
}

//initeks2 = teksJawaban.innerHTML;
//teksJawaban.innerHTML = "";
function katanimasi2(){
    teks4.innerHTML = "";
	new TypeIt("#teks4", {
    strings: ["<span style='font-size:17px;line-height:1.5em'>Cukup tau ah kamu<br>ga kangen aku 😡🫵</span>", "<span style='font-size:17px;line-height:1.5em'><br><b>Padahal... 🫠</b></span>"],
    startDelay: 10,
    speed: 25,
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
        teks4.innerHTML = initeks2;
      
      setTimeout(function(){
        teksScale.classList.remove("scale1");
        teksScale.classList.add("scale0");
        stiker4.classList.remove("scale1");
        stiker4.classList.add("scale0");
            setTimeout(function(){
                teks4.innerHTML = "";
                setTimeout(katanimasi3, 100);
                     
               	stikerAkhir1.src = stikerAkhir3.src; 
                    stiker4.classList.remove("scale0");
                    stiker4.classList.add("scale1");
                    teksScale.classList.remove("scale0");
                    teksScale.classList.add("scale1");
               },400);
      },1500); //1800
    },}).go();
}

//initeks4 = teksTambahan.innerHTML;
//teksTambahan.innerHTML = "";
function katanimasi3(){
    teks4.innerHTML = "";
    let kangenPercentage = 1;
    const randomEmoji = emojiAkhir[Math.floor(Math.random() * emojiAkhir.length)];
    new TypeIt("#teks4", {
        strings: Array.from({length: 10}, (_, i) => `I Love Youu ${i + 1}% ` + randomEmoji),
        startDelay: 50,
        speed: 10,
        cursor: false,
        nextStringDelay: 0,
        afterComplete: function(){
        	teksLoveBawaan = teksLove.innerHTML;
        	teksLove.innerHTML += ' 1% ' + randomEmoji;
            teks4.innerHTML += `<br><br>` + teksTambahan.innerHTML;
            teksTambahan.innerHTML="";
            setTimeout(animateteksnim,100);
            
            // setInterval(falling, 200);
            setTimeout(function(){clearInterval(scrollInterval)},500);
        },
    }).go();
}

///////////////////////////////////

var sudahKlik = true;
var fungsiBerfungsi = false;
document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';

document.getElementById("loveIn").onclick = function() {
    if (sudahKlik) {
        audio.play();
        document.querySelector(".overlay").style.display = "none";
        
        stiker1.classList.add("scale1");
        teks1.classList.add("scale1");
        wallpaper.style="transform:scale(1)";
        
        setTimeout(function(){fungsiBerfungsi = true}, 300);
    } else {
        sudahKlik = true; // Tandai tombol sudah diklik
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

jumlahKlik = 0;sudah=false;

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
    //tolakteks.style="transform:scale(1)";
    /*if(sudah==false){
      sudah=true;
      second_stiker.style.transform = "scale(0)";
      setTimeout(function() {
          second_stiker.style.transform = "scale(.9)";
          inistiker3.src = inistiker4.src;
      }, 300);
    }*/

    if(jumlahKlik == 3){
        swiper.slideNext();
        jumlahKlik=0;
    }
  }

//////

function fungsiTerima() {
    Swal.fire({
        title: '' + teksTerima.innerHTML,
        imageUrl: '' + stikerTerima.src,
        imageWidth: 90,
        imageHeight: 90,
        imageAlt: 'by Feeldream.id',
        confirmButtonText: 'OK',
        allowOutsideClick: false,
    });
}
/////////////////////////

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'ArrowRight') {
        swiper.slideNext();
    }
});

document.addEventListener('click', function() {
    //if (teksSekarang !== 3) {
    	if (fungsiBerfungsi === true) {
           swiper.slideNext();
        }
    //}
});

/* Start All */
setTimeout(function(){var overlay = document.querySelector(".loading-message");overlay.style.display = "none";var tomlv = document.querySelector(".blocklove");tomlv.style.display = "flex";}, 1000);
