/*var footer = document.querySelector(".footer_redes")*/
/*document é o documento geral*/
/*em querySelector eu passo uma string, via ser o documento q eu quero selecionar, e eu passo exatamente o elemento q passaria com o css*/
/*para conferir se eu selecionei certo posso usar console.log(footer)*/
/*da pra mudar todo o coteudo do html pelo js:*/
/*com footer.innerHTML = "<p>teste</p>", eu mudo o p do footer q é a rede social para teste*/

if(window.SimpleSlide){/*para que não dê erro nas outras paginas com as mesmas classes, dessa forma só vai aplicar o slide em uma pagina especifica*/

	new SimpleSlide({/*ver git da origamid com os dados disso*/
		slide: "quote", // dei o nome de quote, pois vamos usar la no quote, é so o nome msm

	  /*nav: true,*/ // se deve ou não mostrar a navegação, nesse caso n tem, posi vai ser automatico

	  auto: true, // se o slide deve passar automaticamente, mas jé é true por padrão, se não tivesse aqui ja ficaria tb, normalmente coloca isso se for pra ser false
	  time: 5000, // tempo de transição dos slides, são 5000 micro segundos, então acada 5 segundos ele vai ser trocado
	  /*pauseOnHover: true */// pausa a transição automática
	});
	/*aqui vou passar um objeto, onde tem as confg desse slide, posso dizer se vai ser auto se vai ter navegação quanto tempo de um slide por outro e tal*/

	new SimpleSlide({
	  slide: "portfolio", 
	  auto: true, 
	  time: 5000,
	  nav: true,/*para que cria uma navegação com seletores logo abaixo e n seja so automatico*/
	});

}

if(window.SimpleAnime){
	new SimpleAnime()
}

if (window.SimpleForm){
	new SimpleForm({
	  form: ".formphp", // seletor do formulário
	  /*aqui eu passo uma classe, que é q eu uso no formulario*/
	  button: "#enviar", // seletor do botão
	  /*o enviar q tem ai, dem do id usado no formulario id="enviar", por isso #eviar*/
	  erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
	  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
	});
}