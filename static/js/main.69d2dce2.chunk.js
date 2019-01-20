(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n,o=a(0),i=a.n(o),r=a(7),c=a.n(r),l=(a(14),a(1)),s=a(2),u=a(4),d=a(3),p=a(5),f=(a(16),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).videoRef=o.createRef(),a.audioRef=o.createRef(),a.bgAudioRef=o.createRef(),a.lastPauseTime=new Date,a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.audioRef.current&&(console.log("Mounted!"),this.audioRef.current.addEventListener("ended",function(){e.props.onComplete&&e.props.onComplete()}))}},{key:"shouldComponentUpdate",value:function(e){return e.file!==this.props.file}},{key:"playIfNotPlaying",value:function(){this.audioRef.current&&(this.audioRef.current.paused&&((new Date).getTime()-this.lastPauseTime.getTime()>5e3&&this.audioRef.current.load(),this.audioRef.current.play()))}},{key:"pause",value:function(){this.audioRef.current&&(this.lastPauseTime=new Date,this.audioRef.current.pause())}},{key:"render",value:function(){if(this.videoRef.current&&this.videoRef.current.load(),this.audioRef.current&&this.audioRef.current.load(),this.bgAudioRef.current){var e,t,a=new(window.AudioContext||window.webkitAudioContext),n="bgaudio/".concat(this.props.file,".mp3");console.log("Context?",a),fetch(n,{mode:"cors"}).then(function(e){return e.arrayBuffer()}).then(function(e){console.log("Decoding)"),a.decodeAudioData(e,i)});var i=function(n){console.log("Playing"),e||(e=n),(t=a.createBufferSource()).buffer=n,t.connect(a.destination),t.loop=!0,t.start()}}return o.createElement("div",null,o.createElement("video",{className:"cinemagraph",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,ref:this.videoRef},o.createElement("source",{src:"cinemagraphs/".concat(this.props.file,".webm"),type:"video/webm"}),o.createElement("source",{src:"cinemagraphs/".concat(this.props.file,".mp4"),type:"video/mp4"})),o.createElement("audio",{autoPlay:!0,loop:!0,ref:this.bgAudioRef},o.createElement("source",{src:"bgaudio/".concat(this.props.file,".mp3"),type:"audio/mp3"})),o.createElement("audio",{ref:this.audioRef},o.createElement("source",{src:"dialog/".concat(this.props.file,".mp3"),type:"audio/mp3"})))}}]),t}(o.Component));!function(e){e[e.NotStarted=0]="NotStarted",e[e.Playing=1]="Playing",e[e.Complete=2]="Complete"}(n||(n={}));var m=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).playerRef=i.a.createRef(),a.timeoutId=void 0,a.videos=[{name:"bed",keypresses:["ArrowUp"],playCoord:{x:20,y:60},nextCoord:{x:70,y:60}},{name:"shower",keypresses:["ArrowDown"],playCoord:{x:40,y:70},nextCoord:{x:70,y:50}},{name:"street"},{name:"parks"},{name:"drugdealers"},{name:"turkey"},{name:"keepwalking"},{name:"dolores"},{name:"urethra"},{name:"google"},{name:"fork"},{name:"slide"},{name:"up"},{name:"stumble"},{name:"run"},{name:"canal"},{name:"across"},{name:"slidetop"}],a.onKeyDown=function(e){a.state.playState===n.Complete?a.next():a.state.playState===n.NotStarted&&(a.playerRef.current.playIfNotPlaying(),a.setState({playState:n.Playing}))},a.onTouchStart=function(e){a.state.playState===n.Complete?a.next():a.state.playState===n.NotStarted&&(a.playerRef.current.playIfNotPlaying(),a.setState({playState:n.Playing}))},a.clickedTouchPoint=function(){a.state.playState===n.Complete?a.next():a.state.playState===n.NotStarted&&(a.playerRef.current.playIfNotPlaying(),a.setState({playState:n.Playing}))},a.stopAudio=function(){a.playerRef.current&&a.playerRef.current.pause()},a.onComplete=function(){console.log("Is complete!"),a.setState({playState:n.Complete})},a.state={index:0,keypressIndex:0,keyTimeout:1e3,playState:n.NotStarted},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){function e(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}window.addEventListener("resize",e),e()}},{key:"render",value:function(){console.log("Re-rendering");var e,t=this.videos[this.state.index];return this.state.playState===n.NotStarted?e=i.a.createElement("div",{id:"next-wrapper",onClick:this.clickedTouchPoint,style:{left:"".concat(t.playCoord.x,"%"),top:"".concat(t.playCoord.y,"%")}},i.a.createElement("div",{id:"next"})):this.state.playState===n.Complete&&(e=i.a.createElement("div",{id:"next-wrapper",onClick:this.clickedTouchPoint,style:{left:"".concat(t.nextCoord.x,"%"),top:"".concat(t.nextCoord.y,"%")}},i.a.createElement("div",{id:"next"}))),i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"video-wrapper"},i.a.createElement(f,{file:t.name,ref:this.playerRef,onComplete:this.onComplete}),e))}},{key:"next",value:function(){var e=this,t=this.state.index>=this.videos.length-1?0:this.state.index+1;this.setState({index:t,keypressIndex:0,playState:n.NotStarted}),setTimeout(function(){e.playerRef.current.playIfNotPlaying()},0)}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.69d2dce2.chunk.js.map