var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function sidebarOpen() {
	if (!sidebarOpen) {
		sidebar.classList.add("sidebar-responsive");
		sidebarOpen = true;
	}
	// body...
}
function closeSidebar(){
	if (sidebarOpen) {
		sidebar.classList.remove("sidebar-responsive");
		sidebarOpen=false;
	}
}

        
// barcharts
      
        var barChartOptions = {
          series: [{
          data: [44, 55, 41, 64, 22, 43, 21]
        }, {
          data: [53, 32, 33, 52, 13, 44, 32]
        }],
          chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            verticle: true,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        xaxis: {
          categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
        },
        };

        var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
        barChart.render();


        //area chart

      

      
        var areaChartOptions = {
          series: [{
          name: 'sales',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'purchases',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
          chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        };

        var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
        areaChart.render();
        
