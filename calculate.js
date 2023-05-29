function calc(){
    let enemyDT = 1;
    let enemyDR = 1;
    let playerLuck = 1;
    let playerStr = 1;
    let playerSkill = 100;
    for (const gun of window.list){ 
        for (const bullet of window.ammo){  
            if(gun.ammo.trim() == bullet.class){
                let line = document.createElement("tr");
                document.getElementById('table').appendChild(line);
                line.appendChild(document.createElement("td")).textContent = gun.Name;
                line.appendChild(document.createElement("td")).textContent = bullet.Name;
                let Dam = gun.Damage*(playerSkill/100)+(((playerLuck)/100)*gun.Critical*Number(gun.CritDam))*enemyDR;
                let DT = enemyDT
                line.appendChild(document.createElement("td")).textContent = Dam;
            }
        }
        if(gun.ammo.trim() == ""){
            let line = document.createElement("tr");
            document.getElementById('table').appendChild(line);
            line.appendChild(document.createElement("td")).textContent = gun.Name;
            line.appendChild(document.createElement("td"));
            line.appendChild(document.createElement("td")).textContent = gun.Damage;
        }
        // let name = document.createElement("td");
        // name.textContent = gun.Name;
        // name.colSpan = colspan;
        // line.prepend(name)
    }
}
calc();