import Keycloak from 'keycloak-js'
// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
// const keycloakConfig = {
//     "realm": "istio",
//     "auth-server-url": "http://35.242.190.130:8080/auth/",
//     "ssl-required": "external",
//     "resource": "istio",
//     "public-client": true,
//     "verify-token-audience": true,
//     "use-resource-role-mappings": true,
//     "confidential-port": 0
// }


const keycloak = new Keycloak("/keycloak.json")

export default keycloak