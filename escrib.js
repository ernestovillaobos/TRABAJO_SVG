window.onload = function()
 {
 	//alert("Cargó...");
 	 var dibujar = SVG('mover').size("100%", 300);
 	
 	 var color = "#0ff";
 	
 
   var posOrg = [[0,0],[0,200],[80,200],[80,165],[40,165],[40,130],[80,130],[80,100],[40,100],[40,65],[80,65],[80,0],[0,0]];
   //var posOrg = [[0,0], [200, 0], [200,80], [165,80], [165,40], [130,40],[130,80],[100,80],[100,40],[65,40],[65,80],[0,80],[0,0]];
 	
 	var posDestino = [[0,0],[0,200],[200,200],[200,160],[150,160],[150,0],[110,0],[110,200],[110,160],[40,160],[40,0],[0,0]];
 	
 	var continua = dibujar.polyline(posOrg).fill("blue").stroke({width : 10}); //ancho de linea
 	var animo = false;
 	nom_div("posLinea").addEventListener('click', function(event)
 	{
 		if(!animo)
 		{
 			continua.animate(1000).plot(posDestino);// velpocidad de cambio
 		}
 		else
 		{
 			continua.animate(1000).plot(posOrg); //velocidad de cambio
 		}
 		animo = !animo;
 	});
 	function nom_div(div)
 	{
 		return document.getElementById(div);
 	}
   }
