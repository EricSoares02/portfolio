import axios from "axios";

const api_url = process.env.NEXT_PUBLIC_API_URL;

async function getProject(id:string){

    const {data} = await axios.get(`${api_url}project/${id}`);
    return data
 }

 export {getProject}