let totalPoints             = 1,
    pushUpVolume            = 0,
    dipsVolume              = 0,
    machinePressVolume      = 0,
    dumbellPressVolume      = 0,
    cableFlyVolume          = 0,
    benchPressVolume        = 0,
    dumbellPullOverVolume   = 0;

const select                = document.querySelector('select'),
      weight                = document.querySelector('#weight'),
      reps                  = document.querySelector('#reps'),
      submit                = document.querySelector('#submit'),
      total                 = document.querySelector('.total'),

      pushUps               = document.querySelector('#push-ups'),
      pushUpPoints          = pushUps.querySelector('.talent-points'),
      pushUpPercent         = pushUps.querySelector('.percent').querySelector('span'),

      dips                  = document.querySelector('#dips'),
      dipsPoints            = dips.querySelector('.talent-points'),
      dipsPercent           = dips.querySelector('.percent').querySelector('span'),

      machinePress          = document.querySelector('#machine-press'),
      machinePressPoints    = machinePress.querySelector('.talent-points'),
      machinePressPercent   = machinePress.querySelector('.percent').querySelector('span'),

      dumbellPress          = document.querySelector('#db-press'),
      dumbellPressPoints    = dumbellPress.querySelector('.talent-points'),
      dumbellPressPercent   = dumbellPress.querySelector('.percent').querySelector('span'),

      cableFlys             = document.querySelector('#cable-flys'),
      cableFlysPoints       = cableFlys.querySelector('.talent-points'),
      cableFlysPercent      = cableFlys.querySelector('.percent').querySelector('span'),

      benchPress            = document.querySelector('#bench-press'),
      benchPressPoints      = benchPress.querySelector('.talent-points'),
      benchPressPercent     = benchPress.querySelector('.percent').querySelector('span'),

      dumbellPullOver       = document.querySelector('#db-pullover'),
      dumbellPullOverPoints = dumbellPullOver.querySelector('.talent-points');
      dumbellPullPercent    = dumbellPullOver.querySelector('.percent').querySelector('span');

const status                = document.querySelector('p'),
      statusBox             = document.querySelector('.update');

const subtractPoint = () => {
    totalPoints--;
    total.textContent = totalPoints;
}

const addPoint = () => {
    totalPoints++;
    total.textContent = totalPoints;
    status.textContent = 'You\'ve gained a point.';
    statusBox.style.top = 0;
}

const submitter = () => {
    switch(select.value) {
        case 'Push Ups':
        case 'Diamond Push-Ups':
            pushUpVolume = pushUpVolume + (weight.value * reps.value);
            if (pushUpVolume >= 10000) {
                pushUpVolume = pushUpVolume - 10000;
                addPoint();
            }
            pushUpPercent.textContent = Math.floor(pushUpVolume / 100);
            break;
        case 'Dips':
        case 'Weighted Dips':
            dipsVolume = dipsVolume + (weight.value * reps.value);
            if (dipsVolume >= 10000) {
                dipsVolume = dipsVolume - 10000;
                addPoint();
            }
            dipsPercent.textContent = Math.floor(dipsVolume / 100);
            break;
        case 'Machine Press':
        case 'Incline Machine Press':
            machinePressVolume = machinePressVolume + (weight.value * reps.value);
            if (machinePressVolume >= 10000) {
                machinePressVolume = machinePressVolume - 10000;
                addPoint();
            }
            machinePressPercent.textContent = Math.floor(machinePressVolume / 100);
            break;
        case 'Dumbell Press':
            dumbellPressVolume = dumbellPressVolume + (weight.value * reps.value);
            if (dumbellPressVolume >= 10000) {
                dumbellPressVolume = dumbellPressVolume - 10000;
                addPoint();
            }
            dumbellPressPercent.textContent = Math.floor(dumbellPressVolume / 100);
            break;
        case 'Cable Fly':
            cableFlyVolume = cableFlyVolume + (weight.value * reps.value);
            if (cableFlyVolume >= 10000) {
                cableFlyVolume = cableFlyVolume - 10000;
                addPoint();
            }
            cableFlysPercent.textContent = Math.floor(cableFlyVolume / 100);
            break;
        case 'Bench Press':
           benchPressVolume = benchPressVolume + (weight.value * reps.value);
           if (benchPressVolume >= 10000) {
               benchPressVolume = benchPressVolume - 10000;
               addPoint();
           }
           benchPressPercent.textContent = Math.floor(benchPressVolume / 100);
           break;
        case 'Dumbell Pull-Over':
          dumbellPullOverVolume = dumbellPullOverVolume + (weight.value * reps.value);
          if (dumbellPullOverVolume >= 10000) {
              dumbellPullOverVolume = dumbellPullOverVolume - 10000;
              addPoint();
          }
          dumbellPullPercent.textContent = Math.floor(dumbellPullOverVolume / 100);
          break;
        default:
            statusBox.style.top = 0;
            status.textContent = 'You broke the app!';
    }
    weight.value = '';
    reps.value = '';
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
                status.textContent = 'Diamond Push-Ups added.';
                statusBox.style.top = 0;
            }
            subtractPoint();
        }
    }
}

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
                status.textContent = 'Dips added.';
                statusBox.style.top = 0;
            }
            if (dipsPoints.textContent == 2) {
                let wd = document.createElement('option');
                wd.text = 'Weighted Dips';
                wd.value = 'Weighted Dips';
                select.add(wd);
                status.textContent = 'Weighted Dips added.';
                statusBox.style.top = 0;
    
                dumbellPress.classList.remove('inactive');
                dumbellPress.classList.add('active');
                cableFlys.classList.remove('inactive');
                cableFlys.classList.add('active');
    
                dumbellPress.addEventListener('click', dbPressLevelUp);
                cableFlys.addEventListener('click', cableFlysLevelUp);
            }
            subtractPoint();
        }
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
                status.textContent = 'Machine Press added.';
                statusBox.style.top = 0;
            }
            if (machinePressPoints.textContent == 2) {
                let imp = document.createElement('option');
                imp.text = 'Incline Machine Press';
                imp.value = 'Incline Machine Press';
                select.add(imp);
                status.textContent = 'Incline Machine Press added.';
                statusBox.style.top = 0;
    
                benchPress.classList.remove('inactive');
                benchPress.classList.add('active');
                dumbellPullOver.classList.remove('inactive');
                dumbellPullOver.classList.add('active');
    
                benchPress.addEventListener('click', benchPressLevelUp);
                dumbellPullOver.addEventListener('click', dumbellPullOverLevelUp);
            }
            subtractPoint();
        }
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
                status.textContent = 'Dumbell Press added.';
                statusBox.style.top = 0;
            }
            subtractPoint();
        }
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
                status.textContent = 'Cable Flys added.';
                statusBox.style.top = 0;
            }
            subtractPoint();
        }
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
                status.textContent = 'Bench Press added.';
                statusBox.style.top = 0;
            }
            subtractPoint();
        }
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
                status.textContent = 'Dumbell Pull-Over added.';
                statusBox.style.top = 0;
            }
            subtractPoint();
        }
    }
}

submit.addEventListener('click', submitter);
pushUps.addEventListener('click', pushUpsLevelUp);
statusBox.addEventListener('click', () => {
    statusBox.style.top = '-100%';
});