/**
 * init
 */
window.EchartsOption = {
    //旅游收入同比
    incomeRatio : {
        backgroundColor: 'rgba(0,3,35,0.6)',
        legend: {
            top: 20,
            right:10,
            textStyle: {
                color: '#8AC5FF',
            },
            data: ['2017', '2018', '2019']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {
            show: "true",
            trigger: 'axis',
            backgroundColor: 'rgba(0,0,0,0.7)', // 背景
            padding: [8, 10], //内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
            formatter: function(params) {
                //return params.name + '月份：<br>' + params.seriesName + ' ： 第 ' + params.value + ' 名';
                var res='<div><p>'+params[0].name+'月:</p></div>';
                var colorArr = ['#FF106E', '#4365F3', '#911CF5'];
                for(var i=0;i<params.length;i++){
                    res+='<p>'+params[i].seriesName+'年:'+params[i].data+'%</p>';
                }
                return res;
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#363e83',
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#363e83 ',
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#8AC5FF',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                formatter: '{value}%'
            },
        },
        xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#363e83',
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#8AC5FF',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                // formatter:function(val){
                //     return val.split("").join("\n")
                // },
            },
            data: ['1', '2', '3', '4', '5','6','7','8','9','10','11','12']
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ['1', '2', '3', '4', '5','6','7','8','9','10','11','12']
        },

        ],
        series: [ {
            name: '2017',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00FCE5'
                    }, {
                        offset: 1,
                        color: '#057DC6'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barWidth: '10%',
            data: [8, 15, 10,23,45,34,56,32,45,67,54,45]
        }, {
            name: '2018',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3525AF'
                    }, {
                        offset: 1,
                        color: '#C66BD7'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barGap: '100%',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0]
        }, {
            name: '2019',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#F66187'
                    }, {
                        offset: 1,
                        color: '#A64CBE'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barGap: '100%',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0]
        }

        ]
    },
    //接待人数同比
    receptionNum: {
        backgroundColor: 'rgba(0,3,35,0.6)',
        grid: {
            left: '30',
            right: '30',
            bottom: '20',
            containLabel: true
        },
        tooltip : {
            show: "true",
            trigger: 'axis',
            backgroundColor: 'rgba(0,0,0,0.7)', // 背景
            padding: [8, 10], //内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
            formatter: function(params) {
                //return params.name + '月份：<br>' + params.seriesName + ' ： 第 ' + params.value + ' 名';
                var res='<div><p>'+params[0].name+'月:</p></div>';
                var colorArr = ['#FF106E', '#4365F3', '#911CF5'];
                for(var i=0;i<params.length;i++){
                    res+='<p>'+params[i].seriesName+'年:'+params[i].data+'%</p>';
                }
                return res;
            }
        },
        legend: {
            show:true,
            right: '30',
            //orient: 'vertical',
            //x:'center',
            y:'20',
            //icon: 'stack',
            itemWidth:15,
            itemHeight:15,
            textStyle:{
                color:[],
                fontSize:13
            },
            nameTextStyle :{
                color:'#8AC5FF'
            },
            data:['2017','2018','2019']
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLabel:{
                    color: '#8AC5FF',
                    fontSize:14
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#132C46'
                    }
                },
                axisTick:{
                    show:false,
                },
                splitLine:{
                    show:false,
                    lineStyle:{
                        color:'#132C46'
                    }
                },
                data : ['1','2','3','4','5','6','7','8','9','10','11','12']
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : '',
                nameTextStyle:{
                    color:'#8AC5FF',
                    fontSize:12
                },
                axisLabel : {
                    formatter: '{value}%',
                    textStyle:{
                        color:'#8AC5FF',
                        fontSize:14
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#132C46'
                    }
                },
                axisTick:{
                    show:false,
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#132C46'
                    }
                }
            }
        ],
        series : [
            {
                name:'2017年',
                type:'line',
                symbol:'circle',
                symbolSize: 5,
                smooth:true,  //这个是把线变成曲线
                itemStyle: {
                    normal: {
                        color:'#694ABB',
                        lineStyle: {
                            color: "#694ABB",
                            width:1
                        }
                    }
                },
                areaStyle: {
                    //color: '#94C9EC'
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#694ABB'
                    }, {
                        offset: 1,
                        color: '#A281DF'
                    }]),
                },
                data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0]
            },
            {
                name:'2018年',
                type:'line',
                symbol:'circle',
                symbolSize: 5,
                smooth:true,  //这个是把线变成曲线
                itemStyle: {
                    normal: {
                        color:'#02C4FB',
                        lineStyle: {
                            color: "#02C4FB",
                            width:1
                        }
                    }
                },
                areaStyle: {
                    //color: '#94C9EC'
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#02C4FB'
                    }, {
                        offset: 1,
                        color: '#0192F6'
                    }]),
                },
                data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0]
            },
            {
                name:'2019年',
                type:'line',
                symbol:'circle',
                symbolSize: 5,
                smooth:true,  //这个是把线变成曲线
                itemStyle: {
                    normal: {
                        color:'#028687',
                        lineStyle: {
                            color: "#028687",
                            width:1
                        }
                    }
                },
                areaStyle: {
                    //color: '#94C9EC'
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#028687'
                    }, {
                        offset: 1,
                        color: '#004646'
                    }]),
                },
                data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0]
            }
        ]
    },
    //游客年龄占比
    ageRatio:{
        backgroundColor: 'rgba(0,3,35,0.6)',
        grid: {
            left:50,
            right:30,
            bottom:100
        },
        tooltip:{
            trigger: 'axis',
            formatter:function(params){
                var res=params[0].name.replace(",|,","~")+":<br>";
                res+='<p>'+params[0].data+'%</p>';
                return res;
            },
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#363e83 ',
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#8AC5FF',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                formatter:function(val){
                    return val+'%';
                },
            },
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#8AC5FF',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                formatter:function(val){
                    return val.split(",").join("\n\n")
                },
            },
            data: ['0,|,18', '18,|,25', '25,|,35','35,|,45', '45,|,55', '55,|,60','60,|,以上']
        },
        series:
            {
                type: 'line',
                symbol:'circle',
                symbolSize:8,
                smooth: true,
                itemStyle: {
                    normal: {
                        show: true,
                        color: '#A81D69',
                        lineStyle:{
                            color: '#A81D69'
                        }
                    },
                },
                areaStyle: {
                    color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#A81D69'
                    }, {
                        offset: 1,
                        color: '#000000'
                    }])
                },
                zlevel: 1,
                data: [0, 0, 0, 0, 0, 0, 0]
            }
    },
    hotelOccupancyRatio:{
        backgroundColor: 'rgba(0,3,35,0.6)',
        title: {
            text: "0%",
            x: 'center',
            y: 'center',
            textStyle: {
                color: "#fff",
                fontSize: 20,
                fontWeight: 'normal'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params){
                if(params.name === '入住'){
                    return "入住率 <br/>"+params.name+" :"+params.value+" 间";
                }else{
                    return "空闲率 <br/>"+params.name+" :"+params.value+" 间";
                }
            }
        },
        calculable: true,
        series: [
            {
                name: '入住率',
                type: 'pie',
                radius: [50, 65],
                center: ['50%', '50%'],
                data: [{
                    value: 0,
                    name: '入住',
                    itemStyle: {

                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#f6e3a1'
                        }, {
                            offset: 1,
                            color: '#ff4236'
                        }])
                    },
                    label: {
                        color: "rgba(255,255,255,.45)",
                        fontSize: 14,
                        formatter: '入住',
                        rich: {
                            a: {
                                color: "#fff",
                                fontSize: 20,
                                lineHeight: 30
                            },
                        }
                    }
                },
                    {
                        value: 0,
                        name: '空闲',
                        itemStyle: {
                            color: "transparent"
                        }
                    }
                ]
            },
            {
                name: '空闲率',
                type: 'pie',
                radius: [55, 60],
                center: ['50%', '50%'],
                data: [{
                    value: 0,
                    name: '入住',
                    itemStyle: {
                        color: "transparent"
                    }
                },
                    {
                        value: 0,
                        name: '空闲',
                        itemStyle: {

                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: '#348fe6'
                            }, {
                                offset: 1,
                                color: '#625bef'
                            }])
                        },
                        label: {
                            color: "rgba(255,255,255,.45)",
                            fontSize: 14,
                            formatter: '空闲',
                            rich: {
                                a: {
                                    color: "#fff",
                                    fontSize: 20,
                                    lineHeight: 30
                                },
                            }
                        }
                    }
                ]
            }
        ]
    },
    //车源地排行
    carSourceRanking: {
        backgroundColor: 'rgba(0,3,35,0.6)',
        legend: {
            top: 20,
            right:15,
            textStyle: {
                color: ['01FDFD','#2A0A33'],
            }
        },
        grid: {
            left:20,
            right:20
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true,
                    backgroundColor: '#333'
                }
            },
            formatter:function(params){
                var a = '';
                var b = '';
                params.forEach(function (v,key) {
                    if(key === 0){
                        a = v.name.split(',');
                    }
                    b += '<br>'+v.seriesName+'年:'+v.value+'辆';
                });
                return a[0]+':'+b;
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#363e83 ',
                }
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#8AC5FF',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
            },
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#8AC5FF',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                formatter:function(val){
                    return val.split(",").join("\n\n")
                },
            },
            data: ['未知,0%', '未知,0%', '未知,0%','未知,0%', '未知,0%', '未知,0%','未知,0%', '未知,0%', '未知,0%','未知,0%']
        },
        series: [
            {
                name: '2018年',
                type: 'line',
                symbol:'circle',
                symbolSize:8,
                itemStyle: {
                    normal: {
                        show: true,
                        color: '#694ABB',
                        lineStyle:{
                            color: '#694ABB'
                        }
                    },
                },
                areaStyle: {
                    color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#2A0A33'
                    }, {
                        offset: 1,
                        color: '#5E4DB6'
                    }])
                },
                zlevel: 1,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: '2019年',
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#01FDFD'
                        }, {
                            offset: 1,
                            color: '#0088FF'
                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                },
                zlevel: 2,
                barWidth: '30%',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }

        ]
    },
    //游客性别比
    sexualPie: {
        color:['#7743FE','#FF3FB6'],
        backgroundColor: 'rgba(0,3,35,0.6)',
        title: {
            text: '2019',
            textStyle: {
                color: '#fff',
                fontSize: 20,
                // align: 'center'
            },
            x: 'center',
            y: 'center',
        },
        tooltip: {
            trigger: "item",
            formatter: "{b} : 占比{d}%"
        },
        grid: {
            top: 50
        },
        legend:{
          bottom:20,
          textStyle: {
              color: [],
          },
        },
        series: [
            {
                type: "pie",
                radius: ["30%", "50%"],
                center: ["50%", "50%"],
                //color: ["#02CE61", "#FF3DBB"],
                data: [
                    {
                        value: 0,
                        name: "男性",
                        itemStyle: {
                            /*color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "rgba(119,67,254,.1)" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(119,67,254,1)" // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            }*/
                            color:"#7743FE"
                        },
                        label: {
                            rich: {
                                color:'#7743FE'
                            }
                        },
                    },
                    {
                        value: 0,
                        name: "女性",
                        itemStyle: {
                            /*color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "rgba(255,63,182,1)" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(255,63,182,.1)" // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            }*/
                            color:"#FF3FB6"
                        }
                    }
                ],
                itemStyle: {
                    normal: {}
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 20,
                        length2: 10
                    }
                },
                label: {
                    normal: {
                        formatter: "{c|{d}%}",
                        rich: {
                            c: {
                                fontSize: 12,
                                align: "top",
                                color: ['#7743FE','#FF3FB6'],
                                padding: [0, 0, 0, 0],
                                lineHeight: 30
                            }
                        }
                    }
                }
            }
        ]
    },
    //团散比
    bartszb:{
        backgroundColor: 'rgba(0,3,35,0.6)',
        legend: {
            data: ['散客', '团客'],
            bottom: 20,
            textStyle: {
                color: [],
            },
        },
        grid: [{
            show: false,
            left: 0,
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '40%',
        }, {
            show: false,
            left: '57%',
            top: 80,
            bottom: 60,
            width: '0%',
        }, {
            show: false,
            right: 0,
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '40%',
        }, ],

        xAxis: [{
            type: 'value',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            show: false,
            position: 'top',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#B2B2B2',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#1F2022',
                    width: 1,
                    type: 'solid',
                },
            },
        }, {
            gridIndex: 1,
            show: false,
        }, {
            gridIndex: 2,
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            show: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#B2B2B2',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#1F2022',
                    width: 1,
                    type: 'solid',
                },
            },
        }, ],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                margin: 8,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: [],
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: [2017, 2018, 2019],
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: [2017, 2018, 2019],
        }, ],
        series: [{
            name: '散客',
            type: 'bar',
            barGap: 10,
            barWidth: 10,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle:{
                        color:"#9A15F3"
                    },
                    formatter: "{c}%",
                },
                emphasis: {
                    show: true,
                    position: 'top',
                    offset: [0, 0],
                    textStyle: {
                        color: '#fff',
                        fontSize: 14,
                    },
                },
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#9A15F3'
                    }, {
                        offset: 1,
                        color: '#4785E1'
                    }]),
                    barBorderRadius: [10, 0, 0, 10]
                },
                emphasis: {
                    color: '#9A15F3',
                },
            },
            data: [0, 0, 0],
        },
            {
                name: '团客',
                type: 'bar',
                barGap: 10,
                barWidth: 10,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle:{
                            color:"#F76388"
                        },
                        formatter: "{c}%",
                    },
                    emphasis: {
                        show: true,
                        position: 'top',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#F76388'
                        }, {
                            offset: 1,
                            color: '#E88AA0'
                        }]),
                        barBorderRadius: [0, 10, 10, 0]
                    },
                    emphasis: {
                        color: '#F76388',
                    },
                },
                data: [0, 0, 0],
            }
        ],

    },
    //客源地
    touristmap: {
        backgroundColor: "rgba(0,3,35,0.6)",
        geo: {
            show: true,
            map: "china",
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            zoom: 1.23,
            itemStyle: {
                normal: {
                    areaColor: "#10173c",
                    borderColor: "#090918"
                },
                emphasis: {
                    areaColor: "#2a333d"
                }
            }
        },
        series: [],
        visualMap: {
            left: 'left',
            itemWidth:12,
            itemHeight:80,
            min: 0,
            max: 4000,
            inRange: {
                color: ['#172A79','#496EFF','#FF106E']
            },
            text: ['高', '低'],// 文本，默认为数值文本
            calculable: true,
            seriesIndex: 0,
            textStyle:{
                color:'rgba(255,255,255,.7)'
            }
        },
        tooltip: {
            trigger: "item",
            show:true,
            formatter: function (params) {
                if(!params.value) return '';
                return params.name + "-->青铜峡 " + params.value + "人";
            }
        }
    },
    //票种比
    ticketTypeRatio:{
        backgroundColor: "rgba(0,3,35,0.6)",
        color: ['#00c2ff', '#f9cf67', '#e92b77'],
        tooltip:{
            trigger:'item',
            formatter:function(params){
                var str = params.name+"<br>";
                str += "学生票:"+params.value[0]+"%<br>";
                str += "优惠票:"+params.value[1]+"%<br>";
                str += "全票:"+params.value[2]+"%<br>";
                str += "本地票:"+params.value[3]+"%<br>";
                str += "免票:"+params.value[4]+"%<br>";
                return str;
            }
        },
        legend: {
            show: true,
            icon: 'circle',//图例形状
            orient: 'vertical',
            bottom: 90,
            right: 10,
            itemWidth: 10, // 图例标记的图形宽度。[ default: 25 ]
            itemHeight: 10, // 图例标记的图形高度。[ default: 14 ]
            itemGap: 15, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
            textStyle: {
                fontSize: 12,
                color: '#ade3ff'
            },
        },
        radar: {
            indicator: [{
                text: '学生票',
                max: 100
            },
                {
                    text: '优惠票',
                    max: 100
                },
                {
                    text: '全票',
                    max: 100
                },
                {
                    text: '本地票',
                    max: 100
                },
                {
                    text: '免票',
                    max: 100
                }
            ],

            textStyle: {
                color: 'red'
            },
            center: ['45%', '60%'],
            radius: 80,
            startAngle: 90,
            splitNumber: 3,
            orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
            // shape: 'circle',
            // backgroundColor: {
            //     image:imgPath[0]
            // },
            name: {
                formatter: '{value}',
                textStyle: {
                    fontSize: 14, //外圈标签字体大小
                    color: '#5b81cb' //外圈标签字体颜色
                }
            },
            splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: { // 分隔区域的样式设置。
                    color: ['#141c42', '#141c42'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                }
            },
            // axisLabel:{//展示刻度
            //     show: true
            // },
            axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                    color: '#153269'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#113865', // 分隔线颜色
                    width: 1, // 分隔线线宽
                }
            }
        },
        series: [{
            name: '雷达图',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    lineStyle: {
                        width: 4
                    }
                }
            },
            data: [{
                name: '2017',
                value: [85, 65, 55, 90, 82],
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: {
                            type: 'linear',
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [{
                                offset: 0,
                                color: '#00c2ff'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: '#00c2ff'
                            }],
                            globalCoord: false
                        },
                        opacity: 1 // 区域透明度
                    }
                },
                symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                itemStyle: {
                    normal: { //图形悬浮效果
                        borderColor: '#00c2ff',
                        borderWidth: 2.5
                    }
                },
                // lineStyle: {
                //     normal: {
                //         opacity: 0.5// 图形透明度
                //     }
                // }
            }, {
                name: '2018',
                value: [50, 20, 45, 30, 75],
                symbolSize: 2.5,
                itemStyle: {
                    normal: {
                        borderColor: '#f9cf67',
                        borderWidth: 2.5,
                    }
                },
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: {
                            type: 'linear',
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [{
                                offset: 0,
                                color: '#f9cf67'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: '#f9cf67'
                            }],
                            globalCoord: false
                        },
                        opacity: 1 // 区域透明度
                    }
                },
                // lineStyle: {
                //     normal: {
                //         opacity: 0.5// 图形透明度
                //     }
                // }
            }, {
                name: '2019',
                value: [37, 80, 12, 50, 25],
                symbolSize: 2.5,
                itemStyle: {
                    normal: {
                        borderColor: '#e92b77',
                        borderWidth: 2.5,
                    }
                },
                label: {                    // 单个拐点文本的样式设置
                    normal: {
                        show: true,             // 单个拐点文本的样式设置。[ default: false ]
                        position: 'top',        // 标签的位置。[ default: top ]
                        distance: 2,            // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                        color: '#6692e2',          // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                        fontSize: 10,           // 文字的字体大小
                        formatter:function(params) {
                            return params.value+'%';
                        }
                    }
                },
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: {
                            type: 'linear',
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [{
                                offset: 0,
                                color: '#e92b77'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: '#e92b77'
                            }],
                            globalCoord: false
                        },
                        opacity: 1 // 区域透明度
                    }
                }
            }]
        }, ]
    }
};
