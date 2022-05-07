// const session = require('express-session')
// const KeycloakConnect = require('keycloak-connect')

// let _keycloak

// var keycloakConfig = {    
//     "realm": "cristolandia-api",
//     "auth-server-url": "http://localhost:8080/",
//     "ssl-required": "external",
//     "resource": "cristolandia-rest",
//     "public-client": true,
//     "confidential-port": 0 
// };

// function initKeycloak() {
//     if(_keycloak) {
//         console.warn("Trying to init Keycloak again!");
//         return _keycloak;
//     }
//     else {
//         console.log("Initializing Keycloak");
//         var memoryStore = new session.MemoryStore();
//         _keycloak = new KeycloakConnect({ store: memoryStore }, keycloakConfig);
//         return _keycloak;
//     }
// }

// function getKeycloak() {
//     if(!_keycloak) {
//         console.error("Keycloak has not been initialized. Please called init first");
//     }
//     return _keycloak;
// }

// module.exports = {
//     initKeycloak,
//     getKeycloak
// };
