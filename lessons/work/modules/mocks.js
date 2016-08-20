export default {
    commData_send(state, data = {}, action = ()=> {
    }){
        let isTeacher='tea',isStudent='stu'
        switch (state) {
            case 'loaded':
            {
                var objStr = JSON.stringify({
                    userInfo: {
                        userType: isStudent
                    }
                });
                action('init', objStr)
                break;
            }
            case 'data':
            {
                action('data', data)
                break;
            }
        }
    }
}