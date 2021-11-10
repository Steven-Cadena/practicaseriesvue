import Global from './../components/Global';
import axios from 'axios';
export default class ServiceSeries{
    getSeries(){
        return new Promise(function(resolve){
            var request = "/api/series";
            var url = Global.urlseries + request;
            axios.get(url).then(res=>{
                var series = res.data;
                resolve(series);
            });
        })
    }
}