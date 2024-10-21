import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addPersonRequest,
  deletePersonRequest,
  getPersonsRequest,
  updatePersonRequest,
} from '../../redux/action/action';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const PersonList = () => {
  const persons = useSelector(state => state.persons);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    dispatch(getPersonsRequest());
  }, [dispatch]);

  const handleInputChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {

    if (!formData.name  || !formData.email || !formData.age) {
      alert('Please fill all fields.');
      return;
    }

    const person = { ...formData, age: parseInt(formData.age) };
    if (editingId) {
      dispatch(updatePersonRequest({ ...person, id: editingId }));
    } else {
      dispatch(addPersonRequest(person));
    }
    resetForm();
  };

  const handleEdit = person => {
    setFormData({
      name: person.name,
      email: person.email,
      age: person.age.toString(),
    });
    setEditingId(person.id);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', age: '' });
    setEditingId(null);
  };

  const renderItem = ({ item }) => (
    <View style={styles.personItem}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.age}>Age: {item.age}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => handleEdit(item)}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => dispatch(deletePersonRequest(item.id))}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={formData.name}
          onChangeText={value => handleInputChange('name', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={value => handleInputChange('email', value)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={formData.age}
          onChangeText={value => handleInputChange('age', value)}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={[styles.button1, styles.submitButton]}
          onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {editingId ? 'Update Person' : 'Add Person'}
          </Text>
        </TouchableOpacity>
        {editingId && (
          <TouchableOpacity
            style={[styles.button1, styles.cancelButton]}
            onPress={resetForm}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={persons}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={[styles.list, { marginHorizontal: 20 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  list: {
    flex: 1,
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  personItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  age: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginLeft: 10,
  },
  button1: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#007AFF',
  },
  editButton: {
    backgroundColor: '#4CD964',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
  },
  cancelButton: {
    backgroundColor: '#FF9500',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PersonList;
