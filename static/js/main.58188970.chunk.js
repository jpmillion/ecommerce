(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{58:function(t,e,n){},59:function(t,e,n){},71:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(19),i=n.n(c),s=(n(58),n(24)),a=n(25),o=n(27),u=n(26),l=(n(59),n(49)),d=n(13),j=n(10),h=n(9),m=n(53),b=n(6),g="https://rocky-gorge-45567.herokuapp.com/api/v1",p=n(12),O=n(31),f=n(1),I=function(t){var e=Object(j.g)();return Object(f.jsx)("div",{className:"col-sm text-center",children:Object(f.jsxs)(p.a,{style:{width:"18rem",height:"30rem",margin:"auto",marginTop:"15px"},children:[Object(f.jsx)(p.a.Img,{variant:"top",src:t.MainImage.url_170x135,alt:t.title}),Object(f.jsxs)(p.a.Body,{children:[Object(f.jsx)(p.a.Title,{children:t.title}),Object(f.jsxs)(p.a.Text,{children:[t.price,Object(f.jsx)(O.a,{variant:"dark",onClick:function(){if(!sessionStorage.getItem("token"))return window.alert("MUST BE LOGGED IN TO ADD ITEM TO CART"),e.push("/login");t.addToCart(t.cartId,1,t.price,t.title,t.description,t.MainImage.url_75x75)},style:{margin:"5px"},children:"Add To Cart"})]})]})]})})},x=Object(h.b)((function(t){return{cartId:t.cart.id}}),{fetchCreateCartItem:function(t,e,n,r,c,i){return function(s){fetch("".concat(g,"/carts/").concat(t,"/cart_items"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({quantity:e,price:n,title:r,description:c,image:i})}).then((function(t){return t.json()})).then((function(t){return s({type:"ADD_CART_ITEM",cartItem:t.data.attributes,cartItemId:t.data.id,total:t.included[0].attributes.total})})).catch((function(t){return window.alert(t.messages)}))}}})((function(t){var e=t.products.map((function(e){return Object(f.jsx)(I,Object(b.a)(Object(b.a)({},e),{},{addToCart:t.fetchCreateCartItem,cartId:t.cartId}),e.listing_id)}));return Object(f.jsx)("div",{className:"row",style:{margin:"auto"},children:e})})),y=n(22),T=n(28),_=Object(h.b)((function(t){return{firstName:t.customer.first_name,cartItems:t.cartItems,total:t.cart.total}}))((function(t){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return Object(f.jsx)(p.a,{style:{width:"18rem",position:"fixed",top:"0",right:"0",margin:"20px"},children:Object(f.jsxs)(p.a.Body,{children:[Object(f.jsxs)(p.a.Title,{children:[t.firstName,"'s Shopping Cart"]}),t.cartItems.length?Object(f.jsxs)(y.a,{children:[Object(f.jsxs)(T.a,{children:["Total ",e.format(t.total)]}),Object(f.jsxs)(T.a,{children:["There are currently ",v(t.cartItems)," item(s) in your cart"]}),Object(f.jsx)(T.a,{children:Object(f.jsx)(d.b,{to:"/cart",children:"View Cart"})})]}):Object(f.jsx)(p.a.Text,{children:"Your cart is currently empty"})]})})})),v=function(t){return t.reduce((function(t,e){return t+e.quantity}),0)},N=function(){if(sessionStorage.token)return Object(f.jsx)(_,{})},L=function(t){var e=Object(r.useState)(""),n=Object(m.a)(e,2),c=n[0],i=n[1],s=c.split(" "),a=t.filteredListings.filter((function(t){return s.every((function(e){return t.title.toLowerCase().includes(e)}))}));return Object(f.jsxs)("div",{children:[Object(f.jsx)(d.b,{to:"/ecommerce",className:"text-light",children:"Home"}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)("input",{type:"text",onChange:function(t){return function(t){i(t.target.value.toLowerCase())}(t)},name:"text",placeholder:"Search Listings",style:{width:"50%",margin:"10px"}})}),Object(f.jsx)(x,{products:a}),N()]})},C=Object(h.b)((function(t){return{listings:t.listings,loading:t.loading}}))((function(t){return Object(f.jsx)(L,{filteredListings:t.listings})})),S=n(52),w=Object(h.b)((function(t){return{logIn:t.logIn}}))((function(t){return t.logIn?Object(f.jsx)(S.a,{className:"bg-secondary justify-content-center",style:{padding:"10px",fontSize:"2em"},children:Object(f.jsx)(d.b,{to:"/ecommerce",onClick:function(){sessionStorage.clear(),t.dispatch({type:"LOG_OUT"})},className:"text-light",children:"Log Out"})}):Object(f.jsxs)("div",{className:"row bg-secondary text-center",style:{padding:"10px",fontSize:"2em"},children:[Object(f.jsx)("div",{className:"col-sm-4"}),Object(f.jsx)("div",{className:"col-sm-2",children:Object(f.jsx)(d.b,{className:"text-light",to:"/login",children:"Log In"})}),Object(f.jsx)("div",{className:"col-sm-2",children:Object(f.jsx)(d.b,{className:"text-light",to:"/register",children:"Register"})}),Object(f.jsx)("div",{className:"col-sm-4"})]})})),E=n(48),A=function(t){return Object(f.jsx)(p.a,{className:"bg-secondary text-center",children:Object(f.jsxs)(p.a.Body,{children:[Object(f.jsx)(p.a.Img,{src:t.image,alt:t.title}),Object(f.jsx)(p.a.Title,{children:t.title}),Object(f.jsx)(p.a.Text,{}),Object(f.jsxs)(d.b,{to:t.route,className:"text-light",children:["Search ",t.title]})]})})},D=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(w,{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{children:N()}),Object(f.jsxs)(E.a,{children:[Object(f.jsx)(A,{title:"Trending Listings",route:"/trendingListings",image:"https://i.etsystatic.com/8789900/d/il/c0384b/646853390/il_170x135.646853390_1nbn.jpg?version=1"}),Object(f.jsx)(A,{title:"Interesting Listings",route:"/interestingListings",image:"https://i.etsystatic.com/6196192/d/il/91ad3e/818566630/il_170x135.818566630_fjaj.jpg?version=0"}),Object(f.jsx)(A,{title:"Active Listings",route:"/listings",image:"https://i.etsystatic.com/18538268/c/2250/1788/0/0/il/8f7a20/3052226842/il_170x135.3052226842_ggqf.jpg"})]})]})},G=n(33),R=function(t,e){if(sessionStorage.getItem("token")||sessionStorage.setItem("token",t.token),t.errors)return window.alert(t.errors);var n=t.logIn,r=t.customer.data.id,c=t.customer.data.attributes;e({type:"LOG_IN",customer:{id:r,first_name:c.first_name,last_name:c.last_name,email:c.email},cart:c.cart,cart_items:c.cart_items,orders:c.orders,order_items:c.order_items,logIn:n})},k=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={email:"",password:"",firstName:""},t.handleChange=function(e){t.setState(Object(G.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),"/login"===t.route?t.props.fetchCustomer(t.state.email,t.state.password):t.props.register(t.state.email,t.state.password,t.state.firstName),t.setState({email:"",password:"",firstName:""})},t.redirectOnLogIn=function(){if(t.props.loggedIn)return Object(f.jsx)(j.a,{to:"/ecommerce"});var e="/register"===t.route?Object(f.jsx)("input",{onChange:t.handleChange,placeholder:"First Name",type:"text",name:"firstName",value:t.state.firstName}):"";return Object(f.jsxs)("form",{className:"text-center text-light",onSubmit:t.handleSubmit,children:[e,Object(f.jsx)("br",{}),Object(f.jsx)("input",{onChange:t.handleChange,placeholder:"Email",type:"text",name:"email",value:t.state.email}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{onChange:t.handleChange,placeholder:"Password",type:"password",name:"password",value:t.state.password}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"submit",value:"submit"}),Object(f.jsx)("br",{}),"or",Object(f.jsx)("br",{})," ",Object(f.jsx)(d.b,{to:"/ecommerce",children:"Go Back"})]})},t}return Object(a.a)(n,[{key:"route",get:function(){return this.props.match.url}},{key:"render",value:function(){return this.redirectOnLogIn()}}]),n}(r.PureComponent),M=Object(h.b)((function(t){return{loggedIn:t.logIn}}),{fetchCustomer:function(t,e){return function(n){fetch("".concat(g,"/sessions"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password_digest:e})}).then((function(t){return t.json()})).then((function(t){return R(t,n)})).catch((function(t){return window.alert(t.errors)}))}},register:function(t,e,n){return function(r){fetch("".concat(g,"/customers"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password_digest:e,first_name:n})}).then((function(t){return t.json()})).then((function(t){if(t.errors)return window.alert(t.errors);sessionStorage.setItem("token",t.token),r({type:"REGISTER",customer:Object(b.a)({id:t.customer.data.id},t.customer.data.attributes),cart:Object(b.a)({id:t.customer.included[0].id},t.customer.included[0].attributes),logIn:t.logIn})})).catch((function(t){return window.alert(t.errors)}))}}})(k),U=Object(h.b)((function(t){return{trendingListings:t.trendingListings,loading:t.loading}}))((function(t){return Object(f.jsx)(L,{filteredListings:t.trendingListings})})),P=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).makePurchase=function(){t.props.createOrderAndItems(t.props.customer.id,t.props.cart,t.props.cartItems),t.props.emptyCart(t.props.cart.id)},t.items=function(){return t.props.cartItems.map((function(e){return Object(f.jsxs)("div",{className:"col-sm-4 text-center bg-secondary",style:{margin:"20px"},children:[Object(f.jsx)("p",{children:e.title}),Object(f.jsx)("img",{src:e.image,alt:e.title,className:"rounded mx-auto d-block",style:{margin:"5px"},height:"75px",width:"75px"}),Object(f.jsxs)("p",{children:[t.currency.format(e.price)," ",Object(f.jsx)(O.a,{onClick:function(n){return t.props.deleteCartItem(t.props.cart.id,e.id)},style:{margin:"5px"},children:"Remove Item"})]}),Object(f.jsxs)(y.a,{horizontal:!0,className:"justify-content-center",style:{margin:"5px"},children:[Object(f.jsx)(y.a.Item,{children:"Quantitiy"}),Object(f.jsx)(y.a.Item,{children:e.quantity}),Object(f.jsx)(y.a.Item,{onClick:function(){return t.props.updateCartItemQuantity(t.props.cart.id,e.id,++e.quantity)},children:"+"}),Object(f.jsx)(y.a.Item,{disabled:e.quantity<=1,onClick:function(){return t.props.updateCartItemQuantity(t.props.cart.id,e.id,--e.quantity)},children:"-"})]})]},e.id)}))},t.currency=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),t}return Object(a.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(d.b,{to:"/ecommerce",className:"text-light",children:"Home"}),Object(f.jsx)("div",{className:"row justify-content-center",children:this.props.cartItems.length?this.items():Object(f.jsx)("h2",{className:"text-light",children:"Your Cart Is Currently Empty"})}),Object(f.jsxs)("div",{className:"bg-light",style:{position:"fixed",top:"0",right:"0",padding:"10px"},children:[Object(f.jsxs)("h1",{children:[this.props.customer.first_name,"'s Cart"]}),Object(f.jsxs)("h2",{children:["Total ",this.currency.format(this.props.cart.total)," ",Object(f.jsx)(O.a,{onClick:this.makePurchase,children:"Purchase"})]})]})]})}}]),n}(r.PureComponent),q=Object(h.b)((function(t){return{cartItems:t.cartItems,cart:t.cart,customer:t.customer,order:t.order}}),{deleteCartItem:function(t,e){return function(n){fetch("".concat(g,"/carts/").concat(t,"/cart_items/").concat(e),{method:"delete",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return n({type:"DELETE_CART_ITEM",cartItemId:e,total:t.data.attributes.total})})).catch((function(t){return window.alert(t.messages)}))}},updateCartItemQuantity:function(t,e,n){return function(r){fetch("".concat(g,"/carts/").concat(t,"/cart_items/").concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({quantity:n})}).then((function(t){return t.json()})).then((function(t){return r({type:"UPDATE_CART_ITEM_QUANTITY",cartItem:t.data.attributes,cartItemId:e,total:t.included[0].attributes.total})})).catch((function(t){return window.alert(t.messages)}))}},createOrderAndItems:function(t,e,n){return function(r){fetch("".concat(g,"/customers/").concat(t,"/orders"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(b.a)(Object(b.a)({},e),{},{order_items:n}))}).then((function(t){return t.json()})).then((function(t){r({type:"CREATE_ORDER_AND_ITEMS",order:t.data.attributes,id:t.data.id})})).catch((function(t){return window.alert(t.message)}))}},emptyCart:function(t){return function(e){fetch("".concat(g,"/carts/").concat(t),{method:"PATCH",headers:{"Content-Type":"application/json"}}).then(e({type:"EMPTY_CART"})).catch((function(t){return window.alert(t.message)}))}}})(P),Y=n(37),B=n.n(Y),F="https://openapi.etsy.com/v2/listings",J="2tegiqsztfabx06i103sm6xy",Q=Object(h.b)((function(t){return{listings:t.interestingListings,loading:t.loading}}))((function(t){return Object(f.jsx)(L,{filteredListings:t.listings})})),z=function(t){return Object(f.jsx)(p.a,{style:{width:"18rem"},children:Object(f.jsxs)(p.a.Text,{children:[t.created_at,Object(f.jsx)("br",{}),t.total]})})},H=Object(h.b)((function(t){return{orders:t.orders}}))((function(t){var e=t.orders.map((function(t){return Object(f.jsx)(z,Object(b.a)({},t),t.id)}));return Object(f.jsx)("div",{className:"row justify-content-center",children:Object(f.jsx)("div",{className:"col-sm-3 text-center",children:e})})})),V=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){sessionStorage.getItem("token")&&this.props.authenticate(),!this.props.listings.length&&this.props.fetchActiveListings(),!this.props.trendingListings.length&&this.props.fetchTrendingListings(),!this.props.interestingListings.length&&this.props.fetchInterestingListings()}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(l.a,{fluid:!0,className:"bg-dark",children:Object(f.jsx)("p",{className:"jumbo text-center text-info",children:"Ecommerce"})}),Object(f.jsx)(d.a,{children:Object(f.jsxs)(j.d,{children:[Object(f.jsx)(j.b,{path:"/trendingListings",component:U}),Object(f.jsx)(j.b,{path:"/interestingListings",component:Q}),Object(f.jsx)(j.b,{path:"/listings",component:C}),Object(f.jsx)(j.b,{path:"/cart",component:q}),Object(f.jsx)(j.b,{path:"/login",component:M}),Object(f.jsx)(j.b,{path:"/register",component:M}),Object(f.jsx)(j.b,{path:"/orders/history",component:H}),Object(f.jsx)(j.b,{path:"/ecommerce",component:D})]})})]})}}]),n}(r.Component),W=Object(h.b)((function(t){return{listings:t.listings,trendingListings:t.trendingListings,interestingListings:t.interestingListings}}),{authenticate:function(){return function(t){fetch("".concat(g,"/customers/authenticate"),{headers:Object(b.a)({},sessionStorage)}).then((function(t){return t.json()})).then((function(e){return R(e,t)})).catch((function(t){return window.alert(t)}))}},fetchActiveListings:function(){return function(t){t({type:"LOADING_LISTINGS"}),B()("".concat(F,"/active.js?includes=MainImage&api_key=").concat(J)).then((function(t){return t.json()})).then((function(e){return t({type:"ADD_LISTINGS",listings:e.results})})).catch((function(t){return window.alert(t.message)}))}},fetchTrendingListings:function(){return function(t){t({type:"LOADING_TRENDING_LISTINGS"}),B()("".concat(F,"/trending.js?includes=MainImage&api_key=").concat(J)).then((function(t){return t.json()})).then((function(e){return t({type:"ADD_TRENDING_LISTINGS",listings:e.results})})).catch((function(t){return window.alert(t.message)}))}},fetchInterestingListings:function(){return function(t){t({type:"LOADING_INTERESTING_LISTINGS"}),B()("".concat(F,"/interesting.js?includes=MainImage&api_key=").concat(J)).then((function(t){return t.json()})).then((function(e){return t({type:"ADD_INTERESTING_LISTINGS",listings:e.results})})).catch((function(t){return window.alert(t.message)}))}}})(V),K=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),i(t),s(t)}))},X=n(20),Z=n(50),$=n(51),tt=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOG_IN":return e.logIn;case"LOG_OUT":return!1;case"REGISTER":return e.logIn;default:return t}},et=n(7),nt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOADING_LISTINGS":return Object(et.a)(t);case"ADD_LISTINGS":var n=e.listings.filter((function(t){return"active"===t.state}));return[].concat(Object(et.a)(t),Object(et.a)(n));default:return t}},rt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOG_IN":return Object(b.a)(Object(b.a)({},t),e.customer);case"LOG_OUT":return{};case"REGISTER":return e.customer;default:return t}},ct=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOG_IN":return Object(b.a)(Object(b.a)({},t),e.cart);case"LOG_OUT":return{};case"ADD_CART_ITEM":case"DELETE_CART_ITEM":case"UPDATE_CART_ITEM_QUANTITY":return Object(b.a)(Object(b.a)({},t),{},{total:e.total});case"EMPTY_CART":return Object(b.a)(Object(b.a)({},t),{},{total:0});case"REGISTER":return e.cart;default:return t}},it=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOG_IN":return[].concat(Object(et.a)(t),Object(et.a)(e.cart_items));case"LOG_OUT":return[];case"ADD_CART_ITEM":return e.cartItem.id=e.cartItemId,[].concat(Object(et.a)(t),[e.cartItem]);case"DELETE_CART_ITEM":var n=t.filter((function(t){return t.id!==e.cartItemId}));return n;case"UPDATE_CART_ITEM_QUANTITY":return e.cartItem.id=e.cartItemId,[].concat(Object(et.a)(t.filter((function(t){return t.id!==e.cartItemId}))),[e.cartItem]);case"EMPTY_CART":return[];default:return t}},st=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOADING_TRENDING_LISTINGS":return Object(et.a)(t);case"ADD_TRENDING_LISTINGS":var n=e.listings.filter((function(t){return"active"===t.state}));return[].concat(Object(et.a)(t),Object(et.a)(n));default:return t}},at=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOG_IN":return[].concat(Object(et.a)(t),Object(et.a)(e.orders));case"LOG_OUT":return[];case"CREATE_ORDER_AND_ITEMS":return e.order.id=e.id,[].concat(Object(et.a)(t),[e.order]);default:return t}},ot=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOG_IN":return[].concat(Object(et.a)(t),Object(et.a)(e.order_items));case"LOG_OUT":return[];case"CREATE_ORDER_AND_ITEMS":return[].concat(Object(et.a)(t),Object(et.a)(e.order.order_items));default:return t}},ut=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOADING_INTERESTING_LISTINGS":return Object(et.a)(t);case"ADD_INTERESTING_LISTINGS":var n=e.listings.filter((function(t){return"active"===t.state}));return[].concat(Object(et.a)(t),Object(et.a)(n));default:return t}},lt=Object(X.combineReducers)({logIn:tt,customer:rt,cart:ct,cartItems:it,orders:at,orderItems:ot,listings:nt,trendingListings:st,interestingListings:ut}),dt=(n(70),Object(X.createStore)(lt,Object(Z.composeWithDevTools)(Object(X.applyMiddleware)($.a))));i.a.render(Object(f.jsx)(h.a,{store:dt,children:Object(f.jsx)(W,{})}),document.getElementById("root")),K()}},[[71,1,2]]]);
//# sourceMappingURL=main.58188970.chunk.js.map