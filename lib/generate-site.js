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

return hmtl.join('')
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
        </div>`;
        html.push(managerHTML); 
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
        html.push(engineerHTML); 
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
        html.push(internHTML); 
}

module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="LINK MATERIALIZE">
<link rel="stylesheet" href="./style.css">
<script src="https://kit.fontawesome.com/a51943e840.js" crossorigin="anonymous"></script>  GOOGLE FONTS?
<title>Team Profile Generator</title>
</head>
<body>
    <header>Meet The Team/header>
    <div class="team-cards">
        ${generateCard(team)}
    </div>
</body>
</html>`
};



