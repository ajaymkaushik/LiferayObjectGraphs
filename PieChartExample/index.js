//get siteid of the current site
var site_id = themeDisplay.getSiteGroupId();
//get current url of the page
var currentUrl = Liferay.currentURL;
//get base url oof the site
var currentSiteUrl = themeDisplay.getPortalURL();
//rest API url to get all content related to object type "reading"
var url_getLastMonthReading = currentSiteUrl +"/o/c/readings/scopes/"+site_id+"?pageSize=400&sort=dateCreated:desc";
//Variables Definitions and values
var readingATitle = "Var A";
var readingBTitle = "Var B";
var readingCTitle = "Var C";
var readingDTitle = "Var D";

/*
Function to fetch the data from rest API, Calltype is "GET/POST/PUT" etc, CAll URL is the rest API url to be passed. 
It inturn call loadObjectStackedChartif the API call return valid Response
*/
function restAPICallObjectPieChart(callType, CallUrl, CallData){
	//Rest API call for the url passed
    Liferay.Util.fetch(
        CallUrl, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf8'
            },
            method: callType,
        }
    )
    .then((response) => response.json())
    .then((data) => {
			// call loadObjectStackedChart function if the API response is valid 
            loadObjectPieChart(data.items);
    })
    .catch((error) => {
        console.log(error);
        Liferay.Util.openToast({
            message: 'An error occured.',
            type: 'danger',
        });
    });
}
//Function that process the response data from rest api and creates Chart
function loadObjectPieChart(result_getLastMonthReading){
var avgA = 0;
var avgB = 0;
var avgC = 0;
var avgD = 0;
	//loop the data passed
for (var key_getLastMonthReading in result_getLastMonthReading) {
	if (result_getLastMonthReading.hasOwnProperty(key_getLastMonthReading)) {
		//variable definitions and values
		var readingA = result_getLastMonthReading[key_getLastMonthReading].readingA;
		var readingB = result_getLastMonthReading[key_getLastMonthReading].readingB;
		var readingC = result_getLastMonthReading[key_getLastMonthReading].readingC;
		var readingD = result_getLastMonthReading[key_getLastMonthReading].readingD;
		avgA = avgA + parseFloat(readingA);
		avgB = avgB + parseFloat(readingB);
		avgC = avgC + parseFloat(readingC);
		avgD = avgD + parseFloat(readingD);
	}
}
var datasetJson ='[{"label": "'+readingATitle+'","value": "'+parseFloat(avgA / result_getLastMonthReading.length)+'"},{"label": "'+readingBTitle+'","value": "'+parseFloat(avgB / result_getLastMonthReading.length)+'"},{"label": "'+readingCTitle+'","value": "'+parseFloat(avgC / result_getLastMonthReading.length)+'"},{"label": "'+readingDTitle+'","value": "'+parseFloat(avgD / result_getLastMonthReading.length)+'"}]';
  var LastMonthReadingChart = new FusionCharts({
    type: 'pie2d',
    renderAt: 'ObjectPieChart',
    width: '100%',
    dataFormat: 'json',
    dataSource: {
      "chart": {
				"bgColor": "#f7f7f8",
        "caption": "Time-of-Use Summary",
        "subCaption": "",
        "numberPrefix": "",
        "startingAngle": "20",
        "showPercentValues": "0",
        "showPercentInTooltip": "0",
				"showNames":"0",
				"showLabels":"0",
				"showValues":"0",
        "decimals": "1",
        "useDataPlotColorForLabels": "1",
				"legendPosition": "right-top",
				"legendAllowDrag": "0",
        //Theme
        "theme": "fusion",
        "tooltipBorderRadius": "20"
				
      },
      "data": JSON.parse(datasetJson)
    }
  }).render();
}

return restAPICallObjectPieChart("GET", url_getLastMonthReading, "");