import {svg_span_draw} from "./svg_span_draw.js";
import {getColorById,create_new_link,get_truelabel_index,update_row,dict_nodes,dict_level,tooltip,svg_span,node_position_dict} from "./main.js";

export function two_d(nodes, links) {

    // 设置 SVG 尺寸
    const width = window.innerWidth;
    const height = window.innerHeight;
    let id_list= {}
    let id_links= {}

    for (const item of nodes) {
        // console.log(item.TrueLabel);
        const label_index=get_truelabel_index(item.TrueLabel)
        if (!(label_index in id_list)){
            // id_nodes.push({"TrueLabel":"id_node_"+label_index,"label":label_index,"id":label_index})
            id_list[label_index]=[]
            id_links[label_index]=[]
        }
        id_links[label_index].push(item.id)
        id_list[label_index].push(item)
    }
    console.log(id_links,"id_links")
    update_row(nodes);

    // // 创建 SVG 容器
    // let svg = d3.select("body").select("svg.fullscreen-svg");

    d3.selectAll("svg.fullscreen-svg").remove();



    let svg = d3.select("body").append("svg")
        .attr("class", "fullscreen-svg") // 为新的 SVG 元素添加 "fullscreen-svg" 类名
        .call(d3.zoom().on("zoom", zoomed)) // 添加缩放行为
        .append("g"); // 在 SVG 内部添加一个 <g> 元素

    let table_head=document.getElementById('dataTable')


    table_head.style.position = 'absolute';
    table_head.style.top = '100vh'; // 设置表格的顶部位置在视口高度之外
    table_head.style.zIndex = 2; // 确保表格在SVG之上


    nodes.forEach(node => {
        if (node.label==="AI ethics issues"){
            node.visible = true;
        }else{node.visible=false}

    });
    links.forEach(link => {
        link.visible = false;
    });
    // 创建力导向图
    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id))
        .force("charge", d3.forceManyBody().strength(-70))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collide", d3.forceCollide().radius(function(d) {
            return 1/(dict_level[nodes.find(node => node.id === d.id).label])*200; // 根据节点大小设置碰撞半径，+2 为额外间距
        }))
    // 创建链接线
    const link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .enter().append("line")
        .attr("stroke-width", 2)
        .attr("stroke", "grey");

    // 创建节点
    const node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(nodes)
        .enter().append("g")
        // .enter().append("circle")
        .attr("r", 5)
        // .attr("fill", d => getColorById(nodes.find(node => node.id === d.id).label)) // 为每个节点设置颜色
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended))
        .on("mouseover", hover_node) // 假设有一个 clicked 函数来处理点击事件
        .on("mousemove", function(event) {
            tooltip.style("left", (event.pageX) + "px")
                .style("top", (event.pageY + 12) + "px");
            svg_span.style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 350) + "px");
        })
        .on("mouseout", function() {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
            svg_span.transition()
                .duration(500)
                .style("opacity", 0)
            svg_span.style("display", 'none');

        });


    update()


    const circles = node.append("circle")
        .attr("r", function(d) {

            if (!nodes.find(node => node.id === d.id).label in dict_level){
                console.log(nodes.find(node => node.id === d.id).label,"label")
            }
            return 1/(dict_level[nodes.find(node => node.id === d.id).label])*80;
        })
        .attr("fill", d => getColorById(dict_level[nodes.find(node => node.id === d.id).label])) // 为每个节点根据level设置颜色
    // .attr("fill", d => getColorById(nodes.find(node => node.id === d.id).label)) // 为每个节点设置颜色


    // 在节点旁添加文本
    const labels = node.append("text")
        .text(d => nodes.find(node => node.id === d.id).showCaption) // 每个节点对象有一个 'id' 属性作为名称
        .attr("x", 0)
        .attr("y", 0)
        .style("text-anchor", "middle") // 确保文本以其中心点对齐到指定的 x 位置
        .style("dominant-baseline", "central") // 垂直居中文本（对于大多数浏览器有效）
        .style("font-size", "28px"); // 设置字号大小



    function update() {
        // Update links
        link.style("display", d => d.visible ? null : "none");
        // Update nodes
        node.style("display", d => d.visible ? null : "none");
    }
    node.on("click", function(event, d) {
        const newVisibility = judge_expand(d);
        let child_list=[]
        const child_id_list=[]
        // d.visible = newVisibility;
        if (newVisibility===true){
            child_list=find_child(d,[],'only_neighbor')
        }else {
            child_list=find_child(d,[],'total')
        }
        child_list.forEach(child=>{
            child.visible=newVisibility
            child_id_list.push(child.id)
        })
        links.forEach(link => {
            if (child_id_list.includes(link.source.id)  || child_id_list.includes(link.target.id) ) {
                if (newVisibility){
                    if (link.source.visible===link.target.visible){
                        link.visible = newVisibility;
                    }
                }else {
                    link.visible = newVisibility;
                }
            }
        });
        update();
    });
    node.on("dblclick", function(event, d) {
        const newVisibility = true
        let child_list=[]
        const child_id_list=[]
        // d.visible = newVisibility;
        child_list=find_child(d,[],'total')
        child_list.forEach(child=>{
            child.visible=newVisibility
            child_id_list.push(child.id)
        })
        links.forEach(link => {
            if (child_id_list.includes(link.source.id)  || child_id_list.includes(link.target.id) ) {
                if (newVisibility){
                    if (link.source.visible===link.target.visible){
                        link.visible = newVisibility;
                    }
                }else {
                    link.visible = newVisibility;
                }
            }
        });
        update();
    });

    function judge_expand(d){
        const target_list=new Set()
        const new_child_list=[]//child of each d

        links.forEach(link => {
            if (link.source.id === d.id || link.target.id === d.id) {
                target_list.add(link.target.id)
                target_list.add(link.source.id)
            }
        });
        nodes.forEach(node => {
                if (target_list.has(node.id) && node.id!==d.id && dict_level[node.label]>dict_level[d.label]) {
                    new_child_list.push(node)
                }
            }
        )
        return new_child_list[0].visible === false;
    }
    function find_child(d,child_list,mode){

        const target_list=new Set()
        const new_child_list=[]//child of each d

        links.forEach(link => {
            if (link.source.id === d.id || link.target.id === d.id) {
                target_list.add(link.target.id)
                target_list.add(link.source.id)
            }
        });
        nodes.forEach(node => {
                if (target_list.has(node.id) && node.id!==d.id && dict_level[node.label]>dict_level[d.label]) {
                    new_child_list.push(node)
                    child_list.push(node)
                }
            }
        )
        if (mode==="total")
        {
            new_child_list.forEach(child_node=>{
                find_child(child_node,child_list,mode)
            })
        }

        return child_list
    }


    function hover_node(event, d) {

        // // console.log(id_links[d.showCaption])
        // console.log(parseInt(d.showCaption))
        // console.log(id_links[parseInt(d.showCaption)])

        // 这里定义点击节点时的行为
        const nodeWithId223 = nodes.find(node => node.id === d.id);
        const true_label_index=get_truelabel_index(nodes.find(node => node.id === d.id).TrueLabel)
        // const captionOfNode223 =  : undefined;

        const title=dict_nodes["Case_theme"+"_"+true_label_index]
        const description=dict_nodes["Description"+"_"+true_label_index]
        const content="<span class='normal bold'>Index: </span>"+true_label_index+"\n\n<span class='normal bold'>Title: </span>"+title+"\n\n<span class='normal bold'>Description: </span>"+description
        document.getElementById('my-span').innerHTML=content

        tooltip.transition()
            .duration(200)
            .style("opacity", .9);

        tooltip.html("Caption: " + d.caption)
            .style("left", (event.pageX) + "px")
            .style("top", (event.pageY + 12) + "px");
        const send_nodes=id_list[parseInt(d.showCaption)]

        // console.log(d.label)
        if (d.label==="AI ethics issues"){
            const send_links=create_new_link(links,id_links[parseInt(d.showCaption)])
            svg_span_draw(JSON.parse(JSON.stringify(send_nodes)),JSON.parse(JSON.stringify(send_links)),svg_span,dict_level)
            svg_span.transition()
                .style('display','block')
                .duration(200)
                .style("opacity", .9)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 350) + "px");
        }
        //
        // 例如：在控制台打印节点的信息
        // console.log(`caption: ${nodeWithId223.caption}`+`\nlabel: ${nodeWithId223.label}`);
        // console.log();
    }

    // 节点拖动函数
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.7).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    // 缩放函数
    function zoomed(event) {
        svg.attr("transform", event.transform);
    }

    // 更新节点和链接的位置
    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("transform", d => `translate(${d.x},${d.y})`);


    });
}