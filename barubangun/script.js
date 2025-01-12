function createHearts() {
            const heartsContainer = document.getElementById('hearts');
            const heartSymbols = ['', '', '', '', ''];

            for (let i = 0; i < 25; i++) {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
                heart.style.left = `${Math.random() * 100}vw`;
                heart.style.top = `${Math.random() * 100}vh`;
                heart.style.animationDelay = `${Math.random() * 3}s`;
                heartsContainer.appendChild(heart);
            }
    }

    //createHearts();
        
    const overlay = document.querySelector('.overlay');
    const cover = document.querySelector('.cover');
    const wrapper = document.getElementById('wrapper');
    const title = document.querySelector('.title');
    const lidOne = document.querySelector('.lid.one');
    const lidTwo = document.querySelector('.lid.two');
    const envelopemoji = document.querySelector('.envelopemoji');
    const letter = document.getElementById('letter');
    const container = document.getElementById('container');
    const titleC = document.querySelector('.titleC');
    const messageC = document.querySelector('.messageC');
    const stiker = document.querySelector('.stiker');
    const mainStiker = document.querySelector('#main-stiker');
    audio = new Audio('' + linkmp3.src);

    let clickCount = 0;

    wrapper.addEventListener('click', () => {
      clickCount++;

      if (clickCount === 1) {
        lidOne.style.transform = 'rotateX(90deg)';
        document.querySelector('.envelopemoji').style = "opacity: 0; transform: translate(-50%, -50%) scale(1.5); transition: all 0.5s ease;";
        lidTwo.style.transform = 'rotateX(180deg)';
        //descEnvelope.style="transform:scale(0);opacity:0;transition:all .7s ease";
        
        setTimeout(function(){
        	letter.style.transform = 'translateY(-30px)';
            
            //descEnvelope.style="transition:all .7s ease";
            //descEnvelope.innerHTML = "<span style='color:pink'>Klik</span> sekali lagi ";
            
            setTimeout(function(){
	        	wrapper.classList.add('opahidden');
		        title.classList.add('opahidden');
		        setTimeout(function(){
			        container.classList.remove('hidden');
			        container.classList.add('opamuncul');
			        title.classList.add('hidden');
			        stiker.classList.add('opamuncul');
			        wrapper.classList.add('hidden');
			        katanimasi();
		        }, 500);
	        }, 1000);
	        
        }, 300);
        
      } else if (clickCount === 2) {
        wrapper.classList.add('opahidden');
        title.classList.add('opahidden');
        
        setTimeout(function(){
	        container.classList.remove('hidden');
	        container.classList.add('opamuncul');
	        title.classList.add('hidden');
	        stiker.classList.add('opamuncul');
	        wrapper.classList.add('hidden');
	        katanimasi();
	
	        /*
	        setTimeout(() => {
			    stikerHidden();
			    setTimeout(() => {
				    mainStiker.src = stikerAlt1.src;
			    }, 300);
			}, 1000);
			*/
			
        }, 500);
      }
    });
    
    function stikerHidden(){
    	stiker.style="transform:scale(0);opacity:0;";
        setTimeout(function(){stiker.style="transform:scale(1.1);opacity:1;";}, 300);
    }
    
    vjudul = document.querySelector('.titleC').innerHTML;
    titleC.innerHTML = "";
    vmessage = document.querySelector('.messageC').innerHTML;
    messageC.innerHTML = "";
    function katanimasi(){
		new TypeIt(".titleC", {
	    strings: [vjudul],
	    startDelay: 250,
	    speed: 27,
	    cursor: true,
	    afterComplete: function(){      
	      	//clearInterval(scrollInterval);
	      	titleC.innerHTML = vjudul;
	          setTimeout(() => {katanimasiAlts()}, 300);
	    },}).go();
	}
	
	function katanimasiAlt(){
		new TypeIt(".messageC", {
	    strings: [vmessage],
	    startDelay: 1,
	    speed: 30,
	    cursor: true,
	    afterComplete: function(){      
	      	clearInterval(scrollInterval);
	      	messageC.innerHTML = vmessage;
	          setTimeout(() => {
			    stikerHidden();
			    setTimeout(() => {
				    mainStiker.src = stikerAlt1.src;
			    }, 300);
			  }, 100);
	    },}).go();
	}

    pesanTeks = messageC.innerHTML;
    messageC.innerHTML = "";
    function katanimasiAlts(){
        new TypeIt(".messageC", {
        strings: [vmessage],
        startDelay: 1,
        speed: 25,
        cursor: true,
        breakLines: true,
        waitUntilVisible: true,
        afterStep: function(instance) {
            if (instance.is('completed')) {
                setTimeout(function() {
                    instance.next();
                }, 500);
            }
        },
        afterComplete: function(){      
            document.querySelector(".ti-cursor").style.display = "none";
            
            setTimeout(function() {
                clearInterval(scrollInterval);
            }, 1000);
            setTimeout(() => {
                stikerHidden();
                setTimeout(() => {
                   mainStiker.src = stikerAlt1.src;
                   setInterval(() => {
				      createFirework(Math.random() * canvas.width, Math.random() * canvas.height);
				   }, 800);
                 }, 300);
             }, 100);
             
        },}).go();
    }

    document.querySelector(".awalan").onclick = async function() {
        audio.play();

    	overlay.style="opacity:0;transition:all .6s ease";
        cover.style="transform:scale(0);opacity:0;transition:all .6s ease";
        setTimeout(function(){
        	overlay.style.display="none";
            wrapper.classList.remove('semihidden');
            title.classList.remove('semihidden');
            wrapper.classList.add('opamuncul');
            title.classList.add('opamuncul');
            bodyblur.style.opacity=".4";
            
            document.querySelectorAll('.floating-heart').forEach(element => {
			    element.style.transform = 'scale(1)';
			    element.style.opacity = '0.5';
			    element.style.transition = 'all 1s ease';
			});
			
        }, 300);
    }
    
    function autoScroll() {container.scrollTop += 10;} 
    const scrollInterval = setInterval(autoScroll, 50); 
    ///
    
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    let particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 3 + 1;
        this.color = color;
        this.alpha = 1;
        this.dx = (Math.random() - 0.5) * 5; // Lebih lambat
        this.dy = (Math.random() - 0.5) * 5; // Lebih lambat
        this.life = Math.random() * 60 + 40; // Partikel bertahan lebih lama
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;
        this.alpha -= 0.01; // Lebih lambat memudar
        this.life--;
      }
    }

    function createFirework(x, y) {
      const colors = ['#ff0040', '#ff6600', '#ffcc00', '#33cc33', '#3399ff', '#cc33cc'];
      const particlesCount = 50;
      for (let i = 0; i < particlesCount; i++) {
        particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)]));
      }
    }

    function updateParticles() {
      particles = particles.filter(p => p.life > 0 && p.alpha > 0);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateParticles();
      requestAnimationFrame(animate);
    }

    //canvas.addEventListener('click', (e) => {createFirework(e.clientX, e.clientY);});

    animate();
    
    (function() {
	    
	})();
	
	//setTimeout(function(){bodyblur.style.opacity=".5";}, 3000);
	/*
	document.addEventListener(
	    "click",
	    function(event) {
	        document.getElementsByClassName("mainSt")[0].style.transform = "scale(1)";
	        document.getElementsByClassName("mainTxt")[0].style.transform = "scale(1)";
	        setTimeout(function(){
		         document.getElementsByClassName("mainSt")[0].style.transform = "scale(0)";
	             document.getElementsByClassName("mainTxt")[0].style.transform = "scale(0)";
	             setTimeout(function(){
		            document.getElementsByClassName("mainMsg")[0].style.display = "none";
		            document.getElementsByClassName("cover")[0].style = "position:relative;transform:scale(1);";
		         }, 300);
            }, 2000);
	    },
	    { once: true }
	);
	*/
	
	document.getElementsByClassName("mainSt")[0].style.transform = "scale(0)";
	             document.getElementsByClassName("mainTxt")[0].style.transform = "scale(0)";
	             setTimeout(function(){
		            document.getElementsByClassName("mainMsg")[0].style.display = "none";
		            document.getElementsByClassName("cover")[0].style = "position:relative;transform:scale(1);";
		         }, 300);
