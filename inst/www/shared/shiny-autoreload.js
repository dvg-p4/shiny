/*! shiny 1.7.1.9004 | (c) 2012-2022 RStudio, PBC. | License: GPL-3 | file LICENSE */
(function(){var on=Object.create;var sr=Object.defineProperty;var sn=Object.getOwnPropertyDescriptor;var ln=Object.getOwnPropertyNames;var un=Object.getPrototypeOf,cn=Object.prototype.hasOwnProperty;var fn=function(r){return sr(r,"__esModule",{value:!0})};var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var vn=function(r,e,t){if(e&&typeof e=="object"||typeof e=="function")for(var n=ln(e),i=0,o=n.length,s;i<o;i++)s=n[i],!cn.call(r,s)&&s!=="default"&&sr(r,s,{get:function(u){return e[u]}.bind(null,s),enumerable:!(t=sn(e,s))||t.enumerable});return r},pn=function(r){return vn(fn(sr(r!=null?on(un(r)):{},"default",r&&r.__esModule&&"default"in r?{get:function(){return r.default},enumerable:!0}:{value:r,enumerable:!0})),r)};var g=a(function(qo,Mr){var M=function(r){return r&&r.Math==Math&&r};Mr.exports=M(typeof globalThis=="object"&&globalThis)||M(typeof window=="object"&&window)||M(typeof self=="object"&&self)||M(typeof global=="object"&&global)||function(){return this}()||Function("return this")()});var b=a(function(ho,Lr){Lr.exports=function(r){try{return!!r()}catch(e){return!0}}});var w=a(function(So,Ur){var dn=b();Ur.exports=!dn(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})});var Kr=a(function(kr){"use strict";var Br={}.propertyIsEnumerable,$r=Object.getOwnPropertyDescriptor,gn=$r&&!Br.call({1:2},1);kr.f=gn?function(e){var t=$r(this,e);return!!t&&t.enumerable}:Br});var L=a(function(mo,Gr){Gr.exports=function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}}});var U=a(function(Po,Wr){var yn={}.toString;Wr.exports=function(r){return yn.call(r).slice(8,-1)}});var Hr=a(function(wo,Xr){var bn=b(),xn=U(),En="".split;Xr.exports=bn(function(){return!Object("z").propertyIsEnumerable(0)})?function(r){return xn(r)=="String"?En.call(r,""):Object(r)}:Object});var I=a(function(Io,zr){zr.exports=function(r){if(r==null)throw TypeError("Can't call method on "+r);return r}});var B=a(function(jo,Yr){var qn=Hr(),hn=I();Yr.exports=function(r){return qn(hn(r))}});var q=a(function(_o,Jr){Jr.exports=function(r){return typeof r=="object"?r!==null:typeof r=="function"}});var k=a(function(Ao,Zr){var $=q();Zr.exports=function(r,e){if(!$(r))return r;var t,n;if(e&&typeof(t=r.toString)=="function"&&!$(n=t.call(r))||typeof(t=r.valueOf)=="function"&&!$(n=t.call(r))||!e&&typeof(t=r.toString)=="function"&&!$(n=t.call(r)))return n;throw TypeError("Can't convert object to primitive value")}});var K=a(function(To,Qr){var Sn=I();Qr.exports=function(r){return Object(Sn(r))}});var h=a(function(Ro,Vr){var On=K(),mn={}.hasOwnProperty;Vr.exports=Object.hasOwn||function(e,t){return mn.call(On(e),t)}});var te=a(function(Do,ee){var Pn=g(),re=q(),lr=Pn.document,wn=re(lr)&&re(lr.createElement);ee.exports=function(r){return wn?lr.createElement(r):{}}});var ur=a(function(Fo,ne){var In=w(),jn=b(),_n=te();ne.exports=!In&&!jn(function(){return Object.defineProperty(_n("div"),"a",{get:function(){return 7}}).a!=7})});var cr=a(function(ie){var An=w(),Tn=Kr(),Rn=L(),Dn=B(),Fn=k(),Cn=h(),Nn=ur(),ae=Object.getOwnPropertyDescriptor;ie.f=An?ae:function(e,t){if(e=Dn(e),t=Fn(t,!0),Nn)try{return ae(e,t)}catch(n){}if(Cn(e,t))return Rn(!Tn.f.call(e,t),e[t])}});var j=a(function(No,oe){var Mn=q();oe.exports=function(r){if(!Mn(r))throw TypeError(String(r)+" is not an object");return r}});var G=a(function(ue){var Ln=w(),Un=ur(),se=j(),Bn=k(),le=Object.defineProperty;ue.f=Ln?le:function(e,t,n){if(se(e),t=Bn(t,!0),se(n),Un)try{return le(e,t,n)}catch(i){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}});var O=a(function(Lo,ce){var $n=w(),kn=G(),Kn=L();ce.exports=$n?function(r,e,t){return kn.f(r,e,Kn(1,t))}:function(r,e,t){return r[e]=t,r}});var W=a(function(Uo,ve){var fe=g(),Gn=O();ve.exports=function(r,e){try{Gn(fe,r,e)}catch(t){fe[r]=e}return e}});var X=a(function(Bo,de){var Wn=g(),Xn=W(),pe="__core-js_shared__",Hn=Wn[pe]||Xn(pe,{});de.exports=Hn});var vr=a(function($o,ge){var fr=X(),zn=Function.toString;typeof fr.inspectSource!="function"&&(fr.inspectSource=function(r){return zn.call(r)});ge.exports=fr.inspectSource});var xe=a(function(ko,be){var Yn=g(),Jn=vr(),ye=Yn.WeakMap;be.exports=typeof ye=="function"&&/native code/.test(Jn(ye))});var qe=a(function(Ko,Ee){Ee.exports=!1});var H=a(function(Go,Se){var Zn=qe(),he=X();(Se.exports=function(r,e){return he[r]||(he[r]=e!==void 0?e:{})})("versions",[]).push({version:"3.14.0",mode:Zn?"pure":"global",copyright:"\xA9 2021 Denis Pushkarev (zloirock.ru)"})});var pr=a(function(Wo,Oe){var Qn=0,Vn=Math.random();Oe.exports=function(r){return"Symbol("+String(r===void 0?"":r)+")_"+(++Qn+Vn).toString(36)}});var we=a(function(Xo,Pe){var ra=H(),ea=pr(),me=ra("keys");Pe.exports=function(r){return me[r]||(me[r]=ea(r))}});var dr=a(function(Ho,Ie){Ie.exports={}});var Re=a(function(zo,Te){var ta=xe(),na=g(),aa=q(),ia=O(),gr=h(),yr=X(),oa=we(),sa=dr(),je="Object already initialized",la=na.WeakMap,z,_,Y,ua=function(r){return Y(r)?_(r):z(r,{})},ca=function(r){return function(e){var t;if(!aa(e)||(t=_(e)).type!==r)throw TypeError("Incompatible receiver, "+r+" required");return t}};ta||yr.state?(E=yr.state||(yr.state=new la),_e=E.get,br=E.has,Ae=E.set,z=function(r,e){if(br.call(E,r))throw new TypeError(je);return e.facade=r,Ae.call(E,r,e),e},_=function(r){return _e.call(E,r)||{}},Y=function(r){return br.call(E,r)}):(S=oa("state"),sa[S]=!0,z=function(r,e){if(gr(r,S))throw new TypeError(je);return e.facade=r,ia(r,S,e),e},_=function(r){return gr(r,S)?r[S]:{}},Y=function(r){return gr(r,S)});var E,_e,br,Ae,S;Te.exports={set:z,get:_,has:Y,enforce:ua,getterFor:ca}});var xr=a(function(Yo,Ce){var fa=g(),De=O(),va=h(),pa=W(),da=vr(),Fe=Re(),ga=Fe.get,ya=Fe.enforce,ba=String(String).split("String");(Ce.exports=function(r,e,t,n){var i=n?!!n.unsafe:!1,o=n?!!n.enumerable:!1,s=n?!!n.noTargetGet:!1,u;if(typeof t=="function"&&(typeof e=="string"&&!va(t,"name")&&De(t,"name",e),u=ya(t),u.source||(u.source=ba.join(typeof e=="string"?e:""))),r===fa){o?r[e]=t:pa(e,t);return}else i?!s&&r[e]&&(o=!0):delete r[e];o?r[e]=t:De(r,e,t)})(Function.prototype,"toString",function(){return typeof this=="function"&&ga(this).source||da(this)})});var Me=a(function(Jo,Ne){var xa=g();Ne.exports=xa});var hr=a(function(Zo,Ue){var Er=Me(),qr=g(),Le=function(r){return typeof r=="function"?r:void 0};Ue.exports=function(r,e){return arguments.length<2?Le(Er[r])||Le(qr[r]):Er[r]&&Er[r][e]||qr[r]&&qr[r][e]}});var A=a(function(Qo,Be){var Ea=Math.ceil,qa=Math.floor;Be.exports=function(r){return isNaN(r=+r)?0:(r>0?qa:Ea)(r)}});var J=a(function(Vo,$e){var ha=A(),Sa=Math.min;$e.exports=function(r){return r>0?Sa(ha(r),9007199254740991):0}});var Ke=a(function(rs,ke){var Oa=A(),ma=Math.max,Pa=Math.min;ke.exports=function(r,e){var t=Oa(r);return t<0?ma(t+e,0):Pa(t,e)}});var Xe=a(function(es,We){var wa=B(),Ia=J(),ja=Ke(),Ge=function(r){return function(e,t,n){var i=wa(e),o=Ia(i.length),s=ja(n,o),u;if(r&&t!=t){for(;o>s;)if(u=i[s++],u!=u)return!0}else for(;o>s;s++)if((r||s in i)&&i[s]===t)return r||s||0;return!r&&-1}};We.exports={includes:Ge(!0),indexOf:Ge(!1)}});var ze=a(function(ts,He){var Sr=h(),_a=B(),Aa=Xe().indexOf,Ta=dr();He.exports=function(r,e){var t=_a(r),n=0,i=[],o;for(o in t)!Sr(Ta,o)&&Sr(t,o)&&i.push(o);for(;e.length>n;)Sr(t,o=e[n++])&&(~Aa(i,o)||i.push(o));return i}});var Je=a(function(ns,Ye){Ye.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Qe=a(function(Ze){var Ra=ze(),Da=Je(),Fa=Da.concat("length","prototype");Ze.f=Object.getOwnPropertyNames||function(e){return Ra(e,Fa)}});var rt=a(function(Ve){Ve.f=Object.getOwnPropertySymbols});var tt=a(function(os,et){var Ca=hr(),Na=Qe(),Ma=rt(),La=j();et.exports=Ca("Reflect","ownKeys")||function(e){var t=Na.f(La(e)),n=Ma.f;return n?t.concat(n(e)):t}});var at=a(function(ss,nt){var Ua=h(),Ba=tt(),$a=cr(),ka=G();nt.exports=function(r,e){for(var t=Ba(e),n=ka.f,i=$a.f,o=0;o<t.length;o++){var s=t[o];Ua(r,s)||n(r,s,i(e,s))}}});var ot=a(function(ls,it){var Ka=b(),Ga=/#|\.prototype\./,T=function(r,e){var t=Xa[Wa(r)];return t==za?!0:t==Ha?!1:typeof e=="function"?Ka(e):!!e},Wa=T.normalize=function(r){return String(r).replace(Ga,".").toLowerCase()},Xa=T.data={},Ha=T.NATIVE="N",za=T.POLYFILL="P";it.exports=T});var mr=a(function(us,st){var Or=g(),Ya=cr().f,Ja=O(),Za=xr(),Qa=W(),Va=at(),ri=ot();st.exports=function(r,e){var t=r.target,n=r.global,i=r.stat,o,s,u,l,f,v;if(n?s=Or:i?s=Or[t]||Qa(t,{}):s=(Or[t]||{}).prototype,s)for(u in e){if(f=e[u],r.noTargetGet?(v=Ya(s,u),l=v&&v.value):l=s[u],o=ri(n?u:t+(i?".":"#")+u,r.forced),!o&&l!==void 0){if(typeof f==typeof l)continue;Va(f,l)}(r.sham||l&&l.sham)&&Ja(f,"sham",!0),Za(s,u,f,r)}}});var ut=a(function(cs,lt){"use strict";var ei=j();lt.exports=function(){var r=ei(this),e="";return r.global&&(e+="g"),r.ignoreCase&&(e+="i"),r.multiline&&(e+="m"),r.dotAll&&(e+="s"),r.unicode&&(e+="u"),r.sticky&&(e+="y"),e}});var vt=a(function(Pr){"use strict";var ct=b();function ft(r,e){return RegExp(r,e)}Pr.UNSUPPORTED_Y=ct(function(){var r=ft("a","y");return r.lastIndex=2,r.exec("abcd")!=null});Pr.BROKEN_CARET=ct(function(){var r=ft("^r","gy");return r.lastIndex=2,r.exec("str")!=null})});var Q=a(function(vs,yt){"use strict";var ti=ut(),pt=vt(),ni=H(),Z=RegExp.prototype.exec,ai=ni("native-string-replace",String.prototype.replace),dt=Z,wr=function(){var r=/a/,e=/b*/g;return Z.call(r,"a"),Z.call(e,"a"),r.lastIndex!==0||e.lastIndex!==0}(),gt=pt.UNSUPPORTED_Y||pt.BROKEN_CARET,Ir=/()??/.exec("")[1]!==void 0,ii=wr||Ir||gt;ii&&(dt=function(e){var t=this,n,i,o,s,u=gt&&t.sticky,l=ti.call(t),f=t.source,v=0,c=e;return u&&(l=l.replace("y",""),l.indexOf("g")===-1&&(l+="g"),c=String(e).slice(t.lastIndex),t.lastIndex>0&&(!t.multiline||t.multiline&&e[t.lastIndex-1]!=="\n")&&(f="(?: "+f+")",c=" "+c,v++),i=new RegExp("^(?:"+f+")",l)),Ir&&(i=new RegExp("^"+f+"$(?!\\s)",l)),wr&&(n=t.lastIndex),o=Z.call(u?i:t,c),u?o?(o.input=o.input.slice(v),o[0]=o[0].slice(v),o.index=t.lastIndex,t.lastIndex+=o[0].length):t.lastIndex=0:wr&&o&&(t.lastIndex=t.global?o.index+o[0].length:n),Ir&&o&&o.length>1&&ai.call(o[0],i,function(){for(s=1;s<arguments.length-2;s++)arguments[s]===void 0&&(o[s]=void 0)}),o});yt.exports=dt});var jr=a(function(){"use strict";var oi=mr(),bt=Q();oi({target:"RegExp",proto:!0,forced:/./.exec!==bt},{exec:bt})});var Et=a(function(gs,xt){var si=hr();xt.exports=si("navigator","userAgent")||""});var rr=a(function(ys,Ot){var li=g(),_r=Et(),qt=li.process,ht=qt&&qt.versions,St=ht&&ht.v8,x,V;St?(x=St.split("."),V=x[0]<4?1:x[0]+x[1]):_r&&(x=_r.match(/Edge\/(\d+)/),(!x||x[1]>=74)&&(x=_r.match(/Chrome\/(\d+)/),x&&(V=x[1])));Ot.exports=V&&+V});var Ar=a(function(bs,Pt){var mt=rr(),ui=b();Pt.exports=!!Object.getOwnPropertySymbols&&!ui(function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&mt&&mt<41})});var It=a(function(xs,wt){var ci=Ar();wt.exports=ci&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var F=a(function(Es,At){var fi=g(),vi=H(),jt=h(),pi=pr(),_t=Ar(),di=It(),R=vi("wks"),D=fi.Symbol,gi=di?D:D&&D.withoutSetter||pi;At.exports=function(r){return(!jt(R,r)||!(_t||typeof R[r]=="string"))&&(_t&&jt(D,r)?R[r]=D[r]:R[r]=gi("Symbol."+r)),R[r]}});var Nt=a(function(qs,Ct){"use strict";jr();var Tt=xr(),yi=Q(),er=b(),Tr=F(),bi=O(),xi=Tr("species"),Rr=RegExp.prototype,Ei=!er(function(){var r=/./;return r.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(r,"$<a>")!=="7"}),Rt=function(){return"a".replace(/./,"$0")==="$0"}(),Dt=Tr("replace"),Ft=function(){return/./[Dt]?/./[Dt]("a","$0")==="":!1}(),qi=!er(function(){var r=/(?:)/,e=r.exec;r.exec=function(){return e.apply(this,arguments)};var t="ab".split(r);return t.length!==2||t[0]!=="a"||t[1]!=="b"});Ct.exports=function(r,e,t,n){var i=Tr(r),o=!er(function(){var c={};return c[i]=function(){return 7},""[r](c)!=7}),s=o&&!er(function(){var c=!1,p=/a/;return r==="split"&&(p={},p.constructor={},p.constructor[xi]=function(){return p},p.flags="",p[i]=/./[i]),p.exec=function(){return c=!0,null},p[i](""),!c});if(!o||!s||r==="replace"&&!(Ei&&Rt&&!Ft)||r==="split"&&!qi){var u=/./[i],l=t(i,""[r],function(c,p,y,C,m){var d=p.exec;return d===yi||d===Rr.exec?o&&!m?{done:!0,value:u.call(p,y,C)}:{done:!0,value:c.call(y,p,C)}:{done:!1}},{REPLACE_KEEPS_$0:Rt,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Ft}),f=l[0],v=l[1];Tt(String.prototype,r,f),Tt(Rr,i,e==2?function(c,p){return v.call(c,this,p)}:function(c){return v.call(c,this)})}n&&bi(Rr[i],"sham",!0)}});var Ut=a(function(hs,Lt){var hi=A(),Si=I(),Mt=function(r){return function(e,t){var n=String(Si(e)),i=hi(t),o=n.length,s,u;return i<0||i>=o?r?"":void 0:(s=n.charCodeAt(i),s<55296||s>56319||i+1===o||(u=n.charCodeAt(i+1))<56320||u>57343?r?n.charAt(i):s:r?n.slice(i,i+2):(s-55296<<10)+(u-56320)+65536)}};Lt.exports={codeAt:Mt(!1),charAt:Mt(!0)}});var $t=a(function(Ss,Bt){"use strict";var Oi=Ut().charAt;Bt.exports=function(r,e,t){return e+(t?Oi(r,e).length:1)}});var Kt=a(function(Os,kt){var mi=K(),Pi=Math.floor,wi="".replace,Ii=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,ji=/\$([$&'`]|\d{1,2})/g;kt.exports=function(r,e,t,n,i,o){var s=t+r.length,u=n.length,l=ji;return i!==void 0&&(i=mi(i),l=Ii),wi.call(o,l,function(f,v){var c;switch(v.charAt(0)){case"$":return"$";case"&":return r;case"`":return e.slice(0,t);case"'":return e.slice(s);case"<":c=i[v.slice(1,-1)];break;default:var p=+v;if(p===0)return f;if(p>u){var y=Pi(p/10);return y===0?f:y<=u?n[y-1]===void 0?v.charAt(1):n[y-1]+v.charAt(1):f}c=n[p-1]}return c===void 0?"":c})}});var Wt=a(function(ms,Gt){var _i=U(),Ai=Q();Gt.exports=function(r,e){var t=r.exec;if(typeof t=="function"){var n=t.call(r,e);if(typeof n!="object")throw TypeError("RegExp exec method returned something other than an Object or null");return n}if(_i(r)!=="RegExp")throw TypeError("RegExp#exec called on incompatible receiver");return Ai.call(r,e)}});var Dr=a(function(ws,Xt){var ki=U();Xt.exports=Array.isArray||function(e){return ki(e)=="Array"}});var zt=a(function(Is,Ht){"use strict";var Ki=k(),Gi=G(),Wi=L();Ht.exports=function(r,e,t){var n=Ki(e);n in r?Gi.f(r,n,Wi(0,t)):r[n]=t}});var Zt=a(function(js,Jt){var Xi=q(),Yt=Dr(),Hi=F(),zi=Hi("species");Jt.exports=function(r,e){var t;return Yt(r)&&(t=r.constructor,typeof t=="function"&&(t===Array||Yt(t.prototype))?t=void 0:Xi(t)&&(t=t[zi],t===null&&(t=void 0))),new(t===void 0?Array:t)(e===0?0:e)}});var Vt=a(function(_s,Qt){var Yi=b(),Ji=F(),Zi=rr(),Qi=Ji("species");Qt.exports=function(r){return Zi>=51||!Yi(function(){var e=[],t=e.constructor={};return t[Qi]=function(){return{foo:1}},e[r](Boolean).foo!==1})}});var Ts=pn(jr());"use strict";var Ti=Nt(),Ri=j(),Di=J(),Fi=A(),Ci=I(),Ni=$t(),Mi=Kt(),Li=Wt(),Ui=Math.max,Bi=Math.min,$i=function(r){return r===void 0?r:String(r)};Ti("replace",2,function(r,e,t,n){var i=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,o=n.REPLACE_KEEPS_$0,s=i?"$":"$0";return[function(l,f){var v=Ci(this),c=l==null?void 0:l[r];return c!==void 0?c.call(l,v,f):e.call(String(v),l,f)},function(u,l){if(!i&&o||typeof l=="string"&&l.indexOf(s)===-1){var f=t(e,u,this,l);if(f.done)return f.value}var v=Ri(u),c=String(this),p=typeof l=="function";p||(l=String(l));var y=v.global;if(y){var C=v.unicode;v.lastIndex=0}for(var m=[];;){var d=Li(v,c);if(d===null||(m.push(d),!y))break;var an=String(d[0]);an===""&&(v.lastIndex=Ni(c,Di(v.lastIndex),C))}for(var Fr="",N=0,tr=0;tr<m.length;tr++){d=m[tr];for(var nr=String(d[0]),P=Ui(Bi(Fi(d.index),c.length),0),ar=[],ir=1;ir<d.length;ir++)ar.push($i(d[ir]));var or=d.groups;if(p){var Cr=[nr].concat(ar,P,c);or!==void 0&&Cr.push(or);var Nr=String(l.apply(void 0,Cr))}else Nr=Mi(nr,c,P,ar,or,l);P>=N&&(Fr+=c.slice(N,P)+Nr,N=P+nr.length)}return Fr+c.slice(N)}]});"use strict";var Vi=mr(),ro=b(),eo=Dr(),to=q(),no=K(),ao=J(),rn=zt(),io=Zt(),oo=Vt(),so=F(),lo=rr(),en=so("isConcatSpreadable"),tn=9007199254740991,nn="Maximum allowed index exceeded",uo=lo>=51||!ro(function(){var r=[];return r[en]=!1,r.concat()[0]!==r}),co=oo("concat"),fo=function(r){if(!to(r))return!1;var e=r[en];return e!==void 0?!!e:eo(r)},vo=!uo||!co;Vi({target:"Array",proto:!0,forced:vo},{concat:function(e){var t=no(this),n=io(t,0),i=0,o,s,u,l,f;for(o=-1,u=arguments.length;o<u;o++)if(f=o===-1?t:arguments[o],fo(f)){if(l=ao(f.length),i+l>tn)throw TypeError(nn);for(s=0;s<l;s++,i++)s in f&&rn(n,i,f[s])}else{if(i>=tn)throw TypeError(nn);rn(n,i++,f)}return n.length=i,n}});var po=window.location.protocol==="https:"?"wss:":"ws:",go=window.location.pathname.replace(/\/?$/,"/")+"autoreload/",yo="".concat(po,"//").concat(window.location.host).concat(go),bo=document.currentScript.dataset.wsUrl||yo,xo=new WebSocket(bo);xo.onmessage=function(r){r.data==="autoreload"&&window.location.reload()};})();
//# sourceMappingURL=shiny-autoreload.js.map
