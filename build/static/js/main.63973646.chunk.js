(this.webpackJsonpflixcentral=this.webpackJsonpflixcentral||[]).push([[0],{30:function(e,a,t){e.exports=t.p+"static/media/moviedb.02a9430b.svg"},33:function(e,a,t){e.exports=t(55)},38:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(24),c=t.n(l),o=t(5),s=(t(38),t(1)),i=t(2),m=t(4),u=t(3),d=t(25),p=t(26),h=t(18),v=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",{style:E,className:"navbar navbar-expand-lg  navbar-dark header-container px-3"},n.a.createElement(o.b,{className:"navbar-brand col-xs-12 col-md-5",to:"/"},"FLIX CENTRAL"),n.a.createElement("div",{style:{display:"flex"},className:"search-bar col-md-4 col-xs-12"},this.props.show?n.a.createElement("input",{className:"search-box",type:"text",onChange:this.props.changed}):null,this.props.show?null:n.a.createElement(d.Icon,{size:32,icon:p.ic_search,onClick:this.props.clicked}),this.props.show?n.a.createElement("button",{style:b},n.a.createElement(o.b,{to:"/search"}," Search")):null),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},n.a.createElement("ul",{className:"navbar-nav text-center"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement("a",{className:"nav-link",href:"#"},"Home ",n.a.createElement("span",{className:"sr-only"},"(current)"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Login")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Sign Up")))))}}]),t}(r.Component),E={background:"var(--main-color)",color:"var(--main-light)",margin:"0rem",padding:"1rem"},b={background:"var(--main-deep-dark)","font-weight":"bold",border:"none",padding:".5rem 1rem"},f=t(16),g=t(8);function N(){var e=Object(f.a)(["\n.page-nav-container{\ndisplay: block;\npadding: 4rem 2rem;\nmargin: 0 auto;\ntext-align: center;\n\n\n}\n\nbutton{\nbackground: transparent;\nborder: 3px solid var(--main-color);\npadding: 1rem 2rem;\ncolor: var(--main-light);\nfont-weight: 400;\nmargin: 0 2rem;\nfont-size: 1.5rem;\n&:hover{\nbackground: var(--main-color-hover);\nborder: 3px solid var(--main-color-hover);\n\n}\n}\n\n\n\n\n\n"]);return N=function(){return e},e}var y=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(O,null,n.a.createElement("div",{style:j,className:"page-nav-container"},n.a.createElement("button",{className:"active"},"In Theaters"),n.a.createElement("button",null," On Television")))}}]),t}(r.Component),j={background:"rgba(0, 0, 0, 0.7)"},O=g.b.section(N()),k=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{key:this.props.movie.id,className:"carousel-item col-md-3 thumbnail "+(0===this.props.movie.id?"active":"")},n.a.createElement("div",{className:"card-item"},n.a.createElement("a",{href:"#"},n.a.createElement("img",{className:"card-img-top img-fluid",src:this.props.posterURL+this.props.movie.poster_path,alt:this.props.movie.title})),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},this.props.movie.title),n.a.createElement("button",{style:w,className:"card-text"},"Get Tickets"))))}}]),t}(n.a.Component),w={background:"var(--main-color)",border:"none","font-weight":"800",padding:".75rem",color:"var(--main-light)","border-radius":"1rem"},x=t(12),C=t.n(x),S=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).state={carouselItem:n.a.createElement("p",null,"FAKE ERRORS")},r.performSearch(),r}return Object(i.a)(t,[{key:"performSearch",value:function(){var e=this;C.a.ajax({url:"https://api.themoviedb.org/3/movie/upcoming?api_key=f56610dee3836c9b80964e9be6d563c2",success:function(a){var t=a.results,r=[];t.forEach((function(e,a){e.id=a;var t=n.a.createElement(k,{movie:e,posterURL:"https://image.tmdb.org/t/p/w185"});r.push(t)})),e.setState({carouselItem:r})},error:function(e,a,t){console.error("Failed to Fetch for popular films.")}})}},{key:"render",value:function(){return n.a.createElement("section",{className:"main-content"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,"Coming Soon"),n.a.createElement("div",{id:"carousel-1",className:"carousel slide","data-ride":"carousel"},n.a.createElement("div",{className:"multi-item carousel-inner row w-100 mx-auto"},this.state.carouselItem,n.a.createElement("a",{className:"carousel-control-prev",href:"#carousel-1",role:"button","data-slide":"prev"},n.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Prev")),n.a.createElement("a",{className:"carousel-control-next",href:"#carousel-1",role:"button","data-slide":"next"},n.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Next"))))))}}]),t}(r.Component),T=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{key:this.props.movie.id,className:"carousel-item col-md-3 thumbnail "+(0===this.props.movie.id?"active":"")},n.a.createElement("div",{className:"card-item"},n.a.createElement("a",{href:"#"},n.a.createElement("img",{className:"card-img-top img-fluid",src:this.props.posterURL+this.props.movie.poster_path,alt:this.props.movie.title})),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},this.props.movie.title),n.a.createElement("button",{style:F,className:"card-text"},"Get Tickets"))))}}]),t}(n.a.Component),F={background:"var(--main-color)",border:"none","font-weight":"800",padding:".75rem",color:"var(--main-light)","border-radius":"1rem"},R=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).state={carouselItem:n.a.createElement("p",null,"FAKE ERRORS")},r.performSearch(),r}return Object(i.a)(t,[{key:"performSearch",value:function(){var e=this;C.a.ajax({url:"https://api.themoviedb.org/3/movie/now_playing?api_key=f56610dee3836c9b80964e9be6d563c2",success:function(a){var t=a.results,r=[];t.forEach((function(e,a){e.id=a;var t=n.a.createElement(T,{movie:e,posterURL:"https://image.tmdb.org/t/p/w185"});r.push(t)})),e.setState({carouselItem:r})},error:function(e,a,t){console.error("Failed to Fetch for popular films.")}})}},{key:"render",value:function(){return n.a.createElement("section",{className:"main-content"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,"Now Playing"),n.a.createElement("div",{id:"carousel-2",className:"carousel slide","data-ride":"carousel"},n.a.createElement("div",{className:"multi-item carousel-inner row w-100 mx-auto"},this.state.carouselItem,n.a.createElement("a",{className:"carousel-control-prev",href:"#carousel-2",role:"button","data-slide":"prev"},n.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Prev")),n.a.createElement("a",{className:"carousel-control-next",href:"#carousel-2",role:"button","data-slide":"next"},n.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Next"))))))}}]),t}(r.Component),I=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{key:this.props.movie.id,className:"carousel-item col-md-3 thumbnail "+(0===this.props.movie.id?"active":"")},n.a.createElement("div",{className:"card-item"},n.a.createElement("a",{href:"#"},n.a.createElement("img",{className:"card-img-top img-fluid",src:this.props.posterURL+this.props.movie.poster_path,alt:this.props.movie.title})),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},this.props.movie.title),n.a.createElement("button",{style:L,className:"card-text"},"Get Tickets"))))}}]),t}(n.a.Component),L={background:"var(--main-color)",border:"none","font-weight":"800",padding:".75rem",color:"var(--main-light)","border-radius":"1rem"},_=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).state={carouselItem:n.a.createElement("p",null,"FAKE ERRORS")},r.performSearch(),r}return Object(i.a)(t,[{key:"performSearch",value:function(){var e=this;C.a.ajax({url:"https://api.themoviedb.org/3/movie/popular?api_key=f56610dee3836c9b80964e9be6d563c2",success:function(a){var t=a.results,r=[];t.forEach((function(e,a){e.id=a;var t=n.a.createElement(I,{movie:e,posterURL:"https://image.tmdb.org/t/p/w185"});r.push(t)})),e.setState({carouselItem:r})},error:function(e,a,t){console.error("Failed to Fetch for popular films.")}})}},{key:"render",value:function(){return n.a.createElement("section",{className:"main-content"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,"Popular"),n.a.createElement("div",{id:"carousel-3",className:"carousel slide","data-ride":"carousel"},n.a.createElement("div",{className:"multi-item carousel-inner row w-100 mx-auto"},this.state.carouselItem,n.a.createElement("a",{className:"carousel-control-prev",href:"#carousel-3",role:"button","data-slide":"prev"},n.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Prev")),n.a.createElement("a",{className:"carousel-control-next",href:"#carousel-3",role:"button","data-slide":"next"},n.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Next"))))))}}]),t}(r.Component),A=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:B},n.a.createElement(S,null),n.a.createElement("hr",null),n.a.createElement(R,null),n.a.createElement("hr",null),n.a.createElement(_,null),n.a.createElement("hr",null))}}]),t}(r.Component),B={padding:"4rem 2rem"},U=t(30),P=t.n(U);function G(){var e=Object(f.a)(["\n      grid-template-columns: repeat(2,1fr);\n      \n"]);return G=function(){return e},e}function H(){var e=Object(f.a)(["\nbackground: var(--main-dark);\n\npadding-top: 3rem;\npadding-bottom: 3rem;\ncolor: #999;\n\n.footer-columns {\nwidth: 70%;\nmargin: 1rem auto 0;\nfont-size: 0.9rem;\noverflow: auto;\ndisplay : grid;\ngrid-template-columns: repeat(4,1fr);\n","\n\n}\n\nul li{\nlist-style: none;\nline-height: 2.5;\ncolor: #999;\n\n}\n\na:hover{\ntext-decoration: underline;\ncursor: pointer;\n}\n\n\n\n\n"]);return H=function(){return e},e}var z=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={langContent:!1},e.handleToggle=function(a){a.preventDefault(),e.setState({langContent:!e.state.langContent})},e}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(W,null,n.a.createElement("div",{style:K},n.a.createElement("h4",null,"FLIX CENTRAL"),n.a.createElement("p",null," ",n.a.createElement("span",null,"Powered by ",n.a.createElement("img",{style:{height:"3rem"},src:P.a})))),n.a.createElement("div",{className:"footer-columns"},n.a.createElement("ul",null,n.a.createElement("li",null,"FAQ"),n.a.createElement("li",null,"Investor Relations"),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Ways to Watch")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Corporate Information")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Flix Central History"))),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Help Center")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Jobs")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Terms of Use")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Contact Us"))),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Account")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Redeem Gift Cards")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Privacy")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Speed Test"))),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Media Center")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Buy Gift Cards")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Cookie Preferences")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Legal Notice")))))}}]),t}(r.Component),X=Object(h.a)({tablet:"740",mdDesktop:"1000px"}),K={padding:".25rem",textAlign:"center"},W=g.b.footer(H(),X.lessThan("mdDesktop")(G())),J=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var r;Object(s.a)(this,t),(r=a.call(this,e)).state={rows:[n.a.createElement("div",{className:"carousel-item active"},n.a.createElement("img",{className:"w-100",src:"https://image.tmdb.org/t/p/w1280/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",alt:"First slide"}),n.a.createElement("div",{class:"carousel-caption d-none d-md-block"},n.a.createElement("h5",null,"..."),n.a.createElement("p",null,"..."))),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"w-100",src:"https://image.tmdb.org/t/p/w1280/4XYxM4ZHX2mtdZe0z1psNUr7rxK.jpg",alt:"Second slide"}),n.a.createElement("div",{class:"carousel-caption d-none d-md-block"},n.a.createElement("h5",null,"..."),n.a.createElement("p",null,"..."))),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"w-100",src:"https://image.tmdb.org/t/p/w1280/pWozCsrzMJzN8dbOm330sCKqdml.jpg",alt:"Third slide"}),n.a.createElement("div",{class:"carousel-caption d-none d-md-block"},n.a.createElement("h5",null,"..."),n.a.createElement("p",null,"...")))]};var l=e.searchTerm;return r.performSearch(l),r}return Object(i.a)(t,[{key:"performSearch",value:function(e){var a=this;C.a.ajax({url:"https://api.themoviedb.org/3/movie/now_playing?api_key=f56610dee3836c9b80964e9be6d563c2",success:function(e){var t=e.results,r=[];t.forEach((function(e,a){e.id=a;var t=n.a.createElement("div",{className:"carousel-item "+(0===e.id?"active":"")},n.a.createElement("img",{className:"w-100",src:"https://image.tmdb.org/t/p/w1280"+e.backdrop_path,alt:"First slide"}),n.a.createElement("div",{class:"carousel-caption",style:{position:"absolute",top:"35%"}},n.a.createElement("h1",{style:M},e.title),n.a.createElement("button",{style:D},"Get Tickets")));r.push(t)})),a.setState({rows:r})},error:function(e,a,t){console.error("Failed to Fetch for popular films.")}})}},{key:"render",value:function(){return n.a.createElement("section",{style:{"margin-top":"-4rem"}},n.a.createElement("div",{id:"showcase",className:"carousel slide","data-ride":"carousel"},n.a.createElement("div",{className:"carousel-inner"},this.state.rows),n.a.createElement("a",{className:"carousel-control-prev",href:"#showcase",role:"button","data-slide":"prev"},n.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Previous")),n.a.createElement("a",{className:"carousel-control-next",href:"#showcase",role:"button","data-slide":"next"},n.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Next"))))}}]),t}(r.Component),D={background:"var(--main-color)",border:"none","font-weight":"800",padding:".75rem",color:"var(--main-light)","border-radius":"1rem"},M={color:"var(--main-light)",textShadow:"0px 0px 20px #000000"},V=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var r;Object(s.a)(this,t),(r=a.call(this,e)).state={rows:[]};var n=e.searchTerm;return r.performSearch(n),r}return Object(i.a)(t,[{key:"performSearch",value:function(e){var a=this,t="https://api.themoviedb.org/3/search/movie?api_key=f56610dee3836c9b80964e9be6d563c2&query="+e;C.a.ajax({url:t,success:function(e){var t=e.results,r=[];t.forEach((function(e,a){e.id=a;var t=n.a.createElement("div",{id:e.id,className:"card-item"},n.a.createElement("a",{href:"#"},n.a.createElement("img",{className:"card-img-top img-fluid",src:null==e.poster_path?"https://via.placeholder.com/200x375?text=NOT+AVAILABLE":"".concat("https://image.tmdb.org/t/p/w185").concat(e.poster_path),alt:e.title})),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},e.title),n.a.createElement("button",{style:q,className:"card-text"},"Get Tickets")));r.push(t)})),a.setState({rows:r})},error:function(e,a,t){console.error("Failed to Fetch for popular films.")}})}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{style:Z,className:"search-container"},this.state.rows))}}]),t}(r.Component),Z={display:"grid",gridGap:"2rem",gridTemplateColumns:"repeat(3, 33.33%)",margin:"20rem 5rem",padding:"0 4rem",textAlign:"center"},q={background:"var(--main-color)",border:"none","font-weight":"800",padding:".75rem",color:"var(--main-light)","border-radius":"1rem"},Q=t(6),Y=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).showingSearchBarHandler=function(){r.setState({showingSearchBar:!r.state.showingSearchBar})},r.searchChangeHandler=function(e){r.setState({searchTerm:e.target.value})},r.state={searchTerm:"",showingSearchBar:!1},r}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(o.a,null,n.a.createElement("div",null,n.a.createElement(v,{show:this.state.showingSearchBar,changed:this.searchChangeHandler,clicked:this.showingSearchBarHandler}),n.a.createElement(Q.a,{exact:!0,path:"/",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(J,null),n.a.createElement(y,null),n.a.createElement(A,null))}}),n.a.createElement(Q.a,{path:"/search",component:function(a){return n.a.createElement(V,Object.assign({},a,{searchTerm:e.state.searchTerm}))}}),n.a.createElement(z,null)))}}]),t}(r.Component);var $=function(){return n.a.createElement(Q.c,null,n.a.createElement(Q.a,{path:"/",component:Y}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(o.a,null,n.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.63973646.chunk.js.map