
function generateTeammate(employee) {
    var div = "";
    if(employee.role === "Manager"){
        div = `<div class="card-content" id="office-number">${employee.office}</div>`
    }
    if(employee.role === "Engineer"){
        div = `<div class="card-content" id="github"><a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></div>`
    }
    if(employee.role === "Intern"){
        div = `<div class="card-content" id="school">${employee.school}</div>`
    }




    return `              <div class="card">
    <div class="card-header">
    <div class="card-header-title is-center ">${employee.name}</div>
    <div class="card-header-title is-center">${employee.role}</div>
</div>
    <div class="card-content" id="id">${employee.id}</div>
    <div class="card-content" id="email">${employee.email}</div>
    ${div}    
    </div>
</div>`
};