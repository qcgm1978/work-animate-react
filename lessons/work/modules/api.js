import Mocks from './mocks.js'
var Parent_get = window.parent.window;
try {
    Parent_get.commData_send('loaded');
} catch (e) {
    Mocks.commData_send('loaded');
}
//2、被调用
let init = (type, obj)=> {
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
init()
update()
let sendData = (str)=> {
    try {
        Parent_get.commData_send('data', str);
    } catch (e) {
        Mocks.commData_send('data', str);
    }
}
let getData = ()=> {
}
init(data, sendData())
init(data, getData)

let isTeacher=true;

export default isTeacher