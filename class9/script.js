// const btn = document.getElementById("btn");
// const countText= document.getElementById("count");

// let count = 0;
// btn.addEventListener("click", () => {
//     count++;
//     countText.textContent = `Count: ${count}`;
// });


// const input = document.getElementById("nameInput");
// const output = document.getElementById("output");
// document.getElementById("saveBtn").addEventListener("click", () => {
//     localStorage.setItem("username", input.value);
// });

// show data on refresh
// const savedName = localStorage.getItem("username");
// if (savedName) {
//     output.textContent = `Welcome: ${savedName}`;
// }


// const students = [
//     { name: "Ravi", marks: 80 },
//     { name: "Priya", marks: 45 },
//     { name: "Amit", marks: 60 }
// ]

// filter & map

// const passedStudents = students.filter(student => student.marks >= 50);
// console.log(passedStudents);


// const names = passedStudents.map(student => student.name);
// console.log(names);

// console.log("Passed Students:", passedStudents);


// async await/ calling an api
// https://jsonplaceholder.typicode.com/users

// async function getUser() {

//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// getUser();



// calling an api and showing data on webpage


async function loadUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        const list = document.getElementById("userList");

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.username + " - " + user.email;
            list.appendChild(li);
        })

    } catch (error) {
        console.log("Error loading Users");
    }
}

loadUsers();

