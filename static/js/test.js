d3.csv("/static/cases.csv").then(function(data) {
    if(data.length > 0) {
        var headers = Object.keys(data[0]);
        console.log(headers)
    }})
