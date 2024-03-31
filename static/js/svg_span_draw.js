import {getColorById,node_position_dict} from './main.js'

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
export function svg_span_draw(nodes,links_original,svg_span,dict_level){
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

    var svg = svg_span;
    const width = +svg.attr("width");
    const height = +svg.attr("height");
    svg.selectAll("*").remove();

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