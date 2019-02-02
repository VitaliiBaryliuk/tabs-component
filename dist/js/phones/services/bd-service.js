
const tabs = [
    { title: 'Tab 1', content: 'Some text 1' },
    { title: 'Tab 2', content: 'Some text 2' },
    { title: 'Tab 3', content: 'Some text 3' },
];


const bdService = {
  getAll() {
    return tabs;
  },

  getById() {
    // const xhr = new XMLHttpRequest(); 
    // xhr.open('GET', `js/phones-base/${phoneId}.json`, false);
    // xhr.send();
    
    // if (xhr.status === 200) {
    //     return JSON.parse(xhr.responseText);
    // } else {
    //     return false;
    // }

  }
}

export default bdService;