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