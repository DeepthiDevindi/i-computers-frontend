import { useState } from "react";
import uploadMedia from "../src/utils/mediaUpload";
export default function TestPage() {

    const [file, setFile] = useState(null);

    async function handleSubmit() {
        
        try {

            const url = await uploadMedia(file);
            console.log(url);

        } catch (err) {
            console.log(err);
        }

        
    }

    return (
        <div className="w-full h-screen flex items-center justify-center bg-primary text-secondary">
            <input onChange={
                (e) => {
                    setFile(e.target.files[0]);
                }
            } type="file" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}