const select                = document.querySelector('select'),
      weight                = document.querySelector('#weight'),
      reps                  = document.querySelector('#reps'),
      submit                = document.querySelector('#submit'),
      total                 = document.querySelector('.total'),
      pushUps               = document.querySelector('#push-ups'),
      pushUpPoints          = pushUps.querySelector('.talent-points'),
      dips                  = document.querySelector('#dips'),
      dipsPoints            = dips.querySelector('.talent-points'),
      machinePress          = document.querySelector('#machine-press'),
      machinePressPoints    = machinePress.querySelector('.talent-points'),
      dumbellPress          = document.querySelector('#db-press'),
      dumbellPressPoints    = dumbellPress.querySelector('.talent-points'),
      cableFlys             = document.querySelector('#cable-flys'),
      cableFlysPoints       = cableFlys.querySelector('.talent-points'),
      benchPress            = document.querySelector('#bench-press'),
      benchPressPoints      = benchPress.querySelector('.talent-points')
      dumbellPullOver       = document.querySelector('#db-pullover'),
      dumbellPullOverPoints = dumbellPullOver.querySelector('.talent-points');

let totalPoints               = 0,
    pushUpVolume              = 0,
    diamondPushUpVolume       = 0,
    dipsVolume                = 0,
    weightedDipsVolume        = 0,
    machinePressVolume        = 0,
    inclineMachinePressVolume = 0,
    dumbellPressVolume        = 0,
    cableFlyVolume            = 0,
    benchPressVolume          = 0,
    dumbellPullOverVolume     = 0;

submit.addEventListener('click', () => {
    switch(select.value) {
        case 'Push Ups':
            pushUpVolume = pushUpVolume + (weight.value * reps.value);
            addPoint(pushUpVolume);
            break;
        case 'Diamond Push-Ups':
            diamondPushUpVolume = diamondPushUpVolume + (weight.value * reps.value);
            addPoint(diamondPushUpVolume);
            break;
        case 'Weighted Dips':
            weightedDipsVolume = weightedDipsVolume + (weight.value * reps.value);
            addPoint(weightedDipsVolume);
            break;
        case 'Dips':
            dipsVolume = dipsVolume + (weight.value * reps.value);
            addPoint(dipsVolume);
            break;
        case 'Machine Press':
            machinePressVolume = machinePressVolume + (weight.value * reps.value);
            addPoint(machinePressVolume);
            break;
        case 'Incline Machine Press':
            inclineMachinePressVolume = inclineMachinePressVolume + (weight.value * reps.value);
            addPoint(inclineMachinePressVolume);
            break;
        case 'Dumbell Press':
            dumbellPressVolume = dumbellPressVolume + (weight.value * reps.value);
            addPoint(dumbellPressVolume);
            break;
        case 'Cable Fly':
            cableFlyVolume = cableFlyVolume + (weight.value * reps.value);
            addPoint(cableFlyVolume);
            break;
        case 'Bench Press':
           benchPressVolume = benchPressVolume + (weight.value * reps.value);
           addPoint(benchPressVolume);
           break;
        case 'Dumbell Pull-Over':
          dumbellPullOverVolume = dumbellPullOverVolume + (weight.value * reps.value);
          addPoint(dumbellPullOverVolume);
          break;
        default:
            console.log('Error');
    }
    weight.value = '';
    reps.value = '';
});

const addPoint = volume => {
    if (volume >= 10000) {
        totalPoints++;
        volume = 0;
        total.textContent = totalPoints;
    }
}

const subtractPoint = () => {
    totalPoints--;
    total.textContent = totalPoints;
}

const pushUpsLevelUp = () => {
    if (totalPoints > 0) {
        let current = parseInt(pushUpPoints.textContent)
        if (current < 2) {
            pushUpPoints.textContent = parseInt(pushUpPoints.textContent) + 1;
            if (pushUpPoints.textContent == 2) {
                dips.classList.remove('inactive');
                dips.classList.add('active');
                machinePress.classList.remove('inactive');
                machinePress.classList.add('active');
    
                dips.addEventListener('click', dipsLevelUp);
                machinePress.addEventListener('click', machinePressLevelUp);
            }
            if (pushUpPoints.textContent == 1) {
                let dpu = document.createElement('option');
                dpu.text = 'Diamond Push-Ups';
                dpu.value = 'Diamond Push-Ups';
                select.add(dpu);
            }
        }
        subtractPoint();
    }
}

