const CheckToken = () => {
    const token = localStorage.getItem("token");
    return token && token != 'null'
}
export default CheckToken