document.addEventListener("click", function (e) {
  // Buat elemen lingkaran
  const circle = document.createElement("div");
  circle.classList.add("click-effect");
  circle.style.left = `${e.pageX}px`;
  circle.style.top = `${e.pageY}px`;

  // Tambahkan ke body
  document.body.appendChild(circle);

  // Hapus elemen setelah animasi selesai
  circle.addEventListener("animationend", () => {
    circle.remove();
  });
});
var teksSekarang = 1;
teksScale = document.querySelector('#teks' + teksSekarang);
stikerScale = document.querySelector('#stiker' + teksSekarang);
document.querySelector('.swiper-pagination').style.display = 'none';
const body = document.querySelector("body"); audio = new Audio('' + linkmp3.src); 
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
          
          /*if(teksSekarang == 2){
              Tombol.style="opacity:1;transform: scale(1);"
          } else */ if(teksSekarang == 2){
              setTimeout(katanimasi, 300);              
          }
          
        }, 50);
    },
    },
    navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev",},
});
    
varsubteks2a = subteks2a.innerHTML;
varsubteks2b = subteks2b.innerHTML;

initeks = teks2.innerHTML;
teks2.innerHTML = "";
function katanimasi(){
    teks2.innerHTML = "";
	new TypeIt("#teks2", {
    strings: [
        "" + varsubteks2a,
        //"<br>" + varsubteks2b
    ],
    startDelay: 1,
    speed: 30,
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
        teks2.innerHTML = varsubteks2a;
            
        setTimeout(function(){
            teksScale.classList.remove("scale1");
            stikerScale.classList.remove("scale1");
            teksScale.classList.add("scale0");
            stikerScale.classList.add("scale0");
               
            setTimeout(function(){stikerAkhir1.src = stikerAkhir2.src;teks2.innerHTML="";}, 450);
               
            setTimeout(function(){
                katamuncul2();
                teksScale.classList.remove("scale0");
                stikerScale.classList.remove("scale0");
                teksScale.classList.add("scale1");
                stikerScale.classList.add("scale1");
            },550);
        },2000); //2000
        

    },}).go();
}

initeksTerakhir = teksTerakhir.innerHTML;
let waktu = document.getElementById("timerLeft").innerText;
teksTerakhir.innerHTML = "";
function katamuncul2(){
	teks2.innerHTML = initeksTerakhir;
	const timerElement = document.getElementById('timerLeft');

  const hitungMundur = setInterval(() => {
    timerElement.textContent = waktu;
    waktu--;

    if (waktu < 0) {
      clearInterval(hitungMundur);
      setTimeout(() => {
      	teksScale.classList.remove("scale1");
            stikerScale.classList.remove("scale1");
            teksScale.classList.add("scale0");
            stikerScale.classList.add("scale0");
               
            setTimeout(function(){stikerAkhir1.src = stikerAkhir3.src;teks2.innerHTML="";}, 450);
               
            setTimeout(function(){
                setTimeout(katanimasi2, 200);
                teksScale.classList.remove("scale0");
                stikerScale.classList.remove("scale0");
                teksScale.classList.add("scale1");
                stikerScale.classList.add("scale1");
            },550);
      }, 700);
    }
  }, 1000);
}

initeksTerakhir2 = teksTerakhir2.innerHTML;
teksTerakhir2.innerHTML = "";
function katanimasi2(){
    teks2.innerHTML = "";
	new TypeIt("#teks2", {
    strings: ["" + initeksTerakhir2], startDelay: 10, speed: 30, cursor: true,
    afterComplete: function(){
      	teks2.innerHTML = initeksTerakhir2;
      
          stikerScale.classList.remove("scale1");
          stikerScale.classList.add("scale0");
               
          setTimeout(function(){
              stikerAkhir1.src = stikerAkhir4.src;
              stikerScale.classList.remove("scale0");
              stikerScale.classList.add("scale1");
          },400);
          
          setTimeout(function(){
	          //teks2.innerHTML += `<br><br><br><span id="teksLove">${defTeksLove} 1% ${ambilRandomEmoji}</span>`;
	          //animateteksnim();
	          //clearInterval(intervalId);
              setInterval(falling, 200);
	      }, 10);
    },}).go();
}

