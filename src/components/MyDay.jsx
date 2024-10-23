import { useContext, useState } from "react";
import AddNoteForm from "./AddNoteForm";
import { AuthContext } from "../context/AuthContext";

const MyDay = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    const [open, setOpen] = useState(null);
    const [notes, setNotes] = useState([]);
    console.log(notes)

    const fetchData = async () => {
        const axios = (await import("axios")).default;
        await axios.get('https://react-refresher-e0f10-default-rtdb.firebaseio.com/notes/data.json')
            .then(function (response) {
                const fetchedNotes = Object.entries(response.data || {}).map(([id, note]) => ({ id, ...note }));
                setNotes(fetchedNotes);
            }).catch((error) => {
                console.log(error)
            })
    }

    fetchData()
    
    return (
        <section className="pt-40 2xl:w-8/12 w-10/12 mx-auto">
            {isLoggedIn === true ?
            <>
            <h1 className="lg:text-4xlmd:text-3xl sm:text-2xl text-xl font-bold tracking-wider text-gray-900 mb-6">My Notes for the day!</h1>
            <div className="grid grid-cols-4 gap-4">
                <button
                    className="lg:col-span-1 sm:col-span-2 col-span-4 aspect-square p-4 bg-blue-100 rounded-lg shadow"
                    onClick={() => setOpen(true)} // Corrected onClick placement
                >
                    <h5 className="2xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold tracking-tight text-gray-900 rounded-full p-4 bg-white backdrop-blur-lg">
                        +
                    </h5>
                </button>

                {Array.isArray(notes) && notes.map((item, i) => (
                    <div key={i}
                        className="lg:col-span-1 sm:col-span-2 col-span-4 aspect-square p-4 bgblue-100nded-lg shadow">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 rounded-full">
                            {item?.title}
                        </h5>
                        <div className="relative">
                            <p className="font-normal max-h-10 text-gray-800">
                                {item?.content}
                            </p>
                            <div className="backdrop-blur-lg absolute bottom-10 left-0" />
                            <a href={`${item?.id}`} className="mx-auto px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            {open === true ? (
                <AddNoteForm onClose={() => setOpen(false)} />
            ) : (
                ""
            )}
            </>
            : 
            <h1 className="lg:text-4xlmd:text-3xl sm:text-2xl text-xl font-bold tracking-wider text-gray-900 mb-6">Please Log in</h1>
        }

            
        </section>
    );
};

export default MyDay;
