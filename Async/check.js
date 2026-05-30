let oneTimeTasks = [
    { func: taskAdded, delay: 2000 },
    { func: taskTwoAdded, delay: 3000 },
    { func: taskThreeAdded, delay: 4000 },
];

// let oneTimeTasks = [];
let monitoringTaskId;


function addOneTimeTask(func, delay) {
    let tasks = {}
    tasks['func'] = func;
    tasks['delay'] = delay;
    console.log(tasks)
    return oneTimeTasks.push(tasks)
}


function runOneTimeTasks() {
    for (let task of oneTimeTasks) {
        setTimeout(() => {
            console.log(task)
            task.func()
        }, task.delay)
    }
}

function taskAdded() {
    console.log('taskAdded function hit')
}
function taskTwoAdded() {
    console.log('taskTwoAdded function hit')
}
function taskThreeAdded() {
    console.log('taskThreeAdded function hit')
}
function newTask() {
    console.log('newTask function hit')
}


function startMonitoring() {
    monitoringTaskId = setInterval(() => {
        console.log(monitoringTaskId, ' Monitoring Program Initiated')
    }, 500)
}


function stopMonitoring() {
    clearInterval(monitoringTaskId);
}


function startCountdown(duration) {
    let countdown = setInterval(() => {
        console.log('Counting down ', duration)
        duration--

        if (duration <= 0) {
            clearInterval(countdown)
            console.log('Liftoff!')
        }
    }, 1000)
}


async function scheduleMission() {
    await startMonitoring();
    await runOneTimeTasks();
    await startCountdown(10);
    await stopMonitoring();
}

scheduleMission(); 

