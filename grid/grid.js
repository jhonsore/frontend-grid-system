(function(){
  "use strict";

  var GRID = function(args){
    var width = args.width;
    var col = args.col;
    var gutter = args.gutter;
    var colW = (((width/col) * 100)/width);

    var html = "<div id='grid-site' style='position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 999;'>";
      html += "<div class='grid-site__box' style='width: "+width+"px;margin: 0 auto;position: relative;height: 100%;opacity: .4;'>";
        for(var i=0; i< col;i++){
          html += "<div class='grid-site__col' style='width: "+colW+"%;position: relative;height: 100%;float: left;'>";
            html += "<div class='grid-site__inner' style='background: #FF4000;margin: 0 "+gutter+"px; position: relative; height: 100%;'></div>";
          html += "</div>";
        }
        html += "<div class='clear'></div>";
      html += "</div>";
    html += "</div>";

    var htmlObject = document.createElement('div');
    htmlObject.innerHTML = html;
    document.body.appendChild(htmlObject);

    document.addEventListener("keydown", keyDownTextField, false);
    document.addEventListener("keyup", keyUpTextField, false);

    var map = {};

    function keyUpTextField(){
      map = {};
    }

    function keyDownTextField(e) {
      var e = e || event; // to deal with IE
      map['key_'+e.keyCode] = true;

      var g = document.getElementById('grid-site');

      if(map.key_91 && map.key_18) {
        g.style.display = (g.style.display === 'none') ? 'block' : 'none';
      }
    }
  }

  window.GRID = GRID;
})();
