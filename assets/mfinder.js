"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = { //===Initialize Firebase===//
	apiKey: "AIzaSyAj-G4nalM74n-o5d8EKaq520YabhsrepU",
	authDomain: "mister-sandman-matratzenfinder.firebaseapp.com",
	databaseURL: "https://mister-sandman-matratzenfinder.firebaseio.com",
	storageBucket: "mister-sandman-matratzenfinder.appspot.com",
	messagingSenderId: "149989849153"
};
firebase.initializeApp(config);
var database = firebase.database();
var ref = database.ref('NewdataFeb23022018');

window.onbeforeunload = handleUnsavedData;
function handleUnsavedData() {
	ref.push(botoesCorpo.firebase());
	window.onbeforeunload = null;
}

var ControllersBotoesCorpo = function () {
	function ControllersBotoesCorpo(viewsInfo) {
		_classCallCheck(this, ControllersBotoesCorpo);

		//Define atributos básicos para a acao do click
		this._fase;
		this._modo;
		this._botao;

		// Instancia a view dos botoes, passando O JsonFake(viewsInfo) para o construtor da View
		this._viewBotoes = new ViewFases(viewsInfo);

		// Instancia view da Barra de navegacao, passando O JsonFake(viewsInfo) para o construtor da View
		this._viewNavegacao = new ViewNavegacao(viewsInfo);

		//Instancia classe que salva na memória as versoes do DOM em cada fase
		this._cacheDOM = new ControllerFuncoesAuxiliares();

		//Instancia classe que salva as informacoes do clique para o algorítimo
		this._salvaInformacoes = new SalvaInformacoes();

		//Instancia modelo de algorítimo
		this._resultado = new MatratzenfinderAlgoritimo();

		//Instancia a view dos Colchoes (resultado final)
		this._matratzenView = new MatratzenView();

		//Instancia primeira view
		this._FirstView = new FirstView();

		//Salva inicializacao
		this._salvaInformacoes.salvaInicializacao({
			fase: 'Start',
			modo: 'Start',
			click: 'Start',
			data: DataHelper.dataParaTexto(new Date()),
			time: DataHelper.dataParaHoras(new Date())
		});
	}

	_createClass(ControllersBotoesCorpo, [{
		key: "firebase",
		value: function firebase() {

			var fase = [];
			var mode = [];
			var click = [];
			var date = [];
			var time = [];

			this._salvaInformacoes.listaElementosFirebase.map(function (item, index) {
				fase.push(item.fase);
				mode.push(item.modo);
				click.push(item.click);
				date.push(item.data);
				time.push(item.time);
			});

			var resume = [fase, mode, click, date, time];

			return resume;
		}
	}, {
		key: "escutadorClick",
		value: function escutadorClick(elemento) {
			// Pega valores do botao clicado
			this._fase = $('#fase');
			this._modo = $('#modo');
			this._botao = $(elemento);

			//Salva as informacoes do clique nas Listas de informacoes para o algorítimo
			this._salvaInformacoes.salva({
				fase: $('#faseTitle').text().slice(5),
				modo: this._modo.val(),
				click: this._botao.attr('data-value').replace(/<br>/g, " "),
				data: DataHelper.dataParaTexto(new Date()),
				time: DataHelper.dataParaHoras(new Date())
			});

			//Atualiza DOM com os botoes da proxima fase
			this._viewBotoes.updateFase(this._fase.val(), this._modo.val(), this._botao.attr('data-value'));

			//Atualiza fase na barra de navegacao
			this._viewNavegacao.updateNavegacao(Number(this._fase.val()), this._modo.val(), this._botao.css('background'));

			//Faz cópia da versao do DOM para botao voltar
			this._cacheDOM.salvaFase($('#MatratzenFinder').html());

			//Chama a funcao de algorítimo se estivermos na sétima fase
			if (Number(this._fase.val()) == 6) {
				this._resultado.algoritimo(this._salvaInformacoes.listaDefinitiva);
				this._matratzenView.update(this._resultado.resultado);
			}
		}
	}, {
		key: "voltaFase",
		value: function voltaFase() {
			//Calcula qual a posicao da fase anterior
			var fases = this._cacheDOM.fasesSalvas;
			var tamanho = fases.length;
			var fase = fases[tamanho - 2];

			//Atualiza o DOM com a fase anterior
			$('#MatratzenFinder').html(fase);
			$('#formulario').show().css('opacity', '1').hide().fadeIn();

			//Reseta o array de fases, retirando a última fase do array
			this._cacheDOM.resetaTamanho(tamanho);

			//Reseta tamanho do array de informacoes definitivas
			this._salvaInformacoes.listaElementosDefinitiva(tamanho);
		}
	}, {
		key: "voltaFaseButton",
		value: function voltaFaseButton(posicao) {

			var fases = this._cacheDOM.fasesSalvas;
			var modo = $('#modo').val();
			var tamanhoPaar = Number(posicao) * 2 - 3;
			var tamanhoSingle = Number(posicao) - 1;
			var fasePaar = Number(posicao) * 2 - 2;
			var faseSingle = Number(posicao);

			if (tamanhoPaar < 0) {
				tamanhoPaar = 0;
			}
			if (fasePaar <= 0) {
				fasePaar = 1;
			}

			if (modo == "Paar1" || modo == "Paar2") {
				this._salvaInformacoes.listaElementosDefinitivaButton(tamanhoPaar);
				$('#MatratzenFinder').html(fases[fasePaar - 1]);
				$('#formulario').show().css('opacity', '1').hide().fadeIn();
				this._cacheDOM.resetaTamanho(fasePaar + 1);
				if (Number(posicao) == 1) {
					$('#modo').attr('value', 'Single');
				} else {
					$('#modo').attr('value', 'Paar1');
				}
			} else {
				this._salvaInformacoes.listaElementosDefinitivaButton(tamanhoSingle);
				$('#MatratzenFinder').html(fases[faseSingle - 1]);
				$('#formulario').show().css('opacity', '1').hide().fadeIn();
				this._cacheDOM.resetaTamanho(faseSingle + 1);
			}
		}
	}, {
		key: "firstView",
		value: function firstView() {
			$('#MatratzenFinder').html(this._FirstView.template()).hide().fadeIn();
			$('.fullscreen.welcome').remove();

			//Salva a primeira versao do DOM na inicializacao para o botao voltar
			this._cacheDOM.salvaFase($('#MatratzenFinder').html());
		}
	}]);

	return ControllersBotoesCorpo;
}();

