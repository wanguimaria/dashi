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
          height: 430
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