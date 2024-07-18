import { PrismaClient } from "@prisma/client";

class Database{


    private databaseConnection = new PrismaClient() 

    
    async connect(){

        return await this.databaseConnection.$connect();

    }

    async disconnect(){
        return await this.databaseConnection.$disconnect();
    }

    tables(){
        return this.databaseConnection
    }

}

export {Database}