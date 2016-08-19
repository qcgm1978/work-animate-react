export default {
    commData_send(state, data = {}, action = ()=> {
    }){
        switch (state) {
            case 'loaded':
            {
                var objStr = JSON.stringify({
                    userInfo: {
                        userType: 'tea'
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