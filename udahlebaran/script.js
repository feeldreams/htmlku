const body = document.querySelector("body"); const iniwp = [];iden = 1; audio = new Audio('' + linkmp3.src); ftganti=0;fungsi=0;fungsiAwal=0;deffotostiker=fotostiker.src;Content.style = "opacity:1;margin-top:14vh";
async function inipesan(){nama = "kamu";window.nama = nama;mulainama();}  
const directChildren = document.getElementById('pergeseran').children.length;
console.log('Script ini dibuat oleh: Rayys | IG: @rayyarrr');
console.log('Lihat Script HTML Lainnya di www.feeldream.id');
//console.log('Total Slide: ', directChildren); 
const totalPesan = directChildren;
aktigeser=0;thisgeser=1; document.getElementById("bodyblur").onclick = function() {multifungsi()}

function multifungsi(){
  if(aktigeser==1){
    if(thisgeser==totalPesan){aksiakhir()}
    document.getElementById('pergeseran').scrollLeft += 300;
    Tombol.style="";
    thisgeser+=1;aktigeser=0;setTimeout(munculkembali,500);
    
    if(thisgeser<4){
       ftganti++;
       fthilang();
    } else if(thisgeser==4){
       ftganti=3;
       fthilang();
    } else if(thisgeser==5){
       ftganti=4;
       fthilang();
    } else if(thisgeser==6){
       ftganti=5;
       fthilang();
    }
  }
  if(thisgeser==100){Tombol.style="";setTimeout(aksibalas,150);}
}

  document.getElementById("loveIn").onclick = function() {
      if(fungsiAwal==0){
        loveIn.style="transition:all .8s ease;transform:scale(25);opacity:0";
        ftAwal.style="opacity:0";
        ket.style="display:none";
        audio.play();
        fungsiAwal=1;setTimeout(initengahan,600);
      }
  }
  
  function initengahan(){
    ftAwal.style="display:none";loveIn.style="display:none";ket.style="display:none";
    Content.style = "opacity:1;margin-top:10vh";
    setTimeout(inipesan,200);
  }
  
  async function mulainama() {
    setTimeout(()=>{
       pergeseran.style="position:relative;opacity:1;transform:scale(1);";
       setTimeout(munculkembali,500)
    },100);
    ftmuncul();
  }
  
  function munculkembali(){
    if(thisgeser<totalPesan){
      document.getElementById(`Tombol`).style="opacity:1;transform: scale(1)";
      aktigeser=1;
    }
    //if(thisgeser==50){tmbl.innerHTML = "💌 Balas";Tombol.style="opacity:1;transform: scale(1)";thisgeser=100;}
    if(thisgeser==totalPesan){
    //if(thisgeser==1){
      setTimeout(()=>{
	      document.getElementById(`pergeseran`).style="position:relative;";
	      document.getElementById(`fotostiker`).style="display:inline-flex;opacity:0;transform:scale(0)";
	      setTimeout(()=>{
	         document.getElementById(`Content`).style="display:none";
	         document.getElementById(`kontenAkhir`).classList.remove('sembunyi');
	         setTimeout(()=>{
	           document.getElementById(`kontenAkhir`).style="transform:scale(1);transition:all .7s ease";
	           setTimeout(mulaiKontenAkhir,100);
	         },300);
	      },440);
      },1000);
    }
  }
  
  function aksiakhir(){
  	   document.getElementById(`pergeseran`).style="position:relative;";
         document.getElementById(`Tombol`).style="";
         setTimeout(aksibalas,500);
  }
  
  function ftmuncul(){
    if(ftganti==0){fotostiker.src = deffotostiker;}
    if(ftganti==1){fotostiker.src = fotostiker1.src;}
    if(ftganti==2){fotostiker.src = fotostiker2.src;}
    if(ftganti==3){fotostiker.src = fotostiker3.src;}
    if(ftganti==4){fotostiker.src = fotostiker4.src;}
    if(ftganti==5){fotostiker.src = fotostiker5.src;}
    if(ftganti<=10){fotostiker.style="display:inline-flex;opacity:1;transform:scale(1)";}
  }
  function fthilang(){fotostiker.style="display:inline-flex;opacity:0;transform:scale(0)";if(ftganti<10){setTimeout(ftmuncul,250)}}
  
  let intervalHati;
  function hatiJatuh() {
      const hati = document.createElement('div');
      hati.className = 'hati';
      hati.innerHTML = `<svg class='line' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>`;
      hati.style.left = Math.random() * 100 + 'vw';
      hati.style.transform = `rotate(${Math.random()*40-20}deg)`;
      hati.addEventListener('animationend', () => hati.remove());
      document.body.appendChild(hati);
  }
  
  function mulaiKontenAkhir() {
      const stiker4 = document.getElementById('stiker4');
      const stiker4a = document.getElementById('stiker4a');
      const stiker4b = document.getElementById('stiker4b');
      const stiker4c = document.getElementById('stiker4c');
      stiker4.style = "transform:scale(1)";
      new TypeIt("#teksCinta", {
        strings: txtPertama,
        speed: 16,
        startDelay: 300,
        afterComplete: function () {
          document.querySelector("#teksCinta .ti-cursor").style.display = "none";
          new TypeIt("#pesanAkhir", {
            strings: txtKedua,
            speed: 20,
            waitUntilVisible: true,
            afterComplete: function () {
              document.querySelector("#pesanAkhir .ti-cursor").style.display = "none";
              new TypeIt("#teksLucu", {
                strings: txtKetiga,
                speed: 18,
                waitUntilVisible: true,
                afterComplete: function () {
                  document.querySelector("#teksLucu .ti-cursor").style.display = "none";
                  intervalHati = setInterval(hatiJatuh, 200);
                  //document.querySelector("#buletan").style.display = "none";
                  //document.querySelector(".tombol").style="transform:scale(1);opacity:1;";
                  stiker4.style = "transform:scale(0)";
                  setTimeout(() => {
                    stiker4a.src = stiker4b.src;
                  }, 220);
                  setTimeout(() => {
                    stiker4a.style = "display:block;transform:scaleX(1)";
                    stiker4c.style = "display:block";
                    stiker4.style = "transform:scale(.8)";
                    clearInterval(scrollInterval);
                  }, 300);
                }
              }).go();
            }
          }).go();
        }
      }).go();
    }
    
    const scrollContainer = document.getElementById("containerPesan");
    function autoScroll() {scrollContainer.scrollTop += 10;}
    const scrollInterval = setInterval(autoScroll, 30);
