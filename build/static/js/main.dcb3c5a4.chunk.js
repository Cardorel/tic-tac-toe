(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{46:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(17),c=t.n(i),o=t(5),l=t(27),s=t(10),d=Object(s.b)({name:"isModal",initialState:{isModal:!1},reducers:{setIsModal:function(e){e.isModal=!e.isModal}}}),b=Object(s.b)({name:"isNext",initialState:{isNext:!0},reducers:{setIsNext:function(e){e.isNext=!e.isNext},resetIsNext:function(e,n){e.isNext=n.payload}}}),u=Object(s.b)({name:"player",initialState:{playerName:""},reducers:{setPlayerName:function(e,n){e.playerName=n.payload}}}),x={squares:Array(9).fill(null)},j=Object(s.b)({name:"square",initialState:x,reducers:{squareData:function(e,n){e.squares=n.payload}}}),p=b.reducer,h=j.reducer,O=d.reducer,f=u.reducer,g=Object(s.a)({reducer:{squares:h,isNext:p,isModal:O,playerName:f}}),y=t(16);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=b.actions,v=m.setIsNext,w=m.resetIsNext,N=j.actions.squareData,P=d.actions.setIsModal,k=u.actions.setPlayerName,S=t(11);var q,C,M=function(e){return e},I=y.c,z=function(){var e=Object(a.useState)(0),n=Object(S.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)(0),c=Object(S.a)(i,2),o=c[0],l=c[1],s=Object(a.useState)(""),d=Object(S.a)(s,2),b=d[0],u=d[1],x=Object(y.b)(),j=I(M),p=j.squares.squares,h=j.isNext.isNext,O=j.isModal.isModal,f=j.playerName.playerName,g=function(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<n.length;t++){var a=Object(S.a)(n[t],3),r=a[0],i=a[1],c=a[2];if(e[r]&&e[r]===e[i]&&e[r]===e[c])return{winner:e[r],indexes:n[t]};if(!e.includes(null))return{winner:"draw",indexes:[]}}return{winner:null,indexes:[]}}(p),m=g.winner,v=g.indexes,w=h?"X":"O",N=h?"Player 1":f;return Object(a.useEffect)((function(){m&&"draw"!==m?("X"===m?r((function(e){return e+1})):l((function(e){return e+1})),u("X"===m?"Player 1":f),setTimeout((function(){x(P())}),3e3)):m&&"draw"===m&&(u("both players. No winner"),setTimeout((function(){x(P())}),3e3))}),[m,x,f]),{scoreOfPlayer1:t,scoreOfPlayer2:o,setScoreOfPlayer1:r,setScoreOfPlayer2:l,winnerName:b,winner:m,dispatch:x,squares:p,isModal:O,currentPlayerValue:w,indexes:v,currentPlayerName:N}},W=t(3),R=t(4),A=R.b.button(q||(q=Object(W.a)(["\n  outline: none;\n  border: none;\n  font-size: 100px;\n  background-color: #414159;\n  color: #a3a1ae;\n  position: relative;\n  &::before {\n    content: '';\n    height: 100%;\n    width: 5px;\n    display: flex;\n    justify-content: center;\n    margin: auto;\n    background-color: ",";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n  }\n"])),(function(e){return e.isWinnerSquare?"#ad3d3a":"transparent"})),B=t(1);function D(e){var n=e.value,t=e.handleSquareClick,a=e.isWinnerSquare;return Object(B.jsx)(A,{isWinnerSquare:a,onClick:t,children:n})}var E,F,T,X,G,J,U,V,H,Q,$,K,L,Y,Z,_,ee,ne,te,ae,re,ie,ce=R.b.div(C||(C=Object(W.a)(["\n  display: grid;\n  grid: 120px 120px 120px / 120px 120px 120px;\n  background-color: var(--bg-color);\n  gap: 5px;\n  width: calc(3 * 120px + 2 * 5px);\n  height: calc(3 * 120px + 2 * 5px);\n"]))),oe=function(e){var n=e.squares,t=e.handleSquareClick,a=e.indexes;return Object(B.jsx)(ce,{children:n&&n.map((function(e,n){return Object(B.jsx)(D,{isWinnerSquare:a.includes(n),value:e,handleSquareClick:function(){return t(n)}},n)}))})},le=R.b.div(E||(E=Object(W.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-top: 45px;\n    width: 50%;\n    margin : auto;\n"]))),se=R.b.div(F||(F=Object(W.a)(["\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    "]))),de=R.b.div(T||(T=Object(W.a)(["\n    margin-top: 35px;\n    justify-self: flex-end;\n    text-align: right;\n    "]))),be=R.b.a(X||(X=Object(W.a)(["\n  font-size: 15px;\n  color: #a3a1ae;\n  padding: 10px;\n  width: calc(25% - 20px);\n  text-align: center;\n  text-decoration: none;\n  border: 1px solid #0099ff;\n    "]))),ue=R.b.div(G||(G=Object(W.a)(["\n  display: flex;\n  gap: 20px;\n  background-color: #525d7d;\n  padding: 25px;\n  border-radius: 2px;\n"]))),xe=R.b.div(J||(J=Object(W.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgb(10, 10, 10, .9);\n"]))),je=R.b.div(U||(U=Object(W.a)(["\n    width: 40%;\n    margin: auto;\n    background-color: #fff;\n    padding: 10px 15px;\n"]))),pe=R.b.div(V||(V=Object(W.a)(["\n    margin-right: 45px;\n"]))),he=R.b.h4(H||(H=Object(W.a)(["\n    margin: 0;\n    color: #a3a1ae;\n    "]))),Oe=R.b.p(Q||(Q=Object(W.a)(["\n    color: #a3a1ae;\n    font-weight: bold;\n"]))),fe=R.b.div($||($=Object(W.a)(["\n    color: #a3a1ae;\n    font-weight: bold;\n"]))),ge=R.b.div(K||(K=Object(W.a)(["\n    display: flex;\n    justify-content: space-around;\n    margin-top: 25px;\n"]))),ye=R.b.button(L||(L=Object(W.a)(["\n    outline: none;\n    border: none;\n    font-size: 15px;\n    color: white;\n    padding: 10px;\n    width: 25%;\n    cursor: pointer;\n"]))),me=Object(R.b)(ye)(Y||(Y=Object(W.a)(["\n    background-color: #0099ff;\n"]))),ve=Object(R.b)(ye)(Z||(Z=Object(W.a)(["\nbackground-color: #ddd;\n"]))),we=R.b.a(_||(_=Object(W.a)(["\nbackground-color: red;\n  font-size: 15px;\n  color: white;\n  padding: 10px;\n  width: calc(25% - 20px);\n  text-align: center;\n  text-decoration: none;\n"]))),Ne=function(e){var n=e.winnerName,t=e.handleContinueClick,a=e.handleResetClick;return Object(B.jsx)(xe,{children:Object(B.jsxs)(je,{children:[Object(B.jsxs)("div",{children:[Object(B.jsx)("h2",{children:"Message"}),Object(B.jsx)("hr",{})]}),Object(B.jsx)("div",{className:"modal-body",children:Object(B.jsxs)(fe,{children:["Congratulations to ",n,"!"]})}),Object(B.jsxs)(ge,{children:[Object(B.jsx)(me,{onClick:t,children:"Continue"}),Object(B.jsx)(ve,{onClick:a,children:"Reset"}),Object(B.jsx)(we,{href:"/",className:"btn-quit",children:"Quit"})]})]})})},Pe=function(e){var n=e.scoreOfPlayer1,t=e.scoreOfPlayer2,a=I(M).playerName.playerName;return Object(B.jsxs)(pe,{children:[Object(B.jsx)(he,{children:"Score"}),Object(B.jsxs)(Oe,{children:["Player 1: ",n]}),Object(B.jsxs)(Oe,{children:[a,": ",t]})]})},ke=function(){var e=z(),n=e.isModal,t=e.scoreOfPlayer1,r=e.scoreOfPlayer2,i=e.setScoreOfPlayer1,c=e.setScoreOfPlayer2,o=e.squares,l=e.winner,s=e.winnerName,d=e.dispatch,b=e.currentPlayerValue,u=e.indexes,x=e.currentPlayerName;!function(e){Object(a.useEffect)((function(){var n,t=null===(n=localStorage)||void 0===n?void 0:n.getItem("playerName");e(k(t))}),[e])}(d);return Object(B.jsxs)(le,{children:[Object(B.jsxs)(se,{children:[Object(B.jsx)("h4",{children:"Next Player: "}),Object(B.jsx)("span",{children:x})]}),Object(B.jsxs)(ue,{children:[Object(B.jsx)(oe,{indexes:u,squares:o,handleSquareClick:function(e){var n=o.slice();l||n[e]||(n[e]=b,d(N(n)),d(v()))}}),Object(B.jsx)(Pe,{scoreOfPlayer1:t,scoreOfPlayer2:r})]}),Object(B.jsx)(de,{children:Object(B.jsx)(be,{href:"/",children:"Change player"})}),n&&Object(B.jsx)(Ne,{winnerName:s,handleContinueClick:function(){d(N(Array(9).fill(null))),d(P())},handleResetClick:function(){d(N(Array(9).fill(null))),d(P()),i(0),c(0),d(w(!0))}})]})},Se=R.b.div(ee||(ee=Object(W.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]))),qe=R.b.div(ne||(ne=Object(W.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Ce=R.b.select(te||(te=Object(W.a)(["\n    padding: 8px;\n    background-color: #525d7d;\n    border: none;\n    color: #a3a1ae;\n    font-size: 18px;\n    font-weight: bold;\n    margin: 15px 0;\n    border-radius: 2px;\n    -webkit-box-shadow: 5px 5px 14px 8px rgba(0, 0, 0, 0.14);\n    box-shadow: 5px 5px 14px 8px rgba(0, 0, 0, 0.14);\n"]))),Me=R.b.div(ae||(ae=Object(W.a)(["\n    text-align: center;\n"]))),Ie=R.b.button(re||(re=Object(W.a)(["\n  font-size: 18px;\n  width: max-content;\n  padding: 10px 45px;\n  border-radius: 2px;\n  cursor: pointer;\n  background-color: #414159;\n  outline: none;\n  border: none;\n  color: #a3a1ae;\n  -webkit-box-shadow: 5px 5px 14px 8px rgba(0, 0, 0, 0.14);\n  box-shadow: 5px 5px 14px 8px rgba(0, 0, 0, 0.14);\n"])));var ze=Object(R.a)(ie||(ie=Object(W.a)(["\n    body {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n          sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n      \n      code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n          monospace;\n      }\n      \n    "])));c.a.render(Object(B.jsxs)(r.a.StrictMode,{children:[Object(B.jsx)(ze,{}),Object(B.jsx)(y.a,{store:g,children:Object(B.jsx)(l.a,{children:Object(B.jsxs)(o.c,{children:[Object(B.jsx)(o.a,{exact:!0,path:"/",component:function(e){var n=e.history,t=Object(a.useState)("Player 2"),r=Object(S.a)(t,2),i=r[0],c=r[1];return Object(B.jsx)(Se,{children:Object(B.jsxs)(qe,{children:[Object(B.jsx)("label",{htmlFor:"playerName",children:"Which name would you prefer to use?"}),Object(B.jsxs)(Ce,{value:i,onChange:function(e){return c(e.target.value)},id:"playerName",children:[Object(B.jsx)("option",{value:"Player 2",children:"Player 2"}),Object(B.jsx)("option",{value:"Player 3",children:"Player 3"}),Object(B.jsx)("option",{value:"Player 4",children:"Player 4"}),Object(B.jsx)("option",{value:"Player 5",children:"Player 5"}),Object(B.jsx)("option",{value:"Player 6",children:"Player 6"})]}),Object(B.jsx)(Me,{children:Object(B.jsx)(Ie,{onClick:function(){localStorage.setItem("playerName",i),setTimeout((function(){n.push("/Game")}),2e3)},children:"Select"})})]})})}}),Object(B.jsx)(o.a,{exact:!0,path:"/Game",component:ke})]})})})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.dcb3c5a4.chunk.js.map