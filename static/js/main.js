import {svg_span_draw} from './svg_span_draw.js'
import {two_d} from './two_d.js'
export var dict_level = {};
export var dict_nodes={}
export var global_nodes=[]
export var global_links=[]
export const node_position_dict={
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
export const tooltip = d3.select(".tooltip");
export const tooltip_left = d3.select(".tooltip_left");
export var svg_span = d3.select(".svg-span");

// console.log(svg_span)
fetch('http://127.0.0.1:5002/post_level')
    .then(response => response.json())
    .then(data => {
        dict_level = data.reply;
        // console.log('dict_level:', dict_level);
    })
    .catch(error => console.error('Error fetching data:', error));

const checkbox_3d=document.getElementById('check3d')
var svg_num=0
var global_index_list=[]
let isQueryRunning = false; // 标志来跟踪查询状态
var listener_list =[]
let clickCount = 0;  // To keep track of how many times the button has been clicked



document.getElementById('plus_button').addEventListener('click', function() {
    // Increment the click count
    clickCount++;

    // var totalChildNodes = document.body.childNodes.length;

// 获取 document.body 的子元素总数，仅包括元素节点
    var totalChildElements = document.body.children.length;
    console.log(totalChildElements,"totalChildElements")
    if (checkbox_3d.checked) {
        clickCount=totalChildElements-7
    }else {
        clickCount=totalChildElements-11
    }

    // console.log("Total child nodes: " + totalChildNodes);
    console.log("Total child elements: " + totalChildElements);
    console.log('clickCount'+clickCount)
    // Clone the original element group
    const original = document.querySelector('.element-group');
    const clone = original.cloneNode(true);
    var top_var =document.querySelector('.element-group').getBoundingClientRect();
    // var rect = element.getBoundingClientRect();

    // 获取文档的垂直滚动距离
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // 计算元素的顶部位置相对于文档的顶部的距离
    var top = top_var.top + scrollTop;
    console.log('top_var'+top)
    // Set the left position of the clone and the button based on the click count
    clone.style.top = (top + 50 * clickCount) + "px";
    // this.style.left = (600 + 500 * clickCount) + "px";  // Move the button
    // document.getElementById('result').style.left= (480 + 500 * clickCount) + "px";

    // Append the cloned group to the body or another container
    const originalChildren = original.querySelectorAll('[id]');
// 获取克隆元素的所有子元素
    const clonedChildren = clone.querySelectorAll('[id]');

// 遍历所有子元素并更新克隆元素的 id
    originalChildren.forEach((originalChild, index) => {
        const clonedChild = clonedChildren[index];
        const newId = originalChild.id + '_clone'+clickCount.toString();
        clonedChild.id = newId;
        // 现在 clonedChild 有了一个新的唯一 id
    });


    document.body.appendChild(clone);
    // 选择所有的 select 元素
    add_listener();


});
document.getElementById('minus_button').addEventListener('click', function() {
    // Increment the click count
    var totalChildElements = document.body.children.length;
    var lastChild = document.body.lastChild;
    console.log(totalChildElements,"totalChildElements")
// 从 document.body 中移除这个子节点
    if (checkbox_3d.checked) {
        if (totalChildElements>8){
            document.body.removeChild(lastChild);
        }
    }else {
        if (totalChildElements>12){
            document.body.removeChild(lastChild);
        }
    }


});
// console.log(getNumber,"asd")


const elem = document.getElementById('3d-graph');
elem.style.zIndex=1;
const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "12345678"),{encrypted: false});
const all_col_name=['Index', 'Case theme', 'Fields', 'Users', 'Provider', 'Influencer', 'Results', 'Reason', 'Positionalattribute', 'Opinion', 'Attitude', 'Response', 'Description', 'Place', 'Time', 'URL', 'degree of influence', 'Data acquisition', 'Data access', 'Data modeling', 'Behavior tracking', 'Behavior prediction', 'Behaviour nudging', 'Wrong user group', 'Wrong user task', 'Surprising learning result', 'Positive design that produces negative results that do not meet expectations', 'Negative design that produces negative results that meet expectations', 'Overly human-like and leading to ethics problems', 'Not human-like enough to cause ethics problems', 'Not enough beyond human to cause ethics problems', 'ethics issues caused by the wrong user group', 'ethics issues due to wrong user tasks', 'Infringements on human rights', 'Social detriment', 'Emotional or psychological injury', 'Loss of opportunity', 'Physical injury', 'Economic loss', 'Transparency', 'Justice and fairness', 'Privacy', 'Trust', 'Non-maleficence', 'Responsibility']
const session2 = driver.session({database:"neo4j"});
var session_attribute = driver.session({database:"neo4j"});

