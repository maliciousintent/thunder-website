/*jshint browser:true, indent:2, laxcomma:true, loopfunc: true */
/*global NodeList, HTMLCollection */

(function () {

  'use strict';

  $('#bar-1').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        title: {
            style: { color: '#FFF', fontSize: '12px'},
            text: 'Total Dollars'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['Total Dollars'],
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            labels: {
                enabled: false
            },
            minorTickLength: 0,
            tickLength: 0
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            lineWidth: 0,
            minorGridLineWidth: 0,
            gridLineColor: 'transparent',
            labels: {
                enabled: false
            },
            minorTickLength: 0,
            tickLength: 0,
        },
        tooltip: {
          enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
              dataLabels: {
                color: '#FFF',
                enabled: true,
                format: '${point.y:.f}M'
              }
            }
        },
        series: [{
            name: 'Kickstarter',
            data: [751]

        }, {
            name: 'Indiegogo',
            data: [193]

        }]
    });

  $('#bar-2').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        title: {
            style: { color: '#FFF', fontSize: '12px'},
            text: 'Successful Dollars'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['Successful Dollars'],
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            labels: {
                enabled: false
            },
            minorTickLength: 0,
            tickLength: 0
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            lineWidth: 0,
            minorGridLineWidth: 0,
            gridLineColor: 'transparent',
            labels: {
                enabled: false
            },
            minorTickLength: 0,
            tickLength: 0,
        },
        tooltip: {
          enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
              dataLabels: {
                color: '#FFF',
                enabled: true,
                format: '${point.y:.f}M'
              }
            }
        },
        series: [{
            name: 'Kickstarter',
            data: [642]

        }, {
            name: 'Indiegogo',
            data: [99]

        }]
    });

  $('#bar-3').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        title: {
            style: { color: '#FFF', fontSize: '12px'},
            text: 'Unsuccessful Dollars'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['Unsuccessful Dollars'],
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            labels: {
                enabled: false
            },
            minorTickLength: 0,
            tickLength: 0
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            lineWidth: 0,
            minorGridLineWidth: 0,
            gridLineColor: 'transparent',
            labels: {
                enabled: false
            },
            minorTickLength: 0,
            tickLength: 0,
        },
        tooltip: {
          enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
              dataLabels: {
                color: '#FFF',
                enabled: true,
                format: '${point.y:.f}M'
              }
            }
        },
        series: [{
            name: 'Kickstarter',
            data: [83]

        }, {
            name: 'Indiegogo',
            data: [71]

        }]
    });

  $('#bar-4').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        title: {
            style: { color: '#FFF', fontSize: '12px'},
            text: 'Live Dollars'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['Live Dollars'],
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            labels: {
                enabled: false
            },
            minorTickLength: 0,
            tickLength: 0
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            lineWidth: 0,
            minorGridLineWidth: 0,
            gridLineColor: 'transparent',
            labels: {
                enabled: false
            },
            minorTickLength: 0,
            tickLength: 0,
        },
        tooltip: {
          enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
              dataLabels: {
                color: '#FFF',
                enabled: true,
                format: '${point.y:.f}M'
              }
            }
        },
        series: [{
            name: 'Kickstarter',
            data: [26]

        }, {
            name: 'Indiegogo',
            data: [22]

        }]
    });

  $('#bar-5').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        title: {
            style: { color: '#FFF', fontSize: '12px'},
            text: 'Success Rate'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['Success Rate'],
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            labels: {
                enabled: false
            },
            minorTickLength: 0,
            tickLength: 0
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            lineWidth: 0,
            minorGridLineWidth: 0,
            gridLineColor: 'transparent',
            labels: {
                enabled: false
            },
            minorTickLength: 0,
            tickLength: 0,
        },
        tooltip: {
          enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
              dataLabels: {
                color: '#FFF',
                enabled: true,
                format: '{point.y:.f} %'
              }
            }
        },
        series: [{
            name: 'Kickstarter',
            data: [44]

        }, {
            name: 'Indiegogo',
            data: [33]

        }]
    });


 $('#bar-0').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        title: {
            style: { color: '#FFF', fontSize: '12px'},
            text: 'Launched Projects'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['Launched Projects'],
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            labels: {
                enabled: false
            },
            minorTickLength: 0,
            tickLength: 0
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            lineWidth: 0,
            minorGridLineWidth: 0,
            gridLineColor: 'transparent',
            labels: {
                enabled: false
            },
            minorTickLength: 0,
            tickLength: 0,
        },
        tooltip: {
          enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
              dataLabels: {
                color: '#FFF',
                enabled: true,
                format: '{point.y:.f}'
              }
            }
        },
        series: [{
            name: 'Kickstarter',
            data: [110583]

        }, {
            name: 'Indiegogo',
            data: [44498]

        }]
    });

/*

TOP PROJECTS
 */
    Highcharts.data({
        csv: document.getElementById('tsv').innerHTML,
        itemDelimiter: '##',
        parsed: function (columns) {
            console.log(columns);
            var brands = {},
            brandsData = [],
                versions = {},
                drilldownSeries = [];

            // Parse percentage strings
            columns[1] = $.map(columns[1], function (value) {
                //if (value.indexOf('%') === value.length - 1) {
                value = parseFloat(value);
                //}
                return value;
            });

            $.each(columns[0], function (i, name) {
                var brand,
                version;

                if (i > 0) {

                    // Remove special edition notes
                    name = name.split(' -')[0];

                    // Split into brand and version
                    version = name.match(/(gadget|intangible)/);
                    if (version) {
                        version = version[0];
                    }
                    brand = name.replace(version, '');

                    // Create the main data
                    if (!brands[brand]) {
                        brands[brand] = columns[1][i];
                    } else {
                        brands[brand] += columns[1][i];
                    }

                    // Create the version data
                    if (version !== null) {
                        if (!versions[brand]) {
                            versions[brand] = [];
                        }
                        versions[brand].push([version, columns[1][i]]);
                    }
                }

            });

            $.each(brands, function (name, y) {
                brandsData.push({
                    name: name,
                    y: y,
                    drilldown: versions[name] ? name : null
                });
            });
            $.each(versions, function (key, value) {
                drilldownSeries.push({
                    name: key,
                    id: key,
                    data: value
                });
            });

            // Create the chart
            $('#top-projects').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Raised'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.f} $'
                        }
                    },
                    column: {
                        colors: ['#d4173f', '#f15a25', '#f99422', '#f9bb18']
                    }
                },

                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.f}</b>$<br/>'
                },

                series: [{
                    name: 'Campaign',
                    colorByPoint: true,
                    data: brandsData
                }],
                drilldown: {
                    series: drilldownSeries
                }
            })

        }
    });
})();