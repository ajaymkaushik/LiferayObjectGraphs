//var uname="ajay.kaushik@liferay.com";
//var pswd="portal4all";
var site_id = themeDisplay.getSiteGroupId();
var currentUrl = Liferay.currentURL;
var currentSiteUrl = themeDisplay.getPortalURL();
var url_getLastMonthReading = currentSiteUrl +"/o/c/readings/scopes/"+site_id+"?pageSize=400&sort=dateCreated:desc";
var readingATitle = "Var A";
var readingBTitle = "Var B";
var readingCTitle = "Var C";
var readingDTitle = "Var D";
var sYAxisName = "Axis Y Var 2";
var pYAxisName = "Axis Y";
var xAxisName = "Axis X";
var chartCaption="Utilities Consumption";
/*
function serverCall(type_param, url_param, data_param){
	var return_data;
	jQuery.ajax({
		type: type_param,
		contentType: 'application/json',
		url: url_param,
		data: data_param,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type':'application/json',
			"Authorization":"Basic "+btoa(uname + ':' + pswd),
		},
		dataType: "json",
		async: false,
		success: function (data) {
			if(type_param=="POST"){
				return_data = data;
			} else {
				return_data = data.items;
			}
		},
		error: function (xhr, err) {
			console.log(xhr.statusText);
			console.log(err);
		}
	});
	return return_data;
}
*/
function restAPICallObjectStackedChart(callType, CallUrl, CallData){
	
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
			console.log(data.items);
            loadObjectStackedChart(data.items);
    })
    .catch((error) => {
        console.log(error);
        Liferay.Util.openToast({
            message: 'An error occured.',
            type: 'danger',
        });
    });
}
function loadObjectStackedChart(result_getLastMonthReading){
var arrReadings = [];
for (var key_getLastMonthReading in result_getLastMonthReading) {
	if (result_getLastMonthReading.hasOwnProperty(key_getLastMonthReading)) {
		var billDate = result_getLastMonthReading[key_getLastMonthReading].month +" "+ result_getLastMonthReading[key_getLastMonthReading].year;
		var readingA = result_getLastMonthReading[key_getLastMonthReading].readingA;
		var readingB = result_getLastMonthReading[key_getLastMonthReading].readingB;
		var readingC = result_getLastMonthReading[key_getLastMonthReading].readingC;
		var readingD = result_getLastMonthReading[key_getLastMonthReading].readingD;
		var billDt = billDate;
		var newArr = [billDt, readingATitle, readingA];
		arrReadings.push(newArr);
		var newArr = [billDt, readingBTitle, readingB];
		arrReadings.push(newArr);
		var newArr = [billDt, readingCTitle, readingC];
		arrReadings.push(newArr);
	}
}

const data = arrReadings;
    const schema = [{
      "name": "Date",
      "type": "date"
    },
    {
      "name": "Period of the day",
      "type": "string",
			"paletteColor": "#29c3be"
    },
    {
      "name": "Consumption",
      "type": "number",
			"paletteColor": "#f1f718"
    }
    ];
  
    const dataStore = new FusionCharts.DataStore();
    const dataSource = {
      chart: {"canvasBgAlpha":"100", "legendBgAlpha":"100", "bgAlpha":"100"},
			"canvasBgAlpha":"100", "legendBgAlpha":"100", "bgAlpha":"100",
      caption: {
        text: ""
      },
      subcaption: {
        text: ""
      },
      series: "Period of the day",
      navigator: {
        enabled: 0
      },
       xAxis: {
           binning: {
              year: [],
              month: [1],
              day: [],
              hour: [],
              minute: [],
              second: [],
              millisecond: [],
           },
        },
      yaxis: [
        {
          plot: [
            {
              value: "Consumption",
              type: "column"
            }
          ],
          title: "",
          format: {
            suffix: ""
          }
        }
      ]
    };
    dataSource.data = dataStore.createDataTable(data, schema);
  
    new FusionCharts({
      type: "timeseries",
      renderAt: "ObjectStackedChart",
			containerBackgroundOpacity:0,
      width: "100%",
      height: "500",
      dataSource: dataSource
    }).render();
}
restAPICallObjectStackedChart("GET", url_getLastMonthReading, "");