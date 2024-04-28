const rows = [
  { id: 1, name: 'Elizabeth Watson', specialization: 'Go Lang' },
  { id: 2, name: 'Elizabeth Allen', specialization: 'Rust' },
  { id: 3, name: 'Caleb Jones', specialization: 'Python' },
  { id: 4, name: 'Javier Ortiz', specialization: 'HTML' },
  { id: 5, name: 'Brandon Taylor', specialization: 'CSS' },
];

let object: any = {};

rows.forEach((row) => {
  const newObj: any = { ...row };
  newObj.checked = false;
  object[newObj.name] = { ...newObj };
});

console.log(object);