var ControllerFuncoesAuxiliares = function () {
	function ControllerFuncoesAuxiliares() {
		_classCallCheck(this, ControllerFuncoesAuxiliares);

		this._cacheDOM = [];
	}

	_createClass(ControllerFuncoesAuxiliares, [{
		key: "salvaFase",
		value: function salvaFase(DOM) {
			this._cacheDOM.push(DOM);
		}
	}, {
		key: "resetaTamanho",
		value: function resetaTamanho(tamanho) {
			this._cacheDOM.length = tamanho - 1;
		}
	}, {
		key: "fasesSalvas",
		get: function get() {
			return this._cacheDOM;
		}
	}]);

	return ControllerFuncoesAuxiliares;
}();

var DataHelper = function () {
	function DataHelper() {
		_classCallCheck(this, DataHelper);

		throw new Error('Esta Classe nao pode ser instanciada');
	}

	_createClass(DataHelper, null, [{
		key: "dataParaHoras",
		value: function dataParaHoras(data) {
			return data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
		}
	}, {
		key: "dataParaTexto",
		value: function dataParaTexto(data) {

			return data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
		}
	}, {
		key: "textoParaData",
		value: function textoParaData(texto) {

			if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
				throw new Error('Data deve estar no formato aaaa-mm-dd');
			}

			return new (Function.prototype.bind.apply(Date, [null].concat(_toConsumableArray(texto.split('-').map(function (item, index) {
				return item - index % 2;
			})))))(); // Os "..." significa que os dados do array devem ser espalhados por virgula e passados como parametros. O split separa o string gera um array que foi separado pelo critério "-". O map() é um método que itera pelo array realizando uma funcao. Essa funcao aceita dois parametros o Item(funciona como i mas nao totalmente) e o Index(posicao do item dentro do array). Ele retorna um array que é espalhado dentro do Date() por causa do "...";
		}
	}]);

	return DataHelper;
}();

