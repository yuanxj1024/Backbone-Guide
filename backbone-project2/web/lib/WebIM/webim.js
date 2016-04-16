/* WebIM javascript SDK
 * VER 1.2
 * creator peakerdong@tencent.com
 * copyright(c) Tencent 2015
 */

/* WebIM API definitions
 */
var webim = { // namespace object webim

	/* function init
	 *   初始化SDK
	 * params:
	 *   loginInfo		- Object, 登录身份相关参数集合，详见下面
	 *   {
	 *     sdkAppID		- String, 用户标识接入SDK的应用ID
	 *     appIDAt3rd	- String, App用户使用OAuth授权体系分配的Appid，和sdkAppID一样
         *     accountType	- int, 账号类型
	 *     identifier	- String, 用户帐号
	 *     userSig		- String, 鉴权Token
	 *   }
	 *   listeners		- Object, 事件回调函数集合, 详见下面
	 *   {
	 *     onConnNotify - function(connInfo), 用于收到连接状态相关通知的回调函数,目前未使用
	 *     jsonpCallback -function(rspData),//IE9(含)以下浏览器用到的jsonp回调函数
	 *     onMsgNotify	- function(notifyInfo), 用于收到消息通知的回调函数, 
         *      notifyInfo为[{msg: Msg对象}]
	 *      使用方有两种处理回调: 1)直接访问webim.MsgStore获取最新的消息 2)处理notifyInfo中的增量消息
	 *     onGroupInfoChangeNotify	- function(notifyInfo), 用于监听群组资料变更的回调函数, 
         *     notifyInfo为新的群组资料信息
	 *     groupSystemNotifys	- Object, 用于监听（多终端同步）群系统消息的回调函数对象
	 *   			 	  
	 *   }
	 *   options		- Object, 其它选项, 目前未使用
	 * return:
	 *   (无)
	 */
	init: function(loginInfo, listeners, options) {},

	/* function syncMsgs
	 *   拉取最新C2C消息
	 *   一般不需要使用方直接调用, SDK底层会自动同步最新消息并通知使用方, 一种有用的调用场景是用户手动触发刷新消息
	 * params:
	 *   cbOk	- function(notifyInfo)类型, 当同步消息成功时的回调函数, notifyInfo同上面cbNotify中的说明, 
	 *   		  如果此参数为null或undefined则同步消息成功后会像自动同步那样回调cbNotify
	 *   cbErr	- function(err)类型, 当同步消息失败时的回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	syncMsgs: function(cbOk, cbErr) {},
        
	/* function syncGroupMsgs
	 * 拉取群漫游消息
	 * params:
	 *   options	- 请求参数
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	syncGroupMsgs: function(options,cbOk, cbErr) {},

	/* function sendMsg
	 *   发送一条消息
	 * params:
	 *   msg	- webim.Msg类型, 要发送的消息对象
	 *   cbOk	- function()类型, 当发送消息成功时的回调函数
	 *   cbErr	- function(err)类型, 当发送消息失败时的回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	sendMsg: function(msg, cbOk, cbErr) {},
        
	/* function offline
	 *   用户下线
	 * params:
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	offline: function(cbOk, cbErr) {},
        
	/* function setAutoRead
	 * 设置会话自动已读上报标志
	 * params:
	 *   selSess	- webim.Session类型, 当前会话
	 *   isOn	- boolean, 将selSess的自动已读消息标志改为isOn，同时是否上报当前会话已读消息
	 *   isResetAll	- boolean，是否重置所有会话的自动已读标志
	 * return:
	 *   (无)
	 */
	setAutoRead: function(selSess, isOn, isResetAll) {},
        
	/* function getProfilePortrait
	 *   拉取资料（搜索用户）
	 * params:
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	getProfilePortrait: function(options,cbOk, cbErr) {},
        
	/* function setProfilePortrait
	 *   设置个人资料
	 * params:
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	setProfilePortrait: function(options,cbOk, cbErr) {},
        
	/* function applyAddFriend 
	 *   申请添加好友
	 * params:
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	applyAddFriend: function(options,cbOk, cbErr) {},
        
	/* function getPendency 
	 *   拉取好友申请
	 * params:
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	getPendency: function(options,cbOk, cbErr) {},
        
	/* function deletePendency 
	 *   删除好友申请
	 * params:
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	deletePendency: function(options,cbOk, cbErr) {},
        
	/* function responseFriend 
	 *   响应好友申请
	 * params:
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	responseFriend: function(options,cbOk, cbErr) {},
        
	/* function getAllFriend
	 *   拉取我的好友
	 * params:
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	getAllFriend: function(options,cbOk, cbErr) {},
        
	/* function deleteFriend
	 *   删除好友
	 * params:
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	deleteFriend: function(options,cbOk, cbErr) {},
        
	/* function addBlackList 
	 *   增加黑名单
	 * params:
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	addBlackList: function(options,cbOk, cbErr) {},
        
	/* function getBlackList  
	 *   删除黑名单
	 * params:
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	getBlackList: function(options,cbOk, cbErr) {},
        
	/* function deleteBlackList  
	 *   我的黑名单
	 * params:
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	deleteBlackList: function(options,cbOk, cbErr) {},
        
	/* function uploadPic  
	 *   上传图片
	 * params:
	 *   options	- 请求参数，详见api文档
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	uploadPic: function(options,cbOk, cbErr) {},
        
	/* function createGroup  
	 *   创建群
	 * params:
	 *   options	- 请求参数，详见api文档
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	createGroup: function(options,cbOk, cbErr) {},
        
	/* function applyJoinGroup  
	 *   申请加群
	 * params:
	 *   options	- 请求参数，详见api文档
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	applyJoinGroup: function(options,cbOk, cbErr) {},
        
	/* function handleApplyJoinGroup  
	 *   处理申请加群(同意或拒绝)
	 * params:
	 *   options	- 请求参数，详见api文档
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	handleApplyJoinGroup: function(options,cbOk, cbErr) {},
        
	/* function deleteApplyJoinGroupPendency  
	 *   删除加群申请
	 * params:
	 *   options	- 请求参数，详见api文档
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	deleteApplyJoinGroupPendency: function(options,cbOk, cbErr) {},
        
        
	/* function quitGroup  
	 *  主动退群
	 * params:
	 *   options	- 请求参数，详见api文档
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	quitGroup: function(options,cbOk, cbErr) {},
        
	/* function getGroupPublicInfo  
	 *   读取群公开资料-高级接口
	 * params:
	 *   options	- 请求参数，详见api文档
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	getGroupPublicInfo: function(options,cbOk, cbErr) {},
        
	/* function getGroupInfo  
	 *   读取群详细资料-高级接口
	 * params:
	 *   options	- 请求参数，详见api文档
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	getGroupInfo: function(options,cbOk, cbErr) {},
        
	/* function modifyGroupBaseInfo  
	 *   修改群基本资料
	 * params:
	 *   options	- 请求参数，详见api文档
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	modifyGroupBaseInfo: function(options,cbOk, cbErr) {},
        
	/* function destroyGroup  
	 *  解散群
	 * params:
	 *   options	- 请求参数，详见api文档
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	destroyGroup: function(options,cbOk, cbErr) {},
        
	/* function getJoinedGroupListHigh  
	 *   获取我的群组-高级接口
	 * params:
	 *   options	- 请求参数，详见api文档
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	getJoinedGroupListHigh: function(options,cbOk, cbErr) {},
        
	/* function getGroupMemberInfo  
	 *   获取群组成员列表
	 * params:
	 *   options	- 请求参数，详见api文档
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	getGroupMemberInfo: function(options,cbOk, cbErr) {},
        
	/* function addGroupMember  
	 *   邀请好友加群
	 * params:
	 *   options	- 请求参数，详见api文档
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	addGroupMember: function(options,cbOk, cbErr) {},
        
	/* function modifyGroupMember  
	 *   修改群成员资料（角色或者群消息提类型示）
	 * params:
	 *   options	- 请求参数，详见api文档
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	modifyGroupMember: function(options,cbOk, cbErr) {},
        
	/* function forbidSendMsg  
	 *   设置群成员禁言时间
	 * params:
	 *   options	- 请求参数，详见api文档
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	forbidSendMsg: function(options,cbOk, cbErr) {},
        
	/* function deleteGroupMember  
	 *   删除群成员
	 * params:
	 *   options	- 请求参数，详见api文档
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	deleteGroupMember: function(options,cbOk, cbErr) {},
        
        /* function sendCustomGroupNotify  
	 *   发送自定义群通知
	 * params:
	 *   options	- 请求参数，详见api文档
	 *   cbOk	- function()类型, 成功时回调函数
	 *   cbErr	- function(err)类型, 失败时回调函数, err为错误对象
	 * return:
	 *   (无)
	 */
	sendCustomGroupNotify: function(options,cbOk, cbErr) {},

	/* class webim.Msg
	 *   一条消息的描述类, 消息发送、接收的API中都会涉及此类型的对象
	 * properties:
	 *   sess	- Session object-ref, 消息所属的会话(e.g:我与好友A的C2C会话，我与群组G的GROUP会话)
	 *   isSend	- Boolean, true表示是我发出消息, false表示是发给我的消息)
	 *   seq	- Integer, 消息序列号, 用于判断消息是否同一条
	 *   random	- Integer, 消息随机数,用于判断消息是否同一条
	 *   time	- Integer, 消息时间戳, 为unix timestamp
	 *   fromAccount -String,  消息发送者帐号
	 *   elems	- Array of webim.Msg.Elem, 描述消息内容的元素列表
	 * constructor:
	 *   Msg(sess, isSend, seq,random time,fromAccount) - 构造函数, 参数定义同上面properties中定义
	 * methods:
	 *   addText(text)	- 向elems中添加一个TEXT元素
	 *   addFace(face)	- 向elems中添加一个FACE元素
	 *   toHtml()		- 转成可展示的html String
	 *addFace
	 * sub-class webim.Msg.Elem
	 *   消息中一个组成元素的描述类, 一条消息的内容被抽象描述为N个元素的有序列表
	 * properties:
	 *   type	- 元素类型, 目前有TEXT(文本)、FACE(表情)、IMAGE(图片)等
	 *   content- 元素内容体, 当TEXT时为String, 当PIC时为UrlString
	 * constructor:
	 *   Elem(type, content) - 构造函数, 参数定义同上面properties中定义
	 *
	 * sub-class webim.Msg.Elem.TextElem
	 *   文本
	 * properties:
	 *   text  - String 内容
	 * constructor:
	 *   TextElem(text) - 构造函数, 参数定义同上面properties中定义
         *   
	 * sub-class webim.Msg.Elem.FaceElem
	 *   表情
	 * properties:
	 *   index  - Integer 表情索引, 用户自定义
	 *   data   - String 额外数据，用户自定义
	 * constructor:
	 *   FaceElem(index,data) - 构造函数, 参数定义同上面properties中定义
         *   
	 *
	 */
	Msg: function(sess, isSend, seq, random,time,fromAccount) {/*Class constructor*/},

	/* singleton object MsgStore
	 * webim.MsgStore是消息数据的Model对象(参考MVC概念), 它提供接口访问当前存储的会话和消息数据
	 * 下面说明下会话数据类型: Session
	 *
	 * class Session
	 *   一个Session对象描述一个会话，会话可简单理解为最近会话列表的一个条目，它由两个字段唯一标识:
	 *     type	- String, 会话类型(如"C2C", "GROUP", ...)
	 *     id	- String, 会话ID(如C2C类型中为对方帐号,"C2C"时为好友ID,"GROUP"时为群ID)
	 * properties:
	 *   (Session对象未对外暴露任何属性字段, 所有访问通过下面的getter方法进行)
	 * methods:
	 *   type()		- String, 返回会话类型,"C2C"表示与好友私聊，"GROUP"表示群聊
	 *   id()		- String, 返回会话ID 
	 *   name()		- String, 返回会话标题(如C2C类型中为对方的昵称)
	 *   icon()		- String, 返回会话图标(对C2C类型中为对方的头像URL)
	 *   unread()           - Integer, 返回会话未读条数
	 *   time()		- Integer, 返回会话最后活跃时间, 为unix timestamp
	 *   curMaxMsgSeq()	- Integer, 返回会话最大消息序列号
	 *   msgCount()	- Integer, 返回会话中所有消息条数
	 *   msg(index)	- webim.Msg, 返回会话中第index条消息
	 */
	MsgStore: {
		/* function sessMap
		 *   获取所有会话
		 * return:
		 *   所有会话对象
		 */
		sessMap: function() {return {/*Object*/};},
		/* function sessCount
		 *   获取当前会话的个数
		 * return:
		 *   Integer, 会话个数
		 */
		sessCount: function() {return 0;},

		/* function sessByTypeId
		 *   根据会话类型和会话ID取得相应会话
		 * params:
		 *   type	- String, 会话类型(如"C2C", "GROUP", ...)
		 *   id		- String, 会话ID(如对方ID)
		 * return:
		 *   Session, 会话对象(说明见上面)
		 */
		sessByTypeId: function(type, id) {return {/*Session Object*/};},
		/* function delSessByTypeId
		 *   根据会话类型和会话ID删除相应会话
		 * params:
		 *   type	- String, 会话类型(如"C2C", "GROUP", ...)
		 *   id		- String, 会话ID(如对方ID)
		 * return:
		 *   Boolean, 布尔类型
		 */
		delSessByTypeId: function(type, id) {return true;},
                
		/* function resetCookieAndSyncFlag
		 *   重置上一次读取新c2c消息Cookie和是否继续拉取标记
		 * return:
		 *   
		 */
		resetCookieAndSyncFlag: function() {}
	}

};

/* WebIM API implementation
 */
