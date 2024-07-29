import { Database } from "../database/databaseConnection";


class ExperienceRepository{

    private db = new Database()

    async up(data: any){ 
        await this.db.tables().experience.create({
            data
        });
    }

    async getAll(){
        
        return await this.db.tables().experience.findMany({
            orderBy: {
                period: "desc"
            }});

    }

}

export default ExperienceRepository