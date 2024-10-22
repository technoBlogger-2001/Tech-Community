import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../storage.service";
import { map } from 'rxjs/operators'
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private storageService: StorageService) { }


  loginUser(data:any) {
    return this.http.post(environment.apiUrl + "login/signin",data);
  }

  doLogin(userData: { username: String; password: String; type: any}) {
    return this.http
      .post(environment.apiUrl + 'login/signin', userData)
      .pipe(
        map((data: any) => {

          if (data["error"]) {
            return data;
          } else {
            var bytes = CryptoJS.AES.decrypt(data["Empdata"], "KTL@123456");
            // var Empdata = data["Empdata"];
            var bytes = CryptoJS.AES.decrypt(data["Empdata"], "KTL@123456");
            var Empdata = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            console.log('data=',data);
            console.log('Empdata=',Empdata);
            var bytes1 = CryptoJS.AES.decrypt(data["token"], "KTL@123456");
            // var TokenData = data["token"];
            var bytes1 = CryptoJS.AES.decrypt(data["token"], "KTL@123456");
            var TokenData = JSON.parse(bytes1.toString(CryptoJS.enc.Utf8));

            if (data["machine_ip"]) {
              let machineIpSplit = data['machine_ip'].split(':');
              if (machineIpSplit.length >1) {
                data['machine_ip'] = machineIpSplit[0]
              }

              this.storageService.secureStorage.setItem("token", TokenData);
              this.storageService.secureStorage.setItem(
                "machine_ip",
                data["machine_ip"]
              );
              this.storageService.secureStorage.setItem(
                "machine_name",
                data["machine_name"]
              );
              this.storageService.secureStorage.setItem(
                "userId",
                Empdata["emp_id"]
              );
              this.storageService.secureStorage.setItem(
                "userName",
                Empdata["emp_name"]
              );
              this.storageService.secureStorage.setItem(
                "empRole",
                Empdata["emp_role"]
              );
              this.storageService.secureStorage.setItem(
                "department",
                Empdata["emp_department"]
              );
              this.storageService.secureStorage.setItem(
                "companyName",
                Empdata["emp_company"]
              );
              this.storageService.secureStorage.setItem(
                "emp_authentication_type",
                Empdata["emp_authentication_type"]
              );

              sessionStorage.setItem('department',  Empdata["emp_department"]);
              sessionStorage.setItem('location',  Empdata["emp_company"]);
              this.storageService.secureStorage.setItem("userIds",   Empdata["id"]);
            }
            return data;
          }
        })
      );
  }
}
