//var data=[];
//var scenario;
var dimensions = {
			"capability": ["Market gateway", "Order management", "Order execution", "Lifecycle management", "Confirmations", "Settlement", "Payments"],
			"product": ["FX", "MM", "Rates", "Credit", "Equities"],
			"status": ["green", "amber", "red"],
			"location": ["United States", "United Kingdom", "Germany", "Italy"]
		};
var data= [];

$(document).ready(function() {
		// define the preferred sequence of the dimensions
		// this order will be used if optimised is unchecked
		// the closest optimised scenario to this will be used if optimised is checked
		
		data= [
		
	{
		"detail": {
			"id": 0,
			"name": "Azure API GW"
		},
		"usage": [
			{				
					"capability": "Market gateway",
					"product": "MM",
					"location": "Italy",				
					"status": "green",
					"commissioned": parseDate("2020-01-01")
			},
			{				
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Italy",				
					"status": "green",
					"commissioned": parseDate("2020-05-01")
			},
			{
				
					"capability": "Market gateway",
					"product": "Rates",
					"location": "Italy",				
					"status": "green",
					"commissioned": parseDate("2021-02-20")
			},
			{
				
					"capability": "Market gateway",
					"product": "FX",
					"location": "Italy",
				    "status": "green",
				    "commissioned": parseDate("2021-02-20")
			}
		]
	},
	{
		"detail": {
			"id": 1,
			"name": "ION"
		},
		"usage": [
			{
				
					"capability": "Market gateway",
					"product": "MM",
					"location": "Italy",
					"status": "red",
					"decommissioned": parseDate("2020-01-01")
			},
			{
			
					"capability": "Market gateway",
					"product": "Credit",
					"location": "United Kingdom",		
					"status": "red",
					"decommissioned": parseDate("2020-05-01")
			}
		]
	},
	{
		"detail": {
			"id": 2,
			"name": "Wall St"
		},
		"usage": [
			{				
					"capability": "Market gateway",
					"product": "MM",
					"location": "United Kingdom",
					"status": "green",
					"decommissioned": parseDate("2020-10-01")
			},
			{
					"capability": "Order management",
					"product": "MM",
					"location": "United Kingdom",
					"status": "green"
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "United Kingdom",
					"status": "green",
					"commissioned": parseDate("2020-11-15")
			},
			{				
					"capability": "Lifecycle management",
					"product": "MM",
					"location": "United Kingdom",
					"status": "red",
					"commissioned": parseDate("2018-11-15")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "United Kingdom",
					"status": "green",
					"commissioned": parseDate("2020-11-15")
			},
			{				
					"capability": "Order management",
					"product": "FX",
					"location": "United Kingdom",
					"status": "green"
			}
		]
	},
	{
		"detail": {
			"id": 3,
			"name": "MX II"
		},
		"usage": [
			{				
					"capability": "Order execution",
					"product": "Credit",
					"location": "United Kingdom",
					"status": "amber"
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "United Kingdom",
					"status": "amber",
					"decommissioned": parseDate("2021-01-15")
			},
			{
					"capability": "Market gateway",
					"product": "MM",
					"location": "United Kingdom",
					"status": "amber",
					"decommissioned": parseDate("2020-03-01")
			}
		]
	},
	{
		"detail": {
			"id": 4,
			"name": "Summit"
		},
		"usage": [
			{
					"capability": "Market gateway",
					"product": "FX",
					"location": "United Kingdom",
					"status": "green",
					"decommissioned": parseDate("2021-04-15")
			},
			{
					"capability": "Order execution",
					"product": "FX",
					"location": "United Kingdom",
					"status": "green",
					"decommissioned": parseDate("2021-01-15")
			},
			{				
					"capability": "Market gateway",
					"product": "Rates",
					"location": "United Kingdom",
					"status": "green",
					"decommissioned": parseDate("2021-04-15")
			},
			{				
					"capability": "Order management",
					"product": "Rates",
					"location": "United Kingdom",
					"status": "green",
					"commissioned": parseDate("2021-09-15")
			},
			{				
					"capability": "Order execution",
					"product": "Rates",
					"location": "United Kingdom",
					"status": "green"
			}
		]
	},
	{
		"detail": {
			"id": 5,
			"name": "Kdb"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "green"
			},
			{
					"capability": "Market gateway",
					"product": "Equities",
					"location": "Germany",
					"status": "green"
			},
			{				
					"capability": "Confirmations",
					"product": "Equities",
					"location": "Germany",
					"status": "red",
					"decommissioned": parseDate("2022-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "Equities",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2020-06-01")
			},
			{				
					"capability": "Order execution",
					"product": "Equities",
					"location": "Germany",
					"status": "amber",
					"decommissioned": parseDate("2020-07-01")
			}
		]
	},
	{
		"detail": {
			"id": 6,
			"name": "Thunderhead"
		},
		"usage": [
			{
					"capability": "Confirmations",
					"product": "FX",
					"location": "United Kingdom",
					"status": "green"
			},
			{
				
					"capability": "Confirmations",
					"product": "MM",
					"location": "United Kingdom",
					"status": "green"
			},
			{
				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "United Kingdom",
				    "status": "green"
			},
			{
				
					"capability": "Confirmations",
					"product": "Credit",
					"location": "United Kingdom",				
					"status": "green"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "United Kingdom",
					"status": "red",
					"decommissioned": parseDate("2020-10-01")
			},
			{
					"capability": "Confirmations",
					"product": "Equities",
					"location": "United Kingdom",			
					"status": "green",
					"commissioned": parseDate("2022-06-06")
			}
		]
	},
	{
		"detail": {
			"id": 7,
			"name": "Kdb1.0"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "red"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Germany",
					"status": "amber"
			},
			{				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "Germany",
					"status": "green",
					"decommissioned": parseDate("2022-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2017-06-01")
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "Germany",
					"status": "red",
					"commissioned": parseDate("2017-07-01")
			}
		]
	},
	{
		"detail": {
			"id": 8,
			"name": "Kdb2"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "red"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Germany",
					"status": "amber"
			},
			{				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "Germany",
					"status": "green",
					"decommissioned": parseDate("2022-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2019-10-01")
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "Germany",
					"status": "amber",
					"decommissioned": parseDate("2021-11-01")
			},
			{
					"capability": "Order management",
					"product": "Rates",
					"location": "Germany",			
					"status": "red",
					"commissioned": parseDate("2018-12-01")

			}
				
		]
	},
	{
		"detail": {
			"id": 9,
			"name": "Kdb3"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "red"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Germany",
					"status": "amber"
			},
			{				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "Germany",
					"status": "green",
					"decommissioned": parseDate("2021-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2019-06-01")
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "Germany",
					"status": "amber",
					"decommissioned": parseDate("2022-07-01")
			}
		]
	},
	{
		"detail": {
			"id": 10,
			"name": "Kdb4"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "red"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Germany",
					"status": "amber"
			},
			{				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "Germany",
					"status": "green",
					"decommissioned": parseDate("2021-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2018-06-01")
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "Germany",
					"status": "amber",
					"decommissioned": parseDate("2022-07-01")
			}
		]
	},{
		"detail": {
			"id": 11,
			"name": "Kdb5"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "red"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Germany",
					"status": "amber"
			},
			{				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "Germany",
					"status": "green",
					"decommissioned": parseDate("2021-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2019-06-01")
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "Germany",
					"status": "amber",
					"decommissioned": parseDate("2022-07-01")
			}
		]
	},{
		"detail": {
			"id": 12,
			"name": "Kdb6"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "red"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Germany",
					"status": "amber"
			},
			{				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "Germany",
					"status": "green",
					"decommissioned": parseDate("2021-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2021-06-01")
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "Germany",
					"status": "amber",
					"decommissioned": parseDate("2022-07-01")
			}
		]
	},
	{
		"detail": {
			"id": 13,
			"name": "Kdb7"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "red"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Germany",
					"status": "amber"
			},
			{				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "Germany",
					"status": "green",
					"decommissioned": parseDate("2021-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2019-06-01")
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "Germany",
					"status": "amber",
					"decommissioned": parseDate("2020-02-29")
			}
		]
	},
	{
		"detail": {
			"id": 14,
			"name": "Kdb8"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "green"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Germany",
					"status": "red"
			},
			{				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "Germany",
					"status": "green",
					"decommissioned": parseDate("2021-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2019-06-01")
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "Germany",
					"status": "amber",
					"decommissioned": parseDate("2020-02-29")
			}
		]
	},
	{
		"detail": {
			"id": 15,
			"name": "Kdb9"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "red"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Germany",
					"status": "amber"
			},
			{				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "Germany",
					"status": "green",
					"decommissioned": parseDate("2021-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2019-06-01")
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "Germany",
					"status": "amber",
					"decommissioned": parseDate("2020-02-29")
			}
		]
	},
	{
		"detail": {
			"id": 16,
			"name": "Kdb10"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "red"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Germany",
					"status": "amber"
			},
			{				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "Germany",
					"status": "green",
					"decommissioned": parseDate("2021-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2019-06-01")
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "Germany",
					"status": "amber",
					"decommissioned": parseDate("2020-02-29")
			}
		]
	},
	{
		"detail": {
			"id": 17,
			"name": "Kdb11"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "red"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Germany",
					"status": "amber"
			},
			{				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "Germany",
					"status": "green",
					"decommissioned": parseDate("2021-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2019-06-01")
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "Germany",
					"status": "amber",
					"decommissioned": parseDate("2020-02-29")
			}
		]
	},
	{
		"detail": {
			"id": 18,
			"name": "Kdb12"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "red"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Germany",
					"status": "amber"
			},
			{				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "Germany",
					"status": "green",
					"decommissioned": parseDate("2021-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2019-06-01")
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "Germany",
					"status": "amber",
					"decommissioned": parseDate("2020-02-29")
			}
		]
	},
	{
		"detail": {
			"id": 19,
			"name": "Kdb13"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "red"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Germany",
					"status": "amber"
			},
			{				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "Germany",
					"status": "green",
					"decommissioned": parseDate("2021-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2019-06-01")
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "Germany",
					"status": "amber",
					"decommissioned": parseDate("2020-02-29")
			}
		]
	},
	{
		"detail": {
			"id": 21,
			"name": "Kdb14"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "red"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Germany",
					"status": "amber"
			},
			{				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "Germany",
					"status": "green",
					"decommissioned": parseDate("2021-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2019-06-01")
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "Germany",
					"status": "amber",
					"decommissioned": parseDate("2020-02-29")
			}
		]
	},
	{
		"detail": {
			"id": 22,
			"name": "Kdb15"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "red"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Germany",
					"status": "amber"
			},
			{				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "Germany",
					"status": "green",
					"decommissioned": parseDate("2021-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2019-06-01")
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "Germany",
					"status": "amber",
					"decommissioned": parseDate("2020-02-29")
			}
		]
	},
	{
		"detail": {
			"id": 23,
			"name": "Kdb16"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "red"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Germany",
					"status": "amber"
			},
			{				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "Germany",
					"status": "green",
					"decommissioned": parseDate("2021-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2019-06-01")
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "Germany",
					"status": "amber",
					"decommissioned": parseDate("2020-02-29")
			}
		]
	},{
		"detail": {
			"id": 24,
			"name": "Kdb17"
		},
		"usage": [
			{				
					"capability": "Order management",
					"product": "Equities",
					"location": "Germany",			
					"status": "red"
			},
			{
					"capability": "Market gateway",
					"product": "Credit",
					"location": "Germany",
					"status": "amber"
			},
			{				
					"capability": "Confirmations",
					"product": "Rates",
					"location": "Germany",
					"status": "green",
					"decommissioned": parseDate("2021-09-09")
			},
			{				
					"capability": "Order execution",
					"product": "MM",
					"location": "Germany",
					"status": "green",
					"commissioned": parseDate("2019-06-01")
			},
			{				
					"capability": "Order execution",
					"product": "FX",
					"location": "Germany",
					"status": "amber",
					"decommissioned": parseDate("2020-02-29")
			}
		]
	}






];
    //convertRawJson(data);

		
		// get DOM elements that are frequently changed
		const dateOfInterest = document.getElementById("dateOfInterest");
		const lineOfBusiness = document.getElementById("lineOfBusiness");
		const xAxisSelector = document.getElementById("xAxisSelector");
		const yAxisSelector = document.getElementById("yAxisSelector");
		const xAxisOptimised = document.getElementById("xAxisOptimised");
		const yAxisOptimised = document.getElementById("yAxisOptimised");
		const slider = document.getElementById("slider");

		//let data=undefined;
		//let scenario = undefined;

		// one-off DOM element updates
		document.getElementById("earliestDate").textContent = fromToday(-1095).toLocaleDateString();
		document.getElementById("todaysDate").textContent = fromToday().toLocaleDateString();
		document.getElementById("latestDate").textContent = fromToday(1096).toLocaleDateString();	 		
	 		
			determineAxis();
		

		
		
		});
		
		function determineAxis() {		
			// extract the axes from the application data
			const xAxis = landscape.getAxis(data, xAxisSelector.options[xAxisSelector.selectedIndex].value);
			const yAxis = landscape.getAxis(data, yAxisSelector.options[yAxisSelector.selectedIndex].value);

			// find the optimum layout scenarios
			scenario = landscape.getOptimalAxes(data, xAxis, yAxis, selectScenario, xAxisOptimised.checked ? landscape.flexOrder : fixOrder, yAxisOptimised.checked ? landscape.flexOrder : fixOrder);

			// select the preferred scenario
			if (scenario) {
				displayAtDate();
			}
		}

		function displayAtDate() {
			const date = fromToday(slider.value);

			// get the prepared table with applications filtered by the date of interest
			const table = landscape.getTable(landscape.filterByDate(data, date), scenario.x, scenario.y);

			// update data of interest field
			dateOfInterest.textContent = date.toLocaleDateString();

			// update the table
			lineOfBusiness.innerHTML = landscape.getHTML(table);
		}

		// alternative function to considering all permutations an axis
		function fixOrder(axis) {
			return [dimensions[axis.name].filter(function (capability) { return axis.values.indexOf(capability) !== -1 })];
		}

		// map raw JSON data to format required in layout engine (transform date strings into dates)
		function convertRawJson(data) {
			return json.map(function (app) {
				return {
					detail: app.detail,
					usage: app.usage.map(function (use) {
						return {
							product: use.product,
							capability: use.capability,
							location: use.location,
							commissioned: use.commissioned ? new Date(use.commissioned) : undefined,
							decommissioned: use.decommissioned ? new Date(use.decommissioned) : undefined,
							status: use.status
						};
					})
				};
			});
		}

		// helper function to add days to a date
		function fromToday(offset) {
			var result = new Date();

			result.setMilliseconds(result.getMilliseconds() + ((offset || 0) * 86400000));

			return result;
		}

		// pick the scenario closest to the desired layout
		function selectScenario(scenarios) {
			let bestScore = 1000000;
			let bestScenario = 0;
			const xPreferred = dimensions[scenarios[0].x.name].filter(function (v) { return scenarios[0].x.values.indexOf(v) !== -1; });
			const yPreferred = dimensions[scenarios[0].y.name].filter(function (v) { return scenarios[0].y.values.indexOf(v) !== -1; });

			scenarios.forEach(function (scenario, scenarioIndex) {
				const xAxis = scenario.x;
				const yAxis = scenario.y;
				let score = 0;

				xAxis.values.forEach(function (value, valueIndex) {
					score += Math.abs(xPreferred.indexOf(value) - valueIndex);
				});

				yAxis.values.forEach(function (value, valueIndex) {
					score += Math.abs(yPreferred.indexOf(value) - valueIndex);
				});

				if (score < bestScore) {
					bestScenario = scenarioIndex;
					bestScore = score;
				}
			});

			return scenarios[bestScenario];
		}
		function parseDate(str_date) {
		
		var d = new Date(str_date);
//var n = d.toDateString(d);
return d;

  //return new Date(Date.parse(str_date));
}
