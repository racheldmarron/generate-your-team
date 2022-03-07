const path = require("path");
const fs = require("fs");
const intern = require("./intern");
const engineer = require("./engineer");

const templateDIR = path.resolve(_dirname, "../templates");

const render = employee => {
    const html = [];

    html.push(...employee
        .filter(employee => employee.getRole() === "manager")
        .map(manager => renderManager(manager))
    ); 
    
    html.push(...employee
        .filter(employee => employee.getRole() === "engineer")
        .map(engineer => renderManager(engineer))
    ); 

    html.push(...employee
        .filter(employee => employee.getRole() === "intern")
        .map(intern => renderManager(intern))
        ); 

    return renderMain(html.join("")); 

}; 

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templateDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "id", manager.getPhone());

    return template; 
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templateDir, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "id", engineer.getGithub());

    return template; 
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templateDir, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role",intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "id", intern.getSchool());

    return template; 
};

const renderMain = html => {
    const template = fs.readFileSync(path.resolve(tempplpateDir, "main.html"), "utf8");
    return replacePlaceholders(template, "team", html); 
};

const replacePlaceholders = (templates, placeholder,value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
}; 

module.exports = render 