session2.run("CALL db.labels()")
    .then(function(result) {
        var dropdown = document.getElementById('ai_dropdown'); // if this returns null, the next line will throw an error
        // dropdown.add(option);
        // console.log(result)
        result.records.forEach(function(record) {
            if (all_col_name.includes( record.get(0))){
                var option = document.createElement('option');
                option.value = record.get(0);
                option.text = record.get(0);
                dropdown.add(option);
            }

        });

        // Close the session and driver
        session2.close();
        // driver.close();

    }).catch(error => {
    console.error(error);
});
query_max_index()//initialize all cases
const start = new Date()
var iframe = document.getElementById("paralle");
iframe.scrolling="no";
document.body.appendChild(iframe);
iframe.style.width = '300px';
iframe.style.height = '120px';
var src_="";
iframe.onclick = function() {
    window.open(src_, '_blank');
    // window.location.href = src_;
    console.log(src_); // "value2"
}

// const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];


document.addEventListener('click', function(event) {
    console.log('Element clicked:', event.target);
    if (iframe.style.display==="block"){
        window.open(src_, '_blank');
    }

});
session_elem("");

add_listener();
// 选择所有的 select 元素
function add_listener(){
    const selects = document.querySelectorAll('select');
    // const selects_list =Array.from(selects);
    let idList = [];

// 遍历 DOM 列表
    selects.forEach(element => {
        idList.push(element.id); // 将每个元素的 id 添加到数组中
    });
    // let need_add_list = selects.filter(item => !listener_list.includes(item));
    // listener_list.forEach(item => selects_list.delete(item));

    let need_listen_list = idList.filter(item => !listener_list.includes(item));
    listener_list.push(need_listen_list)
    console.log("selects",need_listen_list)
    console.log("listener_list",listener_list)
    need_listen_list.forEach((select, index, array) => {

        const select_dom=document.getElementById(select)
        console.log("select",select)
        if (select.startsWith('ai_dropdown')) {
            var nextId = array[index + 1];
            console.log("nextId",nextId)

            // 为符合条件的 select 元素添加事件监听器
            select_dom.addEventListener('change', (event) => {
                // 这里是您想要执行的代码
                var selectedOption = select_dom.options[select_dom.selectedIndex].text;
                // var selectElement = document.getElementById("attribute_dropdown");
                const attribute_query = `
                 MATCH (n:\`${selectedOption}\`)
                        RETURN DISTINCT n.name;
                        `;

                console.log("attribute_query",attribute_query)
                session_attribute.run(attribute_query)
                    .then(function(result) {
                        var dropdown = document.getElementById(nextId); // if this returns null, the next line will throw an error
                        // dropdown.add(option);
                        console.log("dropdown",dropdown,nextId)
                        // console.log(result)
                        if (dropdown) {
                            // 清空所有选项
                            dropdown.innerHTML = '';
                        }
                        result.records.forEach(function(record) {
                            var option = document.createElement('option');
                            option.value = record.get(0);
                            option.text = record.get(0);
                            if (!option.text.endsWith("_148")){
                                dropdown.add(option);
                            }

                        });

                    }).catch(error => {
                    console.error(error);
                });

                setTimeout(delayAsyncFunction, 1000);
            });
            select_dom.style.width = '200px';
            select_dom.style.marginRight = '20px';
        }else if (select.startsWith('attribute_dropdown')){
            select_dom.addEventListener('change', (event) => {
                update_search()
            })
        }
    });
}

function delayAsyncFunction() {
    update_search();
}

