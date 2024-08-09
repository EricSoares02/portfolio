import axios from "axios"

const api_url = process.env.NEXT_PUBLIC_API_URL;


async function getHardSkills(){

   const {data} = await axios.get(`${api_url}api/skills`);
   return data
}

async function getProjects(){

    const {data} = await axios.get(`${api_url}api/projects`);
    return data
}

async function getExperiences() {
    const {data} = await axios.get(`${api_url}api/experience`);
    return data
}

export {getHardSkills, getProjects, getExperiences}