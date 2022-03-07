function generateCard (team) {
    const html = []; 
}

for (let i = 0; i < team.length; i++) {
    let teamMember = team[i];
    let role = teamMember.getRole();
    switch(role) {
        case "manager": 
        html.push(generateManagerCard(teamMember)); 
        break;

        case "engineer":
        html.push(generateEngineerCard(teamMember));
        break; 

        case "intern":
        html.push(generateInternCard(teamMember));
        break; 
    }

return html.join('')
}

function generateManagerCard(manager) {
    return `
    <div class="card" style="width: 35rem;">
        <div class="card-body">
        <div class="card-title">Manager</div>
        <div class="card-subtitle">Name: ${manager.name}</div>
        <div class="card" style="width: 30rem;">
        <ul class= "list-group">
        <li class= "list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}<li>
        <li class= "list-group-item">Employee ID: ${manager.id}<li>
        <li class= "list-group-item">Office Number: ${manager.phone}<li>
        </ul>
        </div>
        </div>
        </div>`
}

function generateEngineerCarde(engineer) {
    return `
    <div class="card" style="width: 35rem;">
        <div class="card-body">
        <div class="card-title">Engineer</div>
        <div class="card-subtitle">Name: ${engineer.name}</div>
        <div class="card" style="width: 30rem;">
        <ul class= "list-group">
        <li class= "list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}<li>
        <li class= "list-group-item">Employee ID: ${engineer.id}<li>
        <li class= "list-group-item">GitHub: ${engineer.github}<li>
        </ul>
        </div>
        </div>
        </div>`
}

function generateInternCard(intern) {
    return `
    <div class="card" style="width: 35rem;">
        <div class="card-body">
        <div class="card-title">Intern</div>
        <div class="card-subtitle">Name: ${intern.name}</div>
        <div class="card" style="width: 30rem;">
        <ul class= "list-group">
        <li class= "list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}<li>
        <li class= "list-group-item">Employee ID: ${intern.id}<li>
        <li class= "list-group-item">University: ${intern.school}<li>
        </ul>
        </div>
        </div>
        </div>`
}

module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="./assets/css/style.css">


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


<script src="https://kit.fontawesome.com/11d34b61cd.js" crossorigin="anonymous"></script>
<title>Team Profile Generator</title>
<body>
    <header>Meet The Team/header>
    <div class="team-cards">
        ${generateCard(team)}
    </div>
</body>
</html>`
};



