var simi_index_list
fetch('http://127.0.0.1:5002/get_cache', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then(response => response.json())
    .then(data =>{
        // console.log(data)

        simi_index_list=data['receivedData']
        console.log(simi_index_list['receivedData'])
    })
    .catch(error => {
        console.error('Error:', error);
    });
d3.csv("/static/cases.csv").then(function(data) {
    if(data.length > 0) {
        const dictionary = Object.keys(data[0]);
        console.log(dictionary)
        const boolean_item=    [ 'Data_acquisition', 'Data_access', 'Data_modeling', 'Behavior_tracking', 'Behavior_prediction', 'Behaviour_nudging', 'Wrong_user_group', 'Wrong_user_task', 'Surprising_learning_result', 'Positive design that produces negative results that do not meet expectations', 'Negative design that produces negative results that meet expectations', 'Overly human-like and leading to ethics problems', 'Not human-like enough to cause ethics problems', 'Not enough beyond human to cause ethics problems', 'ethics issues caused by the wrong user group', 'ethics issues due to wrong user tasks', 'Infringements on human rights', 'Social detriment', 'Emotional or psychological injury', 'Loss of opportunity', 'Physical injury', 'Economic loss', 'Transparency', 'Justice and fairness', 'Privacy', 'Trust', 'Non-maleficence', 'Responsibility']

        const iframe = document.getElementById('dictionaryFrame');
        const doc = iframe.contentDocument || iframe.contentWindow.document;

        doc.open();
        doc.write('<html><head><title>Inner Frame</title><style>.keys-container {column-count: 2; column-gap: 20px;}.key-container {display: flex; align-items: center; break-inside: avoid; margin-bottom: 10px;}.key-name {flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}.input-field {width: 80px; margin-left: 10px;}</style></head><body>');
        doc.write('<div class="keys-container">');

        let counter = 1;
        const remove_list=['URL','Time','Index']
        for (let key in dictionary) {
            key=dictionary[key]
            if ( !remove_list.includes(key)){
                var value_item=simi_index_list[key]

                if (boolean_item.includes(key)){
                    key=key+" (Boolean)"

                }

                doc.write(`<div class="key-container"><span class="key-name" data-key="${key}">${counter}. ${key}</span>: <input class="input-field" type="number" value=${value_item}></div>`);
                counter++;
            }

        }

        doc.write('</div></body></html>');
        doc.close();

        document.getElementById('confirmButton').addEventListener('click', () => {


            const inputFields = doc.querySelectorAll('.input-field');
            const resultDictionary = {};

            inputFields.forEach((input, index) => {
                const keyName = doc.querySelectorAll('.key-name')[index].getAttribute('data-key').replace(' (Boolean)','');

                resultDictionary[keyName] = parseFloat(input.value);
            });

            console.log(resultDictionary);
            fetch('http://127.0.0.1:5002/post_similarity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({'weights':resultDictionary}),
            })
                .then(response => response.json())

                .catch(error => {
                    console.error('Error:', error);
                });
            // Here you can do something with the resultDictionary,
            // like displaying it on the page or sending it to a server.
            alert('Weights have been stored.')
        });
    }}).catch(function(error) {
    console.error('Error loading the CSV file:', error);

});