/* Teks Animasi Akhir */
const loveEmojis = ['']
const ambilRandomEmoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
// const defTeksLove = teksLove.innerHTML;
// teksLove.innerHTML += " 1% " + ambilRandomEmoji;
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

                stiker2.classList.remove("scale1");
                stiker2.classList.add("scale0");
                setTimeout(function(){
                    stikerAkhir1.src = stikerAkhir3.src; 
                    stiker2.classList.remove("scale0");
                    stiker2.classList.add("scale1");
                },400);
            }
        }, 20); // Speed 0-100%
    }, 10); // Delay
}

// initeks2 = teksTambahan.innerHTML;
// teksTambahan.innerHTML = "";
function katanimasi3(){
    teks2.innerHTML = "";
    let kangenPercentage = 1;
    new TypeIt("#teks2", {
        strings: Array.from({length: 10}, (_, i) => `Ilvyouuuu ${i + 1}% ${ambilRandomEmoji}`),
        startDelay: 1,
        speed: 0.2,
        cursor: false,
        nextStringDelay: 0,
        afterComplete: function(){
            teks2.innerHTML += `<br><br><span id="teksLove">${defTeksLove} 11% ${ambilRandomEmoji}</span>`;
            setTimeout(animateteksnim,100);
            
            // setInterval(falling, 200);
            setTimeout(function(){clearInterval(scrollInterval)},500);
        },
    }).go();
}

///////////////////////////////////

var sudahKlik = true;
var fungsiBerfungsi = false;
let indexPopup = 1;

document.getElementById("loveIn").onclick = async function() {
    if (sudahKlik) {
        audio.play();
        document.querySelector(".cover").style = "transform:scale(0);opacity:0;transition:all .8s ease";
        
        setTimeout(function(){
	        document.querySelector(".overlay").style.display = "none";
			
	        document.querySelector('.swiper-pagination').style.display = 'block';
	        
	        stiker1.classList.add("scale1");
			teks1.classList.add("scale1");
			setTimeout(function(){
		         teks1.classList.remove("scale1");
		         stiker1.classList.remove("scale1");
		         teks1.classList.add("scale0");
		         stiker1.classList.add("scale0");
		         setTimeout(function(){teksnimasiAwal()}, 540);
		      }, 2300);
	          
			wallpaper.style="transform:scale(1)";
			setTimeout(function(){fungsiBerfungsi = true}, 300);
	        
        },500);
    } else {
        sudahKlik = true; // Tandai tombol sudah diklik
        document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';
    }
}
//document.getElementById("loveIn").onclick = mulaiScript();

initeksAwal = teks1b.innerHTML;
teks1b.innerHTML = "";
function teksnimasiAwal(){
    teks1.innerHTML = "";
    teks1.classList.remove("scale0");
	stiker1.classList.remove("scale0");
	teks1.classList.add("scale1");
	stiker1.classList.add("scale1");
	stikerAwal.src = stikerDefault;
	new TypeIt("#teks1", {
    strings: ["" + initeksAwal], startDelay: 50, speed: 35, cursor: true,
    afterComplete: function(){
        teks1.innerHTML = initeksAwal;
        Tombol.style="opacity:1;transform: scale(1)";
        
        /*
        stiker1.classList.remove("scale1");
        stiker1.classList.add("scale0");
        setTimeout(function(){
            stikerAwal.src = stikerDefault;
            stiker1.classList.remove("scale0");
            stiker1.classList.add("scale1");
            Tombol.style="opacity:1;transform: scale(1)";
        },300);
        */
        
    },}).go();
}

const scrollContainer = document.getElementById("scroll-container");
const textContainer = document.getElementById("textsec2");

