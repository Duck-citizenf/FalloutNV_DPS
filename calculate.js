let inputs = document.querySelectorAll('input');
arrayinputs = Array.from(inputs);
arrayinputs.map(w => w.addEventListener('change', calc));

let BlackWidow = document.getElementById("Black Widow").checked; //humanoids
let Grunt = document.getElementById("Grunt").checked; //grunt type bonus
let Cowboy = document.getElementById("Cowboy").checked; //cowboy type bonus
let DemolitionExpert = document.getElementById("Demolition Expert").checked; //Explosion damage only for explosion type
let Pyromaniac = document.getElementById("Pyromaniac").checked; //Fire weapon only but not the dot
let ShotgunSurgeon = document.getElementById("Shotgun Surgeon").checked; //shotgun type bonus
let TheProfession = document.getElementById("The Professional").checked; //professioal type bonus
let LivingAnatomy = document.getElementById("Living Anatomy").checked; //living
let Finesse = document.getElementById("Finesse").checked;
let PiercingStrike = document.getElementById("Piercing Strike").checked; //unarmed
let RoboticsExpert = document.getElementById("Robotics Expert").checked; //robots
let Hunter = document.getElementById("Hunter").checked; //animals
let Entomologist = document.getElementById("Entomologist").checked; //insects
let Slayer = document.getElementById("Slayer").checked; //melee nonautomatic
let BetterCritical = document.getElementById("Better Criticals").checked;
let Purifier = document.getElementById("Purifier").checked; //Mutants
let Ninja = document.getElementById("Ninja").checked; //melee and unarmed
let LaserCommander = document.getElementById("Laser Commander").checked; //laser type bonus
let StealthGirl = document.getElementById("Stealth Girl").checked;
let Abominable = document.getElementById("Abominable").checked; //abominations
let AnimalControl = document.getElementById("Animal Control").checked; //animals
let BugStomper = document.getElementById("Bug Stomper").checked; //insects
let MachineHead = document.getElementById("Machine Head").checked; //robots
let MeleeHacker = document.getElementById("Melee Hacker").checked; //melee non-automatic
let MutantMassacrer = document.getElementById("Mutant Massacrer").checked; //Mutants
let SetLasers = document.getElementById("Set Lasers for Fun").checked; //laser type bonus
let LightTouch = document.getElementById("Light Touch").checked;
let ElijahsRambl = document.getElementById("Elijah's Ramblings").checked; //melee
let FightthePower = document.getElementById("Fight the Power!").checked; //NCR legion
let EyeforEye = document.getElementById("Eye for Eye").checked;
let Atomic = document.getElementById("Atomic!").checked; //non-automatic
let CertifiedTech = document.getElementById("Certified Tech").checked; //robots
let AintLikeThatNow = document.getElementById("Ain't Like That Now").checked; //non-automatic
let JustLuckyImAlive = document.getElementById("Just Lucky I'm Alive").checked;
let ThoughtYouDied = document.getElementById("Thought You Died").checked;
let LonesomeRoad = document.getElementById("Lonesome Road").checked;
let CamaraderE = document.getElementById("Camarader-E").checked; //laser
let DNAgent = document.getElementById("DNAgent").checked; //Night stalkers
let DNAvenger = document.getElementById("DNAvenger").checked; //Cazadores
let SneeringImperialist = document.getElementById("Sneering Imperialist").checked; //Fiends
let BuilttoDestroy = document.getElementById("Built to Destroy").checked;
let FastShot = document.getElementById("Fast Shot").checked; //Non-automatic
let LooseCannon = document.getElementById("Loose Cannon").checked; //Throwing
let HeavyHanded = document.getElementById("Heavy Handed").checked; //Melee unarmed
let Daturana = document.getElementById("Daturana").checked; //Unarmed
let Rushingwater = document.getElementById("Rushing water").checked;
let Weaponbindingritual = document.getElementById("Weapon binding ritual").checked; //unarmed melee
let TruePoliceStories = document.getElementById("True Police Stories").checked;
let Comprehension = document.getElementById("Comprehension").checked;
let JoshuaGraham = document.getElementById("Joshua Graham's armor").checked;
let Ulysses = document.getElementById("Ulysses' duster").checked;
let stRecon = document.getElementById("1st Recon beret").checked;
let Markedbeast= document.getElementById("Marked beast face helmet").checked;
let Armor87 = document.getElementById("Armor of the 87th Tribe").checked;
let Eliteriot = document.getElementById("Elite riot gear").checked;
let SaltUponWound = document.getElementById("Salt-Upon-Wounds' helmet").checked;

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

                let CritChance = playerLuck;
                CritChance = Ulysses ? CritChance+5 : 0;
                CritChance = stRecon ? CritChance+5 : 0;
                CritChance = Armor87 ? CritChance+3 : 0;
                CritChance = Eliteriot ? CritChance+5 : 0;
                CritChance = SaltUponWound ? CritChance+2 : 0;
                CritChance = JoshuaGraham ? CritChance+3 : 0;
                CritChance = Markedbeast ? CritChance+2 : 0;
                CritChance = Math.min(CritChance * gun.Critical, 100)





                let Crit = (CritChance/100)*Number(gun.CritDam)
                let Dam = gun.Damage*(playerSkill/100)+Crit*enemyDR;
                let pDT;
                if(Math.sign(bullet.DT) == 1){
                    pDT = enemyDT*bullet.DT
                }
                else{
                    pDT = enemyDT-bullet.DT
                }
                let DT = Math.max(pDT, 0);
                let Dam_adjusted = Math.max(Dam*0.2,Dam-DT);
                let fin_dam = Dam_adjusted*bullet.Dam
                line.appendChild(document.createElement("td")).textContent = fin_dam;
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

