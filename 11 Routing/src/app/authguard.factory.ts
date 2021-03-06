export class AuthService {
  loggedIn = true;

  isAuthenticated():Promise<boolean> {
    console.log("Auth Guard Called....")
    const promise:Promise<boolean> = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 2000);
      }
    );
    return promise;
  }


}


