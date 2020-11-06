var template = {}
template.forcastTable = `	<div class="container">
				<div class="forecast-container">
					<div class="today forecast">
						<div class="forecast-header">
							<div class="day">Hôm nay</div>
							<div class="date">21/10/2020</div>
						</div> <!-- .forecast-header -->
						<div class="forecast-content">
							<div class="location">Ha Noi</div>
							<div class="degree">
								<div class="num">23<sup>o</sup>C</div>
								<div class="forecast-icon">
									<img src="images/icons/icon-1.svg" alt="" width=90>
								</div>
							</div>
							<span><img src="images/icon-umberella.png" alt="">20%</span>
							<span><img src="images/icon-wind.png" alt="">18km/h</span>
							<span><img src="images/icon-compass.png" alt="">Mưa nhỏ</span>
						</div>
					</div>
					<div class="forecast">
						<div class="forecast-header">
							<div class="day">22/10/2020</div>
						</div> <!-- .forecast-header -->
						<div class="forecast-content">
							<div class="forecast-icon">
								<img src="images/icons/icon-3.svg" alt="" width=48>
							</div>
							<div class="degree">23<sup>o</sup>C</div>
							<small>18<sup>o</sup></small>
						</div>
					</div>
					<div class="forecast">
						<div class="forecast-header">
							<div class="day">23/10/2020</div>
						</div> <!-- .forecast-header -->
						<div class="forecast-content">
							<div class="forecast-icon">
								<img src="images/icons/icon-13.svg" alt="" width=48>
							</div>
							<div class="degree">23<sup>o</sup>C</div>
							<small>18<sup>o</sup></small>
						</div>
					</div>
				</div>
			</div>`
template.render = function (){
    console.log(template.forcastTable)
}

// template.render()