import { useEffect, useState } from 'react'
import './App.css'
import {v4 as uuidkey} from 'uuid'
import ItemCard from './components/ItemCard'

function App() {

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const savedItems = localStorage.getItem("todoItems");
  
    if (savedItems) {
      try {
        setItemList(JSON.parse(savedItems));
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
        setItemList([]); // Fallback to an empty array if JSON parsing fails
      }
    } else {
      setItemList([]); // Initialize with an empty array if nothing exists
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem("todoItems",JSON.stringify(itemList));
  },[itemList]);

  const handleClick = ()=>{
    const date = new Date().toString().split("GMT")[0];
  
    setItemList((pre)=>[{
      itemKey:uuidkey(),
      itemTitle:"",
      itemDescription:"",
      itemTime:date,
      isEditmode:true
    }, ...pre])
  }

  const handleDelete = (key)=>{
    setItemList((pre)=>{
      return pre.filter((item)=>
        item.itemKey !== key
      )
    })
  }

  const handleUpdate = (key, newTitle, newDesc) =>{
    setItemList((pre)=>{
      return pre.map((item)=>{
        return (item.itemKey===key)?{...item,itemTitle:newTitle,itemDescription:newDesc,isEditmode:false}:item;
      })
    })
  }

  return (
    <>
      <div className='flex flex-col items-center box'>
        <h1 className='text-white mt-5 font-bold text-5xl'>myTodo</h1>
        <div className='mt-10 w-[100%] flex flex-col justify-center items-center gap-4'>
          <button type='button' onClick={handleClick} className='w-1/4 bg-green-400 font-extrabold rounded-lg p-2 hover:cursor-pointer hover:shadow-[1px_2px_3px_white] mb-5'>Create New</button>
          {itemList.map((item)=>(
            <ItemCard key={item.itemKey} {...item} onDelete={handleDelete} onUpdate={handleUpdate}/>
          ))}
        </div>
      </div>  
    </>
  )
}

export default App
