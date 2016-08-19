import Mocks from './mocks.js'
var Parent_get = window.parent.window;

//2、被调用
let init = (objStr)=> {
    var obj = JSON.parse(objStr);
    switch (obj.userInfo.userType) {
        case "tea":
            isTeacher=true
            break;
        case "stu":
            isTeacher=false
            break;
    }
}
let update = ()=> {
}
let userId='strId'
let data = {
    userInfo: {
        userType: 'tea' / 'stu',
        userId: userId,
        userState: 'in' / 'out'
    },
    classInfo: {
        classType: '1v1' / '1vN',
    }
}
function action(type, objStr) {
    switch (type) {
        case 'init':
            init(objStr);
            break;
        case 'data':
            getData(objStr, actEvent);
            break;
        case 'update':
            update(objStr);
            break;
        case 'resetHref':
            Parent_get.$('#showDomain').attr('src', './src/ppt/' + objStr);
            break;
        default:
            console.error('undefined type for commData_set,type is :' + type);
            break;
    }
};

let sendData = (str)=> {
    try {
        Parent_get.commData_send('data', str);
    } catch (e) {
        Mocks.commData_send('data', str,action);
    }
}
let getData = ()=> {
}

let isTeacher=true;

// update class
function update(objStr) {
    var obj = JSON.parse(objStr);
    if (obj.value.curState == "startClass") {
        localStorage.curState = "startClass";
        if ($('.stu-masklayer').attr("isStu") == "true") {
            $('.stu-masklayer').show();
        }
    }
}
function getData(objStr, actEvent) {
    console.log(objStr);
    var obj = JSON.parse(objStr);
    actEvent(obj);
}
function actEvent(obj) {
    if (!isTeacher) {
        $(obj.ele).eq(obj.index)[obj.event]();
    }
}
function sendData(type, objStr) {
    switch (type) {
        case 'data':
            Parent_get.commData_send('data', objStr);
            break;
        case 'resetHref':
            Parent_get.commData_send('resetHref', objStr);
            Parent_get.$('#showDomain').attr('src', './src/ppt/' + objStr);
    }
}
try {
    Parent_get.commData_send('loaded');
} catch (e) {
    Mocks.commData_send('loaded',{},action);
}
export default isTeacher;