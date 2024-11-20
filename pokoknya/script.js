var teksSekarang = 1;const body = document.querySelector("body"); audio = new Audio('' + linkmp3.src); 
var swiper = new Swiper(".mySwiper", {
    allowTouchMove: false,
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
          
          if(teksSekarang == 2){
              Tombol.style="opacity:1;transform: scale(1);"
          } else if(teksSekarang == 3){
              setTimeout(katanimasi, 300);              
          }
          
        }, 50);
    },
    },
    navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev",},
});
    
varsubteks2a = subteks2a.innerHTML;
varsubteks2b = subteks2b.innerHTML;

initeks = teks3.innerHTML;
teks3.innerHTML = "";
function katanimasi(){
    teks3.innerHTML = "";
	new TypeIt("#teks3", {
    strings: [
        "" + varsubteks2a,
        "<br><br>" + varsubteks2b
    ],
    startDelay: 1,
    speed: 27,
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
      	//clearInterval(scrollInterval);
      	//teks3.innerHTML = initeks;
            
        setTimeout(function(){
            teksScale.classList.remove("scale1");
            stikerScale.classList.remove("scale1");
            teksScale.classList.add("scale0");
            stikerScale.classList.add("scale0");
               
            setTimeout(function(){stikerAkhir1.src = stikerAkhir2.src;teks3.innerHTML="";}, 450);
               
            setTimeout(function(){
                setTimeout(katanimasi2, 200);
                teksScale.classList.remove("scale0");
                stikerScale.classList.remove("scale0");
                teksScale.classList.add("scale1");
                stikerScale.classList.add("scale1");
            },550);
        },1400); //2000

    },}).go();
}

initeksTerakhir = teksTerakhir.innerHTML;
teksTerakhir.innerHTML = "";
function katanimasi2(){
    teks3.innerHTML = "";
	new TypeIt("#teks3", {
    strings: ["" + initeksTerakhir], startDelay: 10, speed: 27, cursor: true,
    afterComplete: function(){
      	teks3.innerHTML = initeksTerakhir;
          /*stikerScale.classList.remove("scale1");
          stikerScale.classList.add("scale0");
               
          setTimeout(function(){
              stikerAkhir1.src = stikerAkhir3.src;
              stikerScale.classList.remove("scale0");
              stikerScale.classList.add("scale1");
          },400);
          */
          
          setTimeout(function(){
	          teks3.innerHTML += `<br><br><br><span id="teksLove">${defTeksLove} 1% ${ambilRandomEmoji}</span>`;
	          animateteksnim();
	      }, 300);
    },}).go();
}

/* Teks Animasi Akhir */
const ambilRandomEmoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
const defTeksLove = teksLove.innerHTML;
teksLove.innerHTML += " 1% " + ambilRandomEmoji;
function animateteksnim() {
	//const teksnim = document.getElementById('teksnim');
    
    let percent = 1000;
    setTimeout(function() {
        const intervalId = setInterval(() => {
            if (percent < 999999) {
                percent += Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
                const randomEmoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
                teksLove.innerHTML = `<b>${defTeksLove} ${percent}% ${randomEmoji}</b>`;
            } else {
                clearInterval(intervalId);
                setInterval(falling, 200);
                
                percent = 999999;
                const randomEmoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
                teksLove.innerHTML = `<b>${defTeksLove} <span style='color:pink'>${percent}%</span> ${randomEmoji}</b>`;
                teksLove.style="font-size:20px;transition:all .8s ease";

                stiker3.classList.remove("scale1");
                stiker3.classList.add("scale0");
                setTimeout(function(){
                    stikerAkhir1.src = stikerAkhir3.src; 
                    stiker3.classList.remove("scale0");
                    stiker3.classList.add("scale1");
                },400);
            }
        }, 20); // Speed 0-100%
    }, 10); // Delay
}