var MatratzenfinderAlgoritimo = function () {
	function MatratzenfinderAlgoritimo() {
		_classCallCheck(this, MatratzenfinderAlgoritimo);

		this._Data;
		this._Resultado;
		this._textos;
	}

	_createClass(MatratzenfinderAlgoritimo, [{
		key: "algoritimo",
		value: function algoritimo(listaDefinitiva) {

			this._Data = this._formataInformacoes(listaDefinitiva);
			this._Resultado = this._algoritimo(this._Data);
			this._textos = this._algoritimoTextos(this._Data);
		}
	}, {
		key: "_algoritimo",
		value: function _algoritimo(data) {

			var cache = [];

			data.map(function (item, index) {
				if (item.Korpermasse == "> 100 Kg" && item.Liegegefuhl == "Fest") {
					var resultado = "Anea";
				} else if (item.Korpermasse == "> 100 Kg" && item.Statur == "Gleichmäßig" && item.Liegegefuhl == "Mittle") {
					var resultado = "Anea";
				} else if (item.Korpermasse == "> 100 Kg" && item.Statur == "Breite Schultern Schmale Hüfte" && item.Liegegefuhl == "Mittle") {
					var resultado = "Serena";
				} else if (item.Liegegefuhl == "Fest" && (item.Korpermasse == "81 - 99 Kg" || item.Korpermasse == "< 80 Kg") && (item.Statur == "Gleichmäßig" || item.Statur == "Breite Schultern Schmale Hüfte" || item.Statur == "Schmale Schultern Breite Hüfte")) {
					var resultado = "Serena";
				} else if (item.Korpermasse == "81 - 99 Kg" && item.Statur == "Gleichmäßig" && item.Liegegefuhl == "Mittle") {
					var resultado = "Serena";
				} else {
					var resultado = "Liara";
				};

				cache.push(resultado);
			});

			if (cache.length < 2) {
				return cache[0];
			} else {
				if (cache[0] == "Anea" && cache[1] == "Anea") {
					var resultado_geral = "Anea";
				} else if (cache[0] == "Serena" && cache[1] == "Anea") {
					var resultado_geral = "Serena";
				} else if (cache[0] == "Anea" && cache[1] == "Serena") {
					var resultado_geral = "Serena";
				} else if (cache[0] == "Serena" && cache[1] == "Serena") {
					var resultado_geral = "Serena";
				} else {
					var resultado_geral = "Liara";
				}

				return resultado_geral;
			}
		}
	}, {
		key: "_algoritimoTextos",
		value: function _algoritimoTextos(data) {

			if (data.length > 1) {
				if (data[0].Beschwerden == "Ja" || data[1].Beschwerden == "Ja") {
					var resultado_texto = {
						modo: "paar",
						resultado: this._Resultado,
						boolean: "Ja"
					};
				} else {
					var resultado_texto = {
						modo: "paar",
						resultado: this._Resultado,
						boolean: "Nein"
					};
				}
			} else {
				var resultado_texto = {
					modo: "single",
					resultado: this._Resultado,
					boolean: data[0].Beschwerden
				};
			}
			return resultado_texto;
		}
	}, {
		key: "_formataInformacoes",
		value: function _formataInformacoes(listaDefinitiva) {

			var tamanho = listaDefinitiva.length;

			if (tamanho > 6) {
				var array = [];
				var even = {
					Korpermasse: "",
					Statur: "",
					Liegegefuhl: "",
					Beschwerden: ""
				};
				var odd = {
					Korpermasse: "",
					Statur: "",
					Liegegefuhl: "",
					Beschwerden: ""
				};

				listaDefinitiva.map(function (item, index) {
					if (index % 2 == 0) {
						if (item.fase == "Körpermaße") {
							even.Korpermasse = item.click;
						} else if (item.fase == "Statur") {
							even.Statur = item.click;
						} else if (item.fase == "Liegegefühl") {
							even.Liegegefuhl = item.click;
						} else if (item.fase == "Beschwerden") {
							even.Beschwerden = item.click;
						}
					} else {
						if (item.fase == "Körpermaße") {
							odd.Korpermasse = item.click;
						} else if (item.fase == "Statur") {
							odd.Statur = item.click;
						} else if (item.fase == "Liegegefühl") {
							odd.Liegegefuhl = item.click;
						} else if (item.fase == "Beschwerden") {
							odd.Beschwerden = item.click;
						}
					}
				});
				array.push(odd);
				array.push(even);
				return array;
			} else {
				var array = [];
				var data = {
					Korpermasse: "",
					Statur: "",
					Liegegefuhl: "",
					Beschwerden: ""
				};

				listaDefinitiva.map(function (item, index) {
					if (item.fase == "Körpermaße") {
						data.Korpermasse = item.click;
					} else if (item.fase == "Statur") {
						data.Statur = item.click;
					} else if (item.fase == "Liegegefühl") {
						data.Liegegefuhl = item.click;
					} else if (item.fase == "Beschwerden") {
						data.Beschwerden = item.click;
					}
				});
				array.push(data);
				return array;
			}
		}
	}, {
		key: "resultado",
		get: function get() {

			return {
				data: this._Data,
				resultado: this._Resultado,
				textos: this._textos
			};
		}
	}]);

	return MatratzenfinderAlgoritimo;
}();

