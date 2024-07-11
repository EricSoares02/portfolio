import axios from "axios"

const api_url = process.env.NEXT_PUBLIC_API_URL;


async function getHardSkills(){

   const {data} = await axios.get(`${api_url}hard-skills`);
   return data
}

async function getProjects(){

    const {data} = await axios.get(`${api_url}projects`);
    return data
}

async function getExperiences() {
    const {data} = await axios.get(`${api_url}experience`);
    return data
}

export {getHardSkills, getProjects, getExperiences}