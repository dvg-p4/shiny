/*! shiny 1.7.2.4001 | (c) 2012-2022 RStudio, PBC. | License: GPL-3 | file LICENSE */
(function(){var en=Object.create;var ee=Object.defineProperty;var rn=Object.getOwnPropertyDescriptor;var tn=Object.getOwnPropertyNames;var nn=Object.getPrototypeOf,an=Object.prototype.hasOwnProperty;var on=function(e){return ee(e,"__esModule",{value:!0})};var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var ln=function(e,r,t){if(r&&typeof r=="object"||typeof r=="function")for(var n=tn(r),i=0,a=n.length,o;i<a;i++)o=n[i],!an.call(e,o)&&o!=="default"&&ee(e,o,{get:function(s){return r[s]}.bind(null,o),enumerable:!(t=rn(r,o))||t.enumerable});return e},sn=function(e){return ln(on(ee(e!=null?en(nn(e)):{},"default",e&&e.__esModule&&"default"in e?{get:function(){return e.default},enumerable:!0}:{value:e,enumerable:!0})),e)};var g=l(function(ka,Be){var M=function(e){return e&&e.Math==Math&&e};Be.exports=M(typeof globalThis=="object"&&globalThis)||M(typeof window=="object"&&window)||M(typeof self=="object"&&self)||M(typeof global=="object"&&global)||function(){return this}()||Function("return this")()});var b=l(function(Wa,Le){Le.exports=function(e){try{return!!e()}catch(r){return!0}}});var I=l(function(Ha,Fe){var un=b();Fe.exports=!un(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})});var We=l(function(ke){"use strict";var $e={}.propertyIsEnumerable,Ue=Object.getOwnPropertyDescriptor,cn=Ue&&!$e.call({1:2},1);ke.f=cn?function(r){var t=Ue(this,r);return!!t&&t.enumerable}:$e});var re=l(function(Ka,He){He.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var te=l(function(za,Ge){var fn={}.toString;Ge.exports=function(e){return fn.call(e).slice(8,-1)}});var ze=l(function(Xa,Ke){var vn=b(),dn=te(),pn="".split;Ke.exports=vn(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return dn(e)=="String"?pn.call(e,""):Object(e)}:Object});var P=l(function(Ya,Xe){Xe.exports=function(e){if(e==null)throw TypeError("Can't call method on "+e);return e}});var B=l(function(Ja,Ye){var gn=ze(),yn=P();Ye.exports=function(e){return gn(yn(e))}});var O=l(function(Za,Je){Je.exports=function(e){return typeof e=="object"?e!==null:typeof e=="function"}});var ne=l(function(Qa,Ze){var L=O();Ze.exports=function(e,r){if(!L(e))return e;var t,n;if(r&&typeof(t=e.toString)=="function"&&!L(n=t.call(e))||typeof(t=e.valueOf)=="function"&&!L(n=t.call(e))||!r&&typeof(t=e.toString)=="function"&&!L(n=t.call(e)))return n;throw TypeError("Can't convert object to primitive value")}});var ie=l(function(Va,Qe){var hn=P();Qe.exports=function(e){return Object(hn(e))}});var m=l(function(eo,Ve){var bn=ie(),xn={}.hasOwnProperty;Ve.exports=Object.hasOwn||function(r,t){return xn.call(bn(r),t)}});var tr=l(function(ro,rr){var mn=g(),er=O(),ae=mn.document,En=er(ae)&&er(ae.createElement);rr.exports=function(e){return En?ae.createElement(e):{}}});var oe=l(function(to,nr){var qn=I(),Sn=b(),wn=tr();nr.exports=!qn&&!Sn(function(){return Object.defineProperty(wn("div"),"a",{get:function(){return 7}}).a!=7})});var le=l(function(ar){var In=I(),Pn=We(),On=re(),jn=B(),Tn=ne(),_n=m(),Cn=oe(),ir=Object.getOwnPropertyDescriptor;ar.f=In?ir:function(r,t){if(r=jn(r),t=Tn(t,!0),Cn)try{return ir(r,t)}catch(n){}if(_n(r,t))return On(!Pn.f.call(r,t),r[t])}});var j=l(function(io,or){var Rn=O();or.exports=function(e){if(!Rn(e))throw TypeError(String(e)+" is not an object");return e}});var se=l(function(ur){var An=I(),Nn=oe(),lr=j(),Dn=ne(),sr=Object.defineProperty;ur.f=An?sr:function(r,t,n){if(lr(r),t=Dn(t,!0),lr(n),Nn)try{return sr(r,t,n)}catch(i){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var q=l(function(oo,cr){var Mn=I(),Bn=se(),Ln=re();cr.exports=Mn?function(e,r,t){return Bn.f(e,r,Ln(1,t))}:function(e,r,t){return e[r]=t,e}});var F=l(function(lo,vr){var fr=g(),Fn=q();vr.exports=function(e,r){try{Fn(fr,e,r)}catch(t){fr[e]=r}return r}});var U=l(function(so,pr){var $n=g(),Un=F(),dr="__core-js_shared__",kn=$n[dr]||Un(dr,{});pr.exports=kn});var ce=l(function(uo,gr){var ue=U(),Wn=Function.toString;typeof ue.inspectSource!="function"&&(ue.inspectSource=function(e){return Wn.call(e)});gr.exports=ue.inspectSource});var br=l(function(co,hr){var Hn=g(),Gn=ce(),yr=Hn.WeakMap;hr.exports=typeof yr=="function"&&/native code/.test(Gn(yr))});var mr=l(function(fo,xr){xr.exports=!1});var k=l(function(vo,qr){var Kn=mr(),Er=U();(qr.exports=function(e,r){return Er[e]||(Er[e]=r!==void 0?r:{})})("versions",[]).push({version:"3.14.0",mode:Kn?"pure":"global",copyright:"\xA9 2021 Denis Pushkarev (zloirock.ru)"})});var fe=l(function(po,Sr){var zn=0,Xn=Math.random();Sr.exports=function(e){return"Symbol("+String(e===void 0?"":e)+")_"+(++zn+Xn).toString(36)}});var Pr=l(function(go,Ir){var Yn=k(),Jn=fe(),wr=Yn("keys");Ir.exports=function(e){return wr[e]||(wr[e]=Jn(e))}});var ve=l(function(yo,Or){Or.exports={}});var Rr=l(function(ho,Cr){var Zn=br(),Qn=g(),Vn=O(),ei=q(),de=m(),pe=U(),ri=Pr(),ti=ve(),jr="Object already initialized",ni=Qn.WeakMap,W,T,H,ii=function(e){return H(e)?T(e):W(e,{})},ai=function(e){return function(r){var t;if(!Vn(r)||(t=T(r)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return t}};Zn||pe.state?(x=pe.state||(pe.state=new ni),Tr=x.get,ge=x.has,_r=x.set,W=function(e,r){if(ge.call(x,e))throw new TypeError(jr);return r.facade=e,_r.call(x,e,r),r},T=function(e){return Tr.call(x,e)||{}},H=function(e){return ge.call(x,e)}):(E=ri("state"),ti[E]=!0,W=function(e,r){if(de(e,E))throw new TypeError(jr);return r.facade=e,ei(e,E,r),r},T=function(e){return de(e,E)?e[E]:{}},H=function(e){return de(e,E)});var x,Tr,ge,_r,E;Cr.exports={set:W,get:T,has:H,enforce:ii,getterFor:ai}});var ye=l(function(bo,Dr){var oi=g(),Ar=q(),li=m(),si=F(),ui=ce(),Nr=Rr(),ci=Nr.get,fi=Nr.enforce,vi=String(String).split("String");(Dr.exports=function(e,r,t,n){var i=n?!!n.unsafe:!1,a=n?!!n.enumerable:!1,o=n?!!n.noTargetGet:!1,s;if(typeof t=="function"&&(typeof r=="string"&&!li(t,"name")&&Ar(t,"name",r),s=fi(t),s.source||(s.source=vi.join(typeof r=="string"?r:""))),e===oi){a?e[r]=t:si(r,t);return}else i?!o&&e[r]&&(a=!0):delete e[r];a?e[r]=t:Ar(e,r,t)})(Function.prototype,"toString",function(){return typeof this=="function"&&ci(this).source||ui(this)})});var Br=l(function(xo,Mr){var di=g();Mr.exports=di});var xe=l(function(mo,Fr){var he=Br(),be=g(),Lr=function(e){return typeof e=="function"?e:void 0};Fr.exports=function(e,r){return arguments.length<2?Lr(he[e])||Lr(be[e]):he[e]&&he[e][r]||be[e]&&be[e][r]}});var _=l(function(Eo,$r){var pi=Math.ceil,gi=Math.floor;$r.exports=function(e){return isNaN(e=+e)?0:(e>0?gi:pi)(e)}});var me=l(function(qo,Ur){var yi=_(),hi=Math.min;Ur.exports=function(e){return e>0?hi(yi(e),9007199254740991):0}});var Wr=l(function(So,kr){var bi=_(),xi=Math.max,mi=Math.min;kr.exports=function(e,r){var t=bi(e);return t<0?xi(t+r,0):mi(t,r)}});var Kr=l(function(wo,Gr){var Ei=B(),qi=me(),Si=Wr(),Hr=function(e){return function(r,t,n){var i=Ei(r),a=qi(i.length),o=Si(n,a),s;if(e&&t!=t){for(;a>o;)if(s=i[o++],s!=s)return!0}else for(;a>o;o++)if((e||o in i)&&i[o]===t)return e||o||0;return!e&&-1}};Gr.exports={includes:Hr(!0),indexOf:Hr(!1)}});var Xr=l(function(Io,zr){var Ee=m(),wi=B(),Ii=Kr().indexOf,Pi=ve();zr.exports=function(e,r){var t=wi(e),n=0,i=[],a;for(a in t)!Ee(Pi,a)&&Ee(t,a)&&i.push(a);for(;r.length>n;)Ee(t,a=r[n++])&&(~Ii(i,a)||i.push(a));return i}});var Jr=l(function(Po,Yr){Yr.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Qr=l(function(Zr){var Oi=Xr(),ji=Jr(),Ti=ji.concat("length","prototype");Zr.f=Object.getOwnPropertyNames||function(r){return Oi(r,Ti)}});var et=l(function(Vr){Vr.f=Object.getOwnPropertySymbols});var tt=l(function(To,rt){var _i=xe(),Ci=Qr(),Ri=et(),Ai=j();rt.exports=_i("Reflect","ownKeys")||function(r){var t=Ci.f(Ai(r)),n=Ri.f;return n?t.concat(n(r)):t}});var it=l(function(_o,nt){var Ni=m(),Di=tt(),Mi=le(),Bi=se();nt.exports=function(e,r){for(var t=Di(r),n=Bi.f,i=Mi.f,a=0;a<t.length;a++){var o=t[a];Ni(e,o)||n(e,o,i(r,o))}}});var ot=l(function(Co,at){var Li=b(),Fi=/#|\.prototype\./,C=function(e,r){var t=Ui[$i(e)];return t==Wi?!0:t==ki?!1:typeof r=="function"?Li(r):!!r},$i=C.normalize=function(e){return String(e).replace(Fi,".").toLowerCase()},Ui=C.data={},ki=C.NATIVE="N",Wi=C.POLYFILL="P";at.exports=C});var st=l(function(Ro,lt){var qe=g(),Hi=le().f,Gi=q(),Ki=ye(),zi=F(),Xi=it(),Yi=ot();lt.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,a,o,s,u,f,v;if(n?o=qe:i?o=qe[t]||zi(t,{}):o=(qe[t]||{}).prototype,o)for(s in r){if(f=r[s],e.noTargetGet?(v=Hi(o,s),u=v&&v.value):u=o[s],a=Yi(n?s:t+(i?".":"#")+s,e.forced),!a&&u!==void 0){if(typeof f==typeof u)continue;Xi(f,u)}(e.sham||u&&u.sham)&&Gi(f,"sham",!0),Ki(o,s,f,e)}}});var ct=l(function(Ao,ut){"use strict";var Ji=j();ut.exports=function(){var e=Ji(this),r="";return e.global&&(r+="g"),e.ignoreCase&&(r+="i"),e.multiline&&(r+="m"),e.dotAll&&(r+="s"),e.unicode&&(r+="u"),e.sticky&&(r+="y"),r}});var dt=l(function(Se){"use strict";var ft=b();function vt(e,r){return RegExp(e,r)}Se.UNSUPPORTED_Y=ft(function(){var e=vt("a","y");return e.lastIndex=2,e.exec("abcd")!=null});Se.BROKEN_CARET=ft(function(){var e=vt("^r","gy");return e.lastIndex=2,e.exec("str")!=null})});var K=l(function(Do,ht){"use strict";var Zi=ct(),pt=dt(),Qi=k(),G=RegExp.prototype.exec,Vi=Qi("native-string-replace",String.prototype.replace),gt=G,we=function(){var e=/a/,r=/b*/g;return G.call(e,"a"),G.call(r,"a"),e.lastIndex!==0||r.lastIndex!==0}(),yt=pt.UNSUPPORTED_Y||pt.BROKEN_CARET,Ie=/()??/.exec("")[1]!==void 0,ea=we||Ie||yt;ea&&(gt=function(r){var t=this,n,i,a,o,s=yt&&t.sticky,u=Zi.call(t),f=t.source,v=0,c=r;return s&&(u=u.replace("y",""),u.indexOf("g")===-1&&(u+="g"),c=String(r).slice(t.lastIndex),t.lastIndex>0&&(!t.multiline||t.multiline&&r[t.lastIndex-1]!=="\n")&&(f="(?: "+f+")",c=" "+c,v++),i=new RegExp("^(?:"+f+")",u)),Ie&&(i=new RegExp("^"+f+"$(?!\\s)",u)),we&&(n=t.lastIndex),a=G.call(s?i:t,c),s?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=t.lastIndex,t.lastIndex+=a[0].length):t.lastIndex=0:we&&a&&(t.lastIndex=t.global?a.index+a[0].length:n),Ie&&a&&a.length>1&&Vi.call(a[0],i,function(){for(o=1;o<arguments.length-2;o++)arguments[o]===void 0&&(a[o]=void 0)}),a});ht.exports=gt});var Pe=l(function(){"use strict";var ra=st(),bt=K();ra({target:"RegExp",proto:!0,forced:/./.exec!==bt},{exec:bt})});var mt=l(function(Lo,xt){var ta=xe();xt.exports=ta("navigator","userAgent")||""});var It=l(function(Fo,wt){var na=g(),Oe=mt(),Et=na.process,qt=Et&&Et.versions,St=qt&&qt.v8,h,z;St?(h=St.split("."),z=h[0]<4?1:h[0]+h[1]):Oe&&(h=Oe.match(/Edge\/(\d+)/),(!h||h[1]>=74)&&(h=Oe.match(/Chrome\/(\d+)/),h&&(z=h[1])));wt.exports=z&&+z});var je=l(function($o,Ot){var Pt=It(),ia=b();Ot.exports=!!Object.getOwnPropertySymbols&&!ia(function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Pt&&Pt<41})});var Tt=l(function(Uo,jt){var aa=je();jt.exports=aa&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var At=l(function(ko,Rt){var oa=g(),la=k(),_t=m(),sa=fe(),Ct=je(),ua=Tt(),R=la("wks"),A=oa.Symbol,ca=ua?A:A&&A.withoutSetter||sa;Rt.exports=function(e){return(!_t(R,e)||!(Ct||typeof R[e]=="string"))&&(Ct&&_t(A,e)?R[e]=A[e]:R[e]=ca("Symbol."+e)),R[e]}});var Ft=l(function(Wo,Lt){"use strict";Pe();var Nt=ye(),fa=K(),X=b(),Te=At(),va=q(),da=Te("species"),_e=RegExp.prototype,pa=!X(function(){var e=/./;return e.exec=function(){var r=[];return r.groups={a:"7"},r},"".replace(e,"$<a>")!=="7"}),Dt=function(){return"a".replace(/./,"$0")==="$0"}(),Mt=Te("replace"),Bt=function(){return/./[Mt]?/./[Mt]("a","$0")==="":!1}(),ga=!X(function(){var e=/(?:)/,r=e.exec;e.exec=function(){return r.apply(this,arguments)};var t="ab".split(e);return t.length!==2||t[0]!=="a"||t[1]!=="b"});Lt.exports=function(e,r,t,n){var i=Te(e),a=!X(function(){var c={};return c[i]=function(){return 7},""[e](c)!=7}),o=a&&!X(function(){var c=!1,d=/a/;return e==="split"&&(d={},d.constructor={},d.constructor[da]=function(){return d},d.flags="",d[i]=/./[i]),d.exec=function(){return c=!0,null},d[i](""),!c});if(!a||!o||e==="replace"&&!(pa&&Dt&&!Bt)||e==="split"&&!ga){var s=/./[i],u=t(i,""[e],function(c,d,y,N,S){var p=d.exec;return p===fa||p===_e.exec?a&&!S?{done:!0,value:s.call(d,y,N)}:{done:!0,value:c.call(y,d,N)}:{done:!1}},{REPLACE_KEEPS_$0:Dt,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Bt}),f=u[0],v=u[1];Nt(String.prototype,e,f),Nt(_e,i,r==2?function(c,d){return v.call(c,this,d)}:function(c){return v.call(c,this)})}n&&va(_e[i],"sham",!0)}});var kt=l(function(Ho,Ut){var ya=_(),ha=P(),$t=function(e){return function(r,t){var n=String(ha(r)),i=ya(t),a=n.length,o,s;return i<0||i>=a?e?"":void 0:(o=n.charCodeAt(i),o<55296||o>56319||i+1===a||(s=n.charCodeAt(i+1))<56320||s>57343?e?n.charAt(i):o:e?n.slice(i,i+2):(o-55296<<10)+(s-56320)+65536)}};Ut.exports={codeAt:$t(!1),charAt:$t(!0)}});var Ht=l(function(Go,Wt){"use strict";var ba=kt().charAt;Wt.exports=function(e,r,t){return r+(t?ba(e,r).length:1)}});var Kt=l(function(Ko,Gt){var xa=ie(),ma=Math.floor,Ea="".replace,qa=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Sa=/\$([$&'`]|\d{1,2})/g;Gt.exports=function(e,r,t,n,i,a){var o=t+e.length,s=n.length,u=Sa;return i!==void 0&&(i=xa(i),u=qa),Ea.call(a,u,function(f,v){var c;switch(v.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,t);case"'":return r.slice(o);case"<":c=i[v.slice(1,-1)];break;default:var d=+v;if(d===0)return f;if(d>s){var y=ma(d/10);return y===0?f:y<=s?n[y-1]===void 0?v.charAt(1):n[y-1]+v.charAt(1):f}c=n[d-1]}return c===void 0?"":c})}});var Xt=l(function(zo,zt){var wa=te(),Ia=K();zt.exports=function(e,r){var t=e.exec;if(typeof t=="function"){var n=t.call(e,r);if(typeof n!="object")throw TypeError("RegExp exec method returned something other than an Object or null");return n}if(wa(e)!=="RegExp")throw TypeError("RegExp#exec called on incompatible receiver");return Ia.call(e,r)}});var Jo=sn(Pe());"use strict";var Pa=Ft(),Oa=j(),ja=me(),Ta=_(),_a=P(),Ca=Ht(),Ra=Kt(),Aa=Xt(),Na=Math.max,Da=Math.min,Ma=function(e){return e===void 0?e:String(e)};Pa("replace",2,function(e,r,t,n){var i=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,a=n.REPLACE_KEEPS_$0,o=i?"$":"$0";return[function(u,f){var v=_a(this),c=u==null?void 0:u[e];return c!==void 0?c.call(u,v,f):r.call(String(v),u,f)},function(s,u){if(!i&&a||typeof u=="string"&&u.indexOf(o)===-1){var f=t(r,s,this,u);if(f.done)return f.value}var v=Oa(s),c=String(this),d=typeof u=="function";d||(u=String(u));var y=v.global;if(y){var N=v.unicode;v.lastIndex=0}for(var S=[];;){var p=Aa(v,c);if(p===null||(S.push(p),!y))break;var Vt=String(p[0]);Vt===""&&(v.lastIndex=Ca(c,ja(v.lastIndex),N))}for(var Ne="",D=0,Y=0;Y<S.length;Y++){p=S[Y];for(var J=String(p[0]),w=Na(Da(Ta(p.index),c.length),0),Z=[],Q=1;Q<p.length;Q++)Z.push(Ma(p[Q]));var V=p.groups;if(d){var De=[J].concat(Z,w,c);V!==void 0&&De.push(V);var Me=String(u.apply(void 0,De))}else Me=Ra(J,c,w,Z,V,u);w>=D&&(Ne+=c.slice(D,w)+Me,D=w+J.length)}return Ne+c.slice(D)}]});var Yt=400;function Ce(e,r){var t=0;if(e.nodeType===3){var n=e.nodeValue.replace(/\n/g,"").length;if(n>=r)return{element:e,offset:r};t+=n}else if(e.nodeType===1&&e.firstChild){var i=Ce(e.firstChild,r);if(i.element!==null)return i;t+=i.offset}return e.nextSibling?Ce(e.nextSibling,r-t):{element:null,offset:t}}function Re(e,r,t){for(var n=0,i=0;i<e.childNodes.length;i++){var a=e.childNodes[i];if(a.nodeType===3){for(var o=/\n/g,s=void 0;(s=o.exec(a.nodeValue))!==null;)if(n++,n===r)return Ce(a,s.index+t+1)}else if(a.nodeType===1){var u=Re(a,r-n,t);if(u.element!==null)return u;n+=u.offset}}return{element:null,offset:n}}function Ba(e,r){if(!!document.createRange){var t=document.getElementById("srcref_"+e);if(!t){t=document.createElement("span"),t.id="srcref_"+e;var n=e,i=document.getElementById(r.replace(/\./g,"_")+"_code");if(!i)return;var a=Re(i,n[0],n[4]),o=Re(i,n[2],n[5]);if(a.element===null||o.element===null)return;var s=document.createRange();a.element.parentNode.nodeName==="SPAN"&&a.element!==o.element?s.setStartBefore(a.element.parentNode):s.setStart(a.element,a.offset),o.element.parentNode.nodeName==="SPAN"&&a.element!==o.element?s.setEndAfter(o.element.parentNode):s.setEnd(o.element,o.offset),s.surroundContents(t)}$(t).stop(!0,!0).effect("highlight",null,1600)}}Shiny&&Shiny.addCustomMessageHandler("showcase-src",function(e){e.srcref&&e.srcfile&&Ba(e.srcref,e.srcfile)});var Ae=!1,Jt=function(r,t){var n=t?Yt:1,i=r?document.getElementById("showcase-sxs-code"):document.getElementById("showcase-code-inline"),a=r?document.getElementById("showcase-code-inline"):document.getElementById("showcase-sxs-code"),o=document.getElementById("showcase-app-metadata");if(o===null){var s=$("#showcase-well");r?s.fadeOut(n):s.fadeIn(n)}$(i).hide(),$(a).fadeOut(n,function(){var u=document.getElementById("showcase-code-tabs");a.removeChild(u),i.appendChild(u),r?Qt():document.getElementById("showcase-code-content").removeAttribute("style"),$(i).fadeIn(n),r||(document.getElementById("showcase-app-container").removeAttribute("style"),t&&$(document.body).animate({scrollTop:$(i).offset().top}));var f=document.getElementById("readme-md");f!==null&&(f.parentElement.removeChild(f),r?(a.appendChild(f),$(a).fadeIn(n)):document.getElementById("showcase-app-metadata").appendChild(f)),document.getElementById("showcase-code-position-toggle").innerHTML=r?'<i class="fa fa-level-down"></i> show below':'<i class="fa fa-level-up"></i> show with app'}),r&&$(document.body).animate({scrollTop:0},n),Ae=r,Zt(r&&t),$(window).trigger("resize")};function Zt(e){var r=960,t=r,n=1,i=document.getElementById("showcase-app-code").offsetWidth;i/2>r?t=i/2:i*.66>r?t=960:(t=i*.66,n=t/r);var a=document.getElementById("showcase-app-container");$(a).animate({width:t+"px",zoom:n*100+"%"},e?Yt:0)}var La=function(){Jt(!Ae,!0)},Fa=function(){document.body.offsetWidth>1350&&Jt(!0,!1)};function Qt(){document.getElementById("showcase-code-content").style.height=$(window).height()+"px"}function $a(){var e=document.getElementById("showcase-markdown-content");if(e!==null){var r=e.innerText||e.innerHTML,t=window.Showdown.converter;document.getElementById("readme-md").innerHTML=new t().makeHtml(r)}}$(window).resize(function(){Ae&&(Zt(!1),Qt())});window.toggleCodePosition=La;$(window).on("load",Fa);$(window).on("load",$a);window.hljs&&window.hljs.initHighlightingOnLoad();})();
//# sourceMappingURL=shiny-showcase.js.map
