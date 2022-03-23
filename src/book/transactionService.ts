import { Injectable, Scope } from "@nestjs/common";
import mongoose from 'mongoose';

@Injectable({ scope: Scope.REQUEST })
export class TransactionService {

    private _session: mongoose.ClientSession;

    public async initSession() {
        console.log("Vao init")
        if (!this._session) {
            console.log("Vao session")
            const session = await mongoose.startSession();
            this._session = session;
            return
        }        
        console.log("Ra init")
    }
    public getSession(): mongoose.ClientSession{    
        return this._session;
    }
    public setSession(session: mongoose.ClientSession ){    
         this._session = session;
    }

}