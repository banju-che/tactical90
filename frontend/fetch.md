fetch("http://127.0.0.1:8000/api/leagues/")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

fetch("https://tactical90.onrender.com/api/token/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        email: "julius@example.com",
        password: "test123",
    }),
})
.then(res => res.json())
.then(console.log)
.catch(console.error);
Promise {<pending>}
{refresh: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90e…iOjJ9.aUOqy9l1bP32brwwyuXEcznU24e2RwofUCryiWJWaNw', 
access: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90e…I6Mn0.OLjO48vLyjVTEpbHQNoh3Tq81PuPUsGqidkubh8aj2A'}
*/