function App ()
{
	const spacePhenomena = [
		{id: 1, name: "Asteroid Belt", emoji: "☄️"},
		{id: 2, name: "Galactic Nebula", emoji: "🌌"},
		{id: 3, name: "Black Hole", emoji: "🕳️"},
		{id: 4, name: "Supernova Explosion", emoji: "💥"},
		{id: 5, name: "Pulsar", emoji: "⚡"},
		{id: 6, name: "Quasar", emoji: "💫"},
		{id: 7, name: "Exoplanet", emoji: "🪐"},
		{id: 8, name: "Interstellar Cloud", emoji: "☁️"},
		{id: 9, name: "Gamma-Ray Burst", emoji: "🌠"},
		{id: 10, name: "Magnetic Field Reversal", emoji: "🧲"}
	];

	const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];

	function randomStatus() {
		for (let i = 0; i < observationStatuses.length; i++) {
			let ranStat = Math.floor(Math.random() * observationStatuses.length)
			console.log(ranStat)

			if (ranStat === 2) {
				return observationStatuses[ranStat] + ' - ' + '(Gear up with your best equipment!)'
			} else {
				return observationStatuses[ranStat]
			}
		}
	}

	return (
		<div>
			{/* <!-- TODO :: DONE --> */}
			{spacePhenomena.map(data => {
				return <Status key={data.id} name={data.name} emoji={data.emoji} status={randomStatus()}/>
			})}
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
