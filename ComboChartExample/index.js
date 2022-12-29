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
var sYAxisName = "Axis Y Var 2";
var pYAxisName = "Axis Y";
var xAxisName = "Axis X";
var chartCaption="Utilities Consumption";
/*
Function to fetch the data from rest API, Calltype is "GET/POST/PUT" etc, CAll URL is the rest API url to be passed. 
It inturn call loadObjectStackedChartif the API call return valid Response
*/
function restAPICallObjectComboChart(callType, CallUrl, CallData){
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
            loadObjectComboChart(data.items);
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
function loadObjectComboChart(returnData){

    var arrCategoriesDts = [];
    var arrD = [];
    var arrA = [];
    var arrB = [];
    var arrC = [];
	//loop the data passed
    for (var key_getLastMonthReading in returnData) {
        if (returnData.hasOwnProperty(key_getLastMonthReading)) {
            //variable definitions and values
            var billDate = returnData[key_getLastMonthReading].month +" "+ returnData[key_getLastMonthReading].year;
            var readingA = returnData[key_getLastMonthReading].readingA;
            var readingB = returnData[key_getLastMonthReading].readingB;
            var readingC = returnData[key_getLastMonthReading].readingC;
            var readingD = returnData[key_getLastMonthReading].readingD;
            var billDt = billDate;
            //creates new row for the data table
            var trelec = "<tr><td>"+billDate+"</td><td>"+readingA+"</td><td>"+readingB+"</td><td>"+readingB+"</td><td>"+readingD+"</td></tr>";
            tbody.innerHTML += trelec;
            //creates a multidimentional structured arrays and append values to it
            var newObjLabel = {
                label: billDt
            };
            arrCategoriesDts.push(newObjLabel);
            
            var newObjTemperature = {
                value: parseFloat(readingD)
            };
            arrD.push(newObjTemperature);
            
            var newObjElecConsumption = {
                value: parseFloat(readingA)
            };
            arrA.push(newObjElecConsumption);
            
            var newObjWaterConsumption = {
                value: parseFloat(readingB)
            };
            arrB.push(newObjWaterConsumption);
            
            var newObjGasConsumption = {
                value: parseFloat(readingC)
            };
            arrC.push(newObjGasConsumption);
        }
    }
	//json for categories to be shown on x axis
    var categoriesJson = '[{"category": '+JSON.stringify(arrCategoriesDts)+'}]';
  //json for data to be shown on y axis  
	var datasetJson = '[{"seriesName": "'+readingATitle+'", "showValues": "0", "data": '+JSON.stringify(arrA)+'},{"seriesName": "'+readingBTitle+'", "showValues": "0", "data": '+JSON.stringify(arrB)+'},{"seriesName": "'+readingCTitle+'", "showValues": "0", "data": '+JSON.stringify(arrC)+'}, {"seriesName": "'+readingDTitle+'", "showValues": "0", "renderAs": "line", "data": '+JSON.stringify(arrD)+'}]';
    var chartvars = '{"caption": "'+chartCaption+'", "labelDisplay": "rotate", "slantLabel": "1", "showValues": "0", "xAxisname": "'+xAxisName+'", "pYAxisName": "'+pYAxisName+'", "sYAxisName": "'+sYAxisName+'", "sNumberSuffix": "°C", "formatNumberScale": "0", "decimalSeparator": ".", "maxColWidth": "25", "theme": "fusion", "allowAxisShift":"0", "divlineThickness": "2", "rotateValues":"1", "syncAxisLimits":"1", "showValues": "0"}';
     //Creates fusionchart with created categories and data jsons
    var chartObj = new FusionCharts({
        type: 'mscombidy2d',
        renderAt: 'ObjectComboChart',
        width: '100%',
        height: '500',
        dataFormat: 'json',
        dataSource: {
            "chart": JSON.parse(chartvars),
            "categories": JSON.parse(categoriesJson),
            "dataset": JSON.parse(datasetJson)
        }
    });
    chartObj.render();
	//convert table to datatable
    $('#occTable').DataTable({
        "paging": true,
        "order": []
    });
    $('.dataTables_length').addClass('bs-select');
}

restAPICallObjectComboChart("GET", url_getLastMonthReading, "");