initeks3 = teksTambahan.innerHTML;
teksTambahan.innerHTML = "";
function katanimasi3(){
    teks3.innerHTML = "";
    let kangenPercentage = 1;
    new TypeIt("#teks3", {
        strings: Array.from({length: 10}, (_, i) => `Ilvyouuuu ${i + 1}% ${ambilRandomEmoji}`),
        startDelay: 1,
        speed: 0.2,
        cursor: false,
        nextStringDelay: 0,
        afterComplete: function(){
            teks3.innerHTML += `<br><br><span id="teksLove">${defTeksLove} 11% ${ambilRandomEmoji}</span>`;
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

let jumlahKlik = 0;
let jumlahSkala = 1;
let sudah = false;
const pesanAlert = [teksTolak.innerHTML, teksTolak2.innerHTML, teksTolak3.innerHTML];
// const pesanAlert = ["Ihh ko gitu 😡", "Yakin Ngga Sayang Nih? 🥹", "Plissss 🥲"];
const teksDefault = teks2.innerHTML;
const stikerArray = Array.from(document.querySelectorAll('img[id^="stikerDua"]'));
const stikerDefault = stikerDuaDef.src;

function fungsibaru(btn) {
    var tombol = document.getElementById("" + btn);
    var tombolParent = tombol.parentNode;
    
    // Geser tombol secara acak
    var tombolPosisiX = Math.floor(Math.random() * 50) + 1;
    var tombolPosisiY = Math.floor(Math.random() * 75) + 1;
    var rotasiAcak = Math.floor(Math.random() * 360);

    tombol.style.position = "relative";
    tombol.style.left = tombolPosisiX + "px";
    tombol.style.top = tombolPosisiY + "px";
    tombol.style.transform = "rotate(" + rotasiAcak + "deg)";
    tombolParent.appendChild(tombol);

    // Menampilkan alert berdasarkan jumlah klik
    if (jumlahKlik < pesanAlert.length) {
    	//teks2.innerHTML = pesanAlert[jumlahKlik];
        //alert(pesanAlert[jumlahKlik]);
        teksScale.classList.remove("scale1");
        teksScale.classList.add("scale0");
        stikerScale.classList.remove("scale1");
        stikerScale.classList.add("scale0");
            setTimeout(function(){
	                if (jumlahKlik === 0) {
					    stikerDuaDef.src = stikerDefault;
					    teks2.innerHTML = teksDefault;
					} else {
	                	stikerDuaDef.src = stikerArray[jumlahKlik].src; 
	                    teks2.innerHTML = pesanAlert[jumlahKlik - 1];
	                }
                    stikerScale.classList.remove("scale0");
                    stikerScale.classList.add("scale1");
                    teksScale.classList.remove("scale0");
                    teksScale.classList.add("scale1");
               },270);
    } else {
        //alert("Sudah cukup bercandanya 😆");
    }

    // Perbesar tombol By
    var tombolBy = document.getElementById("By");
    tombolBy.style.transform = `scale(${1 + jumlahSkala * 0.2})`; // Menambah skala setiap klik

    
    jumlahKlik++;
    jumlahSkala++;

    if (jumlahKlik == 4) {
        //fungsiTerima();
        swiper.slideNext();
        jumlahKlik = 0;
        
        teksScale.classList.remove("scale1");
        teksScale.classList.add("scale0");
        stikerScale.classList.remove("scale1");
        stikerScale.classList.add("scale0");
            setTimeout(function(){
					stikerDuaDef.src = stikerDefault;
					teks2.innerHTML = teksDefault;
                    stikerScale.classList.remove("scale0");
                    stikerScale.classList.add("scale1");
                    teksScale.classList.remove("scale0");
                    teksScale.classList.add("scale1");
               },400);
    }
}

//////

function fungsiTerima() {
    Swal.fire({
        title: '' + teksTolak.innerHTML,
        imageUrl: '' + stikerTolak.src,
        imageWidth: 90,
        imageHeight: 90,
        imageAlt: 'by Feeldream.id',
        confirmButtonText: 'OK',
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: 2200,
        timerProgressBar: true,
        willClose: () => {
            console.log("Alert 1 closed automatically");
        }
    }).then(() => {
        // Munculkan alert kedua setelah alert pertama selesai
        Swal.fire({
            title: '' + teksTolak2.innerHTML,
            imageUrl: '' + stikerTolak2.src,
            imageWidth: 90,
            imageHeight: 90,
            imageAlt: 'by Feeldream.id',
            confirmButtonText: 'OK',
            showConfirmButton: false,
            allowOutsideClick: false,
            timer: 2200,
            timerProgressBar: true,
            willClose: () => {
                console.log("Alert 2 closed automatically");
            }
        });
    });
}
/////////////////////////

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'ArrowRight') {
        swiper.slideNext();
    }
});

document.addEventListener('click', function() {
    if (teksSekarang !== 2) {
    	if (fungsiBerfungsi === true) {
           swiper.slideNext();
        }
    }
});

/* Start All */
var overlay = document.querySelector(".loading-message");overlay.style.display = "none";var tomlv = document.querySelector(".blocklove");tomlv.style.display = "flex";
