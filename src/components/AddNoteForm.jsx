import { useState } from "react";
import Popup from "./UI/Popup"

const AddNoteForm = ({ onClose }) => {
    const initialData = {
        title: "",
        slug: "",
        date: new Date().toISOString().split("T")[0],
        content: "",
    };
    const [formData, setFormData] = useState(initialData);
    const [loading, setLoading] = useState(null);

    const onChange = (e) => {
        const { name, value } = e.target;

        if (name === "title") {
            const generatedSlug = value.trim().toLowerCase().replace(/\s+/g, "-");
            setFormData((prevData) => ({
                ...prevData,
                title: value,
                slug: generatedSlug,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const axios = (await import("axios")).default;
        const data = {
                title: formData.title,
                slug: formData.slug,
                date: formData.date,
                content: formData.content,                
        };
        await axios.post('https://react-refresher-e0f10-default-rtdb.firebaseio.com/notes/data.json', data)
            .then(function (response) {
                console.log(response.data);
                setFormData(initialData);
            }).catch((error) => {
                console.log(error)
            })
        setLoading(false);
    };

    return (
        <Popup onClose={onClose}>
            <form onSubmit={onSubmit} className="grid grid-cols-2 gap-10 p-6">
                <div className="col-span-1 w-full space-y-2">
                <label className="text-gray-800">Title:</label>
                <input type="text" id="title" name="title"
                placeholder="Write your note's title..." aria-labelledby="Enter your notes's title"
                value={formData.title}
                onChange={onChange}
                required
                className='block px-4 py-3 0 w-full rounded-lg text-gray-800 border border-gray-400 appearance-none outline-none focus:ring-0 focus:border-blue-200'/>          
                </div>            
                <div className="col-span-1 w-full space-y-2">
                <label className="text-gray-800">Slug:</label>
                <input type="text" id="slug" name="slug"
                placeholder="No Need to do anything, just wait..." aria-labelledby="No Need to do anything, just wait"
                value={formData.slug}
                onChange={onChange}
                required
                className='block px-4 py-3 0 w-full rounded-lg text-gray-800 border border-gray-400 appearance-none outline-none focus:ring-0 focus:border-blue-200'/>          
                </div>  
                <div className="col-span-2 w-full space-y-2">
                <label className="text-gray-800">Date:</label>
                <input type="text" id="date" name="date"
                placeholder="Note's date..." aria-labelledby="Enter your notes's date"
                value={formData.date}
                disabled
                onChange={onChange}
                required
                className='block px-4 py-3 0 w-full rounded-lg text-gray-800 border border-gray-400 appearance-none outline-none focus:ring-0 focus:border-blue-200'/>          
                </div>
                <div class="w-full col-span-2 space-y-2">
                <label className="text-gray-800">Content:</label>
                <textarea id="content" name="content" rows="10" aria-labelledby="Type out your content"
                placeholder="What's your note about?" 
                value={formData.content}
                onChange={onChange}
                required
                className='block px-4 py-3 0 w-full rounded-lg text-gray-800 border border-gray-400 appearance-none outline-none focus:ring-0 focus:border-blue-200'/>          
                </div>
                <div className="col-span-2 w-full space-y-2">
                <hr/>
                <button aria-label="send your content" class="cursor-pointer w-fit text-nowrap relative z-[2] px-4 py-3 text-gray-800 font-[400] text-center rounded-[8px] shadow-sm bg-blue-200 hover:brightness-125 transition-all duration-400">
                    {loading === true ?  'Loading...' : 'Add Note'}
                    </button>
                </div>            
            </form>     
        </Popup>
    );
}

export default AddNoteForm;
