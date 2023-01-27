
function generateTeammate(employee) {
    return `              <div class="card">
    <div class="card-header">
    <div class="card-header-title is-center ">${employee.name}</div>
    <div class="card-header-title is-center">${employee.role}</div>
</div>
    <div class="card-content" id="id">${employee.id}</div>
    <div class="card-content" id="email">${employee.email}</div>
    <div class="card-content" id="office-number">${employee.office}</div>
    </div>
</div>`
};