export const fetchCustomer = (email) => {
    return dispatch => {
        fetch('http://localhost:3001/api/v1/sessions', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
            })
        })
        .then(resp => resp.json())
        .then(json => dispatch({type: 'LOG_IN', customer: json.data}))
        .catch(e => window.alert(e.messages))
    }
}