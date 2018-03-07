function validateRequest(object) {
    let validRequests = ['GET', 'POST', 'DELETE', 'CONNECT']
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    let msgRegex = ['<', '>', '\\', '&', '\'', '\"']
    let uriRegex = /(^[.\w]+$)|(\*)/g

    if (!object.hasOwnProperty('method') || !validRequests.includes(object.method))
        throw new Error('Invalid request header: Invalid Method')
    if (!object.hasOwnProperty('uri') || !uriRegex.test(object.uri))
        throw new Error('Invalid request header: Invalid URI')
    if (!object.hasOwnProperty('version') || !validVersions.includes(object.version))
        throw new Error('Invalid request header: Invalid Version')
    for (let element of msgRegex) {
        if (!object.hasOwnProperty('message') || object.message.includes(element))
            throw new Error('Invalid request header: Invalid Message')
    }

    return object
}

let obj = {
    method: 'GET',
    uri: 'gib ',
    version: 'HTTP/0.8',
    message: ''
};

console.log(validateRequest(obj));