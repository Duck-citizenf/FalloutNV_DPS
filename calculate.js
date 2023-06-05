let inputs = document.querySelectorAll('input');
arrayinputs = Array.from(inputs);
arrayinputs.map(w => w.addEventListener('change', calc));

function calc(){
    let BlackWidow = document.getElementById("Black Widow").checked; //10% dam humanoids
    let Grunt = document.getElementById("Grunt").checked; //25% dam grunt type bonus
    let Cowboy = document.getElementById("Cowboy").checked; //25% dam cowboy type bonus
    let DemolitionExpert = document.getElementById("Demolition Expert").checked; //20% dam Explosion damage only for explosion type
    let Pyromaniac = document.getElementById("Pyromaniac").checked; //50% Fire weapon only but not the dot
    let ShotgunSurgeon = document.getElementById("Shotgun Surgeon").checked; //-10 DT shotgun type bonus
    let TheProfession = document.getElementById("The Professional").checked; //20% crit dam professioal type bonus
    let LivingAnatomy = document.getElementById("Living Anatomy").checked; //5% dam living
    let Finesse = document.getElementById("Finesse").checked; //5% crit
    let PiercingStrike = document.getElementById("Piercing Strike").checked; //-15 DT unarmed and melee
    let RoboticsExpert = document.getElementById("Robotics Expert").checked; //25% dam robots
    let Hunter = document.getElementById("Hunter").checked; //75% crit dam animals
    let Entomologist = document.getElementById("Entomologist").checked; //50% dam insects
    let Slayer = document.getElementById("Slayer").checked; //30% speed melee nonautomatic
    let BetterCritical = document.getElementById("Better Criticals").checked; //50% crit dam
    let Purifier = document.getElementById("Purifier").checked; //50% dam Mutants melee
    let Ninja = document.getElementById("Ninja").checked; //15% crit 25% crit dam melee and unarmed
    let LaserCommander = document.getElementById("Laser Commander").checked; //15% dam 10% crit laser type bonus
    let StealthGirl = document.getElementById("Stealth Girl").checked; //10% crit dam
    let BloodyMess = document.getElementById("Bloody Mess").checked; //5% dam
    let LordDeath = document.getElementById("Lord Death").checked; //4% dam
    let Marked = document.getElementById("Marked").checked; //10% dam marked 
    let Abominable = document.getElementById("Abominable").checked; //10% dam abominations
    let AnimalControl = document.getElementById("Animal Control").checked; //10% dam animals
    let BugStomper = document.getElementById("Bug Stomper").checked; //10% dam insects
    let MachineHead = document.getElementById("Machine Head").checked; //6% dam robots
    let MeleeHacker = document.getElementById("Melee Hacker").checked; //10% speed melee non-automatic
    let MutantMassacrer = document.getElementById("Mutant Massacrer").checked; //10% dam Mutants
    let SetLasers = document.getElementById("Set Lasers for Fun").checked; //4% crit energy type bonus
    let LightTouch = document.getElementById("Light Touch").checked; //5% crit
    let ElijahsRambl = document.getElementById("Elijah's Ramblings").checked; //50% critdam melee
    let FightthePower = document.getElementById("Fight the Power!").checked; //5% crit NCR legion
    let EyeforEye = document.getElementById("Eye for Eye").checked; //50% dam
    let Atomic = document.getElementById("Atomic!").checked; //25% speed non-automatic
    let AintLikeThatNow = document.getElementById("Ain't Like That Now").checked; //20% speed non-automatic
    let JustLuckyImAlive = document.getElementById("Just Lucky I'm Alive").checked; //50% crit dam
    let ThoughtYouDied = document.getElementById("Thought You Died").checked; //10% dam
    let LonesomeRoad = document.getElementById("Lonesome Road").checked; //10% dam
    let CamaraderE = document.getElementById("Camarader-E").checked; //+5 dam laser
    let DNAgent = document.getElementById("DNAgent").checked; //10% dam Night stalkers
    let DNAvenger = document.getElementById("DNAvenger").checked; //30% dam Cazadores
    let ImplantC13 = document.getElementById("Implant C-13").checked; //10% dam Cazadores
    let SneeringImperialist = document.getElementById("Sneering Imperialist").checked; //15% dam Fiends
    let BuilttoDestroy = document.getElementById("Built to Destroy").checked; //3% crit
    let FastShot = document.getElementById("Fast Shot").checked; //20% speed Non-automatic gun
    let LooseCannon = document.getElementById("Loose Cannon").checked; //30% speed Throwing
    let HeavyHanded = document.getElementById("Heavy Handed").checked; //20% dam 60% crit dam Melee unarmed
    let HotBlooded = document.getElementById("Hot Blooded").checked; //15% dam
    let Psycho = document.getElementById("Psycho").checked; //25% dam
    let Yaoguai = document.getElementById("Yao guai meat").checked; //10% dam
    let Daturana = document.getElementById("Daturana").checked; //+1 dam Unarmed
    let Rushingwater = document.getElementById("Rushing water").checked;  //50% speed Non-automatic
    let Weaponbindingritual = document.getElementById("Weapon binding ritual").checked; //+10 dam melee
    let TruePoliceStories = document.getElementById("True Police Stories").checked;
    let Comprehension = document.getElementById("Comprehension").checked;
    let JoshuaGraham = document.getElementById("Joshua Graham's armor").checked;
    let Ulysses = document.getElementById("Ulysses' duster").checked;
    let stRecon = document.getElementById("1st Recon beret").checked;
    let Markedbeast= document.getElementById("Marked beast face helmet").checked;
    let Armor87 = document.getElementById("Armor of the 87th Tribe").checked;
    let Eliteriot = document.getElementById("Elite riot gear").checked;
    let SaltUponWound = document.getElementById("Salt-Upon-Wounds' helmet").checked;

    //Weapon types: Laser, cowboy, grunt, professional, shotgun, throwing, unarmed, melee, explosive, flame, energy

    document.getElementById('table').innerHTML = '';
    let enemyDR = 1;
    let playerLuck = Number(document.getElementById('Luck').value);
    let playerStr = Number(document.getElementById('Strength').value);
    let playerSkill = 100;
    let enemyDT = Number(document.getElementById('DT').value);
    for (const gun of window.list){ 
        for (const bullet of window.ammo){ 
            if('Type' in gun) {
            if(gun.ammo.trim().toLowerCase() == bullet.class.trim().toLowerCase()){
                let line = document.createElement("tr");
                document.getElementById('table').appendChild(line);
                line.appendChild(document.createElement("td")).textContent = gun.Name;
                line.appendChild(document.createElement("td")).textContent = bullet.Name;

                let CritChance = playerLuck
                    +(Ulysses?5:0)
                    +(stRecon?5:0)
                    +(Armor87?3:0)
                    +(Eliteriot?5:0)
                    +(SaltUponWound?2:0)
                    +(JoshuaGraham?3:0)
                    +(Markedbeast?2:0)
                    +(Finesse?5:0)
                    +(BuilttoDestroy?3:0)
                    +(TruePoliceStories&&Comprehension?10:0)
                    +(TruePoliceStories&&!Comprehension?5:0);
                CritChance = CritChance * gun.Critical;
                CritChance = LightTouch ? CritChance+5 : CritChance;
                CritChance = FightthePower ? CritChance+5 : CritChance;
                if('Type' in gun && gun.Type.includes('Laser') && LaserCommander){
                    CritChance = CritChance+10;
                }
                if('Type' in gun && (gun.Type.includes('Laser') || gun.Type.includes('Energy')) && SetLasers){
                    CritChance = CritChance+4;
                }
                CritChance = Math.min(CritChance, 100)
                let Crit = (CritChance/100)*Number(gun.CritDam)
                    *(Hunter?1.75:1)
                    *(BetterCritical?1.5:1)
                    *(JustLuckyImAlive?1.5:1)
                    *(StealthGirl?1.1:1);
                if('Type' in gun && gun.Type.includes('Professional') && TheProfession){
                    Crit = Crit*1.2;
                }
                let SumDam = (gun.Damage/bullet.proj)/gun.proj;
                if('Type' in gun && gun.Type.includes('Laser') && CamaraderE){
                    SumDam +=5;
                }
                let Dam = SumDam*(playerSkill/100)+Crit*enemyDR;
                let pDT; 
                if(Math.sign(bullet.DT) == 1){
                    pDT = enemyDT*bullet.DT
                }
                else{
                    pDT = enemyDT-bullet.DT
                }
                if('Type' in gun && gun.Type.includes('Shotgun') && ShotgunSurgeon){
                    pDT = pDT-10;
                }
                let DT = Math.max(pDT, 0);
                let Dam_adjusted = Math.max(Dam*0.2,Dam-DT);
                let fin_dam = Dam_adjusted*bullet.Dam
                    *(BlackWidow?1.1:1)
                    *(LivingAnatomy?1.05:1)
                    *(Entomologist?1.5:1)
                    *(BloodyMess?1.05:1)
                    *(LordDeath?1.04:1)
                    *(Marked?1.1:1)
                    *(Abominable?1.1:1)
                    *(AnimalControl?1.1:1)
                    *(BugStomper?1.1:1)
                    *(MachineHead?1.06:1)
                    *(MutantMassacrer?1.1:1)
                    *(EyeforEye?1.5:1)
                    *(ThoughtYouDied?1.1:1)
                    *(LonesomeRoad?1.1:1)
                    *(HotBlooded?1.15:1)
                    *(DNAgent?1.1:1)
                    *(DNAvenger?1.3:1)
                    *(ImplantC13?1.1:1)
                    *(SneeringImperialist?1.15:1)
                    *(Psycho?1.25:1)
                    *(Yaoguai?1.1:1);
                if('Type' in gun && gun.Type.includes('Laser') && LaserCommander){
                    fin_dam*1.15
                };
                if('Type' in gun && gun.Type.includes('Pyro') && Pyromaniac){
                    fin_dam*1.5
                };
                if('Type' in gun && gun.Type.includes('Cowboy') && Cowboy){
                    fin_dam*1.25
                };
                if('Type' in gun && gun.Type.includes('Grunt') && Grunt){
                    fin_dam*1.25
                };
                fin_dam = fin_dam*gun.Attackspeed*gun.proj*bullet.proj;
                line.appendChild(document.createElement("td")).textContent = Math.round(fin_dam);
            }}
        }
        if(gun.ammo.trim() == ""){
            let line = document.createElement("tr");
            document.getElementById('table').appendChild(line);
            line.appendChild(document.createElement("td")).textContent = gun.Name;
            line.appendChild(document.createElement("td"));
            line.appendChild(document.createElement("td")).textContent = gun.Damage;
        }
    }
}
calc();

