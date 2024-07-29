import axios from "axios"

const api_url = process.env.NEXT_PUBLIC_API_URL;

console.info(api_url)

async function getHardSkills(){

   const {data} = await axios.get(`${api_url}skills`);
   return data
}

async function getProjects(){

    const {data} = await axios.get(`${api_url}project/get-all`);
    return data
}

async function getExperiences() {
    const {data} = await axios.get(`${api_url}experience`);
    return data
}

export {getHardSkills, getProjects, getExperiences}