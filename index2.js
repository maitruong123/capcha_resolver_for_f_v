const _0xdd6c7e=_0x4766;function _0x55f5(){const _0x1d14c6=['INCORRECT\x20TIME','4348044uTDIVc','amount','express','tgWebAppData','7414746OpsFYn','NO\x20CAPTCHA','INVALID\x20PARAMS','set-cookie','language_code','7VgNOuC','json','12UmqdwZ','33EbtKDZ','validate','parse','headers','message','error','hash','object','Code\x2022.\x20Please\x20try\x20again\x20later','NO\x20SOLUTION','wallet\x20is\x20empty','https://tgames-vivaftn.bcsocial.net/panel/users/login','first_name','axios','get','Server\x20working!','capcha','use','7403870xAMRLH','user','AUTH','log','base64','stringify','Server\x20running\x20on\x20port\x203000','https://tgames-vivaftn.bcsocial.net/panel/users/verifyCapcha','last_name','91012Bfouct','/viva/claim','username','substring','SOLUTION\x20FAIL','SERVER\x20ERROR','auth_date','string','required','forEach','1457764sqopFN','nextClaimTime','trim','chat_type','CLAIM\x20ERROR','code','split','https://tgames.bcsocial.net/panel/games/claim','8IelzGJ','/fisher/claim','joi','data','start_param','toString','from','url','https://tgames.bcsocial.net/panel/users/login','incorrect\x20time','chat_instance','8847645wmKhUt','https://tgames-vivaftn.bcsocial.net/panel/games/claim','3768936YZWHou','LOGIN\x20ERROR','body','status','replace','post'];_0x55f5=function(){return _0x1d14c6;};return _0x55f5();}function _0x4766(_0x46d822,_0x1daf9b){const _0x55f53b=_0x55f5();return _0x4766=function(_0x47661d,_0x18564d){_0x47661d=_0x47661d-0x16f;let _0x5dfeeb=_0x55f53b[_0x47661d];return _0x5dfeeb;},_0x4766(_0x46d822,_0x1daf9b);}(function(_0x542faf,_0x31fefd){const _0x1f7956=_0x4766,_0x2ef7e0=_0x542faf();while(!![]){try{const _0x4982ed=-parseInt(_0x1f7956(0x1b8))/0x1*(-parseInt(_0x1f7956(0x19c))/0x2)+-parseInt(_0x1f7956(0x18a))/0x3+parseInt(_0x1f7956(0x175))/0x4+parseInt(_0x1f7956(0x188))/0x5+-parseInt(_0x1f7956(0x195))/0x6*(-parseInt(_0x1f7956(0x19a))/0x7)+-parseInt(_0x1f7956(0x17d))/0x8*(-parseInt(_0x1f7956(0x191))/0x9)+parseInt(_0x1f7956(0x1af))/0xa*(-parseInt(_0x1f7956(0x19d))/0xb);if(_0x4982ed===_0x31fefd)break;else _0x2ef7e0['push'](_0x2ef7e0['shift']());}catch(_0x1f18ad){_0x2ef7e0['push'](_0x2ef7e0['shift']());}}}(_0x55f5,0xe0f84));const express=require(_0xdd6c7e(0x193)),app=express(),Joi=require(_0xdd6c7e(0x17f)),axios=require(_0xdd6c7e(0x1aa)),url=require('url'),fs=require('fs'),querystring=require('querystring'),payloadSchema=Joi[_0xdd6c7e(0x1a4)]({'url':Joi[_0xdd6c7e(0x172)]()[_0xdd6c7e(0x173)]()});app[_0xdd6c7e(0x1ae)](express['json']()),app[_0xdd6c7e(0x1ab)]('/',(_0x155e96,_0x5bf161)=>{const _0x55d602=_0xdd6c7e,_0x3e2c1c={'message':_0x55d602(0x1ac)};_0x5bf161['status'](0xc8)[_0x55d602(0x19b)](_0x3e2c1c);}),app['post'](_0xdd6c7e(0x17e),async(_0x3fb3a9,_0x5babea)=>{const _0xe49d55=_0xdd6c7e;try{const {error:_0x552619}=payloadSchema[_0xe49d55(0x19e)](_0x3fb3a9[_0xe49d55(0x18c)]);if(_0x552619){const _0x3d4f99={'message':_0xe49d55(0x197)};return _0x5babea[_0xe49d55(0x18d)](0xc8)[_0xe49d55(0x19b)](_0x3d4f99);}const _0x301e87=Buffer[_0xe49d55(0x183)](_0x3fb3a9['body'][_0xe49d55(0x184)],_0xe49d55(0x1b3))[_0xe49d55(0x182)]('utf-8'),_0x4c7497=url[_0xe49d55(0x19f)](_0x301e87),_0x5106e6=_0x4c7497[_0xe49d55(0x1a3)]?_0x4c7497[_0xe49d55(0x1a3)]['substring'](0x1):'',_0x5ba2e0=querystring[_0xe49d55(0x19f)](decodeURIComponent(_0x5106e6)),_0x42715d=querystring[_0xe49d55(0x19f)](decodeURIComponent(_0x5ba2e0[_0xe49d55(0x194)])),_0x49596e=JSON[_0xe49d55(0x19f)](_0x42715d['user']),_0x4bb034={'user':_0x42715d[_0xe49d55(0x1b0)]||undefined,'chat_instance':_0x5ba2e0['chat_instance']||undefined,'chat_type':_0x5ba2e0[_0xe49d55(0x178)]||undefined,'auth_date':_0x5ba2e0['auth_date']||undefined,'hash':_0x5ba2e0[_0xe49d55(0x1a3)]||undefined,'start_param':_0x5ba2e0[_0xe49d55(0x181)]||undefined},_0x4b81c6={'gameId':0x1,'initData':_0x4bb034,'externalId':_0x49596e['id']||undefined,'firstName':_0x49596e[_0xe49d55(0x1a9)]||undefined,'language':_0x49596e[_0xe49d55(0x199)]||undefined,'lastName':_0x49596e['last_name']||undefined,'username':_0x49596e[_0xe49d55(0x1ba)]||undefined,'refId':''},_0x4c03f4=await axios['post'](_0xe49d55(0x185),JSON['stringify'](_0x4b81c6)),_0x358633=_0x4c03f4[_0xe49d55(0x1a0)][_0xe49d55(0x198)],_0x38f5db=parseCookies(_0x358633);if(_0x4c03f4[_0xe49d55(0x180)][_0xe49d55(0x17a)]!==0x0){if(_0x4c03f4[_0xe49d55(0x180)][_0xe49d55(0x1a1)]===_0xe49d55(0x1a5)){const _0x5816c7={'message':'AUTH'};return _0x5babea['status'](0xc8)[_0xe49d55(0x19b)](_0x5816c7);}const _0x42ca8f={'message':_0xe49d55(0x18b)};return _0x5babea[_0xe49d55(0x18d)](0xc8)['json'](_0x42ca8f);}const _0xd7d8aa={'code':0x3e8},_0x3d9d49={'Cookie':_0x38f5db},_0x2ce99c=await axios[_0xe49d55(0x18f)]('https://tgames.bcsocial.net/panel/users/verifyCapcha',JSON[_0xe49d55(0x1b4)](_0xd7d8aa),{'headers':_0x3d9d49});if(_0x2ce99c[_0xe49d55(0x180)][_0xe49d55(0x17a)]!==0x0){const _0x2144ce=_0x2ce99c[_0xe49d55(0x180)]?.[_0xe49d55(0x180)]?.['capcha'];if(!_0x2144ce){const _0x5b40d3={'message':_0xe49d55(0x196)};return _0x5babea[_0xe49d55(0x18d)](0xc8)[_0xe49d55(0x19b)](_0x5b40d3);}const _0x5de912=eval(_0x2144ce[_0xe49d55(0x18e)]('=','')[_0xe49d55(0x177)]());if(!_0x5de912){const _0x529f8c={'message':_0xe49d55(0x1a6)};return _0x5babea[_0xe49d55(0x18d)](0xc8)[_0xe49d55(0x19b)](_0x529f8c);}const _0x3e06e5={'code':String(_0x5de912)},_0x386979=await axios[_0xe49d55(0x18f)]('https://tgames.bcsocial.net/panel/users/verifyCapcha',JSON[_0xe49d55(0x1b4)](_0x3e06e5),{'headers':_0x3d9d49});if(_0x386979[_0xe49d55(0x180)][_0xe49d55(0x17a)]!==0x0){const _0x258c40={'message':_0xe49d55(0x16f)};return _0x5babea[_0xe49d55(0x18d)](0xc8)[_0xe49d55(0x19b)](_0x258c40);}}const _0x3f2cd3=await axios[_0xe49d55(0x18f)](_0xe49d55(0x17c),{},{'headers':_0x3d9d49});if(_0x3f2cd3['data'][_0xe49d55(0x17a)]!==0x0){if(_0x3f2cd3[_0xe49d55(0x180)][_0xe49d55(0x1a1)]===_0xe49d55(0x186)){const _0x486db0={'message':_0xe49d55(0x190)};return _0x5babea[_0xe49d55(0x18d)](0xc8)['json'](_0x486db0);}if(_0x3f2cd3[_0xe49d55(0x180)]['message']==='Code\x2022.\x20Please\x20try\x20again\x20later'){const _0x4e40de={'message':_0xe49d55(0x1b1)};return _0x5babea[_0xe49d55(0x18d)](0xc8)['json'](_0x4e40de);}if(_0x3f2cd3[_0xe49d55(0x180)][_0xe49d55(0x1a1)]===_0xe49d55(0x1a7)){const _0x3d48b1={'message':'WALLET'};return _0x5babea[_0xe49d55(0x18d)](0xc8)[_0xe49d55(0x19b)](_0x3d48b1);}const _0x4dff85={'message':'CLAIM\x20ERROR'};return _0x5babea['status'](0xc8)[_0xe49d55(0x19b)](_0x4dff85);}const _0x217a82=_0x3f2cd3?.['data']?.['data']?.[_0xe49d55(0x192)],_0xdafe2c=_0x3f2cd3?.['data']?.[_0xe49d55(0x180)]?.[_0xe49d55(0x176)],_0x3691f4={'message':'OK','amount':_0x217a82,'nextClaimTime':_0xdafe2c};_0x5babea[_0xe49d55(0x18d)](0xc8)[_0xe49d55(0x19b)](_0x3691f4);}catch(_0xf6248e){const _0x3635f0={'message':_0xe49d55(0x170),'detail':_0xf6248e[_0xe49d55(0x1a1)]};_0x5babea[_0xe49d55(0x18d)](0x1f4)[_0xe49d55(0x19b)](_0x3635f0),console['error'](_0xf6248e[_0xe49d55(0x1a1)]);}}),app[_0xdd6c7e(0x18f)](_0xdd6c7e(0x1b9),async(_0x236bbe,_0x251cc2)=>{const _0x5de517=_0xdd6c7e;try{const {error:_0x58e615}=payloadSchema[_0x5de517(0x19e)](_0x236bbe['body']);if(_0x58e615){const _0x384d07={'message':_0x5de517(0x197)};return _0x251cc2[_0x5de517(0x18d)](0xc8)[_0x5de517(0x19b)](_0x384d07);}const _0x191308=Buffer['from'](_0x236bbe[_0x5de517(0x18c)]['url'],_0x5de517(0x1b3))['toString']('utf-8'),_0x391a88=url[_0x5de517(0x19f)](_0x191308),_0x5dc542=_0x391a88['hash']?_0x391a88[_0x5de517(0x1a3)][_0x5de517(0x1bb)](0x1):'',_0xf2ff45=querystring[_0x5de517(0x19f)](decodeURIComponent(_0x5dc542)),_0x719157=querystring[_0x5de517(0x19f)](decodeURIComponent(_0xf2ff45[_0x5de517(0x194)])),_0x3a3d03=JSON[_0x5de517(0x19f)](_0x719157[_0x5de517(0x1b0)]),_0x154a63={'user':_0x719157[_0x5de517(0x1b0)]||undefined,'chat_instance':_0xf2ff45[_0x5de517(0x187)]||undefined,'chat_type':_0xf2ff45[_0x5de517(0x178)]||undefined,'auth_date':_0xf2ff45[_0x5de517(0x171)]||undefined,'hash':_0xf2ff45[_0x5de517(0x1a3)]||undefined,'start_param':_0xf2ff45[_0x5de517(0x181)]||undefined},_0x235e85={'gameId':0x2,'initData':_0x154a63,'externalId':_0x3a3d03['id']||undefined,'firstName':_0x3a3d03['first_name']||undefined,'language':_0x3a3d03[_0x5de517(0x199)]||undefined,'lastName':_0x3a3d03[_0x5de517(0x1b7)]||undefined,'username':_0x3a3d03['username']||undefined,'refId':''},_0x3ad69e=await axios[_0x5de517(0x18f)](_0x5de517(0x1a8),JSON['stringify'](_0x235e85));if(_0x3ad69e[_0x5de517(0x180)][_0x5de517(0x17a)]!==0x0){if(_0x3ad69e[_0x5de517(0x180)][_0x5de517(0x1a1)]===_0x5de517(0x1a5)){const _0x22ddf4={'message':_0x5de517(0x1b1)};return _0x251cc2[_0x5de517(0x18d)](0xc8)['json'](_0x22ddf4);}const _0xb31880={'message':_0x5de517(0x18b)};return _0x251cc2[_0x5de517(0x18d)](0xc8)['json'](_0xb31880);}const _0x427636=_0x3ad69e[_0x5de517(0x1a0)][_0x5de517(0x198)],_0x4eec23=parseCookies(_0x427636),_0x50a8e4={'code':0x0},_0x1f9950={'Cookie':_0x4eec23},_0x13c3f5=await axios[_0x5de517(0x18f)](_0x5de517(0x1b6),JSON[_0x5de517(0x1b4)](_0x50a8e4),{'headers':_0x1f9950});if(_0x13c3f5[_0x5de517(0x180)]['code']!==0x0){const _0x34ebed=_0x13c3f5[_0x5de517(0x180)]?.[_0x5de517(0x180)]?.[_0x5de517(0x1ad)];if(!_0x34ebed){const _0x3fd62c={'message':'NO\x20CAPTCHA'};return _0x251cc2[_0x5de517(0x18d)](0xc8)['json'](_0x3fd62c);}const _0x222506=eval(_0x34ebed[_0x5de517(0x18e)]('=','')[_0x5de517(0x177)]());if(!_0x222506){const _0x23a382={'message':'NO\x20SOLUTION'};return _0x251cc2[_0x5de517(0x18d)](0xc8)[_0x5de517(0x19b)](_0x23a382);}const _0x350fe9={'code':String(_0x222506)},_0x1b4d90=await axios[_0x5de517(0x18f)]('https://tgames-vivaftn.bcsocial.net/panel/users/verifyCapcha',JSON['stringify'](_0x350fe9),{'headers':_0x1f9950});if(_0x1b4d90[_0x5de517(0x180)][_0x5de517(0x17a)]!==0x0){const _0x31bea5={'message':_0x5de517(0x16f)};return _0x251cc2[_0x5de517(0x18d)](0xc8)['json'](_0x31bea5);}}const _0x319a1f=await axios[_0x5de517(0x18f)](_0x5de517(0x189),{},{'headers':_0x1f9950});if(_0x319a1f[_0x5de517(0x180)][_0x5de517(0x17a)]!==0x0){if(_0x319a1f[_0x5de517(0x180)][_0x5de517(0x1a1)]===_0x5de517(0x186)){const _0x2e4781={'message':_0x5de517(0x190)};return _0x251cc2[_0x5de517(0x18d)](0xc8)['json'](_0x2e4781);}if(_0x319a1f[_0x5de517(0x180)]['message']===_0x5de517(0x1a5)){const _0x50b9a5={'message':_0x5de517(0x1b1)};return _0x251cc2[_0x5de517(0x18d)](0xc8)[_0x5de517(0x19b)](_0x50b9a5);}if(_0x319a1f[_0x5de517(0x180)]['message']===_0x5de517(0x1a7)){const _0x2da445={'message':'WALLET'};return _0x251cc2[_0x5de517(0x18d)](0xc8)[_0x5de517(0x19b)](_0x2da445);}const _0xb97e43={'message':_0x5de517(0x179)};return _0x251cc2[_0x5de517(0x18d)](0xc8)['json'](_0xb97e43);}const _0x5745f0=_0x319a1f?.[_0x5de517(0x180)]?.['data']?.[_0x5de517(0x192)],_0x30316a=_0x319a1f?.[_0x5de517(0x180)]?.['data']?.[_0x5de517(0x176)],_0x13d95d={'message':'OK','amount':_0x5745f0,'nextClaimTime':_0x30316a};_0x251cc2[_0x5de517(0x18d)](0xc8)[_0x5de517(0x19b)](_0x13d95d);}catch(_0x4c0ef5){const _0xd9a91b={'message':_0x5de517(0x170),'detail':_0x4c0ef5[_0x5de517(0x1a1)]};_0x251cc2[_0x5de517(0x18d)](0x1f4)[_0x5de517(0x19b)](_0xd9a91b),console[_0x5de517(0x1a2)](_0x4c0ef5['message']);}});function parseCookies(_0x226f03){const _0x45f1d7=_0xdd6c7e,_0xc65e40={};return _0x226f03&&_0x226f03[_0x45f1d7(0x174)](_0x357ce7=>{const _0x3a3e1e=_0x45f1d7,_0x1fd46f=_0x357ce7[_0x3a3e1e(0x17b)](';');_0x1fd46f[_0x3a3e1e(0x174)](_0x4218df=>{const _0x37d875=_0x3a3e1e,[_0x45c484,_0x227bec]=_0x4218df[_0x37d875(0x17b)]('=');_0xc65e40[_0x45c484[_0x37d875(0x177)]()]=(_0x227bec||'')['trim']();});}),_0xc65e40;}app['listen'](0xbb8,()=>{const _0x40abdd=_0xdd6c7e;console[_0x40abdd(0x1b2)](_0x40abdd(0x1b5));});