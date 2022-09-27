## ***#What are the different types of HTTP requests?***
-An HTTP request is a way to structure requests and responses over a given URL.\
-An HTTP request is client-initiated which means the requests are sent by the client to the server.\
-These structured requests and responses are defined by HTTP Request Methods. These request methods each fulfill a different action to a given resource.\
-Today we are going to be going over 4 of these request methods: GET, POST, PUT, and DELETE
#### 1. GET:
- The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.
#### 2.POST
- A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.
#### 3.PUT
- Replaces all current representations of the target resource with the uploaded content.

#### 4.DELETE
- Removes all current representations of the target resource given by a URI.

## ***#Explain the concept of middleware in Node.js.?***
-Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. \
-These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.
## ***#Explain CORS?***
-The word CORS stands for “Cross-Origin Resource Sharing”. \
-Cross-Origin Resource Sharing is an HTTP-header based mechanism implemented by the browser which allows a server or an API(Application Programming Interface) to indicate any origins (different in terms of protocol, hostname, or port) other than its origin from which the unknown origin gets permission to access and load resources. \
-The cors package available in the npm registry is used to tackle CORS errors in a Node.js application. \
-In other words,CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.

## ***#What is Express. how it helps you to create a backend application?***
- ***What is Express?*** \
-Express.js is a Node.js framework. It's the most popular framework as of now (the most starred on NPM).\
-Express is a node js web application framework that provides broad features for building web and mobile applications. \
-It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.\

- ***What is the purpose of it with Node.js?***\
-That you don't have to repeat same code over and over again. Node.js is a low-level I/O mechanism which has an HTTP module. 
-If you just use an HTTP module, a lot of work like parsing the payload, cookies, storing sessions (in memory or in Redis), selecting the right route pattern based on regular expressions will have to be re-implemented. 
-With Express.js, it is just there for you to use.
- ***Steps to use Express?*** 

-Step 1: Write this command in your terminal, to create a nodejs application, because our express server will work inside the node application.
```
npm init -y (for default)
```
-Step 2: Install necessary dependencies for our application.
```
npm install express
```
-Step 3: run the server.
```
node fileName.js
```
## ***#Explain min 5 status codes gets used in Backend development?***
### 1.Success 2xx:
These codes indicate success. The body section if present is the object returned by the request. It is a MIME format object. It is in MIME format, and may only be in text/plain, text/html or one fo the formats specified as acceptable in the request.
### 2.OK 200:
The request was fulfilled.
### 3.CREATED 201:
Following a POST command, this indicates success, but the textual part of the response line indicates the URI by which the newly created document should be known.
### 4.Accepted 202:
The request has been accepted for processing, but the processing has not been completed. The request may or may not eventually be acted upon, as it may be disallowed when processing actually takes place. there is no facility for status returns from asynchronous operations such as this.
### 5.Partial Information 203:
When received in the response to a GET command, this indicates that the returned metainformation is not a definitive set of the object from a server with a copy of the object, but is from a private overlaid web. This may include annotation information about the object, for example.

### 6.No Response 204:
Server has received the request but there is no information to send back, and the client should stay in the same document view. This is mainly to allow input for scripts without changing the document at the same time.

### 7.Error 4xx, 5xx:
The 4xx codes are intended for cases in which the client seems to have erred, and the 5xx codes for the cases in which the server is aware that the server has erred. It is impossible to distinguish these cases in general, so the difference is only informational.

The body section may contain a document describing the error in human readable form. The document is in MIME format, and may only be in text/plain, text/html or one for the formats specified as acceptable in the request.

### 8.Bad request 400:
The request had bad syntax or was inherently impossible to be satisfied.

### 9.Unauthorized 401:
The parameter to this message gives a specification of authorization schemes which are acceptable. The client should retry the request with a suitable Authorization header.

### 10.PaymentRequired 402:
The parameter to this message gives a specification of charging schemes acceptable. The client may retry the request with a suitable ChargeTo header.

### 11.Forbidden 403:
The request is for something forbidden. Authorization will not help.

### 12.Not found 404:
The server has not found anything matching the URI given

### 13.Internal Error 500:
The server encountered an unexpected condition which prevented it from fulfilling the request.

### 14.Not implemented 501:
The server does not support the facility required.

### 15.Service temporarily overloaded 502 (TO BE DISCUSSED):
The server cannot process the request due to a high load (whether HTTP servicing or other requests). The implication is that this is a temporary condition which maybe alleviated at other times.\

