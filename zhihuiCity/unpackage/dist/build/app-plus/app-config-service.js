
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/index/index","pages/sjsb/sjsb","pages/me/me","pages/me/sz","pages/index/rwList","pages/index/rwxq","pages/index/sjxq"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"智慧城市","navigationBarBackgroundColor":"#4AD79E","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#3cc51f","borderStyle":"black","backgroundColor":"#ffffff","height":"50px","fontSize":"10px","iconWidth":"24px","spacing":"3px","list":[{"pagePath":"pages/index/index","iconPath":"static/index.png","selectedIconPath":"static/index2.png","text":"首页"},{"pagePath":"pages/sjsb/sjsb","iconPath":"./static/relationship%20(1).png","selectedIconPath":"static/relationship.png","text":"事件上报"},{"pagePath":"pages/me/me","iconPath":"static/setting%20(1).png","selectedIconPath":"static/setting.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"zhihuiCity","compilerVersion":"2.9.8","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationBarTitleText":"智慧城市","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"uni-app","navigationStyle":"custom"}},{"path":"/pages/sjsb/sjsb","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"事件上报","navigationStyle":""}},{"path":"/pages/me/me","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","navigationStyle":""}},{"path":"/pages/me/sz","meta":{},"window":{"navigationBarTitleText":"智慧城市","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/index/rwList","meta":{},"window":{"navigationBarTitleText":"任务列表","enablePullDownRefresh":false}},{"path":"/pages/index/rwxq","meta":{},"window":{"navigationBarTitleText":"任务详情","enablePullDownRefresh":false}},{"path":"/pages/index/sjxq","meta":{},"window":{"navigationBarTitleText":"事件详情","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