var SalvaInformacoes = function () {
	function SalvaInformacoes(viewsInfoNav) {
		_classCallCheck(this, SalvaInformacoes);

		this._inicializacao = [];
		this._listaElementos = [];
		this._listaDefinitiva = [];
	}

	_createClass(SalvaInformacoes, [{
		key: "salvaInicializacao",
		value: function salvaInicializacao(elemento) {
			this._inicializacao.push(elemento);
		}
	}, {
		key: "salva",
		value: function salva(elemento) {
			this._listaElementos.push(elemento);
			this._listaDefinitiva.push(elemento);
		}
	}, {
		key: "listaElementosDefinitiva",
		value: function listaElementosDefinitiva(tamanho) {
			this._listaDefinitiva.length = tamanho - 2;
		}
	}, {
		key: "listaElementosDefinitivaButton",
		value: function listaElementosDefinitivaButton(tamanho) {
			this._listaDefinitiva.length = tamanho;
		}
	}, {
		key: "listaElementosFirebase",
		get: function get() {
			var listaFinal = this._inicializacao.concat(this._listaElementos);
			return [].concat(listaFinal);
		}
	}, {
		key: "listaElementos",
		get: function get() {

			return [].concat(this._listaElementos);
		}
	}, {
		key: "listaDefinitiva",
		get: function get() {
			return [].concat(this._listaDefinitiva);
		}
	}]);

	return SalvaInformacoes;
}();

