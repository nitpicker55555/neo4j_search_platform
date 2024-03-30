const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "12345678"),{encrypted: false});
var maxNumber=0
// Load the CSV file
d3.csv("/static/cases.csv").then(function(data) {
    if(data.length > 0){
        var headers = Object.keys(data[0]);
        var specialHeaders = ['Data acquisition', 'Data access', 'Data modeling', 'Behavior tracking', 'Behavior prediction', 'Behaviour nudging', 'Wrong user group', 'Wrong user task', 'Surprising learning result', 'Positive design that produces negative results that do not meet expectations', 'Negative design that produces negative results that meet expectations', 'Overly human-like and leading to ethics problems', 'Not human-like enough to cause ethics problems', 'Not enough beyond human to cause ethics problems', 'ethics issues caused by the wrong user group', 'ethics issues due to wrong user tasks', 'Infringements on human rights', 'Social detriment', 'Emotional or psychological injury', 'Loss of opportunity', 'Physical injury', 'Economic loss', 'Transparency', 'Justice and fairness', 'Privacy', 'Trust', 'Non-maleficence', 'Responsibility']; // Headers for dropdown
        var formContainer = document.getElementById('form');
        var formRow = document.createElement('div');
        formRow.className = 'form-row';

        headers.forEach(function(header, index) {
            var formGroup = document.createElement('div');
            formGroup.className = 'form-group';

            // Check if header is in the special list
            if (specialHeaders.includes(header)) {
                // Create dropdown for special headers
                formGroup.innerHTML = '<label for="' + header + '">' + (index + 1) + '. ' + header + ':</label>' +
                    '<select id="' + header + '" name="' + header + '">' +
                    '<option value="true">True</option>' +
                    '<option value="false">False</option>' +
                    '</select>';
            } else {
                // Create text input for other headers
                formGroup.innerHTML = '<label for="' + header + '">' + (index + 1) + '. ' + header + ':</label>' +
                    '<input type="text" id="' + header + '" name="' + header + '">';
            }

            formRow.appendChild(formGroup);

            // Append the row and create a new one at appropriate intervals
            if ((index + 1) % 4 === 0 || index === headers.length - 1) {
                formContainer.appendChild(formRow);
                if (index !== headers.length - 1) {
                    formRow = document.createElement('div');
                    formRow.className = 'form-row';
                }
            }
        });
    }
    index_fill()
}).catch(function(error) {
    console.error('Error loading the CSV file:', error);
});

async function queryDatabase() {
    const query = 'MATCH (n:Index) RETURN n.name AS name';
    var session_get_index = driver.session({database:"neo4j"});

    try {
        // 使用 await 等待查询结果
        const resultList = await session_get_index.run(query);

        const numbers = resultList.records.map(record => parseFloat(record.get('name'))).filter(num => !isNaN(num));
        console.log("resultList", numbers,Math.max(...numbers)); // index start from 0

// 打印新列表以验证结果
//             console.log(newList);
        return Math.max(...numbers);
    } catch (error) {
        console.error("查询数据库时出错:", error);
    } finally {
        await session_get_index.close(); // 确保在结束时关闭会话
    }
}
// Function to handle Confirm button click
document.getElementById('confirmBtn').addEventListener('click', function() {
    var inputs = document.querySelectorAll('#form input, #form select');
    var data = {};
    inputs.forEach(function(input) {
        data[input.name] = input.value;
    });
    console.log(data);

    // Send data to Flask backend
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    alert("Data added successfully")
    var textInputs = document.querySelectorAll('#form input[type="text"]');
    textInputs.forEach(function(input) {
        var label = input.previousElementSibling;
        if (label && label.tagName === 'LABEL' &&  !label.textContent.trim().startsWith('1. Index:')) {
            input.value = ""; // Remove colon and trailing spaces
        }
        if (label && label.tagName === 'LABEL' && label.textContent.trim().startsWith('1. Index:')) {
            input.value = parseInt(input.value)+1
            // input.readOnly/ = true;
        }
    });

});
document.getElementById('submitButton').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;

    fetch('/fetch_web', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: inputText}),
    })
        .then(response => response.json())
        .then(data => {
            // document.getElementById('responseText').textContent = data.reply;
            for (const key in data['reply']) {

                // console.log(`Key: ${key}, Value: ${data[key]}`);
                fill_form(data['reply'][key],key)

            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
document.getElementById('submit_text').addEventListener('click', function() {
    var inputText = document.getElementById('text_content').value;

    fetch('/process_text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: inputText}),
    })
        .then(response => response.json())
        .then(data => {
            // document.getElementById('responseText').textContent = data.reply;
            for (const key in data['reply']) {

                // console.log(`Key: ${key}, Value: ${data[key]}`);
                fill_form(data['reply'][key],key)

            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch('/upload_doc', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('text_content').value=data['reply']
            document.getElementById('submit_text').click()
        })
        .catch(error => console.error('Error:', error));
});
function fill_form(string,label_name){
    var textInputs = document.querySelectorAll('#form input[type="text"]');
    textInputs.forEach(function(input) {
        var label = input.previousElementSibling;
        if (label && label.tagName === 'LABEL' &&  label.textContent.trim().includes(label_name)) {
            input.value = string; // Remove colon and trailing spaces
        }
    });
}
// document.getElementById('fillBtn').addEventListener('click', function() {
//   var textInputs = document.querySelectorAll('#form input[type="text"]');
//   textInputs.forEach(function(input) {
//     var label = input.previousElementSibling;
//     if (label && label.tagName === 'LABEL' &&  !label.textContent.trim().startsWith('1. Index:')) {
//       input.value = label.textContent.replace(/:\s*$/, ''); // Remove colon and trailing spaces
//     }
//   });
// });
function index_fill() {
    // const getNumber=  queryDatabase();
    // console.log(getNumber,"asd")
    queryDatabase().then(result => {
        maxNumber= result//

        // console.log(maxNumber)
        var inputs = document.querySelectorAll('#form input, #form select');
        inputs.forEach(function(input) {
            var label = input.previousElementSibling;
            if (label && label.tagName === 'LABEL' && label.textContent.trim().startsWith('1. Index:')) {
                input.value = maxNumber+1;
                input.readOnly = true;
            }
        })
    }).catch(error => {
        console.error('Promise rejected:', error);
    });


}