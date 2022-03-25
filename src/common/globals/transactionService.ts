import { Injectable, Scope } from "@nestjs/common";
import mongoose from 'mongoose';

@Injectable({ scope: Scope.REQUEST })
export class TransactionService {

    private _session: mongoose.ClientSession;
    public getSession(): mongoose.ClientSession{    
        return this._session;
    }
    public initSession(session: mongoose.ClientSession ){    
         this._session = session;
    }

}