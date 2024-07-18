import { Database } from "../database/databaseConnection";


class ProjectsRepository{

    private db = new Database()

    async up(data: any){
        await this.db.connect();
        this.db.tables().projects.create({
            data
        }).finally(()=>{
            this.db.disconnect();
        });

    }

    async getById(id: string){
        
        await this.db.connect();
        return this.db.tables().projects.findFirst({
            where:{
                id
            }
        }).finally(()=>{
            this.db.disconnect();
        });

    }


    async getAll(){
        
        await this.db.connect();
        return this.db.tables().projects.findMany().finally(()=>{
            this.db.disconnect();
        });

    }

}

export default ProjectsRepository