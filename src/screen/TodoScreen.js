import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IconButton } from 'react-native-paper';
import FallBack from '../components/FallBack';

const TodoScreen = () => {

    //Init kocal states
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [editedTodo, setEditedTodo] = useState(null);

    //handle add todo
    const handleAddTodo =()=> {
      if(todo === ""){
        return;
      }

      setTodoList([...todoList, {id: Date.now().toString(), title: todo}])
      setTodo("")
    }

    //handle delete todo
    const handleDeleteTodo =(id)=> {
      const newTodoList = todoList.filter((todo) => todo.id !== id)
      setTodoList(newTodoList)
    }

    //handle Edit todo
    const handleEditTodo = (todo) => {
      setEditedTodo(todo);
      setTodo(todo.title);
    }

    //handle update todo
    const handleUpdateTodo = ()=>{

      const updatedTotos = todoList.map((item) => {
        if (item.id === editedTodo.id) {
          return {...item, title: todo};
        }

        return item;
      }) ;
      setTodoList(updatedTotos);
      setEditedTodo(null);
      setTodo("");
    }

    //render todo
    const renderTodos = ({item, index}) => {
        return(
            <View style={{backgroundColor:"#1e90ff", borderRadius:6, paddingHorizontal:6, paddingVertical:12, marginBottom:12, flexDirection:"row", alignItems:"center"}}>
                <Text style={{color:"#fff", fontSize:20, fontWeight:"800", flex:1}}> {item.title}</Text>
                <IconButton icon="pencil" iconColor='#fff' onPress={()=>handleEditTodo(item)}/>
                <IconButton icon="trash-can" iconColor='#fff'onPress={()=>handleDeleteTodo(item.id)}/>
            </View>
        );
    };
    
  return (
    <View style={{marginHorizontal:16, marginTop:60}}>
      <TextInput 
        style= {{borderWidth:2, borderColor:"#1e90ff", borderRadius:6, paddingVertical:12, paddingHorizontal:16}} placeholder="Add a Task" 
            value={todo}
            onChangeText={(userText) => setTodo(userText)} 
        />

      {
        editedTodo ? 
        <TouchableOpacity style={{backgroundColor:"#003", borderRadius:6, paddingVertical:8, marginVertical:24, alignItems:"center"}}
          onPress={() => handleUpdateTodo()}
        >
          <Text style={{color:"#fff", fontWeight:"bold", fontSize:20}}>Update</Text>
        </TouchableOpacity> :

        <TouchableOpacity style={{backgroundColor:"#000", borderRadius:6, paddingVertical:8, marginVertical:24, alignItems:"center"}}
          onPress={() => handleAddTodo()}
        >
          <Text style={{color:"#fff", fontWeight:"bold", fontSize:20}}>Add</Text>
        </TouchableOpacity> 
      }  

       

      {/* render todo list */}
      <FlatList data={todoList} renderItem={renderTodos}/>

      {/*to get pic when nothing in the list*/}
      {
        todoList.length <=0 && <FallBack/>
      }

    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({})