async function queryDatabase(condition) {
    var session_get_index = driver.session({database:"neo4j"});

    try {
        // 使用 await 等待查询结果
        const resultList = await session_get_index.run(condition);
        console.log("resultList", resultList); // 这里是您的列表
// 打印新列表以验证结果
//             console.log(newList);
        return resultList.records.map(function (record) {
            // 分割字符串
            var parts = record.get(0).split("_");
            // 返回分割后的最后一部分
            return parts.length > 0 ? parts[parts.length - 1] : null;
        })
    } catch (error) {
        console.error("查询数据库时出错:", error);
    } finally {
        await session_get_index.close(); // 确保在结束时关闭会话
    }
}
function isNumeric(str) {
    if (typeof str != "string") return false; // 只处理字符串
    return !isNaN(str) && !isNaN(parseFloat(str));
}

const btn_similarity = document.getElementById("btn_similarity");


// let isHidden = false;
function openPopup() {
    window.open('/render_similarity', 'PopupWindow', 'width=600,height=400,scrollbars=no,resizable=no');
}
btn_similarity.addEventListener("click", () => {
    // openPopup()
    fetch('http://127.0.0.1:5002/cal_similarity', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "multi_index_list": global_index_list }),
    })
        .then(response => response.json())
        .then(data =>{
            // console.log(data)
            // console.log(data);
            const simi_index_list=data
            console.log(simi_index_list['receivedData'])
            alert("For cases: "+global_index_list+'\n Similarity results:\n'+simi_index_list['details'])
            get_index_list_return_query(simi_index_list['receivedData'])
        })
        .catch(error => {
            console.error('Error:', error);
        });

});

const del_btn = document.getElementById("del_btn");


// let isHidden = false;

del_btn.addEventListener("click", () => {
    var result = confirm("Do you want to delete data with index:\n\n\n"+global_index_list.toString()+" ?\n\n"+"Data length: "+global_index_list.length.toString());

    if (result === true) {
        // 用户点击了确认按钮
        var session_del = driver.session({database:"neo4j"});


        global_index_list.map(number => {
            session_del.run(`MATCH (n)\nWHERE n.TrueLabel CONTAINS '${number}'\nDETACH DELETE n;`)
                .then(function (result) {
                    console.log(result)
                });

        })

        fetch('http://127.0.0.1:5002/post_del', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "del": global_index_list }),
        })
            .then(response => response.json())
            .then(data =>{


                if (data['receivedData']==="successful"){
                    alert("Delete successfully")
                }else {
                    alert("Delete not successfully")
                }


            })

            .catch(error => {
                console.error('Error:', error);
            })
        // alert("操作已执行！");
    } else {
        // 用户点击了取消按钮或者关闭了确认框

    }
});
function filterNumericStrings(array) {
    return array.filter(item => typeof item === 'string' && /^\d+$/.test(item));
}
async function update_search(){
    const selects = document.querySelectorAll('select');

// 使用 Array.from 方法将 NodeList 转换为数组
    const selectIds = Array.from(selects).map(select => select.id);

// 打印所有的 select 元素的 id
//         MATCH (n:Fields)
//         WHERE n.name = 'Autonomous Driving'
//         RETURN n.TrueLabel;

    let condition=""
    var index_lists=[]
    var num_list=[]
    // WHERE  n.TrueLabel CONTAINS "148"  and  NOT n.redundancy RETURN n.TrueLabel;
    for (const id of selectIds) {
        const index = selectIds.indexOf(id);


        let dropdown_str=document.getElementById(id).value



        if (id.startsWith('ai_dropdown')){
            if (dropdown_str.includes(' ') ||  dropdown_str.includes('-') ) {
                condition+=`MATCH (n:\`${dropdown_str}\`)`;
            }

            else {
                condition+=`MATCH (n:${dropdown_str})`;

            }
        }else if (id.startsWith('attribute_dropdown')){
            // console.log("document.getElementById(id).value",document.getElementById(id).textContent)
            if (isNumeric(dropdown_str)){
                condition += `WHERE n.name = ${dropdown_str} RETURN n.TrueLabel;`;
            }else if(dropdown_str.includes("'")) {
                condition += `WHERE n.name = "${dropdown_str}" RETURN n.TrueLabel;`;
            }

            else {

                condition += `WHERE n.name = '${dropdown_str}' RETURN n.TrueLabel;`;
            }


            console.log("condition",condition)
            try {
                const result = await queryDatabase(condition);
                console.log(condition, result);

                index_lists = findCommonElements(index_lists, result);
                // console.log("joint list1", index_lists);
            } catch (error) {
                console.error("在获取列表时出错:", error);
            }



            // session_get_index.run(condition)
            //     .then(resultList => {
            //         console.log("resultList",resultList); // 这里是您的列表
            //     })
            condition=""
        }

    }
    // console.log("joint list2",index_lists)
    // WHERE  n.TrueLabel CONTAINS "148"  and  NOT n.redundancy
    get_index_list_return_query(index_lists)
    // console.log("index_list",index_list)
}

