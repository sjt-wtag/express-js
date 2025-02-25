## CORS
Cross-Origin Resource Sharing (CORS) is a mechanism used to overcome the limitations imposed by the Same Origin Policy. CORS allows a web browser to relax the restrictions and grant access to its resources for requests coming from a different origin. It is an HTTP header-based mechanism.


When a web browser makes a request to a different origin (domain, protocol, or port), the browser initiates a CORS process to determine if the requested resource should be accessible. The server, in response, includes the "Access-Control-Allow-Origin" header in its HTTP response. This header specifies the allowed origins that are permitted to access the requested resource.

For example, if a website at "example.com" wants to make a request to an API at "api.example.org," the API server needs to include the following header in its response:

Access-Control-Allow-Origin: https://example.com

With this header, the API server explicitly grants permission for the website at "example.com" to access its resources. If the requesting origin is not listed in the "Access-Control-Allow-Origin" header or the header is missing, the browser enforces the Same Origin Policy and denies access to the requested resource.

CORS also includes additional headers, such as "Access-Control-Allow-Methods" and "Access-Control-Allow-Headers," to specify the allowed HTTP methods and headers for the cross-origin request.



Same Origin Policy and CORS are essential concepts for ensuring web security and browser safety. While the Same Origin Policy restricts access between different origins, CORS provides a controlled mechanism for relaxing those restrictions when needed. By properly configuring CORS headers on the server-side, web developers can allow cross-origin requests while still maintaining a secure environment.

