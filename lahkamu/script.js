function createHearts() {
            const heartsContainer = document.getElementById('hearts');
            const heartSymbols = ['❤️', '💖', '💕', '💗', '💓'];

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

    createHearts();
        
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
        wallpaper.style="transform: scale(1.5)";
        document.querySelector('.envelopemoji').style = "opacity: 0; transform: translate(-50%, -50%) scale(1.5); transition: all 0.5s ease;";
        lidTwo.style.transform = 'rotateX(180deg)';
        
        setTimeout(function(){
        	letter.style.transform = 'translateY(-30px)';
            wallpaper.style="transform: scale(1.8)";
            
            setTimeout(function(){
	        	wrapper.classList.add('opahidden');
		        title.classList.add('opahidden');
		        wallpaper.style="transform: scale(1.5)";
		        setTimeout(function(){
			        container.classList.remove('hidden');
			        container.classList.add('opamuncul');
			        title.classList.add('hidden');
			        stiker.classList.add('opamuncul');
			        wallpaper.style="transform: scale(1)";
			        wrapper.classList.add('hidden');
			        katanimasi();
		        }, 500);
	        }, 1500);
        }, 300);
      } else if (clickCount === 2) {
        letter.style.transform = 'translateY(-30px)';
        wallpaper.style="transform: scale(1.8)";
      } else if (clickCount === 3) {
        wrapper.classList.add('opahidden');
        title.classList.add('opahidden');
        wallpaper.style="transform: scale(1.5)";
        setTimeout(function(){
	        container.classList.remove('hidden');
	        container.classList.add('opamuncul');
	        title.classList.add('hidden');
	        stiker.classList.add('opamuncul');
	        wallpaper.style="transform: scale(1)";
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
	    startDelay: 1,
	    speed: 27,
	    cursor: true,
	    afterComplete: function(){      
	      	//clearInterval(scrollInterval);
	      	titleC.innerHTML = vjudul;
	          setTimeout(() => {katanimasiAlt()}, 300);
	    },}).go();
	}
	
	function katanimasiAlt(){
		new TypeIt(".messageC", {
	    strings: [vmessage],
	    startDelay: 1,
	    speed: 27,
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
    
    document.querySelector(".awalan").onclick = async function() {
        audio.play();

    	overlay.style="opacity:0;transition:all .6s ease";
        cover.style="transform:scale(0);opacity:0;transition:all .6s ease";
        setTimeout(function(){
        	overlay.style.display="none";
            wallpaper.style="transform: scale(1)";
            wrapper.classList.remove('semihidden');
            title.classList.remove('semihidden');
            wrapper.classList.add('opamuncul');
            title.classList.add('opamuncul');
            
            document.querySelectorAll('.floating-heart').forEach(element => {
			    element.style.transform = 'scale(1)';
			    element.style.opacity = '0.5';
			    element.style.transition = 'all 1s ease';
			});
			
        }, 300);
    }
    
    function autoScroll() {container.scrollTop += 10;} const scrollInterval = setInterval(autoScroll, 50); 
