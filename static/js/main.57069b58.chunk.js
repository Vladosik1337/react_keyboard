(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),c=n(4),r=n(5),o=n(7),i=n(6),d=n(1),p=n(0),u=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={pressedKey:""},e.handleClick=function(t){e.setState({pressedKey:t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleClick)}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("p",{className:"App__message",children:this.state.pressedKey.length<0?"Nothing was pressed yet":"The last pressed key is [".concat(this.state.pressedKey,"]")})})}}]),n}(d.Component);n(13);a.a.render(Object(p.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.57069b58.chunk.js.map