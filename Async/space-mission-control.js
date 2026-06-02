// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).

let oneTimeTasks = [
	{ func: taskAdded, delay: 2000 },
	{ func: taskTwoAdded, delay: 3000 },
	{ func: taskThreeAdded, delay: 4000 },
];

// let oneTimeTasks = [];
let monitoringTaskId;

// Task 2: Add One-Time Task Function
function addOneTimeTask(func, delay) {
	// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
	let tasks = {}
	tasks['func'] = func;
	tasks['delay'] = delay;
	console.log(tasks)
	return oneTimeTasks.push(tasks)
}

// Task 3: Run One-Time Tasks Function
async function runOneTimeTasks() {
	// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
	for (let task of oneTimeTasks) {
		await new Promise(resolve => {
			setTimeout(() => {
				console.log(task)
				task.func()
				resolve()
			}, task.delay)
		})
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

// Task 4: Start Monitoring Function
async function startMonitoring() {
	// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
	return new Promise(resolve => {
		monitoringTaskId = setInterval(() => {
			console.log(monitoringTaskId, ' Monitoring Program Initiated')
			resolve()
		}, 3000)
	})
}

// Task 5: Stop Monitoring Function
async function stopMonitoring() {
	// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
	return new Promise(resolve => {
		clearInterval(monitoringTaskId)
		console.log('Monitoring Program Terminated')
		resolve()
	})
}

// Task 6: Start Countdown Function
async function startCountdown(duration) {
	// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
	await new Promise(resolve => {
		let countdown = setInterval(() => {
			console.log('Counting down ', duration)
			duration--

			if (duration <= 0) {
				clearInterval(countdown)
				console.log('Liftoff!')
				resolve()
			}
		}, 1000)
	})
}

// Task 7: Schedule Pre-Launch Activities and Launch
async function scheduleMission() {
	// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
	await startMonitoring();
	await runOneTimeTasks();
	await startCountdown(10);
	await stopMonitoring();
}

scheduleMission(); // Starts the mission.

