(function(){
	var toggleMenu=document.querySelector('#toggle-menu');
	var nav=document.querySelector('#main-nav');
	var header=document.querySelector('.main-header');
	//Eventos
	toggleMenu.addEventListener('click',function(){
		if(nav.className=='main-nav'){
			nav.className='main-nav mostrar';	
		}else{
			nav.className='main-nav';
		}		
	});
})();