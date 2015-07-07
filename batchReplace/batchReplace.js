/**
 * Created by zyg on 15/7/6.
 */
var fs =require('fs');

var rootPath = '/Users/zyg/Documents/taovip_projects/meidian-static/app/scripts';

function isJs(name){
    return name.indexOf('.js') !== -1;
}
function isDir(name){
    return name.indexOf('.') === -1;
}

function replaceAlert(fullName){
    if(fullName !== '/Users/zyg/Documents/taovip_projects/meidian-static/app/scripts/tao/dev/back_scene_hot.js'){
        return;
    }
    console.log(fullName);

    var content = fs.readFileSync(fullName,{
        encoding:'utf-8'
    });
    var alertStr = 'alert(';
    var alertI = content.indexOf(alertStr),
        alertLen = alertStr.length;

    var allLen = content.length;

    var wantContent = '';

    var beginI = alertI+alertLen;

    var beginChar;

    for(var i=beginI;i<allLen;i++){
        if(i===beginI){
            beginChar = content[i];
        }else{
            if(content[i] === beginChar){
                break;
            }else{
                wantContent += content[i];
            }
        }
    }

    var finalContent = alertStr + beginChar + wantContent + beginChar + ')';
    console.log(finalContent);

    content = content.replace(finalContent,'new $.tv.customAlert({' +
        'alertType:"alert",contentType:"warning", title:"'+wantContent+'",content:"" ' +
        '})');

    fs.writeFileSync(fullName,content,{
        encoding:'utf-8'
    });
}

function eachAllDir(path){
    var list = fs.readdirSync(path);

    for(var i= 0,len=list.length;i<len;i++){
        var index = list[i];
        if(isDir(index)){
            eachAllDir(path+'/'+index);
        }else if(isJs(index)){
            replaceAlert(path+'/'+index);
        }
    }
}
eachAllDir(rootPath);