var FirstView = function () {
	function FirstView() {
		_classCallCheck(this, FirstView);
	}

	_createClass(FirstView, [{
		key: "template",
		value: function template() {
			return "<div id=\"navegacao\">\n\t\t\t<div class=\"progress-container\" >\n\t\t    \t<div class=\"zero\" id=\"progress\">\n\t\t    \t\t<h3></h3>\n\t\t    \t\t<h3 id=\"voltar\" onclick=\"botoesCorpo.voltaFase()\"><i class=\"tiny material-icons\">undo</i></h3>\n\t\t    \t</div>\n\t\t\t</div>\n\t\t    <h3 id=\"faseTitle\" >1/6: Geschlecht</h3>\n\t\t\t<div class=\"progress-container\" id=\"bottom-icons\" style=\"display:none\">\n\t\t    \t<div class=\"sexto\"></div>\n\t\t    \t<div class=\"sexto\"></div>\n\t\t    \t<div class=\"sexto\"></div>\n\t\t    \t<div class=\"sexto\"></div>\n\t\t    \t<div class=\"sexto\"></div>\n\t\t\t\t<div class=\"sexto\"></div>\n\t    \t</div>\n\t\t\t<div class=\"buttonNav\">\n\t\t\t    <div id=\"one\" class=\"navbutton ativo\" data-value=\"0\" onclick=\"botoesCorpo.voltaFaseButton(1)\">1. Geschlecht</div>\n\t\t\t    <div id=\"two\" class=\"navbutton inativo\" data-value=\"1\" onclick=\"botoesCorpo.voltaFaseButton(2)\">2. K\xF6perma\xDFe</div>\n\t\t\t    <div id=\"three\" class=\"navbutton inativo\" data-value=\"2\" onclick=\"botoesCorpo.voltaFaseButton(3)\">3. Schlafposition</div>\n\t\t\t    <div id=\"four\" class=\"navbutton inativo\" data-value=\"3\" onclick=\"botoesCorpo.voltaFaseButton(4)\">4. Statur</div>\n\t\t\t    <div id=\"five\" class=\"navbutton inativo\" data-value=\"4\" onclick=\"botoesCorpo.voltaFaseButton(5)\">5. Liegegef\xFChl</div>\n\t\t\t    <div id=\"six\" class=\"navbutton inativo\" data-value=\"5\" onclick=\"botoesCorpo.voltaFaseButton(6)\">6. Beschwerden</div>\n\t\t    </div>\n\t    </div> \n\n\t\t<div id=\"formulario\">\n\t\t\t<p id=\"titulo\">Wer schl\xE4ft auf der Matratze?</p>\n\t\t\t<input type=\"button\" value=\"1\" id=\"fase\" hidden>\n\t\t\t<input type=\"button\" value=\"Single\" id=\"modo\" hidden>\n\t\t\t<div class=\"btnELabel\">\n\t\t\t\t<div type=\"button\" data-value=\"Mann\" id=\"btn-1\" onclick=\"botoesCorpo.escutadorClick(this)\" style=\"background:url('https://cdn.shopify.com/s/files/1/1563/5705/files/mann.png?14819677741769303595');background-size: 90%; background-repeat: no-repeat;background-position:center center;\"></div>\n\t\t\t\t<p>Mann</p>\n\t\t\t</div>\n\t\t\t<div class=\"btnELabel\">\n\t\t\t\t<div type=\"button\" data-value=\"Frau\" id=\"btn-2\" onclick=\"botoesCorpo.escutadorClick(this)\" style=\"background:url('https://cdn.shopify.com/s/files/1/1563/5705/files/frau.png?14819677741769303595');background-size: 90%; background-repeat: no-repeat;background-position:center center;\"></div>\n\t\t\t\t<p>Frau</p>\n\t\t\t</div>\n\t\t\t<div class=\"btnELabel\">\n\t\t\t\t<div type=\"button\" data-value=\"Paar\" id=\"btn-3\" onclick=\"botoesCorpo.escutadorClick(this)\" style=\"background:url('https://cdn.shopify.com/s/files/1/1563/5705/files/paar.png?14819677741769303595');background-size: 90%; background-repeat: no-repeat;background-position:center center;\"></div>\n\t\t\t\t<p>Paar</p>\n\t\t\t</div>\n\t\t\t<div class=\"btnELabel\">\n\t\t\t\t<div type=\"button\" data-value=\"Kind\" id=\"btn-4\" onclick=\"botoesCorpo.escutadorClick(this)\" style=\"background:url('https://cdn.shopify.com/s/files/1/1563/5705/files/kind.png?14819677741769303595');background-size: 90%; background-repeat: no-repeat;background-position:center center;\"></div>\n\t\t\t\t<p>Kind</p>\n\t\t\t</div>\n\n\t\t\t<div id=\"mfinderFooter\">\n\t\t\t\t<p style=\"margin:0\"><span>&#9733;</span><span>Das Geschlecht und die Anzahl der schlafenden Personen auf der Matratze beeinflussen die Wahl f\xFCr Dein passendes Schlafmodell.</span></p>\n\t\t\t</div>\n\t\t</div>\n\t\t";
		}
	}]);

	return FirstView;
}();

