function findCommonKeys(dictList) {
    const commonKeys = {};

    // 获取第一个字典
    const firstDict = dictList[0];

    // 遍历第一个字典的键
    Object.keys(firstDict).forEach(key => {
        const value = firstDict[key];
        let isCommon = true;

        // 检查每个字典的相应键的值是否相同
        for (let i = 1; i < dictList.length; i++) {
            if (dictList[i][key] !== value) {
                isCommon = false;
                break;
            }
        }

        // 如果所有字典中相应键的值都相同，则将该键添加到结果中
        if (isCommon) {
            commonKeys[key] = value;
        }
    });
    let resultString = '';
    let commonKeys_len;
    for (const key in commonKeys) {
        resultString += `${key}: ${commonKeys[key]}\n`;
    }
    commonKeys_len=Object.keys(commonKeys).length
    return {resultString, commonKeys_len};
}
function extractIndexes(listOfDicts) {
    var indexList = [];
    for (var i = 0; i < listOfDicts.length; i++) {
        var dict = listOfDicts[i];
        if (dict.hasOwnProperty("Index")) {
            indexList.push(dict["Index"]);
        }
    }
    return indexList;
}
function wrap(text, width) {
    text.each(function() {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy"));

        // 确保dy是一个数字
        if (isNaN(dy)) dy = 0; // 如果dy不是一个数字，则设置为0

        var tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");

        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", (++lineNumber * lineHeight + dy) + "em").text(word);
            }
        }
    });
}
var colorScale = d3.scale.category10();
// 或者
// var colorScale = d3.scaleOrdinal(d3.schemeCategory10);

var query = window.location.search.substring(1);
var params = query.split('&');
var paramMap = {};

for (var i = 0; i < params.length; i++) {
    var pair = params[i].split('=');
    paramMap[pair[0]] = decodeURIComponent(pair[1]);
}

console.log(paramMap.param1); // "value1" node.label  Sum or not
console.log(paramMap.param2); // "value2" node.caption  Index
console.log(paramMap.param3); // "value2" big small


if (paramMap.param3=="big"){
    document.getElementById("coordinates").style.display="block"
    var m = [100, 0, 20, 50], //向上，向右，向下，向左
        w = 6000 - m[1] - m[3],
        h = 400 - m[0] - m[2];

}else{
    var m = [30, 50, 20, 10],
        w = 900 - m[1] - m[3],
        h = 200 - m[0] - m[2];
}
var x = d3.scale.ordinal().rangePoints([0, w], .5),
    y = {};

var line = d3.svg.line(),
    axis = d3.svg.axis().orient("left"),
    background,
    foreground;

var svg = d3.select("#graph-container").append("svg")
    .attr("width", w + m[1] + m[3])
    .attr("height", h + m[0] + m[2])
    .append("g")
    .attr("transform", "translate(" + m[3] + "," + m[0] + ")");
// var case_index = paramMap.param2.match(/\d+/)[0];
var global_index=[]

