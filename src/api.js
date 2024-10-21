let persons = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', age: 28 },
];

export const fetchPersons = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(persons), 500);
  });
};

export const addPerson = (person) => {
  return new Promise((resolve) => {
    const newId = persons.length ? Math.max(...persons.map(p => p.id)) + 1 : 1;
    const newPerson = { ...person, id: newId };
    persons = [...persons, newPerson]; 
    setTimeout(() => resolve(newPerson), 500);
  });
};

export const deletePerson = (id) => {
  return new Promise((resolve) => {
    persons = persons.filter(person => person.id !== id); 
    setTimeout(() => resolve(), 500);
  });
};

export const updatePerson = (updatedPerson) => {
  return new Promise((resolve) => {
    persons = persons.map(person => 
      person.id === updatedPerson.id ? { ...person, ...updatedPerson } : person
    ); 
    setTimeout(() => resolve(updatedPerson), 500);
  });
};
