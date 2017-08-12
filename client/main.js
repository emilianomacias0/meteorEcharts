Template.home.onRendered(function(){
//invoca las graficas al dibujar el template home
  char1();
  char2();
  char3();
  char4();

});


char3 = function(){
  //inicializa el objeto y elegiendo el canvas base al id del elemento en el template home graf3
  var myChart = echarts.init(document.getElementById('graf3'));

  //se genera el bjeto options
  option = {
    title : {
      text: 'Ventas',
      subtext: 'Deportes',
      x:'center'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x:'left',
      y:'bottom',
      data: ['Pantalon','Playera','Chamarra','Sudadera','Tennis']
    },
    series : [
      {
        name: 'productos',
        type: 'pie',
        radius : '55%',
        center: ['50%', '60%'],
        data:[
          {value:335, name:'Pantalon'},
          {value:310, name:'Playera'},
          {value:234, name:'Chamarra'},
          {value:135, name:'Sudadera'},
          {value:1548, name:'Tennis'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  //sele pasan las opciones a la grafica
  myChart.setOption(option);

}

char1 = function(){
  // based on prepared DOM, initialize echarts instance
  var myChart = echarts.init(document.getElementById('graf1'));

  // specify chart configuration item and data
  var option = {
    title: {
      show:false,
      text: 'Ventas de Agosto',
      target: 'self',
      link: '/clientes',
      textAlign: 'left',
      textBaseline: 'middle',
      textStyle: {

        color: '#333',
        fontStyle: 'normal',
        fontWeight: 'bolder',
        fontFamily: 'sans-serief',
        fontSize: 18,
      },

    },
    tooltip: {},
    legend: {
      data: ['Ventas'],
      orient:'vertical'
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      feature: {
        dataView: { show: true, title: 'Datos', readOnly: true, lang: ['Datos', 'Salir', 'Actualizar'] },
        saveAsImage: { show: true, title: 'Descargar' },
        magicType: { show: true, title: { line: 'Lineal', bar: 'Barras' }, type: ['line', 'bar'] }
      }
    },
    xAxis: {
      data: ["shirt", "cardign", "chiffon shirt", "pants", "heels", "socks"],
      axisLabel:{
        rotate: -70,
        textStyle:{
          textSize : 5
        },
      }
    },
    yAxis: {},
    series: [{
      name: 'Ventas',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };

  // use configuration item and data specified to show chart
  myChart.setOption(option);
}


char2 = function(){
  var myChart = echarts.init(document.getElementById('graf2'));
  option = {
    legend: {
      data:['Temperatura']
    },
    tooltip: {
      trigger: 'axis',
      formatter: "Temperature : <br/>{b}km : {c}°C"
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    yAxis: {
      type: 'category',
      axisLine: {onZero: false},
      axisLabel: {
        formatter: '{value} km'
      },
      boundaryGap: false,
      data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
    },
    series: [
      {
        name: 'Temperatura',
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            width: 3,
            shadowColor: 'rgba(0,0,0,0.4)',
            shadowBlur: 10,
            shadowOffsetY: 10
          }
        },
        data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
      }
    ]
  }
  myChart.setOption(option);
}

char4 = function(){

  var myChart = echarts.init(document.getElementById('graf4'));
  option = {
    title: {
      text: '堆叠区域图'
    },
    tooltip : {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'],
      orient:'horizontal',
      y: 'bottom',
      x: 'right',
      padding:[-35,15,15,15]

    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        data : ['周一','周二','周三','周四','周五','周六','周日']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'邮件营销',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'联盟广告',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'视频广告',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[150, 232, 201, 154, 190, 330, 410]
      },
      {
        name:'直接访问',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[320, 332, 301, 334, 390, 330, 320]
      },
      {
        name:'搜索引擎',
        type:'line',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: {normal: {}},
        data:[820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };
  myChart.setOption(option);
}