function get_index_list_return_query(raw_index_lists){
    const index_lists = filterNumericStrings(raw_index_lists);
    let query_str = "WHERE ";
    for (const [index, value] of   index_lists.entries()) {
        // console.log(index,value)
        if (index===0){
            query_str+=` n.TrueLabel =~ \".*_${value}$\"  `
        }else {
            query_str+=` or  n.TrueLabel =~ \".*_${value}$\" `
        }

        // 在此处处理每个元素 id
    }
    query_str+=" and  NOT n.redundancy"
    // console.log(query_str)
    if (index_lists.length!==0){
        session_elem(query_str);
    }

    // console.log(condition);
    call_back_index(index_lists)
}
function call_back_index(index_list){

    global_index_list=index_list

    document.getElementById('result').textContent=`${global_index_list.length} Cases found`
    if (global_index_list.length===0){
        alert("No cases found.")
    }
    fetch('http://127.0.0.1:5002/post_multi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "multi": global_index_list }),
    })
        .then(response => response.json())
        .then(data => console.log(data));
}
function findCommonElements(arr1, arr2) {
    if (arr1.length===0){
        arr1=arr2

    }
    // 使用 filter 方法来找到在 arr2 中也存在的 arr1 的元素
    // console.log(arr1,arr2)
    return arr1.filter(function(element) {
        return arr2.includes(element);
    });
}
export function get_truelabel_index(str) {
    const parts = str.split("_");
    return parts[parts.length - 1];
}

const idToColorMap = {100:'black'};
// 拖拽行为的实现
export function getColorById(id) {
    // 定义颜色的起始和结束值
    const startHue = 0; // 起始色调
    const endHue = 300; // 结束色调
    const saturation = 100; // 饱和度
    const lightness = 60; // 亮度

    // 如果这个 id 已经有一个颜色，就返回这个颜色
    if (idToColorMap[id]) {
        return idToColorMap[id];
    }

    // 计算当前 id 在总共 8 个 id 中的位置
    const position = parseInt(id) / 8;

    // 计算当前 id 对应的色调
    const hue = startHue + (position * (endHue - startHue));

    // 生成 HSL 颜色
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    // 将颜色与 id 关联起来
    idToColorMap[id] = color;

    // 返回颜色
    return color;}

export function create_new_link(list,id_list){
    // console.log(list,"list")
    const new_link=[]
    let source_index
    let target_index
    for (const item of list) {
        // console.log(item)
        // console.log(item.TrueLabel);
        source_index=(item.source.id)
        target_index=(item.target.id)
        if (id_list.includes(source_index) && id_list.includes(target_index)){
            new_link.push(item)
        }
    }
    console.log(new_link)
    return new_link
}

