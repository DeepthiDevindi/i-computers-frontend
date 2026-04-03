import { createClient } from "@supabase/supabase-js";

let url = "https://ysgolzmngyxazjwnhnlt.supabase.co";
let key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzZ29sem1uZ3l4YXpqd25obmx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3ODc0NDQsImV4cCI6MjA5MDM2MzQ0NH0.ducdKN2cHC-4hA9e0EwDq9qftXobv6sZZYXzO_p5B20";

const supabase = createClient(url, key);

export default function uploadMedia(file) {

    return new Promise(

        (resolve, reject) => {

            if (file==null) {
                return reject("No file provided");
            }else{

                const timeStamp = new Date().getTime();
                const fileName = timeStamp + "_" + file.name;
                supabase.storage.from("images").upload(fileName, file, {
                    upsert : false,
                    cacheControl : "3600",
                }).then((res) => {
                    const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
                    return resolve(publicUrl);
                }).catch((err) => {
                    return reject(err);
                });
            
            }
        }
    )
}