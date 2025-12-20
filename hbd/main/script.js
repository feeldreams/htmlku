const body = document.querySelector("body"); const iniwp = [];iden = 1; const swals = Swal.mixin({timer: 99999, allowOutsideClick: false, showConfirmButton: true, timerProgressBar: false, imageHeight: 90,}); audio = new Audio('' + linkmp3.src); ftganti=0;fungsi=0;fungsiAwal=0;deffotostiker=fotostiker.src;
function berjatuhan() {const heart = document.createElement("div"); heart.className = "fas fa-heart"; heart.style.left = (Math.random() * 90)+"vw"; heart.style.animationDuration = (Math.random()*3)+2+"s"; body.appendChild(heart);} setInterval(function name(params) {var heartArr = document.querySelectorAll(".fa-heart"); if (heartArr.length > 100) {heartArr[0].remove()}},100);Content.style = "opacity:1;margin-top:14vh"; 

const box = document.getElementById('pergeseran');
const totalSlide = box.children.length;
console.log('Total Slide: ', totalSlide);
totalPesan = totalSlide;

var date = new Date();
var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var hours = date.getHours();
var minutes = date.getMinutes();

// Tambahkan awalan nol jika jam atau menit kurang dari 10
if (hours < 10) {hours = "0" + hours;}
if (minutes < 10) {minutes = "0" + minutes;}

var day = days[date.getDay()];
var dateNum = date.getDate();
var month = months[date.getMonth()];
var year = date.getFullYear();

console.log(hours + "." + minutes + " WIB - " + day + ", " + dateNum + " " + month + " " + year);
// Dapatkan elemen yang ingin ditambahkan watermark
var element = document.getElementById("Content");

// Buat elemen baru untuk menampung watermark
var watermark = document.createElement("div");

// Setel teks watermark dan propertinya
watermark.textContent = day + ", " + dateNum + " " + month + " " + year;
watermark.style = "color:white;opacity:.5;font-size:10px;position:fixed;bottom:25px;left:25px;z-index:2";

// Tambahkan elemen watermark ke dalam elemen utama
element.appendChild(watermark);

//////////////////////////////////////////////////

  var sudahklik = false;
  sudahklik = true;
      	loveIn.innerHTML = "<label class='lovein'><svg class='line' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg></label>";
  document.getElementById("loveIn").onclick = function() {
      if(sudahklik == true && fungsiAwal==0){
        loveIn.style="transition:all .5s ease;opacity:0";
        ftAwal.style="transition:all .5s ease;opacity:0";
        ket.style="transition:all .5s ease;opacity:0";
        fungsiAwal=1;setTimeout(initengahan,300);
      } else {
      	
      }
    }
  
  function initengahan(){
    ftAwal.style="display:none";loveIn.style="display:none";ket.style="display:none";
    Content.style = "opacity:1;margin-top:10vh";
    setTimeout(inipesan,200);audio.play();
  }
  
aktigeser=0;thisgeser=1;
document.getElementById("bodyblur").onclick = function() {multifungsi()}

function multifungsi(){
  if(aktigeser==1){
    if(thisgeser==totalPesan){aksiakhir()}
    document.getElementById('pergeseran').scrollLeft += 300;
    hsementara();
    //ftganti++;
    //fthilang();
  }
  if(thisgeser==100){Tombol.style="";setTimeout(aksibalas,150);}
}

  async function inipesan(){nama = "Kamu";window.nama = nama;mulainama();}  
  
  async function mulainama() {
    setTimeout(pgmuncul,200);
    //ftmuncul();
  }

  function hsementara(){
    //ketgeser.style="position:relative;";
    Tombol.style="";
    thisgeser+=1;aktigeser=0;setTimeout(munculkembali,500)
  }
  function munculkembali(){
    if(thisgeser<=totalPesan){
      //ketgeser.style="position:relative;transform:scale(1);opacity:.7";
      Tombol.style="opacity:1;transform: scale(1)";
      aktigeser=1;
    }
    if(thisgeser==50){tmbl.innerHTML = "💌 Balas";Tombol.style="opacity:1;transform: scale(1)";thisgeser=100;}
    //if(thisgeser==totalPesan){aksiakhir();thisgeser=50}
  }
  
  function aksiakhir(){
  	   pergeseran.style="position:relative;";
         //ketgeser.style="position:relative";
         Tombol.style="";
         setTimeout(aksibalas,500);
  }
  
  function kalimatakhir(){
  	new TypeIt("#kalimat", {
      strings: ["" + katakata], startDelay: 50, speed: 54, cursor: true,
      afterComplete: function(){
      	kalimat.innerHTML = katakata;
          setTimeout(munculteksnim,300);
          //tmbl.innerHTML = "💌 Balas";thisgeser=100;
          //Tombol.style="opacity:1;transform: scale(1)";
      },}).go();
  }
  function munculteksnim(){
    klganti.style="display:none";
    teksnim.style="position:relative;opacity:1;transform:scale(1);";
    setTimeout(jjteksnim,550);
    setInterval(berjatuhan,250);
  }
  function jjteksnim(){teksnim.style.animation="rto .8s infinite alternate";}
  
  function ftmuncul(){
    if(ftganti==0){fotostiker.src = deffotostiker;}
    if(ftganti==1){fotostiker.src = fotostiker1.src;}
    if(ftganti==2){fotostiker.src = fotostiker2.src;}
    if(ftganti==3){fotostiker.src = fotostiker3.src;}
    if(ftganti<=10){fotostiker.style="display:inline-flex;opacity:1;transform:scale(1)";}
  }
  function fthilang(){fotostiker.style="display:inline-flex;opacity:0;transform:scale(0)";if(ftganti<10){setTimeout(ftmuncul,250)}}
  function jjfoto(){fotostiker.style.animation="rto .8s infinite alternate";}
  
  function pgmuncul(){pergeseran.style="position:relative;opacity:1;transform:scale(1);";setTimeout(munculkembali,500)}
  function bqmuncul(){
    if(poinjwb==1){
      katakata = kalimat.innerHTML;kalimat.innerHTML = "";
    }else{
      klganti.innerHTML="";katakata = kalimat.innerHTML;kalimat.innerHTML = "";
    }
    Content.style = "opacity:1;margin-top:8vh";fotostiker.style="display:none";pergeseran.style="display:none";Tombol.style="";bq.style = "position:relative;opacity:1;visibility:visible;margin-top:5vh;transform: scale(1);";
    setTimeout(kalimatakhir,200);ftganti=0;fthilang();
  }
  function bqhilang(){wallpaper.style="transform: scale(2);";bodyblur.style="opacity:.3";bq.style = "position:relative;transition:all .7s ease;";}