function autoScroll() {scrollContainer.scrollTop += 10;}
const scrollInterval = setInterval(autoScroll, 50); 

/////////////////

let jumlahKlik = 0;
let jumlahSkala = 1;
let sudah = false;
// const pesanAlert = ["Ihh ko gitu ", "Yakin Gamau Nih? ", "Plissss Mau Dongg "];
const pesanAlert = [teksTolak.innerHTML, teksTolak2.innerHTML, teksTolak3.innerHTML];
const teksDefault = teks1.innerHTML;
const stikerArray = Array.from(document.querySelectorAll('img[id^="stikerPertanyaan"]'));
const stikerDefault = stikerPertanyaanDef.src;

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
    	//teks1.innerHTML = pesanAlert[jumlahKlik];
        //alert(pesanAlert[jumlahKlik]);
        teksScale.classList.remove("scale1");
        teksScale.classList.add("scale0");
        stikerScale.classList.remove("scale1");
        stikerScale.classList.add("scale0");
            setTimeout(function(){
	                if (jumlahKlik === 0) {
					    stikerAwal.src = stikerDefault;
					    teks1.innerHTML = teksDefault;
					} else {
	                	stikerAwal.src = stikerArray[jumlahKlik].src; 
	                    teks1.innerHTML = pesanAlert[jumlahKlik - 1];
	                }
                    stikerScale.classList.remove("scale0");
                    stikerScale.classList.add("scale1");
                    teksScale.classList.remove("scale0");
                    teksScale.classList.add("scale1");
               },270);
    } else {
        //alert("Sudah cukup bercandanya");
    }

    // Perbesar tombol By
    var tombolBy = document.getElementById("By");
    tombolBy.style.transform = `scale(${1 + jumlahSkala * 0.2})`; // Menambah skala setiap klik

    
    jumlahKlik++;
    jumlahSkala++;

    if (jumlahKlik == 4) {
        //fungsiTerima();
        //swiper.slideNext();
        jumlahKlik = 0;
        
        teksScale.classList.remove("scale1");
        teksScale.classList.add("scale0");
        stikerScale.classList.remove("scale1");
        stikerScale.classList.add("scale0");
            setTimeout(function(){
					stikerAwal.src = stikerDefault;
					teks1.innerHTML = teksDefault;
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
    if (teksSekarang !== 1) {
    	if (fungsiBerfungsi === true) {
           swiper.slideNext();
        }
    }
});

async function tampilPopup(teks, stiker, waktu = 2000){
	await Swal.fire({
        title: '' + teks,
        imageUrl: '' + stiker,
        imageWidth: 90,
        imageHeight: 90,
        imageAlt: 'by Feeldream.id',
        confirmButtonText: 'OK',
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: waktu,
        timerProgressBar: true,
        willClose: () => {
            
        }
    });
    
    indexPopup++;
    
    if(indexPopup==5){
	    document.querySelector('.swiper-pagination').style.display = 'block';
	        
	        stiker1.classList.add("scale1");
			teks1.classList.add("scale1");
			setTimeout(function(){
		         teks1.classList.remove("scale1");
		         stiker1.classList.remove("scale1");
		         teks1.classList.add("scale0");
		         stiker1.classList.add("scale0");
		         setTimeout(function(){teksnimasiAwal()}, 540);
		      }, 2300);
	          
			wallpaper.style="transform:scale(1)";
			setTimeout(function(){fungsiBerfungsi = true}, 300);
	}
}

/* Start All */
// var tomlv = document.querySelector(".blocklove");
// tomlv.style.display = "flex";

function falling() {const heart = document.createElement("div");heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100;stroke:#FFC2B8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";heart.className = "heart-icon";heart.style.left = (Math.random() * 95) + "vw";heart.style.animationDuration = (Math.random() * 3) + 2 + "s";document.body.appendChild(heart);}
setInterval(function() {var heartArr = document.querySelectorAll(".heart-icon");if (heartArr.length > 100) {heartArr[0].remove();}}, 100);