(function(webim) {
		var WEB_IM_SRV_HOST = "https://webim.tim.qq.com";
        
        var browserInfo={};//浏览器版本信息
        
        var WEB_IM_SRV_NAME_OPEN_IM='openim';//私聊（拉取未读c2c消息，长轮询，c2c消息已读上报等）服务名
        var WEB_IM_SRV_NAME_GROUP='group_open_http_svc';//群组管理（拉取群消息，创建群，群成员管理，群消息已读上报等）服务名
        var WEB_IM_SRV_NAME_FRIEND='sns';//关系链管理（好友管理，黑名单管理等）服务名
        var WEB_IM_SRV_NAME_PROFILE='profile';//资料管理（查询，设置个人资料等）服务名
        var WEB_IM_SRV_NAME_PIC='openpic';//图片（上传图片）服务名
        var WEB_IM_SRV_NAME_VER={//不同服务对应的版本号
            'openim':'v4',
            'group_open_http_svc':'v3',
            'sns':'v3',
            'profile':'v3',
            'openpic':'v1'
        };
        
        var WEB_IM_SDK_VERSION='v1.3';//web im sdk版本号
        var WEB_IM_MSG_TYPE_C2C='C2C';//私聊类型
        var WEB_IM_MSG_TYPE_GROUP='GROUP';//群聊类型
        var WEB_IM_ACTION_STATUS_OK='OK';//后台接口返回成功
        var WEB_IM_ACTION_STATUS_FAIL='FAIL';//后台接口返回失败
        var WEB_IM_ERROR_CODE_CUSTOM=99999;//自定义后台接口返回错误码
        
        //消息类型
        var WEB_IM_MSG_ELEMENT_TYPE_TEXT='TIMTextElem';//文本
        var WEB_IM_MSG_ELEMENT_TYPE_FACE='TIMFaceElem';//表情
        var WEB_IM_MSG_ELEMENT_TYPE_IMAGE='TIMImageElem';//图片
        
        //只支持显示
        var WEB_IM_MSG_ELEMENT_TYPE_SOUND='TIMSoundElem';//语音
        var WEB_IM_MSG_ELEMENT_TYPE_FILE='TIMFileElem';//文件
        
        //以下类型，web端暂不支持
        var WEB_IM_MSG_ELEMENT_TYPE_LOCATION='TIMLocationElem';//地理位置
        var WEB_IM_MSG_ELEMENT_TYPE_CUSTOM='TIMCustomElem';//自定义
        
        //新增群提示消息类型
        var WEB_IM_MSG_ELEMENT_TYPE_GROUP_TIP="TIMGroupTipElem";//群提示消息
        
        //图片类型
        var WEB_IM_IMAGE_TYPE={
            'ORIGIN':1,//原图
            'LARGE':2,//缩略大图
            'SMALL':3//缩略小图
        };
        
        //下载文件业务ID
        var WEB_IM_DOWNLOAD_FILE_BUSSINESS_ID="10001";
        //下载文件authkey
        var WEB_IM_DOWNLOAD_FILE_AUTH_KEY="617574686b6579";
        //下载文件服务器IP
        var WEB_IM_DOWNLOAD_FILE_SERVER_IP="182.140.186.147";
        //下载文件类型
        var WEB_IM_DOWNLOAD_FILE_TYPE={
            "SOUND":2106,//语音
            "FILE":2107//普通文件
        };
        
        //长轮询消息类型
        var WEB_IM_LONG_POLLINNG_MSG_TYPE={
            "C2C":1,//新的c2c消息通知
            "GROUP_ORDINARY":3,//新的群普通消息
            "GROUP_TIP":4,//新的群提示消息
            "GROUP_SYSTEM":5//新的群系统消息
        };
        
        //c2c消息类型
        var WEB_IM_C2C_MSG_TYPE={
            "ORDINARY":0//普通消息
        };
        
        //群消息类型
        var WEB_IM_GROUP_MSG_TYPE={
            "ORDINARY":0,//普通消息
            "TIP":1//提示消息
        };
        
        //群提示消息类型
        var WEB_IM_GROUP_TIP_TYPE={
            "JOIN":1,//加入群组
            "QUIT":2,//退出群组
            "KICK":3,//被踢出群组
            "SET_ADMIN":4,//被设置为管理员
            "CANCEL_ADMIN":5,//被取消管理员
            "MODIFY_GROUP_INFO":6,//修改群资料
            "MODIFY_MEMBER_INFO":7//修改群成员信息
        };
        
        //群提示消息-群资料变更类型
        var WEB_IM_GROUP_TIP_MODIFY_GROUP_INFO_TYPE={
            "FACE_URL":1,//修改群头像URL
            "NAME":2,//修改群名称
            "OWNER":3,//修改群主
            "NOTIFICATION":4,//修改群公告
            "INTRODUCTION":5//修改群简介
        };
        
        //群系统消息类型
        var WEB_IM_GROUP_SYSTEM_TYPE={
            "JOIN_GROUP_REQUEST":1,//申请加群请求（只有管理员会收到）
            "JOIN_GROUP_ACCEPT":2,//申请加群被同意（只有申请人能够收到）
            "JOIN_GROUP_REFUSE":3,//申请加群被拒绝（只有申请人能够收到）
            "KICK":4,//被管理员踢出群(只有被踢者接收到)
            "DESTORY":5,//群被解散(全员接收)
            "CREATE":6,//创建群(创建者接收, 不展示)
            "INVITED_JOIN_GROUP_REQUEST":7,//邀请加群(被邀请者接收)
            "QUIT":8,//主动退群(主动退出者接收, 不展示)
            "SET_ADMIN":9,//设置管理员(被设置者接收)
            "CANCEL_ADMIN":10,//取消管理员(被取消者接收)
            "REVOKE":11,//群已被回收(全员接收, 不展示)
            "CUSTOM":255//用户自定义通知(默认全员接收)
        };
        
        //群提示消息最多显示人数
        var WEB_IM_GROUP_TIP_MAX_USER_COUNT=10;
        
        //当前长轮询返回错误次数
        var curLongPollingRetErrorCount=0;
        //最大允许长轮询返回错误次数
        var WEB_IM_LONG_POLLING_MAX_RET_ERROR_COUNT=15;
        
        //ie8,9采用jsonp方法解决ajax跨域限制
        var webimJsonpRequestId=0;//jsonp请求id
        //最新jsonp请求返回的json数据
        var webimJsonpLastRspData=null;
        //兼容ie7/8/9,jsonp回调函数
        var webimJsonpCallback=null;
        
        //错误码
        var WEB_IM_ERROR={
            
            //SSO 错误码
            '60002':'HTTP解析错误',
            '60003':'Json body解析错误',
            '60004':'转换为内部帐号体系时，发请求时发生错误',
            '60005':'转换为内部帐号体系时，解析应答时发生错误',
            //c2c 错误码
            '10100':'Json解析错误',
            '20001':'无效包',
            '20002':'签名鉴权失败',
            '20003':'无效的号码',
            '20004':'网络异常',
            '20005':'服务异常',
            '20006':'因第三方要求，拦截发送方请求',
            '80001':'安全打击',
            //关系链错误码
            '30001':'关系链解包失败', 
            '30002':'SDKAppId非法',
            '30501':'加好友来源参数错误',
            '30502':'加好友参数长度错误',
            '30503':'加好友个数错误',
            '30504':'加好友获取SDKAppId失败',
            '30505':'加好友执行任务失败',
            '30506':'获取好友列表错误',
            '30507':'获取好友列表元数据错误',
            '30508':'拉取好友列表行数据错误',
            '30509':'添加己方好友信息行数据错误',
            '30510':'添加己方好友信息元数据错误',
            '30511':'添加己方好友信息错误',
            '30512':'删除己方未决错误',
            '30513':'拉取黑名单列表错误',
            '30514':'添加好友新建任务失败',
            '30515':'已设置被加好友为黑名单',
            '30516':'被加好友设置禁止被添加',
            '30517':'未决一次被加满',
            '30518':'加好友组满',
            '30519':'加好友好友满',
            '30520':'好友已经存在',
            '30521':'获取好友资料信息不存在',
            '30522':'获取好友资料信息错误',
            '30523':'获取好友资料信息行数据错误',
            '30524':'获取被加好友的的黑名单错误',
            '30525':'已被被加好友设置为黑名单',
            '30526':'获取对方和己方的好友关系错误',
            '30527':'获取对方和己方的好友关系行数据错误',
            '30528':'添加对方好友信息时获取序列号错误',
            '30529':'添加对方好友信息时获取序列号元数据错误',
            '30530':'添加对方好友信息时获取未决错误',
            '30531':'添加对方好友信息时获取未决行数据错误',
            '30532':'添加对方好友信息时删除未决失败',
            '30533':'添加对方好友信息时获取好友数目错误',
            '30534':'添加对方好友信息时获取好友数目序列号不一致',
            '30535':'添加对方好友信息好友满',
            '30536':'添加对方好友信息元数据错误',
            '30537':'添加对方好友信息行数据错误',
            '30538':'添加对方好友信息错误',
            '30539':'加未决成功（用特殊错误码特殊标示和好友加成功区分）',
            '30601':'加好友回应动作参数错误',
            '30602':'加好友回应参数长度错误',
            '30603':'加好友回应好友个数错误',
            '30604':'加好友回应获取未决错误',
            '30605':'加好友回应获取未决元数据错误',
            '30606':'加好友回应获取未决行数据错误',
            '30607':'加好友回应获取好友数错误',
            '30608':'加好友回应获取好友数序列号变化',
            '30609':'加好友回应设置己方好友信息行数据错误',
            '30610':'加好友回应设置己方好友信息元数据错',
            '30611':'加好友回应设置己方好友信息错误',
            '30612':'加好友回应设置己方删除未决错误',
            '30613':'加好友回应执行任务失败',
            '30614':'加好友回应未决不存在',
            '30615':'加好友回应己方好友满',
            '30616':'加好友回应组满',
            '30617':'加好友回应好友已经存在',
            '30618':'加好友回应设置对方好友信息时检查好友存在失败',
            '30619':'加好友回应设置对方好友信息时检查好友存在元数据错误',
            '30620':'加好友回应设置对方好友信息时检查好友存在行数据错误',
            '30621':'加好友回应设置对方好友信息时获取好友数失败',
            '30622':'加好友回应设置对方好友信息时获取好友数序列号变化',
            '30623':'加好友回应设置对方好友信息时添加好友元数据错误',
            '30624':'加好友回应设置对方好友信息行添加好友行数据错误',
            '30625':'加好友回应设置对方好友信息时添加好友错误',
            '30626':'加好友回应设置对方好友信息时删除未决错误',
            '30627':'加好友回应设置对方好友信息时设置序列号元数据错误',
            '30628':'加好友回应设置对方好友信息时设置序列号错误',
            '30629':'加好友回应新建任务失败',
            '30630':'加好友回应对方好友满',
            '30701':'好友数据更新参数错误',
            '30702':'好友数据更新获取好友错误',
            '30703':'好友数据更新获取好友元数据错误',
            '30704':'好友数据更新获取好友行数据错误',
            '30705':'好友数据更新标配信息行数据错误',
            '30706':'好友数据更新标配信息元数据错误',
            '30707':'好友数据更新标配信息错误',
            '30708':'好友数据更新自定义信息行数据错误',
            '30709':'好友数据更新自定义信息元错误',
            '30710':'好友数据更新自定义信息错误',
            '30711':'好友数据更新执行任务失败',
            '30712':'好友数据更新的好友不存在',
            '30713':'好友数据更新组满',
            '30801':'好友导入参数错误',
            '30802':'好友导入获取SDKAppId失败',
            '30803':'好友导入读好友数错误',
            '30804':'好友导入获取组信息和序列号错误',
            '30805':'好友导入获取组信息和序列号元数据错误',
            '30806':'好友导入标配信息行数据错误',
            '30807':'好友导入标配信息元数据错误',
            '30808':'好友导入标配信息错误',
            '30809':'好友导入自定义信息行数据错误',
            '30810':'好友导入自定义信息元数据错误',
            '30811':'好友导入自定义信息错误',
            '30812':'好友导入好友满',
            '30813':'好友导入组满',
            '30901':'好友关系检查参数错误',
            '30902':'好友关系检查执行任务失败',
            '30903':'好友关系检查获取好友错误',
            '30904':'好友关系检查获取好友行数据错误',
            '30905':'好友关系检查新建任务失败',
            '30906':'好友关系检查获取对方和己方好友关系错误',
            '30907':'好友关系检查获取对方和己方好友关系元数据错误',
            '31001':'获取未决参数错误',
            '31002':'获取的好友来源错误',
            '31003':'获取未决时主键不存在',
            '31004':'获取未决时序列号错误',
            '31005':'获取未决时序列号元数据错误',
            '31006':'获取未决错误',
            '31007':'获取未决元数据错误',
            '31008':'获取未决昵称执行任务失败',
            '31101':'拉取所有好友参数错误',
            '31102':'拉取所有好友时字段数目异常',
            '31103':'拉取所有好友主键不存在',
            '31104':'拉取所有好友获取序列号错误',
            '31105':'拉取所有好友获取序列号元数据错误',
            '31106':'拉取所有好友获取字段对应的字符串错误',
            '31107':'拉取所有好友关系链标配信息错误',
            '31108':'拉取所有好友关系链标配信息组数据错误',
            '31109':'拉取所有好友关系链标配信息行数据错误',
            '31110':'拉取所有好友关系链自定义信息错误',
            '31111':'拉取所有好友关系链自定义信息行数据错误',
            '31112':'拉取所有好友执行任务失败',
            '31201':'按列表拉取好友参数错误',
            '31202':'按列表拉取好友时字段数目异常',
            '31203':'按列表拉取好友主键不存在',
            '31204':'按列表拉取好友关系链标配信息错误',
            '31205':'按列表拉取好友关系链标配信息组数据错误',
            '31206':'按列表拉取好友关系链标配信息行数据错误',
            '31207':'按列表拉取好友关系链自定义信息错误',
            '31208':'按列表拉取好友关系链自定义信息行数据错误',
            '31209':'按列表拉取好友取执行任务失败',
            '31210':'按列表拉取好友获取字段对应的字符串错误',
            '31211':'按列表拉取好友不存在',
            '31212':'拉取好友新建任务失败',
            '31213':'拉取好友资料标配信息主键不存在',
            '31214':'拉取好友资料标配信息错误',
            '31215':'拉取好友资料标配信息行数据错误',
            '31216':'拉取好友资料自定义信息错误',
            '31217':'拉取好友资料自定义行数据错误',
            '31301':'请求添加的黑名单个数非法',
            '31302':'校验黑名单的SDKAppId失败',
            '31303':'校验正向标配好友关系失败',
            '31304':'删除正向标配好友关系失败',
            '31305':'校验黑名单失败',
            '31306':'添加黑名单失败',
            '31307':'待添加的TinyId在黑名单里',
            '31401':'请求校验的黑名单个数非法',
            '31402':'校验黑名单的SDKAppId失败',
            '31403':'校验黑名单失败',
            '31501':'请求删除的黑名单个数非法',
            '31502':'校验黑名单失败',
            '31503':'请求删除不存在的黑名单',
            '31504':'删除黑名单失败',
            '31601':'请求拉取的黑名单个数非法',
            '31602':'拉取黑名单失败',
            '31701':'删除好友的请求个数非法',
            '31702':'删除好友的请求类型非法',
            '31703':'校验正向的标配数据失败',
            '31704':'请求删除的号码不是好友',
            '31705':'删除正向的标配数据失败',
            '31706':'删除反向数据失败',
            '31801':'删除未决的请求个数非法',
            '31802':'删除未决的请求类型非法',
            '31803':'校验正向的未决关系失败',
            '31804':'请求删除的号码不是未决',
            '31805':'删除正向的标配数据失败',
            '31901':'拉元数据失败',
            '31902':'写元数据失败',
            //资料错误码
            '40001':'资料解包失败',
            '40002':'sdk appid 非法',
            '40003':'用户不存在',
            '40601':'设置资料头像URL太长',   
            '40602':'设置资料读取数据失败', 
            '40603':'设置资料非法字段',  
            '40604':'设置资料系统错误非法字段长度',   
            '40605':'设置资料请求参数非法',   
            '40606':'设置资料设置标准数据失败', 
            '40607':'设置资料非法字段',   
            '40608':'设置资料系统错误非法字段长度',
            '40609':'设置资料设置自定义数据失败',  
            '40701':'设置头像获取数据失败',
            '40702':'设置头像设置数据失败',
            '40703':'设置头像URL太长',
            '40704':'设置头像头像参数数据不正确',
            '40801':'获取资料字段非法', 
            '40802':'获取资料系统执行标配任务失败',
            '40803':'获取资料系统解析数据失败', 
            '40804':'获取资料非法字段',
            '40805':'获取资料系统执行自定义任务列表失败', 
            '40806':'获取资料系统错误自定义字段长度非法', 
            '40807':'获取资料标配主Key不存在', 
            '40808':'获取资料标配读取数据失败',    
            '40809':'获取资料自定义主Key不存在', 
            '40810':'获取资料自定义读取数据失败',  
            '40811':'获取资料时Account不正确',
            '40901':'获取头像系统执行任务列表失败',
            //群组错误码
            '10000':'群系统消息解析失败',
            '10001':'调用时所携带的签名校验失败',
            '10002':'系统错误',
            '10003':'请求命令非法',
            '10004':'参数非法',
            '10005':'请求包体中携带的用户数量过多（超过了500个）',
            '10006':'被频率限制',
            '10007':'操作权限不足',
            '10008':'非法请求',
            '10009':'该群不允许群主主动退出',
            '10010':'群组不存在，或者曾经存在过，但是目前已经被解散',
            '10011':'解析Json包体失败',
            '10012':'发起操作的用户ID非法',
            '10013':'被操作的用户已经是群成员',
            '10014':'群满员，无法再加入新成员',
            '10015':'群组ID非法',
            '10016':'IM云发起第三方回调之后，APP后台返回失败',
            '10017':'因被禁言而不能发送消息',
            '10018':'响应包大小超限，导致无法正确应答，请尝试减少需要获取的数据量',
            '10019':'被操作的用户ID非法'
        };
        //当前登录用户
	var ctx = {
                sdkAppID:null,
                appIDAt3rd:null,
                accountType:null,
                identifier:null,
                userSig:null,
		contentType: 'json',
		apn: 1
	};
	var opt = {};
	var xmlHttpObj;
	var curSeqMap = {};
        var tempC2CMsgList=[];
        //表情数据索引，用户可以自定义
        var emotionPicDataIndex = {
		"[微笑]":1,
		"[撇嘴]":2,
		"[色]":3,
		"[发呆]":4,
		"[得意]":5,
		"[流泪]":6,
		"[害羞]":7,
		"[闭嘴]":8,
		"[睡]":9,
		"[大哭]":10,
		"[尴尬]":11,
		"[发怒]":12,
		"[调皮]":13,
		"[呲牙]":14,
		"[惊讶]":15,
		"[难过]":16,
		"[酷]":17,
		"[冷汗]":18,
		"[抓狂]":19,
		"[吐]":20,
		"[偷笑]":21,
		"[可爱]":22,
		"[白眼]":23,
		"[傲慢]":24,
		"[饥饿]":25,
		"[困]":26,
		"[惊恐]":27,
		"[流汗]":28,
		"[憨笑]":29,
		"[大兵]":30,
		"[奋斗]":31,
		"[咒骂]":32,
		"[疑问]":33,
		"[嘘]":34,
		"[晕]":35,
		"[折磨]":36,
		"[衰]":37,
		"[骷髅]":38,
		"[敲打]":39,
		"[再见]":40,
		"[擦汗]":41,
		"[抠鼻]":42,
		"[鼓掌]":43,
		"[糗大了]":44,
		"[坏笑]":45,
		"[左哼哼]":46,
		"[右哼哼]":47,
                "[哈欠]":48,
                "[鄙视]":49,
                "[委屈]":50,
                "[快哭了]":51,
                "[阴险]":52,
                "[亲亲]":53,
                "[吓]":54,
                "[可怜]":55,
                "[菜刀]":56,
                "[西瓜]":57,
                "[啤酒]":58,
                "[篮球]":59,
                "[乒乓]":60,
                "[咖啡]":61,
                "[饭]":62,
                "[猪头]":63,
                "[玫瑰]":64,
                "[凋谢]":65,
                "[示爱]":66,
                "[爱心]":67
        };
        //表情数据，用户可以自定义
        var emotionPicData = {
		"[微笑]":"data:image/gif;base64,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",
		"[撇嘴]":"data:image/gif;base64,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",
		"[色]":"data:image/gif;base64,R0lGODlhGAAYAPf/ALeCR+jl4t2cHP+5Esurhc6EDv/9sv+0h/nFPf79/P3RZ//SLtM1AOpFAP/2eNs6APyYaPK+OP/oTPenI+u5U+Xh3vCjC9aiatulQ//DHfTGW9eOEf/hQsYsAPncm//5mP3dQv/LJv/89v/7lf20EMOJPv/ePIIxAP2xDKhhEf/wXP/p3dnUz//+0P/EH//FH//9uP/mSP/5h/VNAP/cOv/1bf3gSs0xAP/y6v+1D/SoDP/UMf/7oP+6E//bOe5IAP/PK+VCAOOZHf/tV8RxGv/xX/tRAMB3J/+/GcqMS//AGv379///z+OXCvW+Jf/pTv7dPv/dPdqOC/jGMf/9yPzZPvFKAP/8m/zPNPbLNv/4e+umFvfGKt+TG+afEP/xYP/gVP/bSO28gP/PLPCsWfqxKPCmN+ymGtfRzP9UAP9gANfSzf/+x+Pf3PHbxPv6+ubCm/fr3t3Y1NzX0/NMAP/3eOpYAO24S7NvGv2ESuWmJu2+WPW5M+65N/PesN/a1rd7MvTy8eG/jP//18CXZ/yshf346+rn5L1/Lufe0Ml5Dcx4Cf/WNPvTPf3XOa5mD/GsEqxtJeKyUtKWM+auLvfBRfXBS/W3KenIkbmIU9iVFfDu7MyLIsJ8FPZRAvry5/vhpfzw1vzlr7FzK6hdCciQPpw7APrML+A+APfIW/jKX9mwbN+4b713FM6ACsWebdGVVPbYmdLFuPfKZ+rj3OGgIceCFsuJGvvLMNmYIcivlunNrr9UAP/uV9xVAOjXzOaqH/+XWcRuCf7hR/mzE97Z1eG7kuGAHOGPXf3MRdqkX/q2MvyzO/3HQvvQefzSh//WwvquMu21h/XGM/3URf68IfaZIPi3G/v48/7VYP3cP/atRruRZfi4Gv/rUPrIfvrYQ+1HAP/Lsf/ePv/JqN/JsaE9AK5wLPHAgP/DnuaqIPdOAPuvDNincv+7Fd1hANjAp8ZxB8ZzCcx3COCVEfv38v/8oN62ist9CO+8k//7n/2xC4czAL9iAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFFAD/ACwAAAAAGAAYAAAI/wD/CRxIsKDBgwgTKhQhSlWlS3wszfIQSuFAUAgagQDBAYojLFP2+FmYysawGBKeSIjBgYYPXH0oIEyggVoabw3AfFExJEwaEw2qTZN00AM4T4Ua/AiipU4NpEqDvKDEqqChCNqM5Jnx48GHETK0zgj3IMQ1DIkIxsoSo1mDBze+wTBgT8HbG2WAZNiy6s3AO1UkqMjW4RmbFmwMjCCMwMSCF8QmBRioZ5yEIlquwGgxqAWMK1q+PHH8YsCtOQNrRRHsYIQBNkwSj3CgQoJjFwNsrRkowEeMXjVk6DMwl4eMGr1i+NCboxOagbkYcVDUr7r16/1chUBCotVzgRi40LboB8dNHH/o0cdxA6ffC3c6EO0WiEndjn788uvff6KfkhxSvCLHQJ9wcsp9/JhihxoM2mEOP/1k0IMFgMhyCEGCCLDAAv3I8w6DarwTT4Q9oPAIIX/4NVACpWgyRggbLGLdPPQo0QM7rgCwxoUGlbCBExm8IGQGSLiTQxMpZIJGGwkRgEcBXkAyAAk6NIHPObqwUIFFtBAAwCikpBAJANygUUwgFgmUwCZtyIEGC3NUwGOadBIUEAAh+QQFFAD/ACwDAAUAEgAQAAAIqgD/bTNCJ1qaBsz+JUtjZYKRBtb+SUwDDcKPdXRQ/UsjDkI4jAwk/jMCgc6PBkFCkjSJ8kY3ictQonrAAN0/ZzJpThD5zwwDBjeQMZFI5meHYyKjPPlHoYMYnv80dOgzTqQJiXUkUmkhMqvIF/9o8OQh0h5Psf8GQF3Ltq3bf8DeyuUZ7J8vXr+IuFUm7cAKHNiW+DPmbu4/Yf787epi+J8Qf7AaS4R1hGdAACH5BAUUAP8ALAMABQARABEAAAibAP9poJbGWwMwRf71CpPGRINq0/79A+epUIMfQbT8q1HxYpAXErUZyTPjx4MP/2SMnBHuQYhr/2I0a/DgxjcY/+wpoHmjDBCJ/1Rk6/CMTQuJI4YiiAJUopYrMJj8k/pPS5EnJiQybcqGalOgPv4NkWjvK1izaNOqXcu27dcBadNJrNd0X9OfbtUqOfPP3xG3QvzByvsPVhKgAQEAIfkEBRQA/wAsAwAFABEAEgAACJwA/20zQidamgbM/iVLY2WCkQbW/v1LAw3Cj3V0UE0UByEcRgYSjUCg86NBEJAiSZq80e3fMpOoHjBA988ZTJkTJP4zw4DBDWRMJJLp2eHYPxc6KXQQ0+Jf038aOkQYJ9GEzqtYs/aSyENnV500soodS7as2bNYe2AlsiofOYnYdPZAgdYsUolIdCap+89fCbRC/F0ohxZeu3s6AwIAOw==",
		"[发呆]":"data:image/gif;base64,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",
		"[得意]":"data:image/gif;base64,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",
		"[流泪]":"data:image/gif;base64,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",
		"[害羞]":"data:image/gif;base64,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",
		"[闭嘴]":"data:image/gif;base64,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",
		"[睡]":"data:image/gif;base64,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",
		"[大哭]":"data:image/gif;base64,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",
		"[尴尬]":"data:image/gif;base64,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",
		"[发怒]":"data:image/gif;base64,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",
		"[调皮]":"data:image/gif;base64,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",
		"[呲牙]":"data:image/gif;base64,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",
		"[惊讶]":"data:image/gif;base64,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",
		"[难过]":"data:image/gif;base64,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",
		"[酷]":"data:image/gif;base64,R0lGODlhGAAYAPf/ANWiOtWkVP60Dv/89v/cOvjGMP+5E//XNf/1beXEav/wXdnUz//VMbhrEv/wX2loS/+7FDIsDf/GIOSXCv/aOf/DHf/tV//pT//9sf/ePf/AGv/FIP/+0P/6lf/KJf/4e//5iP/3eP/3d//dPf/EH//9uQ4LA9ShMtSfLP7hRf/gQf3dQ/7dP97bgv/TLv/PK//LKdXHSvfGK/y1Ef2xDPGsEtSmRvCjC9ilGdqOC5+SM7+HEnJuNmZjLmZaGxgUBdfRzP/fRf/lR6WclKpSBr5pCdfSzf/sU//RLf/qUP/mSL2Xdern5OPf3NzX0/////v6+t3Y1I5lQf/iQv/LJv/oTP/pTf/oTf+3EP/xX//uV8t+CPe8N9LFuFdXR65wLPncnOG/jOrj3NOYEPWyEs2sg+fe0P+/GcKKPlpZNv/ePr13FKxtJfbEL/XBS5SMhffIW8iQPvry50g4CYV+ePW3KeGgIe24SyQiDLiESfzw1suJGqdgEMyLIu7CUntvI86ACP/7mzkyDqhdCf/hQrSAR/jbmrd7MvPesOC0N++zMPjKX/fKZ/3XOcivltiVFf/TMOnIkfOpDYczAPTy8bmIU5OQTruRZcCXZ/Du7PbGWczHbdmYIZyTOv38/P79/Pi3GvnEJfvhpfzlr65mD//MJ+afELFzK+HZZuWmJvvLMPrNN/zPNP346/C/JMJ8FP/+x+ro5cWebdWOEfbYmfHIWG9tRv//197Z1d/a1v7IJXVwMmZeIPfBReCfJMeCFvuvDP7nT+jl4t2cH/3fRMmphu65Nu3HU/W5M/SnC/CwH86EDr1/Lv/2dGZgJrNvGtixa+Tg3ebi3//+/PzfQf/qUY13Hf/rUfPRNtmkQtylRKpjE9KWM7eCRbVpHeC3PTw4Nfz3k3p0bv/rU//8mtejTdKUINKYJeaqH+XFW+aqIP/3e/OyGO7YbeCoJOC7T7hsGO7Zgfn4woRzIMaHK92bGN2cGMaJNf/XNP/7n9ahQbVpGf/RLv/SLQAAAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFFAD/ACwAAAAAGAAYAAAI/wD/CRxIsKDBgwgTKhwwalGvOsjcMAKjR+FAUVxWrUhBiEUjVgVqIVoIp0CwK1esWFFCiAADVcb8IJymqcC4JFoUZFGgJYmQDAx0KTt20FCbC4lOIBDx4R2CLEfOueO3wVeCgq0UEUuSBZ6NDuTugWh2ogEhfFRAZTNDkJYJf3h2bQpAJIG3eEQAxPgTwZ+/HdCgDLzzw6/fB3RhEdHHw7DfMdyEDUwlyPASKV5ucSiRxp+UJYbJ7HEy0M48y08c+30C2t8cA7+MDByGra/jBxhsqf6BA8srIAM54aOmw1kPSy0CdQCBqhMvH9ZcnRGwBrhAbTIICDmSBUGIdSKeHrYRQgCJBAjJmMkWGEkdgwxCruXc2fMnAyoasOSQFWWgnD6hUEDAFEpUYcUVSgThUikVGHDDIV3EQlAY9VBxAD4UjKBGEUUEgQQVFUBAAymY5CLYQJ/E8YgEkLyARD9FTBKEBBoYAAwgeRjBxEFozMIODCRsEEQQZ0CAxQTbVAJEEwmV8cwyptRgwAySTLDFF44sII1FYhTTzSmD8MFGIZcAgQslFgnkSSZNRAHEAk5Es2OadBYUEAAh+QQFFAD/ACwDAAMAEQARAAAIhAD/CRwoUAXBgwQvVPm3cArCgYlQDPxmodo/c+4QHmkAQCC9fw5QNCCABGGzf0TS7WtH5F8Shw/zlSOCgQgABA+HgBMoj8M/DOEGihsy8M0QojmHvCFIBynCIXQeSp1K9Z+Ghx9CHOwnEN1UiyP+eZh6oUgRqfYGEqj60AXbgRsGXj0YEAA7",
		"[冷汗]":"data:image/gif;base64,R0lGODlhGAAYAPf/APzjqm0pAPymN//rXf+0S+WnJv/4h93Y1Ojj3f7TNf7dRPjGMfx6Rfz16cOaappFA//wXdaDFfvNeeqYKvjamv/qUPu0ErBqFv96a7dlDf/ubdubKfuuDf/oTf/lSvfKZ/+ZMdLFufbm0P/+x9y1bf/6nODEVv7aOf/2df7VYern5NuZIP+5E//8suCoIteZM7aCR//89vSVF8+hMP/DHbl3TtfRzMOKPcurhf7ZQPa7NenTxv/SPP/+0f79/J07AP/RLs6CC/+/UMitlf/IMfOfMP/dPf/6lcSIJv/SUvbicLuQZv9rTqhhEsN8FP+XTf+1YfbLNf+bJeumFvfLX/+SYvflmKlbCf+mKf/3eNulQ/+DN/fIW/qwLu24S6FIBf9ZXMmDG/CwH/6MK/+PXP/FIP/1bf/MOP+LRv+8PP/gQtnUzv/LJ9ChiL51E+LGtOSXCv/cTv+hXf+/Gv/OTf/7oP/dUfrUeP9zU8t+Cf/NL//OK/+yGKFTD/6jG//lR//FXP/9uPnCJv/CKP+5Iv/uV/22Mv2rEf/nTP+tUvfBRchaHP+wPP+wJv+JU6tYJP/HS8eCFuK9jOC1MfKqD//FKP/BIf/jTf+iQt+gIfbeW+C8Pva8Jv+nc7t4NeafEP+rTv9zXf/mXtGPGPOxGP9fZf+2D//pWP97Xv/aXP/TTu3SrOPf3Pv6+axtJa5wLPbEL/Ty8enIkfDu7O+zMPXBS+msLfW3KciQPvzw1vXGWbeBMO2+WLFzK7d9IfvIK/nFL7mHVP/FQPPesOm4Uv/4e9CFJ/9gaPaAVuKyUv+vR9qymuje0L5/LsuJGv/xX//jRv/rU923obBjELJrQPm6Ke3Cb+WFRe2jS+fIqLlQEOnTvO3IcNWqka5mO/bmsLJmJ/LEMP+xWv/DOPNxOPvjff/bOd6HEP++Mf/LR+JaN+2WNOihJPO/KP/0lP/RYOa6MP+3cdnOx8SVgf+oZLlPFblXC/rDJv6nF+2AO/+qHP+kSf37+oczAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCAD/ACwAAAAAGAAYAAAI/wD/CRxIsKDBgwgTKowBgIqiWzpqfaCQS+FAADqAJThh5ASQX5x4DVvIBZiCDhVSIoKm5sQ9W8QQ+tC1oEK0QhCeQShU4U9LIGKSHaQAK9qmfv12Fcti5pkvpC4SZCJRsAEtDzP6mTBwpMQRAyieVZjUb5QgLcwIUojioZAZA3VaBGpRx4CZQn/M7aExhUSrgV5ydICQ5UiLET1GtDiSBUIHI0DKWHiBYGABNR2eZSkRqIfnQCWKPXsc2YKzAwMzGfEwAIW7w4kXoxhwKYceGiwi2UjNI06qaRKsULjSosS0FKkUTUNHyIKT3QJXnIEkBNuXAH24fdX1APs6AVgOucWB/k9LNQKg6NGDIqFcFg2iACV68gSEHxnNyMtil0ZZInGAvCMKBKfYkQ4BmIBg3zkOoCZQA8ZUM44w6agSxyUd/KEAD+MY0og+MngSggoESVJAJXpslIMRHSUARCVz8MHBNA3+NZAPuLhQBht7AAEEUmyUMQcLHAQBgw0kGnRDJqTQUAZSSLFgChxNBGMDKwnhgEQQn1DCggWUwJHHK0OsUZlCCOAAQy9XNOEKDEvYcEAsFgnkwyysHGDDGgewkmSdgBIUEAAh+QQFCAD/ACwCAAQAEwAOAAAIngD/Cfy3QM3ADgMTKly4UA9DhSgeSpw48A9FDxQzDoQgEQKihZdEfRkZ4IHAkQ9K/rP0b8U/VUkubPMXIINAN8xoZjDUiM+/cQTkXLvy5Z81gcmIXsmHRgq+f132OUKFoUq8OwJTiCODBw+DMQInMHpChgw9QCkExiHwxBGDLVIGdklDQAgkVXb+YUxniBEWPwuJ6OGhcM8/Qv8OCQwIACH5BAUIAP8ALAMABQASAA0AAAiTAP8JHEiQIJCCCLMgXMiwocM/DiMOfEYFSZ8m3wSWC9OnD7x/NFgMDCMiwL8wAkmaDENkIB1AYVb9W4XypEyajASmAUUG2YUHFyQIpPLzAgMGIPwIeBKq1DEMnSSg+PdOTigwYJhsEYjJESpUVaC8E5gkkSM8TBiMiSCQkTICQpIMzCGMkQAQUggO+ncGoZ69BAMCACH5BAUIAP8ALAYABAAMABAAAAhKAIEp+EeQ4J+CCBMW1KOwocOCmjZEeGGFoBKJK6KEEREgQBiCGzuGyeCvYwaCJE2S9Ofv5L+VLRXWeUizZsEUNePY3MnzHwuCAQEAIfkECRAA/wAsBAADABQADgAACFcA/wkcSHDglzYFBS5QUxCaQEH/vjxCmLCiQCBOutXoZtHijx3+MuzomPCHP387fvDzQFJgOJEof7RqOTDTxwzz/iGiKXDUDzfyeAoVWGKo0aNIW9rhGRAAIfkECRAA/wAsAAAAABgAGAAACP8A/wkcSLCgwYMIEypcyBCADmAJThg5AeQXJ17DFMbgskBNhwoVOiCCpubEPVvGWiHUtaBCtEIQnkEoVOFPST0/mvE7CCvapn79dhXLYuaZL6AuMv14pMKghxn9TBg4UuKIARTPKkzql+HNmx8G/xTStCHCCyst6igpuyLKD3/+li3xQbADhDAiAgQIM6IFXr1h3sJ9tHNgh2cZ/OnN0CNQ4sWC/YEleElUYrgZ+l72l2HUj2w/lhSkAyjMKn+rwrQoYRp1GEYZfmSwURAUGWQXHlyQYJVK7gsMGIDw44Y2wSehSh3D0EkCCg3v5IQCA4bJFhnNjA/E5AgVqipQUkA0OJUkkSM8TBiMieDgQMEujJQREJIkTgcPOYQxEgBCigxPITTF0IAEFpiQKQYmqOCCDBIYEAAh+QQFEAD/ACwAAAAAGAAYAAAI/wD/CRxIsKDBgwgTKowBgIqiWzpqfaCQS+FAADqAJThh5ASQX5x4DVvIBZiaCig7IIKm5sQ9W8QQ+tC1oEK0QhCeQShU4U9LIGKSHaQAK9qmfv12Fcti5pkvpC4SZCJRsAEtDzP6mTBwpMQRAyieVZjUb5SYL28IUojyp5CmDRFeWGlRRwncFVH25JEGrtVALzk6QAgjIkCAMCNaEDYcpt0Pfz/WDCygpsOzDP4MZ+gRCLNmN8v8LasxMJORS6Iw+/OXIbFq1o9X/xi4ggcdQGFW+VsVpkWJ3LvDxIZMOw0oMsguPLgg4SsV5RcY1Hvj7423gVoEPAlV6hiGThJQaLl4JycUGDDqtP34MmSgrAmYHKFCVQVKCginkiRyhIcJgzEROHDAQA0Y0wUjyhAgRBJxdOBBDsIwIgAIUsjgSQgqECRJAYMQcQYPORjRUQJ6DEIIH4dMI6BfA/mAiwtlsLEHEEAgxUYZc7DAQRAw2JChQTdkQgoNZSCFFAumwNFEMDawkhAOSATxCSUsWEAJHHm8MsQaCFiEAA4w9HJFE67AsIQNB8RikUA+zMLKATascQArP65pJ0EBAQAh+QQFEAD/ACwEAAQAEwAOAAAIYAD//Vvwr4PACv/+CFzIsKHDhxAjSlwIgaEgLcz+eZi4kMYUEhwXAilj4QWCkP+AkPri5ABKInmkXbGBssiPfz9CoFy07N+yGih/+Bt6M6RQoijtvfH3hhrKc19+UHsTEAAh+QQJEAD/ACwLAAQADAARAAAIWAA7/IP2r6DBgwgTKlz4bKHDhxALlmHhzKElFpEWMmrEx4kNhQzGPHDzMSGTRdL6lERI7se/HyEUZlj2b1mwf+YQ/vDH02XCnT0V9nnj700NhUOo/ajxJiAAIfkEBTIA/wAsAAAAABgAGAAACPoA/wkcSLCgwYMIEypcyLChQ4EdEEFTc+KeLWIP/0EoVOEPRSBikj3MYuaZr379XCTIRMLhEQMonlWY1G+UIC3MDP4x2KKOkg0RVkTZQ2MKiVYMR7QIIyJAgDBAylh4gYBhj0AZ/DnNAIQGC2cHkrbI6s9fBiKWWESywbBFiTCr/K0Kw6gRHydsF76kcuHBBQYMQPhxk1chCg3v5IQCA4bJFhnNCieEcCpJIkd4mDAYE8FBWIV2OkDLIYyRABBSZHgKoYKhkRMJ9AwixOfQNM9IF6JkU2YOCw5BYNhozRBlPxam4DQJZoOVQxYWKMHJ82rImqoZs2vfXjAgADs=",
		"[抓狂]":"data:image/gif;base64,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",
		"[吐]":"data:image/gif;base64,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",
		"[偷笑]":"data:image/gif;base64,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",
		"[可爱]":"data:image/gif;base64,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",
		"[白眼]":"data:image/gif;base64,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",
		"[傲慢]":"data:image/gif;base64,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",
		"[饥饿]":"data:image/gif;base64,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",
		"[困]":"data:image/gif;base64,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",
		"[惊恐]":"data:image/gif;base64,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",
		"[流汗]":"data:image/gif;base64,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",
		"[憨笑]":"data:image/gif;base64,R0lGODlhGAAYAPf/APziqP/9RfS7Nf/VPNfRzMqaZv/FKP/xWt7Z1f/oVPnKXf7WQL9qDP6xDfjQa+jl4v6uCuOpQ+OSC//cRfjCR/3aRf/uWfWlCue6OcaJRv/DJP/JLv61Ev/kUfatFdWJFeOrLf//OuzUS//5Vv+4FdWxg7Z9G+fRQ//1WuuaCsKEW//7Usd5Gf/qVv/LMOuqJf+2E/nMO8N7K+WgHv/eSOfDQ/nGMaM+AOfKs9iTHf/ROf2rBuKhIvi1G+GbG//0WtqDBt60av/KMO/SO9uKDeGUEv/AIdTGt//dSP/899ajLP+6Gv/+P//EJ//+/Mx6Dv/SOf/7UOabFOfTPf/9SOfOR+fJR9qGCP/mUvm5IP/7TvvZRv+6GP7hTLZ6IO/NQ/fMPP/mUf/iTf/+POqWBdqaIv/weMx0BrZ1HfzNNuCOC/7PN/WiBv/YQP3gTP/gSvCoGHouAP/4WfzRPOzaQ//8UP/8TtSxOv/SOoExAP7iTv/ROOzPSvzHLvjHNPm4IPnCK+ypH+ylGY01AL9iAP9gAF0jAP/////PNfv6+sdwCepYAMxiAP/3Wv+/IOBhAOro5dCQPdlhAOjDi8NqBe7Lkc2AE/7469GuhtCzleikIdKEE9CFGs+jbfa4KcBuEsF3JNycM/Ty8ePf3Oje0NnUz8NxD9iPGvC6S/fGWOqxLvvz59zX0+S7b82ILei0UvXesOKcINmSIfTAOMiQUu66Uubi3+vj3PjZmPncmsiFMseMSNWWPfHbxJw7APfr3vTi0Pnv5YlfRv+5F/C/WOzYzP3jTvnHPsuRY//sV/3x1dXGvfrcnPeqD/i/Kf/oU+2iE/q0F8+fTf3cSPCvIv3kT//pVc+aNffJN8dgAPq/JnxNMe/TMv/lUfvTQfzWQvvXRPnINvzBJf3eSu/FP+SoKN/Ba+vGQPzXRNaPGtiNF/3qvvbbTdW2QMx4C+PBpv3fTOzcPJdEBceNZf+0EPTRh7dxP/m7JP+7Gv3iTe/UL//XP/3eSdKHG4czAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFDAD/ACwAAAAAGAAYAAAI/wD/CRxIsKDBgwgTKlzI8F8SAAooeBJAwQEzZQ0BHAOnp5u1MOO+YSMGS2ESBecGDeJz4ICFGipVCaiF0EmqaoOsVBnUqBGKnDDXYHt1MNeWFl5QjDARZcUILwcSoNnnQlWrgpdmubGg1A6VAFTqjEBhIcwERPcikCKIK4Y1EJz6yZ1LF8QeA3CCJBqIqoK1MjiABTtEmPCvXshyQDEQLdSDgS+QJFDkr7Lly/IU3R12itVATRPCULpMurIiRBpIfCAwcMY+PTlKX86jzoURDptYC4ylY0I3Qv58LSpEfNGNQYTu4mtgSfe/CIAG0PjNSBLxQo8YERogxAiMC66cV5sK5GLABDFlnhBa/4THABcauDSQ0AnBwFWy+giBsm8Cjf8T7AMFfEvQw4YuR0BC0CRSbGCAC4jsgcceiLhggBHDNLCDKQUgsNdATvBSxIUaNGGAARo4gg8MGl6xCwEKGhSJGn+QMMyNJHDQAARkfEILAaMkVAILV6RwAQQ7sEEGEDJkUootC92CSQYyMMAAKBkUQAACojTkpUABAQAh+QQJDAD/ACwDAAMAEgASAAAI0QD//TNEsITAg9IIHlwo8BvDfzEeCszXzcKBgy26dZkjkc+gQSLk/Pth5SMGiYOqnBi0QuAgKzUG/RNyEN4/L/+0mBCoBec/NAyfHWi0ggqTMUyorGh0IAGNf00EJhi6IsCYEGMC1GHq9OAEayA49RtLtiwIKAsV4QAW7JBbt7960WLYhZLEg/4U/XNEb8+/HP7++RtMeHCeDw8J+fO16OCiG4MI3SXESFKhy48YSf43bKELgTmeEBr9xAfNfw3u6oCC9iAXehId3YVwN8tdhgEBACH5BAkMAP8ALAAAAAAYABgAAAj/AP8JHEiwoMGDCBMiNMRwGcFlDA0pJHjEkAIKngQYksZM2USBAI55Q4LkDY0Fc/wQg6UwiQI3XcIksGYNi5gJbdIIqIXQSSpj3VpYOEDUQotuNAZs8PPqYK4t3fgMGiSiUSMUVqZigGJAVSuDs6a1GFTlxKAVK0YMslJj0D4XfyIYjIHFgpcRUUwEoFLHCwoLaCYg0gDHYIUEBxqtoMJkDBMqKxodeEZjj4FoBpFYS1wnwJgQYwJEPmCNBlcuBmkkYPdlyBBu+ri5/vKFHBgdBoYZnICFB6d+wIMLLzOYhMEFXSjhABbskHPnv3ohU+TCCD2Dfibk8Me9u/c8Hwzgemtm8MUAGoT8+VpUqP2iG4MIVYchwaCsNAMmEGIkqX2hR4zIp8ESF+hi0CQz7AHFPjk8QciDT/jgwoANmFKAQU7w4gMiLiCioA4cGmDEMA1csQsBCEVShDMaGOCiBkbgA0MKn9BCwCgTEQGNB8Nw0EwKV3wk5JBEChQQACH5BAkMAP8ALAAAAAAYABgAAAj/AP8JHEiwoMGDCBMqXLjQkMMSCih4EnDNoSGG/wBURIKkCxJDSvwQg6UwiQI3XcIksJYgjJgJbdIIqIXQSSpj3VpYOMDTQotuSAZs8PPqYK4t3ZIdQNFITqMfB5J1mADFgKpWBS/NmtZCxKBBdFasGFHlK4Y2LrJEIEUQV4wwFgadmDIoABUtg6pYGTQBkQY4QRINRFUhwQEvK6iYGMNEcaMDaJDsMRAt1IOBL5BYOyAnSoAQIcYEiPLYGo2qXE6xGqiJhuFGiZkwprLicQIak4d9IDBwxgS4KEZEoWJXywgUFrr11UBiE2+BsRaIAcGpn/Xr2Mu5cETP0vN/EfxMqqCEA1iwQ+jR/+qFTJEBfM1cfa/0YkA6f/jz68/zwQgMCZ0gMNAqsqQxACH++LJIIQwucsMghGiwxAW6HAEJQZPMsMcehDAiCYOFPMJIhEs0YEoBCAg2kBO8+ICIC+q4Q8iM7hRhxDANXLELARcaFEkRzmhgwJAaOIIPDCl8QgsBoyRUAgtEQOPBMBw0k8IVMmRSii0L3YJJBjIwwAAoGRRAAAKiYKSmQAEBACH5BAUMAP8ALAAAAAAYABgAAAj/AP8JHEiwoMGDCBMqXMjwXxIACih4EkDBATNlDIVpVKKnQ4tndzQKg6UwiYIud7ZZOMByWzss4ATUQugklbFuyQ6gaCSn0Y8DybpVAPPqYC5wYlroHLEiyooRjQ60ELNAVauCl2YtCGMBxYgoVAJQ0TIChYUwE2xEIEUQVzga1vgMGhSPSYgxU+ZaSYBEB7UgiQaimgN3UJUTg0LcHTSlyiBrNPBoC/Vg4Is9SBJ4abTCBJMxTEysQOElAQ0oTU6xGqgJ0QSuXsGKjVLWApYJiDR8IDBwhot9SZc2fYpCapc2Lhxt4i0wlgEdEzrk3NmoUfGgE/YYWGKJ+b8IWVwMp6DRrcVKlhZadEMywIURD668VxKkgQenfvjz6+ehgYuETggMtIos4lCiwjs4FKOggjjMY48i+FygyxGQEDSJFBoQEkceN3TYYR5xEMJFA6YUgEBgAznBSxFGEJKNJIXE+Eg2hMAAwRW7EFChQZGo0QMQZxAi5BlqNJDCJ7QQMEpCJbBwRQoXQAABG2QAIUMmpdiy0C2YZCADAwyAkkEBBCAgSkNoChQQACH5BAkMAP8ALAQAAwARABMAAAjUAP8ZGljin8F/1wYaOmjw0LoghrocNGTOQT2GB/WYYWgmmTWMGH+ABCmR4QqDKAyWNNiNz6BBdA5OeWkFC8MEg6qcGPRvDJNBJ6rwpAHFYAIvcqKYMBjCRJRGXhjS+HfAIJWDVxtV/bfHoE2DWg6GZTnyYB2MYgwa+VeOU7+3cOOWK/pPCCUcwIId2rv3Vy9kioQc/OCvsOHDeT78G2ZQAyF/vhYVmrzoxiBCGjAaIcRI0uRCjxgRMsIY4xIiZwipPlMEX9l/9EgM4zKMBIfXIC+MDAgAIfkEBQwA/wAsAAAAABgAGAAACP8A/wkcSLCgwYMIEyI0xHAZwWUMDSkkeMSQAgqeBBiSxkzZRIEAjnlDguQNkgVr/BCDpTCJAjdduiWwliCMmAlt0giolTCVsW4tLBwYaqFFNxoDNvh5hXBLNz6DBolohAKFlagYdBhQ1ergtBaDqpwYVGfFiEFWagza5+JPBIMxwljwMkKLiQBU6nj5YQHNBEQa4BiskOBAoxVUmIRgQmVFowMJaOwxEM0gDWsH5KwIMCbEmACOD1ijgcfAMMvPQHDqx7q1axBQTBucEEYRDmDBDunW/asXLUWASRhcIIaSv+PIk/tT5MIIPYN+JuRQrjzPBwP4mhl8MYAGIX++FhVxGr/oxiBCzWFIOJhmwARCjCSNL/SIEXoNwy7oOjhjD5R9OTxByIBP+CCEBvg0YEoBB/HiAyIuIOKfDhAaYMQSEFyxCwEIRVKEMxoYIKIGjuADQwqf0ELAKAmVwAIR0HgwTDTNpHCFDJmUYstHPPbIY0AAOw==",
		"[大兵]":"data:image/gif;base64,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",
		"[奋斗]":"data:image/gif;base64,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",
		"[咒骂]":"data:image/gif;base64,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",
		"[疑问]":"data:image/gif;base64,R0lGODlhGAAYAPf/ALhmDRwXD+O2aKhYGfqUePfamuSyNNx5Vf//7ejj3t3Y1PzVO45BBNGKLPDKguKZLMKaav/0bfGsEv/wXv//5FsjAP++Sv7cRfW6J9yoVP+8VbNuGv/89uafEMmphrFzK//9x+iiGJ5JCP/3d//zdunJoP+6E+7ezbaCR8t+CP/LNePf3P/90v/pYv/LJv/ePf/3iN2dIc6CC7BSKNCeXf/oTfjKX//8sfTGOfHeytfRzP71lffr2/2wDP/CIduTGbd7MuSrQea5eN6POf61EMyEG8OfgfPjz/79/MZ7KP/RNejl5fCjC/+/G//qVP/hQtCCEv/6naliEiQjGv/iSvHh0fv6+v/uWOCYHeisLdOLGv7sWP/DHdeyk+rEk//SLtSQJ4YyAPHcxNeZPf/tV9nUz//VMdeuiMqJNv/lSOSXCuyyKP/7ldusar9qCf/qUP3jTcNwEdKGGMRwC9F9LezEPr9+Mf/iSejBh+2CZtPNyM5/Ef/AGv/FH9OHFvzvcNaqddqODK5wLPThdP/kdP/hSvDcgv/lfuGqWP/8uP/cOv/PY9SHFc+ORc6NONGUQf/ZW//FcMB2G//PK/uvDP/AKcp1F/OnDty2Yf/kR/jGMPXnpch2DvWea/mpUP/Kf//mTf/3e//EYN6VDP+bgP+sN/7hSNqUK/+WX/+3HP6qIsp7Ef+XTeqgMf+ePuCCReKLNe/IQP/vWqdRBPnx5urWxcaDNcKBPOvRsMSNX+O6hMx7ENSIFd6zff//+P/cYvzw1sivlvTy8cl/FbFkEfbKM6lPFvjGPvPesKxtJblpLuGdUP+pYvDu7LmIU/W5M+2+WNWPH/fBRfXBS/vhpern5P6tgffKZ7yRZfbGWffIW/zlr6hdCf3gSv+jb/HNQMp8EtLEt+7s7P/XNP7hR//bOduZMMyDK///2//IV/LRRtyRE/346v/HV/2vRjAnHqFQDf/WP7xzH/GvHPa1HuqgQcikfcV5E/jeT9qYIdOukP/YNPXopgAAAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJFAD/ACwAAAAAGAAYAAAI/wD/CRxIsKDBgwgTKlzIkMM2G9IwPJt2rQAwhv+oHVtw4cWTFwuUaIKGTCEHbd3IpanBMs2TYjH8+DHH7iCSbHDSvLkyoeeVb+BK0OKhq4gVgwVwxNASzcCfUCMiFMHlz1+YML0eFWSXZZVQomB2sBlkq6q/CmFwyeHFSIjAAsOoWsUq4IahW2b9WRlTR9YWA26DlK0apkIONCBuEDthVhyUK5C37PqXD2/eKnZYJMKUq1ZVI3uoiL7D6d+DxXnP0Ei8I8OAASJmrFJCe80500M6V+0yYNONKDAIRepEII+lED5C7BLzbwizA8ZgK3MQhQ0MEi0gtdNQ79QcN3ZyCNJc5skbKQLWPh2CGmGCk0LxVFQKMeqDnoFeWlnQIGrRrxY+vZHGC2a4wAcRgUCgwEACsIUFDhdQAUpLTyhSIBcmMAFEONUIJIQBW8hSxw/jlPPCC7LMMossLmDYAzEKHvUPFFtAdsUuLkzyxRcprsiHCZTIgIIOHQq0xx1IUsEJBlz04SQXPxKhhhTO6LACQQ2sQZsSc2wgQwcSmEDEJWqkIEgwZSRQkBhQIBdCEgl4gMIH3EiRDArY6KCAMAcd0YgbSYiHRDMrKKBDGQqsUKRBAQEAIfkECRQA/wAsAAAAABgAGAAACP8A/wkcSLCgwYMIEypcyJDDNhvSMDybdq0AMIb/qB1bcOHCkxcLlGiChuzfEXOMMhwhyEFbN1NpashM86RYDD9+Tp2KJatOvhwCkWSDk+bNlQlIr3wDV4IWD0BQrkiN1UBgARwxtEQz8CfUiAhFcPnzFybMsDtU0nL6xy7LqqY8dIHZwWaQrbH+KoRZpaSvkjn/CgwTSzZMLwE3DN3C628JmhA+fKwD9C/I3bFhKuRAA+IGsRN4m2FzQ5qGwHyLGVexwyIRply1xuqDB0uenoEPPjM+Q6PzjgwDBoiYkYcVHR24h8Ae22XAphtRYBCK1IkAAVSukiAXOITZAWPClTneiMIGBokWkNJpcFdKlaTt/5Z58kaKgLVPh7xGmOCkUDwVlaRyiR3wedGKBRqIssgvLST1RhovmOFCE0QEAoECAwnACyNY4HABFaDM9IQiEnJhAhNAhFONQEIYsEVPP4yjyAsvyDLLLLK4YGIPxFxohUBQbCHVFbu4MMkXX9iIIx8mUCIDCjqsKNAeaamFARd9ZMkFk0SoIYUzOqxAUANr+DXHBjJ0IIEJRFyiRgqCBFNGAgWJAQVkISSRgAcofMCNFMmggI0OCghz0BGNuJEEUEg0s4ICOpShwApSGhQQACH5BAkUAP8ALAAAAAAYABgAAAj/AP8JHEiw4MB+Afr1M8jQoEKF7xY2nKhQYEWDHLbZkIbh2bRrBYAVvEiQ2rEFF148ebFAiSZoyCySFMhBWzdyaWroTPOkWAw/fsyxm/kPSTY4ad5cmcD0yjdwJWjx0FXEisECOGJoiWbgT6gREYrg8ucvTJheM9llWRV1KpgdbAbZIuuvQpgSAQIwEiKwwLCxZc8KuGHoFl1/VsbUcULGAN8gc8mGqZADDYgbxE7QFQfliuctu/7lM3y4ih0WiTDlqkXWyB4qsKlw+vcg8+EzNC7vyDBggIgZq5QIX3OO9pDVZLsM4HcjCgxCkToRyGMphI8Qu8T8G8LsgDHfyhxE5GEDg0QLSO001Ds1x42dHAKXefJGioC1T4e+RpjgpFA8FRhIMMoHegzkRSsWaCDKIr+0wBQZb6TxghkuNEFEIBAoMJAAvDCCBQ4XFALKTk8oQiEXJjABRDjVCCSEAVvIUscP45TzwguyzDKLLC6g2AMxGVr1DxRbeHbFLi5M8sUXOe7IhwmUyICCDi0KtMcdsXGCARd9dMnFk0SoIYUzOqxAUANrCKfEHBvI0IEEJhBxiRopCBJMGQkUJAYU1oWQRAIeoPABN1IkgwI2OiggDENHNOJGEvAh0cwKCuhQhgIrVGlQQAAh+QQJFAD/ACwAAAAAGAAYAAAI/wD/CRxIsKDBgwgTKlzIkMM2G9IwPJt2rQAwhv+oHVtw4cKTFwuUaIKGTCCiaIjwEOSgrZupNDVipnlSLIYfP6fAGHCiTo4XgUiywUnz5sqEo2S+gStBi4euVaCuXMHXQGABHDG0RDPwJ9SICEVw+fMXJkyvLHDu3IHyj12WVUydgtnBZpCtsf4qhMlxT4kSLGj+FRgmlqxZATcM3cI7tgqAeevcCAxyd2yYCjnQgLhB7ATjMwDiSBaYbzHjKnZYJMKUq9bYLrNgJVEw8EHnzzQ278gwYICIGXlY0dFRe0jr1wM23YgCg1CkTgQIoHKVhLjAIcwOGPOtzEEUNjBItN6A1E6Du1KqJFn/t8yTN1IErH065DXCBCeF4qmolOqSnfVetGKBBqIs8ksLSL2RxgtmuMAHEYFAQJtAAvDCCBY4XEAFKDXIMssssjTIhQlMABFONQIJYcAWstTxwzjlvPCChyC6MGIPxEhohUBQsCjVLi5M8sUXNMrChwmUyICCDigKtAcVUN7BCQZc9GElF0cSoYYUzuiwAkENrOGXEnNsIEMHEphAxCVqpCBIMGUkUJAYUITgQwhJJOABCh9wI0UyKGCjgwLCHHREI24kkcM/SDSzggI6lKHACk0aFBAAIfkECRQA/wAsAAAAABgAGAAACP8A/wkcSLDgP18U+gXo14+CL4MQByJgyPBdPwQRI07sh44FQwoGOWyzIQ3Ds2nXCgDzhYACBXQMMRKkdmzBhQtPXixQogkasn8bGz4UyEFbN3JpaihN86RYDD9+zLH7OPQfkmxw0rwhM6ErmW/gStDioWsMC3RV/xXAEUNLNAN/Qo2IUASXP39hwuBhGESIQHZZVoklC2YHm0G27vqrEEZAgCkkDPgtMMwu3jC9BNwwdEuxP3HRSJCYsGXXvyCJ74apkAMNiBvETihesucOlduc/uXr7LmKHRaJMOWqddfIKiXI15z79yC25zM0Xu/IMGCAiBmWQvgIsUsM8yHD73b/GbDpRhQYhCJ1IpDnVRw3dnIIHMLsgDHryhxEYQODRAtI7WjgTitYbKDHQMt44g0pBFjzySFyRTCBE4XEo0IlqVxihw4DedGKBRqIssgvLXR1xRtpvGCGC00QEQgECgwkAC+MYIHDBVSAstQTiqzIhQlMABFONQIJYcAWstTxwziKvPCCLLPMIosLP/ZADIxWCATFFld0uYsLk3zxBZRS8mECJTKgoAORAu1xm22cYMBFH3Ry0YQJRKghhTM6rEBQA2sgp8QcG8jQgQR4XqJGCoIEU0YCBYkBhXYhJJGAByh8wI0UyaCAjQ4KCAPREY24kYR8SDSzggI6lKHACmwaAhQQACH5BAkUAP8ALAAAAAAYABgAAAj/AP8JHEiwoMGDCBMqXMiQwzYb0jA8m3atADCG/6gdW3DhxZMXC5RogoZMIQdt3UylqcEyzZNiMfz4McfuIJJscNK8ITOhJ5lv4ErQ4qGriBWDBXDE0BLNwJ9QIyIUweXPX5gwvR4VZJdllVCiYHawGWSrqr8KYXJIOkGwwDCqVrEKuGHoltmqVdy0OSowSNmqYSrkQAPiBrETd89A0cJrjMB8du9WscMiEaZctap2ASAHnywDGf49OJyYRuEdGQYMEDGDDhQyV8jsEj0Es+YB/G5EgUEoUicCeaCQu3OHCqd/Q5gdMLZamYMobGCQaAGpnYZ6q5Ron6N1mSdvpAhY0Pt0CGqECU4KxVORhRO9eXEaCfTSyoIGUYt+teh55U2aF2a4IEEgc8hjz0AC8MIIFjhcUAgoLT2hSIBcSDCKIOEsIZAQBmwhSx0/jFPOCy/IMssssrjAhQk9EIONAnxBscUVNO7iwiRffGEiinyYQIkMKJRRzUB7FEccJxhw0ceSXPRIhBpSOKPDCgQ1sIZ2SsyxgQwdSGACEZeokYIgwZSRQEFiQBGCDyEkkYAHKHzAjRTJoICNDgoIc9ARjbiRRA7/INHMCgroUIYCKwx5UEAAIfkECRQA/wAsAAAAABgAGAAACP8A/wkcSLDgP18U+gXo14+CL4MQByJgyPBdPwQRI07sh44FQwoGOWyzIQ3Ds2nXCgDzhYACBXQMMRKkdmzBhRdPXixQogkasn8bGz4UyEFbN3JpaihN86RYDD9+zLH7OPQfkmxw0ry5MqErmW/gStDioWsMC3RV/xXAEUNLNAN/Qo2IUASXP39hwuBhGESIQHZZVoklC2YHm0G27vqrEEZAgCkkDPgtMMwu3jC9BNwwdEuxP3HRSJCYsGXXvyCJ74apkAMNiBvETihesoeK7Tuc/uXr7LmKHRaJMOWqddfIKiXI15z79yC25zM0Xu/IMGCAiBmWQvgIsUsM8yHD73b/GbDpRhQYhCJ1IpDnVRw3dnIIHMLsgDHryhxEYQODRAtI7WjgTitYbKDHQMt44g0pBFjzySFyRTCBE4XEo0IlqVxihw4DedGKBRqIssgvLXR1xRtpvGCGC00QEQgECgwkAC+MYIHDBVSAstQTiqzIhQlMABFONQIJYcAWstTxwzjlvPCCLLPMIosLP/ZADIxWCATFFld0uYsLk3zxBZRS8mECJTKgoAORAtV2h22cYMBFH3Ry0YQJRKghhTM6rEBQA2sgp8QcG8jQgQR4XqJGCoIEU0YCBYkBhXYhJJGAByh8wI0UyaCAjQ4KCAPREY24kYR8SDSzggI6lKHACmwaAhQQACH5BAkUAP8ALAAAAAAYABgAAAj/AP8JHEiwoMGDCBMqXMiQwzYb0jA8m3atADCG/6gdW3DhxZMXC5RogoZMIKJoiPAQ5KCtG7k0NWKmeVIshh8/p8AY2KJOjheBSLLBSfOGzISjV76BK0HrCA0oW65cwddAYAEcMbREM/An1IgIRXD58xeGQT5Td6hQgfKPXZZVTHnoArODzSBbY/1VCONojRIlWND8KzBMLNkwvQTcMHQrrz9xXebMW+dGYBC8Y8NUyIEGxA1iJ/JaMeImTmWB+Ro7rmKHRSJMuWqN7QIPVpIyAx+AdnyGhucdGQYMEDEjDys6OnIPiT17AL8bUWAQitSJAAFUrpIkFziE2QFjw5U54ojCBgaJFpDaaXBXSpWk7f+WefJGioC1T4e8RpjgpFA8FZWkcokd8HnRigUaiLLILy0g9UYaL5jhAh9EBAKBAgMJwAsjWOBwARWgyPSEIhJyYQITQIRTjUBC7CRLHT+MU84LL8gyyyyyuGBiD8RcaIVAUEl1xS4uTPLFFzbiyIcJlMiAgg4rCrTHHWlRwQkGXPShJRdNmECEGlI4o8MKBDXg119zbCBDBxJ4eYkaKQgSTBkJFCQGFCH4EEISCXiAwgfcSJEMCtjooIAwBx3RiBtJ5PAPEs2soIAOZSiwQpQGBQQAIfkECRQA/wAsAAAAABgAGAAACP8A/wkcSLDgP18U+gXo14+CL4MQByJgyPBdPwQRI07sh44FQwoGOWyzIQ3Ds2nXCgDzhYACBXQMMRKkdmzBhRdPXixQogkasn8bGz4UyEFbN3JpaihN86RYDD9+zLH7OPQfkmxw0ry5MqHrlW/gStDioWsMC3RV/xXAEUNLNAN/Qo2IUASXP39hwuBhGESIQHZZVoklC2YHm0G27vqrEEZAgCkkDPgtMMwu3jC9BNwwdEuxP3HRSJCYsGXXvyCJ74apkAMNiBvETihesoeK7Tuc/uXr7LmKHRaJMOWqddfIKiXI15z79yC25zM0Xu/IMGCAiBmWQvgIsUsM8yHD73b/GbDpRhQYhCJ1IpDnVRw3dnIIHMLsgDHryhxEYQODRAtI7WjgTitYbKDHQMt44g0pBFjzySFyRTCBE4XEo0IlqVxihw4DedGKBRqIssgvLXj1RhovmOECH0QEAoECAwnACyNY4HBBIaAs9YQiKnJhAhNAhFONQEIYsIUsdfwwTjkvvCDLLLPI4oKPPRDzohUCQbHFFVzu4sIkX3zxZJR8mECJDCjoMKRAtdlGBScYcNHHnFyUSYQaUjijwwoENbAGckrMsYEMHUhgAhGXqJGCIMGUkUBBYkChXQhJJOABCh9wI0UyKGCjgwLCQHREI24kIR8SzayggA5lKLDCmgYFAQQAIfkECRQA/wAsAAAAABgAGAAACP8A/wkcSLCgwYMIEypcyJDDNhvSMDybdq0AMIb/qB1bcOHFkxcLlGiChkwgomiI8BDkoK0buTQ1YqZ5UiyGHz+nwBjYok6OF4FIssFJ8+bKhKNXvoErQesIDShbrlzB10BgARwxtEQz8CfUiAhFcPnzF4ZBPlNU0kL5xy7LKqY8dIHZwWaQrbH+KoRxtEaJEixo/hUYJpZsmF4Cbhi6hdefuC5z5q1zIzDI3bFhKuRAA+IGsRN4rRhxE4eywHyMG1exwyIRply1xnaBBytJmYEPPjc+Q6PzjgwDBoiYkYcVHR24h8CWPWDTjSgwCEXqRIAAKldJkAscwuyAMeHKHEThYQODRAtI7TS4K6VKkvZ/yzx5I0XA2qdDXiNMcFIonopKqVxix3tetGKBBqIs8ksLSL2RyQtmuNAEEYFAoMBAAvDCCBY4XFAIKDI9oUiEXJjABBDhVCOQEDvJUscP+yjywguyzDKLLC6U2AMxFlohEFRSXbGLC5N88UWNN/JhAiUyoKCDigLtkdYdd3CCARd9ZMmFkkSoIYUzOqxAUAN9+TXHBjJ0IIEJRFyiRgqCBFNGAgWJAUUIPoSQRAIeoPABN1IkgwI2OiggzEFHNOJGEjn8g0QzKyigQxkKrAClQQEBACH5BAkUAP8ALAAAAAAYABgAAAj/AP8JHEiwoMGDCBMqXMiQwzYb0jA8m3atADCG/6gdW3DhxZMXC5RogoZMIQdt3cilqcEyzZNiMfz4McfuIJJscNK8uTKh55Vv4ErQ4qGriBWDBXDE0BLNwJ9QIyIUweXPX5gwbaIxYiREILssq4QSBbODzSBbVf1VCDOmjqwtBroWGEbVapheAm4YupXWnzgoVwJv2fUvCNqqYSrkQAPiBrETaZfsuUOZCqd/+fj2rWKHRSJMuWpVNbJKiek15/49eNz3DI3GOzIMGCBihqUQPkLsEqN6SOiqXQZsuhEFBqFInQjkeRXHjZ0cAocwO2CMtjIHUdjAINECUjsN7lph19mgZ+AyT95IEbD26RDUCBOcFIqnolKqS3Z0DPTSyoIGUYv80oJPb6TxghkuNEFEIBAoMJAAvDCCBQ4XFAJKS08ogiAXJjABRDjVCCSEAVvIUscP45TzwguyzDKLLC5w2AMxDR71DxRbBHbFLi5M8sUXLb7IhwmUyICCDiEKtAcVd1BhGQZc9CElF02YQIQaUjijwwoENbCGaUrMsYEMHUhg5SVqpCBIMGUkUJAYUOAWQhIJeIDCB9xIkQwK2OiggDAHHdGIG0lAh0QzKyigQxkKrJCkQQEBACH5BAUUAP8ALAAAAAAYABgAAAj/AP8JHEiwoMGDCBMqXMiQwzYb0jA8m3atADCG/6gdW3DhwpMXC5RogoZMIKJoiPAQ5KCtG7k0NWKmeVIshh8/p8AY2KJOjheBSLLBSfPmyoSjV76BK0HrCA0oW65cwddAYAEcMbREM/An1IgIRXD58xeGQT5Td6hQgfKPXZZVTHnoArODzSBbY/1VCONojRIlWND8KzBMLNkwvQTcMHQrrz9xXebMW+dGYBC8Y8NUyIEGxA1iJ/JaMeImTmWB+Ro7rmKHRSJMuWqN7QIPVpIyAx+AdnyGhucdGQYMEDEjDys6OnIPiT17wKYbUWAQitSJAAFUrpIkFziE2QFjw5U54ojCBgaJFpDSaXBXSpWk7f+WefJGioC1T4e8RpjgpFA8FZWkcokd8HnRigUaiLLILy0cRcYbabxghgtNEBEIBAoMJAAvjGCBwwWFgCLTE4pMyIUJTAARTjUCCbGTLHX8ME45L7wgyyyzyOLCiT0Qg6EVAkEl1RW7uDDJF1/cmCMfJlAiAwo6sCjQHmmpxQkGXPShJRdNmECEGlI4o8MKBDXg119zbCBDBxJ4eYkaKQgSTBkJFCQGFCH4EEISCXiAwgfcSJEMCtjooIAwBx3RiBtJ5PAPEs2soIAOZSiwgpQGBQQAIfkECRQA/wAsAQAEABcAEQAACDIA/wkcSLCgwYOmDipcOJAMw4cMqdyBSLGixYsYM2rcyLHjwiseMyoKaVHiv4kG+TwMCAAh+QQFFAD/ACwAAAAAGAAYAAAI/wD/CRxIsKDBgwgTKlzIsKFCascWXHjx5MUCJZqgIVPIQVs3cmlqiEzzpFgMP37MsTuIJBucNG/ITJh55Ru4ErR46CpixWABHDG0RDPwJ9SICEVw+fMXJkybaIwYCRHILssqnDrB7GAzyNZSfxXCjKkja4uBqQWGKWUappeAG4ZuffUnDsqVu1t2/QvidWmYCjnQgLhB7MTXJXuoKL7D6V8+uXOr2GGRCFOuWkuNrFLCec25fw8Kzz1DY/CODAMGiJhhKYSPELvEgB5yeWmXAZtuRIFBKFInAnlexXFjJ4fAIcwOGFOtzEEUNjBItIDUToO7Vlg26Bm4zJM3UgSsfY06ZDTCBCeF4qmolOqSHR0DvbSyoEHUol8taL5J88KMiyZEBAKBAgMJwAsjWOBwARWgjPSEIv5xYQITQIRTzUAGbCFLHT+MU84LL8gyyyyyuCBhD8QM2JNAW9x1xS4uTPLFFyKSyIcJlMiAgg4XDkTFHXdQwQkGXPRhJBdNmECEGlI4o8MKDkUp5ZQOBQQAOw==",
		"[嘘]":"data:image/gif;base64,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",
		"[晕]":"data:image/gif;base64,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",
                "[折磨]":"data:image/gif;base64,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",
                "[衰]":"data:image/gif;base64,R0lGODlhGAAYAPdaAOPj4yMjI/7+/h4eHh8fHygoKDo6OgICAgQEBBERES0tLZycnHt7e0xMTBUVFQkJCUtLSzMzMy8vLz8/PwwMDBgYGENDQ0VFRfj4+Dc3N09PTwUFBVBQUISEhAoKCvv7+6ysrFhYWKWlpTw8PA4ODuTk5JSUlLCwsPr6+u3t7RkZGU1NTfb29uHh4TQ0NKGhoQsLCxwcHN7e3nJycvf396Ojo21tbWtray4uLt/f39vb29zc3MfHx05OTlJSUkhISIeHh2RkZGNjY2lpaWZmZj09PdnZ2TExMdjY2HBwcG5ubicnJ15eXl9fXzs7Ozg4OBISEs3NzczMzKSkpIyMjPz8/CEhISUlJQAAAP///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFZABaACwAAAAAGAAYAAAI/wC1CBxIsKDBgwZPXLmCsCHBhQ4JmmAosMSLEEdiqMDBYQGAhwMnLhTQYcUAKwGsDKiQ4MEIBgK0LKQokMdCAgUkRHARQUIBAg5gHHgCsaAAJ1YUZJhg4YKFCRkUWHHw4F+RmAU7EBCSo0oVAEM0EGnhVUePDf8YFCyxogmNLHCzYEiCIW4WFj/+Gfg48MUAGXBBBACRBUUWEQFEwEVy4N8CgiGsVIEboHLcygHgfkDwrwHBAgEmZxFMGC5ixVk2/6OpJYYVwHYLx85ihDMFgioGMHkbF4ONunFZQGh8e+CSCgWCkP2qxMcNAF53ZAHybzVBDgkIKDBwoYEGDhoaXHkwoIBAlijVPQ9c8MBB0qVNn0a1QgVu9ccDAYyA4QCnTp4+ARWXXnwNxMABDyRQwUkprdTSFFnUkJZBAkDwzwYekJAAFAmQ4AFa1f0DAVYFpWDhPwcgoGJjIYqYQkMCMGBAiy0aAFNEWgCwQAMDUEDBFQ14hOOQBgUEACH5BAUKAFoALAcACQAMAAsAAAgzALMI1EJQYBaCWgTOQDhjIMGFJxBGXIiwosWLGDNW9KCRYAeNDrRI0QikY8KTGWtkqREQACH5BAUKAFoALAcACQAMAAsAAAg1AEEEAKGloIgAIgpqCcBQIcMACgkSNKglocKLGDNq3HgRCMeCUThS0ZKFY8mPU7TU4PivZUAAIfkEBQoAWgAsBwAJAAwACwAACDMAswjUQlBgFoJaBM5AOGMgwYUnEEZciLCixYsYM1b0oJFgB40OtEjRCKRjwpMZa2SpERAAOw==",
                "[骷髅]":"data:image/gif;base64,R0lGODlhGAAYAPeRAP39/dPT08vLy////5SUlP7+/vj4+Kmpqc7OzrGxsfz8/Pr6+tbW1vLy8ry8vMTExLm5ufb29uzs7NHR0bq6ure3t6Wlpd3d3crKyvv7+6CgoNzc3PT09Orq6t7e3tfX1+Xl5aysrFhYWJqamkpKSszMzLOzs6+vr5ycnICAgH5+fp+fnzIyMoeHhzMzMzk5Ob+/v2VlZScnJ1VVVefn52BgX9nZ2S4vL729vevr67i4uGJiYqqqqvX19fPz8/Dw8LW1tePj4z8/P9/f31NTU5WVlX19fTU1NHR0dOLi4khISDs7O+np6bu7u8HBwU9PT2tqal5fXjk4ObCwsKOjo/n5+ZaWlq2trU1MTEZGRlhXWDc2N6enp0NERMnJyYqKiqytrMDAwEREQ9vb20xMTH9/f2BhYGpqakFBQjEwMMXFxcXFxOjo6Jubm5mZmaSkpO3t7To5Oc/Pz+Tk5Dc3N9DQ0Pf3905PToGCgkZGRZeXl2hoaNXV1eHh4MPDw66urubm5sjIyNLS0TAwMV5eXuDg4O/v78jIx7KysmBgYYGBgZ2dnWhoZ4SEhIiIh0FBQWtra////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAJEALAAAAAAYABgAAAj/ACMJHEiwoMGDCBMqjORBgAMKEAV4WDjQRpMSHzxs+FDigQMHSQoofFCCiQQJOWgk2RAAQ5gKAhQghFHnB4ceETg0kADiQgAvMEyoAWBQAIIGdhYoyLDAAAc4IMbIeQDhRICCHXD8MDCg64ACGQz0MMTzwxpEJzoQxBAgQgQVLo4oalBgQQO4R8oIonAAAUETQQoYkTFoSZ4vAwAMTrMki6NDBxIQtNABQJwbUsQ8qQEAwIsbL7rcqTHhgAWZAi3MAcCCDhosWmIoYL3lERkRMSZwoSJSYAU+AEQIITEjEZ7EwombSSHgjeSBDCBUmaKESBQoOgYYOFGd0JkEOFYwiCi4YgOAEDv2gMkAicSCAzsY8RDAQ4NBBEDYzI7QmUAjA0P0wUAgCbRxVUEFhABBEIDkwAQNPvjAAAJ+QHAFCs8dtIgOFxQyxAU2BCCAExX8gYJ9Co1gwgQTIICBR0CEgMIIFEVSxAEEBJDjjlbUKNAIOaYQQApuFOHjQBq0gISSehzp5JMJBQQAOw==",
                "[敲打]":"data:image/gif;base64,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",
                "[再见]":"data:image/gif;base64,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",
                "[擦汗]":"data:image/gif;base64,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",
                "[抠鼻]":"data:image/gif;base64,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",
                "[鼓掌]":"data:image/gif;base64,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",
                "[糗大了]":"data:image/gif;base64,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",
                "[坏笑]":"data:image/gif;base64,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",
                "[左哼哼]":"data:image/gif;base64,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",
                "[右哼哼]":"data:image/gif;base64,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",
                "[哈欠]":"data:image/gif;base64,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",
                "[鄙视]":"data:image/gif;base64,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",
                "[委屈]":"data:image/gif;base64,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",
                "[快哭了]":"data:image/gif;base64,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",
                "[阴险]":"data:image/gif;base64,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",
                "[亲亲]":"data:image/gif;base64,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",
                "[吓]":"data:image/gif;base64,R0lGODlhGAAYAPf/AMuJJPa7Nc6CC9+zNP/oTPS7Jrx0FOafEf79/ODHSf/3ePCjC/+4EuXh3v/9sv/qUP/XNP/VMfnGMObSgv/7m9ulQ//vWrBmEbaBRv/SLdSXNPncm/62EPHUWeLEYP/89rxzItmYIbJuGv/LJf/GIF0jAP/1bf/lSL+EVP/wX//7lbyVK+zSlNnUz//uV//5h//ePf60Dv/DHeSXCu7GOv2xDLZmDuDOW9+ZE8l9Ev/wXf/cOv+6E//iQv/dPOGxKfTCLuK2Mv7aOf/9uP/kR//AGrJ6Ev/+x//FH49hHP/bQv/3d//MJv/8oP/+0N+5QbpzHbp0Kv3bPuyrGv/2dPHRSbBpFtiTG/SoDPvUOO7XSNqOC5xXC5tmE/OyF/uvDP/PKvnEJffGKrpqDPCwH8mHMPHalMt+CO7ZT/3ZO+DRbeK/RPGsEtiXJIczAKdRBNfRzP37+fHdxNfSzdzX0/Pj0uPf3Pv6+v78+ZlDA/Hgy93Y1Orn5MF5Ku3czv/sU82sg9iVFebPvNWOEcJ8FLmIU/XBS9LFuPzlr++zMOjl4vW3KffIW7hyMsWebfTy8a1tJLZkC8mDGcCXZ9/a1smphrFzK/3RMvzw1vHk1/nFL8ivluq4Uu2+WPrDJuulFvfBRfLm2q5mD/bYmahdCenIkfDu7PvhpciQPuG/jMKKPurj3Pry57d7Mu24S/bGWfjKX7dxMOro5b1/LruRZa5wLP3465ZvWeGgIeWmJseCFt+4b/fKZ97Z1biESadgEKpjE96cF92cH/7ZOPbEL//xX/zTN+nUv//QKuaqH/vIK8uJGufQuuHAU+fe0O7RQN+tKvmzE/mzFPi3Gv3cP7BhC+CWENixa+/Vcv3aOtiZKOC4L/HMP/+/GaF+aqptEP3PS/3hZuC9Nd++UuDDfv+7FeKyUuDBafHORO7Tb//5V7ygT/HZhd+gG+aqIOmsLY9jIeCfJPHRR/PesPG1If/bOf/3e/vILLiDHe7SZf/dPrBjDbBkDk4Ep////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFHgD/ACwAAAAAGAAYAAAI/wD/CRxIsKDBgwgTKvyACBaoRQEM8dqASeHAUwE0GUsDY9glZQU6zVvISIKUEwRSnuixI4Knd5wQIniF79YaCzqK6XDx4ASMH96+mTu4gdizJCVuKLC3xESxP89KdCERb1dBW4mocWvDpQQ2CipeUKlSgssVetMqOCM4CggNEHLwyOkzwUGTfH3iygEx5dO1OwNdZZGkx5/hOmWOOABQ+HAOaRoUDczlw0YcN278xbHhZIhlzJojMVhGZyAuHwYyuSnh71gUxSCYlcgcagwDXXMGCqsXJJYff4JQkLPrAYUgf34aBWNACM7AEBB6DLCSB9I5sGKfUOfXrkgMA7kFVsEQ4+PEnxQmljB1+ufEjgwkymGZFf5fqWQRYJx44CLnzp4wRDBCERxs4cgeA7ECQBgR7NADSuq88YYFLTEhAwMLtHKILASlEswIGUBQDwzhWGCBEhmMIAMPNYgyCSWADYQAKoGQMAIYGeSIzAgkFMHDFwL4MgcfB6kyiBcyIEECEjJ0Uw4HMwBTCBx2JASICAIcwAYPMWAxwxm1bNJCAxatUgkGlpDyCyQY0AJHL49YJBACptixBxwt0NEAkXL2WVBAACH5BAkUAP8ALAMAAwAVABIAAAjdAP8JHPgv2z8hBPsRXMhwoUKFCyWceOCCoY8I/cg8JLjiVgITS/4pGHhiWz8jGyFqSVJCjQqCKbSU6DKC4Ql02riUYDdE4IsOJbhcoSdjIQ0QcvDI6cNCYLo+SeWAmEJQnyQ9/vz9q1NGIACsWuvk4EHQRpys/+LYEGgWbZxIBIUYyOTPjZtjUQRCYWbXX6gxCwfE8uOmBIpzApuhKOHGTyMcC+sNsJJHxDiCAy7k2RdsobuGA4mABm2hIdnR/3xYePOmtMByqP8h+7e6tUAGsQeCs2BBQm6GDDjEDggAIfkEBSMA/wAsAAAAABgAGAAACP8A/wkcSLCgwYMIC/ZLyJDgwoanAmgyls3HsEv3CnRa+NDgB0YSpJwgQPJEjx0RPPXj1JEgglcSTjxwoaOYDhcPTsCI0I8Mx4IbiJ34U8zEEnsKTBT7c2JHPxL9drX8l0jKils3XqigoOIFlRQPxPUz0q/CT4FATqCBV2KCgyEOmrwwgaZEPzD9PvW70zELgSrauJQw4+SIAxUdSnC5UgBJNA2KCMKgAUIOHjl9WDgZgq2PZTkgpjBYRoegD0l6/KmuU8YwgNSrczDQNYdgvUhxVPuLYyOujdyq40RiQAgOQQgGMrlx4+8YiK5QlqsONSaGgdoDxfyI5aaEIBTNlpiPWFOCuZ9G1rDMwi4wWQRoF/JYeWIT54D41XBw2OJoD0EAYUSwQw8jldRDPREwIQMDC7RyiCwEpRLMCBlAUA8MFrzxhgUZjCADDzWIMgkld7iESiAkjABGBhluSEIRPHwhgC9z8HGQKoN4IQMSLVpQDgczAFMIHHYkBIgIAhzQ4wxn1LJJCw00JOWUVFbZUEAAIfkEBTwA/wAsAwADABUAEAAACIMA/wkcmCUNDIHKBipcyLChQ4UpFPp4+G/FrQT/FPxbonDbPyMMqWlJUkLNwmJaSvxj0tCFiXUqF5ZY8Q9ZQ3n/cmhg2CZHv38/g1JUGJRH0INDkypt6M+fGzcKmTmF6tCPU5Ua/6EQVILqUoH8vircMZDHUB8wfNSDMLAcRZYNGTQMCAA7",
                "[可怜]":"data:image/gif;base64,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",
                "[菜刀]":"data:image/gif;base64,R0lGODlhGAAYAPfPAFReZkRQWlpjaU1daVNmcUhUXf+JiYaYpE9gbEtaZTxHTkJNVzZARz1IUUZSWlZfZU5falRmcTtHTzM9RVBaYT5IUURQWThBSUJQWTY/RzM8Q09ga05daThCSUJOVzc/SE5eaU9ZYTM7QzxFTf8AAElXYTdASEVSXOyxWExcZlpuekhXYVBhbFdqdlNlcaq9yIWYpP+ysldqdf3iAu3x9FBha+uYC+7z9VVeZcLR2t/m6+rw81NlcEVSW8rX3szZ4Y+irZyuuVpue0xcZ7/Q2tbh50FNVlRlcUFOVlReZf9XVz5KUlBga210elBgbIqQlf98fP3KBoqQlqa4wpyvutPe5N3m69FtAoyeqshiAkRSXNyDCaS3weuQEchjAtN1BdZ3B97n7Jaos81qBJKkr+e+mPy0C89uBNXg5uB+EdBwBdJzBvL19/3AAv3CAuXs8Nh3BMZgAsdgA1dpdldpdWRyequ9yFZqdk1cZkJQWv89PUVTXEFNV0FOVz5KU0xbZkdWX/9RUf+pqVRlcP+dnUNRWlZpdm50ejQ+Rv+6uv9oaDQ+RTpETTtFTExbZ98hJFZqdalpcDtFTUhZY01cZ9ZcYf9eXltuev8CAjdBSYuQlkdWYP+QkDdBSERSW//MzDpETP9zc211etuYnU1bZkhYY0VRWv9HR+ZqbT5LU0dUW+stMIuRlcSEjJOlsW10ez1IUj5JUf9hYYSWof8eHlpvekdTW0RTXEVTW6K1wDQ9RrHCzTZASG+Ai4qRlYuQlURTW0VSWjhCSoqRljtETDtETUdUXEhVX0hTW9UzN0NQW4aZpFpkaUlYYv8PD////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgDPACwAAAAAGAAYAAAI+ACfCRxIsKDBgwNHfEDIkGCnCw9MNGSo4ISREE0kTiy4JECJE0hwSNG48VmhSTX+fLQlcuFGLANaRHCSYsWtAkl8kURIxsoUHjJc1MBTApcDHBkbikFzI4iKOYNofuyDQ8DOgjSovGED5FLQGjVP8GnASANDHVx23DggpAUBmissxmIwhmGVFyR2LBMi4wgLUiV6LFjk5gxDHy9+hIEh5I7fFCWWTGgz4wvDHHhJAFHRwgWLTRLgXLExY81lvD9IQGjBIY9AFFlsRFFzOBcJEnZIJCCIwksXM1vOurrdyyCKOGnANKQxiwRCFHLKlJxOvbr169izlwwIACH5BAUKAM8ALAQAAQANABQAAAiWAJ8JbGRCoMGDzzp0QMhQIIVDDZ8VWtHDSMRSG1IgLHjQBZNnJU4IlNLxGQ8Wf54BC/ZM1EEhho7UGLJCC5IkCFUYIsACj8AFsUAZhPGMzpGPJZ7xgZXhWZFnMFTQ4fEsxYqDJAyqkPGMSUo/B4k8fQZJICCEWZ8FeTYnIgkiAutEfJZ1V1q3cw3GuBtRUaC8zxIZQBgQACH5BAUKAM8ALAQAAQANABUAAAiLAJ8JfPZhoMGBmQ4qlPCMz7MmCgUqK6HFQ5InCpuxeLaiB7JnvxQSQMBxzzMcmg62OPIsxbMTppK8MqiiBQ8EKUr08IDjGS+DdFwILPEMSYNiIgQeqMmjBqlnexZUUDgnQo0hJfYYQfTshUGbVw+uMiiDwLNNCokYHIAhIomIbuHKnUu3rt1nSg4GBAAh+QQJCgDPACwDAAEADgAXAAAImQCfCXwmycTAgwcvIFz4TMEzJAwPFhJoBEfESc+GlHimKskThBxkuGAh8MSxZ6wWyiDA5CCOJgiFQCJQ49kKLQuSMDM4UIgMHs8cPeuxoAIjDQNhPDM0ktLQZw0+xFzJgtKKE3wiihS4AuGLg3R4OAEUcWCLZ3nKql3Ltq3btqEEIQz1aWCMZ3IR1h1ISCAnWQwFWcLESaDcgAAh+QQJCgDPACwAAAAAGAAYAAAI5gCfCRxIsKDBgwNHmEDIkGCmCw8WNkSo4AQSCockTiS4pNCKE30ADNO40UKzGilKnDCWRBPJhgPuHEGpsgCOJy8RTuHRYmbKE6ZwNMlp8EYQFXcI1MBTwlMfHAKIEnzDBoiQFi4Q/EQSC5SGhlx23ICBlAeTISV68KkgVWCVF0V2kJ3jAuVHJIgm+njxI8wBFVidpPQzYWOOF0SKAAE8iAUgBXA2PstRiciPIBBkDMAgeaAPEiRG2amToDNBHaBBmy5IIxmJ1QdfC4wBW2Cg2Xpow4YykHft3wKVCCQEnLYlTKd8IwwIACH5BAkKAM8ALAAAAAAYABgAAAj/AJ8JHEiwoMGDAxuZQMiQ4AVhDxY2RChBywIKTSROJLikUAktRnA80bjRQiknKUqcsIVDCkmGWAa0IMAixYoTBUS+NEjGyhQXc1ww+VNiTw8ch3YSFIPmRhAVMnggSNkjpAClAmlQecMGiBA6PJjYPIEkFjENDHVw2XEDBtQICPDc7NMgwxiGVV4U2XFARYsILIas6NFnkZszDH28+BEGRi06R2qu8DOhzYwvDHO8IFIEiIo7kQEpgHPFxow1mSsR+REEQgsQeQSiyGIjiprEJEiMslMnAUEUXrqY2ZI2d26DKOKkAdOQRqRHMQ6ikFNmo56NE5VgbwiFYPTtA78/EovRHbxAQgOhaDf/TI8S8QcDAgAh+QQFCgDPACwAAAAAGAAYAAAI/wCfCRxIsKDBgwMlmUDIkGCnCw8WNkSooIcHCqIkTiS4JECJE0gAPPmwcWCAUiyGlOhhC4cUjQ2xDGjhosafFScK4HgC8yAZK1N40HTiqIQWU0ma9CwoBs2NIEJoMlEJMomApQNpUHnDBkjUmkNwGonFSARDHVx23IARdVDKFXvGZhjDsMqLIjuWXTIUgUVRT0Z0uTnD0MeLH2FgqJAxyEnYVBPazPjCMMcLIkWAqLjDg8UxBXCu2JixpvLlH0EgzAGRRyCKLDaiqClMggSqVnUSEEThpYuZLWdr1zaIIk4aMA1pRHoU4yAKOWU26inZUAl1hlCuI2yu3SCh7gad0QjSo6R89oIBAQA7",
                "[西瓜]":"data:image/gif;base64,R0lGODlhGAAYAPf9APDrol+iN/D/x/+Xkcjln9Ttq1yfNFmcMpjAf9Tdjf96ZKzJcP9JR8TYue/Bh5G/dv9FRPpEP/hFP/+wpakdGfYvL/g6N/9XT/+6sP9lVv9nV87fxLomIs3ew//i3v+TjPs8PP+uoa8yJP+Uiv+pm+8iI/99aO0gIO4hIv9vW/+omfIiI/+hkfAgIfE5MvEmJv9LSf+0rP+3rPhUR/ElJ//e3P+Uh/97ctvilft6cM4/NNBpWP+djP+YiexwUr3RfPuNbf9KSNfozu5BQfqKafA/P/+/uPEhIsDYsvkzNacXE/+Mg/g3N8jbvdLej/7X1/+7sf94Z/gxM/heXvaLePE0ML3Sfdjl0P+1q//Iwf92YPQrLe6wfMtdS+R4Z/EnKP9NSf+yqv9fVJ3KdbTNdv+Oe/1taubw4f+hlv+Hc/+Ef/dkZf9sVv9QS+8jJPEvLf+rnPBJSaAQDfo3OPhNQ//j3+Q5N5jAgP+flftKRMjXhf+Ugv+ShuLu2+1gSPBXV/IlJv09PvEfIFOVLPYtLvcyM/9dUvk4N/08Pf+xpP9ERPInKf9TTfhaSe8fIP+4sf+QfPMoKHuyWv+Gcf9/av+jk/uUdPAkJf+bivg+PP9sWf+ejvuRcXCpTvIoKv9waPA6OfXMoP9jVf+HgP+Ld7/SfsFFOPBGR/+Aa/9bUe/WlP+BbP+Eb/+AeP/c2+omJ+RLQYi8YP93Z4y5Wf1CQp4SEIi3Vf94Yu0pKYWzUvtNRnOrUf+TgctxZPk6OdE4Mv97Zu4eH/hcS/9VTuSflf+BefmphfcwMvhcXP+vo/+WhOfcp/E9NP+ypv+Ic70zKf/a2v9HRshrXf+aiP/Buf/g3f9eU/9yZf98Zr09LuXmm/YuMNCDefw6O/hISf91avw9PvD27P9hVPIlJ8bZuv/Fv/EqKv1GRLzRfO5BQv9OStPsqq0eGv+klf9xW/+dj+2GYPIgIf9RTPo8O/pRUP/Mxf99e22mQUyNJu4cHf+/tv9FRclTRAAAAAAAAAAAACH5BAEAAP0ALAAAAAAYABgAAAj/APsJHEiwoMGDCBMqFFhH2ICFCns0MvIQokEPzFJMeFTR4kA+MzTZyEKto8VqLjRkk1WPW5gPHvstoSNKRIZyxDDIGGWxRhVD1sSIw6MPS7MQxSCqkaADVipdraAk6kWi3Q2Frt4wejbsQp5PMZJJq7Rp2reE9jKpayPvF4cII+Cw4LGDV5lrB6GZYxAEBhgKdiyYUYFJmZcuzqKgMTiFyT520Ricm+eL3rs9kEhNWoVtGQGCT0ogAlVLEQRaICocykGFHytKCkKtk0RwDY1jSeZ0CwROCaFIyNKYMnHLmIAxCAi+cvPC05ZtUgrJObLCGypgWiwJKBDgykArABz4bymC4tKXReMEAYqnwB2n7QE6EAywIEF4H0NwncgXzFELNkDA10RBQgRgix4AAKAKF/D8kU4cpxAhAAEGNHBQOA8EkAs69iWoDQ5OTFihQn0g0IkB98yywA+lkBHLAeR4dAYSd+wyCD4HPLBBTDwGBAA7",
                "[啤酒]":"data:image/gif;base64,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",
                "[篮球]":"data:image/gif;base64,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",
                "[乒乓]":"data:image/gif;base64,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",
                "[咖啡]":"data:image/gif;base64,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",
                "[饭]":"data:image/gif;base64,R0lGODlhGAAYAPetAO3t7erWx7l3RqWlpebPvd/f38hWAb5lIsHBwenBo9DQ0NfX18JvQcQqALa2tspWANCEVMctAM5YA9OQaduXabKystB3Oak7ANPT09y8o/WIN7e3t/zBjssxAMdUAcUqANx0KeFjDOBfDLtcJsJSAejo6POKPfloAPSRSOFiDb6+vv1tAPqbTedpGLpGAMgtAKpZHN9gDOBIAO5yGMYrAPOJOu3cz+mqiMwyAOt1Juq2ke3k3tZYBeHh4dW7p95FAPqGLv2TNuRiDNlbBcJuOOXl5fmaUMSMYvSdWthIDMkzANhQCuhgE/ZjAMXFxd5cAPz8/OV+K9ivm9awk/SKN/OCNPeUSO7u7rVbGPJ/Ks40AOZPAOVNAPyVPNXV1dtCAOpTAOl3JeTk5OLi4u9wFveSQdlKDM81AN5xLLu7u/RhAOttFuJkDONuFtM5ALBAAO13IP2YPvPz8/y6gfmgVqVNC+VdDdpZAL9dJcFGAN1+Odra2s9pJerq6txdCfyCIrdeL/BbAPF/KdlAAORjCfOLPetVAMUrANQ7ALNqNPeaTrRdL8bGxvOOPMw9AOpfD/93BMmIWblnOPagXuNZE/KAKuSrgs41ANhZB/qucc+ehvzBiuBnD+zs7P59E+FhCdnZ2cowAPDw8N9fDNyuje+LQPabUMZfHvJdAJ82AOlmHK1gJv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAK0ALAAAAAAYABgAAAj/AFsJHEiwoMGDA1UgQMiQ4IA+rAYwSrNhYUOCFUqwYiVqTxFWXgZcFJihAqiNrK6g7DEgQ0MDA1gpGLNRDsqNAwwgNODjJgCUP3+yiqSzoIQHYm4qQFlgY9MCDyQUJBHFUicoAAAgwJB1wYKsrEhx8lDQgiIQenTsKIDBCQIFChw4uIHmDhULBSmY2oSkFBxCbEL4iZFilAghNTQ8oVAwARE6czhkMmIli6BKhSaZyLFmBp8EBiE0ihME0go1YH64CfXhhSMyYSAcTCCpTBdPJwJxGXQpQoMzdlCcAn1wQhsWf5oYkoGowyEaSqoMmdCQwScgqLZ80eIbhyoeDEbiTcHU4hETM0koLckDSCABAVjqHDkoZYSLC6kuvFmk6f2BRDCsEsBI7glwgABTrCIggf4JQEAACg44koEOsgLhggQSZEOEGRbEYYcgEhQQADs=",
                "[猪头]":"data:image/gif;base64,R0lGODlhGAAYAPcAAPuam/ubnPufofuho/ukp/uXoPubo/qXofqYovqZpPqdpvqUpP3w1v3x2f3u0/7ry/7szf3t0/7juv7lwP7mwv7nxP3s0//crv/esf/fs//gtf7huv7nyf3s1OLf2//Xpv/YqP/arv/ds/3Nmf/Sn//Tof/TpP/VpP7Uo//ctf/Ll//Nmv/Om//TptzX0tnUz9jTztfSzd/b1+nm4/Hv7e7s6vf29fb19PO3gPa6hP/Fkf/GkfjCjv/Hk/7Gkv/IlPvGk/7bvNTLw+imcP+8hva4gv++iP+/if/Ai//Cjf/Kn9fRzOaZX+mgavmwef+1fv+5gv+5g/+6hP/IndLFu9TLxN7Z1d3Y1Obi3+Xh3uPf3NZ7PsFwOtJ8Q9iDSteDSuOKT9+ITuWRVu+bY+WVYOicZfambv+sdPaocP+tdf+tdv+wef+xev+zfP+0fv+1f8Gaf/7LqMy0pN3HuNbJwOPXz/jx7NvV0dnTz10jAJ9HDZ9HDqBLFKZQGchnKcppK6pZJc1rLdBuL8lqLdFuMNFvMM9tL85tL9NwMaVYJ6VZJ9dzNNd0NNVyM9ZzNNJxM8ZrMLRhLNR0NtR1OKhdLMpvN8lxOM90O8VtONF1PLJlM9Z6Qc92QKtkNeCHT9qFUOiOVuOOVuWNWK5tRNmKVrBvRvGZYa5wSP6mbv+nb/ulbv+pcv6qc8WCWbl6VN+WaLV6VcmKYd+bcMyQa9SYcraDYv+6juCmgeOphf++lsKTdf/DnOm7ntaskcKfiP7bxffm29LEu8FEAKo8AHwtALBYJrxfLL1kMMxsN+CCTfWbZf+wgv+ziPqwh/q3kPHd0fPp4/Xu6tBJALdZJ7xfMMhnNMxsO/+neP+sgfqfdPqjef/Qve2ihuyrlvv49/2nj/2ul/2wmv2xmv22of26pvvGt/2fh/2hif2ii81ILvyejvyqm/ylmfyroPyhlfyto/za2fGamPv6+v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAPMALAAAAAAYABgAAAj/AOcJHEiwoMGDCBMeZMRokSOEhQgJMoTQERQjYnq9+jRpEylZvMCkSRUIYSMkO4o8wsFjBJAchw45aXPmD0JEPVaQQPEBxIcTJFb4QAKFjR+EklaUAHEhg4YMF0CUWLHDyJtBdAziYkICBAYJEyhMkIABBAkVSaKEiVUQ2BYWJkJsqPAAwoMKEi6cYKGDCBoucwjeajLFgYMgHCwwcPBggogWhR0sE9XKxkBOzsYRI+bgV4cGDCBQSBHHweZv2o5pGYhM3ABieRx0S0e7NjcHeYgFOGcMz0Br6wwsWKBAGgMGESIwKCdN+IIC6qgtGVgNnIAECQgIYzAs+bBtwgQgyTgAwNy06QIxNQvX7h25Ydy3wfs+LBw7d+iyFUM/jxYZW7nsosQw8RRo4DC2MIPNNcm48sJAz0AiBUoqDDHMhRiWIQVNygAiRxYEzeLFRUno0MMPPeiQhBFQtDFSJrDccQNBdkTyxRtREGHEEUYQEcUbbJyByiWdBIOFQdBo0oUZbbjxhBttrKHGKqDsMQoVMiAUjS59WBLKGKyoYoonlSjiixAeKORNHXCUQokefCRySi1VuECDQgPJU4MHVsQAwxVazIDnoAgFBAA7",
                "[玫瑰]":"data:image/gif;base64,R0lGODlhGAAYAPdQAEDAHRZFDhlJEB1OFeokJPaJijWAJCtfIuskJBpKEpURETeFJjuiH4sDA/dbUMbfwKshITydJB5PFupkZL8mJt5QSDOBIrgmJjN+I6QcHIQZGfBLR9Vtbe5IQithIuElJe5CQMglJT+cJzt8LTV4J+kkJP6TitslJc8zM58gII8CAkiLOitdIjeVHzukH+9JR/6SiephYTN2JVOJRz61HyJUGnm6ae1APmOUWoK5dlWyPkGaK3fLYOxJSu5KRoIMDIwCAq4mJjqdIcntv4YKCh1OFD2rIa8uLe9KSokPD2S8TTmcIUqpMdlzcxlJEf1lWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAFAALAAAAAAYABgAAAioAKEIHEiwoMGDCBMqhNJDYJKBBBYWRPLEwY8GGi5ElDgQxpMnFYgAQRCD40ATH58cUVFigkmBPlI+UfABxUsoG2RmOBHiZoEXHztAoMDhJpQCIG6kCNLEKBQXFjywONDCqBAlUHAkGMJjh1MoOQZ8HfhAwlgANDCIdQrAiAERNQhG4MhkgQEdUIqMWAKAwQqnAmzIIDHjq4CxA50gFhhgMZTGiyE7VhgQADs=",
                "[凋谢]":"data:image/gif;base64,R0lGODlhGAAYAPdMAElxQqK3nz25HEBqOdDazsTRwvAiIm2OaPqJiTifH3eXci9sIjllMhdJD/VJSYgHB2TATGO/S64fH8MkJPEiItxxce5fX/ZKRoQJCTR0Jv1bT/M/PYsMDCxuHfRBP8nuvuNPR+5jYzGDHqcZGRpNEv+TijV/JPVIRildIPRJRSlxGzV9JOAjI7IsK5EAAOYjI7EkJNdra7wkJDqnHNQxMfNHQTGCIClhIIYWFl2BV40AAIzWeaIeHmKUWS5dJswjI44AAPJIScbgv+8iIjmgH32aeSlfIP+SiZcODoK6dRtOE/9lWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAEwALAAAAAAYABgAAAi5AJkIHEiwoMGDCBMqXMiwocMDA5QMOOCQIIAAAwMoqSjkYsEARRwmIXHQBwGFRCIw6dHgAwQTBAnkWDjDxg0URkQYZLAQgYcNPGBUMKhkgQABBxGcWLKkhoQJMQoqEbAiAdKCF5gyHcHih1QmOzIkMJhC6xIkL2h8ZdJhgcESWlu4GBJiLRMVBo8wBfEACAULdg86WKIBgw4cMgwENhhEIIeBii1WPFhAwWSDCgpcLghg8+LNGz0zDAgAOw==",
                "[示爱]":"data:image/gif;base64,R0lGODlhGAAYAPf/AJELC70QEOY9PYQLCsUeHYMaFOFmZv46OrsnJfN0c+03NqQTE9UyMcQrKXoMC/ZCQeBFRf5eXv/CwepAQPEyMasWFNMXF+4lJfZOTuxpafkqKv5PT/MkJP8qKsU2NPS3t/IpKfIiIpUUE9kqKbcdG9IqKvWBgf1FRf76+v6Li/U3NtcqKco8PLISEp4YFO4iItImJelGRf+trasYFehNTekqKt4UFN4mJudvb+w+Pv8nJ/UjI5oODtkhIccODvdlZf6npv5KSuEiIts1NaElJOshIf8uLuchId0hIeMfH9YfH1MNCaIPD58FBf8pKdwwMONYWOkjI+dXV7cREf4pKd4YGOEwMORERM4tLJUAAL4MDO9eXdQeHu5SUv0pKfpERLsdHfXGxvJMS90zNHMfGf/q6G8dF8cjI8UYFvVISOUnJ/rc3I4cF//l5dQsK+snJ+ZpaeMpJ84cHPMoKPhBQckqKf+Ff9k8PNIdHfcnJ5MsKfc8PP8oKNxJSbgICOEaGv9UVLkbGOtLS2EJBtUeHNYcHOyRkf729uN9fqkbGfFlZfOPj981NfwqKvB5ebEODueEhP6AgPmlpfyhofhJSdohHv/9/fw3N/l+fco4NuAlJOQkIv++ta0jIK8tKfJKSvWvqv+SkvUyMttCQsxLS91TU+t4eOl/f+x4ePzv79ktLN4rK8QVFfJhYfFZWfxQUOpRUelUVP3IyOxXV58XE/9ZWdcnJfwiIvaHh9kfH2AkH94fH4sfGe6Pj9yZmf93d9UuLLMWFt4uLvpnZ9ApJv9lZI8oJft4edu8vPx8fOpjY/MsK/UsLP6Gh7YWFfqrq/s7O9koJ/89PessLO8uLuQyMuQ1Ndk4OPeRkds8OP9iYt04ONQbG9EiIusoJ/ecmc4nJf/w65AoJpsrKPM4OOmBgfU5Of2xsf+0tPu9vcseHswYGOKpqf+NjdxOTv+8vKwPD7kODoAHB+dZWf1WVf5XV/ScnOuIiL4YGOpcXGEHBeAvL/EcHGUMCmoOC////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJFAD/ACwAAAAAGAAYAAAI/wD/CRxIsKDBgwgTKlzIsKHDhwc/PIFCEM6TMA2h7FNhrY5AN9mkTVwIocsPTHSqwYj2IFQEJ8sgJHzS6pksCc0okaOAbYMTJyo8NDj4xEQ6GYBOvKJXL4gTLxRAXFiGYChBKBginGjkbVMlWyPiaCJGwFa0EuAykRp4D4sFTy4SiRvXiYQIF0T0GNPFhlYFZ1hwDMxxaYOkWWhmFOBFxkyBAi4CERC258aVglaqpDg36QeGNA/MiWI2p0iSEVUuGzRkRREQIMl+yuZ3AYaqUwqlfIrUrphsJ9NWXPvAUMqfHDTEKFDAoNuVQw5ToRpFCNi2fGsgat/Ovbv379wDAgAh+QQFRgD/ACwAAAAAGAAYAAAI/wD/CRxIsKDBgwgTKlzIsCHDJ6vmDcwgQJBDewlcUcOBwtEECiBgMVxkog26L2piCeDAR0eRDJYS9tryrcy7X3Ns7DDixEmHIxMQmqKRgJMdbdBqIImioUPPHVyCFrwTZViKCAdu7WrBY4GSRlSodLCBRKrAKY96HDjg5IWFFiIcyGOC50UIIT1Y4Qs0sESAeAgWZGkCwEG/JUv8DRggDwAAHvC0EGTgow87ZIiGLJA3SN8AfNymwGviJ9hBZSYkhDvGiCuTdReiKPFBAExCAzFAyaj1JtcRHR2SFJLDYqG7MbiC8OygI8QNdeVQMCwVI0QeDTWEEPAAyeE/X0POJA8iwsKA9/Po06tfz759wYAAOw==",
                "[爱心]":"data:image/gif;base64,R0lGODlhGAAYAPfaAOtxR/FJAPdPAPlRAO5GAPNLAP/9/PtUAP6UW/RMAO9HAO1EAOY9AP/axuhAAPZOAOVGD/VNAPhQAPdOAO9GAPlSAOU9AOpBAPNKAP6WXutCAPpTAOlhM/+icOtiLvtrI/l0NPh0N+17U/ZyN/6sgf7s5P+whe9UFu15UOdGDPyMVPGZe/6tgfmIVPyRXedLE/lfFP6ERPdWC/6hb/d6QvJUD/JtNO1GA/+yieplOP1kEv7l2P6QWOpIC/VpK+ZRHf/v6PdsLf1uI/uQXfvi2v2aZ/yHTOU+Av6aZvi/qPqOW/qDS/6CQvFNBvuES/9tHu+FX/5qGv6SWPexlP/h0f/Bn/18OexHB/dYD/eBTPtoH/qGUP+ugvl9Q+lBAeZMGPyKUf/ezP+ga+ZHEOtMDvzo4ehfMOtkM/97NPyid//BoPpSAPlwMP7j1eM7AeRCCuVDCuZQHPJkKv3o3+lBAPjPwf7Iq/ppI/6JTf/IquRBCf/j1PSRaf2PVuplN/2yjf6FRuM6AOtgLfvg1fyERvpgFv/FpeM8AupICfuIUPhaEvxzLfuaavZYEOY/A/W8qP6JS+pHCOc+AP7VwPt8Pfyaafzq5Pzl3PvYye1fJ/1+POtfKvS0nv/u5PtlGehECP2UYOdCBvx1MPNyPft+QuxWHPCXeOpCAP3KseQ+Bf2cavyyjvdSBP6bZelSGuZBBuVKFf6da+tuQ/Z8R/yRW/RQBvVwNf/GpvtVAPFkKf+5kvuke/+8l/fGtP6OU/eacu1mMv/Gp+pDAv+whO5kL+ZMF/+7l/7Dpf1YA/ypgfx6OOdZKPRLAOhSG/+zivBXGPBNCf+bZPNpLf/n2/NMAf6YY/94LvyHS/ZjIP7QuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAANoALAAAAAAYABgAAAj/ALUJHEiwoMGDCBMqXMiwocOHBHdcQ6YDUgOCbYYEkcZn0EFUyrJ12qPLWhWBxzw5aTErF6JeBUvcATKNSpgGatDwMiYEFCMlWUYRc2SJ4K5kk+wYCpbn1rAnUaqpcrGFho1MKVYQZLPqDwkWJnA44xItAxJaibqMkFMqlBmCWNJUKhJrRocOYlpl6GOEVAgfzyJZgECw0RIwKnggWCzFFx5ClEBgq3HDwRE9BG0pgqFlkRUmgGJoEvWhkAxqCjRIgpOD4K9arAZsOHAAF+0NAwQkCLDAy4tipgjOCZBggoQBFdZUGCBhwm4Cwlz5eVOGoAFMTQpEeCCg+4MIBQIQZLjiAcWXOgYMToEWAEMBZgUwBFCwgMwmKD84ITSQ5AQBCgpQQMACGvQgiAhxPLLQJcBccMoFdDjwSTOycEBEQwacwQADFrwyxjIcQKQNAIe4AQEsAIgoEACBpJKiiiu+CKNDAQEAOw=="
        };      
        //工具类
	var tool = new function() {
		
                //格式化时间戳
		this.formatTimeStamp = function(time,format) {
                    if(time==0){
                        return time;
                    }
                    format=format || 'yyyy-MM-dd hh:mm:ss';
                    var date = new Date(time * 1000);
                    var formatTime;
                    var o = {
                        "M+": date.getMonth() + 1, //月份 
                        "d+": date.getDate(), //日 
                        "h+": date.getHours(), //小时 
                        "m+": date.getMinutes(), //分 
                        "s+": date.getSeconds() //秒   
                    };
                    if (/(y+)/.test(format)) 
                        formatTime = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                    for (var k in o){
                        if (new RegExp("(" + k + ")").test(formatTime)) 
                            formatTime = formatTime.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                    } 
                    return formatTime;
                };
                //根据群类型英文名转换成中文名
                this.groupTypeEn2Ch = function(type_en) {
                        var type_ch = null;
                        switch (type_en) {
                            case 'Public':
                                type_ch = '公开群';
                                break;
                            case 'ChatRoom':
                                type_ch = '聊天室';
                                break;
                            case 'Private':
                                type_ch = '讨论组';
                                break;
                            default:
                                type_ch = type_en;
                                break;
                        }
                        return type_ch;
                };
                //根据群类型中文名转换成英文名
                this.groupTypeCh2En = function(type_ch) {
                        var type_en = null;
                        switch (type_ch) {
                            case '公开群':
                                type_en = 'Public';
                                break;
                            case '聊天室':
                                type_en = 'ChatRoom';
                                break;
                            case '讨论组':
                                type_en = 'Private';
                                break;
                            default:
                                type_en = type_ch;
                                break;
                        }
                        return type_en;
                };
                //根据群身份英文名转换成群身份中文名
                this.groupRoleEn2Ch = function(role_en) {
                        var role_ch = null;
                        switch (role_en) {
                            case 'Member':
                                role_ch = '成员';
                                break;
                            case 'Admin':
                                role_ch = '管理员';
                                break;
                            case 'Owner':
                                role_ch = '群主';
                                break;
                            default:
                                role_ch = role_en;
                                break;
                        }
                        return role_ch;
                };
                //根据群身份中文名转换成群身份英文名
                this.groupRoleCh2En = function(role_ch) {
                        var role_en = null;
                        switch (role_ch) {
                            case '成员':
                                role_en = 'Member';
                                break;
                            case '管理员':
                                role_en = 'Admin';
                                break;
                            case '群主':
                                role_en = 'Owner';
                                break;
                            default:
                                role_en = role_ch;
                                break;
                        }
                        return role_en;
                };
                //根据群消息提示类型英文转换中文
                this.groupMsgFlagEn2Ch = function(msg_flag_en) {
                        var msg_flag_ch = null;
                        switch (msg_flag_en) {
                            case 'AcceptAndNotify':
                                msg_flag_ch = '接收并提示';
                                break;
                            case 'AcceptNotNotify':
                                msg_flag_ch = '接收不提示';
                                break;
                            case 'Discard':
                                msg_flag_ch = '屏蔽';
                                break;
                            default:
                                msg_flag_ch = msg_flag_en;
                                break;
                        }
                        return msg_flag_ch;
                };
                //根据群消息提示类型中文名转换英文名
                this.groupMsgFlagCh2En = function(msg_flag_ch) {
                        var msg_flag_en = null;
                        switch (msg_flag_ch) {
                            case '接收并提示':
                                msg_flag_en = 'AcceptAndNotify';
                                break;
                            case '接收不提示':
                                msg_flag_en = 'AcceptNotNotify';
                                break;
                            case '屏蔽':
                                msg_flag_en = 'Discard';
                                break;
                            default:
                                msg_flag_en = msg_flag_ch;
                                break;
                        }
                        return msg_flag_en;
                };
                //将空格和换行符转换成HTML标签
                this.formatText2Html=function(text){
                    var html=text;
                    if(html){
                        html=this.xssFilter(html);//用户昵称或群名称等字段会出现脚本字符串
                        html=html.replace(/ /g,"&nbsp;");
                        html=html.replace(/\n/g,"<br/>");
                    }
                    return html;
                };
                //将HTML标签转换成空格和换行符
                this.formatHtml2Text=function(html){
                    var text=html;
                    if(text){
                        text=text.replace(/&nbsp;/g," ");
                        text=text.replace(/<br\/>/g,"\n");
                    }
                    return text;
                };
                //获取字符串所占字节数 
                this.getStrBytes=function(str){
                    if (str == null) return 0;
                    if (typeof str != "string"){
                        str += "";
                    }
                    return str.replace(/[^x00-xff]/g, "012").length;
                };
                //防止XSS攻击
                this.xssFilter = function (val) {
                    val = val.toString();
                    val = val.replace(/[<]/g, "&lt;");
                    val = val.replace(/[>]/g, "&gt;");
                    val = val.replace(/"/g, "&quot;");
                    //val = val.replace(/'/g, "&#039;");
                    return val;
                };
             
                //去掉头尾空白符
                this.trimStr=function(str){
                    if(!str) return '';
                    str=str.toString();
                    return str.replace(/(^\s*)|(\s*$)/g,"");
                };
                //判断是否为8位整数
                this.validNumber=function(str){
                    str=str.toString();
                    return str.match(/(^\d{1,8}$)/g);
                };
                this.getReturnError=function(errorInfo){
                    var error={
                        'ActionStatus':WEB_IM_ACTION_STATUS_FAIL,
                        'ErrorInfo':errorInfo
                    };
                    return error;
                };
                //设置cookie
                //name 名字
                //value 值
                //expires 有效期(单位：秒)
                //path 
                //domain 作用域
                this.setCookie=function(name,value,expires,path,domain){
                    
                    var exp  = new Date();
                    exp.setTime(exp.getTime() + expires*1000);
                    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
                };
                //获取cookie
                this.getCookie=function (name){
                    var result = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
                    if(result != null){
                        return unescape(result[2]);
                    }  
                    return null;
                };
                //删除cookie
                this.delCookie=function (name){
                    var exp = new Date();
                    exp.setTime(exp.getTime() - 1);
                    var value=this.getCookie(name);
                    if(value!=null) 
                        document.cookie= name + "="+escape (value)+";expires="+exp.toGMTString();
                };
                //判断IE版本号，ver表示版本号
                this.isIE = function(ver){
                    var b = document.createElement('b')
                    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
                    return b.getElementsByTagName('i').length === 1;
                };
                //判断浏览器版本
                this.getBrowserInfo=function(){
                    var Sys={};
                    var ua=navigator.userAgent.toLowerCase();
                    console.info('navigator.userAgent='+ua);
                    var s;
                    (s=ua.match(/msie ([\d.]+)/))?Sys.ie=s[1]:
                    (s=ua.match(/firefox\/([\d.]+)/))?Sys.firefox=s[1]:
                    (s=ua.match(/chrome\/([\d.]+)/))?Sys.chrome=s[1]:
                    (s=ua.match(/opera.([\d.]+)/))?Sys.opera=s[1]:
                    (s=ua.match(/version\/([\d.]+).*safari/))?Sys.safari=s[1]:0;
                    if(Sys.ie){//Js判断为IE浏览器
                        
                        //alert(Sys.ie);
                        /*if(Sys.ie=='9.0'){//Js判断为IE 9
                            return 'ie9';
                        }else if(Sys.ie=='8.0'){//Js判断为IE 8
                            return 'ie8';
                        }else{
                            return 'ie8';
                        }*/
                        return {
                            'type':'ie',
                            'ver':Sys.ie
                        };
                    }
                    if(Sys.firefox){//Js判断为火狐(firefox)浏览器
                        return {
                            'type':'firefox',
                            'ver':Sys.firefox
                        };
                    }
                    if(Sys.chrome){//Js判断为谷歌chrome浏览器
                        return {
                            'type':'chrome',
                            'ver':Sys.chrome
                        }; 
                    }
                    if(Sys.opera){//Js判断为opera浏览器
                        return {
                            'type':'opera',
                            'ver':Sys.opera
                        };
                    }
                    if(Sys.safari){//Js判断为苹果safari浏览器
                        return {
                            'type':'safari',
                            'ver':Sys.safari
                        };
                    }
                    return {
                        'type':'unknow',
                        'ver':-1
                    };
                };
                  
	};
	//获取unix时间戳
	var unixtime = function(d) {
		if (!d) d = new Date();
		return Math.round(d.getTime()/1000);
	};
        //时间戳转日期
	var fromunixtime = function(t) {
		return new Date(t*1000);
	};
        //获取下一个消息序号
	var nextSeq = function(userId) {
                var tempSeq=curSeqMap[userId];
                if(tempSeq){
                    tempSeq=curSeqMap[userId]=tempSeq+1;
                }else{
                    tempSeq=curSeqMap[userId]=1;
                }
		return tempSeq;
	};
        //产生随机数
        var createRandom = function() {
		//return  Math.round(Math.random() * 65536);
		return  Math.round(Math.random() * 4294967296);
	};
        //获取ajax请求对象
	var getXmlHttp = function() {
		var xmlhttp = null;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else {
			try {
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e) {
					return null
				}
			}
		}
		return xmlhttp;
	}
        //发起ajax请求
	var ajaxRequest = function(meth, url, req, cbOk, cbErr) {
                
                var xmlHttpObj = getXmlHttp();
                var error,errInfo;
		if (!xmlHttpObj){
                    errInfo = "创建请求失败";
                    var error=tool.getReturnError(errInfo);
                    console.error(errInfo);
                    if (cbErr) cbErr(error);
                    return;
                }
			
		xmlHttpObj.open(meth, url, true);
		xmlHttpObj.onreadystatechange = function() {
			if (xmlHttpObj.readyState == 4) {
				if (xmlHttpObj.status == 200) {
					if (cbOk) cbOk(xmlHttpObj.responseText);
                                        xmlHttpObj=null;
				} else {
					var errInfo = "["+xmlHttpObj.status+"]请求服务器失败";
                                        var error=tool.getReturnError(errInfo);
                                        xmlHttpObj=null;
					if (cbErr) cbErr(error);
				}
			}
		};
                //xmlHttpObj.setRequestHeader('Content-Type', 'application/json');
                if(browserInfo.type=='safari'){
                    xmlHttpObj.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');//为了兼容safari浏览器
                }
                //
		xmlHttpObj.send(req);
	}
        //发起ajax请求（json格式数据）
	var ajaxRequestJson = function(meth, url, req, cbOk, cbErr) {
		ajaxRequest(meth, url, JSON.stringify(req), function(resp) {
			var json = null;
			//if (resp) eval('json=('+resp+');');//将返回的json字符串转换成json对象
			//if (resp) json=eval('('+resp+')');//将返回的json字符串转换成json对象
			if (resp) json=JSON.parse(resp);//将返回的json字符串转换成json对象
			if (cbOk) cbOk(json);
		}, cbErr);
	}
        //判断用户是否已登录
	var isLogin = function() {
		return ctx.sdkAppID && ctx.identifier;
	};
        //检查是否登录
	var checkLogin = function() {
		if (!isLogin()) {
			console.error('请登录');
			return false;
		}
		return true;
	}
        //根据不同的服务名和命令，获取对应的接口地址
	var getApiUrl = function(srvName,cmd) {
                var url=WEB_IM_SRV_HOST+'/'+WEB_IM_SRV_NAME_VER[srvName]+'/'+srvName+'/'+cmd+'?';
                switch(srvName){
                    case WEB_IM_SRV_NAME_OPEN_IM:
                        url+='usersig='+ctx.userSig;
                        break;
                    case WEB_IM_SRV_NAME_GROUP:
                        url+='accesstoken='+ctx.userSig;
                        break;
                    case WEB_IM_SRV_NAME_FRIEND:
                        url+='accesstoken='+ctx.userSig;
                        break;
                    case WEB_IM_SRV_NAME_PROFILE:
                        url+='accesstoken='+ctx.userSig;
                        break;
                    case WEB_IM_SRV_NAME_PIC:
                        url+='usersig='+ctx.userSig;
                        break;
                    default:
                        url+='accesstoken='+ctx.userSig;
                        break;
                }
                //需要对用户帐号进行url编码（兼容游客模式下，帐号会包含＃）
                url+='&sdkappid='+ctx.sdkAppID+'&identifier='+encodeURIComponent(ctx.identifier)+'&appidat3rd='+ctx.appIDAt3rd+'&accounttype='+ctx.accountType+'&apn='+ctx.apn+'&contenttype='+ctx.contentType;
                //if(cmd=='longpolling'){
                    url+='&reqtime='+unixtime();
                //}
		return url;
	};

	// REST API calls
        //下线
	var proto_offline = function( cbOk, cbErr) {
		if (!checkLogin()) return;
		ConnManager.apiCall(WEB_IM_SRV_NAME_OPEN_IM,"logout", {}, cbOk, cbErr);
	};
        //发送消息，包括私聊和群聊
	var proto_sendMsg = function(msg, cbOk, cbErr) {
		if (!checkLogin()) return;
                var msgInfo = null;
                
                switch(msg.sess.type()){
                    case WEB_IM_MSG_TYPE_C2C:
                        msgInfo = {
                            'From_Account': ctx.identifier,
                            'To_Account': msg.sess.id(),
                            'MsgTimeStamp': msg.time,
                            'MsgSeq': msg.seq,
                            'MsgRandom':msg.random,
                            'MsgBody': []
                        };
                        break;
                    case WEB_IM_MSG_TYPE_GROUP:
                        msgInfo = {
                            'GroupId': msg.sess.id(),
                            'MsgBody': []
                        };
                        break;
                    default:
                        break;
                }
		
		for (var i in msg.elems) {
			var elem = msg.elems[i];
                        var msgContent=null;
                        var msgType=elem.type;
                        switch(msgType){
                            case WEB_IM_MSG_ELEMENT_TYPE_TEXT://文本
                                msgContent={'Text':elem.content.text};
                                break;
                            case WEB_IM_MSG_ELEMENT_TYPE_FACE://表情
                                msgContent={'Index':elem.content.index,'Data':elem.content.data};
                                break;
                            case WEB_IM_MSG_ELEMENT_TYPE_IMAGE://图片
                                var ImageInfoArray=[];
                                for(var j in elem.content.ImageInfoArray){
                                    ImageInfoArray.push(
                                        {
                                            'Type':elem.content.ImageInfoArray[j].type,
                                            'Size':elem.content.ImageInfoArray[j].size,
                                            'Width':elem.content.ImageInfoArray[j].width,
                                            'Height':elem.content.ImageInfoArray[j].height,
                                            'URL':elem.content.ImageInfoArray[j].url
                                        }
                                    );
                                }
                                msgContent={'UUID':elem.content.UUID,'ImageInfoArray':ImageInfoArray};
                                break;
                            case WEB_IM_MSG_ELEMENT_TYPE_SOUND://
                                msgContent={'Text':'web端暂不支持发送语音消息'};
                                msgType=WEB_IM_MSG_ELEMENT_TYPE_TEXT;
                                break;
                            case WEB_IM_MSG_ELEMENT_TYPE_LOCATION://
                                msgContent={'Text':'web端暂不支持发送地理位置消息'};
                                msgType=WEB_IM_MSG_ELEMENT_TYPE_TEXT;
                                break;
                            case WEB_IM_MSG_ELEMENT_TYPE_FILE://
                                msgContent={'Text':'web端暂不支持发送文件消息'};
                                msgType=WEB_IM_MSG_ELEMENT_TYPE_TEXT;
                                break;
                            case WEB_IM_MSG_ELEMENT_TYPE_CUSTOM://
                                msgContent={'Data':elem.content.data,'Desc':elem.content.desc,'Ext':elem.content.ext};
                                //msgContent={'Text':'web端暂不支持发送自定义消息'};
                                msgType=WEB_IM_MSG_ELEMENT_TYPE_CUSTOM;
                                break;
                            default :
                                msgContent={'Text':'web端暂不支持发送'+elem.type+'消息'};
                                msgType=WEB_IM_MSG_ELEMENT_TYPE_TEXT;
                                break;
                        }
			msgInfo.MsgBody.push({'MsgType':msgType,'MsgContent':msgContent});
		}
                if(msg.sess.type()==WEB_IM_MSG_TYPE_C2C){//私聊
                    ConnManager.apiCall(WEB_IM_SRV_NAME_OPEN_IM,"sendmsg", msgInfo, cbOk, cbErr);
                }else if(msg.sess.type()==WEB_IM_MSG_TYPE_GROUP){//群聊
                    ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"send_group_msg", msgInfo, cbOk, cbErr);
                }
               
	};
        //长轮询接口
        var proto_longPolling = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                
		ConnManager.apiCall(WEB_IM_SRV_NAME_OPEN_IM,"longpolling", options, cbOk, cbErr);
	};
        

        //拉取未读c2c消息接口
        var proto_getMsgs = function(cookie, syncFlag,cbOk, cbErr) {    
		if (!checkLogin()) return;
		ConnManager.apiCall(WEB_IM_SRV_NAME_OPEN_IM,"getmsg", {'Cookie':cookie,'SyncFlag':syncFlag}, 
                                        function(resp){
                                            if(resp.MsgList && resp.MsgList.length){
                                                for(var i in resp.MsgList){
                                                     tempC2CMsgList.push(resp.MsgList[i]);
                                                } 
                                            }
                                           if(resp.SyncFlag==1){                                              
                                               proto_getMsgs(resp.Cookie,resp.SyncFlag,cbOk,cbErr);
                                           }else{
                                               resp.MsgList=tempC2CMsgList;
                                               tempC2CMsgList=[];
                                               if (cbOk) cbOk(resp);
                                           }
                                        },
                                        cbErr);
	};
        //C2C消息已读上报接口
        var proto_c2CMsgReaded = function(cookie, c2CMsgReadedItem,cbOk, cbErr) {
		if (!checkLogin()) return;
                var tmpC2CMsgReadedItem=[];
                for(var i in c2CMsgReadedItem){
                    var item={
                        'To_Account':c2CMsgReadedItem[i].toAccount,
                        'LastedMsgTime':c2CMsgReadedItem[i].lastedMsgTime
                    };
                    tmpC2CMsgReadedItem.push(item);
                }
		ConnManager.apiCall(WEB_IM_SRV_NAME_OPEN_IM,"msgreaded", {C2CMsgReaded:{'Cookie':cookie,'C2CMsgReadedItem':tmpC2CMsgReadedItem}}, cbOk, cbErr);
	};
        
        //删除c2c消息
        var proto_deleteC2CMsg = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                
		ConnManager.apiCall(WEB_IM_SRV_NAME_OPEN_IM,"deletemsg",options , 
                                   cbOk, cbErr);
	};
        
        //群组接口
        //创建群组-高级接口
        var proto_createGroup = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                var opt={
                    'Owner_Account':options.Owner_Account,
                    'Type':options.Type,
                    'Name':options.Name,
                    'Introduction':options.Introduction,
                    'Notification':options.Notification
                };
                var member_list=[];
                
                for(var i=0;i<options.MemberList.length;i++){
                    member_list.push({'Member_Account':options.MemberList[i]})
                }
                opt.MemberList=member_list;
                if(options.MaxMemberCount){
                    opt.MaxMemberCount=options.MaxMemberCount;
                }
                if(options.ApplyJoinOption){
                    opt.ApplyJoinOption=options.ApplyJoinOption;
                }
                if(options.AppDefinedData){
                    opt.AppDefinedData=options.AppDefinedData;
                }
                if(options.FaceUrl){
                    opt.FaceUrl=options.FaceUrl;
                }
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"create_group", opt, 
                                   cbOk, cbErr);
	};
        
        //修改群组基本资料
        var proto_modifyGroupBaseInfo = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"modify_group_base_info", options, 
                                   cbOk, cbErr);
	};
        
        //申请加群
        var proto_applyJoinGroup = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"apply_join_group", {
                                                'GroupId':options.GroupId,
                                                'ApplyMsg':options.ApplyMsg,
                                                'UserDefinedField':options.UserDefinedField
                                              }, 
                                   cbOk, cbErr);
	};
        
        //处理加群申请(同意或拒绝)
        var proto_handleApplyJoinGroupPendency = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"handle_apply_join_group", {
                                                'GroupId':options.GroupId,
                                                'Applicant_Account':options.Applicant_Account,
                                                'HandleMsg':options.HandleMsg,
                                                'Authentication':options.Authentication,
                                                'MsgKey':options.MsgKey,
                                                'ApprovalMsg':options.ApprovalMsg,
                                                'UserDefinedField':options.UserDefinedField
                                              }, 
                                   cbOk, cbErr);
	};
        
        //主动退群
        var proto_quitGroup = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"quit_group", {
                                                'GroupId':options.GroupId
                                              }, 
                                   cbOk, cbErr);
	};
        
        //获取群组公开资料
        var proto_getGroupPublicInfo = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"get_group_public_info", {
                                                'GroupIdList':options.GroupIdList,
                                                'ResponseFilter':{
                                                    'GroupBasePublicInfoFilter':options.GroupBasePublicInfoFilter
                                                } 
                                              }, 
                                   function(resp){
                                       resp.ErrorInfo='';
                                       if(resp.GroupInfo){
                                           for(var i in resp.GroupInfo){
                                               var errorCode=resp.GroupInfo[i].ErrorCode;
                                               if(errorCode>0){
                                                   resp.ActionStatus=WEB_IM_ACTION_STATUS_FAIL;
                                                   
                                                   resp.GroupInfo[i].ErrorInfo="["+errorCode+"]"+resp.GroupInfo[i].ErrorInfo;
                                                   /*var errorInfoZh=WEB_IM_ERROR[errorCode];
                                                   if(errorInfoZh){
                                                       resp.GroupInfo[i].ErrorInfo="["+errorCode+"]"+errorInfoZh;
                                                   }*/
                                                   
                                                   resp.ErrorInfo+=resp.GroupInfo[i].ErrorInfo+'\n';
                                               }
                                           }
                                       }
                                       if(resp.ActionStatus==WEB_IM_ACTION_STATUS_FAIL){
                                           if(cbErr){
                                               cbErr(resp);
                                           }
                                       }else if(cbOk){
                                           cbOk(resp);
                                       }
                                       
                                   },
                                   cbErr);
	};
        
        //获取群组详细资料--高级
        var proto_getGroupInfo = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                
                var opt={
                    'GroupIdList':options.GroupIdList,
                    'ResponseFilter':{
                        'GroupBaseInfoFilter':options.GroupBaseInfoFilter,
                        'MemberInfoFilter':options.MemberInfoFilter
                    } 
                };
                if(options.AppDefinedDataFilter_Group){
                    opt.AppDefinedDataFilter_Group=options.AppDefinedDataFilter_Group
                }
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"get_group_info", opt, 
                                   cbOk, cbErr);
	};
        
        //获取群组成员-高级接口
        var proto_getGroupMemberInfo = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"get_group_member_info", {
                                                'GroupId':options.GroupId,
                                                'Offset':options.Offset,
                                                'Limit':options.Limit,
                                                'MemberInfoFilter':options.MemberInfoFilter
                                              }, 
                                   cbOk, cbErr);
	};
        
        
        //增加群组成员
        var proto_addGroupMember = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"add_group_member", {
                                                'GroupId':options.GroupId,
                                                'Silence':options.Silence,
                                                'MemberList':options.MemberList 
                                              }, 
                                   cbOk, cbErr);
	};
        //修改群组成员资料
        var proto_modifyGroupMember = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                var opt={};
                if(options.GroupId){
                    opt.GroupId=options.GroupId;
                }
                if(options.Member_Account){
                    opt.Member_Account=options.Member_Account;
                }
                //Admin或者Member
                if(options.Role){
                    opt.Role=options.Role;
                }
                //AcceptAndNotify
                if(options.MsgFlag){
                    opt.MsgFlag=options.MsgFlag;
                }
                if(options.ShutUpTime){
                    opt.ShutUpTime=options.ShutUpTime;
                }
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"modify_group_member_info", opt, 
                                   cbOk, cbErr);
	};
        //删除群组成员
        var proto_deleteGroupMember = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"delete_group_member", {
                                                'GroupId':options.GroupId,
                                                'Silence':options.Silence,
                                                'MemberToDel_Account':options.MemberToDel_Account 
                                              }, 
                                   cbOk, cbErr);
	};
        //解散群组
        var proto_destroyGroup = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"destroy_group", {
                                                'GroupId':options.GroupId
                                              }, 
                                   cbOk, cbErr);
	};
        //获取用户所加入的群组
        var proto_getJoinedGroupList = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"get_joined_group_list", {
                                                'Member_Account':options.Member_Account
                                              }, 
                                   cbOk, cbErr);
	};
        //获取用户所加入的群组-高级接口
        var proto_getJoinedGroupListHigh = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"get_joined_group_list", {
                                                'Member_Account':options.Member_Account,
                                                'Limit':options.Limit,
                                                'Offset':options.Offset,
                                                'GroupType':options.GroupType,
                                                'ResponseFilter':{
                                                    'GroupBaseInfoFilter':options.GroupBaseInfoFilter,
                                                    'SelfInfoFilter':options.SelfInfoFilter
                                                }
                                              }, 
                                   cbOk, cbErr);
	};
        //查询一组UserId在群中的身份
        var proto_getRoleInGroup = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"get_role_in_group", {
                                                'GroupId':options.GroupId,
                                                'User_Account':options.User_Account
                                              }, 
                                   cbOk, cbErr);
	};
        //设置取消成员禁言时间
        var proto_forbidSendMsg = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"forbid_send_msg", {
                                                'GroupId':options.GroupId,
                                                'Members_Account':options.Members_Account,
                                                'ShutUpTime':options.ShutUpTime
                                              }, 
                                   cbOk, cbErr);
	};
        
        //发送自定义群系统通知
        var proto_sendCustomGroupNotify = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"send_group_system_notification", options, 
                                   cbOk, cbErr);
	};
        
        //拉取群消息接口
        var proto_getGroupMsgs = function(options,cbOk, cbErr) {
                
		if (!checkLogin()) return;
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"group_msg_get", {
                                              "GroupId":options.GroupId,
                                              "ReqMsgSeq":options.ReqMsgSeq,
                                              "ReqMsgNumber":options.ReqMsgNumber
                                          }, 
                                    cbOk, cbErr);
	};
        //群消息已读上报接口
        var proto_groupMsgReaded = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
		ConnManager.apiCall(WEB_IM_SRV_NAME_GROUP,"msg_read_report", {
                                              'GroupId':options.GroupId,
                                              'MsgReadedSeq':options.MsgReadedSeq
                                          }, 
                                    cbOk, cbErr);
	};
        //end
        
        //好友接口
        //处理好友接口返回的错误码
        var convertErrorEn2ZhFriend=function(resp){
                        var errorAccount=[];
                        if (resp.Fail_Account && resp.Fail_Account.length){
                            errorAccount = resp.Fail_Account;
                        }
                        if (resp.Invalid_Account && resp.Invalid_Account.length){
                            for (var k in resp.Invalid_Account){
                                errorAccount.push(resp.Invalid_Account[k]);
                            }
                        }
                        if (errorAccount.length){
                            resp.ActionStatus=WEB_IM_ACTION_STATUS_FAIL;
                            resp.ErrorCode=WEB_IM_ERROR_CODE_CUSTOM;
                            resp.ErrorInfo='';
                            for (var i in errorAccount){
                                var failCount = errorAccount[i];
                                for (var j in resp.ResultItem){
                                    if (resp.ResultItem[j].To_Account == failCount){
                                        
                                        var resultCode = resp.ResultItem[j].ResultCode;
                                        
                                        resp.ResultItem[j].ResultInfo = "[" + resultCode + "]" + resp.ResultItem[j].ResultInfo;
                                        /*var errorInfoZh = WEB_IM_ERROR[resultCode];
                                        if (errorInfoZh){
                                            resp.ResultItem[j].ResultInfo = "[" + resultCode + "]" + errorInfoZh;
                                        }*/
                                        resp.ErrorInfo+=resp.ResultItem[j].ResultInfo+"\n";
                                        break;
                                    }
                                }
                            }
                        }
                        return resp;
        };
        //添加好友
        var proto_applyAddFriend = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
		ConnManager.apiCall(WEB_IM_SRV_NAME_FRIEND,"friend_add", {
                                              'From_Account':options.From_Account,
                                              'AddFriendItem':options.AddFriendItem
                                          }, 
                                    function(resp){
                                        var newResp=convertErrorEn2ZhFriend(resp);
                                        if(newResp.ActionStatus==WEB_IM_ACTION_STATUS_FAIL ){
                                            if(cbErr) cbErr(newResp);
                                        }else if(cbOk) {
                                            cbOk(newResp);
                                        }
                                    }, cbErr);
	};
        //删除好友
        var proto_deleteFriend = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
		ConnManager.apiCall(WEB_IM_SRV_NAME_FRIEND,"friend_delete", {
                                              'From_Account':options.From_Account,
                                              'To_Account':options.To_Account,
                                              'DeleteType':options.DeleteType
                                          }, 
                                    function(resp){
                                        var newResp=convertErrorEn2ZhFriend(resp);
                                        if(newResp.ActionStatus==WEB_IM_ACTION_STATUS_FAIL ){
                                            if(cbErr) cbErr(newResp);
                                        }else if(cbOk) {
                                            cbOk(newResp);
                                        }
                                    }, cbErr);
	};
        //获取好友申请
        var proto_getPendency = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
		ConnManager.apiCall(WEB_IM_SRV_NAME_FRIEND,"pendency_get", {
                                              "From_Account":options.From_Account,
                                              "PendencyType":options.PendencyType,
                                              "StartTime":options.StartTime,
                                              "MaxLimited":options.MaxLimited,
                                              "LastSequence":options.LastSequence
                                          }, 
                                    cbOk, cbErr);
	};
        //删除好友申请
        var proto_deletePendency = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
		ConnManager.apiCall(WEB_IM_SRV_NAME_FRIEND,"pendency_delete", {
                                              "From_Account":options.From_Account,
                                              "PendencyType":options.PendencyType,
                                              "To_Account":options.To_Account
                                              
                                          }, 
                                    function(resp){
                                        var newResp=convertErrorEn2ZhFriend(resp);
                                        if(newResp.ActionStatus==WEB_IM_ACTION_STATUS_FAIL ){
                                            if(cbErr) cbErr(newResp);
                                        }else if(cbOk) {
                                            cbOk(newResp);
                                        }
                                    }, cbErr);
	};
        //处理好友申请
        var proto_responseFriend = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
		ConnManager.apiCall(WEB_IM_SRV_NAME_FRIEND,"friend_response", {
                                              'From_Account':options.From_Account,
                                              'ResponseFriendItem':options.ResponseFriendItem
                                          }, 
                                    function(resp){
                                        var newResp=convertErrorEn2ZhFriend(resp);
                                        if(newResp.ActionStatus==WEB_IM_ACTION_STATUS_FAIL ){
                                            if(cbErr) cbErr(newResp);
                                        }else if(cbOk) {
                                            cbOk(newResp);
                                        }
                                    }, cbErr);
	};
        //我的好友
        var proto_getAllFriend = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
		ConnManager.apiCall(WEB_IM_SRV_NAME_FRIEND,"friend_get_all", {
                                              'From_Account':options.From_Account,
                                              'TimeStamp':options.TimeStamp,
                                              'StartIndex':options.StartIndex,
                                              'GetCount':options.GetCount,
                                              'LastStandardSequence':options.LastStandardSequence,
                                              'TagList':options.TagList
                                          }, 
                                    cbOk, cbErr);
	};
        
        //资料接口
        //查看个人资料
        var proto_getProfilePortrait = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
		ConnManager.apiCall(WEB_IM_SRV_NAME_PROFILE,"portrait_get", {
                                              'From_Account':options.From_Account,
                                              'To_Account':options.To_Account,
                                              'LastStandardSequence':options.LastStandardSequence,
                                              'TagList':options.TagList
                                          }, 
                                    function(resp){
                                        var errorAccount=[];
                                        if(resp.Fail_Account && resp.Fail_Account.length){
                                            errorAccount=resp.Fail_Account;
                                        }
                                        if(resp.Invalid_Account && resp.Invalid_Account.length){
                                            for(var k in resp.Invalid_Account){
                                                errorAccount.push(resp.Invalid_Account[k]);
                                            } 
                                        }
                                        if(errorAccount.length){
                                            resp.ActionStatus=WEB_IM_ACTION_STATUS_FAIL;
                                            resp.ErrorCode=WEB_IM_ERROR_CODE_CUSTOM;
                                            resp.ErrorInfo='';
                                            for(var i in errorAccount){
                                                var failCount=errorAccount[i];
                                                for(var j in resp.UserProfileItem){
                                                    if(resp.UserProfileItem[j].To_Account==failCount){
                                                        var resultCode=resp.UserProfileItem[j].ResultCode;
                                                        resp.UserProfileItem[j].ResultInfo = "[" + resultCode + "]" + resp.UserProfileItem[j].ResultInfo;
                                                        /*var errorInfoZh=WEB_IM_ERROR[resultCode];
                                                        if(errorInfoZh){
                                                            resp.UserProfileItem[j].ResultInfo="["+resultCode+"]"+errorInfoZh;
                                                        }*/
                                                        resp.ErrorInfo+="账号:"+failCount+","+resp.UserProfileItem[j].ResultInfo+"\n";
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                        if(resp.ActionStatus==WEB_IM_ACTION_STATUS_FAIL ){
                                            if(cbErr) cbErr(resp);
                                        }else if(cbOk) {
                                            cbOk(resp);
                                        }
                                    }, 
                                    cbErr);
	};
        
        //设置个人资料
        var proto_setProfilePortrait = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
                
		ConnManager.apiCall(WEB_IM_SRV_NAME_PROFILE,"portrait_set", {
                                              'From_Account':options.From_Account,
                                              'ProfileItem':options.ProfileItem
                                          }, 
                                    cbOk, cbErr);
	};
        
        //增加黑名单
        var proto_addBlackList = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
		ConnManager.apiCall(WEB_IM_SRV_NAME_FRIEND,"black_list_add", {
                                              'From_Account':options.From_Account,
                                              'To_Account':options.To_Account
                                          }, 
                                    function(resp){
                                        var newResp=convertErrorEn2ZhFriend(resp);
                                        if(newResp.ActionStatus==WEB_IM_ACTION_STATUS_FAIL ){
                                            if(cbErr) cbErr(newResp);
                                        }else if(cbOk) {
                                            cbOk(newResp);
                                        }
                                    }, cbErr);
	};
        
        //删除黑名单
        var proto_deleteBlackList = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
		ConnManager.apiCall(WEB_IM_SRV_NAME_FRIEND,"black_list_delete", {
                                              'From_Account':options.From_Account,
                                              'To_Account':options.To_Account
                                          }, 
                                    function(resp){
                                        var newResp=convertErrorEn2ZhFriend(resp);
                                        if(newResp.ActionStatus==WEB_IM_ACTION_STATUS_FAIL ){
                                            if(cbErr) cbErr(newResp);
                                        }else if(cbOk) {
                                            cbOk(newResp);
                                        }
                                    }, cbErr);
	};
        
        //我的黑名单
        var proto_getBlackList = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
		ConnManager.apiCall(WEB_IM_SRV_NAME_FRIEND,"black_list_get", {
                                              'From_Account':options.From_Account,
                                              'StartIndex':options.StartIndex,
                                              'MaxLimited':options.MaxLimited,
                                              'LastSequence':options.LastSequence
                                          }, 
                                    cbOk, cbErr);
	};
        
        //上传图片
        var proto_uploadPic = function(options,cbOk, cbErr) {
		if (!checkLogin()) return;
		ConnManager.apiCall(WEB_IM_SRV_NAME_PIC,"pic_up", {
                                              'App_Version':WEB_IM_SDK_VERSION,
                                              'From_Account':options.From_Account,
                                              'To_Account':options.To_Account,
                                              'Seq':options.Seq,
                                              'Timestamp':options.Timestamp,
                                              'Random':options.Random,
                                              'File_Str_Md5':options.File_Str_Md5,
                                              'File_Size':options.File_Size,
                                              'Busi_Id':options.Busi_Id,
                                              'PkgFlag':options.PkgFlag,
                                              'Slice_Offset':options.Slice_Offset,
                                              'Slice_Size':options.Slice_Size,
                                              'Slice_Data':options.Slice_Data
                                          }, 
                                    cbOk, cbErr);
	};
        
        //获取语音和文件下载IP和authkey
        var proto_getIpAndAuthkey = function(cbOk, cbErr) {
		if (!checkLogin()) return;
		ConnManager.apiCall(WEB_IM_SRV_NAME_OPEN_IM,"authkey", {}, cbOk, cbErr);
	};
        //end
        var lowerBR = false;
        var bVersion = tool.getBrowserInfo();
        //console.debug('bVersion',bVersion);
        if (bVersion.type=="ie") {
            if (parseInt(bVersion.ver) < 10) {
                lowerBR = true;
            }
        }
	// singleton object ConnManager     
	var ConnManager = lowerBR == false 
        ? new function() {
		var callback = null;//回调函数
		this.init = function(cb) {
			callback = cb;
		};
                //请求后台服务接口
		this.apiCall = function(type,cmd, data, cbOk, cbErr) {
                        //封装后台服务接口地址
                        var url=getApiUrl(type,cmd);
                        //发起ajax请求
			ajaxRequestJson("POST", url, data, function(resp) {
                                //成功
				if (resp.ActionStatus == WEB_IM_ACTION_STATUS_OK) {
                                        //if(cmd!='pic_up'){
                                            console.info("["+type+"]["+cmd+"]success:\nurl:\n%s\ndata:\n%s\nresponse:\n%s",url,JSON.stringify(data),JSON.stringify(resp));
                                            //console.info("["+type+"]["+cmd+"]success:\nurl:\n%s\ndata:\n%s\nresponse:\n%o",url,JSON.stringify(data),resp);
                                        //}
                                        //console.info('cbOk='+cbOk);
					if (cbOk) cbOk(resp);//回调
				} else {
                                        //报错
					if (cbErr){
                                            resp.ErrorInfo="["+resp.ErrorCode+"]"+resp.ErrorInfo;
                                            /*var errorInfoZh=WEB_IM_ERROR[resp.ErrorCode];
                                            if(errorInfoZh){
                                                resp.ErrorInfo="["+resp.ErrorCode+"]"+errorInfoZh;
                                            }*/
                                            if(cmd!='longpolling'){
                                                console.error("["+type+"]["+cmd+"]fail:url:\n%s\ndata:\n%s\nresponse:\n%s",url,JSON.stringify(data),JSON.stringify(resp));
                                            }else{
                                                console.warn("["+type+"]["+cmd+"]fail:url:\n%s\ndata:\n%s\nresponse:\n%s",url,JSON.stringify(data),JSON.stringify(resp));
                                            }
                                            cbErr(resp);
                                        }
                                            
				}
			}, cbErr);
		};
	} 
        :new function () {
                var self = this;
		var callback = null;        //回调函数
		this.init = function(cb) {
			callback = cb;
		};
                //请求后台服务接口
		this.apiCall = function(type,cmd, data, cbOk, cbErr) {
                        //封装后台服务接口地址
                        var url=getApiUrl(type,cmd);
                        //发起jsonp请求
                        var reqId = webimJsonpRequestId++,
                        cbkey = 'jsonpcallback', // the 'callback' key
                        cbval = 'jsonpRequest' + reqId, // the 'callback' value
                        script = document.createElement('script'),
                        loaded = 0;
                        
                        window[cbval] = webimJsonpCallback;
                        script.type = 'text/javascript';
                        url=url+"&"+cbkey+"="+cbval+"&jsonpbody="+encodeURIComponent(JSON.stringify(data));
                        script.src = url;
                        script.async = true;
                        
                        if (typeof script.onreadystatechange !== 'undefined') {
                            // need this for IE due to out-of-order onreadystatechange(), binding script
                            // execution to an event listener gives us control over when the script
                            // is executed. See http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
                            script.event = 'onclick';
                            script.htmlFor = script.id = '_jsonpRequest_' + reqId;
                        }
                        console.info("["+type+"]["+cmd+"]\nurl:\n%s\ndata:\n%s",url,JSON.stringify(data));
 
                        script.onload = script.onreadystatechange = function () {
                            if ((this.readyState && this.readyState!== 'complete' && this.readyState!== 'loaded') || loaded) {
                                return false;
                            }
                            script.onload = script.onreadystatechange = null;
                            script.onclick && script.onclick();
                            // Call the user callback with the last value stored and clean up values and scripts.
                            var resp=webimJsonpLastRspData;
                            if (resp.ActionStatus == WEB_IM_ACTION_STATUS_OK){
                                console.info("["+type+"]["+cmd+"]success:\nurl:\n%s\ndata:\n%s\nresponse:\n%s",url,JSON.stringify(data),JSON.stringify(resp));
                                cbOk && cbOk(resp);
                            }else{
                                resp.ErrorInfo="["+resp.ErrorCode+"]"+resp.ErrorInfo;
                                if(cmd!='longpolling'){
                                    console.error("["+type+"]["+cmd+"]fail:url:\n%s\ndata:\n%s\nresponse:\n%s",url,JSON.stringify(data),JSON.stringify(resp));
                                }else{
                                    console.warn("["+type+"]["+cmd+"]fail:url:\n%s\ndata:\n%s\nresponse:\n%s",url,JSON.stringify(data),JSON.stringify(resp));
                                }
                                cbErr && cbErr(resp);
                            }
                            webimJsonpLastRspData = undefined;
                            document.body.removeChild(script);
                            loaded = 1;
                        };
 
                        // Add the script to the DOM head
                        document.body.appendChild(script);
		};
        };
        var ParseJSONPDatas = function (StringDatas) {
            return JSON.parse(StringDatas)
        };
	// class Session
	var Session = function(type, id, name, icon, time,seq) {
		this._impl = {
			skey: Session.skey(type, id),
			type: type,
			id: id,
			name: name,
			icon: icon,
			unread: 0,//未读消息数
			isAutoRead: false,
			time: time >= 0 ? time : 0,
                        curMaxMsgSeq:seq >= 0 ? seq : 0,
			msgs: []
		};
	};
	Session.skey = function(type, id) {
		return type + id;
	};
	Session.prototype.type = function() {return this._impl.type;};
	Session.prototype.id = function() {return this._impl.id;};
	Session.prototype.name = function() {return this._impl.name;};
	Session.prototype.icon = function() {return this._impl.icon;};
	Session.prototype.unread = function() {return this._impl.unread;};
	Session.prototype.time = function() {return this._impl.time;};
	Session.prototype.curMaxMsgSeq = function() {return this._impl.curMaxMsgSeq;};
	Session.prototype.msgCount = function() {return this._impl.msgs.length;};
	Session.prototype.msg = function(index) {return this._impl.msgs[index];};
        
	Session.prototype._impl_addMsg = function(msg) {
		this._impl.msgs.push(msg);
		//if (!msg.isSend && msg.time > this._impl.time)
		if (msg.time > this._impl.time)
			this._impl.time = msg.time;
                //if (!msg.isSend && msg.seq > this._impl.curMaxMsgSeq)
                if (msg.seq > this._impl.curMaxMsgSeq)
			this._impl.curMaxMsgSeq = msg.seq;
                //console.info("msg.isSend="+msg.isSend);
                //console.info("_impl.isAutoRead="+this._impl.isAutoRead);
                //自己发送的消息不计入未读数
		if (!msg.isSend && !this._impl.isAutoRead){
			this._impl.unread++;
                        //console.info("_impl.unread++");
                }
	};
        //class C2CMsgReadedItem
        var C2CMsgReadedItem=function(toAccount,lastedMsgTime){
            this.toAccount=toAccount;
            this.lastedMsgTime=lastedMsgTime;
        }
	// class Msg
	var Msg = function(sess, isSend, seq, random,time,fromAccount,type) {
		this.sess = sess;
                this.type = type>=0 ? type : 0;//消息类型,c2c消息时，type取值为0；group消息时，type取值0和1，0-普通群消息，1-群提示消息
                this.fromAccount = fromAccount;
                this.isSend = Boolean(isSend);
		this.seq = seq >= 0 ? seq : nextSeq(fromAccount);
		this.random = random >= 0 ? random : createRandom();
		this.time = time >= 0 ? time : unixtime();
		this.elems = [];
	};
        //文本
	Msg.prototype.addText = function(text) {
		this.addElem(new webim.Msg.Elem(WEB_IM_MSG_ELEMENT_TYPE_TEXT, text));
	};
        //表情
	Msg.prototype.addFace = function(face) {
		this.addElem(new webim.Msg.Elem(WEB_IM_MSG_ELEMENT_TYPE_FACE, face));
	};
        //图片
	Msg.prototype.addImage = function(image) {
		this.addElem(new webim.Msg.Elem(WEB_IM_MSG_ELEMENT_TYPE_IMAGE, image));
	};
        //自定义
	Msg.prototype.addCustom = function(custom) {
		this.addElem(new webim.Msg.Elem(WEB_IM_MSG_ELEMENT_TYPE_CUSTOM, custom));
	};
        
	Msg.prototype.addElem = function(elem) {
		this.elems.push(elem);
	};
	Msg.prototype.toHtml = function() {
		var html = "";
		for (var i in this.elems) {
			var elem = this.elems[i];
			html += elem.toHtml();
		}
                return html;
	};
	// class Msg.Elem
	Msg.Elem = function(type, value) {
		this.type = type;
		this.content = value;
	};
	Msg.Elem.prototype.toHtml = function() {
		var html;
                html=this.content.toHtml();
		return html;
	};
        // class Msg.Elem.Text
	Msg.Elem.Text = function(text) {
		this.text = tool.xssFilter(text);
	};
        Msg.Elem.Text.prototype.getText = function() {
                return	this.text;
	};
        Msg.Elem.Text.prototype.toHtml = function() {
                return	this.text;
	};
        // class Msg.Elem.Face
	Msg.Elem.Face = function(index,data) {
		this.index = index;
		this.data = data;
	};
        Msg.Elem.Face.prototype.getIndex = function() {
                return this.index;
	};
        Msg.Elem.Face.prototype.getData = function() {
                return this.data;     
	};
        Msg.Elem.Face.prototype.toHtml = function() {
		if(emotionPicData[this.data]){
                    return	"<img src='" + emotionPicData[this.data] + "'/>";
                }else{
                    return this.data;
                }
	};
        
        //图片消息
        // class Msg.Elem.Images
	Msg.Elem.Images = function(imageId) {
		this.UUID = imageId;
		this.ImageInfoArray=[];
	};
        Msg.Elem.Images.prototype.addImage = function(image) {
                this.ImageInfoArray.push(image);    
	};
        Msg.Elem.Images.prototype.toHtml = function() {
                var smallImage=this.getImage(WEB_IM_IMAGE_TYPE.SMALL);
                var bigImage=this.getImage(WEB_IM_IMAGE_TYPE.LARGE);
                var oriImage=this.getImage(WEB_IM_IMAGE_TYPE.ORIGIN);
                if(!bigImage){
                    bigImage=smallImage;
                }
                if(!oriImage){
                    oriImage=smallImage;
                }
                return	"<img src='" + smallImage.getUrl() + "#"+bigImage.getUrl()+"#"+oriImage.getUrl()+"' style='CURSOR: hand' id='"+this.getImageId()+"' bigImgUrl='"+bigImage.getUrl()+"' onclick='imageClick(this)' />";
                
	}; 
        Msg.Elem.Images.prototype.getImageId = function() {
                return this.UUID;
	};
        Msg.Elem.Images.prototype.getImage = function(type) {
                for(var i in this.ImageInfoArray){
                    if(this.ImageInfoArray[i].getType()==type){
                        return this.ImageInfoArray[i];
                    }
                }
                return null;
	};
        // class Msg.Elem.Images.Image
	Msg.Elem.Images.Image = function(type,size,width,height,url) {
		this.type = type;
		this.size = size;
		this.width = width;
		this.height = height;
		this.url = url;
	};
        Msg.Elem.Images.Image.prototype.getType= function() {
                return this.type;  
	};
        Msg.Elem.Images.Image.prototype.getSize= function() {
                return this.size;  
	};
        Msg.Elem.Images.Image.prototype.getWidth= function() {
                return this.width;  
	};
        Msg.Elem.Images.Image.prototype.getHeight= function() {
                return this.height;  
	};
        Msg.Elem.Images.Image.prototype.getUrl= function() {
                return this.url;  
	};
        
        // class Msg.Elem.Sound
	Msg.Elem.Sound = function(uuid,second,size,senderId,downUrl) {
		this.uuid = uuid;//语音id
		this.second = second;//时长，单位：秒
		this.size = size;//大小，单位：字节
		this.senderId = senderId;//发送者id
		this.downUrl = downUrl;//下载url
	};
        Msg.Elem.Sound.prototype.getUUID = function() {
                return this.uuid;
	};
        Msg.Elem.Sound.prototype.getSecond = function() {
                return this.second;     
	};
        Msg.Elem.Sound.prototype.getSize = function() {
                return this.size;     
	};
        Msg.Elem.Sound.prototype.getSenderId = function() {
                return this.senderId;     
	};
        Msg.Elem.Sound.prototype.getDownUrl = function() {
                return this.downUrl;     
	};
        Msg.Elem.Sound.prototype.toHtml = function() {
                if(browserInfo.type=='ie' && parseInt(browserInfo.ver)<=8){
                    return '[这是一条语音消息]demo暂不支持ie8(含)以下浏览器播放语音,语音URL:'+this.downUrl;
                }
		return '<audio src="'+this.downUrl+'" controls="controls" onplay="onChangePlayAudio(this)" preload="none"></audio>';
	};
        
        // class Msg.Elem.File
	Msg.Elem.File = function(uuid,name,size,senderId,downUrl) {
		this.uuid = uuid;//文件id
		this.name = name;//文件名
		this.size = size;//大小，单位：字节
		this.senderId = senderId;//发送者
                this.downUrl = downUrl;//下载地址
	};
        Msg.Elem.File.prototype.getUUID = function() {
                return this.uuid;
	};
        Msg.Elem.File.prototype.getName = function() {
                return this.name;     
	};
        Msg.Elem.File.prototype.getSize = function() {
                return this.size;     
	};
        Msg.Elem.File.prototype.getSenderId = function() {
                return this.senderId;     
	};
        Msg.Elem.File.prototype.getDownUrl = function() {
                return this.downUrl;     
	};
        Msg.Elem.File.prototype.toHtml = function() {
                var fileSize=Math.round(this.size/1024);
		return '<a href="'+this.downUrl+'" title="点击下载文件" ><i class="glyphicon glyphicon-file">&nbsp;'+this.name+'('+fileSize+'KB)</i></a>';
	};
        
        // class Msg.Elem.GroupTip 群提示消息对象
	Msg.Elem.GroupTip = function(opType,opUserId,groupId,groupName,userIdList) {
		this.opType = opType;//操作类型
		this.opUserId = opUserId;//操作者id
		this.groupId = groupId;//群id
		this.groupName = groupName;//群名称
                this.userIdList = userIdList ? userIdList : [];//被操作的用户id列表
                this.groupInfoList = [];//新的群资料信息，群资料变更时才有值
                this.memberInfoList = [];//新的群成员资料信息，群成员资料变更时才有值
	};
        Msg.Elem.GroupTip.prototype.addGroupInfo = function(groupInfo) {
                this.groupInfoList.push(groupInfo);   
	};
        Msg.Elem.GroupTip.prototype.addMemberInfo = function(memberInfo) {
                this.memberInfoList.push(memberInfo);    
	};
        Msg.Elem.GroupTip.prototype.getOpType = function() {
                return this.opType;
	};
        Msg.Elem.GroupTip.prototype.getOpUserId = function() {
                return this.opUserId;     
	};
        Msg.Elem.GroupTip.prototype.getGroupId = function() {
                return this.groupId;     
	};
        Msg.Elem.GroupTip.prototype.getGroupName = function() {
                return this.groupName;     
	};
        Msg.Elem.GroupTip.prototype.getUserIdList = function() {
                return this.userIdList;     
	};
        Msg.Elem.GroupTip.prototype.getGroupInfoList = function() {
                return this.groupInfoList;     
	};
        Msg.Elem.GroupTip.prototype.getMemberInfoList = function() {
                return this.memberInfoList;     
	};
        Msg.Elem.GroupTip.prototype.toHtml = function() {
                var text="[群提示消息]";
                var maxIndex=WEB_IM_GROUP_TIP_MAX_USER_COUNT-1;
                switch (this.opType) {
                    case WEB_IM_GROUP_TIP_TYPE.JOIN://加入群
                        text += this.opUserId + "邀请了";
                        for (var m in this.userIdList) {
                            text += this.userIdList[m] + ",";
                            if (this.userIdList.length > WEB_IM_GROUP_TIP_MAX_USER_COUNT && m == maxIndex) {
                                text += "等" + this.userIdList.length + "人";
                                break;
                            }
                        }
                        text += "加入该群";
                        break;
                    case WEB_IM_GROUP_TIP_TYPE.QUIT://退出群
                        text += this.opUserId + "主动退出该群";
                        break;
                    case WEB_IM_GROUP_TIP_TYPE.KICK://踢出群
                        text += this.opUserId + "将";
                        for (var m in this.userIdList) {
                            text += this.userIdList[m] + ",";
                            if (this.userIdList.length > WEB_IM_GROUP_TIP_MAX_USER_COUNT && m == maxIndex) {
                                text += "等" + this.userIdList.length + "人";
                                break;
                            }
                        }
                        text += "踢出该群";
                        break;
                    case WEB_IM_GROUP_TIP_TYPE.SET_ADMIN://设置管理员
                        text += this.opUserId + "将";
                        for (var m in this.userIdList) {
                            text += this.userIdList[m] + ",";
                            if (this.userIdList.length > WEB_IM_GROUP_TIP_MAX_USER_COUNT && m == maxIndex) {
                                text += "等" + this.userIdList.length + "人";
                                break;
                            }
                        }
                        text += "设为管理员";
                        break;
                    case WEB_IM_GROUP_TIP_TYPE.CANCEL_ADMIN://取消管理员
                        text += this.opUserId + "取消";
                        for (var m in this.userIdList) {
                            text += this.userIdList[m] + ",";
                            if (this.userIdList.length > WEB_IM_GROUP_TIP_MAX_USER_COUNT && m == maxIndex) {
                                text += "等" + this.userIdList.length + "人";
                                break;
                            }
                        }
                        text += "的管理员资格";
                        break;
        
                    case WEB_IM_GROUP_TIP_TYPE.MODIFY_GROUP_INFO://群资料变更
                        text += this.opUserId + "修改了群资料：";
                        for (var m in this.groupInfoList) {
                            var type=this.groupInfoList[m].getType();
                            var value=this.groupInfoList[m].getValue();
                            switch(type){
                                case WEB_IM_GROUP_TIP_MODIFY_GROUP_INFO_TYPE.FACE_URL:
                                    text += "群头像为" + value + "; ";
                                    break;
                                case WEB_IM_GROUP_TIP_MODIFY_GROUP_INFO_TYPE.NAME:
                                    text += "群名称为" + value + "; ";
                                    break;
                                case WEB_IM_GROUP_TIP_MODIFY_GROUP_INFO_TYPE.OWNER:
                                    text += "群主为" + value + "; ";
                                    break;
                                case WEB_IM_GROUP_TIP_MODIFY_GROUP_INFO_TYPE.NOTIFICATION:
                                    text += "群公告为" + value + "; ";
                                    break;
                                case WEB_IM_GROUP_TIP_MODIFY_GROUP_INFO_TYPE.INTRODUCTION:
                                    text += "群简介为" + value + "; ";
                                    break;
                                default:
                                    text += "未知信息为:type=" + type+",value="+value + "; ";
                                    break;
                            } 
                        }
                        break;
        
                    case WEB_IM_GROUP_TIP_TYPE.MODIFY_MEMBER_INFO://群成员资料变更(禁言时间)
                        text += this.opUserId + "修改了群成员资料:";
                        for (var m in this.memberInfoList) {
                            var userId=this.memberInfoList[m].getUserId();
                            var shutupTime=this.memberInfoList[m].getShutupTime();
                            text += userId+": ";
                            if (shutupTime != null && shutupTime !== undefined) {
                                if (shutupTime == 0) {
                                    text += "取消禁言; ";
                                } else {
                                    text += "禁言" + shutupTime + "秒; ";
                                }
                            } else{
                                text += " shutupTime为空";
                            }
                            if (this.memberInfoList.length > WEB_IM_GROUP_TIP_MAX_USER_COUNT && m == maxIndex) {
                                text += "等" + this.memberInfoList.length + "人";
                                break;
                            }
                        }
                        break;
                    default:
                        text += "未知群提示消息类型：type="+this.opType;
                        break;
                }
                return text;
	};
        
        // class Msg.Elem.GroupTip.GroupInfo，变更的群资料信息对象
	Msg.Elem.GroupTip.GroupInfo = function(type,value) {
		this.type = type;//群资料信息类型
		this.value = value;//对应的值
	};
        Msg.Elem.GroupTip.GroupInfo.prototype.getType = function() {
                return this.type;     
	};
        Msg.Elem.GroupTip.GroupInfo.prototype.getValue = function() {
                return this.value;     
	};
        
        // class Msg.Elem.GroupTip.MemberInfo，变更的群成员资料信息对象
	Msg.Elem.GroupTip.MemberInfo = function(userId,shutupTime) {
		this.userId = userId;//群成员id
		this.shutupTime = shutupTime;//群成员被禁言时间，0表示取消禁言，大于0表示被禁言时长，单位：秒
	};
        Msg.Elem.GroupTip.MemberInfo.prototype.getUserId = function() {
                return this.userId;     
	};
        Msg.Elem.GroupTip.MemberInfo.prototype.getShutupTime = function() {
                return this.shutupTime;     
	};
        
        // 自定义消息类型 class Msg.Elem.Custom
	Msg.Elem.Custom = function(data,desc,ext) {
		this.data =data;//数据
                this.desc =desc;//描述
                this.ext =ext;//扩展字段
	};
        Msg.Elem.Custom.prototype.getData = function() {
                return	this.data;
	};
        Msg.Elem.Custom.prototype.getDesc = function() {
                return	this.desc;
	};
        Msg.Elem.Custom.prototype.getExt = function() {
                return	this.ext;
	};
        Msg.Elem.Custom.prototype.toHtml = function() {
                return	this.data;
	};
        
	// singleton object MsgStore
	var MsgStore = new function() {
		var sessMap = {};//跟所有用户或群的聊天记录MAP
		var sessTimeline = [];//按时间降序排列的会话列表
		var msgCache = {};//消息缓存，用于判重
                //C2C
		this.cookie = "";//上一次拉取新c2c消息的cookie
		this.syncFlag = 0;//上一次拉取新c2c消息的是否继续拉取标记
                
		var visitSess = function(visitor) {
			for (var i in sessMap) {
				visitor(sessMap[i]);
			}
		};
                //消息查重
		var checkDupMsg = function(msg) {
			var dup = false;
			var first_key = msg.sess._impl.skey;
			var second_key = msg.isSend + msg.seq+msg.random;
			var tempMsg = msgCache[first_key] && msgCache[first_key][second_key];
			if (tempMsg && Math.abs(msg.time - tempMsg.time) < 1800)
				dup = true;
                        if(msgCache[first_key]){
                            msgCache[first_key][second_key] = {time: msg.time};
                        }else{
                            msgCache[first_key]={};
                            msgCache[first_key][second_key] = {time: msg.time};
                        }
			
			return dup;
		};
                
                this.sessMap=function(){
                    return sessMap;
                };
		this.sessCount = function() {
			return sessTimeline.length;
		};
		this.sessByTypeId = function(type, id) {
			var skey = Session.skey(type, id);
			if (skey === 'undefined' || skey == null) return null;
			return sessMap[skey];
		};
                this.delSessByTypeId = function(type, id) {
			var skey = Session.skey(type, id);
			if (skey === 'undefined' || skey == null) return false;
			if(sessMap[skey]){
                            delete sessMap[skey];
                            delete msgCache[skey];
                        }
                        return true;
		};
                this.resetCookieAndSyncFlag = function() {
			this.cookie = "";
                        this.syncFlag = 0;
		};
		
                //切换将当前会话的自动读取消息标志为isOn,重置其他会话的自动读取消息标志为false
		this.setAutoRead = function(selSess, isOn, isResetAll) {
			if (isResetAll)
				visitSess(function(s){s._impl.isAutoRead=false;});
			if (selSess) {
				selSess._impl.isAutoRead = isOn;//
				if (isOn) {//是否调用已读上报接口
                                    selSess._impl.unread = 0;
                                    
                                    if(selSess._impl.type==WEB_IM_MSG_TYPE_C2C){//私聊消息已读上报
                                        var tmpC2CMsgReadedItem=[];
                                        tmpC2CMsgReadedItem.push(new C2CMsgReadedItem(selSess._impl.id,selSess._impl.time));
                                        //调用C2C消息已读上报接口
                                        proto_c2CMsgReaded(MsgStore.cookie,
                                                      tmpC2CMsgReadedItem,
                                                      function(resp) {                                                    
                                                        console.info("c2CMsgReaded success");   
                                                      },
                                                      function(err) {
                                                        console.error("c2CMsgReaded failed:" + err.ErrorInfo);
                                                      });
                                    }else if(selSess._impl.type==WEB_IM_MSG_TYPE_GROUP){//群聊消息已读上报
                                        var tmpOpt={
                                            'GroupId':selSess._impl.id,
                                            'MsgReadedSeq':selSess._impl.curMaxMsgSeq
                                        };
                                        //调用group消息已读上报接口
                                        proto_groupMsgReaded(tmpOpt,
                                                      function(resp) {
                                                        console.info("groupMsgReaded success");                  
                                                      },
                                                      function(err) {
                                                        console.error("groupMsgReaded failed:" + err.ErrorInfo);
                                                      });
                                    }
                                    
                                }
			}
		};
                
                this.c2CMsgReaded=function(opts,cbOk,cbErr){
                    var tmpC2CMsgReadedItem=[];
                    tmpC2CMsgReadedItem.push(new C2CMsgReadedItem(opts.To_Account,opts.LastedMsgTime));
                    //调用C2C消息已读上报接口
                    proto_c2CMsgReaded(MsgStore.cookie,
                        tmpC2CMsgReadedItem,
                            function(resp) {  
                                if(cbOk){
                                    cbOk(resp);
                                }
                                console.info("c2CMsgReaded success");   
                            },
                            function(err) {
                                if(cbErr){
                                    cbErr(err);
                                }
                                console.error("c2CMsgReaded failed:" + err.ErrorInfo);
                            });
                };
                
		this.addSession = function(sess) {
			sessMap[sess._impl.skey] = sess;
		};
		this.delSession = function(sess) {
			delete sessMap[sess._impl.skey];
		};
		this.addMsg = function(msg) {
			if (checkDupMsg(msg)) return false;
			var sess = msg.sess;
			if (!sessMap[sess._impl.skey]) this.addSession(sess);
			sess._impl_addMsg(msg);
			return true;
		};
		this.updateTimeline = function() {
			var arr = new Array;
			visitSess(function(sess){arr.push(sess);});
			arr.sort(function(a,b){return b.time-a.time;});
			sessTimeline = arr;
		};
	};
	// singleton object MsgManager
	var MsgManager = new function() {
		var callback = null;//c2新消息回调
		var onGroupInfoChangeCallback = null;//群资料变化回调
                //收到新群系统消息回调列表
                var groupSystemNotifyCallbacks={
                    "1":null,
                    "2":null,
                    "3":null,
                    "4":null,
                    "5":null,
                    "6":null,
                    "7":null,
                    "8":null,
                    "9":null,
                    "10":null,
                    "11":null,
                    "255":null
                };
                var notifySeq=0;//c2c通知seq
                var noticeSeq=0;//群消息seq
                
                
                var ipList=[];//文件下载地址
                var authkey=null;//文件下载票据
                var expireTime=null;//票据超时时间
                
                var getLostGroupMsgCount=0;//补拉丢失的群消息次数
                //我的群当前最大的seq
                var myGroupMaxSeqs={};//用于补拉丢失的群消息
                
                var groupSystemMsgsCache={};//群组系统消息缓存,用于判重              
                
                //初始化文件下载ip和票据
                var initIpAndAuthkey=function(cbOk,cbErr){
                    proto_getIpAndAuthkey(function(resp){
                            ipList=resp.IpList;
                            authkey=resp.AuthKey;
                            expireTime=resp.ExpireTime;
                        },
                        function(err) {
				console.error("initIpAndAuthkey failed:" + err.ErrorInfo);
				if (cbErr) cbErr(err);
			}
                    );
                };
                
                //初始化我的群当前最大的seq，用于补拉丢失的群消息
                var initMyGroupMaxSeqs=function(cbOk,cbErr, loginInfo){
                    var opts={
                        'Member_Account': loginInfo.identifier,
                        'Limit': 1000,
                        'Offset': 0,
                        'GroupBaseInfoFilter': [
                            'NextMsgSeq'
                        ]
                    };
                    proto_getJoinedGroupListHigh(opts,function(resp){
                            if (!resp.GroupIdList || resp.GroupIdList.length == 0) {
                                console.info("initMyGroupMaxSeqs: 目前还没有加入任何群组");
                                return;
                            }
                            for (var i = 0; i < resp.GroupIdList.length; i++) {
                                var group_id = resp.GroupIdList[i].GroupId;
                                var curMaxSeq = resp.GroupIdList[i].NextMsgSeq-1;
                                myGroupMaxSeqs[group_id]=curMaxSeq;
                            }
                            console.warn("initMyGroupMaxSeqs success: %o",myGroupMaxSeqs);
                        },
                        function(err) {
				console.error("initMyGroupMaxSeqs failed:" + err.ErrorInfo);
				if (cbErr) cbErr(err);
			}
                    );
                };
                
                //补拉群消息
                var getLostGroupMsgs=function(groupId,reqMsgSeq,reqMsgNumber){
                    getLostGroupMsgCount++;
                    //发起一个拉群群消息请求
                    var tempOpts={
                        'GroupId':  groupId,
                        'ReqMsgSeq':  reqMsgSeq,
                        'ReqMsgNumber':  reqMsgNumber
                    };
                    //发起一个拉群群消息请求
                    console.warn("第%s次补齐群消息,参数=%s：",getLostGroupMsgCount,JSON.stringify(tempOpts));
                    MsgManager.syncGroupMsgs(tempOpts);
                };
                
                //添加群消息列表
                var addGroupMsgList=function(msgs,new_group_msgs){
                    for(var p in msgs){
                            var newGroupMsg=msgs[p];                  
                            //发群消息时，长轮询接口会返回用户自己发的群消息，如果收到自己发的群消息，则不要处理
                            if(newGroupMsg.From_Account && newGroupMsg.From_Account!=ctx.identifier ){
                            //if(newGroupMsg.From_Account){
                                var msg=handlerGroupMsg(newGroupMsg.ToGroupId,newGroupMsg);
                                    if(msg){
                                        new_group_msgs.push(msg);
                                    } 
                            }
                    }
                    return new_group_msgs;
                };
                
                //处理收到的群普通和提示消息
                var handlerOrdinaryAndTipGroupMsgs=function(eventType,groupMsgArray){
                                    var groupMsgMap = {};//
                                    var new_group_msgs=[];
                                    var minGroupMsgSeq=99999999;
                                    var maxGroupMsgSeq=-1;
                                    for(var j in groupMsgArray){
                                        
                                        var groupMsgs=groupMsgMap[groupMsgArray[j].ToGroupId];
                                        if(!groupMsgs){
                                            groupMsgs=groupMsgMap[groupMsgArray[j].ToGroupId]={
                                                "min":minGroupMsgSeq,//收到新消息最小seq
                                                "max":maxGroupMsgSeq,//收到新消息最大seq
                                                "msgs":[]//收到的新消息
                                            };
                                        }
                                        //更新noticeseq
                                        if(groupMsgArray[j].NoticeSeq>noticeSeq){
                                            console.warn("noticeSeq=%s,msgNoticeSeq=%s",noticeSeq,groupMsgArray[j].NoticeSeq);
                                            noticeSeq=groupMsgArray[j].NoticeSeq;
                                        }
                                        groupMsgArray[j].Event=eventType;
                                        groupMsgMap[groupMsgArray[j].ToGroupId].msgs.push(groupMsgArray[j]);
                                        if(groupMsgArray[j].MsgSeq<groupMsgs.min){
                                            groupMsgMap[groupMsgArray[j].ToGroupId].min=groupMsgArray[j].MsgSeq;
                                        }
                                        if(groupMsgArray[j].MsgSeq>groupMsgs.max){
                                            groupMsgMap[groupMsgArray[j].ToGroupId].max=groupMsgArray[j].MsgSeq;
                                        }
                                    }
                                    //console.error("groupMsgSeqMap=%s",JSON.stringify(groupMsgMap));
                                    
                                    for(var groupId in groupMsgMap){
                                        var tempCount=groupMsgMap[groupId].max-groupMsgMap[groupId].min+1;
                                        var curMaxMsgSeq=myGroupMaxSeqs[groupId];
                                        if(curMaxMsgSeq){//存在这个群的最大消息seq
                                            //高并发情况下，长轮询可能存在丢消息，这时需要客户端通过拉取群消息接口补齐下
                                            //1、如果收到的新消息最小seq比当前最大群消息seq大于1，则表示收到的群消息发生跳跃，需要补齐
                                            //2、收到的新群消息seq存在不连续情况，也需要补齐
                                            if(groupMsgMap[groupId].min-curMaxMsgSeq>1 || groupMsgMap[groupId].msgs.length<tempCount){
                                                //发起一个拉群群消息请求
                                                console.warn("发起一次补齐群消息请求,curMaxMsgSeq=%s,minMsgSeq=%s,maxMsgSeq=%s,msgs.length=%s,tempCount=%s",curMaxMsgSeq,groupMsgMap[groupId].min,groupMsgMap[groupId].max,groupMsgMap[groupId].msgs.length,tempCount);
                                                getLostGroupMsgs(groupId,groupMsgMap[groupId].max,groupMsgMap[groupId].max-curMaxMsgSeq);
                                            }else{
                                                new_group_msgs=addGroupMsgList(groupMsgMap[groupId].msgs,new_group_msgs);
                                            }
                                        }else{//不存在改群的最大消息seq
                                            console.warn("不存在该群的最大消息seq，群id=%s",groupId);
                                            //高并发情况下，长轮询可能存在丢消息，这时需要客户端通过拉取群消息接口补齐下
                                            //1、收到的新群消息seq存在不连续情况，也需要补齐
                                            if(groupMsgMap[groupId].msgs.length<tempCount){
                                                //发起一个拉群群消息请求
                                                console.warn("发起一次补齐群消息请求,minMsgSeq=%s,maxMsgSeq=%s,msgs.length=%s,tempCount=%s",groupMsgMap[groupId].min,groupMsgMap[groupId].max,groupMsgMap[groupId].msgs.length,tempCount);
                                                getLostGroupMsgs(groupId,groupMsgMap[groupId].max,tempCount);
                                                
                                            }else{
                                                new_group_msgs=addGroupMsgList(groupMsgMap[groupId].msgs,new_group_msgs); 
                                            }
                                        }
                                    }
                                    if(new_group_msgs.length ){
                                        MsgStore.updateTimeline();
                                    }
                                    if(callback && new_group_msgs.length) callback(new_group_msgs);
                                
                };
                
                //处理新的群提示消息
                var handlerGroupTips=function(groupTips){
                                    var new_group_msgs=[];
                                    for(var o in groupTips){
                                        var groupTip=groupTips[o];
                                        //添加event字段
                                        groupTip.Event=WEB_IM_LONG_POLLINNG_MSG_TYPE.GROUP_TIP;
                                        //更新群消息通知seq
                                        if(groupTip.NoticeSeq>noticeSeq){
                                            noticeSeq=groupTip.NoticeSeq;
                                        }
                                        var msg=handlerGroupMsg(groupTip.ToGroupId,groupTip);
                                        if(msg){
                                            new_group_msgs.push(msg);
                                        }
                                    }
                                    if(new_group_msgs.length ){
                                        MsgStore.updateTimeline();
                                    }
                                    if(callback && new_group_msgs.length) callback(new_group_msgs);
                };
                
                //处理新的群系统消息
                var handlerGroupSystemMsgs=function(groupSystemMsgs){
                                    for(var k in groupSystemMsgs){
                                        var groupTip=groupSystemMsgs[k];
                                        var groupReportTypeMsg=groupTip.MsgBody;
                                        var reportType=groupReportTypeMsg.ReportType;
                                        //更新群消息通知seq
                                        if(groupTip.NoticeSeq>noticeSeq){
                                            noticeSeq=groupTip.NoticeSeq;
                                        }
                                        var toAccount=groupTip.GroupInfo.To_Account;
                                        //过滤本不应该给自己的系统消息
                                        if(!toAccount || toAccount!=ctx.identifier){
                                            console.error("收到本不应该给自己的系统消息: To_Account=%s",toAccount);
                                            continue;
                                        }
                                        var key=groupTip.ToGroupId+"_"+reportType+"_"+groupTip.MsgTimeStamp+"_"+groupReportTypeMsg.Operator_Account;
                                        var isExist=groupSystemMsgsCache[key];
                                        if(isExist){
                                            console.warn("收到重复的群系统消息：key="+key);
                                            continue;
                                        }
                                        groupSystemMsgsCache[key]=true;
                                        var notify={
                                                    "ReportType":reportType,
                                                    "GroupId":groupTip.ToGroupId,
                                                    "GroupName":groupTip.GroupInfo.GroupName,
                                                    "Operator_Account":groupReportTypeMsg.Operator_Account,
                                                    "MsgTime":groupTip.MsgTimeStamp
                                        };
                                        switch(reportType){
                                            case WEB_IM_GROUP_SYSTEM_TYPE.JOIN_GROUP_REQUEST://申请加群(只有管理员会接收到)
                                                notify["RemarkInfo"]=groupReportTypeMsg.RemarkInfo;
                                                notify["MsgKey"]=groupReportTypeMsg.MsgKey;
                                                notify["Authentication"]=groupReportTypeMsg.Authentication;
                                                notify["UserDefinedField"]=groupTip.UserDefinedField;
                                                notify["From_Account"]=groupTip.From_Account;
                                                notify["MsgSeq"]=groupTip.ClientSeq;
                                                notify["MsgRandom"]=groupTip.MsgRandom;
                                                break;
                                            case WEB_IM_GROUP_SYSTEM_TYPE.JOIN_GROUP_ACCEPT://申请加群被同意(只有申请人自己接收到)
                                            case WEB_IM_GROUP_SYSTEM_TYPE.JOIN_GROUP_REFUSE://申请加群被拒绝(只有申请人自己接收到)
                                                notify["RemarkInfo"]=groupReportTypeMsg.RemarkInfo;
                                                break;
                                            case WEB_IM_GROUP_SYSTEM_TYPE.KICK://被管理员踢出群(只有被踢者接收到)
                                            case WEB_IM_GROUP_SYSTEM_TYPE.DESTORY://群被解散(全员接收)
                                            case WEB_IM_GROUP_SYSTEM_TYPE.CREATE://创建群(创建者接收, 不展示)
                                            case WEB_IM_GROUP_SYSTEM_TYPE.INVITED_JOIN_GROUP_REQUEST://邀请加群(被邀请者接收)
                                            case WEB_IM_GROUP_SYSTEM_TYPE.QUIT://主动退群(主动退出者接收, 不展示)
                                            case WEB_IM_GROUP_SYSTEM_TYPE.SET_ADMIN://群设置管理员(被设置者接收)
                                            case WEB_IM_GROUP_SYSTEM_TYPE.CANCEL_ADMIN://取消管理员(被取消者接收)
                                            case WEB_IM_GROUP_SYSTEM_TYPE.REVOKE://群已被回收(全员接收, 不展示)
                                                break;
                                            case WEB_IM_GROUP_SYSTEM_TYPE.CUSTOM://用户自定义通知(默认全员接收)
                                                notify["UserDefinedField"]=groupReportTypeMsg.UserDefinedField;
                                                break;
                                            default:
                                                console.warn("未知群系统消息类型：reportType="+reportType);
                                                break;
                                        }
                                        //回调
                                        if(groupSystemNotifyCallbacks[reportType]) groupSystemNotifyCallbacks[reportType](notify);
                                    }//loop 
                };
                
                //长轮询
                var longPolling=function(cbOk,cbErr){
                    var opts={
                        'Timeout':90,
                        'Cookie':{
                            'NotifySeq':notifySeq,
                            'NoticeSeq':noticeSeq
                        }
                    };
                    proto_longPolling(opts,function(resp) {
                        for(var i in resp.EventArray){
                            var e=resp.EventArray[i];
                            switch(e.Event){
                                case WEB_IM_LONG_POLLINNG_MSG_TYPE.C2C://c2c消息通知
                                    //更新C2C消息通知seq
                                    notifySeq=e.NotifySeq;
                                    console.warn("longpolling: return new c2c msg");
                                     //获取新消息
                                     MsgManager.syncMsgs();
                                    break;
                                case WEB_IM_LONG_POLLINNG_MSG_TYPE.GROUP_ORDINARY://普通群消息通知
                                    console.warn("longpolling: return new group msgs");
                                    //handlerOrdinaryGroupMsg(e.GroupMsgArray);
                                    handlerOrdinaryAndTipGroupMsgs(e.Event,e.GroupMsgArray);
                                    break;
                                case WEB_IM_LONG_POLLINNG_MSG_TYPE.GROUP_TIP://（全员广播）群提示消息
                                    console.warn("longpolling: return new group tips");
                                    //handlerGroupTips(e.GroupTips);
                                    handlerOrdinaryAndTipGroupMsgs(e.Event,e.GroupTips);
                                    break;
                                case WEB_IM_LONG_POLLINNG_MSG_TYPE.GROUP_SYSTEM://（多终端同步）群系统消息
                                    console.warn("longpolling: new group system msgs");
                                    handlerGroupSystemMsgs(e.GroupTips);
                                    break;
                                default:
                                    console.error("longpolling收到未知新消息类型: Event=%s",e.Event);
                                    break;
                            }
                        }   
                        //重新启动长轮询
                        longPolling();
                        
                    }, function(err) {
                                
                                if(err.ErrorCode==60003){
                                    console.warn('长轮询返回json解析错误: %o',err);
                                    //记录长轮询返回解析json错误次数
                                    curLongPollingRetErrorCount++;
                                }
                                //curLongPollingRetErrorCount++;
                                //累计超过一定次数，不再发起长轮询请求
                                if(curLongPollingRetErrorCount<WEB_IM_LONG_POLLING_MAX_RET_ERROR_COUNT){
                                    longPolling();
                                }
				if (cbErr) cbErr(err);
                                
			});
                };
                
                //处理未决的加群申请消息列表
                var handlerApplyJoinGroupSystemMsgs=function(eventArray){
                    for(var i in eventArray){
                            var e=eventArray[i];
                            switch(e.Event){
                                case WEB_IM_LONG_POLLINNG_MSG_TYPE.GROUP_SYSTEM://（多终端同步）群系统消息
                                    console.warn("handlerApplyJoinGroupSystemMsgs： handler new group system msg");
                                    handlerGroupSystemMsgs(e.GroupTips);
                                    break;
                                default:
                                    console.error("syncMsgs收到未知的群系统消息类型: Event=%s",e.Event);
                                    break;
                            }
                    }  
                };
                
                //拉取c2c消息(包含加群未决消息，需要处理)
		this.syncMsgs = function(cbOk, cbErr) {
			var notifyInfo = [];
                        var msgInfos=[];
                        //读取C2C消息
			proto_getMsgs(MsgStore.cookie, MsgStore.syncFlag,function(resp) {
				//拉取完毕
                                if(resp.SyncFlag==2){
                                    MsgStore.syncFlag=0;
                                }
                                //处理c2c消息
				msgInfos = resp.MsgList;//返回的消息列表
                                MsgStore.cookie = resp.Cookie;//cookies，记录当前读到的最新消息位置
                                
				for (var i in msgInfos) {
					var msgInfo = msgInfos[i];
					var isSendMsg, id,headUrl;
					if (msgInfo.From_Account == ctx.identifier) {//当前用户发送的消息
						isSendMsg = true;
						id = msgInfo.To_Account;//读取接收者信息
                                                headUrl='';
					} else {//当前用户收到的消息
						isSendMsg = false;
						id = msgInfo.From_Account;//读取发送者信息
                                                headUrl='';
					}
					
					var sess = MsgStore.sessByTypeId(WEB_IM_MSG_TYPE_C2C, id);
					if (!sess) {	
						sess = new Session(WEB_IM_MSG_TYPE_C2C, id, id, headUrl, 0,0);
					}
					var msg = new Msg(sess, isSendMsg, msgInfo.MsgSeq, msgInfo.MsgRandom,msgInfo.MsgTimeStamp,msgInfo.From_Account);                                       
                                        var msgBody=null;
                                        var msgContent=null;
                                        var msgType=null;
					for (var mi in msgInfo.MsgBody) {
                                                msgBody=msgInfo.MsgBody[mi];
                                                msgType=msgBody.MsgType;
                                                switch(msgType){
                                                    case WEB_IM_MSG_ELEMENT_TYPE_TEXT:
                                                        msgContent=new Msg.Elem.Text(msgBody.MsgContent.Text);
                                                        break;
                                                    case WEB_IM_MSG_ELEMENT_TYPE_FACE:
                                                         msgContent=new Msg.Elem.Face(
                                                                        msgBody.MsgContent.Index,
                                                                        msgBody.MsgContent.Data
                                                                    );
                                                        break;
                                                    case WEB_IM_MSG_ELEMENT_TYPE_IMAGE:
                                                        msgContent=new Msg.Elem.Images(
                                                                        msgBody.MsgContent.UUID
                                                                    );
                                                        for(var j in msgBody.MsgContent.ImageInfoArray){
                                                            var tempImg=msgBody.MsgContent.ImageInfoArray[j];
                                                            msgContent.addImage(
                                                                new Msg.Elem.Images.Image(
                                                                    tempImg.Type,
                                                                    tempImg.Size,
                                                                    tempImg.Width,
                                                                    tempImg.Height,
                                                                    tempImg.URL
                                                                )
                                                            );
                                                        }
                                                        break;
                                                    case WEB_IM_MSG_ELEMENT_TYPE_SOUND:
                                                        //msgType=WEB_IM_MSG_ELEMENT_TYPE_TEXT;
                                                        //msgContent=new Msg.Elem.Text('web端暂不支持语音消息');
                                                        var soundUrl=getSoundDownUrl(msgBody.MsgContent.UUID,msgInfo.From_Account);
                                                        
                                                        if(soundUrl){
                                                            msgContent=new Msg.Elem.Sound(
                                                                        msgBody.MsgContent.UUID,
                                                                        msgBody.MsgContent.Second,
                                                                        msgBody.MsgContent.Size,
                                                                        msgInfo.From_Account,
                                                                        soundUrl
                                                                    );
                                                        }else{
                                                            msgType=WEB_IM_MSG_ELEMENT_TYPE_TEXT;
                                                            msgContent=new Msg.Elem.Text('[语音消息]下载地址解析出错');
                                                        }
                                                        break;
                                                    case WEB_IM_MSG_ELEMENT_TYPE_LOCATION:
                                                        msgType=WEB_IM_MSG_ELEMENT_TYPE_TEXT;
                                                        msgContent=new Msg.Elem.Text('web端暂不支持地理位置消息');
                                                        break;
                                                    case WEB_IM_MSG_ELEMENT_TYPE_FILE:
                                                    case WEB_IM_MSG_ELEMENT_TYPE_FILE+" ":
                                                        //msgType=WEB_IM_MSG_ELEMENT_TYPE_TEXT;
                                                        //msgContent=new Msg.Elem.Text('web端暂不支持文件消息');
                                                        var fileUrl=getFileDownUrl(msgBody.MsgContent.UUID,msgInfo.From_Account,msgBody.MsgContent.FileName);
                                                        
                                                        if(fileUrl){
                                                            msgContent=new Msg.Elem.File(
                                                                        msgBody.MsgContent.UUID,
                                                                        msgBody.MsgContent.FileName,
                                                                        msgBody.MsgContent.FileSize,
                                                                        msgInfo.From_Account,
                                                                        fileUrl
                                                                    );
                                                        }else{
                                                            msgType=WEB_IM_MSG_ELEMENT_TYPE_TEXT;
                                                            msgContent=new Msg.Elem.Text('[文件消息下载地址解析出错]');
                                                        }
                                                        break;
                                                    case WEB_IM_MSG_ELEMENT_TYPE_CUSTOM:
                                                        msgType=WEB_IM_MSG_ELEMENT_TYPE_CUSTOM;
                                                        msgContent=new Msg.Elem.Custom(
                                                                        msgBody.MsgContent.Data,
                                                                        msgBody.MsgContent.Desc,
                                                                        msgBody.MsgContent.Ext
                                                                    );
                                                        //msgContent=new Msg.Elem.Text('web端暂不支持自定义消息');
                                                        break;
                                                    default :
                                                        msgType=WEB_IM_MSG_ELEMENT_TYPE_TEXT;
                                                        msgContent=new Msg.Elem.Text('web端暂不支持'+msgBody.MsgType+'消息');
                                                        break;
                                                }
						msg.elems.push(new Msg.Elem(msgType, msgContent));
					}
					if (MsgStore.addMsg(msg)) {
						notifyInfo.push({msg: msg});
					}
				} // for loop
                                
                                //处理加群未决申请消息
                                handlerApplyJoinGroupSystemMsgs(resp.EventArray);
                                
				if (notifyInfo.length > 0)
					MsgStore.updateTimeline();
				if (cbOk) cbOk(notifyInfo);
				else if (notifyInfo.length > 0) {
					if(callback) callback(notifyInfo);
				}
				
			}, function(err) {
				console.error("getMsgs failed:" + err.ErrorInfo);
				if (cbErr) cbErr(err);
			});
		};
                //拉群消息
		this.syncGroupMsgs = function(options,cbOk, cbErr) {
                        if(options.ReqMsgSeq<=0){
                            return;
                        }
                        var opts={
                          'GroupId':  options.GroupId,
                          'ReqMsgSeq':  options.ReqMsgSeq,
                          'ReqMsgNumber':  options.ReqMsgNumber
                        };
                        //读群漫游消息
			proto_getGroupMsgs(opts,function(resp) {
				var notifyInfo = [];
				
				var group_id = resp.GroupId;//返回的群id
				var msgInfos = resp.RspMsgList;//返回的消息列表 
				
                                if(msgInfos==null || msgInfos==undefined){
                                    return;
                                }
				for (var i=msgInfos.length-1;i>=0;i--) {
					var msgInfo = msgInfos[i];
                                        
                                        //如果是已经删除的消息或者发送者帐号为空或者消息内容为空
                                        //IsPlaceMsg=1
                                        if(msgInfo.IsPlaceMsg || !msgInfo.From_Account || !msgInfo.MsgBody){
                                            continue;
                                        }
					var msg=handlerGroupMsg(group_id,msgInfo);
                                        if(msg){
                                            notifyInfo.push({msg: msg});
                                        }
				} // for loop
				if (notifyInfo.length > 0)
					MsgStore.updateTimeline();
				if (cbOk) cbOk(notifyInfo);
				else if (notifyInfo.length > 0) {
					if(callback) callback(notifyInfo);
				}
				
			}, function(err) {
				console.error("getGroupMsgs failed:" + err.ErrorInfo);
				if (cbErr) cbErr(err);
			});
		};
                
                //处理群消息(普通消息+提示消息)
                var handlerGroupMsg=function (group_id,msgInfo){
                    var isSendMsg, id,headUrl;
					if (msgInfo.From_Account == ctx.identifier) {//当前用户发送的消息
						isSendMsg = true;
						id = msgInfo.From_Account;//读取接收者信息
                                                headUrl='';
					} else {//当前用户收到的消息
						isSendMsg = false;
						id = msgInfo.From_Account;//读取发送者信息
                                                headUrl='';
					}
					var sess = MsgStore.sessByTypeId(WEB_IM_MSG_TYPE_GROUP, group_id);
					if (!sess) {
						sess = new Session(WEB_IM_MSG_TYPE_GROUP, group_id, group_id, headUrl, 0,0);
					}
                                        var type=0;//消息类型
                                        //群提示消息,重新封装下
                                        if(4==msgInfo.Event){
                                            type=1;
                                            var groupTip=msgInfo.MsgBody;
                                            msgInfo.MsgBody=[];
                                            msgInfo.MsgBody.push({
                                                    "MsgType":WEB_IM_MSG_ELEMENT_TYPE_GROUP_TIP,
                                                    "MsgContent":groupTip
                                                }
                                            );
                                        }
					var msg = new Msg(sess, isSendMsg, msgInfo.MsgSeq, msgInfo.MsgSeq,msgInfo.MsgTimeStamp,msgInfo.From_Account,type);                                       
                                        var msgBody=null;
                                        var msgContent=null;
                                        var msgType=null;
					for (var mi in msgInfo.MsgBody) {
                                                msgBody=msgInfo.MsgBody[mi];
                                                msgType=msgBody.MsgType;
                                                switch(msgType){
                                                    case WEB_IM_MSG_ELEMENT_TYPE_TEXT:
                                                        msgContent=new Msg.Elem.Text(msgBody.MsgContent.Text);
                                                        break;
                                                    case WEB_IM_MSG_ELEMENT_TYPE_FACE:                                                       
                                                         msgContent=new Msg.Elem.Face(
                                                                        msgBody.MsgContent.Index,
                                                                        msgBody.MsgContent.Data
                                                                    );
                                                        break;
                                                    case WEB_IM_MSG_ELEMENT_TYPE_IMAGE:
                                                        msgContent=new Msg.Elem.Images(
                                                                        msgBody.MsgContent.UUID
                                                        );
                                                        for(var j in msgBody.MsgContent.ImageInfoArray){
                                                            msgContent.addImage(
                                                                new Msg.Elem.Images.Image(
                                                                    msgBody.MsgContent.ImageInfoArray[j].Type,
                                                                    msgBody.MsgContent.ImageInfoArray[j].Size,
                                                                    msgBody.MsgContent.ImageInfoArray[j].Width,
                                                                    msgBody.MsgContent.ImageInfoArray[j].Height,
                                                                    msgBody.MsgContent.ImageInfoArray[j].URL
                                                                )
                                                            );
                                                        }
                                                        break;
                                                    case WEB_IM_MSG_ELEMENT_TYPE_SOUND:
                                                        //msgType=WEB_IM_MSG_ELEMENT_TYPE_TEXT;
                                                        //msgContent=new Msg.Elem.Text('web端暂不支持语音消息');
                                                        var soundUrl=getSoundDownUrl(msgBody.MsgContent.UUID,msgInfo.From_Account);
                                                        if(soundUrl){
                                                            msgContent=new Msg.Elem.Sound(
                                                                        msgBody.MsgContent.UUID,
                                                                        msgBody.MsgContent.Second,
                                                                        msgBody.MsgContent.Size,
                                                                        msgInfo.From_Account,
                                                                        soundUrl
                                                                    );
                                                        }else{
                                                            msgType=WEB_IM_MSG_ELEMENT_TYPE_TEXT;
                                                            msgContent=new Msg.Elem.Text('[语音消息]下载地址解析出错');
                                                        }
                                                        break;
                                                    case WEB_IM_MSG_ELEMENT_TYPE_LOCATION:
                                                        msgType=WEB_IM_MSG_ELEMENT_TYPE_TEXT;
                                                        msgContent=new Msg.Elem.Text('web端暂不支持地理位置消息');
                                                        break;
                                                    case WEB_IM_MSG_ELEMENT_TYPE_FILE:
                                                    case WEB_IM_MSG_ELEMENT_TYPE_FILE+" ":
                                                        
                                                        var fileUrl=getFileDownUrl(msgBody.MsgContent.UUID,msgInfo.From_Account,msgBody.MsgContent.FileName);
                                                        
                                                        if(fileUrl){
                                                            msgContent=new Msg.Elem.File(
                                                                        msgBody.MsgContent.UUID,
                                                                        msgBody.MsgContent.FileName,
                                                                        msgBody.MsgContent.FileSize,
                                                                        msgInfo.From_Account,
                                                                        fileUrl
                                                                    );
                                                        }else{
                                                            msgType=WEB_IM_MSG_ELEMENT_TYPE_TEXT;
                                                            msgContent=new Msg.Elem.Text('[文件消息]地址解析出错');
                                                        }
                                                        break;
                                                    case WEB_IM_MSG_ELEMENT_TYPE_GROUP_TIP:
                                                        var opType=msgBody.MsgContent.OpType;
                                                        msgContent=new Msg.Elem.GroupTip(
                                                                        opType,
                                                                        msgBody.MsgContent.Operator_Account,
                                                                        group_id,
                                                                        msgInfo.GroupInfo.GroupName,
                                                                        msgBody.MsgContent.List_Account
                                                                    );
                                                        if(WEB_IM_GROUP_TIP_TYPE.MODIFY_GROUP_INFO==opType){//群资料变更
                                                            var tempIsCallbackFlag=false;
                                                            var tempNewGroupInfo={
                                                                "GroupId":group_id,
                                                                "GroupFaceUrl":null,
                                                                "GroupName":null,
                                                                "OwnerAccount":null,
                                                                "GroupNotification":null,
                                                                "GroupIntroduction":null
                                                            };
                                                            var msgGroupNewInfo=msgBody.MsgContent.MsgGroupNewInfo;
                                                            if(msgGroupNewInfo.GroupFaceUrl){
                                                                var tmpNGIFaceUrl=new Msg.Elem.GroupTip.GroupInfo(
                                                                                    WEB_IM_GROUP_TIP_MODIFY_GROUP_INFO_TYPE.FACE_URL,
                                                                                    msgGroupNewInfo.GroupFaceUrl
                                                                                );
                                                                msgContent.addGroupInfo(tmpNGIFaceUrl);
                                                                tempIsCallbackFlag=true;
                                                                tempNewGroupInfo.GroupFaceUrl=msgGroupNewInfo.GroupFaceUrl;
                                                            }
                                                            if(msgGroupNewInfo.GroupName){
                                                                var tmpNGIName=new Msg.Elem.GroupTip.GroupInfo(
                                                                                    WEB_IM_GROUP_TIP_MODIFY_GROUP_INFO_TYPE.NAME,
                                                                                    msgGroupNewInfo.GroupName
                                                                                );
                                                                msgContent.addGroupInfo(tmpNGIName);
                                                                tempIsCallbackFlag=true;
                                                                tempNewGroupInfo.GroupName=msgGroupNewInfo.GroupName;
                                                            }
                                                            if(msgGroupNewInfo.Owner_Account){
                                                                var tmpNGIOwner=new Msg.Elem.GroupTip.GroupInfo(
                                                                                    WEB_IM_GROUP_TIP_MODIFY_GROUP_INFO_TYPE.OWNER,
                                                                                    msgGroupNewInfo.Owner_Account
                                                                                );
                                                                msgContent.addGroupInfo(tmpNGIOwner);
                                                                tempIsCallbackFlag=true;
                                                                tempNewGroupInfo.OwnerAccount=msgGroupNewInfo.Owner_Account;
                                                            }
                                                            if(msgGroupNewInfo.GroupNotification){
                                                                var tmpNGINotification=new Msg.Elem.GroupTip.GroupInfo(
                                                                                    WEB_IM_GROUP_TIP_MODIFY_GROUP_INFO_TYPE.NOTIFICATION,
                                                                                    msgGroupNewInfo.GroupNotification
                                                                                );
                                                                msgContent.addGroupInfo(tmpNGINotification);
                                                                tempIsCallbackFlag=true;
                                                                tempNewGroupInfo.GroupNotification=msgGroupNewInfo.GroupNotification;
                                                            }
                                                            if(msgGroupNewInfo.GroupIntroduction){
                                                                var tmpNGIIntroduction=new Msg.Elem.GroupTip.GroupInfo(
                                                                                    WEB_IM_GROUP_TIP_MODIFY_GROUP_INFO_TYPE.INTRODUCTION,
                                                                                    msgGroupNewInfo.GroupIntroduction
                                                                                );
                                                                msgContent.addGroupInfo(tmpNGIIntroduction);
                                                                tempIsCallbackFlag=true;
                                                                tempNewGroupInfo.GroupIntroduction=msgGroupNewInfo.GroupIntroduction;
                                                            }
                                                            
                                                            //回调群资料变化通知方法
                                                            if(tempIsCallbackFlag && onGroupInfoChangeCallback){
                                                                onGroupInfoChangeCallback(tempNewGroupInfo);
                                                            }
                                                            
                                                        }else if(WEB_IM_GROUP_TIP_TYPE.MODIFY_MEMBER_INFO==opType){//群成员变更
                                                            var memberInfos=msgBody.MsgContent.MsgMemberInfo;
                                                            for(var n in memberInfos){
                                                                var memberInfo=memberInfos[n];
                                                                msgContent.addMemberInfo(
                                                                        new Msg.Elem.GroupTip.MemberInfo(
                                                                            memberInfo.User_Account,memberInfo.ShutupTime
                                                                        )
                                                                );
                                                            }
                                                        }
                                                        //console.warn("群提示消息：%o",msgContent);
                                                        break;
                                                    case WEB_IM_MSG_ELEMENT_TYPE_CUSTOM:
                                                        msgType=WEB_IM_MSG_ELEMENT_TYPE_CUSTOM;
                                                        msgContent=new Msg.Elem.Custom(
                                                                        msgBody.MsgContent.Data,
                                                                        msgBody.MsgContent.Desc,
                                                                        msgBody.MsgContent.Ext
                                                                    );
                                                        //msgContent=new Msg.Elem.Text('web端暂不支持自定义消息');
                                                        break;
                                                    default :
                                                        msgType=WEB_IM_MSG_ELEMENT_TYPE_TEXT;
                                                        msgContent=new Msg.Elem.Text('web端暂不支持'+msgBody.MsgType+'消息');
                                                        break;
                                                }
						msg.elems.push(new Msg.Elem(msgType, msgContent));
					}
					if (MsgStore.addMsg(msg)) {
                                                //更新我的群最大的消息seq
                                                var tempCurMaxSeq=myGroupMaxSeqs[group_id];
                                                if(tempCurMaxSeq){
                                                    if(msgInfo.MsgSeq>tempCurMaxSeq){
                                                        myGroupMaxSeqs[group_id]=msgInfo.MsgSeq;
                                                    }
                                                }else{
                                                    myGroupMaxSeqs[group_id]=msgInfo.MsgSeq;
                                                }
                                                return msg;
					}else{
                                            return null;
                                        }
                };
                
                //初始化
		this.init = function(onMsgNotify,onGroupInfoChangeNotify,groupSystemNotifys, loginInfo) {
			callback = onMsgNotify;
                        onGroupInfoChangeCallback=onGroupInfoChangeNotify;
                        groupSystemNotifyCallbacks=groupSystemNotifys;
                        //初始化浏览器类型
                        browserInfo=tool.getBrowserInfo();
                        console.info('browserInfo: type='+browserInfo.type+', ver='+browserInfo.ver);
                        if(browserInfo.type=='ie' && parseInt(browserInfo.ver)<8){
                            alert('您的ie版本过低，建议使用ie8以上浏览器^_^');
                           return;
                        }
                        initMyGroupMaxSeqs(null, null, loginInfo);
                        initIpAndAuthkey();
                        longPolling();
                        //setInterval(longPolling, 10000);
		};

                //发消息（私聊或群聊）
		this.sendMsg = function(msg, cbOk, cbErr) {
			proto_sendMsg(msg, function(resp) {
                                //私聊时，加入自己的发的消息，群聊时，由于seq和服务器的seq不一样，所以不作处理
                                if(msg.sess.type()==WEB_IM_MSG_TYPE_C2C){
                                    if (!MsgStore.addMsg(msg)) {                                   
					var errInfo = "sendMsg: local addMsg failed!";
                                        var error=tool.getReturnError(errInfo);
					console.error(errInfo);
					if (cbErr) cbErr(error);
					return;
                                    }
                                    //更新信息流时间
                                    MsgStore.updateTimeline();
                                }
				if (cbOk) cbOk(resp);
			}, function(err) {
				if (cbErr) cbErr(err);
			});
		};
                
                //获取语音下载url
                var getSoundDownUrl=function(uuid,senderId){
                    var soundUrl=null;
                    if(authkey && ipList[0]){
                        soundUrl="http://"+ipList[0]+"/asn.com/stddownload_common_file?authkey="+authkey+"&bid="+WEB_IM_DOWNLOAD_FILE_BUSSINESS_ID+"&subbid="+ctx.appIDAt3rd+"&fileid="+uuid+"&filetype="+WEB_IM_DOWNLOAD_FILE_TYPE.SOUND+"&openid="+senderId+"&ver=0";
                    }else{
                        console.error("拼接语音下载url不报错：ip或者authkey为空");
                    }
                    return soundUrl;
                };
                
                //获取文件下载地址
                var getFileDownUrl=function(uuid,senderId,fileName){
                    var fileUrl=null;
                    if(authkey && ipList[0]){
                        fileUrl="http://"+ipList[0]+"/asn.com/stddownload_common_file?authkey="+authkey+"&bid="+WEB_IM_DOWNLOAD_FILE_BUSSINESS_ID+"&subbid="+ctx.appIDAt3rd+"&fileid="+uuid+"&filetype="+WEB_IM_DOWNLOAD_FILE_TYPE.FILE+"&openid="+senderId+"&ver=0&filename="+encodeURIComponent(fileName);
                    }else{
                        console.error("拼接文件下载url不报错：ip或者authkey为空");
                    }
                    return fileUrl;
                };
	};
        
        //上传文件
        var FileUploder=new function() {
                this.fileMd5=null;
                //获取文件MD5
                var getFileMD5=function(file,cbOk,cbErr){
                    
                    //FileReader pc浏览器兼容性
                    //Feature	Firefox (Gecko)	Chrome	Internet Explorer	Opera	Safari
                    //Basic support	3.6	7	10                      12.02	6.0.2
                    var fileReader=null;
                    try{
                        fileReader = new FileReader();//分块读取文件对象
                    }catch(e){
                        if(cbErr){
                            cbErr(tool.getReturnError('当前浏览器不支持FileReader'));
                            return;
                        }
                    }
                    //file的slice方法，注意它的兼容性，在不同浏览器的写法不同
                    var blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice;
                    if(!blobSlice){
                        if(cbErr){
                            cbErr(tool.getReturnError('当前浏览器不支持FileAPI'));
                            return;
                        }
                    }
                    
                    var chunkSize = 2 * 1024 * 1024;//分块大小，2M
                    var chunks = Math.ceil(file.size / chunkSize);//总块数
                    var currentChunk = 0;//当前块数
                    var spark = new SparkMD5();//获取MD5对象
                    
                    fileReader.onload = function (e) {//数据加载完毕事件
                        
                        var binaryStr = "";
                        var bytes = new Uint8Array(e.target.result);
                        var length = bytes.byteLength;
                        for (var i = 0; i < length; i++) 
                        {
                            binaryStr += String.fromCharCode(bytes[i]);//二进制转换字符串
                        }
                        spark.appendBinary(binaryStr);
                        currentChunk++;
                        if (currentChunk < chunks) {
                            loadNext();//读取下一块数据
                        } else {
                            this.fileMd5 = spark.end();//得到文件MD5值
                            if(cbOk){
                                cbOk(this.fileMd5);
                            }
                        }
                    };
                    //分片读取文件
                    function loadNext() {
                        var start = currentChunk * chunkSize, end = start + chunkSize >= file.size ? file.size : start + chunkSize;
                        //根据开始和结束位置，切割文件
                        var b=blobSlice.call(file, start, end);
                        //readAsBinaryString ie浏览器不兼容此方法
                        //fileReader.readAsBinaryString(blobSlice.call(file, start, end));
                        fileReader.readAsArrayBuffer(b);//ie，chrome，firefox等主流浏览器兼容此方法
                        
                    }
                    loadNext();//开始读取
                }; 
                //上传图片
                this.uploadFile=function(options,cbOk, cbErr){
                    
                    var file_upload = {
                        //初始化
                        init: function (options,cbOk, cbErr) {
                            var me = this;
                            me.file = options.file;
                            //分片上传进度回调事件
                            me.onProgressCallBack=options.onProgressCallBack;
                            //停止上传图片按钮
                            if(options.abortButton){
                                options.abortButton.onclick = me.abortHandler;
                            }
                            me.total =me.file.size;//图片总大小
                            me.loaded = 0;//已读取字节数
                            me.step = 120 * 1024;//分块大小，120K
                            me.sliceSize = 0;//分片大小
                            me.sliceOffset = 0;//当前分片位置
                            me.timestamp = unixtime();//当前时间戳
                            me.seq=nextSeq(options.From_Account);//请求seq
                            me.random=createRandom();//请求随机数
                            me.fromAccount=options.From_Account;//发送者
                            me.toAccount=options.To_Account;//接收者
                            me.fileMd5=options.fileMd5;//文件MD5
                            me.businessType=options.businessType;//图片业务类型，群消息:1; c2c消息:2; 个人头像：3; 群头像：4;
                            
                            me.cbOk=cbOk;//上传成功回调事件
                            me.cbErr=cbErr;//上传失败回调事件
                            
                            me.reader = new FileReader();//读取文件对象
                            me.blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice;//file的slice方法,不同浏览器不一样

                            me.reader.onloadstart = me.onLoadStart;//开始读取回调事件
                            me.reader.onprogress = me.onProgress;//读取文件进度回调事件
                            me.reader.onabort = me.onAbort;//停止读取回调事件
                            me.reader.onerror = me.onerror;//读取发生错误回调事件
                            me.reader.onload = me.onLoad;//分片加载完毕回调事件
                            me.reader.onloadend = me.onLoadEnd;//读取文件完毕回调事件
                    },
                    //上传方法
                    upload: function () {
                        var me = file_upload;
                        //读取第一块
                        me.readBlob(0);
                    },
                    onLoadStart: function () {
                        var me = file_upload;
                    },
                    onProgress: function (e) {
                        var me = file_upload;
                        me.loaded += e.loaded;
                        if(me.onProgressCallBack){
                            me.onProgressCallBack(me.loaded,me.total);
                        }
                    },
                    onAbort: function () {
                        var me = file_upload;
                    },
                    onError: function () {
                        var me = file_upload;
                    },
                    onLoad: function (e) {
                        var me = file_upload;
                        if (e.target.readyState == FileReader.DONE) {
                            var slice_data_base64 = e.target.result;
                            //注意，一定要去除base64编码头部
                            var pos=slice_data_base64.indexOf(",");
                            if(pos!=-1){
                                slice_data_base64=slice_data_base64.substr(pos+1);
                            }
                            //封装上传图片接口的请求参数
                            var opt = {
                                'From_Account': me.fromAccount,
                                'To_Account': me.toAccount,
                                'Busi_Id': me.businessType,
                                'File_Str_Md5': me.fileMd5,
                                'PkgFlag': 1,
                                'File_Size': me.total,
                                'Slice_Offset': me.sliceOffset,
                                'Slice_Size': me.sliceSize,
                                'Slice_Data': slice_data_base64,
                                'Seq': me.seq,
                                'Timestamp': me.timestamp,
                                'Random': me.random
                            };
                            //分片上传图片接口
                            proto_uploadPic(opt,
                                function (resp) {
                                    if (resp.IsFinish == 0) {
                                        me.loaded=resp.Next_Offset;
                                        if (me.loaded < me.total) {
                                            me.readBlob(me.loaded);
                                        } else {
                                            me.loaded = me.total;
                                        }
                                    } else {
                                        
                                        if(me.cbOk){
                                            var tempResp={
                                                'ActionStatus':resp.ActionStatus,
                                                'ErrorCode':resp.ErrorCode,
                                                'ErrorInfo':resp.ErrorInfo,
                                                'File_UUID':resp.File_UUID,
                                                'URL_INFO':resp.URL_INFO
                                            };
                                            me.cbOk(tempResp); 
                                        }
                                    }
                                },
                                me.cbErr
                            );
                        }
                    },
                    onLoadEnd: function () {
                        var me = file_upload;
                    },
                    //分片读取文件方法
                    readBlob: function (start) {
                        var me = file_upload;
                        var blob, file = me.file;
                        var end = start + me.step;
                        if (end > me.total) {
                            end = me.total;
                            me.sliceSize = end - start;
                        } else {
                            me.sliceSize = me.step;
                        }
                        me.sliceOffset=start;
                        //根据起始和结束位置，分片读取文件
                        blob = me.blobSlice.call(file, start, end);
                        //将分片的二进制数据转换为base64编码
                        me.reader.readAsDataURL(blob);
                    },
                    abortHandler: function () {
                        var me = file_upload;
                        if (me.reader) {
                            me.reader.abort();
                        }
                    }
                };
                
                //读取文件MD5
                getFileMD5(options.file,
                               function(fileMd5){
                                    console.info('fileMd5: '+fileMd5);
                                    options.fileMd5=fileMd5;
                                    //初始化上传参数
                                    file_upload.init(options,cbOk, cbErr);
                                    //开始上传文件
                                    file_upload.upload();
                               },
                               cbErr
                );
            };
        };

	// webim API impl
	webim.init = function(loginInfo, listeners, options) {
		ctx.sdkAppID = loginInfo.sdkAppID;
		ctx.appIDAt3rd = loginInfo.appIDAt3rd;
		ctx.identifier = loginInfo.identifier;
		ctx.accountType = loginInfo.accountType;
		ctx.userSig = loginInfo.userSig;
		if(listeners.jsonpCallback)
                    webimJsonpCallback=listeners.jsonpCallback;
		if (options) opt = options;
		ConnManager.init(listeners.onConnNotify);
		MsgManager.init(listeners.onMsgNotify,listeners.onGroupInfoChangeNotify,listeners.groupSystemNotifys, loginInfo);
	};
        
        //web im 基础对象
        //
        //工具对象
        webim.Tool = tool;
        //表情数据
	webim.EmotionPicData = emotionPicData;
        //表情索引
	webim.EmotionPicDataIndex = emotionPicDataIndex;
        //消息对象
        webim.Msg = Msg;
        //会话对象
	webim.Session = Session;
        //会话存储对象
	webim.MsgStore = {
		sessMap: function() {return MsgStore.sessMap();},
		sessCount: function() {return MsgStore.sessCount();},
		sessByTypeId: function(type, id) {return MsgStore.sessByTypeId(type, id);},
		delSessByTypeId: function(type, id) {return MsgStore.delSessByTypeId(type, id);},
		resetCookieAndSyncFlag: function() {return MsgStore.resetCookieAndSyncFlag();}
	};
        //设置自动标记已读
        webim.setAutoRead = function(selSess,isOn,isResetAll) {return MsgStore.setAutoRead(selSess, isOn, isResetAll);};
        
        //消息管理接口
        //
        //用户下线
        webim.offline = function(cbOk, cbErr) {return proto_offline(cbOk, cbErr);};
        //发消息接口（私聊和群聊）
        webim.sendMsg = function(msg, cbOk, cbErr) {return MsgManager.sendMsg(msg, cbOk, cbErr);};
        //拉取未读c2c消息
	webim.syncMsgs = function(cbOk, cbErr) {return MsgManager.syncMsgs(cbOk, cbErr);};
        //拉取群漫游消息
	webim.syncGroupMsgs = function(options,cbOk, cbErr) {return MsgManager.syncGroupMsgs(options,cbOk, cbErr);};
        
        //上报c2c消息已读
        webim.c2CMsgReaded = function(options,cbOk,cbErr) {return MsgStore.c2CMsgReaded(options,cbOk,cbErr);};
        
        //上报群消息已读
        webim.groupMsgReaded = function(options,cbOk,cbErr) {return proto_groupMsgReaded(options,cbOk,cbErr);};
	
        //群组管理接口
        //
        //创建群
        webim.createGroup = function(options,cbOk, cbErr) {return proto_createGroup(options,cbOk, cbErr);};
        //申请加群
        webim.applyJoinGroup = function(options,cbOk, cbErr) {return proto_applyJoinGroup(options,cbOk, cbErr);};
        //处理加群申请(同意或拒绝)
        webim.handleApplyJoinGroupPendency = function(options,cbOk, cbErr) {return proto_handleApplyJoinGroupPendency(options,cbOk, cbErr);};
        
        //删除加群申请
        webim.deleteApplyJoinGroupPendency= function(options,cbOk,cbErr) {return proto_deleteC2CMsg(options,cbOk,cbErr);};
        
        //主动退群
        webim.quitGroup = function(options,cbOk, cbErr) {return proto_quitGroup(options,cbOk, cbErr);};
        //获取群组公开资料-用于搜索群
        webim.getGroupPublicInfo = function(options,cbOk, cbErr) {return proto_getGroupPublicInfo(options,cbOk, cbErr);};
        //获取群组详细资料-高级接口
        webim.getGroupInfo = function(options,cbOk, cbErr) {return proto_getGroupInfo(options,cbOk, cbErr);};
        //修改群基本资料
        webim.modifyGroupBaseInfo = function(options,cbOk, cbErr) {return proto_modifyGroupBaseInfo(options,cbOk, cbErr);};
        //获取群成员列表
        webim.getGroupMemberInfo = function(options,cbOk, cbErr) {return proto_getGroupMemberInfo(options,cbOk, cbErr);};
        //邀请好友加群
        webim.addGroupMember = function(options,cbOk, cbErr) {return proto_addGroupMember(options,cbOk, cbErr);};
        //修改群成员资料
        webim.modifyGroupMember = function(options,cbOk, cbErr) {return proto_modifyGroupMember(options,cbOk, cbErr);};
        //删除群成员
        webim.deleteGroupMember = function(options,cbOk, cbErr) {return proto_deleteGroupMember(options,cbOk, cbErr);};
        //解散群
        webim.destroyGroup = function(options,cbOk, cbErr) {return proto_destroyGroup(options,cbOk, cbErr);};
        //webim.getJoinedGroupList = function(options,cbOk, cbErr) {return proto_getJoinedGroupList(options,cbOk, cbErr);};
        //获取我的群组列表-高级接口
        webim.getJoinedGroupListHigh = function(options,cbOk, cbErr) {return proto_getJoinedGroupListHigh(options,cbOk, cbErr);};
        //获取群成员角色
        webim.getRoleInGroup = function(options,cbOk, cbErr) {return proto_getRoleInGroup(options,cbOk, cbErr);};
        //设置群成员禁言时间
        webim.forbidSendMsg = function(options,cbOk, cbErr) {return proto_forbidSendMsg(options,cbOk, cbErr);};
        //发送自定义群系统通知
        webim.sendCustomGroupNotify = function(options,cbOk, cbErr) {return proto_sendCustomGroupNotify(options,cbOk, cbErr);};
        
        //资料关系链管理接口
        //
        //获取个人资料接口，可用于搜索用户
        webim.getProfilePortrait = function(options,cbOk, cbErr) {return proto_getProfilePortrait(options,cbOk, cbErr);};
        //设置个人资料
        webim.setProfilePortrait = function(options,cbOk, cbErr) {return proto_setProfilePortrait(options,cbOk, cbErr);};
        //申请加好友
        webim.applyAddFriend = function(options,cbOk, cbErr) {return proto_applyAddFriend(options,cbOk, cbErr);};
        //获取好友申请列表
        webim.getPendency = function(options,cbOk, cbErr) {return proto_getPendency(options,cbOk, cbErr);};
        //删除好友申请
        webim.deletePendency = function(options,cbOk, cbErr) {return proto_deletePendency(options,cbOk, cbErr);};
        //处理好友申请
        webim.responseFriend = function(options,cbOk, cbErr) {return proto_responseFriend(options,cbOk, cbErr);};
        //获取我的好友
        webim.getAllFriend = function(options,cbOk, cbErr) {return proto_getAllFriend(options,cbOk, cbErr);};
        //删除好友
        webim.deleteFriend = function(options,cbOk, cbErr) {return proto_deleteFriend(options,cbOk, cbErr);};
        //拉黑
        webim.addBlackList = function(options,cbOk, cbErr) {return proto_addBlackList(options,cbOk, cbErr);};
        //删除黑名单
        webim.deleteBlackList = function(options,cbOk, cbErr) {return proto_deleteBlackList(options,cbOk, cbErr);};
        //获取我的黑名单
        webim.getBlackList = function(options,cbOk, cbErr) {return proto_getBlackList(options,cbOk, cbErr);};
        
        //图片服务接口
        //
        //上传图片接口
        webim.uploadPic = function(options,cbOk, cbErr) {
            /*if(browserInfo.type=='ie' && parseInt(browserInfo.ver)<=9){
                    alert('sdk暂不支持使用ie9以下浏览器上传图片');
                    return;
            }*/
            return FileUploder.uploadFile(options,cbOk, cbErr);
        };
        
        //设置jsonp返回的值
        webim.setJsonpLastRspData=function(rspData){
            webimJsonpLastRspData=typeof (rspData) == "string" ? JSON.parse(rspData) : rspData;
        };
        
})(webim);