var MatratzenView = function () {
	function MatratzenView(matratzenViewInfo) {
		_classCallCheck(this, MatratzenView);
	}

	_createClass(MatratzenView, [{
		key: "_template",
		value: function _template(product) {

			return "<div class=\"fullscreen ergebnisBackground\">\n\t\t\t\t\t<div class=\"ergebnisTitle center\">\n\t\t\t\t\t\t<h2 class=\"text_center bold blue\">Wir haben die perfekte Matratze f\xFCr Dich gefunden!</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ergebnisMatratze center\">\n\t\t\t\t\t\t<img src=\"https://cdn.shopify.com/s/files/1/1563/5705/files/matratze.png?14819677741769303595\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ergebnisMatratzeInfo center\">\n\t\t\t\t\t\t<h3 class=\"text_center bold blue\">\n\t\t\t\t\t\t\t" + matratzenViewInfo[product.resultado].id + "<br>\n\t\t\t\t\t\t\tab " + matratzenViewInfo[product.resultado].itemPropPrice + "\u20AC\n\t\t\t\t\t\t<h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ergebnisButton center\">\n\t\t\t\t\t\t<a href=\"" + matratzenViewInfo[product.resultado].href + "\">\n\t\t\t\t\t\t\t<button class=\"center button margin\">\n\t\t\t\t\t\t\t\t" + matratzenViewInfo[product.resultado].button + "\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ergebnisText center\">\n\t\t\t\t\t<p class=\"text_center blue weight center margin\">\n\t\t\t\t\t\t" + textViewInfo[product.textos.resultado][product.textos.modo][product.textos.boolean] + "\n\t\t\t\t\t</p>\n\t\t\t\t</div>";
		}
	}, {
		key: "update",
		value: function update(product) {

			$('#MatratzenFinder').hide().html(this._template(product)).fadeIn().css('max-width', '100%');

			$('#spinner').toggle();
			$('#imagemPrincipal').on('load', function () {
				$('#spinner').toggle();
			});

			$('#navegacao').fadeOut('slow');
		}
	}]);

	return MatratzenView;
}();

var ViewFases = function () {
	function ViewFases(viewInfo) {
		_classCallCheck(this, ViewFases);

		this._viewInfo = viewInfo;
	}

	_createClass(ViewFases, [{
		key: "_template",
		value: function _template(fase, modo, botao) {

			return "\n\t\t\t<p id=\"titulo\" style=\"opacity: 0\">" + this._viewInfo[fase][modo].title + "</p>\n\t\t\t<input type=\"button\" value=\"" + this._viewInfo[fase][modo].fase + "\" id=\"fase\" hidden>\n\t\t\t<input type=\"button\" value=\"" + this._viewInfo[fase][modo].modo + "\" id=\"modo\" hidden>\n\t    " + this._viewInfo[fase][modo].botoes.map(function (item, index) {
				if (item.id != "") {
					if (item.id == "< 80 Kg" || item.id == "81 - 99 Kg" || item.id == "> 100 Kg") {
						return "\n\t\t\t\t\t\t\t\t<div class=\"btnELabel\">\n\t\t\t\t\t\t\t\t\t<div type=\"button\" data-value=\"" + item.id + "\" id=\"btn-" + (index + 1) + "\" \n\t\t\t\t\t\t\t\t\tstyle=\"background:url('" + item.img + "');background-size: 90%; background-repeat: no-repeat; background-position:center center;\" \n\t\t\t\t\t\t\t\t\tonclick=\"botoesCorpo.escutadorClick(this)\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t";
					} else {
						return "\n\t\t\t\t\t\t\t\t<div class=\"btnELabel\">\n\t\t\t\t\t\t\t\t\t<div type=\"button\" data-value=\"" + item.id + "\" id=\"btn-" + (index + 1) + "\" \n\t\t\t\t\t\t\t\t\tstyle=\"background:url('" + item.img + "');background-size: 90%; background-repeat: no-repeat; background-position:center center;\" \n\t\t\t\t\t\t\t\t\tonclick=\"botoesCorpo.escutadorClick(this)\"></div>\n\t\t\t\t\t\t\t\t\t<p>" + item.id + "</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t";
					}
				} else {
					return "\n\t\t\t\t\t\t\t<div type=\"button\" data-value=\"" + item.id + "\" id=\"btn-" + (index + 1) + "\" hidden></div>\n\t\t\t\t\t\t";
				}
			}).join('') + "\n\t\t<div id=\"mfinderFooter\">\n\t\t\t\t<p style=\"margin:0\"><span>&#9733;</span><span>" + this._viewInfo[fase][modo].footer + "</span></p>\n\t\t</div>";
		}
	}, {
		key: "updateFase",
		value: function updateFase(fase, modo, botao) {
			if (modo == 'Paar1') {
				$('#formulario').html(this._template(Number(fase), modo, botao));
				$('#titulo').css('opacity', '1').hide().fadeIn();
			} else {
				//Atualiza a div das fases com os novos botoes
				$('#formulario').hide().html(this._template(Number(fase), modo, botao)).fadeIn();
				$('#titulo').css('opacity', '1');
			}

			//Verificacao de modo Paar
			this._verificaModoPaar(botao);
		}
	}, {
		key: "_verificaModoPaar",
		value: function _verificaModoPaar(botao) {
			if (botao == "Paar") {
				$('#modo').attr('value', 'Paar1');
				$('#fase').attr('value', '1');
			}
		}
	}]);

	return ViewFases;
}();

