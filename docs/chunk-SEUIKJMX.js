import{a as Mt}from"./improved-funicular/chunk-J6IYU4RD.js";import{a as Ut}from"./improved-funicular/chunk-PJJ6KJUE.js";import{b as Vt}from"./improved-funicular/chunk-OEISHAR4.js";import{e as Bt,m as Gt}from"./improved-funicular/chunk-U2BKPXLL.js";import{O as B,T as Rt,U as Nt,V as wt,W as $t,X as Pt,Y as Ft,Z as Yt,_ as w,h as f,j as m}from"./improved-funicular/chunk-KEUU4GSS.js";import{g as Ot}from"./improved-funicular/chunk-7IQ7MVDA.js";var vt=function(){var t=f(function(Y,l,u,o){for(u=u||{},o=Y.length;o--;u[Y[o]]=l);return u},"o"),a=[1,2],_=[1,3],e=[1,4],s=[2,4],d=[1,9],r=[1,11],h=[1,16],n=[1,17],E=[1,18],x=[1,19],g=[1,33],T=[1,20],k=[1,21],p=[1,22],v=[1,23],R=[1,24],L=[1,26],$=[1,27],I=[1,28],P=[1,29],et=[1,30],st=[1,31],it=[1,32],rt=[1,35],at=[1,36],nt=[1,37],ot=[1,38],j=[1,34],S=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],lt=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,39,40,41,45,48,51,52,53,54,57],xt=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],gt={trace:f(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,CLICK:38,STRING:39,HREF:40,classDef:41,CLASSDEF_ID:42,CLASSDEF_STYLEOPTS:43,DEFAULT:44,style:45,STYLE_IDS:46,STYLEDEF_STYLEOPTS:47,class:48,CLASSENTITY_IDS:49,STYLECLASS:50,direction_tb:51,direction_bt:52,direction_rl:53,direction_lr:54,eol:55,";":56,EDGE_STATE:57,STYLE_SEPARATOR:58,left_of:59,right_of:60,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"CLICK",39:"STRING",40:"HREF",41:"classDef",42:"CLASSDEF_ID",43:"CLASSDEF_STYLEOPTS",44:"DEFAULT",45:"style",46:"STYLE_IDS",47:"STYLEDEF_STYLEOPTS",48:"class",49:"CLASSENTITY_IDS",50:"STYLECLASS",51:"direction_tb",52:"direction_bt",53:"direction_rl",54:"direction_lr",56:";",57:"EDGE_STATE",58:"STYLE_SEPARATOR",59:"left_of",60:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[9,5],[9,5],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[55,1],[55,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:f(function(l,u,o,y,b,i,X){var c=i.length-1;switch(b){case 3:return y.setRootDoc(i[c]),i[c];break;case 4:this.$=[];break;case 5:i[c]!="nl"&&(i[c-1].push(i[c]),this.$=i[c-1]);break;case 6:case 7:this.$=i[c];break;case 8:this.$="nl";break;case 12:this.$=i[c];break;case 13:let ht=i[c-1];ht.description=y.trimColon(i[c]),this.$=ht;break;case 14:this.$={stmt:"relation",state1:i[c-2],state2:i[c]};break;case 15:let ut=y.trimColon(i[c]);this.$={stmt:"relation",state1:i[c-3],state2:i[c-1],description:ut};break;case 19:this.$={stmt:"state",id:i[c-3],type:"default",description:"",doc:i[c-1]};break;case 20:var V=i[c],H=i[c-2].trim();if(i[c].match(":")){var J=i[c].split(":");V=J[0],H=[H,J[1]]}this.$={stmt:"state",id:V,type:"default",description:H};break;case 21:this.$={stmt:"state",id:i[c-3],type:"default",description:i[c-5],doc:i[c-1]};break;case 22:this.$={stmt:"state",id:i[c],type:"fork"};break;case 23:this.$={stmt:"state",id:i[c],type:"join"};break;case 24:this.$={stmt:"state",id:i[c],type:"choice"};break;case 25:this.$={stmt:"state",id:y.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:i[c-1].trim(),note:{position:i[c-2].trim(),text:i[c].trim()}};break;case 29:this.$=i[c].trim(),y.setAccTitle(this.$);break;case 30:case 31:this.$=i[c].trim(),y.setAccDescription(this.$);break;case 32:this.$={stmt:"click",id:i[c-3],url:i[c-2],tooltip:i[c-1]};break;case 33:this.$={stmt:"click",id:i[c-3],url:i[c-1],tooltip:""};break;case 34:case 35:this.$={stmt:"classDef",id:i[c-1].trim(),classes:i[c].trim()};break;case 36:this.$={stmt:"style",id:i[c-1].trim(),styleClass:i[c].trim()};break;case 37:this.$={stmt:"applyClass",id:i[c-1].trim(),styleClass:i[c].trim()};break;case 38:y.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:y.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:y.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:y.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:i[c].trim(),type:"default",description:""};break;case 46:this.$={stmt:"state",id:i[c-2].trim(),classes:[i[c].trim()],type:"default",description:""};break;case 47:this.$={stmt:"state",id:i[c-2].trim(),classes:[i[c].trim()],type:"default",description:""};break}},"anonymous"),table:[{3:1,4:a,5:_,6:e},{1:[3]},{3:5,4:a,5:_,6:e},{3:6,4:a,5:_,6:e},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],s,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:d,5:r,8:8,9:10,10:12,11:13,12:14,13:15,16:h,17:n,19:E,22:x,24:g,25:T,26:k,27:p,28:v,29:R,32:25,33:L,35:$,37:I,38:P,41:et,45:st,48:it,51:rt,52:at,53:nt,54:ot,57:j},t(S,[2,5]),{9:39,10:12,11:13,12:14,13:15,16:h,17:n,19:E,22:x,24:g,25:T,26:k,27:p,28:v,29:R,32:25,33:L,35:$,37:I,38:P,41:et,45:st,48:it,51:rt,52:at,53:nt,54:ot,57:j},t(S,[2,7]),t(S,[2,8]),t(S,[2,9]),t(S,[2,10]),t(S,[2,11]),t(S,[2,12],{14:[1,40],15:[1,41]}),t(S,[2,16]),{18:[1,42]},t(S,[2,18],{20:[1,43]}),{23:[1,44]},t(S,[2,22]),t(S,[2,23]),t(S,[2,24]),t(S,[2,25]),{30:45,31:[1,46],59:[1,47],60:[1,48]},t(S,[2,28]),{34:[1,49]},{36:[1,50]},t(S,[2,31]),{13:51,24:g,57:j},{42:[1,52],44:[1,53]},{46:[1,54]},{49:[1,55]},t(lt,[2,44],{58:[1,56]}),t(lt,[2,45],{58:[1,57]}),t(S,[2,38]),t(S,[2,39]),t(S,[2,40]),t(S,[2,41]),t(S,[2,6]),t(S,[2,13]),{13:58,24:g,57:j},t(S,[2,17]),t(xt,s,{7:59}),{24:[1,60]},{24:[1,61]},{23:[1,62]},{24:[2,48]},{24:[2,49]},t(S,[2,29]),t(S,[2,30]),{39:[1,63],40:[1,64]},{43:[1,65]},{43:[1,66]},{47:[1,67]},{50:[1,68]},{24:[1,69]},{24:[1,70]},t(S,[2,14],{14:[1,71]}),{4:d,5:r,8:8,9:10,10:12,11:13,12:14,13:15,16:h,17:n,19:E,21:[1,72],22:x,24:g,25:T,26:k,27:p,28:v,29:R,32:25,33:L,35:$,37:I,38:P,41:et,45:st,48:it,51:rt,52:at,53:nt,54:ot,57:j},t(S,[2,20],{20:[1,73]}),{31:[1,74]},{24:[1,75]},{39:[1,76]},{39:[1,77]},t(S,[2,34]),t(S,[2,35]),t(S,[2,36]),t(S,[2,37]),t(lt,[2,46]),t(lt,[2,47]),t(S,[2,15]),t(S,[2,19]),t(xt,s,{7:78}),t(S,[2,26]),t(S,[2,27]),{5:[1,79]},{5:[1,80]},{4:d,5:r,8:8,9:10,10:12,11:13,12:14,13:15,16:h,17:n,19:E,21:[1,81],22:x,24:g,25:T,26:k,27:p,28:v,29:R,32:25,33:L,35:$,37:I,38:P,41:et,45:st,48:it,51:rt,52:at,53:nt,54:ot,57:j},t(S,[2,32]),t(S,[2,33]),t(S,[2,21])],defaultActions:{5:[2,1],6:[2,2],47:[2,48],48:[2,49]},parseError:f(function(l,u){if(u.recoverable)this.trace(l);else{var o=new Error(l);throw o.hash=u,o}},"parseError"),parse:f(function(l){var u=this,o=[0],y=[],b=[null],i=[],X=this.table,c="",V=0,H=0,J=0,ht=2,ut=1,ue=i.slice.call(arguments,1),D=Object.create(this.lexer),M={yy:{}};for(var Tt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Tt)&&(M.yy[Tt]=this.yy[Tt]);D.setInput(l,M.yy),M.yy.lexer=D,M.yy.parser=this,typeof D.yylloc>"u"&&(D.yylloc={});var Et=D.yylloc;i.push(Et);var de=D.options&&D.options.ranges;typeof M.yy.parseError=="function"?this.parseError=M.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function fe(O){o.length=o.length-2*O,b.length=b.length-O,i.length=i.length-O}f(fe,"popStack");function Lt(){var O;return O=y.pop()||D.lex()||ut,typeof O!="number"&&(O instanceof Array&&(y=O,O=y.pop()),O=u.symbols_[O]||O),O}f(Lt,"lex");for(var C,bt,U,N,Be,_t,W={},dt,F,It,ft;;){if(U=o[o.length-1],this.defaultActions[U]?N=this.defaultActions[U]:((C===null||typeof C>"u")&&(C=Lt()),N=X[U]&&X[U][C]),typeof N>"u"||!N.length||!N[0]){var kt="";ft=[];for(dt in X[U])this.terminals_[dt]&&dt>ht&&ft.push("'"+this.terminals_[dt]+"'");D.showPosition?kt="Parse error on line "+(V+1)+`:
`+D.showPosition()+`
Expecting `+ft.join(", ")+", got '"+(this.terminals_[C]||C)+"'":kt="Parse error on line "+(V+1)+": Unexpected "+(C==ut?"end of input":"'"+(this.terminals_[C]||C)+"'"),this.parseError(kt,{text:D.match,token:this.terminals_[C]||C,line:D.yylineno,loc:Et,expected:ft})}if(N[0]instanceof Array&&N.length>1)throw new Error("Parse Error: multiple actions possible at state: "+U+", token: "+C);switch(N[0]){case 1:o.push(C),b.push(D.yytext),i.push(D.yylloc),o.push(N[1]),C=null,bt?(C=bt,bt=null):(H=D.yyleng,c=D.yytext,V=D.yylineno,Et=D.yylloc,J>0&&J--);break;case 2:if(F=this.productions_[N[1]][1],W.$=b[b.length-F],W._$={first_line:i[i.length-(F||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(F||1)].first_column,last_column:i[i.length-1].last_column},de&&(W._$.range=[i[i.length-(F||1)].range[0],i[i.length-1].range[1]]),_t=this.performAction.apply(W,[c,H,V,M.yy,N[1],b,i].concat(ue)),typeof _t<"u")return _t;F&&(o=o.slice(0,-1*F*2),b=b.slice(0,-1*F),i=i.slice(0,-1*F)),o.push(this.productions_[N[1]][0]),b.push(W.$),i.push(W._$),It=X[o[o.length-2]][o[o.length-1]],o.push(It);break;case 3:return!0}}return!0},"parse")},he=function(){var Y={EOF:1,parseError:f(function(u,o){if(this.yy.parser)this.yy.parser.parseError(u,o);else throw new Error(u)},"parseError"),setInput:f(function(l,u){return this.yy=u||this.yy||{},this._input=l,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:f(function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var u=l.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},"input"),unput:f(function(l){var u=l.length,o=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var y=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);var b=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===y.length?this.yylloc.first_column:0)+y[y.length-o.length].length-o[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[b[0],b[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},"unput"),more:f(function(){return this._more=!0,this},"more"),reject:f(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:f(function(l){this.unput(this.match.slice(l))},"less"),pastInput:f(function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:f(function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:f(function(){var l=this.pastInput(),u=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+u+"^"},"showPosition"),test_match:f(function(l,u){var o,y,b;if(this.options.backtrack_lexer&&(b={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(b.yylloc.range=this.yylloc.range.slice(0))),y=l[0].match(/(?:\r\n?|\n).*/g),y&&(this.yylineno+=y.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:y?y[y.length-1].length-y[y.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+l[0].length},this.yytext+=l[0],this.match+=l[0],this.matches=l,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(l[0].length),this.matched+=l[0],o=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),o)return o;if(this._backtrack){for(var i in b)this[i]=b[i];return!1}return!1},"test_match"),next:f(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,u,o,y;this._more||(this.yytext="",this.match="");for(var b=this._currentRules(),i=0;i<b.length;i++)if(o=this._input.match(this.rules[b[i]]),o&&(!u||o[0].length>u[0].length)){if(u=o,y=i,this.options.backtrack_lexer){if(l=this.test_match(o,b[i]),l!==!1)return l;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(l=this.test_match(u,b[y]),l!==!1?l:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:f(function(){var u=this.next();return u||this.lex()},"lex"),begin:f(function(u){this.conditionStack.push(u)},"begin"),popState:f(function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:f(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:f(function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},"topState"),pushState:f(function(u){this.begin(u)},"pushState"),stateStackSize:f(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:f(function(u,o,y,b){var i=b;switch(y){case 0:return 38;case 1:return 40;case 2:return 39;case 3:return 44;case 4:return 51;case 5:return 52;case 6:return 53;case 7:return 54;case 8:break;case 9:break;case 10:return 5;case 11:break;case 12:break;case 13:break;case 14:break;case 15:return this.pushState("SCALE"),17;break;case 16:return 18;case 17:this.popState();break;case 18:return this.begin("acc_title"),33;break;case 19:return this.popState(),"acc_title_value";break;case 20:return this.begin("acc_descr"),35;break;case 21:return this.popState(),"acc_descr_value";break;case 22:this.begin("acc_descr_multiline");break;case 23:this.popState();break;case 24:return"acc_descr_multiline_value";case 25:return this.pushState("CLASSDEF"),41;break;case 26:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";break;case 27:return this.popState(),this.pushState("CLASSDEFID"),42;break;case 28:return this.popState(),43;break;case 29:return this.pushState("CLASS"),48;break;case 30:return this.popState(),this.pushState("CLASS_STYLE"),49;break;case 31:return this.popState(),50;break;case 32:return this.pushState("STYLE"),45;break;case 33:return this.popState(),this.pushState("STYLEDEF_STYLES"),46;break;case 34:return this.popState(),47;break;case 35:return this.pushState("SCALE"),17;break;case 36:return 18;case 37:this.popState();break;case 38:this.pushState("STATE");break;case 39:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),25;break;case 40:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),26;break;case 41:return this.popState(),o.yytext=o.yytext.slice(0,-10).trim(),27;break;case 42:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),25;break;case 43:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),26;break;case 44:return this.popState(),o.yytext=o.yytext.slice(0,-10).trim(),27;break;case 45:return 51;case 46:return 52;case 47:return 53;case 48:return 54;case 49:this.pushState("STATE_STRING");break;case 50:return this.pushState("STATE_ID"),"AS";break;case 51:return this.popState(),"ID";break;case 52:this.popState();break;case 53:return"STATE_DESCR";case 54:return 19;case 55:this.popState();break;case 56:return this.popState(),this.pushState("struct"),20;break;case 57:break;case 58:return this.popState(),21;break;case 59:break;case 60:return this.begin("NOTE"),29;break;case 61:return this.popState(),this.pushState("NOTE_ID"),59;break;case 62:return this.popState(),this.pushState("NOTE_ID"),60;break;case 63:this.popState(),this.pushState("FLOATING_NOTE");break;case 64:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";break;case 65:break;case 66:return"NOTE_TEXT";case 67:return this.popState(),"ID";break;case 68:return this.popState(),this.pushState("NOTE_TEXT"),24;break;case 69:return this.popState(),o.yytext=o.yytext.substr(2).trim(),31;break;case 70:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),31;break;case 71:return 6;case 72:return 6;case 73:return 16;case 74:return 57;case 75:return 24;case 76:return o.yytext=o.yytext.trim(),14;break;case 77:return 15;case 78:return 28;case 79:return 58;case 80:return 5;case 81:return"INVALID"}},"anonymous"),rules:[/^(?:click\b)/i,/^(?:href\b)/i,/^(?:"[^"]*")/i,/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[12,13],inclusive:!1},struct:{rules:[12,13,25,29,32,38,45,46,47,48,57,58,59,60,74,75,76,77,78],inclusive:!1},FLOATING_NOTE_ID:{rules:[67],inclusive:!1},FLOATING_NOTE:{rules:[64,65,66],inclusive:!1},NOTE_TEXT:{rules:[69,70],inclusive:!1},NOTE_ID:{rules:[68],inclusive:!1},NOTE:{rules:[61,62,63],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[34],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[33],inclusive:!1},CLASS_STYLE:{rules:[31],inclusive:!1},CLASS:{rules:[30],inclusive:!1},CLASSDEFID:{rules:[28],inclusive:!1},CLASSDEF:{rules:[26,27],inclusive:!1},acc_descr_multiline:{rules:[23,24],inclusive:!1},acc_descr:{rules:[21],inclusive:!1},acc_title:{rules:[19],inclusive:!1},SCALE:{rules:[16,17,36,37],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[51],inclusive:!1},STATE_STRING:{rules:[52,53],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[12,13,39,40,41,42,43,44,49,50,54,55,56],inclusive:!1},ID:{rules:[12,13],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,18,20,22,25,29,32,35,38,56,60,71,72,73,74,75,76,77,79,80,81],inclusive:!0}}};return Y}();gt.lexer=he;function ct(){this.yy={}}return f(ct,"Parser"),ct.prototype=gt,gt.Parser=ct,new ct}();vt.parser=vt;var He=vt,pe="TB",qt="TB",jt="dir",K="state",z="root",Ct="relation",Se="classDef",ye="style",ge="applyClass",Z="default",Qt="divider",Zt="fill:none",te="fill: #333",ee="c",se="text",ie="normal",mt="rect",Dt="rectWithTitle",Te="stateStart",Ee="stateEnd",Ht="divider",Wt="roundedWithTitle",be="note",_e="noteGroup",tt="statediagram",ke="state",me=`${tt}-${ke}`,re="transition",De="note",ve="note-edge",Ce=`${re} ${ve}`,Ae=`${tt}-${De}`,xe="cluster",Le=`${tt}-${xe}`,Ie="cluster-alt",Oe=`${tt}-${Ie}`,ae="parent",ne="note",Re="state",At="----",Ne=`${At}${ne}`,zt=`${At}${ae}`,oe=f((t,a=qt)=>{if(!t.doc)return a;let _=a;for(let e of t.doc)e.stmt==="dir"&&(_=e.value);return _},"getDir"),we=f(function(t,a){return a.db.getClasses()},"getClasses"),$e=f(function(t,a,_,e){return Ot(this,null,function*(){m.info("REF0:"),m.info("Drawing state diagram (v2)",a);let{securityLevel:s,state:d,layout:r}=w();e.db.extract(e.db.getRootDocV2());let h=e.db.getData(),n=Mt(a,s);h.type=e.type,h.layoutAlgorithm=r,h.nodeSpacing=d?.nodeSpacing||50,h.rankSpacing=d?.rankSpacing||50,h.markers=["barb"],h.diagramId=a,yield Vt(h,n);let E=8;try{(typeof e.db.getLinks=="function"?e.db.getLinks():new Map).forEach((g,T)=>{let k=typeof T=="string"?T:typeof T?.id=="string"?T.id:"";if(!k){m.warn("\u26A0\uFE0F Invalid or missing stateId from key:",JSON.stringify(T));return}let p=n.node()?.querySelectorAll("g"),v;if(p?.forEach(I=>{I.textContent?.trim()===k&&(v=I)}),!v){m.warn("\u26A0\uFE0F Could not find node matching text:",k);return}let R=v.parentNode;if(!R){m.warn("\u26A0\uFE0F Node has no parent, cannot wrap:",k);return}let L=document.createElementNS("http://www.w3.org/2000/svg","a"),$=g.url.replace(/^"+|"+$/g,"");if(L.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",$),L.setAttribute("target","_blank"),g.tooltip){let I=g.tooltip.replace(/^"+|"+$/g,"");L.setAttribute("title",I)}R.replaceChild(L,v),L.appendChild(v),m.info("\u{1F517} Wrapped node in <a> tag for:",k,g.url)})}catch(x){m.error("\u274C Error injecting clickable links:",x)}Gt.insertTitle(n,"statediagramTitleText",d?.titleTopMargin??25,e.db.getDiagramTitle()),Ut(n,E,tt,d?.useMaxWidth??!0)})},"draw"),We={getClasses:we,draw:$e,getDir:oe},St=new Map,G=0;function yt(t="",a=0,_="",e=At){let s=_!==null&&_.length>0?`${e}${_}`:"";return`${Re}-${t}${s}-${a}`}f(yt,"stateDomId");var Pe=f((t,a,_,e,s,d,r,h)=>{m.trace("items",a),a.forEach(n=>{switch(n.stmt){case K:Q(t,n,_,e,s,d,r,h);break;case Z:Q(t,n,_,e,s,d,r,h);break;case Ct:{Q(t,n.state1,_,e,s,d,r,h),Q(t,n.state2,_,e,s,d,r,h);let E={id:"edge"+G,start:n.state1.id,end:n.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:Zt,labelStyle:"",label:B.sanitizeText(n.description??"",w()),arrowheadStyle:te,labelpos:ee,labelType:se,thickness:ie,classes:re,look:r};s.push(E),G++}break}})},"setupDoc"),Kt=f((t,a=qt)=>{let _=a;if(t.doc)for(let e of t.doc)e.stmt==="dir"&&(_=e.value);return _},"getDir");function q(t,a,_){if(!a.id||a.id==="</join></fork>"||a.id==="</choice>")return;a.cssClasses&&(Array.isArray(a.cssCompiledStyles)||(a.cssCompiledStyles=[]),a.cssClasses.split(" ").forEach(s=>{let d=_.get(s);d&&(a.cssCompiledStyles=[...a.cssCompiledStyles??[],...d.styles])}));let e=t.find(s=>s.id===a.id);e?Object.assign(e,a):t.push(a)}f(q,"insertOrUpdateNode");function le(t){return t?.classes?.join(" ")??""}f(le,"getClassesFromDbInfo");function ce(t){return t?.styles??[]}f(ce,"getStylesFromDbInfo");var Q=f((t,a,_,e,s,d,r,h)=>{let n=a.id,E=_.get(n),x=le(E),g=ce(E),T=w();if(m.info("dataFetcher parsedItem",a,E,g),n!=="root"){let k=mt;a.start===!0?k=Te:a.start===!1&&(k=Ee),a.type!==Z&&(k=a.type),St.get(n)||St.set(n,{id:n,shape:k,description:B.sanitizeText(n,T),cssClasses:`${x} ${me}`,cssStyles:g});let p=St.get(n);a.description&&(Array.isArray(p.description)?(p.shape=Dt,p.description.push(a.description)):p.description?.length&&p.description.length>0?(p.shape=Dt,p.description===n?p.description=[a.description]:p.description=[p.description,a.description]):(p.shape=mt,p.description=a.description),p.description=B.sanitizeTextOrArray(p.description,T)),p.description?.length===1&&p.shape===Dt&&(p.type==="group"?p.shape=Wt:p.shape=mt),!p.type&&a.doc&&(m.info("Setting cluster for XCX",n,Kt(a)),p.type="group",p.isGroup=!0,p.dir=Kt(a),p.shape=a.type===Qt?Ht:Wt,p.cssClasses=`${p.cssClasses} ${Le} ${d?Oe:""}`);let v={labelStyle:"",shape:p.shape,label:p.description,cssClasses:p.cssClasses,cssCompiledStyles:[],cssStyles:p.cssStyles,id:n,dir:p.dir,domId:yt(n,G),type:p.type,isGroup:p.type==="group",padding:8,rx:10,ry:10,look:r};if(v.shape===Ht&&(v.label=""),t&&t.id!=="root"&&(m.trace("Setting node ",n," to be child of its parent ",t.id),v.parentId=t.id),v.centerLabel=!0,a.note){let R={labelStyle:"",shape:be,label:a.note.text,cssClasses:Ae,cssStyles:[],cssCompiledStyles:[],id:n+Ne+"-"+G,domId:yt(n,G,ne),type:p.type,isGroup:p.type==="group",padding:T.flowchart?.padding,look:r,position:a.note.position},L=n+zt,$={labelStyle:"",shape:_e,label:a.note.text,cssClasses:p.cssClasses,cssStyles:[],id:n+zt,domId:yt(n,G,ae),type:"group",isGroup:!0,padding:16,look:r,position:a.note.position};G++,$.id=L,R.parentId=L,q(e,$,h),q(e,R,h),q(e,v,h);let I=n,P=R.id;a.note.position==="left of"&&(I=R.id,P=n),s.push({id:I+"-"+P,start:I,end:P,arrowhead:"none",arrowTypeEnd:"",style:Zt,labelStyle:"",classes:Ce,arrowheadStyle:te,labelpos:ee,labelType:se,thickness:ie,look:r})}else q(e,v,h)}a.doc&&(m.trace("Adding nodes children "),Pe(a,a.doc,_,e,s,!d,r,h))},"dataFetcher"),Fe=f(()=>{St.clear(),G=0},"reset"),A={START_NODE:"[*]",START_TYPE:"start",END_NODE:"[*]",END_TYPE:"end",COLOR_KEYWORD:"color",FILL_KEYWORD:"fill",BG_FILL:"bgFill",STYLECLASS_SEP:","},Xt=f(()=>new Map,"newClassesList"),Jt=f(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),pt=f(t=>JSON.parse(JSON.stringify(t)),"clone"),ze=(()=>{var a;return a=class{constructor(e){this.version=e,this.nodes=[],this.edges=[],this.rootDoc=[],this.classes=Xt(),this.documents={root:Jt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.dividerCnt=0,this.links=new Map,this.getAccTitle=wt,this.setAccTitle=Nt,this.getAccDescription=Pt,this.setAccDescription=$t,this.setDiagramTitle=Ft,this.getDiagramTitle=Yt,this.clear(),this.setRootDoc=this.setRootDoc.bind(this),this.getDividerId=this.getDividerId.bind(this),this.setDirection=this.setDirection.bind(this),this.trimColon=this.trimColon.bind(this)}extract(e){this.clear(!0);for(let r of Array.isArray(e)?e:e.doc)switch(r.stmt){case K:this.addState(r.id.trim(),r.type,r.doc,r.description,r.note);break;case Ct:this.addRelation(r.state1,r.state2,r.description);break;case Se:this.addStyleClass(r.id.trim(),r.classes);break;case ye:this.handleStyleDef(r);break;case ge:this.setCssClass(r.id.trim(),r.styleClass);break;case"click":this.addLink(r.id,r.url,r.tooltip);break}let s=this.getStates(),d=w();Fe(),Q(void 0,this.getRootDocV2(),s,this.nodes,this.edges,!0,d.look,this.classes);for(let r of this.nodes)if(Array.isArray(r.label)){if(r.description=r.label.slice(1),r.isGroup&&r.description.length>0)throw new Error(`Group nodes can only have label. Remove the additional description for node [${r.id}]`);r.label=r.label[0]}}handleStyleDef(e){let s=e.id.trim().split(","),d=e.styleClass.split(",");for(let r of s){let h=this.getState(r);if(!h){let n=r.trim();this.addState(n),h=this.getState(n)}h&&(h.styles=d.map(n=>n.replace(/;/g,"")?.trim()))}}setRootDoc(e){m.info("Setting root doc",e),this.rootDoc=e,this.version===1?this.extract(e):this.extract(this.getRootDocV2())}docTranslator(e,s,d){if(s.stmt===Ct){this.docTranslator(e,s.state1,!0),this.docTranslator(e,s.state2,!1);return}if(s.stmt===K&&(s.id===A.START_NODE?(s.id=e.id+(d?"_start":"_end"),s.start=d):s.id=s.id.trim()),s.stmt!==z&&s.stmt!==K||!s.doc)return;let r=[],h=[];for(let n of s.doc)if(n.type===Qt){let E=pt(n);E.doc=pt(h),r.push(E),h=[]}else h.push(n);if(r.length>0&&h.length>0){let n={stmt:K,id:Bt(),type:"divider",doc:pt(h)};r.push(pt(n)),s.doc=r}s.doc.forEach(n=>this.docTranslator(s,n,!0))}getRootDocV2(){return this.docTranslator({id:z,stmt:z},{id:z,stmt:z,doc:this.rootDoc},!0),{id:z,doc:this.rootDoc}}addState(e,s=Z,d=void 0,r=void 0,h=void 0,n=void 0,E=void 0,x=void 0){let g=e?.trim();if(!this.currentDocument.states.has(g))m.info("Adding state ",g,r),this.currentDocument.states.set(g,{stmt:K,id:g,descriptions:[],type:s,doc:d,note:h,classes:[],styles:[],textStyles:[]});else{let T=this.currentDocument.states.get(g);if(!T)throw new Error(`State not found: ${g}`);T.doc||(T.doc=d),T.type||(T.type=s)}if(r&&(m.info("Setting state description",g,r),(Array.isArray(r)?r:[r]).forEach(k=>this.addDescription(g,k.trim()))),h){let T=this.currentDocument.states.get(g);if(!T)throw new Error(`State not found: ${g}`);T.note=h,T.note.text=B.sanitizeText(T.note.text,w())}n&&(m.info("Setting state classes",g,n),(Array.isArray(n)?n:[n]).forEach(k=>this.setCssClass(g,k.trim()))),E&&(m.info("Setting state styles",g,E),(Array.isArray(E)?E:[E]).forEach(k=>this.setStyle(g,k.trim()))),x&&(m.info("Setting state styles",g,E),(Array.isArray(x)?x:[x]).forEach(k=>this.setTextStyle(g,k.trim())))}clear(e){this.nodes=[],this.edges=[],this.documents={root:Jt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.classes=Xt(),e||(this.links=new Map,Rt())}getState(e){return this.currentDocument.states.get(e)}getStates(){return this.currentDocument.states}logDocuments(){m.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}addLink(e,s,d){this.links.set(e,{url:s,tooltip:d}),m.warn("Adding link",e,s,d)}getLinks(){return this.links}startIdIfNeeded(e=""){return e===A.START_NODE?(this.startEndCount++,`${A.START_TYPE}${this.startEndCount}`):e}startTypeIfNeeded(e="",s=Z){return e===A.START_NODE?A.START_TYPE:s}endIdIfNeeded(e=""){return e===A.END_NODE?(this.startEndCount++,`${A.END_TYPE}${this.startEndCount}`):e}endTypeIfNeeded(e="",s=Z){return e===A.END_NODE?A.END_TYPE:s}addRelationObjs(e,s,d=""){let r=this.startIdIfNeeded(e.id.trim()),h=this.startTypeIfNeeded(e.id.trim(),e.type),n=this.startIdIfNeeded(s.id.trim()),E=this.startTypeIfNeeded(s.id.trim(),s.type);this.addState(r,h,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),this.addState(n,E,s.doc,s.description,s.note,s.classes,s.styles,s.textStyles),this.currentDocument.relations.push({id1:r,id2:n,relationTitle:B.sanitizeText(d,w())})}addRelation(e,s,d){if(typeof e=="object"&&typeof s=="object")this.addRelationObjs(e,s,d);else if(typeof e=="string"&&typeof s=="string"){let r=this.startIdIfNeeded(e.trim()),h=this.startTypeIfNeeded(e),n=this.endIdIfNeeded(s.trim()),E=this.endTypeIfNeeded(s);this.addState(r,h),this.addState(n,E),this.currentDocument.relations.push({id1:r,id2:n,relationTitle:d?B.sanitizeText(d,w()):void 0})}}addDescription(e,s){let d=this.currentDocument.states.get(e),r=s.startsWith(":")?s.replace(":","").trim():s;d?.descriptions?.push(B.sanitizeText(r,w()))}cleanupLabel(e){return e.startsWith(":")?e.slice(2).trim():e.trim()}getDividerId(){return this.dividerCnt++,`divider-id-${this.dividerCnt}`}addStyleClass(e,s=""){this.classes.has(e)||this.classes.set(e,{id:e,styles:[],textStyles:[]});let d=this.classes.get(e);s&&d&&s.split(A.STYLECLASS_SEP).forEach(r=>{let h=r.replace(/([^;]*);/,"$1").trim();if(RegExp(A.COLOR_KEYWORD).exec(r)){let E=h.replace(A.FILL_KEYWORD,A.BG_FILL).replace(A.COLOR_KEYWORD,A.FILL_KEYWORD);d.textStyles.push(E)}d.styles.push(h)})}getClasses(){return this.classes}setCssClass(e,s){e.split(",").forEach(d=>{let r=this.getState(d);if(!r){let h=d.trim();this.addState(h),r=this.getState(h)}r?.classes?.push(s)})}setStyle(e,s){this.getState(e)?.styles?.push(s)}setTextStyle(e,s){this.getState(e)?.textStyles?.push(s)}getDirectionStatement(){return this.rootDoc.find(e=>e.stmt===jt)}getDirection(){return this.getDirectionStatement()?.value??pe}setDirection(e){let s=this.getDirectionStatement();s?s.value=e:this.rootDoc.unshift({stmt:jt,value:e})}trimColon(e){return e.startsWith(":")?e.slice(1).trim():e.trim()}getData(){let e=w();return{nodes:this.nodes,edges:this.edges,other:{},config:e,direction:oe(this.getRootDocV2())}}getConfig(){return w().state}},f(a,"StateDB"),a.relationType={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},a})(),Ye=f(t=>`
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`,"getStyles"),Ke=Ye;export{He as a,We as b,ze as c,Ke as d};
