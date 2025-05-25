const body = document.querySelector("body"); audio = new Audio('' + linkmp3.src); 
// tombol = document.querySelector('#Tombol');

let currentIndex = 0;
			        var tombolDipilih = "";
			        const mainSt = document.querySelector('.mainSt');
			        const mainTxt = document.querySelector('.mainTxt');
                    const thirdTxt = document.querySelector('.thirdTxt');
			        const secondTxt = document.querySelector('.secondTxt');
			
			        function showElements() {
			            mainSt.style.transform = 'scale(1)';
			            mainTxt.style.transform = 'scale(1)';
			            setTimeout(() => {fungsiBerfungsi = true}, 1000);
			        }
			
			        function nextSection(delay){
				            fungsiBerfungsi = false;
			                mainSt.style.transform = 'scale(0)';
			                mainTxt.style.transform = 'scale(0)';
			
			                setTimeout(() => {
			                    currentIndex = (currentIndex + 1) % images.length;
			
					            if(currentIndex == 50){
						            mainTxt.innerHTML = "";
						            mainSt.querySelector('img').src = images[5];
						            setTimeout(teksAnimasi, 200);
					            }
			
			                    if(currentIndex < 50){
				                    mainSt.querySelector('img').src = images[currentIndex];
                                    teksAnimasi(texts[currentIndex], delay);
                                    //mainTxt.innerHTML = texts[currentIndex];
                                }
					
			                    showElements();
			                }, 200);
			          }
			
			          function fnYes(){
				         tombolDipilih = "Biru";
				         tombol.style = "";
				         secondTxt.style.transform = 'scale(0)';
				         currentIndex=2;
				         nextSection(28);
				      }
				
				      function fnNo(){
					     tombolDipilih = "Merah";
				         texts[2] = "Yeaayy! 😆<br><br>Kalo kamu pilih <b style='color:#FF2C00;'>Merah</b> berarti<br>malem ini kita <i>Sleep Call</i> 🫣";
				         tombol.style = "";
				         nextSection();
				         setTimeout(nextSection, 3500);
				      }

/*
        teksScale = document.querySelector('#teks' + teksSekarang);
        stikerScale = document.querySelector('#stiker' + teksSekarang);
        Tombol = document.querySelector('#Tombol');

        setTimeout(function(){
          teksScale.classList.add("scale1");
          stikerScale.classList.add("scale1");
        }, 50);
*/

function teksAnimasi(varText, delay){
	mainTxt.innerHTML = "";
	new TypeIt(mainTxt, {
    strings: [varText],
    startDelay: 50, speed: delay, cursor: true, waitUntilVisible: true,
    afterComplete: function(){
    	    const cursorElement = document.querySelector(".mainTxt .ti-cursor");
    	    if (cursorElement) {
                cursorElement.style.display = "none";
            }
            
            if(currentIndex == 3){
            	setTimeout(()=> {
            	    wallpaper.style="transform: scale(1);";
            	    currentIndex = (currentIndex + 1) % images.length;
	                secondTxt.style.transform = 'scale(1)';
	                //setInterval(falling, 200);
	                
	                //mainSt.style.transform = 'scale(0)';
			        //setTimeout(() => {mainSt.querySelector('img').src = images[currentIndex];mainSt.style.transform = 'scale(1)';}, 200);
			        
			        
			        /*setTimeout(() => {
				         secondTxt.style.transform = 'scale(0)';
				         setTimeout(() => {secondTxt.innerHTML = "";secondTxt.style.transform = 'scale(1)';}, 200);
                    }, 700);*/
                    
                    setTimeout(() => {
				         //currentIndex = (currentIndex + 1) % images.length;
				         secondTxt.style.transform = 'scale(0)';
				         mainSt.style.transform = 'scale(0)';mainTxt.style.transform = 'scale(0)';
			             setTimeout(() => {mainTxt.innerHTML = "<b>" + thirdTxt.innerHTML + "</b>";mainSt.querySelector('img').src = images[currentIndex];mainSt.style.transform = 'scale(1)';mainTxt.style.transform = 'scale(1)';/*Tombol.style="transform:scale(1);opacity:1;"*/}, 200);
                    }, 8000);
                    
                    
                }, 300);
            }
            
            /*if(currentIndex == 3){
            	setInterval(falling, 300);
            }*/
            
            // mainSt.style.transform = 'scale(0)';
            // setTimeout(() => {  }, 300);
            // setTimeout(() => {
            // 	mainSt.querySelector('img').src = images[1];
            //     mainSt.style.transform = 'scale(1)';
            // }, 350);
        },
    }).go();
}

///////////////////////////////////

var sudahKlik = true;
var fungsiBerfungsi = false;

document.getElementById("loveIn").onclick = function() {
    if (sudahKlik) {
    	document.querySelector(".cover").style="opacity:0;transition:all .8s ease";
        document.querySelector(".overlay").style="opacity:0;transition:all .8s ease";
        wallpaper.style="transform:scale(1)";
    	setTimeout(function(){
	        audio.play();
	        
	        document.querySelector(".overlay").style.display = "none";
	        
            mulaiMunculTeks();

	        setTimeout(function(){fungsiBerfungsi = true}, 300);
	    }, 200);
    } else {
        sudahKlik = true; // Tandai tombol sudah diklik
        document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';
    }
}

function falling() {const heart = document.createElement("div");heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100;stroke:#FFC2B8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";heart.className = "heart-icon";heart.style.left = (Math.random() * 95) + "vw";heart.style.animationDuration = (Math.random() * 3) + 2 + "s";document.body.appendChild(heart);}
setInterval(function() {var heartArr = document.querySelectorAll(".heart-icon");if (heartArr.length > 100) {heartArr[0].remove();}}, 100);

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
          inistiker3.src = inistiker3.src;
      }, 300);
    }*/

    if(jumlahKlik == 3){
        //swiper.slideNext();
        secondTxt.innerHTML = "Harus bolee dongggg 😝";
        secondTxt.style.transform = 'scale(1)';
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

document.addEventListener('click', function() {
    if (currentIndex !== 1) {
    	if (fungsiBerfungsi === true) {
           //nextSection();
        }
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = `<svg class='line' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>`;
    heart.style.left = Math.random() * 100 + 'vw';
    heart.addEventListener('animationend', () => heart.remove());
    document.body.appendChild(heart);
}
