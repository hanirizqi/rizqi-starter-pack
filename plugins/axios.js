export default ({ app, $axios, store, redirect, $cookies }) => {
    const token = app.$cookies.get('access_token')
    if(token){
        $axios.onRequest(config => {
            config.headers = {
                'Authorization': 'Bearer '+ token,
            }
        });
    }
    $axios.onError((error) => {
        if (error.response.status === 500 || error.response.status === 400 || error.response.status === 404) {
            redirect('/error')
        }
        return false
    })
}