var ViewNavegacao = function () {
	function ViewNavegacao(viewsInfo) {
		_classCallCheck(this, ViewNavegacao);

		this._viewInfo = viewsInfo;
	}

	_createClass(ViewNavegacao, [{
		key: "_classe",
		value: function _classe(fase, modo) {

			return this._viewInfo[fase][modo].class;
		}
	}, {
		key: "_classeButton",
		value: function _classeButton(fase, modo) {

			return this._viewInfo[fase][modo].classButton;
		}
	}, {
		key: "_botao",
		value: function _botao(botao) {

			return "<img class=\"sextoImg\" src=\"" + botao.split('"')[1] + "\">";
		}
	}, {
		key: "updateNavegacao",
		value: function updateNavegacao(fase, modo, botao) {

			var classes = this._classeButton(fase, modo);
			var botoes = $('.buttonNav').children();

			for (var i = 0; i < botoes.length; i++) {
				$(botoes[i]).removeClass();
				$(botoes[i]).addClass(classes[i]);
				$(botoes[i]).addClass('navbutton');
			}

			$('#progress').removeClass();
			$('#progress').addClass(this._classe(fase, modo));

			if ($('#modo').val() == "Paar2") {
				$(".sexto:nth-child(" + (fase + 1) + ")").html(this._botao(botao));
			} else if ($('#modo').val() == "Paar1") {
				$(".sexto:nth-child(" + fase + ")").append(this._botao(botao));
			} else {
				$(".sexto:nth-child(" + fase + ")").html(this._botao(botao));
			}

			var textoFase = function () {
				if (fase == 0) {
					return "Geschlecht";
				} else if (fase == 1) {
					return "Körpermaße";
				} else if (fase == 2) {
					return "Schlafposition";
				} else if (fase == 3) {
					return "Statur";
				} else if (fase == 4) {
					return "Liegegefühl";
				} else if (fase == 5) {
					return "Beschwerden";
				} else if (fase == 6) {
					return "Ergebnis";
				}
			}();
			var textoFaseIndex = function () {
				if (fase == 0) {
					return "1/6: ";
				} else if (fase == 1) {
					return "2/6: ";
				} else if (fase == 2) {
					return "3/6: ";
				} else if (fase == 3) {
					return "4/6: ";
				} else if (fase == 4) {
					return "5/6: ";
				} else if (fase == 5) {
					return "6/6: ";
				} else if (fase == 6) {
					return "Ergebnis";
				}
			}();
			$('#faseTitle').text(textoFaseIndex + textoFase);

			var btnVoltar = $('#voltar');
			if (fase == 0) {
				btnVoltar.css('display', 'none');
			} else if (fase == 1) {
				btnVoltar.css('display', 'block');btnVoltar.attr('data-value', '0');
			} else if (fase == 2) {
				btnVoltar.css('display', 'block');btnVoltar.attr('data-value', '1');
			} else if (fase == 3) {
				btnVoltar.css('display', 'block');btnVoltar.attr('data-value', '2');
			} else if (fase == 4) {
				btnVoltar.css('display', 'block');btnVoltar.attr('data-value', '3');
			} else if (fase == 5) {
				btnVoltar.css('display', 'block');btnVoltar.attr('data-value', '4');
			} else if (fase == 6) {
				btnVoltar.css('display', 'none');btnVoltar.attr('data-value', '5');
			}
		}
	}]);

	return ViewNavegacao;
}();