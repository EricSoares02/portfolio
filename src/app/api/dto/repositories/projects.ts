import { Database } from "../database/databaseConnection";


class ProjectsRepository{

    private db = new Database()

    async up(data: any){
        
        await this.db.tables().projects.create({
            data
        });

    }

    async getById(id: string){
        
        return await this.db.tables().projects.findFirst({
            where:{
                id
            }
        })

    }


    async getAll(){

        return await this.db.tables().projects.findMany();

    }

}

export default ProjectsRepository