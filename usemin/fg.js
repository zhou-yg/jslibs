var Flex = function(_name){
	var name = _name;
	var flexObj = undefined;
	
	var currentSize = new Array();   
	var toSize = new Array();        //include width & height;
	var perWidth;
	var perHeight;

	var currentPosition	= new Array();
	var toPosition = new Array();
	var origin;                  //伸缩的原点，可分别为 左上角，右上角，中间，左下角，右下角 ，对应 1 2 0 3 4 
	var xCoe;                                                           
	var yCoe;
		
	var flexTimeOut;
	var t = 1;                //计数器
	var rate = 0;
	var rateArr = [10,20,25];  //速率
	var speed =0;
	var speedArr = [35,28,23];
	
	var followAction = undefined;   //当对象完成伸缩变形后，调用的命令句子
	
	var Re = function(){
		return{
			reSet:function(){
				flexObj = undefined;
				ismultiObjects = false;
				currentSize = new Array();   
				toSize = new Array();     
				t = 1;                
				followAction = undefined;
				return "reSet";
			}
		}	
	}();	
	return{
		set : function(cmd){
			followAction = cmd;
		},
		go : function(objId,toSizeArr,o){
			flexObj = Im.getObj(objId);
			toSize = toSizeArr;
			origin = o;
			
			if(origin==0){
				xCoe = 0.5;
				yCoe = 0.5;
			}
			
			speed = speedArr[2];
			rate = rateArr[0];	
			
			this.init();
		},
		init : function(){
			currentSize[0] = Im.getObjStyle(flexObj,"width");			
			currentSize[1] = Im.getObjStyle(flexObj,"height");			
			perWidth = (toSize[0] - currentSize[0])/rate;             //加上一个大于0的perWidth，说明宽度是增加的。加上一个小于0的perWidth，说明宽度减小
			perHeight = (toSize[1]- currentSize[1])/rate;             //同上
			
			currentPosition[0] = Im.getObjStyle(flexObj,"left");
			currentPosition[1] = Im.getObjStyle(flexObj,"top");
			
			if(origin==0){
				toPosition[0] = currentPosition[0] + (currentSize[0] - toSize[0])*xCoe;
				toPosition[1] = currentPosition[1] + (currentSize[1] - toSize[1])*yCoe;
			}
			
			this.flexAction();
		},
		flexAction : function(){
			if(t<=rate){
				currentSize[0] = currentSize[0] + perWidth;
				currentSize[1] = currentSize[1] + perHeight;
				flexObj.style.width = currentSize[0]+"px";
				flexObj.style.height = currentSize[1]+"px";
				
				if(origin==0){
					currentPosition[0] = currentPosition[0] - perWidth*xCoe;          //减perWidth，如果perWidth小于0，说明是缩小，即中心伸缩的原点就增大。反之，同理
					currentPosition[1] = currentPosition[1] - perHeight*yCoe;         //同理
					flexObj.style.left = currentPosition[0]+"px";
					flexObj.style.top = currentPosition[1]+"px";
				}
				
				t++;

				flexTimeOut = setTimeout(name+".flexAction()",speed);
			}else{
				clearTimeout(flexTimeOut);
				
				flexObj.style.width = toSize[0]+"px";
				flexObj.style.height = toSize[1]+"px";				
				
				if(origin==0){
					flexObj.style.left = toPosition[0]+"px";
					flexObj.style.top = toPosition[1]+"px";
				}
								
				if(followAction!=undefined){
					eval(followAction);
				}
				
				Re.reSet();		
			}			
		},
		getArr : function(){
			return {"flexObj":flexObj,"currentSize":currentSize,"toSize":toSize,"per":[perWidth,perHeight],"position":[currentPosition,toPosition]};
		}
	}		
};
var glide = function(){
	
	var glideObjArr = new Array();
	var windowArr = new Array();
	var titleTypesArr = new Array();
	var crutObj ;
	var distance = 830;
	var direction;
	return{
		init:function(_glideArr,_titleTypeArr,_windowArr){
			if(_titleTypeArr.length == _windowArr.length){
				glideObjArr = _glideArr;
				titleTypesArr = _titleTypeArr
				windowArr = _windowArr;
				if(_titleTypeArr.length>=1){
					crutObj = _titleTypeArr[0];
				}
			}
		}
		,
		go:function(_id){
			var priorIndex = titleTypesArr.indexOf(crutObj);
			var laterIndex = titleTypesArr.indexOf(_id);
			if(priorIndex!=laterIndex){
				if(laterIndex>priorIndex){
					direction = 1;
				}else{
					direction = -1;
				}
				for(var i=0;i<windowArr.length;i++){
					glideObjArr[i].go(windowArr[i],distance,direction);
				}
				crutObj = _id;
			}
		}
		,
		reset:function(obj){
			var deviateIndex = titleTypesArr.indexOf(crutObj);
			obj.style.left = "-"+deviateIndex*distance+"px";
		}
		,
		param:function(){
			return [crutObj];
		}
	};
}();
var glidelr = function(_name) {
	var name = _name;
	var glideObj = undefined;
	var glideDistance = 0;
	var glideCrutDistance = 0;
	var glideDirection = -1;
	var glideTimeOut;//setTimeOut on this object;
	var t = 1;
	var initTop = 0;
	var initLeft = 0;

	var rate = 0;
	var rateArr = [16,32,64];
	var speed = 0;
	var speedArr = [35,28,23];
	
	var Re = function(){
		return{
			reSet:function(){
				glideObj = undefined;
				glideDistance = 0;
				glideCrutDistance = 0;
				glideDirection = -1;
				t = 1;
				initTop = 0;
				initLeft = 0;
				
				return "reSet";
			}
		}	
	}();
	return {
		go : function(objId, distance,direction) {
			glideObj = Im.getObj(objId);
			glideDistance = distance;
			glideDirection = direction;
			if(distance<=400){
				speed = speedArr[0];
				rate  = rateArr[0];
			}else if(distance>=800){
				speed = speedArr[1];
				rate = rateArr[1]
			}else{
				speed = speedArr[2];
				rate = rateArr[2];
			}
			this.glideAction();
		},
		glideAction : function() {
			if(t<=rate){
				glideObj.style.left = String(parseInt(Im.getObjStyle(glideObj,"left")) - glideDirection*glideDistance/(2*t))+"px";
				glideTimeOut = setTimeout(name+".glideAction()",speed);
				if(glideCrutDistance<=glideDistance){
					glideCrutDistance += glideDistance/(2*t);
				}
				t=t*2;
			}else{
				clearTimeout(glideTimeOut);
				glideObj.style.left = String(parseInt(Im.getObjStyle(glideObj,"left"))-glideDirection*(glideDistance-glideCrutDistance))+"px";

				glide.reset(glideObj);	

				Re.reSet();			
			}
		}
		,
		getArr:function(){
			return {"gObj":glideObj,"gDirection":glideDistance,"gcDis":glideCrutDistance,"gDistance":glideDirection,"gTimeOut":glideTimeOut,"gT":t};
		}
	};
};
