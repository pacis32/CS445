
    async function getResponse() {
        const response = await fetch(
            'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar',
            {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
                    'x-rapidapi-key': 'your_api_key'
                }
            }
        );
    
 
    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();
       console.log(data)
    }
    getResponse()