function id_node(nodes, links) {
    // console.log(nodes,"nodes")
    // console.log(links,"links")
    const idToColorMap = {};
    // 设置 SVG 尺寸
    const width = window.innerWidth;
    const height = window.innerHeight;

    update_row(nodes);

    // // 创建 SVG 容器
    d3.selectAll("svg.fullscreen-svg").remove();



    let svg = d3.select("body").append("svg")
        .attr("class", "fullscreen-svg") // 为新的 SVG 元素添加 "fullscreen-svg" 类名
        .call(d3.zoom().on("zoom", zoomed)) // 添加缩放行为
        .append("g"); // 在 SVG 内部添加一个 <g> 元素
    // let svgRect = svg.getBoundingClientRect();
    let table_head=document.getElementById('dataTable')
    // let table = document.querySelector("#dataTable tbody");
    //
    table_head.style.position = 'absolute';
    table_head.style.top = '100vh'; // 设置表格的顶部位置在视口高度之外
    table_head.style.zIndex = 2; // 确保表格在SVG之上
    // const container = svg.append("g");
    // const svg = d3.select("#3d-graph")
    //     .attr("width", "100%") // 假设你想要 SVG 充满其容器
    //     .attr("height", "100%")
    //     .attr("pointer-events", "all") // 确保 SVG 可以捕捉鼠标事件.
    // .call(d3.zoom().on("zoom", zoomed)) // 添加缩放行为

    // 创建力导向图
    let id_nodes=[]
    let id_list= {}
    let id_links= {}

    for (const item of nodes) {
        // console.log(item.TrueLabel);
        const label_index=get_truelabel_index(item.TrueLabel)
        if (!(label_index in id_list)){
            id_nodes.push({"TrueLabel":"id_node_"+label_index,"label":label_index,"id":label_index})
            id_list[label_index]=[]
            id_links[label_index]=[]
        }
        id_links[label_index].push(item.id)
        id_list[label_index].push(item)
    }
    const simulation = d3.forceSimulation(id_nodes)
        // .force("link", d3.forceLink(links).id(d => d.id))
        .force("charge", d3.forceManyBody().strength(-20))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collide", d3.forceCollide().radius(function(d) {
            return 50; // 根据节点大小设置碰撞半径，+2 为额外间距
        }))

    const node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(id_nodes)
        .enter().append("g")
        // .enter().append("circle")
        .attr("r", 5)
        // .attr("fill", d => getColorById(nodes.find(node => node.id === d.id).label)) // 为每个节点设置颜色
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended))
        .on("click", clicked) // 假设有一个 clicked 函数来处理点击事件
        .on("mouseover", hover_node) // 假设有一个 clicked 函数来处理点击事件



    const circles = node.append("circle")
        .attr("r",50)
        .attr("fill", d => getColorById([id_nodes.find(node => node.id === d.id).label])) // 为每个节点根据level设置颜色
    // .attr("fill", d => getColorById(nodes.find(node => node.id === d.id).label)) // 为每个节点设置颜色


    // 在节点旁添加文本
    const labels = node.append("text")
        .text(d => id_nodes.find(node => node.id === d.id).label) // 每个节点对象有一个 'id' 属性作为名称
        .attr("x", 0)
        .attr("y", 0)
        .style("text-anchor", "middle") // 确保文本以其中心点对齐到指定的 x 位置
        .style("dominant-baseline", "central") // 垂直居中文本（对于大多数浏览器有效）
        .style("font-size", "28px"); // 设置字号大小


    function clicked(event, d) {
        // 这里定义点击节点时的行为
        console.log(d.id,"d.id")
        svg_span_draw(id_list[d.id],create_new_link(links,id_links[d.id]))

    }
    function hover_node(event, d) {

        const true_label_index=get_truelabel_index(id_nodes.find(node => node.id === d.id).TrueLabel)
        // const captionOfNode223 =  : undefined;
        const title=dict_nodes["Case_theme"+"_"+true_label_index]
        const description=dict_nodes["Description"+"_"+true_label_index]
        const content="<span class='normal bold'>Index: </span>"+true_label_index+"\n\n<span class='normal bold'>Title: </span>"+title+"\n\n<span class='normal bold'>Description: </span>"+description
        document.getElementById('my-span').innerHTML=content
        //
        // 例如：在控制台打印节点的信息
        // console.log(`caption: ${nodeWithId223.caption}`+`\nlabel: ${nodeWithId223.label}`);
        // console.log();
    }

    // 节点拖动函数
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
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

        node
            .attr("transform", d => `translate(${d.x},${d.y})`);

    });
}
export function update_row(nodes){//更细列表函数
    const tableBody = document.querySelector("#dataTable tbody");
    dict_nodes={}
    tableBody.innerHTML = "";
    nodes.forEach(node => {
        // console.log(node)


        const row = document.createElement('tr');

        const labelCell = document.createElement('td');
        labelCell.textContent = node.TrueLabel;

        const captionCell = document.createElement('td');
        captionCell.textContent = node.caption;
        dict_nodes[node.TrueLabel]= node.caption
        if (node.caption.toString().replace(/ /g,'_')!==node.TrueLabel.toString().split("_").slice(0, -1).join("_")){//不显示boolean数值
            row.appendChild(labelCell);
            row.appendChild(captionCell);
            tableBody.appendChild(row);
        }

    })
}
let all_lines_button = document.getElementById("all_lines");
let similarity_set = document.getElementById("similarity_set");