### 16.Gateway timeout 503 (TO BE DISCUSSED):
This is equivalent to Internal Error 500, but in the case of a server which is in turn accessing some other service, this indicates that the respose from the other service did not return within a time that the gateway was prepared to wait. As from the point of view of the clientand the HTTP transaction the other service is hidden within the server, this maybe treated identically to Internal error 500, but has more diagnostic value.\

### Note: The 502 and 503 codes are new and for discussion, September 19, 1994

### 17.Redirection 3xx
The codes in this section indicate action to be taken (normally automatically) by the client in order to fulfill the request.\
### 18.Moved 301
The data requested has been assigned a new URI, the change is permanent. (N.B. this is an optimisation, which must, pragmatically, be included in this definition. Browsers with link editing capabiliy should automatically relink to the new reference, where possible)\
The response contains one or more header lines of the form\

       URI: <url> String CrLf

Which specify alternative addresses for the object in question. The String is an optional comment field. If the response is to indicate a set of variants which each correspond to the requested URI, then the multipart/alternative wrapping may be used to distinguish different sets\
### 19.Found 302
The data requested actually resides under a different URL, however, the redirection may be altered on occasion (when making links to these kinds of document, the browser should default to using the Udi of the redirection document, but have the option of linking to the final document) as for "Forward".\
The response format is the same as for Moved .
### 20.Method 303:
	Method: <method> <url>
	body-section
Note: This status code is to be specified in more detail. For the moment it is for discussion only.\
Like the found response, this suggests that the client go try another network address. In this case, a different method may be used too, rather than GET.\
The body-section contains the parameters to be used for the method. This allows a document to be a pointer to a complex query operation.\
The body may be preceded by the following additional fields as listed.
### 21.Not Modified 304:
-If the client has done a conditional GET and access is allowed, but the document has not been modified since the date and time specified in -If-Modified-Since field, the server responds with a 304 status code and does not send the document body to the client.\
-Response headers are as if the client had sent a HEAD request, but limited to only those headers which make sense in this context. This means only headers that are relevant to cache managers and which may have changed independently of the document's Last-Modified date. Examples include Date , Server and Expires .\
-The purpose of this feature is to allow efficient updates of local cache information (including relevant metainformation) without requiring the overhead of multiple HTTP requests (e.g. a HEAD followed by a GET) and minimizing the transmittal of information already known by the requesting client (usually a caching proxy).
## ***#Difference between HTTP and HTTPS?***
- Differences between HTTP and HTTPS: \
-HTTP stands for HyperText Transfer Protocol and HTTPS stands for HyperText Transfer Protocol Secure.\
-In HTTP, URL begins with “http://” whereas URL starts with “https://”\
-HTTP uses port number 80 for communication and HTTPS uses 443\
-HTTP is considered to be insecure and HTTPS is secure\
-HTTP Works at Application Layer and HTTPS works at Transport Layer\
-In HTTP, Encryption is absent and Encryption is present in HTTPS as discussed above\
-HTTP does not require any certificates and HTTPS needs SSL Certificates\
-HTTP speed is faster than HTTPS and HTTPS speed is slower than HTTP\
-HTTP does not improve search ranking while HTTPS improves search ranking.\
-HTTP does not use data hashtags to secure data, while HTTPS will have the data before sending it and return it to its original state on the receiver side.
## ***#What are JWT tokens?***
-JSON Web Token (JWT) is a standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. 
-The compact size makes the tokens easy to transfer through an URL, POST parameter, or inside an HTTP header. 
-The information in a JWT is digitally signed using a secret or public/private key pair.\
-JWTs can be signed using a secret or a public/private key pair.\
-JWTs are mainly used for authentication. After a user signs in to an application, the application then assigns JWT to that user. 
-Subsequent requests by the user will include the assigned JWT. This token tells the server what routes, services, and resources the user is allowed to access.
### Advantages of Node.js authentication with JWT:
- Node.js authentication with JWT has several advantages over the traditional authentication process, primarily the scalability of stateless applications. And since it’s becoming popular among such heavyweights as Facebook and Google, it’s adoption across the industry likely will continue to grow. 

- Other advantages include:

1. Simple verification through a JSON Web Token 
2. You can use an authentication service or outsource it
3. Provides more trustworthiness than cookies or sessions