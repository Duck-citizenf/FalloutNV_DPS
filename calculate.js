function calc(){
    for (const gun of window.list){
        let line;
        let colspan = 0;
        for (const bullet of window.ammo){
            colspan++;
            console.log(colspan);
            if(gun.Ammo == bullet.class){
                line = document.createElement("tr");
                document.getElementById('table').appendChild(line);
                line.appendChild(document.createElement("td")).textContent = bullet.Name;
                line.appendChild(document.createElement("td")).textContent = gun.Damage;
            }
        }
        let name = document.createElement("td");
        name.textContent = gun.Name;
        name.colSpan = colspan;
        line.prepend(name)
    }
}
calc();