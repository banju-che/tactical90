fetch("http://127.0.0.1:8000/api/leagues/")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

# token
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

# me
fetch("https://tactical90.onrender.com/api/users/me/", {
    method: "GET",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc4MjkyMDQzOSwiaWF0IjoxNzgyODM0MDM5LCJqdGkiOiJjN2QxZjg3Y2M0N2I0MjAzYWVkZDViMGYzMGMxNDRiZiIsInVzZXJfaWQiOjJ9.kYlbdpOuDJhStdDqsHpNI3bSFtLq4xvLLMNWbVm3nUo",
        "Content-Type": "application/json",
    },
})
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error(error));

fetch("https://tactical90.onrender.com/api/users/me/", {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access")}`,
  },
})
  .then(async (res) => {
    console.log("Status:", res.status);
    console.log(await res.json());
  })
  .catch(console.error);


from django.contrib.auth import get_user_model
from users.serializers import UserSerializer

User = get_user_model()
user = User.objects.get(email="fan1@example.com")

print(UserSerializer(user).data)