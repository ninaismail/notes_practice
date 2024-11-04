import { useContext, useEffect, useState } from "react";
import AddNoteForm from "./AddNoteForm";
import NoteSkeleton from "./UI/NoteSkeleton";
import { NoteContext } from "../context/NotesContext";

const MyDay = () => {
    const { notes, setNotes, optimisticNotes, addOptimisticNote} = useContext(NoteContext);

    const [open, setOpen] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    console.log(notes)

    const fetchData = async () => {
        const axios = (await import("axios")).default;
        await axios.get('https://react-refresher-e0f10-default-rtdb.firebaseio.com/notes/data.json')
            .then(function (response) {
                const fetchedNotes = Object.entries(response.data || {}).map(([id, note]) => ({ id, ...note }));
                setNotes(prev => ({
                    ...prev,
                    fetchedNotes
                }));
            }).catch((error) => {
                console.log(error)
            })
        setIsLoading(false)
    }
    useEffect(() => {
        fetchData(); // Fetch notes on component mount
    }, []);
        return (
        <section className="pt-40 2xl:w-8/12 w-10/12 mx-auto">
            <h1 className="lg:text-4xlmd:text-3xl sm:text-2xl text-xl font-bold tracking-wider text-gray-900 mb-6">My Notes for the day!</h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                <button
                    className="p-6 bg-blue-100 rounded-2xl shadow min-h-[264px]"
                    onClick={() => setOpen(true)}
                >
                    <h1 className="grid place-content-center 2xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold tracking-tight text-gray-900 rounded-full shadow hover:shadow-2xl bg-white border-white transform duration-300 hover:scale-105 px-4 py-3">
                        <span>+</span>
                    </h1>
                </button>
                {isLoading && <NoteSkeleton cards={2} />}
                {optimisticNotes.fetchedNotes && <>
                {Array.isArray(optimisticNotes.fetchedNotes) && optimisticNotes.fetchedNotes.map((item, i) => (
                 <div
                    key={i} 
                    className="relative w-full p-6 space-y-3 rounded-2xl shadow min-h-[264px]"
                >
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                    {item?.title}
                    </h1>
                    <p className="font-normal text-gray-800 line-clamp-4">
                        {item?.content}
                    </p>
                    <hr/> 
                    <a role="button" href={`${item?.id}`} className="absolute px-4 py-3 flex justify-center items-center w-fit bottom-6 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700">
                        Learn More
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
                ))}
                </>}
            </div>
            {open === true ? (
                <AddNoteForm onClose={() => setOpen(false)} fetchData={fetchData}/>
            ) : (
                ""
            )}

        </section>
    );
};

export default MyDay;
