function encrypt(data){
    return "encrypted data"
}
function send(url,data){
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`)

}
// send('http:ww.fdhslf','sahdf')
module.exports = {
    // send:send,
    send,
    // both are same so we can also use "send,"
}