let states = [
  'AC - Acre',
  'AL - Alagoas',
  'AP - Amapá',
  'AM - Amazonas',
  'BA - Bahia',
  'CE - Ceará',
  'DF - Distrito Federal',
  'ES - Espírito Santo',
  'GO - Goías',
  'MA - Maranhão',
  'MT - Mato Grosso',
  'MS - Mato Grosso do Sul',
  'MG - Minas Gerais',
  'PA - Pará',
  'PB - Paraíba',
  'PR - Paraná',
  'PE - Pernambuco',
  'PI - Piauí',
  'RJ - Rio de Janeiro',
  'RN - Rio Grande do Norte',
  'RS - Rio Grande do Sul',
  'RO - Rondônia',
  'RR - Roraíma',
  'SC - Santa Catarina',
  'SP - São Paulo',
  'SE - Sergipe',
  'TO - Tocantins'
  ];
  // Peguei a Array no comentário do Github source:https://gist.github.com/kavalcante/16106796c430c1711a71c5ba1213cee5#gistcomment-3458083

const lista = document.querySelector('#estado');

let calendar = document.getElementById('date').DatePickerX.init( {
  format: 'dd/mm/yyyy',
});

for (const state of states) {
  let option = document.createElement('option');
  option.innerHTML = state;
  lista.appendChild(option);
}

const submitButton = document.querySelector('#enviar');
submitButton.preventDefault();