similarity_set.addEventListener("click", function() {
    openPopup()
    fetch('http://127.0.0.1:5002/post_similarity', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "simi": global_index_list }),
    })
        .then(response => response.json())

        .catch(error => {
            console.error('Error:', error);
        });

});
all_lines_button.addEventListener("click", function() {
    // iframe.style.display="block"

    // iframe.src = "{{ url_for('iframe_page') }}" + "?param1=" + encodeURIComponent("multi") + "&param2=" + encodeURIComponent("") + "&param3=" + encodeURIComponent("small");
    src_="{{ url_for('iframe_page') }}" + "?param1=" + encodeURIComponent("multi") + "&param2=" + encodeURIComponent("") + "&param3=" + encodeURIComponent("big");
    // window.location.href =src_
    console.log('src_',src_)
    window.open('/iframe_page?param1=multi&param2=&param3=big', '_blank');

});



async function query_max_index() {
    const query = 'MATCH (n:Index) RETURN n.name AS name';
    var session_get_index = driver.session({database:"neo4j"});

    try {
        // 使用 await 等待查询结果
        const resultList = await session_get_index.run(query);

        const numbers = resultList.records.map(record => parseFloat(record.get('name'))).filter(num => !isNaN(num));
        console.log("resultList", numbers); // 这里是您的列表
        call_back_index(numbers)

// 打印新列表以验证结果
//             console.log(newList);
        return  numbers.length;
    } catch (error) {
        console.error("查询数据库时出错:", error);
    } finally {
        await session_get_index.close(); // 确保在结束时关闭会话
    }
}
//function that pass parameters to three-d and two-d
function session_elem(condition){
    var session = driver.session({database:"neo4j"});

    session
        // .run(
        // `MATCH (n)-->(m)
        // WHERE  n.TrueLabel CONTAINS "148" or n.TrueLabel CONTAINS "123" and  NOT n.redundancy
        // RETURN { id: id(n), label:head(labels(n)), caption:n.name } as source, { id: id(m), label:head(labels(m)), caption:m.name } as target LIMIT $limit`, {limit: neo4j.int(5000)})
        //
        .run('MATCH (n)-->(m) \n' +condition+
            '\nRETURN { id: id(n), label:head(labels(n)), caption:n.name, TrueLabel:n.TrueLabel } as source, { id: id(m), label:head(labels(m)), caption:m.name, TrueLabel:m.TrueLabel } as target LIMIT $limit', {limit: neo4j.int(1000)})
        // .run("MATCH (n)\n" +
        //     "UNWIND labels(n) AS label\n" +
        //     "RETURN DISTINCT label\n")
        .then(function (result) {
            console.log("result",result)
            const nodes = {}
            const links = result.records.map(r => {
                var source = r.get('source');source.id = source.id.toNumber();
                nodes[source.id] = source;
                var target = r.get('target');target.id = target.id.toNumber();
                nodes[target.id] = target;
                return {source:source.id,target:target.id}
            });

            session.close();


            global_links=links
            global_nodes=nodes
            const nodes_list=Object.values(nodes)
            nodes_list.forEach(node=>{
                if (node.label==="AI ethics issues"){
                    node.showCaption=get_truelabel_index(node.TrueLabel)
                }else {
                    node.showCaption=node.label
                }

            })

                two_d( nodes_list, links);

        })
        .catch(function (error) {
                console.log(error);
            }
        );
}