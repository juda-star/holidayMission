let HTML = '';
async function getUsers() {
    let UsersList = await fetch('https://next.json-generator.com/api/json/get/NJ-UoW2Xq');
    let Users = await UsersList.json();
    console.log(Users);

    for (let details of Users) {
        HTML += `<div class="card-body" id="${details["index"]}" onclick="invisible(${details["index"]})">`
        for (let key in details) {
            if (key === "picture") {
                HTML += `<img src="${details["picture"]}" class="card-img-top">`
            }
            if (details[key] != details["_id"] && details[key] != details["index"] && details[key] != details["name"] && details[key] != details["picture"]) {
                HTML += `<h5 class="card-text">${details[key]}</h5>`
            }
            if (details[key] == details["name"]) {
                HTML += `<h2 class="card-title">${details["name"]["first"]} ${details["name"]["last"]}</h2>`

            }


        }
        HTML += `</div>`
    }
    mainDiv.innerHTML += HTML
}
getUsers();
// onclick one obg stay
function invisible(divId) {
    document.getElementById("mainDiv").innerHTML = `<div> ${document.getElementById(`${divId}`).innerHTML} </div>`
}
// button table
let table = '';
async function getUsers1() {
    let UsersList = await fetch('https://next.json-generator.com/api/json/get/NJ-UoW2Xq');
    let Users = await UsersList.json();
    console.log(Users);

    for (let details of Users) {
        table += `<table id="t01">`
        if (!details["index"]) {
            table += `<tr>
       <th>Firstname</th>
       <th>Lastname</th> 
       <th>Age</th>
       <th>picture</th>
       <th>email</th>
     </tr>`
        }
        table += `<tr><td>${details["name"]["first"]}<td>${details["name"]["last"]}</td></td><td>${details["age"]} </td><td><img src="${details["picture"]}"></td><td>${details["email"]} </td></tr></table>`
    }
    mainDiv.innerHTML = table
}
// button register

let input = '';
async function getRegister() {
    let UsersList = await fetch('https://next.json-generator.com/api/json/get/NJ-UoW2Xq');
    let Users = await UsersList.json();
    console.log(Users);

    for (let details of Users) {
        input = `<div class="container">`
        if (!details["index"]) {
            input = ``
        }

    }
    input += `<class="container">
        <div class="row main">
            <div class="main-login main-center">
                <h5>Sign up.</h5>
                <form class="" method="post" action="#">

                    <div class="form-group">
                        <label for="name" class="cols-sm-2 control-label">first Name</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                <input type="text" class="form-control" name="name" id="name"
                                    placeholder="Enter your first Name" />
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="username" class="cols-sm-2 control-label">last Name</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                                <input type="text" class="form-control" name="last Name" id="username"
                                    placeholder="Enter your last Name" />
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="confirm" class="cols-sm-2 control-label">age</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-lock fa-lg"
                                        aria-hidden="true"></i></span>
                                <input type="text" class="form-control" name="confirm" id="confirm"
                                    placeholder="Enter your age" />
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="email" class="cols-sm-2 control-label">Your Email</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-envelope fa"
                                        aria-hidden="true"></i></span>
                                <input id="emailInput" type="text" class="form-control" name="email" 
                                    placeholder="Enter your Email" />
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="password" class="cols-sm-2 control-label">confirm Email</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-lock fa-lg"
                                        aria-hidden="true"></i></span>
                                <input id="emailConfirm" type="text" class="form-control" name="email" 
                                    placeholder="confirm your Email" />
                            </div>
                        </div>
                    </div>

                    <div class="form-group ">
                        <button type="button" id="button"
                            class="btn btn-primary btn-lg btn-block login-button" onclick="valid()">Register</button>
                    </div>

                </form>
            </div>
        </div>`
    mainDiv.innerHTML = input
}
function valid() {
    if (emailInput.value === emailConfirm.value) {
        alert("good")
    }
    else {
        alert("try again")
    }
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}