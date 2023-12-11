const GetProfileRequest = (profile, setProfile) => {
    fetch("https://pets.сделай.site/api/users", { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setProfile(result);
        })
        .catch(error => console.log('error', error));
}

const RegisterRequest = (body, callback = () => {}) => {
    fetch("https://pets.сделай.site/api/register", { method: "POST", body: body })
        .then(response => response = response.status).then(result => {
            console.log(result);
            localStorage.setItem('token', null)
            callback(result)
        }).catch(error => console.log('error', error));
}
export {GetProfileRequest, RegisterRequest};