pushUps.addEventListener('click', pushUpsLevelUp);

const dipsLevelUp = () => {
    if (totalPoints > 0) {
        let current = parseInt(dipsPoints.textContent);
        if (current < 2) {
            dipsPoints.textContent = parseInt(dipsPoints.textContent) + 1;
            if (dipsPoints.textContent == 1) {
                let dihps = document.createElement('option');
                dihps.text = 'Dips';
                dihps.value = 'Dips'
                select.add(dihps);
            }
            if (dipsPoints.textContent == 2) {
                let wd = document.createElement('option');
                wd.text = 'Weighted Dips';
                wd.value = 'Weighted Dips';
                select.add(wd);
    
                dumbellPress.classList.remove('inactive');
                dumbellPress.classList.add('active');
                cableFlys.classList.remove('inactive');
                cableFlys.classList.add('active');
    
                dumbellPress.addEventListener('click', dbPressLevelUp);
                cableFlys.addEventListener('click', cableFlysLevelUp);
            }
        }
        subtractPoint();
    }
}

const machinePressLevelUp = () => {
    if (totalPoints > 0) {
        let current = parseInt(machinePressPoints.textContent);
        if (current < 2) {
            machinePressPoints.textContent = parseInt(machinePressPoints.textContent) + 1;
            if (machinePressPoints.textContent == 1) {
                let masheenPress = document.createElement('option');
                masheenPress.text = 'Machine Press';
                masheenPress.value = 'Machine Press';
                select.add(masheenPress);
            }
            if (machinePressPoints.textContent == 2) {
                let imp = document.createElement('option');
                imp.text = 'Incline Machine Press';
                imp.value = 'Incline Machine Press';
                select.add(imp);
    
                benchPress.classList.remove('inactive');
                benchPress.classList.add('active');
                dumbellPullOver.classList.remove('inactive');
                dumbellPullOver.classList.add('active');
    
                benchPress.addEventListener('click', benchPressLevelUp);
                dumbellPullOver.addEventListener('click', dumbellPullOverLevelUp);
            }
        }
        subtractPoint();
    }
}

const dbPressLevelUp = () => {
    if (totalPoints > 0) {
        let current = parseInt(dumbellPressPoints.textContent);
        if (current < 1) {
            dumbellPressPoints.textContent = parseInt(dumbellPressPoints.textContent) + 1;
            if (dumbellPressPoints.textContent == 1) {
                let dbp = document.createElement('option');
                dbp.text = 'Dumbell Press';
                dbp.value = 'Dumbell Press';
                select.add(dbp);
            }
        }
        subtractPoint();
    }
}

const cableFlysLevelUp = () => {
    if (totalPoints > 0) {
        let current = parseInt(cableFlysPoints.textContent);
        if (current < 1) {
            cableFlysPoints.textContent = parseInt(cableFlysPoints.textContent) + 1;
            if (cableFlysPoints.textContent == 1) {
                let cf = document.createElement('option');
                cf.text = 'Cable Fly';
                cf.value = 'Cable Fly';
                select.add(cf);
            }
        }
        subtractPoint();
    }
}

const benchPressLevelUp = () => {
    if (totalPoints > 0) {
        let current = parseInt(benchPressPoints.textContent);
        if (current < 1) {
            benchPressPoints.textContent = parseInt(benchPressPoints.textContent) + 1;
            if (benchPressPoints.textContent == 1) {
                let bp = document.createElement('option');
                bp.text = 'Bench Press';
                bp.value = 'Bench Press';
                select.add(bp);
            }
        }
        subtractPoint();
    }
}

const dumbellPullOverLevelUp = () => {
    if (totalPoints > 0) {
        let current = parseInt(dumbellPullOverPoints.textContent);
        if (current < 1) {
            dumbellPullOverPoints.textContent = parseInt(dumbellPullOverPoints.textContent) + 1;
            if (dumbellPullOverPoints.textContent == 1) {
                let dpo = document.createElement('option');
                dpo.text = 'Dumbell Pull-Over';
                dpo.value = 'Dumbell Pull-Over';
                select.add(dpo);
            }
        }
        subtractPoint();
    }
}