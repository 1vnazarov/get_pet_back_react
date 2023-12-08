const GetProfileRequest = (profile, setProfile) => {
    fetch("https://pets.сделай.site/api/users", { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setProfile(result);
        })
        .catch(error => console.log('error', error));
}
export default GetProfileRequest;