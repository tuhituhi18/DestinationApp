import axios from "axios";
require("dotenv").config();


// Export an object containing methods we'll use for accessing the location and events
export default {

	getQuestions: function () {
		return axios.get("/api/Q");
	},

	fetchDestination: function (city) {
		const triposoUrl = "https://www.triposo.com/api/latest/location.json";
		const queryUrl = `${triposoUrl}?id=${city}&account=${process.env.REACT_APP_ACCOUNT}&token=${process.env.REACT_APP_TOKEN}`;

		// To check out the format for the city names we need.
		// const queryUrl = `${triposoUrl}?annotate=trigram:Ber&account=${process.env.REACT_APP_ACCOUNT}&token=${process.env.REACT_APP_TOKEN}`;

		// process of building api call for any tour info.
		const triposoTourUrl = "https://www.triposo.com/api/20200405/tour.json?";
		const tourQueryUrl = `${triposoTourUrl}?location_ids=${city}&account=${process.env.REACT_APP_ACCOUNT}&token=${process.env.REACT_APP_TOKEN}`;

        return axios
			.get(queryUrl)
		//.get(tourQueryUrl)

	}
};

// export default {

//     fetchDestination: function (tours) {

//         const triposoTourUrl = "https://www.triposo.com/api/20200405/tour.json?";
//         const tourQueryUrl = `${triposoTourUrl}?location_ids=${city}&account=${process.env.REACT_APP_ACCOUNT}&token=${process.env.REACT_APP_TOKEN}`;


//         return axios
//             .get(tourQueryUrl)

//     }
// };