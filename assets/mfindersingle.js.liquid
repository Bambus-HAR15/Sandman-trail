var coupleMode = false; var pageMode = false; var count = 0; var arrayData = [];var faseCount = []; 
var slider = $("#fig"); var pairData = false; var resultado_parcial_1; var resultado_geral; var resultado_parcial_2;
$(document).ready( function(){
var slider = $("#fig"); 
  $(".id").click(function(event){
    var id = $(this).attr("id");
      if (id == "fase2" || id == "fase3" || id == "fase4" || id == "fase5" || id == "fase6") {
       action(id);
       fase(id); 
      }
      else if (id == "fase1") {
        location.reload();
      }
      else {
       action(id);
       savedata(id); 
      }
      
  });

//-------Define que acao será tomada---------//
  function action(id){
    var id = id;
    if (coupleMode && pageMode) {
      if (id == "fase1" || id == "fase2" || id == "fase3" || id == "fase4" || id == "fase5" || id == "fase6") {
        slideleft(id);
        lableText(id);
      }else {
       changepage(id);
       lableText(id); 
      } 
    }else {
      slideleft(id);
    }
  };

//-------Acoes Possiveis------------//
  function changepage(id){
    var id = id;
    fase(id);
    pageMode = false;
  };

  function slideleft(id){
    var id = id;
    setTimeout(function(){
    slider.css("left", offset(id));
    },250)
    navBarUpdate(id);
    pageMode = true;
    if (id == "mann" || id =="frau" || id =="paar" || id =="kind" || id =="fase2" ) {
      $("#inicialText").addClass("displaynone");
       window.history.pushState("fase2", "Title", "https://www.mister-sandman.de/pages/matratzenfinder/korpermasse");
    }
    else if(id == "65k1" || id == "74k1" || id == "84k1" || id == "99k1" || id == "100k1" || id =="fase3"){
        window.history.pushState("fase3", "Title", "https://www.mister-sandman.de/pages/matratzenfinder/schlafposition");
    }
    else if(id == "ruck1" || id == "seite1" || id == "bauch1" || id == "untersch1" || id =="fase4"){
        window.history.pushState("fase4", "Title", "https://www.mister-sandman.de/pages/matratzenfinder/statur");
    }
    else if(id == "htyp1" || id == "etyp1" || id == "atyp1" || id == "ityp1" || id =="fase5"){
        window.history.pushState("fase5", "Title", "https://www.mister-sandman.de/pages/matratzenfinder/liegegefuhl");
    }
    else if(id == "soft1" || id == "mittel1" || id == "fest1" || id =="fase6"){
        window.history.pushState("fase6", "Title", "https://www.mister-sandman.de/pages/matratzenfinder/beschwerden");
    }
  };

//----Atualiza barra de navegacao-------//

  function navBarUpdate(id){
    var id = id;
    if (id !="fase1" && id !="fase2" && id !="fase3" && id !="fase4" && id !="fase5") {
      var index = offset(id);
      var index = index.substr(1,3,4,5);
      var index = parseInt(index)/100;
      var children = $(".navMenu").children();
      if (index < children.length){
      children[index].className = "navMenuIten navMenuItenSelectedy id";
      }
      else{
        $("#thumb").addClass("displaynone");
        $("#navMenuId").fadeOut("slow");
      }
      for(var a = index; a < children.length; a++){
        children[a].className = "navMenuIten navMenuItenUnselected id";
      }
      for(var a = 0; a < index; a++){
        children[a].className = "navMenuIten navMenuItenPostselected id";
      }
      if (index < children.length) {
        children[index].className = "navMenuIten navMenuItenSelected id";
      }
      else{
        matratzenFinder();
        $("#navMenuId").fadeOut("slow");
      }
    }
    else if (id == "fase1") {
      location.reload();
    }
    else {
      var index = offset(id);
      var index = index.substr(1,3,4,5);
      var index = parseInt(index)/100;
      var children = $(".navMenu").children();
      for(var a = index; a < children.length; a++){
        children[a].className = "navMenuIten navMenuItenUnselected id";
      }
      for(var a = 0; a < index; a++){
        children[a].className = "navMenuIten navMenuItenPostselected id";
      }
      if (index <= children.length) {
        children[index].className = "navMenuIten navMenuItenSelected id";
      }
      resetParcialData(index);
    }
  };

//---------Salva os dados----------//
  function savedata(id){ 
  var id = id;   
    if (id == "paar") {
      coupleMode = true;
      pageMode = true;
      pairData = true;
      setTimeout(function(){
      $(".slideContent p").addClass("displaynone").fadeOut("slow");
      $("#thumb").removeClass("displaynone").fadeIn("slow");
      $("#mask").addClass("maskprincipal").fadeIn("slow");
      },0)
    }

    if (coupleMode) {
      if (pairData) {
        arrayData.push(id);
        arrayData.push([]);
        pairData = false; 
        lableText(id);
      }else {
        arrayData[1].push(id);
        count += 1;
        lableText(id);
      }
    }else {
      arrayData.push(id);
      count += 1;  
    }
  };

//-----Funcoes acessórias---------//
  function offset(id){
    if (id == "mann" || id =="frau" || id =="paar" || id =="kind" || id =="fase2" ) {
      var offset = "-100%";
      return offset;
    }
    else if(id == "65k1" || id == "74k1" || id == "84k1" || id == "99k1" || id == "100k1" || id =="fase3"){
      var offset = "-200%";
      return offset;
    }
    else if(id == "ruck1" || id == "seite1" || id == "bauch1" || id == "untersch1" || id =="fase4"){
      var offset = "-300%";
      return offset;
    }
    else if(id == "htyp1" || id == "etyp1" || id == "atyp1" || id == "ityp1" || id =="fase5"){
      var offset = "-400%";
      return offset;
    }
    else if(id == "soft1" || id == "mittel1" || id == "fest1" || id =="fase6"){
      var offset = "-500%";
      return offset;
    }
    else {
      var offset = "-600%";
      return offset;
    } 
  };

  function fase(id){
  if (id == "fase2" || id == "fase3" || id == "fase4" || id == "fase5" || id == "fase6") {
    $(".weightclass2").removeClass('weightclass2').addClass('weightclass');
    
    $("#ruck1").attr("src", "https://cdn.shopify.com/s/files/1/1563/5705/files/3-ruck.png?9330657311673828747");
    $("#seite1").attr("src", "https://cdn.shopify.com/s/files/1/1563/5705/files/3-seite.png?9330657311673828747");
    $("#bauch1").attr("src", "https://cdn.shopify.com/s/files/1/1563/5705/files/3-bauch.png?9330657311673828747");
    $("#untersch1").attr("src", "https://cdn.shopify.com/s/files/1/1563/5705/files/3-unterschiedlich.png?9330657311673828747");
    
    $(".weightclass4").removeClass('weightclass4').addClass('weightclass3');
    $("#htyp1 img").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/4-htyp_91575e75-5f38-4b19-8cbe-a9a75b01b21d.png?8816933109514327197");
    $("#etyp1 img").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/4-etyp_eb52960b-5f86-41b4-b73a-d3e5747aed34.png?8816933109514327197");
    $("#atyp1 img").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/4-atyp_73ec7f8b-f30a-428a-bea5-700807987924.png?8816933109514327197");
    $("#ityp1 img").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/4-ityp_3031254b-ccaa-4f8d-be0a-aeb83bbec9d2.png?8816933109514327197");
    
    $("#soft1").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/5-soft_bfd211e3-edb5-4393-93cd-3d647f459d83.png?9330657311673828747");
    $("#mittel1").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/5-mittel_8125c13b-0dd3-40d8-b992-f352d4555561.png?9330657311673828747");
    $("#fest1").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/5-fest.png?9330657311673828747");
    
    $("#ja1").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/5-ja.png?9330657311673828747");
    $("#nein1").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/5-nein.png?9330657311673828747");   
  }
  else {
    if (id == "mann" || id =="frau" || id =="paar" || id =="kind") {
      var fase = 1;
      return fase;
    }
    else if(id == "65k1" || id == "74k1" || id == "84k1" || id == "99k1" || id == "100k1"){
      $(".weightclass").removeClass('weightclass').addClass('weightclass2');
    }
    else if(id == "ruck1" || id == "seite1" || id == "bauch1" || id == "untersch1"){
      $("#ruck1").attr("src", "https://cdn.shopify.com/s/files/1/1563/5705/files/3-ruck_d57384c9-e6b8-4d79-ba41-2fbe705ed724.png?15251590636512646504");
      $("#seite1").attr("src", "https://cdn.shopify.com/s/files/1/1563/5705/files/3-seite_9172b2da-680a-405c-b906-7c57086b46d3.png?15251590636512646504");
      $("#bauch1").attr("src", "https://cdn.shopify.com/s/files/1/1563/5705/files/3-bauch_9e740870-5e52-493f-ba63-50fdae6cbdd7.png?15251590636512646504");
      $("#untersch1").attr("src", "https://cdn.shopify.com/s/files/1/1563/5705/files/3-unterschiedlich_68335265-1d24-4773-866e-cf819afb6e80.png?15251590636512646504");
    }
    else if(id == "htyp1" || id == "etyp1" || id == "atyp1" || id == "ityp1"){
      $(".weightclass3").removeClass('weightclass3').addClass('weightclass4');
      $("#htyp1 img").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/4-htyp_3e2c9511-66d6-43b6-8faa-f21c31654576.png?15251590636512646504");
      $("#etyp1 img").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/4-etyp_d55c79d2-0c37-404d-b4bd-4cdbb2c96f6f.png?15251590636512646504");
      $("#atyp1 img").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/4-atyp_82ead9e2-01b6-43e2-b8eb-c46b97304042.png?15251590636512646504");
      $("#ityp1 img").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/4-ityp_11e8a105-e254-44a4-8b8a-6504db23f377.png?15251590636512646504");
    }
    else if(id == "soft1" || id == "mittel1" || id == "fest1"){
      $("#soft1").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/5-soft_ee62f992-3e1d-4b6a-9a56-8c6da79bfb17.png?15251590636512646504");
      $("#mittel1").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/5-mittel_a973187e-6d3c-4cce-b913-34fc1b42879c.png?15251590636512646504");
      $("#fest1").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/5-fest_9c54a410-7df9-4aa1-ab37-40187cb38ded.png?15251590636512646504");
    }
    else {
      $("#ja1").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/5-ja_e5121f4a-d8b1-4e29-beb3-8c8623167541.png?15251590636512646504");
      $("#nein1").attr("src","https://cdn.shopify.com/s/files/1/1563/5705/files/5-nein_84ed839d-1cb8-4e54-bfc5-5fbd20d80595.png?15251590636512646504");
    }
      var index = offset(id);
      var index = index.substr(1,3,4,5);
      var index = parseInt(index)/100;
      var children = $(".navMenu").children();
      children[index-1].className = "navMenuIten navMenuItenSelectedy id";
  } 
  };

  function resetParcialData(index){
    if (!coupleMode) {
      var del = count - index + 1;
      arrayData.splice(index, del); 
    }
    else {
      if (arrayData[1].length % 2 != 0) {
        arrayData[1].splice((index-1)*2, del-1);
      }
      var del = count;
      arrayData[1].splice((index-1)*2, del); 
    }
  };

  function lableText(id){
    var id = id;
    var index = offset(id);
    var index = index.substr(1,3,4,5);
    var index = parseInt(index)/100;
    if (pageMode) {
      $("#mask").removeClass("greymask");
      switch(index){
        case 1:$("#mask p").text("Bitte geben Sie Ihr Gewicht an.").fadeIn("slow");
        break;
        case 2:$("#mask p").text("Wie schlafen Sie auf der Matratze?");
        break;
        case 3:$("#mask p").text("Wie ist Ihre Körperstatur?");
        break;
        case 4:$("#mask p").text("Wie liegen Sie am liebsten auf der Matratze?");
        break;
        case 5:$("#mask p").text("Haben Sie Rückenbeschwerden?");
        break;
      }
    }
    else {
      $("#mask").addClass("greymask");
      switch(index){
        case 2:$("#mask p").text("Bitte geben Sie das Gewicht Ihres Partners an.");
        break;
        case 3:$("#mask p").text("Wie schläft Ihr Partner auf der Matratze?");
        break;
        case 4:$("#mask p").text("Wie ist die Körperstatur Ihres Partners?");
        break;
        case 5:$("#mask p").text("Wie liegt Ihr Partner am liebsten auf der Matratze?");
        break;
        case 6:$("#mask p").text("Hat Ihr Partner Rückenbeschwerden?");
        break;
      }
    }
  };


  function customText(){
    var colchao = document.getElementById('colchao');
    var pesos = document.getElementById('pesos');
    var wend = document.getElementById('wend');
    var rest = document.getElementById('rest');
    if (!coupleMode) {
      if (resultado_parcial_1 == "aurora") {
        colchao.innerHTML = auroraSingle;
        if (arrayData[1] != "84k1" && arrayData[1] != "100k1") {
          pesos.innerHTML = aurora84;
          if (arrayData[5] == "ja1") {
            rest.innerHTML = auroraJa + umgewohnen + rucksendung;
          }
          else{
            rest.innerHTML = umgewohnen + rucksendung;
          }
        }
        else if (arrayData[1] == "84k1") {
          pesos.innerHTML = aurora99;
          if (arrayData[5] == "ja1") {
            rest.innerHTML = auroraJa + umgewohnen + rucksendung;
          }
          else{
            rest.innerHTML = umgewohnen + rucksendung;
          }
        }
        else {
          pesos.innerHTML = aurora100;
          if (arrayData[5] == "ja1") {
            rest.innerHTML = auroraJa + umgewohnen + rucksendung;
          }
          else{
            rest.innerHTML = umgewohnen + rucksendung;
          }
        }
        wend.innerHTML = auroraWend;
      }
      else if (resultado_parcial_1 == "serena") {
        colchao.innerHTML = serenaSingle;
        if (arrayData[1] != "84k1" && arrayData[1] != "100k1") {
          pesos.innerHTML = serena84;
          if (arrayData[5] == "ja1") {
            rest.innerHTML = serenaJa + umgewohnen + rucksendung;
          }
          else{
            rest.innerHTML = umgewohnen + rucksendung;
          }
        }
        else if (arrayData[1] == "84k1") {
          pesos.innerHTML = serena99;
          if (arrayData[5] == "ja1") {
            rest.innerHTML = serenaJa + umgewohnen + rucksendung;
          }
          else{
            rest.innerHTML = umgewohnen + rucksendung;
          }
        }
        else {
          pesos.innerHTML = serena100;
          if (arrayData[5] == "ja1") {
            rest.innerHTML = serenaJa + umgewohnen + rucksendung;
          }
          else{
            rest.innerHTML = umgewohnen + rucksendung;
          }
        }
        wend.innerHTML = serenaWend;
      }
      else if (resultado_parcial_1 == "luna") {
        colchao.innerHTML = lunaSingle;
        if (arrayData[1] == "100k1") {
          pesos.innerHTML = luna100;
          if (arrayData[5] == "ja1") {
            rest.innerHTML = lunaJa + umgewohnen + rucksendung;
          }
          else {
            rest.innerHTML = umgewohnen + rucksendung;
          }
        }
      }
    } 
  };


  function customText2(){
  var colchao = document.getElementById('colchao');
  var pesos = document.getElementById('pesos');
  var wend = document.getElementById('wend');
  var rest = document.getElementById('rest');
      if (resultado_geral == "aurora") {
        colchao.innerHTML = auroraPaar;
        if (arrayData[1][8] == "ja1" || arrayData[1][9] == "ja1" ) {
          rest.innerHTML = auroraJa + umgewohnen + rucksendung;
        }
        else {
          rest.innerHTML = umgewohnen + rucksendung;
        }
        wend.innerHTML = auroraWend;
      }
      else if (resultado_geral == "serena") {
        colchao.innerHTML = serenaPaar;
        if (arrayData[1][8] == "ja1" || arrayData[1][9] == "ja1" ) {
          rest.innerHTML = serenaJa + umgewohnen + rucksendung;
        }
        else {
          rest.innerHTML = umgewohnen + rucksendung;
        }
        wend.innerHTML = serenaWend;  
      }
      else if (resultado_geral == "luna") {
        colchao.innerHTML = lunaPaar;
        if (arrayData[1][8] == "ja1" || arrayData[1][9] == "ja1" ) {
          rest.innerHTML = lunaJa + umgewohnen + rucksendung;
        }
        else {
          rest.innerHTML = umgewohnen + rucksendung;
        }    
      } 
  };

  function matratzenFinder(){
    
    if (!coupleMode) {
      if (arrayData[1] == "100k1" && arrayData[4] == "fest1" && (arrayData[3] == "htyp1" || arrayData[3] == "ityp1") ) {resultado_parcial_1 = "luna";}
      else if ( arrayData[1] != "100k1" && arrayData[4] == "fest1") {resultado_parcial_1 = "serena"}
      else if ( arrayData[1] == "100k1" && arrayData[4] == "mittel1" && (arrayData[3] == "htyp1" || arrayData[3] == "ityp1") ) {resultado_parcial_1 = "serena";}
      else if ( arrayData[1] == "100k1" && arrayData[4] == "fest1" && (arrayData[3] == "etyp1" || arrayData[3] == "atyp1") ) {resultado_parcial_1 = "serena";}
      else {resultado_parcial_1 = "aurora";}
      console.log(resultado_parcial_1);
      $("#mat").text(resultado_parcial_1);
      customText();
      finalPic(resultado_parcial_1);
       window.history.pushState("fase7", "Title", "https://www.mister-sandman.de/pages/matratzenfinder/" + resultado_parcial_1);
    }
    else{
      if (arrayData[1][0] == "100k1" && arrayData[1][6] == "fest1" && (arrayData[1][4] == "htyp1" || arrayData[1][4] == "ityp1") ) {resultado_parcial_1 = "luna";}
      else if ( arrayData[1][0] != "100k1" && arrayData[1][6] == "fest1") {resultado_parcial_1 = "serena"}
      else if ( arrayData[1][0] == "100k1" && arrayData[1][6] == "mittel1" && (arrayData[1][4] == "htyp1" || arrayData[1][4] == "ityp1") ) {resultado_parcial_1 = "serena";}
      else if ( arrayData[1][0] == "100k1" && arrayData[1][6] == "fest1" && (arrayData[1][4] == "etyp1" || arrayData[1][4] == "atyp1") ) {resultado_parcial_1 = "serena";}
      else {resultado_parcial_1 = "aurora";}
      console.log("person1:"+ resultado_parcial_1);

      if (arrayData[1][1] == "100k1" && arrayData[1][7] == "fest1" && (arrayData[1][5] == "htyp1" || arrayData[1][5] == "ityp1") ) {resultado_parcial_2 = "luna";}
      else if ( arrayData[1][1] != "100k1" && arrayData[1][7] == "fest1") {var resultado_parcial_2 = "serena"}
      else if ( arrayData[1][1] == "100k1" && arrayData[1][7] == "mittel1" && (arrayData[1][5] == "htyp1" || arrayData[1][5] == "ityp1") ) {resultado_parcial_2 = "serena";}
      else if ( arrayData[1][1] == "100k1" && arrayData[1][7] == "fest1" && (arrayData[1][5] == "etyp1" || arrayData[1][5] == "atyp1") ) {resultado_parcial_2 = "serena";}
      else {resultado_parcial_2 = "aurora";}
      console.log("person2:"+ resultado_parcial_2);

      if (resultado_parcial_1 == "luna" && resultado_parcial_2 == "luna") {resultado_geral = "luna";}
      else if (resultado_parcial_1 == "serena" && resultado_parcial_2 == "luna") {resultado_geral = "serena";}
      else if (resultado_parcial_1 == "luna" && resultado_parcial_2 == "serena") {resultado_geral = "serena";}
      else if (resultado_parcial_1 == "serena" && resultado_parcial_2 == "serena") {resultado_geral = "serena";}
      else {resultado_geral = "aurora";}
      console.log(resultado_geral);
      $("#mat").text(resultado_geral);
      customText2();
      finalPic(resultado_geral);
      window.history.pushState("fase7", "Title", "https://www.mister-sandman.de/pages/matratzenfinder/" + resultado_geral);
    } 
  };

  function finalPic(resultado){
    var resultadoF = resultado;
    console.log("aqui:"+ resultadoF)
          var aurora = '<div class="eight columns omega thumbnail even" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/Product">'
                    +'<a href="/products/latex-visco-kaltschaummatratze-matratzen" itemprop="url">'
                    +'<div class="relative product_image">'
                    +'<img src="//cdn.shopify.com/s/files/1/1563/5705/products/Mattress_detail3xb_3d2d5e91-2156-4668-a9ee-831e69c319be_large.jpg?v=1479725018" data-src="//cdn.shopify.com/s/files/1/1563/5705/products/Mattress_detail3xb_3d2d5e91-2156-4668-a9ee-831e69c319be_large.jpg?v=1479725018" data-src-retina="//cdn.shopify.com/s/files/1/1563/5705/products/Mattress_detail3xb_3d2d5e91-2156-4668-a9ee-831e69c319be_grande.jpg?v=1479725018" alt="Aurora <br>Latexschaum">'
                    +'</div>'
                    +'<div class="info">'            
                    +'<span class="title" itemprop="name">Oriana <br>Latexschaum</span>'
                    +'<span class="price " itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">'
                    +'<meta itemprop="price" content="349,00">'
                    +'<meta itemprop="priceCurrency" content="EUR">'
                    +'<meta itemprop="seller" content="Mister Sandman">'
                    +'<meta itemprop="availability" content="in_stock">'
                    +'<meta itemprop="itemCondition" content="New">'
                    +'<small><em>ab </em></small>'
                    +'<span><span class="money">349,00 €</span></span>'
                    +'</span>'
                    +'</div>'
                    +'</a>'
                    +'</div>';

    var serena =    '<div class="eight columns omega thumbnail even" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/Product">'
                    +'<a href="/products/gel-kaltschaummatratze-matratzen" itemprop="url">'
                    +'<div class="relative product_image">'
                    +'<img src="//cdn.shopify.com/s/files/1/1563/5705/products/Mattress_detail2b_0a0c72a3-ea5f-40e7-8155-59b48bc8fa9d_large.jpg?v=1479725057" data-src="//cdn.shopify.com/s/files/1/1563/5705/products/Mattress_detail2b_0a0c72a3-ea5f-40e7-8155-59b48bc8fa9d_large.jpg?v=1479725057" data-src-retina="//cdn.shopify.com/s/files/1/1563/5705/products/Mattress_detail2b_0a0c72a3-ea5f-40e7-8155-59b48bc8fa9d_grande.jpg?v=1479725057" alt="Serena <br>Gelaxschaum">'
                    +'</div>'
                    +'<div class="info">'            
                    +'<span class="title" itemprop="name">Serena <br>Gelaxschaum</span>'
                    +'<span class="price " itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">'
                    +'<meta itemprop="price" content="249,00">'
                    +'<meta itemprop="priceCurrency" content="EUR">'
                    +'<meta itemprop="seller" content="Mister Sandman">'
                    +'<meta itemprop="availability" content="in_stock">'
                    +'<meta itemprop="itemCondition" content="New">'
                    +'<small><em>ab </em></small>'
                    +'<span><span class="money">249,00 €</span></span>'
                    +'</span>'
                    +'</div>'
                    +'</a>'
                    +'</div>';

    var luna =    '<div class="eight columns omega thumbnail even" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/Product">'
                    +'<a href="/products/kaltschaummatratze-matratzen" itemprop="url">'
                    +'<div class="relative product_image">'
                    +'<img src="//cdn.shopify.com/s/files/1/1563/5705/products/Mattress_detail1B_1_large.jpg?v=1479215708" data-src="//cdn.shopify.com/s/files/1/1563/5705/products/Mattress_detail1B_1_large.jpg?v=1479215708" data-src-retina="//cdn.shopify.com/s/files/1/1563/5705/products/Mattress_detail1B_1_grande.jpg?v=1479215708" alt="Luna<br>Kaltschaum">'
                    +'</div>'
                    +'<div class="info">'          
                    +'<span class="title" itemprop="name">Luna<br>Kaltschaum</span>'
                    +'<span class="price " itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">'
                    +'<meta itemprop="price" content="179,00">'
                    +'<meta itemprop="priceCurrency" content="EUR">'
                    +'<meta itemprop="seller" content="Mister Sandman">'
                    +'<meta itemprop="availability" content="in_stock">'
                    +'<meta itemprop="itemCondition" content="New">'
                    +'<small><em>ab </em></small>'
                    +'<span><span class="money">179,00 €</span></span>'
                    +'</span>'
                    +'</div>'
                    +'</a>'
                    +'</div>';


      if (resultadoF == "aurora") {
        $("#finalPic").prepend(aurora);
      }
      else if (resultadoF == "serena") {
        $("#finalPic").prepend(serena);
      }
      else{
        $("#finalPic").prepend(luna);
      }
  };


 var lunaSingle =  '<div id="lunaSingle">'
                  +'<p><br />Auf Basis Ihrer Angaben, würden wir Ihnen unsere Luna Matratze empfehlen. Diese Matratze bietet Ihnen ein festes Liegegefühl.</p>'
                  +'</div>';
        
  var serenaSingle = '<div id="serenaSingle">'
                    +'<p><br />Auf Basis Ihrer Angaben, würden wir Ihnen unsere Serena Matratze empfehlen. Diese Matratze bietet Ihnen die Liegegefühle mittelfest und fest.</p>'
                    +'</div>';
        
  var auroraSingle = '<div id="auroraSingle">'
                    +'<p><br />Auf Basis Ihrer Angaben, würden wir Ihnen unsere Oriana Matratze empfehlen. Diese Matratze bietet Ihnen die Liegegefühle soft und mittelfest.</p>'
                    +'</div>';
  //----------------------------------------------//      
  var aurora84 =    '<div id="84aurora">'
                    +'<p>Aufgrund Ihres Gewichtes und Ihrer Körpermaße empfehlen wir Ihnen eine softe Liegeoberfläche, da Sie bei einer festen Schlafoberfläche im Schulter- und Hüftbereich nicht genügend einsinken würden. Die Kombination aus hochwertigem Latex und Viscoschaum bietet Ihrem Körper eine optimale Gewichts- und Druckverteilung über die gesamte Liegeoberfläche.</p>'
                    +'</div>';
        
  var serena84 =    '<div id="84serena">'
                    +'<p>Aufgrund Ihres Gewichtes und Ihrer Körpermaße empfehlen wir Ihnen eine mittelfeste Liegeoberfläche, um eine ideale Körperanpassung zu gewährleisten. Dabei gibt Ihnen die Matratze die ideale Kombination aus Anpassungsfähigkeit und Stützkraft, die Ihre Wirbelsäule für eine optimale Liegeposition benötigt.</p>'
                    +'</div>';
        
  var aurora99 =    '<div id="99aurora">'
                    +'<p>Aufgrund Ihres Gewichtes und Ihrer Körpermaße empfehlen wir Ihnen eine softe Liegeoberfläche, da Sie bei einer festen Schlafoberfläche im Schulter- und Hüftbereich nicht genügend einsinken würden. Die Kombination aus hochwertigem Latex und Viscoschaum bietet Ihrem Körper eine optimale Gewichts- und Druckverteilung über die gesamte Liegeoberfläche.</p>'
                    +'</div>';
        
  var serena99 =    '<div id="99serena">'
                    +'<p>Aufgrund Ihres Gewichtes und Ihrer Körpermaße empfehlen wir Ihnen eine mittelfeste Liegeoberfläche, um eine ideale Körperanpassung zu gewährleisten. Dabei gibt Ihnen die Matratze die ideale Kombination aus Anpassungsfähigkeit und Stützkraft, die Ihre Wirbelsäule für eine optimale Liegeposition benötigt.</p>'
                    +'</div>';
        
  var aurora100 =   '<div id="100aurora">'
                    +'<p>Aufgrund Ihres Gewichtes, Ihrer Körpermaße und Ihres präferierten Liegeempfinden empfehlen wir Ihnen eine softe Liegeoberfläche, da Sie bei einer festen Schlafoberfläche im Schulter- und Hüftbereich nicht genügend einsinken würden. Die Kombination aus hochwertigem Latex und Viscoschaum bietet Ihrem Körper eine optimale Gewichts- und Druckverteilung über die gesamte Liegeoberfläche.</p>'
                    +'</div>';
        
  var serena100 =   '<div id="100serena">'
                    +'<p>Aufgrund Ihres Gewichtes und Ihrer Körpermaße empfehlen wir Ihnen eine mittelfeste Liegeoberfläche, um eine ideale Körperanpassung zu gewährleisten. Dabei gibt Ihnen die Matratze die ideale Kombination aus Anpassungsfähigkeit und Stützkraft, die Ihre Wirbelsäule für eine optimale Liegeposition benötigt.</p>'
                    +'</div>';
        
  var luna100 =     '<div id="100luna">'
                    +'<p>Aufgrund Ihres Gewichtes und Ihrer Körpermaße empfehlen wir Ihnen eine feste Liegeoberfläche, um Ihren Körper ideal zu stützen. Der in Zusammenarbeit mit Experten entwickelte Kaltschaum, bietet Ihnen eine optimale Druckentlastung. Durch den 7-Zonen Würfelschnitt wird zudem die natürliche Form Ihrer Wirbelsäule beibehalten.</p>'
                    +'</div>';
  //-----------------------------------------------//      
  var auroraPaar =  '<div id="auroraPaar">'
                    +'<p>Aufgrund Ihrer Kombination aus den angegebenen Gewichten und Körpermaßen empfehlen wir Ihnen eine softe Liegeoberfläche, da Sie bei einer festen Schlafoberfläche im Schulter- und Hüftbereich nicht genügend einsinken würden. Die Kombination aus hochwertigem Latex und Viscoschaum bietet Ihren Körpern eine optimale Gewichts- und Druckverteilung über die gesamte Liegeoberfläche. </p>'
                    +'</div>';
        
  var serenaPaar =  '<div id="serenaPaar">'
                    +'<p>Aufgrund Ihrer Kombination aus den angegebenen Gewichten und Körpermaßen empfehlen wir Ihnen eine mittelfeste Liegeoberfläche, um eine ideale Körperanpassung zu gewährleisten. Dabei gibt Ihnen die Matratze die nötige Stützkraft, die Ihre Wirbelsäulen für eine optimale Liegeposition benötigen. </p>'
                    +'</div>';
        
  var lunaPaar =    '<div id="lunaPaar">'
                    +'<p>Aufgrund Ihrer Kombination aus den angegebenen Gewichten und Körpermaßen empfehlen wir Ihnen eine feste Liegeoberfläche. Der in Zusammenarbeit mit Experten entwickelte Kaltschaum, bietet Ihnen eine optimale Druckentlastung. Durch den 7-Zonen Würfelschnitt wird zudem die natürliche Form Ihrer Wirbelsäulen beibehalten. </p>'
                    +'</div>';
        
  var auroraJa =    '<div id="auroraJa">'
                    +'<p>Bei Rückenbeschwerden ist es zudem besonders wichtig, dass Ihre Wirbelsäule gleichmäßig entlastet wird. Diese Matratze bietet das optimale Verhältnis zwischen stützendem Kaltschaum und anpassungsfähigem Visco- und Latexschaum. Ihr Körper sinkt sanft ein und Ihre Wirbelsäule bleibt während des Liegens in Ihrer natürlichen Form.</p>'
                    +'</div><br>';
        
  var serenaJa =    '<div id="serenaJa">'
                    +'<p>Bei Rückenbeschwerden ist es zudem besonders wichtig, dass Ihr Körpergewicht gleichmäßig von der Matratze aufgenommen wird, sodass Ihre Wirbelsäule während des Liegens ihre natürliche Form beibehält. Der druckverteilende Gelaxschaum bietet Ihnen genau die gewünschten Eigenschaften.</p>'
                    +'</div><br>';
        
  var lunaJa =      '<div id="lunaJa">'
                    +'<p>Bei Rückenbeschwerden ist es zudem besonders wichtig, dass Ihre Wirbelsäule gleichmäßig entlastet wird. Der spezielle 7 Zonen-Kaltschaum kompensiert den Druck von Kopf, Schulter, Gesäß und Ferse optimal und lässt Ihren Körper an den entsprechenden Stellen leicht einsinken. Ihre Wirbelsäule bleibt während des Liegens in Ihrer natürlichen Form.</p>'
                    +'</div><br>';
        
  var auroraWend =  '<div id="auroraWend">'
                    +'<p>Falls die Matratze zu soft sein sollte, können Sie den Matratzenkern einfach auf die festere Kaltschaumseite wenden, indem Sie den Bezug öffnen und den Kern auf die gewünschte Seite drehen.</p>'
                    +'</div><br>';
        
  var serenaWend =  '<div id="serenaWend">'
                    +'<p>Falls die Matratze zu soft sein sollte, können Sie den Matratzenkern einfach auf die festere Kaltschaumseite wenden, indem Sie den Bezug öffnen und den Kern auf die gewünschte Seite drehen.</p>'
                    +'</div><br>';
        
  var umgewohnen =  '<div id="umgewohnen">'
                    +'<p>Genau wie ein neues paar Schuhe manchmal erst eingelaufen werden muss, kann es bei einem Wechsel zu einer neuen Matratze ebenfalls vorkommen, dass sich die Muskulatur zu Beginn an die neue Liegeoberfläche gewöhnen muss. Spätestens nach 2-3 Wochen sollte sich der Körper allerdings an die veränderten Bedingungen angepasst haben.</p>'
                    +'</div><br>';
        
  var rucksendung = '<div id="rucksendung">'
                    +'<p>Sollten Sie wider Erwarten nicht mit der Matratze zufrieden sein, holen wir diese selbstverständlich kostenfrei bei Ihnen ab und erstatten den vollen Kaufpreis.</p>'
                    +'</div><br>';
});