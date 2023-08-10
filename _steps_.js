/** 
 1. create a post api on the server side
 2. client side send data via post
 3. set fetch method inside the fetch options (second parameter)
 4. options will have three things:
 5. first is  method : 'get' | 'POST' etc
 6. second is headers: 'content-type' : 'application/json'
 7. third is body : JSON.stringify(user)
 8. on the server side : don't forget to use express.json() middleware
 * 
*/
