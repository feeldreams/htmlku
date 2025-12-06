function hapus(){counter.style.display="none"}
function keatas(){window.scrollTo(0, 0);}
 
//////////////////////////////////////////////////

const body = document.querySelector("body"); audio = new Audio('' + linkmp3.src); function berjatuhan() {const heart = document.createElement("div"); heart.className = "fas fa-heart"; heart.style.left = (Math.random() * 90)+"vw"; heart.style.animationDuration = (Math.random()*3)+2+"s"; body.appendChild(heart);} setInterval(function name(params) {var heartArr = document.querySelectorAll(".fa-heart"); if (heartArr.length > 100) {heartArr[0].remove()}},100);

initeksnimasi = teksnimasi.innerHTML;teksnimasi.innerHTML="";
function katateksnimasi(){
  	new TypeIt("#teksnimasi", {
      strings: ["" + initeksnimasi], startDelay: 50, speed: 30, cursor: true,
      afterComplete: function(){
      	teksnimasi.innerHTML = initeksnimasi;
          setTimeout(smn,200);
      },}).go();
}

fungsi=0;fungsiklik=0;skrg=1;
function tes(){
  if(fungsi==0){
    playaud();
    initom.style="opacity:0;bottom:0;";
    window.scrollBy({top: tinggi,behavior: 'smooth'});
    fungsi = 1;
    skrg++;
    if(skrg<=2){setTimeout(smn,700);}
    if(skrg==3){setTimeout(katateksnimasi,500);}
    if(skrg==4){setTimeout(muncultombol,1200);}
  }
}
  function smn(){fungsi=0;initom.style="";}
  initom.style="opacity:0;bottom:0;transition:none";

  /*fetch('counter.php')
            .then(response => response.text())
            .then(data => {
                document.getElementById("counter").innerHTML = data;
  });
  setTimeout(hapus,8000);*/
  
  function muncultombol(){fungtom=1;Tombol.style="opacity:1;transform:scale(1)";}
  
function aksiakhir() {
  if(fungsiklik==0){
    //wpakhir.style="opacity:.75;transition:all 1s ease;";
    fungsiklik=1;
    setTimeout(katajudul,100)
  }
}

function katajudul(){
  	new TypeIt("#judulakhir", {
      strings: ["" + teksjudulakhir], startDelay: 50, speed: 50, cursor: true,
      afterComplete: function(){
      	judulakhir.innerHTML = teksjudulakhir;
          setTimeout(katakata,400);
      },}).go();
}
function katakata(){
	  new TypeIt("#kalimatakhir", {
      strings: ["" + tekskalimatakhir], startDelay: 50, speed: 48, cursor: true,
      afterComplete: function(){
      	kalimatakhir.innerHTML = tekskalimatakhir;
          judulakhir.style="opacity:0;transform:scale(0);";
          setTimeout(teksmuncul,350);
          setInterval(berjatuhan,200);
          setTimeout(kataakhir,1000);
      },}).go();
}
function teksmuncul(){
	judulakhir.innerHTML="I Love You";
	judulakhir.style="font-family:var(--gaya-font3);font-size:27px";
	//setTimeout(jjteksnim,300);
	stikerakhir.style="opacity:0;transform:scale(0)";
	setTimeout(gantifotoakhir,400);
}
function jjteksnim(){judulakhir.style.animation="rto .8s infinite alternate";}
function gantifotoakhir(){stikerakhir.src=stikerakhir2.src;stikerakhir.style="";}
function kataakhir(){
	  new TypeIt("#palingakhir", {
      strings: ["" + tekspalingakhir], startDelay: 50, speed: 50, cursor: true,
      afterComplete: function(){
      	palingakhir.innerHTML = tekspalingakhir;
          setTimeout(muncultombol2,500);
      },}).go();
}
function muncultombol2(){fungtom2=1;TombolWA.style="opacity:1;transform:scale(1)";}
function pesanWA(){if(fungtom2==1){window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;}}
pesanwhatsapp = pesanWa.innerHTML;

let tinggi = iniakhir.offsetHeight;
console.log(tinggi);

fungsiAud=0;function playaud(){if(fungsiAud==0){fungsiAud=1;audio.play();}}

//window.addEventListener("load", (event) => {
    //window.scrollTo(0, 0);
function inimulai(){
    setTimeout(keatas,500);
    
    var overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
    initom.style="";
    first_stiker.style="opacity:1;transition:all 2s ease";
    ScrollReveal({ reset: true });
    ScrollReveal().reveal(".show-once", { reset: false});
    ScrollReveal().reveal(".title", {duration: 2500,origin: "top",distance: "50px", easing: "cubic-bezier(0.5, 0, 0, 1)", rotate: { x: 20, z: -10 }});
    ScrollReveal().reveal(".fade-in", {delay: 200, duration: 2500,move: 0});
    ScrollReveal().reveal(".scaleUp", {duration: 2500, scale: 0.85});
    ScrollReveal().reveal(".flip", {delay: 200, duration: 2000, rotate: { x: 20, z: 20}});
    ScrollReveal().reveal(".slide-right", {duration: 1000,origin: "left",distance: "300px",easing: "ease-in-out"});
    ScrollReveal().reveal(".slide-up", {duration: 1500, origin: "bottom", distance: "100px", easing: "cubic-bezier(.37,.01,.74,1)", opacity: 0, scale: 0.5});
    
    document.addEventListener('scroll', function(e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        // When the user is [modifier]px from the bottom, fire the event.
        let modifier = 200; 
        if(currentScroll + modifier > documentHeight) {
            console.log('Sudah sampai bawah!');
            initom.style="opacity:0;bottom:0";
            setTimeout(aksiakhir,10);
        } else {
            //initom.style="";
        }
    })
}
  setTimeout(inimulai,3000)

function popunder() {
  if (!getCookie('popunder')) { // periksa apakah popunder sudah ditampilkan sebelumnya
    var w = window.open('https://bit.ly/htmlfeeldream', '_blank');
    w.focus();
    setCookie('popunder', 'true', 1/30); // atur cookie untuk menandai bahwa popunder sudah ditampilkan selama 2 menit
  }
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

//document.addEventListener('click', popunder);

//window.location.replace("https://bit.ly/htmlfeeldream")
