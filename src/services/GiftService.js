import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"




class GiftService{


    async getGifts(){
        const res = await api.get('api/gifts')
        logger.log('Getting them gifts', res.data)
        AppState.gifts = res.data.map(g => new Gift(g))
    }







}


export const giftService = new GiftService()