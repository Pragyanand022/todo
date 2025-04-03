import { faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import ButtonComp from './ButtonComp';

function ItemCard({itemTitle, itemDescription, itemKey, itemTime, isEditmode, onDelete, onUpdate}) {
    const [editmode, setEditmode] = useState(isEditmode);
    const [title, setTitle] = useState(itemTitle);
    const [description, setDescription] = useState(itemDescription);

    const handleSubmit = (e)=>{
        // e.preventDefault();
        setEditmode(false);
        onUpdate(itemKey, title, description);
    }

    const handleDeleteItem = ()=>{
        onDelete(itemKey);
    }

    const handleEditItem = ()=>{
        setEditmode(true);
    }

  return (
    <div className='border-white border-2 w-[80%] h-full bg-purple-400 mx-auto rounded-md p-3 flex flex-row'>
        <div className='relative w-[80%] sm:w-[90%]'>
            <form>
                {
                    editmode?(<>
                        <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder='write the title' name='title' className=' w-full outline-none' value={title}/>
                        <hr className='w-full m-1 ml-0 border-t-3'/>
                        <textarea rows={3} onChange={(e)=>setDescription(e.target.value)} type='text' placeholder='write the details' name='description' className='resize-none w-full outline-none' value={description}></textarea>
                    </>
                    )
                                
                    :(<>
                        <h2 className='font-bold'>{title}</h2>
                        <hr className='w-full m-1 ml-0 border-t-3'/>
                        <p> {description} </p>
                    </>
                    )
                }
            </form>
            <p className='absolute bottom-[0.5px] text-xs text-black mt-2 font-bold'>{itemTime}</p>
        </div>

        <div className='flex flex-col items-center justify-center gap-[1rem] mx-auto'>
            {
                editmode
                ?<ButtonComp type={'submit'} color={'green'} onClickFunction={handleSubmit} icon={faCheck}/>
                :<ButtonComp type={'button'} color={'blue'} onClickFunction={handleEditItem} icon={faPen} />
            }
            <ButtonComp type={'button'} color={'red'} onClickFunction={handleDeleteItem} icon={faTrash}/>
        </div>
    </div>
  )
}

export default ItemCard