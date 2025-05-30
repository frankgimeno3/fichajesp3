import apiClient from "../apiClient.js";

export class TimeLogService{
    static async createTimeLog(type, comment){
        return apiClient.post('/api/v1/time-log',{
            type,
            comment
        })
    }

    static async getTimeLogs(afterTime, beforeTime){
        return apiClient.get('/api/v1/time-logs',{
            params:{
                afterTime,
                beforeTime
            }
        })
    }
}