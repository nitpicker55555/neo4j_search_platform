import {getColorById} from './main.js'
function scaleNodesToFitContainer(nodes, containerWidth, containerHeight,margin = 10) {

    let minX = d3.min(nodes, d => d.x);
    let maxX = d3.max(nodes, d => d.x);
    let minY = d3.min(nodes, d => d.y);
    let maxY = d3.max(nodes, d => d.y);

    // 计算当前布局的宽度和高度
    let layoutWidth = maxX - minX;
    let layoutHeight = maxY - minY;

    // 计算缩放比例
    let scaleX = (containerWidth - margin * 2) / layoutWidth;
    let scaleY = (containerHeight - margin * 2) / layoutHeight;
    let scale = Math.min(scaleX, scaleY); // 选择一个较小的比例以保持等比例缩放

    // 调整每个节点的位置
    nodes.forEach(node => {
        node.x = (node.x - minX) * scale + margin; // 缩放并平移位置以适应容器，加上边距
        node.y = (node.y - minY) * scale + margin; // 缩放并平移位置以适应容器，加上边距
    });

    // 再次检查最小y值以确保没有节点超出上边界
    minY = d3.min(nodes, d => d.y);
    if (minY < 0) {
        let yOffset = Math.abs(minY);
        nodes.forEach(node => {
            node.y += yOffset; // 将所有节点向下移动以确保在边界内
        });
    }

    return nodes; // 返回调整后的节点位置
}
export function svg_span_draw(nodes,links_original,dict_level){
    // var links=[]
    // links_original.forEach(link=>{

    //     links.push({'source':link.source.id,'target':link.target.id})
    // })
    // svg=svg_span
    var links=[]
    links_original.forEach(link=>{
        if ((link.target.label==='Provider' || link.source.label==='Provider')){
            if  (link.target.label==='Relational attributes' || link.source.label==='Relational attributes'){
                links.push(link)
            }


        }else {
            links.push(link)
        }
    })
    var svg_span = d3.select(".svg-span");
    var svg = svg_span;
    const width = +svg.attr("width");
    const height = +svg.attr("height");
    svg.selectAll("*").remove();
    const node_position_dict={
        "AI ethics issues": {
            "x": 89.15640884970058,
            "y": 139.97803010979052
        },
        "Time attributes of AI ethical issues": {
            "x": 205.85277065330052,
            "y": 35.21830194554537
        },
        "Life cycle of Al technology or product": {
            "x": 331.56101475874436,
            "y": -66.52966916584842
        },
        "Design session of Al": {
            "x": 433.8181645441903,
            "y": -106.6676874050382
        },
        "AI Designers": {
            "x": 501.7330064964609,
            "y": -98.46653930403205
        },
        "ethics Issues Caused by Al Designers": {
            "x": 561.4063748233505,
            "y": -90.15554296832087
        },
        "Positive design that produces negative results that do not meet expectations": {
            "x": 598.1324699701421,
            "y": -94.76792357461956
        },
        "Negative design that produces negative results that meet expectations": {
            "x": 594.0372526079504,
            "y": -73.02734898457672
        },
        "AI Products": {
            "x": 470.3179522249531,
            "y": -165.41097229892796
        },
        "ethics issues caused by Al products": {
            "x": 554.6423243864247,
            "y": -210.3515543755976
        },
        "Human-like ethics issues": {
            "x": 619.9809182676477,
            "y": -222.5790096293627
        },
        "Overly human-like and leading to ethics problems": {
            "x": 656.4887919740249,
            "y": -218.0822810925735
        },
        "Not human-like enough to cause ethics problems": {
            "x": 652.3880071895474,
            "y": -240.84873405523572
        },
        "Non-human-like ethics issues": {
            "x": 582.9426299625502,
            "y": -248.4775962588892
        },
        "Not enough beyond human to cause ethics problems": {
            "x": 606.1819199824469,
            "y": -277.445613132651
        },
        "AI's service & work sessions": {
            "x": 394.32609900993697,
            "y": -152.42016454665279
        },
        "Users": {
            "x": 392.97418123976786,
            "y": -218.58985915169393
        },
        "ethics issues caused by Al users": {
            "x": 392.1368710252404,
            "y": -276.2828365594745
        },
        "ethics issues caused by the wrong user group": {
            "x": 403.8407848872074,
            "y": -310.8271126985376
        },
        "ethics issues due to wrong user tasks": {
            "x": 380.0502227364902,
            "y": -310.60800805286885
        },
        "AI ethics issue resolution measures": {
            "x": -10.821133501558956,
            "y": 209.23857506242115
        },
        "AI ethics governance guidelines": {
            "x": -90.21410671579365,
            "y": 267.40265234663246
        },
        "Transparency": {
            "x": -125.71932243465821,
            "y": 257.0012586306436
        },
        "Justice and fairness": {
            "x": -110.83338767628004,
            "y": 301.46518698818016
        },
        "degree of influence": {
            "x": -126.37859161072376,
            "y": 284.1428036887501
        },
        "Privacy": {
            "x": -84.5770748394125,
            "y": 303.28959774471195
        },
        "Trust": {
            "x": -98.92586100340597,
            "y": 305.0451970076817
        },
        "Non-maleficence": {
            "x": -120.20613093041027,
            "y": 294.2472707154991
        },
        "Responsibility": {
            "x": -128.85359159062463,
            "y": 271.80454824569466
        },
        "AI-induced risks": {
            "x": 25.019024732539613,
            "y": 95.21678966530362
        },
        "Infringements on human rights": {
            "x": -2.9175655403304823,
            "y": 69.72915512454944
        },
        "Social detriment": {
            "x": -12.007896825298806,
            "y": 97.46100788447453
        },
        "Emotional or psychological injury": {
            "x": 9.916854651435218,
            "y": 61.33470815450776
        },
        "Loss of opportunity": {
            "x": -4.512332935637043,
            "y": 114.17947818657072
        },
        "Physical injury": {
            "x": 28.189803218616998,
            "y": 59.942251923951
        },
        "Economic loss": {
            "x": -10.597506937478078,
            "y": 82.19565022315459
        },
        "Cases of AI ethics issues": {
            "x": 137.6349251099204,
            "y": 259.0209362611082
        },
        "Event attributes": {
            "x": 165.99197740584012,
            "y": 314.53255419947783
        },
        "Index": {
            "x": 188.81026233430106,
            "y": 343.31106968764647
        },
        "Place": {
            "x": 199.9072675436839,
            "y": 327.76512656265936
        },
        "Time": {
            "x": 168.12999536968252,
            "y": 349.21869218024983
        },
        "Relational attributes": {
            "x": 203.85188029121682,
            "y": 218.24647526668977
        },
        "Case theme": {
            "x": 194.27217546540362,
            "y": 182.30904381471737
        },
        "Influencer": {
            "x": 242.56685544790005,
            "y": 223.2724863669404
        },
        "Results": {
            "x": 229.5898818680299,
            "y": 244.83591529930834
        },
        "Reason": {
            "x": 220.4742430525971,
            "y": 183.65331519317863
        },
        "Opinion": {
            "x": 230.5713629111216,
            "y": 189.76355872831684
        },
        "Response": {
            "x": 238.69678788616955,
            "y": 234.9118556424029
        },
        "URL": {
            "x": 179.94063931996334,
            "y": 191.4099783644576
        },
        "Fields": {
            "x": 238.12933093945566,
            "y": 199.66134979700254
        },
        "Provider": {
            "x": 208.00129592797694,
            "y": 180.68347871295413
        },
        "The cause of the problem": {
            "x": 242.54327456813584,
            "y": 210.49004693831372
        },
        "Positions in business conduct": {
            "x": 170.34694069426698,
            "y": 209.97500133918564
        },
        "Attitude": {
            "x": 215.29656412159105,
            "y": 251.6684890127932
        },
        "Description": {
            "x": 189.92356484627535,
            "y": 248.22314939076296
        },
        "Positional attribute": {
            "x": 111.92257916165418,
            "y": 385.75302528403665
        },
        "Positional attributes in early stages": {
            "x": 81.40553822115727,
            "y": 455.7892033862719
        },
        "Data acquisition": {
            "x": 65.38075650116905,
            "y": 489.7666115959548
        },
        "Data access": {
            "x": 84.653200780468,
            "y": 492.34599216228315
        },
        "Data modeling": {
            "x": 50.92844021743477,
            "y": 476.48207781832974
        },
        "Positional attributes in mid stages": {
            "x": 58.16089733623105,
            "y": 393.36208247248885
        },
        "Behavior tracking": {
            "x": 30.243094081467614,
            "y": 415.218194948594
        },
        "Behavior prediction": {
            "x": 22.6606977360902,
            "y": 392.5136487456962
        },
        "Behaviour nudging": {
            "x": 35.286852164094086,
            "y": 368.40339948284026
        },
        "Positional attributes in end stages": {
            "x": 147.8640487771008,
            "y": 452.6947308547543
        },
        "Wrong user group": {
            "x": 178.85856992132653,
            "y": 471.9355174834129
        },
        "Wrong user task": {
            "x": 164.44952399708404,
            "y": 486.1905664135554
        },
        "Surprising learning result": {
            "x": 144.970128958754,
            "y": 489.22915309416334
        }
    }
    console.log(links)
    console.log(nodes)
    // console.log(links)
    nodes.forEach(node => {
        node.visible = true;
        node.x=node_position_dict[node.label]['x']
        node.y=node_position_dict[node.label]['y']
    });
    links.forEach(link => {
        link.visible = true;
    });
    nodes=scaleNodesToFitContainer(nodes,400,300)


    var nodeMap = {};
    nodes.forEach(function(node) {
        nodeMap[node.id] = {'x':node.x,'y':node.y};
    });
    console.log(nodeMap)
    var link = svg.selectAll(".link")
        .data(links)
        .enter().append("line")
        .attr("class", "link")
        .attr("x1", function(d) { return nodeMap[d.source.id]['x']; })
        .attr("y1", function(d) { return nodeMap[d.source.id].y; })
        .attr("x2", function(d) { return nodeMap[d.target.id].x; })
        .attr("y2", function(d) { return nodeMap[d.target.id].y; })
        .style("stroke", "#aaa");
    var node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(nodes)
        .enter().append("circle")
        .attr("r", function (d) {
            // console.log(nodes.find(node => node.id === d.id).label)
            return 1 / (dict_level[nodes.find(node => node.id === d.id).label]) * 15;
        })
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .attr("class", "node")
        .attr("fill", d => getColorById(dict_level[nodes.find(node => node.id === d.id).label])) // 为每个节点根据level设置颜色




}