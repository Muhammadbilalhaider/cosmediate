'use client';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [showTreatments, setShowTreatment] = useState(false);
    const [showSkinImprovements, setShowSkinImprovements] = useState(false);
    const [showAddTreatment, setShowAddTreatment] = useState(false);
    const [newTreatment, setNewTreatment] = useState('');
    const [skinList, setSkinList] = useState([]);
    const [addSkinList, setAddedList] = useState([]);
    const [selectedTreatment, setSelectedTreatment] = useState('');

    const settingList = ["General", "Password", "Price", "Treatments"];
    const treatmentList = ["Injectables", "Skin Improvements", "Hair Removal", "Soft Surgery", "Plastic Surgery"];



    useEffect(() => {
        const storedList = localStorage.getItem('addSkinList');
        const dropList = localStorage.getItem('dropList');
     
        setAddedList(storedList ? JSON.parse(storedList) : []);
        setSkinList(dropList ? JSON.parse(dropList) : []);
     
        
    }, []);
    
    const handleAddTreatment = () => {
        setShowAddTreatment(true);
    };

    const handleCancel = () => {
        setShowAddTreatment(false);
        setNewTreatment('');
    };

    const handleAdd = () => {
        if (newTreatment.trim()) {
            setSkinList((prevList) => {
                const updatedList = [...prevList, newTreatment.trim()];
                localStorage.setItem('dropList', JSON.stringify(updatedList));
                return updatedList;
            });
            setShowAddTreatment(false);
            setNewTreatment('');
        } else {
            alert('Please enter a treatment name!');
        }
    };

    const handleSaveTreatment = () => {
        if (selectedTreatment && !addSkinList.includes(selectedTreatment)) {
            setAddedList((prevList) =>
                {
                    const updatedList = [...prevList, selectedTreatment];
                    localStorage.setItem('addSkinList', JSON.stringify(updatedList));
                    return updatedList;
                } )
        } else {
            alert('Already Selected');
        }
    };

    return (
        <div className="flex w-full h-full flex-col p-3">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-8">
                Settings
            </h1>
            <div className="w-56 bg-[#F3F6FF] relative">
                {settingList.map((item, index) => (
                    <li
                        key={index}
                        className="relative"
                        onMouseEnter={() => {
                            if (item === 'Treatments') {
                                setShowTreatment(true);
                            }
                        }}
                        onMouseLeave={() => {
                            if (item === 'Treatments') {
                                setShowTreatment(false);
                            }
                        }}
                    >
                        <div className="p-2 text-gray-800 hover:text-indigo-600 hover:bg-white font-medium cursor-pointer">
                            {item}
                        </div>
                    </li>
                ))}

                {showTreatments && (
                    <div
                        className="absolute top-0 left-56 mt-1 w-full bg-white shadow-md rounded-lg z-10"
                        onMouseEnter={() => setShowTreatment(true)}
                        onMouseLeave={() => setShowTreatment(false)}
                    >
                        <ul className='w-full'>
                            {treatmentList.map((subItem, subIndex) => (
                                <li
                                    key={subIndex}
                                    className="p-2 text-gray-800 hover:text-indigo-600 hover:bg-gray-100 cursor-pointer"
                                    onMouseEnter={() => {
                                        if (subItem === "Skin Improvements") {
                                            setShowSkinImprovements(true);
                                        }
                                    }}
                                >
                                    <div className="p-2 text-gray-800 hover:text-indigo-600 font-medium cursor-pointer">
                                        {subItem}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {showSkinImprovements && (
                    <div
                        className="absolute w-full top-0 left-96 ml-20 mt-1  min-h-28 bg-[#F3F6FF] shadow-md rounded-lg z-10"
                        onMouseEnter={() => setShowTreatment(true)}
                    >
                        <div className='flex flex-col w-full'>
                            {addSkinList.map((item, index) => (
                                <li key={index} className="p-2 text-black">
                                    {item}
                                </li>
                            ))}
                        </div>
                        <div className="relative w-56 bottom-0 bg-white flex-row items-center">
                            <div className="flex flex-row items-center">
                                <select
                                    className="w-full p-2 border rounded-md text-black"
                                    value={selectedTreatment}
                                    onChange={(e) => setSelectedTreatment(e.target.value)}
                                >
                                    <option value="" className="text-black">
                                        Select Treatment
                                    </option>
                                    {skinList.map((item, index) => (
                                        <option key={index} value={item} className="text-black">
                                            {item}
                                        </option>
                                    ))}
                                </select>
                                <img
                                    className="cursor-pointer w-6 h-6 ml-2"
                                    src="/add.svg"
                                    alt="Add"
                                    onClick={handleAddTreatment}
                                />
                            </div>
                            <div className="flex w-full flex-row justify-between mt-2">
                                <button
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-md"
                                    onClick={handleSaveTreatment}
                                >
                                    Save
                                </button>
                                <button className="px-4 py-2 bg-gray-300 rounded-md">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {showAddTreatment && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl text-black font-bold mb-4">Add New Treatment</h2>
                        <input
                            className="w-full p-2 border text-black rounded-md mb-4"
                            type="text"
                            value={newTreatment}
                            onChange={(e) => setNewTreatment(e.target.value)}
                            placeholder="Enter treatment name"
                        />
                        <div className="flex justify-end space-x-2">
                            <button
                                className="px-4 py-2 bg-gray-300 rounded-md"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-indigo-600 text-white rounded-md"
                                onClick={handleAdd}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
