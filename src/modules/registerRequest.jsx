const RegisterRequest = (body) => {
    fetch("https://pets.сделай.site/api/register", { method: "POST", body: body })
        .then(response => response = response.status).then(result => {
            console.log(result);
            if (result == 204) {
                document.getElementById("success").style.display = "block";
                document.getElementById("fail").style.display = "none";
            }
            else {
                document.getElementById("fail").style.display = "block";
                document.getElementById("success").style.display = "none";
            }
        }).catch(error => console.log('error', error));
}
export default RegisterRequest;