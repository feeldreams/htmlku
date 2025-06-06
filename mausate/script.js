audio = new Audio('' + linkmp3.src);

    // Elemen Background
    const backgroundOverlay = document.querySelector('.background-overlay');
    const bgImageUrl = backgroundOverlay.getAttribute('data-src');
    backgroundOverlay.style.background = `url('${bgImageUrl}') no-repeat center center fixed`;
    backgroundOverlay.style.backgroundSize = 'cover';

    // Animasi Kelopak Bunga
    function mulaiKelopak(canvasId) {
      const canvas = document.getElementById(canvasId);
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const kelopak = Array.from({ length: 20 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 2,
        speed: Math.random() * 2 + 1
      }));

      function gambarKelopak() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        kelopak.forEach(petal => {
          ctx.beginPath();
          ctx.arc(petal.x, petal.y, petal.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#f87171';
          ctx.fill();
          petal.y += petal.speed;
          if (petal.y > canvas.height) petal.y = -petal.radius;
          petal.x += Math.sin(petal.y / 50) * 2
        });
        requestAnimationFrame(gambarKelopak);
      }
      gambarKelopak();
    }

    // Animasi Hati Jatuh
    let intervalHati;
    function hatiJatuh() {
      const hati = document.createElement('div');
      hati.className = 'hati';
      hati.innerHTML = `<svg class='line' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>`;
      hati.style.left = Math.random() * 100 + 'vw';
      hati.addEventListener('animationend', () => hati.remove());
      document.body.appendChild(hati);
    }

    // Buka Envelope
    function bukaEnvelope() {
      audio.play();
      const envelope = document.getElementById('envelope');
      envelope.classList.remove('close');
      envelope.classList.add('open');
      document.querySelector(".reset").style="transform:scale(0);opacity:0;transition:all .7s ease";
      setTimeout(() => {
        document.querySelector("#envelope").style="transform:scale(0);opacity:0;transition:all .7s ease";
        setTimeout(() => {
        	pindahHal(2);
            envelope.classList.remove('open');
            envelope.classList.add('close');
        }, 700);
      }, 1200); // Transition to hal2 after animation
    }

    // Halaman 2: Memory Game
    let kartuDibuka = [];
    let pasanganCocok = 0;
    let gameJalan = false;

    function acakKartu(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function mulaiHal2() {
	  kartuDibuka = [];
	  pasanganCocok = 0;
	  gameJalan = true;
	  document.getElementById('kotakPesan').innerHTML = '';
	  document.getElementById('statusGame').innerText = '';
	  document.getElementById('lanjut').classList.add('sembunyi');
	  document.getElementById('ulang').classList.add('sembunyi');
	
	  const papanGame = document.getElementById('papanGame');
	  papanGame.innerHTML = '';
	  kartu.forEach((card, index) => { // Langsung gunakan array kartu tanpa pengacakan
	    const elemenKartu = document.createElement('div');
	    elemenKartu.className = 'kartu';
	    elemenKartu.dataset.id = card.id;
	    elemenKartu.innerHTML = `
	      <div class="dalemKartu">
	        <div class="depanKartu"></div>
	        <div class="belakangKartu">${card.icon}</div>
	      </div>
	    `;
	    elemenKartu.addEventListener('click', () => balikKartu(elemenKartu, card, index));
	    papanGame.appendChild(elemenKartu);
	  });
	
	  mulaiKelopak('game-canvas');
	//   setTimeout(() => {
	//     if (pasanganCocok < 6 && gameJalan) selesaiGame(false);
	//   }, 60000);
	}

    function balikKartu(elemenKartu, card, index) {
      if (!gameJalan || kartuDibuka.length >= 2 || elemenKartu.classList.contains('balik')) return;
      elemenKartu.classList.add('balik');
      kartuDibuka.push({ elemen: elemenKartu, card, index });

      if (kartuDibuka.length === 2) {
        const [kartu1, kartu2] = kartuDibuka;
        if (kartu1.card.id === kartu2.card.id) {
          pasanganCocok++;
          /*
          const divPesan = document.createElement('p');
          divPesan.innerText = kartu1.card.pesan;
          document.getElementById('kotakPesan').appendChild(divPesan);
          */
          kartuDibuka = [];
          if (pasanganCocok === 6) selesaiGame(true);
        } else {
          setTimeout(() => {
            kartu1.elemen.classList.remove('balik');
            kartu2.elemen.classList.remove('balik');
            kartuDibuka = [];
          }, 1000);
        }
      }
    }

    function selesaiGame(sukses) {
      gameJalan = false;
      const status = document.getElementById('statusGame');
      if (sukses) {
        setTimeout(()=>{pindahHal(3)}, 1000);
        /*status.innerText = 'Yeay! Kamu mengenang semua momen kita! ðŸŒ¹';
        document.getElementById('lanjut').classList.remove('sembunyi');*/
      } else {
        status.innerText = 'Momen kita terlalu indah untuk dilewatkan, coba lagi ya! ðŸŒŒ';
        document.getElementById('ulang').classList.remove('sembunyi');
      }
    }

    // Halaman 3: Pesan Akhir
    function mulaiHal3() {
      const stiker3 = document.getElementById('stiker3');
      const stiker3a = document.getElementById('stiker3a');
      const stiker3b = document.getElementById('stiker3b');
      stiker3.style = "transform:scale(1)";

      new TypeIt("#teksCinta", {
        strings: txtDoa,
        speed: 28,
        startDelay: 100,
        afterComplete: function () {
          document.querySelector("#teksCinta .ti-cursor").style.display = "none";
          new TypeIt("#pesanAkhir", {
            strings: txtPesanAkhir,
            speed: 28,
            waitUntilVisible: true,
            afterComplete: function () {
              document.querySelector("#pesanAkhir .ti-cursor").style.display = "none";
              new TypeIt("#teksLucu", {
                strings: txtLucu,
                speed: 28,
                waitUntilVisible: true,
                afterComplete: function () {
                  document.querySelector("#teksLucu .ti-cursor").style.display = "none";
                  intervalHati = setInterval(hatiJatuh, 200);
                  document.querySelector(".tombol").style="transform:scale(1);opacity:1;";
                  stiker3.style = "transform:scale(0)";
                  setTimeout(() => {
                    stiker3a.src = stiker3b.src;
                    stiker3.style = "transform:scale(1)";
                  }, 300);
                }
              }).go();
            }
          }).go();
        }
      }).go();
    }

    // Navigasi Halaman
    function pindahHal(hal) {
      for (let i = 1; i <= 3; i++) {
        if (hal < 3) document.getElementById(`hal${i}`).classList.add('sembunyi');
      }
      if (hal < 3) document.getElementById(`hal${hal}`).classList.remove('sembunyi');
      
      setTimeout(()=>{
         if (hal === 2) {mulaiHal2();document.getElementById(`hal${hal}`).style="transform:scale(1);transition:all .7s ease";}
         if (hal !== 2){
         document.getElementById(`hal${hal - 1}`).style = "transform:scale(0);transition:all .7s ease";
         setTimeout(()=>{
         	document.getElementById(`hal${hal - 1}`).classList.add('sembunyi');
             document.getElementById(`hal${hal}`).classList.remove('sembunyi');
	         setTimeout(()=>{document.getElementById(`hal${hal}`).style="transform:scale(1);transition:all .7s ease";}, 100);
	         setTimeout(()=>{if (hal === 3) mulaiHal3();}, 150);
	     }, 700);
	     }
      }, 50);
    }

    // Share ke WhatsApp
    function balasWa() {
      const url = window.location.href;
      const text = "Taqabbalallahu minna wa minkum, minal 'aidin wal faizin!";
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    }