// var filename = "{{ url_for('static', filename='cases.csv') }}"
var filename = "./static/cases.csv"
// console.log('filename',filename)
console.log("case_index",paramMap.param2)
// console.log(filename,"filename")
d3.csv(filename, function(error, cities) {
    if (error) throw error;

    const str_list=[
        "Case theme",
        "Fields",
        "Users",
        "Provider",
        "Influencer",
        "Results",
        "Reason",
        "Positionalattribute",
        "Opinion",
        "Attitude",
        "Response",
        "Description",
        "Place",
        "Time",
        "URL",
        "degree of influence"]

    // Extract the list of dimensions and create a scale for each.
    x.domain(dimensions = d3.keys(cities[0]).filter(function(d) {   //filter掉特定的列
        return !str_list.includes(d) && (y[d] = d3.scale.linear()
            .domain(d3.extent(cities, function(p) { return +p[d]; }))  // extend返回最大最小值
            .range([h, 0]));
    }));

    // if (paramMap.param1!=="Sum"){
    //
    //     str_num = paramMap.param2.replace("[", "").replace("]", "");  // 去掉括号
    //     // var arr = str_num.split(",");  // 使用逗号切分字符串
    //     //var selectedRows =[cities.slice(parseInt(arr[0]),parseInt(arr[0])+1)[0],cities.slice(parseInt(arr[1]),parseInt(arr[1])+1)[0]]
    //     var selectedRows = cities.filter(function(row) {
    //         return cities;  // 假设'cluster'列是字符串类型
    //     });
    //
    //
    //     selectedRows = cities.slice(parseInt(paramMap.param2),parseInt(paramMap.param2)+1)  //选取特定行数据    正常
    //     console.log((selectedRows[0]),"selectedRows")
    //     document.getElementById("coordinates").innerText=JSON.stringify(selectedRows[0], null, 2)
    //     // var selectedRows = cities.slice(parseInt(12),parseInt(12)+1)  //选取特定行数据
    //     // var selectedRows = cities.slice(parseInt(paramMap.param2),parseInt(paramMap.param2)+1)  //选取特定行数据    正常
    //     // Add grey background lines for context.
    // }else {
    //
    //
    //     // Add grey background lines for context.
    // }
    function filterNumericKeys(data) {
        let sum_numericData = [];
        for (let index in data){
            let each_dict = data[index];

            let numericData = {};

            for (let key in each_dict) {
                if (each_dict.hasOwnProperty(key)) {
                    let value = each_dict[key];
                    // 检查值是否为数字或可以转换为数字的字符串
                    if (typeof value === 'number' || (!isNaN(value) && !isNaN(parseFloat(value)))) {
                        let modifiedKey = key.replace(/_/g, ' ');
                        numericData[modifiedKey] = parseInt(value);
                    }
                }
            }
            // console.log(numericData)
            sum_numericData.push(numericData)
        }
        return sum_numericData;
    }



    async function fetchData() {
        if (paramMap.param1==="single"){
            try {

                await fetch('http://127.0.0.1:5002/post_single', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({"single":[paramMap.param2]})
                })
                    .then(response => response.json())
                    .then(data => {
                        draw_lines(data)
                        d3.select(".background path").style("stroke-opacity", 1);  // 假设新的透明度为0.5
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            } catch (error) {
                console.error('Error:', error);
            }
        }else {
            try {

                await fetch('http://127.0.0.1:5002/get_case_list', {
                    //     method: 'POST',
                    //     headers: {
                    //         'Content-Type': 'application/json',
                    //     },
                    //     body: JSON.stringify({"single":paramMap.param2})
                })
                    .then(response => response.json())
                    .then(data => {
                        draw_lines(data)
                        d3.select(".background path").style("stroke-opacity", .1); // 假设新的透明度为0.5
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            } catch (error) {
                console.error('Error:', error);
            }
        }

    }

    function draw_lines(data){
        if (Object.keys(data).length === 0) {
            // If the data is empty, wait for some time and try again
            setTimeout(fetchData, 1000); // Waits for 1 second before trying again
        } else {
            console.log(data); // Process the non-empty data
        }
        // console.log('Received Response:', JSON.stringify(data));
        // return JSON.stringify(data["receivedData"])
        let selectedRows_num;
        let selectedRows_str;
        let result;
        let commonKeys,len_commonKeys;
        selectedRows_str=data["receivedData"]
        selectedRows_num=filterNumericKeys(selectedRows_str)
        result=findCommonKeys(selectedRows_str)
        commonKeys=result.resultString
        len_commonKeys=result.commonKeys_len

        console.log(len_commonKeys,"commonKeys")
        global_index=extractIndexes(selectedRows_num)
        // console.log(selectedRows_str)
        // console.log(selectedRows_num)

        document.getElementById("coordinates").innerHTML =
            "Selected count: " + selectedRows_num.length.toString() + "\n\n" +
            "Cases Index: " + global_index.toString() + "\n\n"+"Common keys: " +len_commonKeys.toString()+"\n"+
            (commonKeys)+"\n\nDetailed info: "+
            JSON.stringify(selectedRows_num)

        if (paramMap.param3==="big") {
            d3.select("svg").style("font", "15px sans-serif");
        }
        background = svg.append("g")
            .attr("class", "background")
            .selectAll("path")
            .data(selectedRows_num)
            .enter().append("path")
            .attr("d", path);

        // Add blue foreground lines for focus.

        foreground = svg.append("g")
            .attr("class", "foreground")
            .selectAll("path")
            .data(selectedRows_num)
            .enter().append("path")
            .attr("d", path)
            .style("stroke", function(d) {
                return colorScale(d.Index);  // your_attribute是你想根据其设置颜色的属性
            });

        // Add a group element for each dimension.
        var g = svg.selectAll(".dimension")
            .data(dimensions)
            .enter().append("g")
            .attr("class", "dimension")
            .attr("transform", function(d) { return "translate(" + x(d) + ")"; });

        // Add an axis and title.
        g.append("g")
            .attr("class", "axis")
            .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
            .append("text")
            .attr("text-anchor", "middle")
            .attr("y", -60)
            .text(String)
            .call(wrap, 200); // maxWidth 是你设置的最大宽度;

        // Add and store a brush for each axis.
        g.append("g")
            .attr("class", "brush")
            .each(function(d) { d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brush", brush)); })
            .selectAll("rect")
            .attr("x", -8)
            .attr("width", 16);
    }
    fetchData();
});

// Returns the path for a given data point.
function path(d) {
    return line(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));

}

// Handles a brush event, toggling the display of foreground lines.
function brush() {
    var actives = dimensions.filter(function(p) { return !y[p].brush.empty(); }),
        extents = actives.map(function(p) { return y[p].brush.extent(); });

    var visibleData = [];
    var visible_index=[]
    foreground.style("display", function(d) {
        var isVisible = actives.every(function(p, i) {
            return extents[i][0] <= d[p] && d[p] <= extents[i][1];
        });

        if (isVisible) visibleData.push(d);


        // 更新线条颜色
        d3.select(this).style("stroke", function() {
            return isVisible ? colorScale(d.your_attribute) : "#ccc";
        });

        return isVisible ? null : "none";
    });


    // 更新textarea的内容
    var output = d3.select("#coordinates");
    // let selectedRows_num;
    let selectedRows_str;
    let result;
    let commonKeys,len_commonKeys;
    // selectedRows_num=filterNumericKeys(visibleData)
    result=findCommonKeys(visibleData)
    commonKeys=result.resultString
    len_commonKeys=result.commonKeys_len
    output.property("value","Selected count: " + visibleData.length + "\n\n"+ "Common keys: " +len_commonKeys + "\n"+commonKeys+ "\n\n");  // 显示选中的数量
    visibleData.forEach(function(d) {

        global_index=extractIndexes(d)
        // output.property("value","Cases index: " + global_index + "\n\n")
        output.property("value", output.property("value") + JSON.stringify(d) + "\n");
    });
}

// 下载SVG

