(this["webpackJsonpjeffreychen.info"]=this["webpackJsonpjeffreychen.info"]||[]).push([[0],{26:function(e,t,i){var a,n;a="undefined"!==typeof window.self?window.self:this,n=function(){function e(){return window.performance.now?window.performance.now():Date.now()}function t(e,t,i){this.x=e,this.y=t,this.z=i,this.size=.5+Math.random()}function i(a,n){if(console.log(n),this.targetId=a,void 0===i.RUNNING_INSTANCES&&(i.RUNNING_INSTANCES={}),i.RUNNING_INSTANCES[a]&&i.RUNNING_INSTANCES[a].destroy(),"string"===typeof(n=n||{}))try{n=JSON.parse(n)}catch(h){n={}}this.SPEED=void 0===n.speed||n.speed<0?.7:n.speed,this.TARGET_SPEED=void 0===n.targetSpeed||n.targetSpeed<0?this.SPEED:n.targetSpeed,this.SPEED_ADJ_FACTOR=void 0===n.speedAdjFactor?.03:n.speedAdjFactor<0?0:n.speedAdjFactor>1?1:n.speedAdjFactor,this.DENSITY=void 0===n.density||n.density<=0?.7:n.density,this.USE_CIRCLES=void 0===n.shape||"circle"===n.shape,this.DEPTH_ALPHA=void 0===n.depthFade||n.depthFade,this.WARP_EFFECT=void 0===n.warpEffect||n.warpEffect,this.WARP_EFFECT_LENGTH=void 0===n.warpEffectLength?5:n.warpEffectLength<0?0:n.warpEffectLength,this.STAR_SCALE=void 0===n.starSize||n.starSize<=0?3:n.starSize,this.BACKGROUND_COLOR=void 0===n.backgroundColor?"hsl(263,45%,7%)":n.backgroundColor;var s=document.getElementById(this.targetId);s.width=1,s.height=1;var r=s.getContext("2d");r.fillStyle=this.BACKGROUND_COLOR,r.fillRect(0,0,1,1),r.fillStyle=void 0===n.starColor?"#FFFFFF":n.starColor,r.fillRect(0,0,1,1);var o=r.getImageData(0,0,1,1).data;this.STAR_R=o[0],this.STAR_G=o[1],this.STAR_B=o[2],this.prevW=-1,this.prevH=-1,this.stars=[];for(var c=0;c<1e3*this.DENSITY;c++)this.stars.push(new t(1e3*(Math.random()-.5),1e3*(Math.random()-.5),1e3*Math.random()));this.lastMoveTS=e(),this.drawRequest=null,this.LAST_RENDER_T=0,i.RUNNING_INSTANCES[a]=this,this.draw()}return function(){for(var e=0,t=["ms","moz","webkit","o"],i=0;i<t.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[t[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[i]+"CancelAnimationFrame"]||window[t[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,i){var a=(new Date).getTime(),n=Math.max(0,16-(a-e)),s=window.setTimeout((function(){t(a+n)}),n);return e=a+n,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),i.prototype={constructor:i,draw:function(){var t=e();if(document.getElementById(this.targetId)){this.move();var i=document.getElementById(this.targetId);if(!this.PAUSED&&function(e){var t=e.getBoundingClientRect();return t.top+t.height>=0&&t.left+t.width>=0&&t.bottom-t.height<=(window.innerHeight||document.documentElement.clientHeight)&&t.right-t.width<=(window.innerWidth||document.documentElement.clientWidth)}(i)){this.prevW===i.clientWidth&&this.prevH===i.clientHeight||(i.width=(i.clientWidth<10?10:i.clientWidth)*(window.devicePixelRatio||1),i.height=(i.clientHeight<10?10:i.clientHeight)*(window.devicePixelRatio||1)),this.size=(i.height<i.width?i.height:i.width)/(10/(this.STAR_SCALE<=0?0:this.STAR_SCALE)),this.WARP_EFFECT&&(this.maxLineWidth=this.size/30);var a=i.getContext("2d");a.fillStyle=this.BACKGROUND_COLOR,a.fillRect(0,0,i.width,i.height);for(var n="rgb("+this.STAR_R+","+this.STAR_G+","+this.STAR_B+")",s="rgba("+this.STAR_R+","+this.STAR_G+","+this.STAR_B+",",r=0;r<this.stars.length;r++){var o=this.stars[r],c=o.x/o.z,h=o.y/o.z;if(this.WARP_EFFECT||!(c<-.5||c>.5||h<-.5||h>.5)){var l=o.size*this.size/o.z;if(!(l<.3)){if(this.DEPTH_ALPHA){var d=(1e3-o.z)/1e3;a.fillStyle=s+(d>1?1:d)+")"}else a.fillStyle=n;if(this.WARP_EFFECT){a.beginPath();var m=o.x/(o.z+this.WARP_EFFECT_LENGTH*this.SPEED),E=o.y/(o.z+this.WARP_EFFECT_LENGTH*this.SPEED);if(m<-.5||m>.5||E<-.5||E>.5)continue;a.moveTo(i.width*(c+.5)-l/2,i.height*(h+.5)-l/2),a.lineTo(i.width*(m+.5)-l/2,i.height*(E+.5)-l/2),a.lineWidth=l>this.maxLineWidth?this.maxLineWidth:l,this.USE_CIRCLES?a.lineCap="round":a.lineCap="butt",a.strokeStyle=a.fillStyle,a.stroke()}else this.USE_CIRCLES?(a.beginPath(),a.arc(i.width*(c+.5)-l/2,i.height*(h+.5)-l/2,l/2,0,2*Math.PI),a.fill()):a.fillRect(i.width*(c+.5)-l/2,i.height*(h+.5)-l/2,l,l)}}}this.prevW=i.clientWidth,this.prevH=i.clientHeight}-1!==this.drawRequest&&(this.drawRequest=requestAnimationFrame(this.draw.bind(this))),this.LAST_RENDER_T=e()-t}else this.destroy()},move:function(){var t=e(),i=(t-this.lastMoveTS)/(1e3/60);if(this.lastMoveTS=t,!this.PAUSED){var a=Math.pow(this.SPEED_ADJ_FACTOR<0?0:this.SPEED_ADJ_FACTOR>1?1:this.SPEED_ADJ_FACTOR,1/i);this.SPEED=this.TARGET_SPEED*a+this.SPEED*(1-a),this.SPEED<0&&(this.SPEED=0);for(var n=this.SPEED*i,s=0;s<this.stars.length;s++){var r=this.stars[s];for(r.z-=n;r.z<1;)r.z+=1e3,r.x=(Math.random()-.5)*r.z,r.y=(Math.random()-.5)*r.z}}},destroy:function(e){if(e)i.RUNNING_INSTANCES[e]&&i.RUNNING_INSTANCES[e].destroy();else{try{cancelAnimationFrame(this.drawRequest)}catch(t){this.drawRequest=-1}i.RUNNING_INSTANCES[this.targetId]=void 0}},pause:function(){this.PAUSED=!0},resume:function(){this.PAUSED=!1}},i.destroy=i.prototype.destroy,i},e.exports?e.exports=n():a.warpspeed=n()},30:function(e,t,i){e.exports=i(46)},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),s=i(13),r=i.n(s),o=(i(35),i(14)),c=i(7),h=i(15),l=i(16),d=i(8),m=i(19),E=(i(36),i(37),i(26)),f=i.n(E),u=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(h.a)(this,Object(l.a)(t).call(this,e))).state={hasLoaded:0,ref:null},i}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=new f.a("starfield-canvas",{speed:this.props.warpSpeed/100*this.props.warpSpeed/4,speedAdjFactor:.008,density:7,shape:"circle",warpEffect:!0,warpEffectLength:.3,depthFade:!0,starSize:15,backgroundColor:"hsl(263,45%,7%)",starColor:"#FFFFFF"});this.setState({ref:e})}},{key:"componentDidUpdate",value:function(){this.state.ref.TARGET_SPEED=this.props.warpSpeed/100*this.props.warpSpeed/4}},{key:"render",value:function(){return n.a.createElement("div",{className:"starfield-background"},n.a.createElement("canvas",{id:"starfield-canvas"}))}}]),t}(a.Component),w=i(57),p=i(56),S=i(12),v=i(9),g=i(20),A=i(24);v.b.add(g.b,g.c,g.a);var N=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(h.a)(this,Object(l.a)(t).call(this))).state={warpSpeed:15},e.handleWarpSlide=e.handleWarpSlide.bind(Object(d.a)(e)),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleWarpSlide",value:function(e,t){this.setState({warpSpeed:t})}},{key:"render",value:function(){return n.a.createElement("div",{className:"name-section d-flex flex-column align-items-center justify-content-center"},n.a.createElement("h1",{className:"name-holder"},n.a.createElement("span",{className:"knockout"},n.a.createElement("div",{className:"starfield-holder"},n.a.createElement(u,{warpSpeed:this.state.warpSpeed})),n.a.createElement("span",{className:"knockout__text fullblock"},"JEFF CHEN"),n.a.createElement("svg",{className:"knockout__svg",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"100%",height:"100%"},n.a.createElement("mask",{id:"text-clip"},n.a.createElement("rect",{id:"bg",width:"100%",height:"100%",fill:"white"}),n.a.createElement("text",{x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle",fill:"#000"},"JEFF CHEN")),n.a.createElement("rect",{width:"100%",height:"100%",mask:"url(#text-clip)"})))),n.a.createElement("div",{className:"control-section"},n.a.createElement("div",{className:"slider-holder d-flex flex-column align-items-center justify-content-center standard-shadow"},n.a.createElement(p.a,{id:"continuous-slider"},"Warp Speed"),n.a.createElement("div",{className:"slider-control d-flex align-items-center"},n.a.createElement(S.a,{icon:"step-forward",className:"slider-icon-left"}),n.a.createElement(w.a,{value:this.state.warpSpeed,onChange:this.handleWarpSlide,"aria-labelledby":"continuous-slider",className:"warp-slider"}),n.a.createElement(S.a,{icon:"forward",className:"slider-icon-right"}))),n.a.createElement("div",{className:"standard-holder my-5 text-center coming-soon"},"Website Coming Soon."),n.a.createElement("div",{className:"d-flex justify-content-around align-items-center"},n.a.createElement("a",{href:"https://www.linkedin.com/in/jeffreychen27/",className:"d-flex align-items-center justify-content-center social-btn standard-shadow"},n.a.createElement(S.a,{icon:["fab","linkedin-in"]})),n.a.createElement("a",{href:"https://github.com/JefffffC",className:"d-flex align-items-center justify-content-center social-btn standard-shadow"},n.a.createElement(S.a,{icon:["fab","github"]})),n.a.createElement("a",{href:"mailto:jchen.hba2021@ivey.ca",className:"d-flex align-items-center justify-content-center social-btn standard-shadow"},n.a.createElement(S.a,{icon:"envelope"})))))}}]),t}(a.Component);i(45);v.b.add(A.a);var R=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"name-content-holder d-flex flex-column align-items-center justify-content-center"},n.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.9d7ddc9b.chunk.js.map