// import {global_links,global_nodes} from './main.js'
import {svg_span_draw} from "./svg_span_draw.js";
// var svg_span = d3.select(".svg-span");
// console.log(global_nodes)
// console.log(global_links)
// import {dict_level} from "./main";

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
            const current_nodes=data
            console.log(data)
            // d3.select(".background path").style("stroke-opacity", .1); // 假设新的透明度为0.5
        })
        .catch(error => {
            console.error('Error:', error);
        });
} catch (error) {
    console.error('Error:', error);
}
fetch('http://127.0.0.1:5002/post_level')
    .then(response => response.json())
    .then(data => {
        const dict_level = data.reply;
        // console.log('dict_level:', dict_level);
    })
    .catch(error => console.error('Error fetching data:', error));

