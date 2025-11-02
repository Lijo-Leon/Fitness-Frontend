import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import { Plus, X, Trash2, Download } from 'lucide-react';
import FormInputs from '../components/FormInputs'
import { getAllFitnessDataAPI, deleteFitnessDataAPI } from '../services/allAPI';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Swal from 'sweetalert2'

function Dashboard() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // runs once when component mounts


    const [fitnessData, setFitnessData] = useState({
        details: {
            date: "",
            fooditems: "",
            calories: "",
            workout: "",
            duration: "",
            burned: "",
            mealType: "",
        }
    });

    const [fitnessList, setFitnessList] = useState([]);
    const [addDetails, setAddDetails] = useState(true);

    useEffect(() => {
        fetchFitnessData();
    }, []);

    const fetchFitnessData = async () => {
        try {
            const response = await getAllFitnessDataAPI();
            setFitnessList(response.data);
        } catch (error) {
            console.error("Error fetching fitness data:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteFitnessDataAPI(id);
            fetchFitnessData();
            let timerInterval;
            Swal.fire({
                background: "beige",
                title: "DELETING!",
                html: "Data will delete in <b></b> milliseconds.",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("b");
                    timerInterval = setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
            });
        } catch (error) {
            console.error("Error deleting:", error);
        }
    };

    const handleDownloadPDF = async (id) => {
        try {
            const element = document.getElementById(`fitness-item-${id}`);
            if (!element) {
                alert("No content found to download.");
                return;
            }

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff",
            });

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`Fitness_Report_${id}.pdf`);
        } catch (error) {
            console.error("PDF generation failed:", error);
            alert("Failed to generate PDF. Please try again.");
        }
    };

    return (
        <div className='w-full relative bg-amber-50'>
            <Header addDetails={addDetails} setAddDetails={setAddDetails} />
            <div className='w-full bg-amber-50 pt-13'>

                {addDetails && (
                    <div>
                        <div className="head w-full px-4 md:px-20 mt-8 md:mt-14 flex items-center">
                            <h1 className='font2 text-black ml-2 md:ml-7 text-2xl md:text-4xl'>HISTORY</h1>
                            <div className="head-inner w-full h-full relative flex justify-end gap-2">
                                <button
                                    onClick={() => setAddDetails(false)}
                                    className='flex gap-2 bg-black text-amber-50 font-semibold px-3 py-2 rounded text-sm md:text-base'>
                                    <Plus strokeWidth={2} />Add
                                </button>
                            </div>
                        </div>

                        <div className="main w-full px-4 md:px-20 mt-6 pb-10 min-h-screen">
                            <div className="box w-full pb-8 bg-black flex flex-col items-center rounded-2xl gap-8 text-amber-50 tracking-wide text-lg font-semibold px-4 md:px-10 pt-5">
                                <div className="views w-full flex flex-col md:flex-row">
                                    <button className='w-full h-12 md:h-15 border border-amber-50/0 focus:border focus:border-b-amber-50 focus:text-amber-200 px-2 md:px-4 transition-all duration-200 text-sm md:text-xl uppercase'>Recently Added</button>
                                </div>

                                {fitnessList.length > 0 ? (
                                    <div className="details w-full h-auto mt-6 flex flex-col gap-5">
                                        {fitnessList.map((item) => (
                                            <div key={item.id} id={`fitness-item-${item.id}`} className="bg-amber-50 text-black rounded-xl p-4 flex flex-col md:flex-row justify-between items-center shadow-md">
                                                <div className='w-full'>
                                                    <h1 className='text-2xl font-bold font1 mb-2 underline'>{item.date}</h1>
                                                    <div className='flex w-full scale-75 md:scale-100 mt-6'>
                                                        <div className="titles w-full md:w-auto -ml-10 md:ml-0">
                                                            <p>Meal</p>
                                                            <p>Food</p>
                                                            <p>Calories</p>
                                                            <p>Workout</p>
                                                            <p>Workout Time</p>
                                                            <p>Burned</p>
                                                        </div>

                                                        <div className="titles -ml-40 md:ml-10">
                                                            <p>:</p>
                                                            <p>:</p>
                                                            <p>:</p>
                                                            <p>:</p>
                                                            <p>:</p>
                                                            <p>:</p>
                                                        </div>

                                                        <div className="titles ml-10 md:w-auto w-40">
                                                            <p>{item.mealType}</p>
                                                            <p>{item.fooditems}</p>
                                                            <p>{item.calories} kcal</p>
                                                            <p className='capitalize'>{item.workout}</p>
                                                            <p>{item.duration} mins</p>
                                                            <p>{item.burned} kcal</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 mt-4 md:mt-0">
                                                    <button
                                                        onClick={() => handleDownloadPDF(item.id)}
                                                        className='flex items-center gap-4 bg-black text-white px-6 py-2 rounded-full hover:bg-amber-50 hover:text-black border-2 transition-all duration-300'>
                                                        Download<Download size={16} strokeWidth={3} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(item.id)}
                                                        className='flex items-center gap-4 bg-black text-white px-6 py-2 rounded-full hover:bg-amber-50 hover:text-black border-2 transition-all duration-300'>
                                                        Delete<Trash2 size={17} strokeWidth={2} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className='text-gray-300 mt-10'>No fitness data added yet.</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {!addDetails && (
                    <div>
                        <div className="head w-full px-4 md:px-20 mt-8 md:mt-14 flex items-center">
                            <h1 className='font2 text-black ml-2 md:ml-7 text-2xl md:text-4xl'>DASHBOARD</h1>
                            <div className="head-inner w-full h-full relative flex justify-end">
                                <button
                                    onClick={() => { setAddDetails(true); fetchFitnessData(); }}
                                    className='flex gap-2 bg-red-800 text-amber-50 font-semibold px-3 py-2 rounded text-sm md:text-base'>
                                    Close<X strokeWidth={2} />
                                </button>
                            </div>
                        </div>

                        <FormInputs fitnessData={fitnessData} setFitnessData={setFitnessData} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
