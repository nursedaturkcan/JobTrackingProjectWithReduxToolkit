import React, { useState } from 'react';
import { sortOptions, typeOptions, statusOptions } from '../constants';
import { filterBySearch, filterBySort, filterByStatus, filterByType, clearFilters } from '../redux/jobSlice';
import { useDispatch } from "react-redux";

const Filter = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
        dispatch(filterBySearch(e.target.value));
    }

    const handleStatusChange = (e) => {
        dispatch(filterByStatus(e.target.value));
    }

    const handleTypeSearch = (e) => {
        dispatch(filterByType(e.target.value));
    }

    const handleSortSearch = (e) => {
        dispatch(filterBySort(e.target.value));
    }

    const handleClearFilters = () => {
        setSearchValue('');
        dispatch(clearFilters());
    }

    return (
        <section className='filter-sec'>
            <h3>Filtreleme Formu</h3>
            <form >
                <div className='input-field'>
                    <label >Arama</label>
                    <input type="text" value={searchValue} onChange={handleSearchChange} />
                </div>
                <div className='input-field'>
                    <label >Durum</label>
                    <select onChange={handleStatusChange}>
                        <option hidden >Seçiniz</option>
                        {statusOptions.map((opt, i) => {
                            return <option key={i}>{opt.label}</option>
                        })}
                    </select>
                </div>
                <div className='input-field'>
                    <label >Tip</label>
                    <select onChange={handleTypeSearch} >
                        <option hidden >Seçiniz</option>
                        {typeOptions.map((opt) => {
                            return <option key={opt.value}>{opt.label}</option>
                        })}
                    </select>
                </div>
                <div className='input-field'>
                    <label >Sıralama</label>
                    <select onChange={handleSortSearch} >
                        {sortOptions.map((opt) => {
                            return <option key={opt}>{opt}</option>
                        })}
                    </select>
                </div>
                <button type='button' onClick={handleClearFilters}>Filtreleri Temizle</button>
            </form>
        </section>
    )
}

export default Filter;
