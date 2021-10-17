const apiKey = 'd510d49246e7317a0b1f3faa';
const $form = document.querySelector('.form');
const $result = document.querySelector('.result');
const $switchBtn = document.querySelector('#switch-currencies');

$form.addEventListener('submit', convert); //Convert currencies
$switchBtn.addEventListener('click', switchCurrencies); //Switch currencies

async function convert(event) {
    event.preventDefault();
    
    let amount = document.querySelector('#amount').value;
    let base_code = document.querySelector('#base__code').value;
    let target_code = document.querySelector('#target__code').value;

    try {
        let response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${base_code}/${target_code}/${amount}`);
        let json = await response.json();

        if (json.result === 'error') throw json.error-type;

        $result.innerHTML = `<p>
                                ${amount} ${base_code} a ${target_code} = ${json.conversion_result} ${target_code}
                            </p>`;
    } catch (error) {
        alert(error);
    }
}

function switchCurrencies(event) {
    event.preventDefault();

    let aux;
    let base_code = document.querySelector('#base__code');
    let target_code = document.querySelector('#target__code');

    aux = base_code.value;
    base_code.value = target_code.value;
    target_code.value = aux;
}