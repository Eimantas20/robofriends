(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(3),s=n.n(r),i=(n(12),n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))}),a=n(4),o=n(5),h=n(7),l=n(6),d=(n(14),n(0)),b=function(e){var t=e.name,n=e.email,c=e.id;return Object(d.jsxs)("div",{className:"this",children:[Object(d.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(c,"?size=200x200")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("a",{href:n,children:n})]})]})},u=(n(16),function(e){var t=e.robots;return Object(d.jsx)("div",{id:"doit",children:t.map((function(e,n){return Object(d.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})}),j=function(e){var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},f=(n(17),function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",border:"3px solid black",height:"800px",width:"70%",display:"inline-block"},children:e.children})}),p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.robots.length?Object(d.jsx)("h1",{children:"Loading"}):Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{children:"RoboFriends"}),Object(d.jsx)(j,{searchChange:this.onSearchChange}),Object(d.jsx)(f,{children:Object(d.jsx)(u,{robots:t})}),Object(d.jsx)("footer",{children:Object(d.jsx)("p",{children:"Page created by Eimantas Kana\u0161evi\u010dius using create-react-app"})})]})}}]),n}(c.Component);s.a.render(Object(d.jsx)(p,{}),document.getElementById("root")),i()}],[[18,1,2]]]);
//# sourceMappingURL=main.65dc4869.chunk.js.map