(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports={A1:{x:120,y:100},A2:{x:240,y:100},A3:{x:360,y:100},A4:{x:480,y:100},A5:{x:600,y:100},A6:{x:720,y:100},B1:{x:120,y:220},B2:{x:240,y:220},B3:{x:360,y:220},B4:{x:480,y:220},B5:{x:600,y:220},B6:{x:720,y:220}}},10:function(e,l,t){e.exports=t(16)},16:function(e,l,t){"use strict";t.r(l);var a=t(0),c=t.n(a),o=t(3),r=t.n(o),n=t(4),s=t(5),i=t(8),u=t(6),y=t(9),b=function(e){return c.a.createElement("circle",{cx:e.loc.x,cy:e.loc.y,r:e.radius,fill:e.color,onClick:function(){return e.click(e.color)}})},d=function(e){return c.a.createElement("nav",{class:"navbar navbar-light bg-light"},c.a.createElement("span",null,c.a.createElement("h1",null,"Memory Balls"))," ",c.a.createElement("span",null,c.a.createElement("h1",null,"Score: ",e.score,"/12"))," ",c.a.createElement("span",null,c.a.createElement("h1",null,"Level: ",e.level)),".")},x=t(1),k=t(7),p=function(e){function l(){var e,t;Object(n.a)(this,l);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(u.a)(l)).call.apply(e,[this].concat(c)))).state={score:0,pickedcolors:[],level:1,balls:k},t.shuffle=function(){var e=Object.keys(x).map(function(e){return[Math.random(),e]}).sort(function(e,l){return e[0]-l[0]}).map(function(e){return e[1]}),l=t.state.balls.map(function(l){return l.loc=x[e.pop()],l});t.setState({balls:l})},t.clickball=function(e){t.state.pickedcolors.includes(e)?(alert("bitch, you dun goofed"),t.setState({pickedcolors:[]}),t.setState({score:0})):(t.setState({pickedcolors:t.state.pickedcolors.concat([e])}),t.setState({score:t.state.score+1}),12===t.state.score&&(alert("great job"),t.setState({pickedcolors:[]}),t.setState({score:0}),t.setState({level:t.state.level+1}))),t.shuffle()},t}return Object(y.a)(l,e),Object(s.a)(l,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(d,{score:this.state.score,level:this.state.level}),c.a.createElement("svg",{viewBox:"0 0 841.9 595.3"},this.state.balls.map(function(l){return c.a.createElement(b,Object.assign({},l,{click:e.clickball}))})))}}]),l}(c.a.Component);r.a.render(c.a.createElement(p,null),document.getElementById("root"))},7:function(e){e.exports=[{key:"ball1",loc:{x:120,y:100},radius:85,color:"red"},{key:"ball2",loc:{x:240,y:100},radius:85,color:"orange"},{key:"ball3",loc:{x:360,y:100},radius:85,color:"yellow"},{key:"ball4",loc:{x:480,y:100},radius:85,color:"green"},{key:"ball5",loc:{x:600,y:100},radius:85,color:"blue"},{key:"ball6",loc:{x:720,y:100},radius:85,color:"indigo"},{key:"ball7",loc:{x:120,y:220},radius:85,color:"violet"},{key:"ball8",loc:{x:240,y:220},radius:85,color:"black"},{key:"ball9",loc:{x:360,y:220},radius:85,color:"brown"},{key:"ballA",loc:{x:480,y:220},radius:85,color:"tan"},{key:"ballB",loc:{x:600,y:220},radius:85,color:"salmon"},{key:"ballC",loc:{x:720,y:220},radius:85,color:"pink"}]}},[[10,2,1]]]);
//# sourceMappingURL=main.1d0cb59c.chunk.js.map