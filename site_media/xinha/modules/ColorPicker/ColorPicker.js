/* This compressed file is part of Xinha. For uncompressed sources, forum, and bug reports, go to xinha.org */
/* This file is part of version 0.96beta2 released Fri, 20 Mar 2009 11:01:14 +0100 */
ColorPicker._pluginInfo={name:"colorPicker",version:"$LastChangedRevision: 1084 $".replace(/^[^:]*:\s*(.*)\s*\$$/,"$1"),developer:"James Sleeman",developer_url:"http://www.gogo.co.nz/",c_owner:"Gogo Internet Services",license:"htmlArea",sponsor:"Gogo Internet Services",sponsor_url:"http://www.gogo.co.nz/"};function ColorPicker(){}try{if(window.opener&&window.opener.Xinha){var openerColorPicker=window.opener.Xinha.colorPicker;Xinha._addEvent(window,"unload",function(){Xinha.colorPicker=openerColorPicker})}}catch(e){}Xinha.colorPicker=function(t){if(Xinha.colorPicker.savedColors.length===0){Xinha.colorPicker.loadColors()}this.is_ie_6=(Xinha.is_ie&&Xinha.ie_version<7);var i=this;var c=false;var d=false;var w=0;var u=0;this.callback=t.callback?t.callback:function(x){alert("You picked "+x)};this.websafe=t.websafe?t.websafe:false;this.savecolors=t.savecolors?t.savecolors:20;this.cellsize=parseInt(t.cellsize?t.cellsize:"10px",10);this.side=t.granularity?t.granularity:18;var h=this.side+1;var k=this.side-1;this.value=1;this.saved_cells=null;this.table=document.createElement("table");this.table.className="dialog";this.table.cellSpacing=this.table.cellPadding=0;this.table.onmouseup=function(){c=false;d=false};this.tbody=document.createElement("tbody");this.table.appendChild(this.tbody);this.table.style.border="1px solid WindowFrame";this.table.style.zIndex="1050";var b=document.createElement("tr");var g=document.createElement("td");g.colSpan=this.side;g.className="title";g.style.fontFamily="small-caption,caption,sans-serif";g.style.fontSize="x-small";g.unselectable="on";g.style.MozUserSelect="none";g.style.cursor="default";g.appendChild(document.createTextNode(Xinha._lc("Click a color...")));g.style.borderBottom="1px solid WindowFrame";b.appendChild(g);g=null;var g=document.createElement("td");g.className="title";g.colSpan=2;g.style.fontFamily="Tahoma,Verdana,sans-serif";g.style.borderBottom="1px solid WindowFrame";g.style.paddingRight="0";b.appendChild(g);var m=document.createElement("div");m.title=Xinha._lc("Close");m.className="buttonColor";m.style.height="11px";m.style.width="11px";m.style.cursor="pointer";m.onclick=function(){i.close()};m.appendChild(document.createTextNode("\u00D7"));m.align="center";m.style.verticalAlign="top";m.style.position="relative";m.style.cssFloat="right";m.style.styleFloat="right";m.style.padding="0";m.style.margin="2px";m.style.backgroundColor="transparent";m.style.fontSize="11px";if(!Xinha.is_ie){m.style.lineHeight="9px"}m.style.letterSpacing="0";g.appendChild(m);this.tbody.appendChild(b);m=b=g=null;this.constrain_cb=document.createElement("input");this.constrain_cb.type="checkbox";this.chosenColor=document.createElement("input");this.chosenColor.type="text";this.chosenColor.maxLength=7;this.chosenColor.style.width="50px";this.chosenColor.style.fontSize="11px";this.chosenColor.onchange=function(){if(/#[0-9a-f]{6,6}/i.test(this.value)){i.backSample.style.backgroundColor=this.value;i.foreSample.style.color=this.value}};this.backSample=document.createElement("div");this.backSample.appendChild(document.createTextNode("\u00A0"));this.backSample.style.fontWeight="bold";this.backSample.style.fontFamily="small-caption,caption,sans-serif";this.backSample.fontSize="x-small";this.foreSample=document.createElement("div");this.foreSample.appendChild(document.createTextNode(Xinha._lc("Sample")));this.foreSample.style.fontWeight="bold";this.foreSample.style.fontFamily="small-caption,caption,sans-serif";this.foreSample.fontSize="x-small";function q(y){var x=y.toString(16);if(x.length<2){x="0"+x}return x}function p(x){return"#"+q(x.red)+q(x.green)+q(x.blue)}function v(x,y){return Math.round(Math.round(x/y)*y)}function f(x){return parseInt(x.toString(16)+x.toString(16),16)}function s(x){x.red=f(v(parseInt(q(x.red).charAt(0),16),3));x.blue=f(v(parseInt(q(x.blue).charAt(0),16),3));x.green=f(v(parseInt(q(x.green).charAt(0),16),3));return x}function l(B,F,D){var x;if(F===0){x={red:D,green:D,blue:D}}else{B/=60;var A=Math.floor(B);var C=B-A;var z=D*(1-F);var y=D*(1-F*C);var E=D*(1-F*(1-C));switch(A){case 0:x={red:D,green:E,blue:z};break;case 1:x={red:y,green:D,blue:z};break;case 2:x={red:z,green:D,blue:E};break;case 3:x={red:z,green:y,blue:D};break;case 4:x={red:E,green:z,blue:D};break;default:x={red:D,green:z,blue:y};break}}x.red=Math.ceil(x.red*255);x.green=Math.ceil(x.green*255);x.blue=Math.ceil(x.blue*255);return x}var o=this;function a(x){x=x?x:window.event;el=x.target?x.target:x.srcElement;do{if(el==o.table){return}}while(el=el.parentNode);o.close()}this.open=function(G,A,B){this.table.style.display="";this.pick_color();if(B&&/#[0-9a-f]{6,6}/i.test(B)){this.chosenColor.value=B;this.backSample.style.backgroundColor=B;this.foreSample.style.color=B}Xinha._addEvent(document.body,"mousedown",a);this.table.style.position="absolute";var E=A;var D=0;var C=0;do{if(E.style.position=="fixed"){this.table.style.position="fixed"}D+=E.offsetTop-E.scrollTop;C+=E.offsetLeft-E.scrollLeft;E=E.offsetParent}while(E);var z,F;if(/top/.test(G)||(D+this.table.offsetHeight>document.body.offsetHeight)){if(D-this.table.offsetHeight>0){this.table.style.top=(D-this.table.offsetHeight)+"px"}else{this.table.style.top=0}}else{this.table.style.top=(D+A.offsetHeight)+"px"}if(/left/.test(G)||(C+this.table.offsetWidth>document.body.offsetWidth)){if(C-(this.table.offsetWidth-A.offsetWidth)>0){this.table.style.left=(C-(this.table.offsetWidth-A.offsetWidth))+"px"}else{this.table.style.left=0}}else{this.table.style.left=C+"px"}if(this.is_ie_6){this.iframe.style.top=this.table.style.top;this.iframe.style.left=this.table.style.left}};function n(x){i.chosenColor.value=x.colorCode;i.backSample.style.backgroundColor=x.colorCode;i.foreSample.style.color=x.colorCode;if((x.hue>=195&&x.saturation>0.5)||(x.hue===0&&x.saturation===0&&x.value<0.5)||(x.hue!==0&&i.value<0.75)){x.style.borderColor="#fff"}else{x.style.borderColor="#000"}w=x.thisrow;u=x.thiscol}function j(x){if(i.value<0.5){x.style.borderColor="#fff"}else{x.style.borderColor="#000"}k=x.thisrow;h=x.thiscol;i.chosenColor.value=i.saved_cells[w][u].colorCode;i.backSample.style.backgroundColor=i.saved_cells[w][u].colorCode;i.foreSample.style.color=i.saved_cells[w][u].colorCode}function r(y,x){i.saved_cells[y][x].style.borderColor=i.saved_cells[y][x].colorCode}this.pick_color=function(){var K,L;var J=this;var R=359/(this.side);var B=1/(this.side-1);var I=1/(this.side-1);var Q=this.constrain_cb.checked;if(this.saved_cells===null){this.saved_cells=[];for(var C=0;C<this.side;C++){var y=document.createElement("tr");this.saved_cells[C]=[];for(var z=0;z<this.side;z++){var G=document.createElement("td");if(Q){G.colorCode=p(s(l(R*C,B*z,this.value)))}else{G.colorCode=p(l(R*C,B*z,this.value))}this.saved_cells[C][z]=G;G.style.height=this.cellsize+"px";G.style.width=this.cellsize-2+"px";G.style.borderWidth="1px";G.style.borderStyle="solid";G.style.borderColor=G.colorCode;G.style.backgroundColor=G.colorCode;if(C==w&&z==u){G.style.borderColor="#000";this.chosenColor.value=G.colorCode;this.backSample.style.backgroundColor=G.colorCode;this.foreSample.style.color=G.colorCode}G.hue=R*C;G.saturation=B*z;G.thisrow=C;G.thiscol=z;G.onmousedown=function(){c=true;J.saved_cells[w][u].style.borderColor=J.saved_cells[w][u].colorCode;n(this)};G.onmouseover=function(){if(c){n(this)}};G.onmouseout=function(){if(c){this.style.borderColor=this.colorCode}};G.ondblclick=function(){Xinha.colorPicker.remember(this.colorCode,J.savecolors);J.callback(this.colorCode);J.close()};G.appendChild(document.createTextNode(" "));G.style.cursor="pointer";y.appendChild(G);G=null}var G=document.createElement("td");G.appendChild(document.createTextNode(" "));G.style.width=this.cellsize+"px";y.appendChild(G);G=null;var G=document.createElement("td");this.saved_cells[C][z+1]=G;G.appendChild(document.createTextNode(" "));G.style.width=this.cellsize-2+"px";G.style.height=this.cellsize+"px";G.constrainedColorCode=p(s(l(0,0,I*C)));G.style.backgroundColor=G.colorCode=p(l(0,0,I*C));G.style.borderWidth="1px";G.style.borderStyle="solid";G.style.borderColor=G.colorCode;if(C==k){G.style.borderColor="black"}G.hue=R*C;G.saturation=B*z;G.hsv_value=I*C;G.thisrow=C;G.thiscol=z+1;G.onmousedown=function(){d=true;J.saved_cells[k][h].style.borderColor=J.saved_cells[k][h].colorCode;J.value=this.hsv_value;J.pick_color();j(this)};G.onmouseover=function(){if(d){J.value=this.hsv_value;J.pick_color();j(this)}};G.onmouseout=function(){if(d){this.style.borderColor=this.colorCode}};G.style.cursor="pointer";y.appendChild(G);G=null;this.tbody.appendChild(y);y=null}var y=document.createElement("tr");this.saved_cells[C]=[];for(var z=0;z<this.side;z++){var G=document.createElement("td");if(Q){G.colorCode=p(s(l(0,0,I*(this.side-z-1))))}else{G.colorCode=p(l(0,0,I*(this.side-z-1)))}this.saved_cells[C][z]=G;G.style.height=this.cellsize+"px";G.style.width=this.cellsize-2+"px";G.style.borderWidth="1px";G.style.borderStyle="solid";G.style.borderColor=G.colorCode;G.style.backgroundColor=G.colorCode;G.hue=0;G.saturation=0;G.value=I*(this.side-z-1);G.thisrow=C;G.thiscol=z;G.onmousedown=function(){c=true;J.saved_cells[w][u].style.borderColor=J.saved_cells[w][u].colorCode;n(this)};G.onmouseover=function(){if(c){n(this)}};G.onmouseout=function(){if(c){this.style.borderColor=this.colorCode}};G.ondblclick=function(){Xinha.colorPicker.remember(this.colorCode,J.savecolors);J.callback(this.colorCode);J.close()};G.appendChild(document.createTextNode(" "));G.style.cursor="pointer";y.appendChild(G);G=null}this.tbody.appendChild(y);y=null;var y=document.createElement("tr");var G=document.createElement("td");y.appendChild(G);G.colSpan=this.side+2;G.style.padding="3px";if(this.websafe){var M=document.createElement("div");var H=document.createElement("label");H.appendChild(document.createTextNode(Xinha._lc("Web Safe: ")));this.constrain_cb.onclick=function(){J.pick_color()};H.appendChild(this.constrain_cb);H.style.fontFamily="small-caption,caption,sans-serif";H.style.fontSize="x-small";M.appendChild(H);G.appendChild(M);M=null}var M=document.createElement("div");var H=document.createElement("label");H.style.fontFamily="small-caption,caption,sans-serif";H.style.fontSize="x-small";H.appendChild(document.createTextNode(Xinha._lc("Color: ")));H.appendChild(this.chosenColor);M.appendChild(H);var O=document.createElement("span");O.className="buttonColor ";O.style.fontSize="13px";O.style.width="24px";O.style.marginLeft="2px";O.style.padding="0px 4px";O.style.cursor="pointer";O.onclick=function(){Xinha.colorPicker.remember(J.chosenColor.value,J.savecolors);J.callback(J.chosenColor.value);J.close()};O.appendChild(document.createTextNode(Xinha._lc("OK")));O.align="center";M.appendChild(O);G.appendChild(M);var x=document.createElement("table");x.style.width="100%";var P=document.createElement("tbody");x.appendChild(P);var A=document.createElement("tr");P.appendChild(A);var N=document.createElement("td");A.appendChild(N);N.appendChild(this.backSample);N.style.width="50%";var T=document.createElement("td");A.appendChild(T);T.appendChild(this.foreSample);T.style.width="50%";G.appendChild(x);var S=document.createElement("div");S.style.clear="both";function F(V){var U=Xinha.is_ie;var W=document.createElement("div");W.style.width=J.cellsize+"px";W.style.height=J.cellsize+"px";W.style.margin="1px";W.style.border="1px solid black";W.style.cursor="pointer";W.style.backgroundColor=V;W.style[U?"styleFloat":"cssFloat"]="left";W.ondblclick=function(){J.callback(V);J.close()};W.onclick=function(){J.chosenColor.value=V;J.backSample.style.backgroundColor=V;J.foreSample.style.color=V};S.appendChild(W)}for(var E=0;E<Xinha.colorPicker.savedColors.length;E++){F(Xinha.colorPicker.savedColors[E])}G.appendChild(S);this.tbody.appendChild(y);document.body.appendChild(this.table);if(this.is_ie_6){if(!this.iframe){this.iframe=document.createElement("iframe");this.iframe.frameBorder=0;this.iframe.src="javascript:;";this.iframe.style.position="absolute";this.iframe.style.width=this.table.offsetWidth;this.iframe.style.height=this.table.offsetHeight;document.body.insertBefore(this.iframe,this.table)}this.iframe.style.display=""}}else{for(var C=0;C<this.side;C++){for(var z=0;z<this.side;z++){if(Q){this.saved_cells[C][z].colorCode=p(s(l(R*C,B*z,this.value)))}else{this.saved_cells[C][z].colorCode=p(l(R*C,B*z,this.value))}this.saved_cells[C][z].style.backgroundColor=this.saved_cells[C][z].colorCode;this.saved_cells[C][z].style.borderColor=this.saved_cells[C][z].colorCode}}var D=this.saved_cells[w][u];this.chosenColor.value=D.colorCode;this.backSample.style.backgroundColor=D.colorCode;this.foreSample.style.color=D.colorCode;if((D.hue>=195&&D.saturation>0.5)||(D.hue===0&&D.saturation===0&&D.value<0.5)||(D.hue!==0&&J.value<0.75)){D.style.borderColor="#fff"}else{D.style.borderColor="#000"}}};this.close=function(){Xinha._removeEvent(document.body,"mousedown",a);this.table.style.display="none";if(this.is_ie_6){if(this.iframe){this.iframe.style.display="none"}}}};Xinha.colorPicker.savedColors=[];Xinha.colorPicker.remember=function(a,c){for(var b=Xinha.colorPicker.savedColors.length;b--;){if(Xinha.colorPicker.savedColors[b]==a){return false}}Xinha.colorPicker.savedColors.splice(0,0,a);Xinha.colorPicker.savedColors=Xinha.colorPicker.savedColors.slice(0,c);var d=new Date();d.setMonth(d.getMonth()+1);document.cookie="XinhaColorPicker="+escape(Xinha.colorPicker.savedColors.join("-"))+";expires="+d.toGMTString();return true};Xinha.colorPicker.loadColors=function(){var b=document.cookie.indexOf("XinhaColorPicker");if(b!=-1){var c=(document.cookie.indexOf("=",b)+1);var a=document.cookie.indexOf(";",b);if(a==-1){a=document.cookie.length}Xinha.colorPicker.savedColors=unescape(document.cookie.substring(c,a)).split("-")}};Xinha.colorPicker.InputBinding=function(b,c){var g=b.ownerDocument;var a=g.createElement("span");a.className="buttonColor";var d=this.chooser=g.createElement("span");d.className="chooser";if(b.value){d.style.backgroundColor=b.value}d.onmouseover=function(){d.className="chooser buttonColor-hilite"};d.onmouseout=function(){d.className="chooser"};d.appendChild(g.createTextNode("\u00a0"));a.appendChild(d);var f=g.createElement("span");f.className="nocolor";f.onmouseover=function(){f.className="nocolor buttonColor-hilite";f.style.color="#f00"};f.onmouseout=function(){f.className="nocolor";f.style.color="#000"};f.onclick=function(){b.value="";d.style.backgroundColor=""};f.appendChild(g.createTextNode("\u00d7"));a.appendChild(f);b.parentNode.insertBefore(a,b.nextSibling);Xinha._addEvent(b,"change",function(){d.style.backgroundColor=this.value});c=(c)?Xinha.cloneObject(c):{cellsize:"5px"};c.callback=(c.callback)?c.callback:function(h){d.style.backgroundColor=h;b.value=h};d.onclick=function(){var h=new Xinha.colorPicker(c);h.open("",d,b.value)};Xinha.freeLater(this,"chooser")};Xinha.colorPicker.InputBinding.prototype.setColor=function(a){this.chooser.style.backgroundColor=a};