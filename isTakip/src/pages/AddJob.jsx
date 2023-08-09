import React from 'react';
import {statusOptions, typeOptions} from "../constants"
import { v4  } from 'uuid';
import { addJob } from '../redux/jobSlice';
import {useDispatch} from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const AddJob = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

// formun yönetilmesi
const handleSubmit=(e)=>{
  e.preventDefault();

const formData=new FormData(e.target);
// form verilerinden bir obje oluşturma
const dataObj=Object.fromEntries(formData);
// objeye uuid kütüphanesinden id ekleme
dataObj.id=v4();
// eklenme tarihi oluşturma
dataObj.date=new Date().toLocaleDateString();


// !api ye ekleme
axios.post("http://localhost:3030/jobs",dataObj)
.then(()=>{
  // !store'u güncelle
  dispatch(addJob(dataObj));
  //Ana sayfaya dönme
  navigate("/");
  // bildirim gösterme
  toast.success('🦄Başarıyla Eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
})




};



  return (
    <div className='add-section'>
      <h2>Yeni İş Ekle</h2>
      <form onSubmit={handleSubmit} >
        <div className='input-field'>
          <label >Pozisyon</label>
          <input name='position' type="text" />
        </div>
        <div className='input-field'>
          <label >Şirket</label>
          <input name='company' type="text" />
        </div>
        <div className='input-field'>
          <label >Lokasyon</label>
          <input name='location' type="text" />
        </div>
        <div className='input-field'>
          <label >Durum</label>
          {/* constants.js dosyasından */}
          <select name='status' >
            {statusOptions.map((opt)=><option key={opt.value}>{opt.label}</option>)}
          </select>
        </div>
        <div className='input-field'>
          <label >Tür</label>
          <select name='type'>
            {typeOptions.map((opt)=><option key={opt.value}>{opt.label}</option>)}
          </select>
        </div>
        <button type='submit' >Ekle</button>
      </form>
    </div>
  )
}

export default AddJob