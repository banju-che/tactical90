fetch("http://127.0.0.1:8000/api/matches/")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

# token
fetch("http://127.0.0.1:8000/api/token/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        email: "fan1@example.com",
        password: "test123",
    }),
})
.then(res => res.json())
.then(console.log)
.catch(console.error);

# me


fetch("http://127.0.0.1:8000/api/users/me/", {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access")}`,
  },
})
  .then(async (res) => {
    console.log("Status:", res.status);
    console.log(await res.json());
  })
  .catch(console.error);

# SHELL
from django.contrib.auth import get_user_model
from users.serializers import UserSerializer

User = get_user_model()
user = User.objects.get(email="fan1@example.com")

print(UserSerializer(user).data)