document.getElementById('fetchUsersBtn').addEventListener('click', fetchUsers);

function fetchUsers() {
    fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(data => {
            const users = data.data;
            const userList = document.getElementById('userList');
            userList.innerHTML = ''; // Clear any existing users
            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('user-card');
                
                const avatar = document.createElement('img');
                avatar.src = user.avatar;
                avatar.alt = `${user.first_name} ${user.last_name}`;
                
                const name = document.createElement('h2');
                name.textContent = `${user.first_name} ${user.last_name}`;
                
                const email = document.createElement('p');
                email.textContent = user.email;
                
                userCard.appendChild(avatar);
                userCard.appendChild(name);
                userCard.appendChild(email);
                userList.appendChild(userCard);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
}
