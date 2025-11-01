import React, { useEffect, useState } from "react";
import { FaFire } from "react-icons/fa";
import { CalendarDays, Dumbbell } from "lucide-react";
import Swal from 'sweetalert2'
import {
    addFitnessDataAPI,
    getAllFitnessDataAPI,
    deleteFitnessDataAPI,
    updateFitnessDataAPI,
} from "../services/allAPI";

function Form({ fitnessData, setFitnessData }) {
    const [allData, setAllData] = useState([]); // All saved fitness logs
    const [editingId, setEditingId] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFitnessData((prev) => ({
            ...prev,
            details: {
                ...prev.details,
                [name]: value,
            },
        }));
    };

    const handleSubmit = async () => {
        const { date, calories, mealType } = fitnessData.details;


        if (!date || !calories || !mealType) {
            Swal.fire({
                text: "Please fill all required fields (Date, Calories, Meal Type)",
                background: "beige"

            });

            return;
        }

        try {
            if (editingId) {
                await updateFitnessDataAPI(editingId, fitnessData.details);
                Swal.fire({
                    title: "Good job!",
                    text: "Updated Successfully!",
                    icon: "success",
                    background: "beige"
                });

            } else {
                await addFitnessDataAPI(fitnessData.details);
                Swal.fire({
                    title: "Good job!",
                    text: "Fitness Data Added Successfully!",
                    icon: "success",
                    background: "beige"
                });

            }

            fetchAllData();
            resetForm();
            setEditingId(null);
        } catch (error) {
            console.error("Error saving data:", error);
            alert("Failed to save data. Please try again.");
        }
    };


    const fetchAllData = async () => {
        try {
            const response = await getAllFitnessDataAPI();
            setAllData(response.data || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    const handleDelete = async (id) => {
        try {
            await deleteFitnessDataAPI(id);
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

            fetchAllData();
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };


    const handleEdit = (item) => {
        setFitnessData({ details: item });
        setEditingId(item.id);
    };


    const resetForm = () => {
        setFitnessData({
            details: {
                date: "",
                fooditems: "",
                calories: "",
                workout: "",
                duration: "",
                burned: "",
                mealType: "",
            },
        });
        setEditingId(null);
    };


    useEffect(() => {
        fetchAllData();
    }, []);

    return (
        <div className="w-full px-4 md:px-20 mt-6 pb-10 bg-amber-50">
            <div className="box pb-8 md:pb-15 bg-black flex flex-col-reverse md:flex-row items-center rounded-2xl gap-8 md:gap-15 text-amber-50 tracking-wide text-lg md:text-xl px-4 md:px-10 font-semibold pt-5">
                <div className="left details mt-14 md:mt-12 hidden md:flex flex-col justify-center gap-5 md:gap-17 w-full md:w-auto">
                    <div className="day bg-amber-50 h-40 w-full md:w-90 rounded-xl px-2 pt-2 md:mt-0 mt-4">
                        <div className="head text-black flex justify-between px-1 pt-2 pl-4 md:pl-7">
                            <h1 className="text-[28px] md:text-[39px] font-bold tracking-wider font1">
                                ACTIVE DAY
                            </h1>
                            <CalendarDays className="text-green-500 h-9 w-9 md:h-11 md:w-11 p-2 border-green-500 border-2 rounded-full" />
                        </div>
                        <h1 className="text-black pl-4 md:pl-7 font-thin text-4xl md:text-6xl mt-1 font2">
                            {fitnessData.details.date || "—"}
                        </h1>
                    </div>

                    <div className="calories bg-amber-50 h-40 w-full md:w-90 rounded-xl px-2 pt-2">
                        <div className="head text-black flex justify-between px-1 pt-2 pl-4 md:pl-7">
                            <h1 className="text-[28px] md:text-[39px] font-bold tracking-wider font1">
                                CALORIES
                            </h1>
                            <FaFire className="text-red-500 h-9 w-9 md:h-11 md:w-11 p-2 border-red-500 border-2 rounded-full" />
                        </div>
                        <h1 className="text-black pl-4 md:pl-7 font-thin text-4xl md:text-6xl mt-1 font2">
                            {fitnessData.details.calories
                                ? `${fitnessData.details.calories} kcal`
                                : "—"}
                        </h1>
                    </div>

                    <div className="workout bg-amber-50 h-40 w-full md:w-90 rounded-xl px-2 pt-2">
                        <div className="head text-black flex justify-between px-1 pt-2 pl-4 md:pl-7">
                            <h1 className="text-[28px] md:text-[39px] font-bold tracking-wider font1">
                                WORKOUT
                            </h1>
                            <Dumbbell className="text-blue-500 h-9 w-9 md:h-11 md:w-11 p-2 border-blue-500 border-2 rounded-full" />
                        </div>
                        <h1 className="text-black pl-4 md:pl-7 font-thin text-4xl md:text-6xl mt-1 font2">
                            {fitnessData.details.burned
                                ? `${fitnessData.details.burned} kcal`
                                : "—"}
                        </h1>
                    </div>
                </div>

                <div className="right w-full mt-6 md:mt-12 bg-amber-50 rounded-2xl px-6 md:px-10 py-6">
                    <h1 className="text-black font-extralight text-xl md:text-2xl tracking-wider font2">
                        {editingId ? "EDIT DETAILS" : "ADD DETAILS"}
                    </h1>
                    <h1 className="bg-black w-28 md:w-32 h-[3px] rounded-full"></h1>

                    <div className="mt-6 md:mt-10 flex flex-col gap-4 md:gap-5">
                        <div>
                            <label className="block text-black text-xs md:text-sm font-bold mb-1 uppercase">
                                Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                className="w-full border text-black/55 border-black/20 rounded-lg px-3 py-2 text-sm md:text-base"
                                value={fitnessData.details.date}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-black text-xs md:text-sm font-bold mb-1 uppercase">
                                Food Items
                            </label>
                            <div className="flex w-full gap-4">
                                <input
                                    type="text"
                                    name="fooditems"
                                    placeholder="e.g., Oats, Milk, Banana"
                                    value={fitnessData.details.fooditems}
                                    onChange={handleChange}
                                    className="w-full border border-black/20 rounded-lg px-3 py-2 text-sm md:text-base text-black/55"
                                />
                                <select
                                    name="mealType"
                                    value={fitnessData.details.mealType || ""}
                                    onChange={handleChange}
                                    className="w-[180px] border border-black/20 rounded-lg px-3 py-2 text-sm md:text-base text-black/55 bg-white"
                                >
                                    <option value="" disabled>
                                        Meal Type
                                    </option>
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Lunch">Lunch</option>
                                    <option value="Dinner">Dinner</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-black text-xs md:text-sm font-bold mb-1 uppercase">
                                Calories (kcal) consumed
                            </label>
                            <input
                                type="number"
                                name="calories"
                                placeholder="e.g., 450"
                                value={fitnessData.details.calories}
                                onChange={handleChange}
                                className="w-full border border-black/20 rounded-lg px-3 py-2 text-sm md:text-base text-black/55"
                            />
                        </div>

                        <div>
                            <label className="block text-black text-xs md:text-sm font-bold mb-1 uppercase">
                                Workout
                            </label>
                            <input
                                type="text"
                                name="workout"
                                placeholder="e.g., Running, Cycling"
                                value={fitnessData.details.workout}
                                onChange={handleChange}
                                className="w-full border border-black/20 rounded-lg px-3 py-2 text-sm md:text-base text-black/55"
                            />
                        </div>

                        <div>
                            <label className="block text-black text-xs md:text-sm font-bold mb-1 uppercase">
                                Calories burned
                            </label>
                            <input
                                type="number"
                                name="burned"
                                placeholder="e.g., 450"
                                value={fitnessData.details.burned}
                                onChange={handleChange}
                                className="w-full border border-black/20 rounded-lg px-3 py-2 text-sm md:text-base text-black/55"
                            />
                        </div>

                        <div>
                            <label className="block text-black text-xs md:text-sm font-bold mb-1 uppercase">
                                Workout Duration (mins)
                            </label>
                            <input
                                type="number"
                                name="duration"
                                placeholder="e.g., 60"
                                value={fitnessData.details.duration}
                                onChange={handleChange}
                                className="w-full border border-black/20 rounded-lg px-3 py-2 text-sm md:text-base text-black/55"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="btns bg-black px-20 pb-9 rounded-2xl flex items-center justify-center gap-4 md:gap-8 w-full md:-mt-7 -mt-10 pt-9 md:pt-0">
                <button
                    onClick={resetForm}
                    className="bg-red-900 text-amber-50 font-semibold py-2 w-1/2 rounded-lg hover:bg-red-900/90 transition text-sm md:text-base"
                >
                    Reset
                </button>

                <button
                    onClick={handleSubmit}
                    className="bg-green-900 text-amber-50 font-semibold py-2 w-1/2 rounded-lg hover:bg-green-900/90 transition text-sm md:text-base"
                >
                    {editingId ? "Update" : "Save"}
                </button>
            </div>


            <div className=" bg-black text-amber-50 rounded-lg p-6 shadow border md:mt-8 mt-10">
                <h2 className="text-xl font-bold mb-4 text-amber-50">Saved Fitness Logs <span className="md:opacity-0 opacity-100 font-light ml-3">(Scroll Right)</span></h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-black border">
                        <thead className="bg-gray-100 border-b">
                            <tr>
                                <th className="p-3">Date</th>
                                <th className="p-3">Meal</th>
                                <th className="p-3">Food Items</th>
                                <th className="p-3">Calories</th>
                                <th className="p-3">Workout</th>
                                <th className="p-3">Burned</th>
                                <th className="p-3">Duration</th>
                                <th className="p-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allData.map((item) => (
                                <tr key={item.id} className="border-b bg-amber-50 hover:bg-gray-50">
                                    <td className="p-3">{item.date}</td>
                                    <td className="p-3">{item.mealType}</td>
                                    <td className="p-3 capitalize">{item.fooditems}</td>
                                    <td className="p-3">{item.calories}</td>
                                    <td className="p-3">{item.workout}</td>
                                    <td className="p-3">{item.burned}</td>
                                    <td className="p-3">{item.duration}</td>
                                    <td className="p-3 flex justify-center gap-3">
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="bg-red-700 text-white px-3 py-1 rounded hover:bg-red-800"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Form;
